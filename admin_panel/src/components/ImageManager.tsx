import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Plus, 
  Image as ImageIcon, 
  AlertCircle, 
  CheckCircle,
  Crop
} from 'lucide-react';
import { ImageCropper } from './ImageCropper';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  size?: string;
  fullPath?: string;
  exists?: boolean;
}

interface ImageManagerProps {
  pageId: string;
  pageTitle: string;
  onClose: () => void;
}

export function ImageManager({ pageId, pageTitle, onClose }: ImageManagerProps) {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingImage, setEditingImage] = useState<ImageData | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newImage, setNewImage] = useState({
    src: '',
    alt: '',
    title: '',
    description: ''
  });
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showCropper, setShowCropper] = useState<{ imageUrl: string; imageId: number } | null>(null);

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  // Normalize an image src returned from backend/pages so we can build a correct URL
  const makeImageUrl = (src?: string | null) => {
    if (!src) return '';
    const s = String(src).replace(/\\/g, '/');
    if (/^https?:\/\//i.test(s)) return s;
    const cleaned = s.replace(/^\/+/, '').replace(/^images[\/]?/i, '').replace(/^\//, '');
    return `${backendUrl}/images/${cleaned}`;
  };

  useEffect(() => {
    fetchImages();
  }, [pageId]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${backendUrl}/api/pages/${pageId}/images`, {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        setImages(data);
        console.log(`Загружено ${data.length} изображений для страницы ${pageId}`);
      } else if (response.status === 401) {
        showMessage('error', 'Необходима авторизация для просмотра изображений');
      } else {
        const errorData = await response.json().catch(() => ({ error: 'Неизвестная ошибка' }));
        throw new Error(errorData.error || 'Ошибка загрузки изображений');
      }
    } catch (error) {
      console.error('Ошибка при загрузке изображений:', error);
      showMessage('error', error instanceof Error ? error.message : 'Ошибка загрузки изображений');
    } finally {
      setLoading(false);
    }
  };

  const updateImage = async (imageId: number, updates: Partial<ImageData>) => {
    try {
      const response = await fetch(`${backendUrl}/api/pages/${pageId}/images/${imageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(updates)
      });

      if (response.ok) {
        const result = await response.json();
        setImages(images.map(img => img.id === imageId ? result.image : img));
        setEditingImage(null);
        showMessage('success', `Изображение обновлено. Бэкап: ${result.backupPath}`);
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка обновления изображения');
      }
    } catch (error) {
      console.error('Ошибка при обновлении изображения:', error);
      showMessage('error', error instanceof Error ? error.message : 'Ошибка обновления изображения');
    }
  };

  const addImage = async () => {
    if (!newImage.src || !newImage.alt) {
      showMessage('error', 'Поля src и alt обязательны');
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/pages/${pageId}/images`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(newImage)
      });

      if (response.ok) {
        const result = await response.json();
        setImages([...images, result.image]);
        setNewImage({ src: '', alt: '', title: '', description: '' });
        setShowAddForm(false);
        showMessage('success', `Изображение добавлено. Бэкап: ${result.backupPath}`);
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка добавления изображения');
      }
    } catch (error) {
      console.error('Ошибка при добавлении изображения:', error);
      showMessage('error', error instanceof Error ? error.message : 'Ошибка добавления изображения');
    }
  };

  const deleteImage = async (imageId: number) => {
    if (!confirm('Вы уверены, что хотите удалить это изображение?')) {
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/pages/${pageId}/images/${imageId}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (response.ok) {
        const result = await response.json();
        setImages(images.filter(img => img.id !== imageId));
        showMessage('success', `Изображение удалено. Бэкап: ${result.backupPath}`);
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка удаления изображения');
      }
    } catch (error) {
      console.error('Ошибка при удалении изображения:', error);
      showMessage('error', error instanceof Error ? error.message : 'Ошибка удаления изображения');
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleCropSave = async (croppedImageBlob: Blob) => {
    if (!showCropper) return;

    try {
      // Создаем FormData для загрузки файла
      const formData = new FormData();
      formData.append('file', croppedImageBlob, 'cropped-image.jpg');
      formData.append('imagePath', images.find(img => img.id === showCropper.imageId)?.src || '');

      // Загружаем обрезанное изображение
      const uploadResponse = await fetch(`${backendUrl}/api/images/replace`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      });

      if (uploadResponse.ok) {
        const result = await uploadResponse.json();
        showMessage('success', `Изображение обрезано и сохранено. Бэкап: ${result.backupPath}`);
        setShowCropper(null);
        // Обновляем список изображений
        fetchImages();
      } else {
        throw new Error('Ошибка загрузки обрезанного изображения');
      }
    } catch (error) {
      console.error('Ошибка при сохранении обрезанного изображения:', error);
      showMessage('error', 'Ошибка сохранения обрезанного изображения');
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Загрузка изображений...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Управление изображениями: {pageTitle}
            </h2>
            <p className="text-sm text-gray-500">
              Найдено изображений: {images.length}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Добавить
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mx-6 mt-4 p-4 rounded-lg flex items-center ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle className="w-5 h-5 mr-2" />
            ) : (
              <AlertCircle className="w-5 h-5 mr-2" />
            )}
            {message.text}
          </motion.div>
        )}

        {/* Add Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mx-6 mt-4 p-4 bg-gray-50 rounded-lg"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4">Добавить новое изображение</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Путь к файлу</label>
                <input
                  type="text"
                  value={newImage.src}
                  onChange={(e) => setNewImage({ ...newImage, src: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="images/example.jpg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alt текст</label>
                <input
                  type="text"
                  value={newImage.alt}
                  onChange={(e) => setNewImage({ ...newImage, alt: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Описание изображения"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок</label>
                <input
                  type="text"
                  value={newImage.title}
                  onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Заголовок изображения"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
                <input
                  type="text"
                  value={newImage.description}
                  onChange={(e) => setNewImage({ ...newImage, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Подробное описание"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <button
                onClick={addImage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Добавить
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Отмена
              </button>
            </div>
          </motion.div>
        )}

        {/* Images Grid */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
                >
                  {/* Image Preview */}
                  <div className="aspect-video bg-gray-100 flex items-center justify-center">
                    {image.exists ? (
                      <img
                        src={makeImageUrl(image.src)}
                        alt={image.alt}
                        className="w-full h-auto object-contain"
                        onError={(e) => {
                          const imgEl = e.target as HTMLImageElement;
                          imgEl.style.display = 'none';
                          const next = imgEl.nextElementSibling as HTMLElement | null;
                          if (next && next.style) next.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="flex flex-col items-center justify-center text-gray-400" style={{ display: image.exists ? 'none' : 'flex' }}>
                      <ImageIcon className="w-12 h-12 mb-2" />
                      <span className="text-sm">Файл не найден</span>
                    </div>
                  </div>

                  {/* Image Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600">ID: {image.id}</span>
                      {image.size && (
                        <span className="text-xs text-gray-500">{image.size}</span>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-gray-500">Alt:</span>
                        <p className="text-sm text-gray-800 truncate">{image.alt}</p>
                      </div>
                      {image.title && (
                        <div>
                          <span className="text-xs text-gray-500">Title:</span>
                          <p className="text-sm text-gray-800 truncate">{image.title}</p>
                        </div>
                      )}
                      <div>
                        <span className="text-xs text-gray-500">Path:</span>
                        <p className="text-xs text-gray-600 truncate font-mono">{image.src}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setEditingImage(image)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Редактировать"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setShowCropper({ 
                              imageUrl: makeImageUrl(image.src), 
                              imageId: image.id 
                            })}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Обрезать"
                        >
                          <Crop className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteImage(image.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Удалить"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      {!image.exists && (
                        <span className="text-xs text-red-500">Файл отсутствует</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Нет изображений</h3>
              <p className="text-gray-500 mb-4">
                На этой странице пока нет изображений
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Добавить первое изображение
              </button>
            </div>
          )}
        </div>

        {/* Edit Modal */}
        {editingImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Редактировать изображение ID: {editingImage.id}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Alt текст</label>
                  <input
                    type="text"
                    value={editingImage.alt}
                    onChange={(e) => setEditingImage({ ...editingImage, alt: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Путь к файлу</label>
                  <input
                    type="text"
                    value={editingImage.src}
                    onChange={(e) => setEditingImage({ ...editingImage, src: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок</label>
                  <input
                    type="text"
                    value={editingImage.title}
                    onChange={(e) => setEditingImage({ ...editingImage, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Описание</label>
                  <textarea
                    value={editingImage.description}
                    onChange={(e) => setEditingImage({ ...editingImage, description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-end space-x-2 mt-6">
                <button
                  onClick={() => setEditingImage(null)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Отмена
                </button>
                <button
                  onClick={() => updateImage(editingImage.id, editingImage)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Image Cropper Modal */}
        {showCropper && (
          <ImageCropper
            imageUrl={showCropper.imageUrl}
            onSave={handleCropSave}
            onCancel={() => setShowCropper(null)}
          />
        )}
      </div>
    </div>
  );
}
