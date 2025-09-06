import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, EditIcon, SaveIcon, XIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface VideoData {
  id: string;
  title: string;
  youtubeId: string;
  location: string;
  description?: string;
}

export function VideosPage() {
  const { t } = useTranslation('common');
  const [videos, setVideos] = useState<VideoData[]>([]);
  const [editingVideo, setEditingVideo] = useState<VideoData | null>(null);
  const [loading, setLoading] = useState(true);
  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  // Загрузка актуальных встраиваний из исходников через backend
  const loadVideos = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/api/videos/scan`, { credentials: 'include' });
      if (!res.ok) throw new Error('Video load error');
      const data = await res.json();
      // Нормализуем
      const normalized: VideoData[] = data.map((v: any) => ({
        id: v.id,
        title: v.title,
        youtubeId: v.youtubeId,
        location: v.location,
        description: `File: ${v.location}`
      }));
      setVideos(normalized);
    } catch (e) {
      console.error(e);
      setVideos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVideos();
  }, []);

  const handleEdit = (video: VideoData) => {
    setEditingVideo({ ...video });
  };

  const handleSave = async () => {
    if (!editingVideo) return;
    try {
      // id кодирует файл и индекс; backend извлечет filePath из списка (мы храним только при сканировании)
      // Чтобы обновить, нужно повторно получить mapping id->filePath. Упростим: запросим снова и найдем совпадение
      const resScan = await fetch(`${backendUrl}/api/videos/scan`, { credentials: 'include' });
      const list = resScan.ok ? await resScan.json() : [];
      const target = list.find((v: any) => v.id === editingVideo.id);
      if (!target) throw new Error('Не удалось определить файл для обновления');

      const res = await fetch(`${backendUrl}/api/videos`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ filePath: target.filePath, youtubeId: editingVideo.youtubeId })
      });
      if (!res.ok) throw new Error('Ошибка сохранения видео');
      setEditingVideo(null);
      await loadVideos();
      alert('Video aggiornato con backup');
    } catch (e) {
      console.error(e);
      alert('Impossibile salvare le modifiche');
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
          <p className="mt-4 text-gray-500">{t('loading')}</p>
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
          {t('action.editVideos.title')}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {t('action.editVideos.desc')}
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
                      <p className="text-sm text-gray-500">In uso in: {video.location}</p>
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
                        Titolo
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
                        URL YouTube o ID
                      </label>
                      <input
                        type="text"
                        value={editingVideo.youtubeId}
                        onChange={(e) => setEditingVideo({...editingVideo, youtubeId: extractVideoId(e.target.value)})}
                        placeholder="https://youtube.com/watch?v=... oppure solo ID"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Descrizione
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
                        Salva
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center px-3 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                      >
                        <XIcon size={14} className="mr-1" />
                        Annulla
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
                          <span className="text-sm font-medium text-gray-600">Descrizione:</span>
                          <p className="text-sm text-gray-800">{video.description}</p>
                        </div>
                      )}
                      <div>
                        <span className="text-sm font-medium text-gray-600">URL di incorporamento:</span>
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
          <h3 className="text-sm font-medium text-blue-800 mb-2">Istruzioni</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Clicca il pulsante modifica vicino al video</li>
            <li>• Incolla nuovo link YouTube o ID</li>
            <li>• Salva le modifiche</li>
            <li>• Le modifiche saranno applicate al sito</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}