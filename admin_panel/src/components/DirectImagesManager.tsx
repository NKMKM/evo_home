import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  RefreshCw,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  Download,
  Copy,
  Search
} from 'lucide-react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  size?: string;
  exists?: boolean;
  url?: string;
}

interface DirectImagesManagerProps {
  pageId: string;
  pageTitle: string;
  onClose: () => void;
}

export function DirectImagesManager({ pageId, pageTitle, onClose }: DirectImagesManagerProps) {
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
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    fetchImages();
  }, [pageId]);

  const fetchImages = async () => {
  try {
  setLoading(true);
  console.log(`🔄 Caricamento immagini per la pagina: ${pageId}`);
      
      // Прямой запрос к API
      const response = await fetch(`${backendUrl}/api/pages/${pageId}/images`, {
        credentials: 'include'
      });
      
  console.log(`📡 Risposta API: ${response.status} ${response.statusText}`);
      
      if (response.ok) {
        const data = await response.json();
  console.log(`📊 Dati ricevuti:`, data);
        
        const imagesWithUrls = data.map((img: ImageData) => ({
          ...img,
          url: `${backendUrl}/images/${img.src}`
        }));
        
        setImages(imagesWithUrls);
  console.log(`✅ Caricate ${imagesWithUrls.length} immagini`);
      } else {
  console.error(`❌ Errore API: ${response.status}`);
        const errorText = await response.text();
  console.error('Risposta server:', errorText);
  showMessage('error', `Errore API: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error('❌ Errore durante il caricamento delle immagini:', error);
      showMessage('error', `Errore di rete: ${error instanceof Error ? error.message : 'Errore sconosciuto'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (imageSrc: string) => {
    console.log(`❌ Errore caricamento immagine: ${imageSrc}`);
    setImageErrors(prev => new Set([...prev, imageSrc]));
  };

  const handleImageLoad = (imageSrc: string) => {
    console.log(`✅ Immagine caricata: ${imageSrc}`);
    setImageErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageSrc);
      return newSet;
    });
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
        setImages(images.map(img => img.id === imageId ? { ...result.image, url: `${backendUrl}/images/${result.image.src}` } : img));
        setEditingImage(null);
        showMessage('success', 'Immagine aggiornata');
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Errore aggiornamento immagine');
      }
    } catch (error) {
      console.error('Errore durante l\'aggiornamento dell\'immagine:', error);
      showMessage('error', error instanceof Error ? error.message : 'Errore aggiornamento immagine');
    }
  };

  const addImage = async () => {
    if (!newImage.src || !newImage.alt) {
      showMessage('error', 'I campi src e alt sono obbligatori');
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
        const newImageWithUrl = { ...result.image, url: `${backendUrl}/images/${result.image.src}` };
        setImages([...images, newImageWithUrl]);
        setNewImage({ src: '', alt: '', title: '', description: '' });
        setShowAddForm(false);
        showMessage('success', 'Immagine aggiunta');
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Errore aggiunta immagine');
      }
    } catch (error) {
      console.error('Errore durante l\'aggiunta dell\'immagine:', error);
      showMessage('error', error instanceof Error ? error.message : 'Errore aggiunta immagine');
    }
  };

  const deleteImage = async (imageId: number) => {
    if (!confirm('Sei sicuro di voler eliminare questa immagine?')) {
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/pages/${pageId}/images/${imageId}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (response.ok) {
        setImages(images.filter(img => img.id !== imageId));
        showMessage('success', 'Immagine eliminata');
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Errore eliminazione immagine');
      }
    } catch (error) {
      console.error('Errore durante l\'eliminazione dell\'immagine:', error);
      showMessage('error', error instanceof Error ? error.message : 'Errore eliminazione immagine');
    }
  };

  const copyImageUrl = (image: ImageData) => {
    navigator.clipboard.writeText(image.url || '');
    showMessage('success', 'URL copiato negli appunti');
  };

  const downloadImage = (image: ImageData) => {
    const link = document.createElement('a');
    link.href = image.url || '';
    link.download = image.src;
    link.click();
  };

  const toggleImageSelection = (imageId: number) => {
    const newSelected = new Set(selectedImages);
    if (newSelected.has(imageId)) {
      newSelected.delete(imageId);
    } else {
      newSelected.add(imageId);
    }
    setSelectedImages(newSelected);
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const filteredImages = images.filter(img =>
    img.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    img.src.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Caricamento immagini...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-7xl w-full max-h-[95vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gray-50">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Immagini: {pageTitle}
            </h2>
            <p className="text-sm text-gray-500">
              {images.length} immagini • {selectedImages.size} selezionate
            </p>
          </div>
          <div className="flex items-center space-x-2">
              <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
              title={viewMode === 'grid' ? 'Elenco' : 'Griglia'}
            >
              {viewMode === 'grid' ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
            <button
              onClick={fetchImages}
              className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
              title="Aggiorna"
            >
              <RefreshCw size={20} />
            </button>
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Aggiungi
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
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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
        </AnimatePresence>

        {/* Debug Info */}
          <div className="mx-6 mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="text-sm font-medium text-yellow-800 mb-2">🔍 Informazioni di debug</h3>
          <div className="text-xs text-yellow-700 space-y-1">
            <div>Backend URL: {backendUrl}</div>
            <div>API Endpoint: {backendUrl}/api/pages/{pageId}/images</div>
            <div>Static URL: {backendUrl}/images/</div>
            <div>Immagini caricate: {images.length}</div>
            <div>Errori di caricamento: {imageErrors.size}</div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-6 border-b bg-gray-50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск изображений..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
            
            {selectedImages.size > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  Выбрано: {selectedImages.size}
                </span>
                <button
                  onClick={() => setSelectedImages(new Set())}
                  className="px-3 py-1 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm"
                >
                  Отменить выбор
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Add Form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
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
                    placeholder="design.jpg"
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
        </AnimatePresence>

        {/* Images Display */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {filteredImages.length > 0 ? (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" 
              : "space-y-4"
            }>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm ${
                    selectedImages.has(image.id) ? 'ring-2 ring-blue-500' : ''
                  } ${viewMode === 'list' ? 'flex' : ''}`}
                >
                  {/* Selection Checkbox */}
                  <div className="absolute top-2 left-2 z-10">
                    <input
                      type="checkbox"
                      checked={selectedImages.has(image.id)}
                      onChange={() => toggleImageSelection(image.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </div>

                  {/* Image Preview */}
                  <div className={`${viewMode === 'list' ? 'w-48 h-32' : 'aspect-video'} bg-gray-100 flex items-center justify-center relative`}>
                    {image.exists !== false ? (
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-auto object-contain"
                        onError={() => handleImageError(image.src)}
                        onLoad={() => handleImageLoad(image.src)}
                      />
                    ) : null}
                    
                    {imageErrors.has(image.src) && (
                      <div className="flex flex-col items-center justify-center text-red-400">
                        <ImageIcon className="w-12 h-12 mb-2" />
                        <span className="text-sm">Ошибка загрузки</span>
                        <span className="text-xs text-center px-2">{image.src}</span>
                      </div>
                    )}
                    
                    {image.exists === false && !imageErrors.has(image.src) && (
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <ImageIcon className="w-12 h-12 mb-2" />
                        <span className="text-sm">Файл не найден</span>
                        <span className="text-xs text-center px-2">{image.src}</span>
                      </div>
                    )}
                  </div>

                  {/* Image Info */}
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
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
                      <div>
                        <span className="text-xs text-gray-500">URL:</span>
                        <p className="text-xs text-blue-600 truncate font-mono">{image.url}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => setEditingImage(image)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Редактировать"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => copyImageUrl(image)}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Копировать URL"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => downloadImage(image)}
                          className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
                          title="Скачать"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteImage(image.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Удалить"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-xs text-gray-500">
                        {image.exists === false ? 'Файл отсутствует' : 
                         imageErrors.has(image.src) ? 'Ошибка загрузки' : 'OK'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {searchTerm ? 'Изображения не найдены' : 'Нет изображений'}
              </h3>
              <p className="text-gray-500 mb-4">
                {searchTerm 
                  ? 'Попробуйте изменить поисковый запрос'
                  : 'На этой странице пока нет изображений'
                }
              </p>
              {!searchTerm && (
                <button
                  onClick={() => setShowAddForm(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Добавить первое изображение
                </button>
              )}
            </div>
          )}
        </div>

        {/* Edit Modal */}
        <AnimatePresence>
          {editingImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}




