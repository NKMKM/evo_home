import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Save, X, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

interface ImageCropperProps {
  imageUrl: string;
  onSave: (croppedImageBlob: Blob) => void;
  onCancel: () => void;
}

export function ImageCropper({ imageUrl, onSave, onCancel }: ImageCropperProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 200, height: 200 });
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const handleImageLoad = useCallback(() => {
    if (imageRef.current) {
      const { naturalWidth, naturalHeight } = imageRef.current;
      setImageSize({ width: naturalWidth, height: naturalHeight });
      
      // Устанавливаем начальный размер обрезки
      const minSize = Math.min(naturalWidth, naturalHeight);
      setCrop({
        x: (naturalWidth - minSize) / 2,
        y: (naturalHeight - minSize) / 2,
        width: minSize,
        height: minSize
      });
      setImageLoaded(true);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - crop.x, y: e.clientY - crop.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !imageLoaded) return;
    
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    
    // Ограничиваем перемещение в пределах изображения
    const maxX = imageSize.width - crop.width;
    const maxY = imageSize.height - crop.height;
    
    setCrop(prev => ({
      ...prev,
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(0, Math.min(newY, maxY))
    }));
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleResize = (direction: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const startX = e.clientX;
    const startY = e.clientY;
    const startCrop = { ...crop };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const deltaY = moveEvent.clientY - startY;

      let newCrop = { ...startCrop };

      switch (direction) {
        case 'se':
          newCrop.width = Math.max(50, startCrop.width + deltaX);
          newCrop.height = Math.max(50, startCrop.height + deltaY);
          break;
        case 'sw':
          newCrop.x = Math.max(0, startCrop.x + deltaX);
          newCrop.width = Math.max(50, startCrop.width - deltaX);
          newCrop.height = Math.max(50, startCrop.height + deltaY);
          break;
        case 'ne':
          newCrop.y = Math.max(0, startCrop.y + deltaY);
          newCrop.width = Math.max(50, startCrop.width + deltaX);
          newCrop.height = Math.max(50, startCrop.height - deltaY);
          break;
        case 'nw':
          newCrop.x = Math.max(0, startCrop.x + deltaX);
          newCrop.y = Math.max(0, startCrop.y + deltaY);
          newCrop.width = Math.max(50, startCrop.width - deltaX);
          newCrop.height = Math.max(50, startCrop.height - deltaY);
          break;
      }

      // Ограничиваем размеры в пределах изображения
      if (newCrop.x + newCrop.width > imageSize.width) {
        newCrop.width = imageSize.width - newCrop.x;
      }
      if (newCrop.y + newCrop.height > imageSize.height) {
        newCrop.height = imageSize.height - newCrop.y;
      }

      setCrop(newCrop);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const cropImage = () => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Устанавливаем размеры canvas
    canvas.width = crop.width;
    canvas.height = crop.height;

    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Применяем трансформации
    ctx.save();
    
    // Поворот
    if (rotation !== 0) {
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
    }

    // Масштабирование
    if (scale !== 1) {
      ctx.scale(scale, scale);
    }

    // Рисуем обрезанную часть изображения
    ctx.drawImage(
      imageRef.current,
      crop.x, crop.y, crop.width, crop.height,
      0, 0, canvas.width, canvas.height
    );

    ctx.restore();

    // Конвертируем в blob
    canvas.toBlob((blob) => {
      if (blob) {
        onSave(blob);
      }
    }, 'image/jpeg', 0.9);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Обрезка изображения</h3>
          <div className="flex items-center space-x-2">
            <button
              onClick={cropImage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Save className="w-4 h-4 mr-2" />
              Сохранить
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="p-4 border-b bg-gray-50">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Масштаб:</label>
              <button
                onClick={() => setScale(Math.max(0.5, scale - 0.1))}
                className="p-1 text-gray-600 hover:text-gray-800"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-600 w-12 text-center">{Math.round(scale * 100)}%</span>
              <button
                onClick={() => setScale(Math.min(3, scale + 0.1))}
                className="p-1 text-gray-600 hover:text-gray-800"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">Поворот:</label>
              <button
                onClick={() => setRotation((rotation + 90) % 360)}
                className="p-1 text-gray-600 hover:text-gray-800"
              >
                <RotateCw className="w-4 h-4" />
              </button>
              <span className="text-sm text-gray-600 w-12 text-center">{rotation}°</span>
            </div>
          </div>
        </div>

        {/* Image Container */}
        <div className="p-4">
          <div className="relative inline-block">
            <div className="relative overflow-hidden border-2 border-gray-300 rounded-lg">
              <img
                ref={imageRef}
                src={imageUrl}
                alt="Crop preview"
                className="block max-w-full max-h-[400px]"
                style={{
                  transform: `scale(${scale}) rotate(${rotation}deg)`,
                  transformOrigin: 'center'
                }}
                onLoad={handleImageLoad}
                draggable={false}
              />
              
              {/* Crop Overlay */}
              {imageLoaded && (
                <div
                  className="absolute border-2 border-blue-500 bg-blue-500 bg-opacity-20 cursor-move"
                  style={{
                    left: crop.x,
                    top: crop.y,
                    width: crop.width,
                    height: crop.height
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                >
                  {/* Resize Handles */}
                  <div
                    className="absolute w-3 h-3 bg-blue-500 border border-white cursor-se-resize"
                    style={{ right: -6, bottom: -6 }}
                    onMouseDown={(e) => handleResize('se', e)}
                  />
                  <div
                    className="absolute w-3 h-3 bg-blue-500 border border-white cursor-sw-resize"
                    style={{ left: -6, bottom: -6 }}
                    onMouseDown={(e) => handleResize('sw', e)}
                  />
                  <div
                    className="absolute w-3 h-3 bg-blue-500 border border-white cursor-ne-resize"
                    style={{ right: -6, top: -6 }}
                    onMouseDown={(e) => handleResize('ne', e)}
                  />
                  <div
                    className="absolute w-3 h-3 bg-blue-500 border border-white cursor-nw-resize"
                    style={{ left: -6, top: -6 }}
                    onMouseDown={(e) => handleResize('nw', e)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hidden Canvas for Cropping */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
}


