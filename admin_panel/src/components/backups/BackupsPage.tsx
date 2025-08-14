import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  RotateCcw, 
  Download, 
  Trash2, 
  Calendar, 
  FileText, 
  Image, 
  Play,
  Clock,
  FolderOpen,
  RefreshCw
} from 'lucide-react';

interface BackupItem {
  id: string;
  name: string;
  type: 'image' | 'text' | 'video';
  path: string;
  timestamp: string;
  size: string;
  description: string;
}

export function BackupsPage() {
  const [backups, setBackups] = useState<BackupItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<'all' | 'image' | 'text' | 'video'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  // Моковые данные для демонстрации
  const mockBackups: BackupItem[] = [
    {
      id: '1',
      name: 'founder_main_2024-01-15T10-30-45.png',
      type: 'image',
      path: 'backups/images/founder_main_2024-01-15T10-30-45.png',
      timestamp: '2024-01-15T10:30:45',
      size: '991 KB',
      description: 'Резервная копия изображения основателя'
    },
    {
      id: '2',
      name: 'HomeStart_ru_2024-01-14T16-20-30.json',
      type: 'text',
      path: 'backups/texts/ru/HomeStart_2024-01-14T16-20-30.json',
      timestamp: '2024-01-14T16:20:30',
      size: '2.3 KB',
      description: 'Резервная копия текстов главной страницы (русский)'
    },
    {
      id: '3',
      name: 'Video.jsx.2024-01-13T09-15-22.bak',
      type: 'video',
      path: 'backups/videos/Video.jsx.2024-01-13T09-15-22.bak',
      timestamp: '2024-01-13T09:15:22',
      size: '1.1 KB',
      description: 'Резервная копия файла с видео'
    },
    {
      id: '4',
      name: 'logo_2024-01-12T14-45-10.png',
      type: 'image',
      path: 'backups/images/logo_2024-01-12T14-45-10.png',
      timestamp: '2024-01-12T14:45:10',
      size: '7.3 KB',
      description: 'Резервная копия логотипа'
    },
    {
      id: '5',
      name: 'AboutUs_en_2024-01-11T11-30-15.json',
      type: 'text',
      path: 'backups/texts/en/AboutUs_2024-01-11T11-30-15.json',
      timestamp: '2024-01-11T11:30:15',
      size: '1.8 KB',
      description: 'Резервная копия текстов "О нас" (английский)'
    }
  ];

  useEffect(() => {
    // Симуляция загрузки данных
    setTimeout(() => {
      setBackups(mockBackups);
      setLoading(false);
    }, 500);
  }, []);

  const filteredBackups = backups.filter(backup => {
    const matchesType = selectedType === 'all' || backup.type === selectedType;
    const matchesSearch = backup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         backup.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleRestore = async (backup: BackupItem) => {
    if (!confirm(`Восстановить "${backup.name}"?`)) return;
    
    try {
      // Здесь будет API вызов для восстановления
      console.log('Восстановление:', backup);
      alert(`✅ ${backup.name} восстановлен`);
    } catch (error) {
      console.error('Ошибка восстановления:', error);
      alert('Ошибка при восстановлении');
    }
  };

  const handleDownload = async (backup: BackupItem) => {
    try {
      // Здесь будет API вызов для скачивания
      console.log('Скачивание:', backup);
      alert(`📥 ${backup.name} скачан`);
    } catch (error) {
      console.error('Ошибка скачивания:', error);
      alert('Ошибка при скачивании');
    }
  };

  const handleDelete = async (backup: BackupItem) => {
    if (!confirm(`Удалить "${backup.name}"?`)) return;
    
    try {
      // Здесь будет API вызов для удаления
      console.log('Удаление:', backup);
      setBackups(backups.filter(b => b.id !== backup.id));
      alert(`🗑️ ${backup.name} удален`);
    } catch (error) {
      console.error('Ошибка удаления:', error);
      alert('Ошибка при удалении');
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image': return <Image className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      case 'video': return <Play className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'image': return 'text-blue-600 bg-blue-50';
      case 'text': return 'text-green-600 bg-green-50';
      case 'video': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="px-6 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Загрузка бэкапов...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-light text-gray-800 mb-1">
              Точки сохранения
            </h1>
            <p className="text-sm text-gray-500">
              Управление резервными копиями изображений, текстов и видео
            </p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <RefreshCw size={16} />
            <span>Обновить</span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Поиск бэкапов..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FolderOpen className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="flex items-center gap-2">
              <select
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
              >
                <option value="all">Все типы ({backups.length})</option>
                <option value="image">Изображения ({backups.filter(b => b.type === 'image').length})</option>
                <option value="text">Тексты ({backups.filter(b => b.type === 'text').length})</option>
                <option value="video">Видео ({backups.filter(b => b.type === 'video').length})</option>
              </select>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <RotateCcw className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Всего бэкапов</p>
                <p className="text-xl font-semibold text-gray-800">{backups.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <Image className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Изображения</p>
                <p className="text-xl font-semibold text-gray-800">{backups.filter(b => b.type === 'image').length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Тексты</p>
                <p className="text-xl font-semibold text-gray-800">{backups.filter(b => b.type === 'text').length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <Play className="w-8 h-8 text-red-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Видео</p>
                <p className="text-xl font-semibold text-gray-800">{backups.filter(b => b.type === 'video').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Backups List */}
        <div className="space-y-3">
          {filteredBackups.map(backup => (
            <motion.div
              key={backup.id}
              layout
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${getTypeColor(backup.type)}`}>
                      {getTypeIcon(backup.type)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-gray-800 truncate">{backup.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{backup.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(backup.timestamp)}
                        </span>
                        <span>💾 {backup.size}</span>
                        <span className="truncate">📁 {backup.path}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <button
                      onClick={() => handleRestore(backup)}
                      className="text-blue-600 hover:text-blue-800 p-2 hover:bg-blue-50 rounded transition-colors"
                      title="Восстановить"
                    >
                      <RotateCcw size={16} />
                    </button>
                    <button
                      onClick={() => handleDownload(backup)}
                      className="text-green-600 hover:text-green-800 p-2 hover:bg-green-50 rounded transition-colors"
                      title="Скачать"
                    >
                      <Download size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(backup)}
                      className="text-red-600 hover:text-red-800 p-2 hover:bg-red-50 rounded transition-colors"
                      title="Удалить"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBackups.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <RotateCcw className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              {searchTerm || selectedType !== 'all' 
                ? 'Не найдено бэкапов по заданным критериям'
                : 'Нет резервных копий'
              }
            </p>
          </div>
        )}

        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-yellow-800 mb-2">Информация о бэкапах</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• <strong>Автоматические бэкапы:</strong> Создаются при каждом изменении</li>
            <li>• <strong>Восстановление:</strong> Заменяет текущий файл на версию из бэкапа</li>
            <li>• <strong>Скачивание:</strong> Позволяет сохранить бэкап локально</li>
            <li>• <strong>Удаление:</strong> Очищает старые бэкапы для экономии места</li>
            <li>• <strong>Формат имен:</strong> filename_YYYY-MM-DD-HH-mm-ss.ext</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
} 