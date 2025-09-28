import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Globe, FileText, Download, Save, AlertCircle, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SitemapPage {
  url: string;
  changefreq: string;
  priority: string;
  lastmod: string;
}

export function SitemapManager() {
  const { t } = useTranslation('common');
  const [pages, setPages] = useState<SitemapPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPage, setNewPage] = useState({
    url: '',
    changefreq: 'weekly',
    priority: '0.5'
  });
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${backendUrl}/api/pages`, {
        credentials: 'include'
      });
      
      if (response.ok) {
        const data = await response.json();
        setPages(data);
      } else {
        throw new Error('Ошибка загрузки страниц');
      }
    } catch (error) {
      console.error('Ошибка при загрузке страниц:', error);
      showMessage('error', 'Ошибка загрузки страниц');
    } finally {
      setLoading(false);
    }
  };

  const addPage = async () => {
    if (!newPage.url || !newPage.changefreq || !newPage.priority) {
      showMessage('error', 'Все поля обязательны');
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/pages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(newPage)
      });

      if (response.ok) {
        const result = await response.json();
        setPages([...pages, result.page]);
        setNewPage({ url: '', changefreq: 'weekly', priority: '0.5' });
        setShowAddForm(false);
        showMessage('success', `Страница добавлена. Бэкап: ${result.backupPath}`);
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка добавления страницы');
      }
    } catch (error) {
      console.error('Ошибка при добавлении страницы:', error);
      showMessage('error', error instanceof Error ? error.message : 'Ошибка добавления страницы');
    }
  };

  const deletePage = async (url: string) => {
    if (!confirm('Вы уверены, что хотите удалить эту страницу из sitemap?')) {
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/pages/${encodeURIComponent(url)}`, {
        method: 'DELETE',
        credentials: 'include'
      });

      if (response.ok) {
        const result = await response.json();
        setPages(pages.filter(page => page.url !== url));
        showMessage('success', `Страница удалена. Бэкап: ${result.backupPath}`);
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Ошибка удаления страницы');
      }
    } catch (error) {
      console.error('Ошибка при удалении страницы:', error);
      showMessage('error', error instanceof Error ? error.message : 'Ошибка удаления страницы');
    }
  };

  const downloadSitemap = async () => {
    try {
      const response = await fetch(`${backendUrl}/sitemap.xml`, {
        credentials: 'include'
      });
      
      if (response.ok) {
        const sitemapContent = await response.text();
        const blob = new Blob([sitemapContent], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sitemap.xml';
        a.click();
        URL.revokeObjectURL(url);
        showMessage('success', 'Sitemap.xml скачан');
      } else {
        throw new Error('Ошибка генерации sitemap');
      }
    } catch (error) {
      console.error('Ошибка при скачивании sitemap:', error);
      showMessage('error', 'Ошибка скачивания sitemap');
    }
  };

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const changefreqOptions = [
    { value: 'always', label: 'Always' },
    { value: 'hourly', label: 'Hourly' },
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'never', label: 'Never' }
  ];

  const priorityOptions = [
    { value: '0.1', label: '0.1 (Низкий)' },
    { value: '0.2', label: '0.2' },
    { value: '0.3', label: '0.3' },
    { value: '0.4', label: '0.4' },
    { value: '0.5', label: '0.5 (Средний)' },
    { value: '0.6', label: '0.6' },
    { value: '0.7', label: '0.7' },
    { value: '0.8', label: '0.8 (Высокий)' },
    { value: '0.9', label: '0.9' },
    { value: '1.0', label: '1.0 (Максимальный)' }
  ];

  if (loading) {
    return (
      <div className="px-6 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Загрузка страниц...</p>
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
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-light text-gray-800 mb-1">
              Gestione Sitemap
            </h1>
            <p className="text-sm text-gray-500">
              Aggiungere e rimuovere pagine in una sitemap.xml
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-2" />
              Aggiungi pagina
            </button>
            <button
              onClick={downloadSitemap}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Scarica Sitemap
            </button>
          </div>
        </div>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-4 p-4 rounded-lg flex items-center ${
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
            className="bg-white rounded-lg shadow-sm p-6 mb-6"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4">Aggiungi una nuova pagina</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
                <input
                  type="text"
                  value={newPage.url}
                  onChange={(e) => setNewPage({ ...newPage, url: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="/example-page"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Change Frequency</label>
                <select
                  value={newPage.changefreq}
                  onChange={(e) => setNewPage({ ...newPage, changefreq: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {changefreqOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select
                  value={newPage.priority}
                  onChange={(e) => setNewPage({ ...newPage, priority: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {priorityOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <button
                onClick={addPage}
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

        {/* Pages List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {pages.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {pages.map((page, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{page.url}</h3>
                        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
                          <span>📅 {page.lastmod}</span>
                          <span>🔄 {page.changefreq}</span>
                          <span>⭐ {page.priority}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => deletePage(page.url)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      title="Удалить страницу"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="text-gray-400 mb-4">
                <FileText size={48} className="mx-auto mb-4 opacity-20" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Нет страниц в sitemap</h3>
              <p className="text-gray-500 mb-4">
                Добавьте страницы для включения их в sitemap.xml
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Добавить первую страницу
              </button>
            </div>
          )}
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Globe className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Всего страниц</p>
                <p className="text-2xl font-semibold text-gray-800">{pages.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Sitemap готов</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {pages.length > 0 ? 'Да' : 'Нет'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Download className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Последнее обновление</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {pages.length > 0 ? 'Сегодня' : 'Никогда'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}


