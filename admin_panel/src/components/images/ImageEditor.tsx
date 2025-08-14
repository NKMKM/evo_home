import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RotateCw, ZoomIn, ZoomOut, Download, Save, Crop } from 'lucide-react';

interface ImageEditorProps {
  imageFile: File;
  onSave: (editedImage: File) => void;
  onCancel: () => void;
  originalImagePath?: string;
}

export function ImageEditor({ imageFile, onSave, onCancel, originalImagePath }: ImageEditorProps) {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [quality, setQuality] = useState(80);
  const [maxWidth, setMaxWidth] = useState(1920);
  const [maxHeight, setMaxHeight] = useState(1080);
  const [isCropping, setIsCropping] = useState(false);
  const [cropArea, setCropArea] = useState({ x: 0, y: 0, width: 100, height: 100 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const url = URL.createObjectURL(imageFile);
    setImageUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.1));
  const handleRotate = () => setRotation(prev => (prev + 90) % 360);

  const processImage = (): File => {
    const canvas = canvasRef.current;
    if (!canvas || !imageRef.current) throw new Error('Canvas or image not available');

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas context not available');

    const img = imageRef.current;
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    // Calculate new dimensions
    let newWidth = imgWidth;
    let newHeight = imgHeight;

    if (newWidth > maxWidth) {
      newHeight = (newHeight * maxWidth) / newWidth;
      newWidth = maxWidth;
    }
    if (newHeight > maxHeight) {
      newWidth = (newWidth * maxHeight) / newHeight;
      newHeight = maxHeight;
    }

    // Set canvas size
    canvas.width = newWidth;
    canvas.height = newHeight;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply transformations
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(zoom, zoom);
    ctx.drawImage(img, -imgWidth / 2, -imgHeight / 2, imgWidth, imgHeight);
    ctx.restore();

    // Convert to blob
    return new Promise<File>((resolve) => {
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
  };

  const handleSave = async () => {
    try {
      const processedImage = await processImage();
      onSave(processedImage);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Ошибка при обработке изображения');
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
      alert('Ошибка при скачивании изображения');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-800">Редактор изображений</h2>
            <button
              onClick={onCancel}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex h-[calc(90vh-120px)]">
            {/* Image Preview */}
            <div className="flex-1 p-4 overflow-auto">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center">
                <img
                  ref={imageRef}
                  src={imageUrl}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain"
                  style={{
                    transform: `scale(${zoom}) rotate(${rotation}deg)`,
                    transition: 'transform 0.2s ease-in-out',
                  }}
                />
                <canvas
                  ref={canvasRef}
                  className="hidden"
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            {/* Controls */}
            <div className="w-80 bg-gray-50 p-4 border-l border-gray-200 overflow-y-auto">
              <div className="space-y-6">
                {/* Image Info */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Информация</h3>
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>Имя: {imageFile.name}</p>
                    <p>Размер: {(imageFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    <p>Тип: {imageFile.type}</p>
                    {originalImagePath && <p>Путь: {originalImagePath}</p>}
                  </div>
                </div>

                {/* Zoom Controls */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Масштаб</h3>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleZoomOut}
                      className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50"
                    >
                      <ZoomOut size={16} />
                    </button>
                    <span className="text-sm text-gray-600 min-w-[60px] text-center">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 bg-white border border-gray-300 rounded hover:bg-gray-50"
                    >
                      <ZoomIn size={16} />
                    </button>
                  </div>
                </div>

                {/* Rotation */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Поворот</h3>
                  <button
                    onClick={handleRotate}
                    className="flex items-center space-x-2 p-2 bg-white border border-gray-300 rounded hover:bg-gray-50"
                  >
                    <RotateCw size={16} />
                    <span className="text-sm">Повернуть на 90°</span>
                  </button>
                  <p className="text-xs text-gray-500 mt-1">
                    Текущий угол: {rotation}°
                  </p>
                </div>

                {/* Crop */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Обрезка</h3>
                  <button
                    onClick={() => setIsCropping(!isCropping)}
                    className={`flex items-center space-x-2 p-2 border rounded ${
                      isCropping
                        ? 'bg-blue-50 border-blue-300 text-blue-700'
                        : 'bg-white border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <Crop size={16} />
                    <span className="text-sm">
                      {isCropping ? 'Отменить обрезку' : 'Включить обрезку'}
                    </span>
                  </button>
                </div>

                {/* Compression Settings */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Сжатие</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">
                        Качество: {quality}%
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
                        Максимальная ширина: {maxWidth}px
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
                        Максимальная высота: {maxHeight}px
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

                {/* Actions */}
                <div className="space-y-2">
                  <button
                    onClick={handleDownload}
                    className="w-full flex items-center justify-center space-x-2 p-2 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200"
                  >
                    <Download size={16} />
                    <span className="text-sm">Скачать</span>
                  </button>
                  
                  <button
                    onClick={handleSave}
                    className="w-full flex items-center justify-center space-x-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    <Save size={16} />
                    <span className="text-sm">Сохранить и заменить</span>
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