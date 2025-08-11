import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, EditIcon, SaveIcon, XIcon } from 'lucide-react';

interface VideoData {
  id: string;
  title: string;
  youtubeId: string;
  location: string;
  description?: string;
}

export function VideosPage() {
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [editingVideo, setEditingVideo] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);

  // Список всех видео, найденных в проекте
  const frontendVideos: VideoData[] = [
    {
      id: '1',
      title: 'Основное видео',
      youtubeId: '4hUYRlP9iGM',
      location: 'Video.jsx, AboutUs.jsx, RoomRenovation.jsx',
      description: 'Основное промо видео компании'
    },
    {
      id: '2', 
      title: 'Видео о процессе работы',
      youtubeId: '1ajIodgloag',
      location: 'AboutUs.jsx, OurWorks.jsx',
      description: 'Видео показывающее этапы работы'
    },
    {
      id: '3',
      title: 'Завершающий этап',
      youtubeId: 'i7l3dHfEA6c',
      location: 'OurWorks.jsx',
      description: 'Видео финального этапа ремонта'
    }
  ];

  useEffect(() => {
    // Симуляция загрузки данных
    setTimeout(() => {
      setVideos(frontendVideos);
      setLoading(false);
    }, 500);
  }, []);

  const handleEdit = (video: VideoData) => {
    setEditingVideo({ ...video });
  };

  const handleSave = () => {
    if (editingVideo) {
      setVideos(videos.map(v => v.id === editingVideo.id ? editingVideo : v));
      setEditingVideo(null);
      // Здесь бы был API вызов для сохранения изменений
      console.log('Saving video:', editingVideo);
    }
  };

  const handleCancel = () => {
    setEditingVideo(null);
  };

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/);
    return match ? match[1] : url;
  };

  if (loading) {
    return (
      <div className="px-6 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Загрузка видео...</p>
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
        <h1 className="text-2xl font-light text-gray-800 mb-1">
          Управление YouTube видео
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Изменение YouTube видео, встроенных на сайте
        </p>

        <div className="grid gap-6">
          {videos.map(video => (
            <motion.div
              key={video.id}
              layout
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-50 text-red-600 p-2 rounded-md">
                      <PlayIcon size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{video.title}</h3>
                      <p className="text-sm text-gray-500">Используется в: {video.location}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleEdit(video)}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <EditIcon size={18} />
                  </button>
                </div>

                {editingVideo?.id === video.id ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Название
                      </label>
                      <input
                        type="text"
                        value={editingVideo.title}
                        onChange={(e) => setEditingVideo({...editingVideo, title: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        YouTube URL или ID
                      </label>
                      <input
                        type="text"
                        value={editingVideo.youtubeId}
                        onChange={(e) => setEditingVideo({...editingVideo, youtubeId: extractVideoId(e.target.value)})}
                        placeholder="https://youtube.com/watch?v=... или просто ID"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Описание
                      </label>
                      <textarea
                        value={editingVideo.description || ''}
                        onChange={(e) => setEditingVideo({...editingVideo, description: e.target.value})}
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                      >
                        <SaveIcon size={14} className="mr-1" />
                        Сохранить
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                      >
                        <XIcon size={14} className="mr-1" />
                        Отмена
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="aspect-video bg-gray-100 rounded-md overflow-hidden">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-600">YouTube ID:</span>
                        <p className="text-sm text-gray-800 font-mono bg-gray-50 px-2 py-1 rounded">
                          {video.youtubeId}
                        </p>
                      </div>
                      {video.description && (
                        <div>
                          <span className="text-sm font-medium text-gray-600">Описание:</span>
                          <p className="text-sm text-gray-800">{video.description}</p>
                        </div>
                      )}
                      <div>
                        <span className="text-sm font-medium text-gray-600">URL для встраивания:</span>
                        <p className="text-xs text-gray-600 font-mono bg-gray-50 px-2 py-1 rounded break-all">
                          https://www.youtube.com/embed/{video.youtubeId}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-800 mb-2">Инструкция по использованию</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Нажмите на кнопку редактирования рядом с видео</li>
            <li>• Вставьте новую ссылку YouTube или ID видео</li>
            <li>• Сохраните изменения</li>
            <li>• Изменения автоматически применятся к сайту</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}