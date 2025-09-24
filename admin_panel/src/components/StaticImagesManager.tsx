import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon,  
  X, 
  RefreshCw,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle,
  Download,
  Copy,
  Search,
  ExternalLink
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

interface StaticImagesManagerProps {
  pageId: string;
  pageTitle: string;
  onClose: () => void;
}

// Статические данные страниц (копия из pages.json)
const PAGES_DATA = [
  {
    "id": "home",
    "title": "Главная",
    "url": "/",
    "images": [
      {
        "id": 1,
        "src": "images/design.jpg",
        "alt": "Дизайн интерьера",
        "title": "Современный дизайн",
        "description": "Профессиональный дизайн интерьера"
      },
      {
        "id": 2,
        "src": "images/discount.jpg",
        "alt": "Скидки на ремонт",
        "title": "Специальные предложения",
        "description": "Выгодные условия для клиентов"
      },
      {
        "id": 3,
        "src": "images/architector.jpg",
        "alt": "Архитектор",
        "title": "Наш архитектор",
        "description": "Опытный специалист"
      },
      {
        "id": 4,
        "src": "images/founder_main.png",
        "alt": "Основатель компании",
        "title": "Руководитель",
        "description": "Основатель EvoHome"
      },
      {
        "id": 5,
        "src": "images/home_start_bg.jpg",
        "alt": "Фон главной страницы",
        "title": "Главный фон",
        "description": "Фоновое изображение"
      },
      {
        "id": 6,
        "src": "images/calculator_bg_img.jpg",
        "alt": "Калькулятор ремонта",
        "title": "Калькулятор",
        "description": "Фон для калькулятора"
      },
      {
        "id": 7,
        "src": "images/reviews_bg.jpg",
        "alt": "Фон отзывов",
        "title": "Отзывы клиентов",
        "description": "Фоновое изображение для отзывов"
      },
      {
        "id": 8,
        "src": "images/review_form_bg.jpg",
        "alt": "Фон формы отзыва",
        "title": "Форма отзыва",
        "description": "Фон для формы отзыва"
      },
      {
        "id": 9,
        "src": "images/footer_bg.jpg",
        "alt": "Фон подвала",
        "title": "Подвал сайта",
        "description": "Фоновое изображение подвала"
      },
      {
        "id": 10,
        "src": "images/leftside_black_decoration.png",
        "alt": "Черное украшение слева",
        "title": "Декорация",
        "description": "Левая декорация"
      },
      {
        "id": 11,
        "src": "images/leftside_yellow_decoration.png",
        "alt": "Желтое украшение слева",
        "title": "Декорация",
        "description": "Желтая левая декорация"
      },
      {
        "id": 12,
        "src": "images/rightside_black_decoration.png",
        "alt": "Черное украшение справа",
        "title": "Декорация",
        "description": "Правая декорация"
      },
      {
        "id": 13,
        "src": "images/rightside_yellow_decoration.png",
        "alt": "Желтое украшение справа",
        "title": "Декорация",
        "description": "Желтая правая декорация"
      }
    ]
  },
  {
    "id": "about-us",
    "title": "О нас",
    "url": "/about-us",
    "images": [
      {
        "id": 1,
        "src": "images/founder_main.png",
        "alt": "Основатель компании",
        "title": "Руководитель",
        "description": "Основатель EvoHome"
      },
      {
        "id": 2,
        "src": "images/team_images/team1.jpg",
        "alt": "Член команды 1",
        "title": "Специалист",
        "description": "Опытный мастер"
      },
      {
        "id": 3,
        "src": "images/team_images/team2.jpg",
        "alt": "Член команды 2",
        "title": "Дизайнер",
        "description": "Креативный дизайнер"
      },
      {
        "id": 4,
        "src": "images/about_us_achievments/achievement1.jpg",
        "alt": "Достижение 1",
        "title": "Награда",
        "description": "Профессиональная награда"
      },
      {
        "id": 5,
        "src": "images/about_us_achievments/achievement2.jpg",
        "alt": "Достижение 2",
        "title": "Сертификат",
        "description": "Сертификат качества"
      }
    ]
  }
];

export function StaticImagesManager({ pageId, pageTitle, onClose }: StaticImagesManagerProps) {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedImages, setSelectedImages] = useState<Set<number>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    loadImages();
  }, [pageId]);

  const loadImages = () => {
    try {
      setLoading(true);
      console.log(`🔄 Загружаем изображения для страницы: ${pageId}`);
      
      // Находим страницу в статических данных
      const page = PAGES_DATA.find(p => p.id === pageId);
      
      if (!page) {
        console.log(`❌ Страница ${pageId} не найдена в статических данных`);
        showMessage('error', `Страница ${pageId} не найдена`);
        return;
      }

      if (!page.images || page.images.length === 0) {
        console.log(`⚠️ У страницы ${pageId} нет изображений`);
        setImages([]);
        return;
      }

      // Обрабатываем изображения
      const processedImages = page.images.map((img) => {
        const cleanSrc = img.src.startsWith('images/') ? img.src.substring(7) : img.src;
        return {
          ...img,
          src: cleanSrc,
          url: `${backendUrl}/images/${cleanSrc}`,
          exists: true, // Предполагаем, что файлы существуют
          size: 'Unknown' // Размер будет определен при загрузке
        };
      });

      setImages(processedImages);
      console.log(`✅ Загружено ${processedImages.length} изображений из статических данных`);
      
    } catch (error) {
      console.error('❌ Ошибка при загрузке изображений:', error);
      showMessage('error', `Ошибка загрузки: ${error instanceof Error ? error.message : 'Неизвестная ошибка'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (imageSrc: string) => {
    console.log(`❌ Ошибка загрузки изображения: ${imageSrc}`);
    setImageErrors(prev => new Set([...prev, imageSrc]));
  };

  const handleImageLoad = (imageSrc: string) => {
    console.log(`✅ Изображение загружено: ${imageSrc}`);
    setImageErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(imageSrc);
      return newSet;
    });
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const copyImageUrl = (image: ImageData) => {
    navigator.clipboard.writeText(image.url || '');
    showMessage('success', 'URL скопирован в буфер обмена');
  };

  const downloadImage = (image: ImageData) => {
    const link = document.createElement('a');
    link.href = image.url || '';
    link.download = image.src;
    link.click();
  };

  const openImageInNewTab = (image: ImageData) => {
    window.open(image.url, '_blank');
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
            <p className="mt-4 text-gray-500">Загрузка изображений...</p>
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
              Изображения: {pageTitle}
            </h2>
            <p className="text-sm text-gray-500">
              {images.length} изображений • {selectedImages.size} выбрано
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
              title={viewMode === 'grid' ? 'Список' : 'Сетка'}
            >
              {viewMode === 'grid' ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
            <button
              onClick={loadImages}
              className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
              title="Обновить"
            >
              <RefreshCw size={20} />
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
        <div className="mx-6 mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 mb-2">ℹ️ Статический режим</h3>
          <div className="text-xs text-blue-700 space-y-1">
            <div>Режим: Статические данные (без API)</div>
            <div>Backend URL: {backendUrl}</div>
            <div>Static URL: {backendUrl}/images/</div>
            <div>Загружено изображений: {images.length}</div>
            <div>Ошибки загрузки: {imageErrors.size}</div>
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
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto object-contain"
                      onError={() => handleImageError(image.src)}
                      onLoad={() => handleImageLoad(image.src)}
                    />
                    
                    {imageErrors.has(image.src) && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-red-400 bg-red-50">
                        <ImageIcon className="w-12 h-12 mb-2" />
                        <span className="text-sm">Ошибка загрузки</span>
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
                          onClick={() => openImageInNewTab(image)}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Открыть в новой вкладке"
                        >
                          <ExternalLink className="w-4 h-4" />
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
                      </div>
                      <div className="text-xs text-gray-500">
                        {imageErrors.has(image.src) ? 'Ошибка загрузки' : 'OK'}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




