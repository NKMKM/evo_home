import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Save, ArrowLeft, Eye, Settings, History, Image } from 'lucide-react';
import { Page, SEOSettings } from '../../utils/types';
import { v4 as uuidv4 } from 'uuid';

interface PageEditorProps {
  page?: Page;
  onSave: (page: Page) => void;
  onCancel: () => void;
}

export function PageEditor({ page, onSave, onCancel }: PageEditorProps) {
  const [title, setTitle] = useState(page?.title || '');
  const [slug, setSlug] = useState(page?.slug || '');
  const [content, setContent] = useState(page?.content || '');
  const [excerpt, setExcerpt] = useState(page?.excerpt || '');
  const [status, setStatus] = useState<'draft' | 'published' | 'archived'>(page?.status || 'draft');
  const [featuredImage, setFeaturedImage] = useState(page?.featuredImage || '');
  const [seo, setSeo] = useState<SEOSettings>(page?.seo || {});
  const [showSeoPanel, setShowSeoPanel] = useState(false);
  const [saving, setSaving] = useState(false);
  const [autoSaveEnabled, setAutoSaveEnabled] = useState(true);

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  // Генерация slug из заголовка
  const generateSlug = useCallback((title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  }, []);

  // Автоматическое обновление slug при изменении title
  useEffect(() => {
    if (!page && title) {
      setSlug(generateSlug(title));
    }
  }, [title, page, generateSlug]);

  // Автосохранение
  useEffect(() => {
    if (!autoSaveEnabled || !title) return;

    const timer = setTimeout(() => {
      autoSave();
    }, 30000); // Автосохранение каждые 30 секунд

    return () => clearTimeout(timer);
  }, [title, content, autoSaveEnabled]);

  const autoSave = async () => {
    if (!title || saving) return;

    try {
      const pageData = {
        id: page?.id || uuidv4(),
        title,
        slug,
        content,
        excerpt,
        status: 'draft' as const,
        featuredImage,
        seo,
        createdAt: page?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        author: 'current_user', // В реальном приложении получать из контекста
        versions: page?.versions || [],
      };

      await fetch(`${backendUrl}/api/pages/autosave`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ ...pageData, isAutoSave: true }),
      });
    } catch (error) {
      console.error('Ошибка автосохранения:', error);
    }
  };

  const handleSave = async () => {
    if (!title.trim()) {
      alert('Введите заголовок страницы');
      return;
    }

    setSaving(true);

    try {
      const pageData: Page = {
        id: page?.id || uuidv4(),
        title: title.trim(),
        slug: slug.trim() || generateSlug(title),
        content,
        excerpt,
        status,
        featuredImage,
        seo,
        createdAt: page?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: status === 'published' ? new Date().toISOString() : page?.publishedAt,
        author: page?.author || 'current_user',
        versions: page?.versions || [],
      };

      const response = await fetch(`${backendUrl}/api/pages${page ? `/${page.id}` : ''}`, {
        method: page ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(pageData),
      });

      if (response.ok) {
        onSave(pageData);
      } else {
        alert('Ошибка при сохранении страницы');
      }
    } catch (error) {
      console.error('Ошибка при сохранении:', error);
      alert('Ошибка при сохранении страницы');
    } finally {
      setSaving(false);
    }
  };

  const handleSeoChange = (field: keyof SEOSettings, value: string | boolean) => {
    setSeo(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onCancel}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-lg font-medium text-gray-900">
              {page ? 'Редактировать страницу' : 'Создать страницу'}
            </h1>
            <p className="text-sm text-gray-500">
              {autoSaveEnabled && 'Автосохранение включено'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSeoPanel(!showSeoPanel)}
            className={`p-2 rounded-lg transition-colors ${
              showSeoPanel 
                ? 'bg-blue-100 text-blue-600' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Settings size={18} />
          </button>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
            className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="draft">Черновик</option>
            <option value="published">Опубликовать</option>
            <option value="archived">Архив</option>
          </select>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            <Save size={16} />
            {saving ? 'Сохранение...' : 'Сохранить'}
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Editor */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Title and Slug */}
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Заголовок страницы"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-2xl font-light border-none outline-none placeholder-gray-400 resize-none"
                    style={{ height: 'auto' }}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>URL:</span>
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    /{slug}
                  </span>
                  <button
                    onClick={() => setSlug(generateSlug(title))}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    Обновить
                  </button>
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Краткое описание
                </label>
                <textarea
                  placeholder="Краткое описание страницы..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full h-20 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Изображение для предпросмотра
                </label>
                <div className="flex gap-3">
                  <input
                    type="url"
                    placeholder="URL изображения"
                    value={featuredImage}
                    onChange={(e) => setFeaturedImage(e.target.value)}
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Image size={18} />
                  </button>
                </div>
                {featuredImage && (
                  <div className="mt-2">
                    <img
                      src={featuredImage}
                      alt="Preview"
                      className="w-full max-w-sm h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              {/* Content Editor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Содержание
                </label>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <textarea
                    placeholder="Содержание страницы..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full h-96 border-none px-4 py-3 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SEO Panel */}
        {showSeoPanel && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 320, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-gray-50 border-l border-gray-200 overflow-auto"
          >
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-4">SEO настройки</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meta заголовок
                  </label>
                  <input
                    type="text"
                    value={seo.metaTitle || ''}
                    onChange={(e) => handleSeoChange('metaTitle', e.target.value)}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Meta описание
                  </label>
                  <textarea
                    value={seo.metaDescription || ''}
                    onChange={(e) => handleSeoChange('metaDescription', e.target.value)}
                    className="w-full h-20 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ключевые слова
                  </label>
                  <input
                    type="text"
                    value={seo.metaKeywords || ''}
                    onChange={(e) => handleSeoChange('metaKeywords', e.target.value)}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="noIndex"
                    checked={seo.noIndex || false}
                    onChange={(e) => handleSeoChange('noIndex', e.target.checked)}
                    className="rounded"
                  />
                  <label htmlFor="noIndex" className="text-sm text-gray-700">
                    Не индексировать
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}