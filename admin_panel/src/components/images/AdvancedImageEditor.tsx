import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCw, ZoomIn, ZoomOut, Download, Save, Crop, Undo, Redo, Settings } from 'lucide-react';
import ReactCrop, { Crop as CropType, PixelCrop, centerCrop, makeAspectCrop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

interface AdvancedImageEditorProps {
  imageFile: File;
  onSave: (editedImage: File) => void;
  onCancel: () => void;
  originalImagePath?: string;
}

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

export function AdvancedImageEditor({ imageFile, onSave, onCancel, originalImagePath }: AdvancedImageEditorProps) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [quality, setQuality] = useState(90);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1080);
  const [crop, setCrop] = useState<CropType>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [aspect, setAspect] = useState<number | undefined>(16 / 9);
  const [showSettings, setShowSettings] = useState(false);
  
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const url = URL.createObjectURL(imageFile);
    setImageUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const onImageLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }, [aspect]);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.1));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);

  const getCroppedImg = useCallback(
    async (
      image: HTMLImageElement,
      crop: PixelCrop,
      fileName: string,
    ): Promise<File> => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error('No 2d context');
      }

      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.imageSmoothingQuality = 'high';

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height,
      );

      return new Promise((resolve, reject) => {
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Canvas is empty'));
              return;
            }
            blob.name = fileName;
            const file = new File([blob], fileName, { type: imageFile.type });
            resolve(file);
          },
          imageFile.type,
          quality / 100,
        );
      });
    },
    [imageFile.type, quality],
  );

  const processImage = async (): Promise<File> => {
    if (!imgRef.current || !completedCrop) {
      throw new Error('Image or crop not available');
    }

    let processedImage = await getCroppedImg(
      imgRef.current,
      completedCrop,
      imageFile.name,
    );

    // Apply rotation and scaling if needed
    if (rotation !== 0 || zoom !== 1) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Canvas context not available');

      const img = new Image();
      const imgUrl = URL.createObjectURL(processedImage);
      
      await new Promise((resolve) => {
        img.onload = resolve;
        img.src = imgUrl;
      });

      // Calculate new dimensions
      let newWidth = img.width * zoom;
      let newHeight = img.height * zoom;

      if (newWidth > maxWidth) {
        newHeight = (newHeight * maxWidth) / newWidth;
        newWidth = maxWidth;
      }
      if (newHeight > maxHeight) {
        newWidth = (newWidth * maxHeight) / newHeight;
        newHeight = maxHeight;
      }

      canvas.width = newWidth;
      canvas.height = newHeight;

      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2, img.width, img.height);
      ctx.restore();

      processedImage = await new Promise<File>((resolve) => {
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const file = new File([blob], imageFile.name, {
                type: imageFile.type,
                lastModified: Date.now(),
              });
              resolve(file);
            }
          },
          imageFile.type,
          quality / 100
        );
      });

      URL.revokeObjectURL(imgUrl);
    }

    return processedImage;
  };

  const handleSave = async () => {
    try {
      const processedImage = await processImage();
      onSave(processedImage);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Errore durante l\'elaborazione dell\'immagine');
    }
  };

  const handleDownload = async () => {
    try {
      const processedImage = await processImage();
      const url = URL.createObjectURL(processedImage);
      const a = document.createElement('a');
      a.href = url;
      a.download = `edited_${imageFile.name}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Errore durante il download dell\'immagine');
    }
  };

  const aspectRatioOptions = [
    { label: 'Libero', value: undefined },
    { label: '1:1 (Quadrato)', value: 1 },
    { label: '4:3', value: 4 / 3 },
    { label: '16:9', value: 16 / 9 },
    { label: '3:2', value: 3 / 2 },
    { label: '2:3 (Ritratto)', value: 2 / 3 },
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-medium text-gray-800">Editor avanzato immagini</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded ${showSettings ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Settings size={20} />
              </button>
              <button
                onClick={onCancel}
                className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex h-[calc(95vh-80px)]">
            {/* Image Preview */}
            <div className="flex-1 p-4 overflow-auto bg-gray-100">
              <div className="relative bg-white rounded-lg overflow-hidden min-h-[500px] flex items-center justify-center shadow-lg">
                {imageUrl && (
                  <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={aspect}
                    minWidth={50}
                    minHeight={50}
                    keepSelection
                    className="max-w-full max-h-full"
                  >
                    <img
                      ref={imgRef}
                      src={imageUrl}
                      alt="Preview"
                      onLoad={onImageLoad}
                      style={{
                        transform: `scale(${zoom}) rotate(${rotation}deg)`,
                        transition: 'transform 0.2s ease-in-out',
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </ReactCrop>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className={`bg-gray-50 border-l border-gray-200 overflow-y-auto transition-all duration-300 ${
              showSettings ? 'w-96' : 'w-80'
            }`}>
              <div className="p-4 space-y-6">
                {/* Image Info */}
                <div className="bg-white p-3 rounded-lg border">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Informazioni</h3>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Nome: {imageFile.name}</p>
                    <p>Dimensione: {(imageFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    <p>Tipo: {imageFile.type}</p>
                    {originalImagePath && <p>Percorso: {originalImagePath}</p>}
                  </div>
                </div>

                {/* Aspect Ratio */}
                <div className="bg-white p-3 rounded-lg border">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Proporzioni</h3>
                  <select
                    value={aspect || ''}
                    onChange={(e) => setAspect(e.target.value ? Number(e.target.value) : undefined)}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  >
                    {aspectRatioOptions.map((option) => (
                      <option key={option.label} value={option.value || ''}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Zoom Controls */}
                <div className="bg-white p-3 rounded-lg border">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Scala</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleZoomOut}
                      className="p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
                    >
                      <ZoomOut size={16} />
                    </button>
                    <span className="text-sm text-gray-600 min-w-[60px] text-center">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
                    >
                      <ZoomIn size={16} />
                    </button>
                  </div>
                </div>

                {/* Rotation */}
                <div className="bg-white p-3 rounded-lg border">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Rotazione</h3>
                  <button
                    onClick={handleRotate}
                    className="flex items-center space-x-2 p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 w-full"
                  >
                    <RotateCw size={16} />
                    <span className="text-sm">Ruota di 90°</span>
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    Angolo attuale: {rotation}°
                  </p>
                </div>

                {/* Advanced Settings */}
                {showSettings && (
                  <div className="bg-white p-3 rounded-lg border">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Impostazioni avanzate</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">
                          Qualità: {quality}%
                        </label>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          value={quality}
                          onChange={(e) => setQuality(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-gray-600 mb-1">
                          Larghezza massima: {maxWidth}px
                        </label>
                        <input
                          type="range"
                          min="100"
                          max="4000"
                          step="100"
                          value={maxWidth}
                          onChange={(e) => setMaxWidth(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-gray-600 mb-1">
                          Altezza massima: {maxHeight}px
                        </label>
                        <input
                          type="range"
                          min="100"
                          max="4000"
                          step="100"
                          value={maxHeight}
                          onChange={(e) => setMaxHeight(Number(e.target.value))}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-2">
                  <button
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center space-x-2 p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
                  >
                    <Download size={16} />
                    <span className="text-sm">Scarica</span>
                  </button>
                  
                  <button
                    onClick={handleSave}
                    className="w-full flex items-center justify-center space-x-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <Save size={16} />
                    <span className="text-sm">Salva e sostituisci</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

