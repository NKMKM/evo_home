import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, Search, Filter } from 'lucide-react';
import { Page } from '../../utils/types';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

interface PagesPageProps {
  onEditPage: (page: Page) => void;
  onCreatePage: () => void;
}

export function PagesPage({ onEditPage, onCreatePage }: PagesPageProps) {
  const [pages, setPages] = useState<Page[]>([]);
  const [filteredPages, setFilteredPages] = useState<Page[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'draft' | 'published' | 'archived'>('all');
  const [loading, setLoading] = useState(true);

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    fetchPages();
  }, []);

  useEffect(() => {
    filterPages();
  }, [pages, searchTerm, statusFilter]);

  const fetchPages = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/pages`, {
        credentials: 'include',
      });
      if (response.ok) {
        const pagesData = await response.json();
        setPages(pagesData);
      }
    } catch (error) {
      console.error('Ошибка при загрузке страниц:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPages = () => {
    let filtered = pages;

    if (searchTerm) {
      filtered = filtered.filter(page =>
        page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.slug.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(page => page.status === statusFilter);
    }

    setFilteredPages(filtered);
  };

  const deletePage = async (pageId: string) => {
    if (!confirm('Вы уверены, что хотите удалить эту страницу?')) {
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/pages/${pageId}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        setPages(pages.filter(page => page.id !== pageId));
      }
    } catch (error) {
      console.error('Ошибка при удалении страницы:', error);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusStyles = {
      draft: 'bg-gray-100 text-gray-800',
      published: 'bg-green-100 text-green-800',
      archived: 'bg-red-100 text-red-800',
    };

    const statusText = {
      draft: 'Черновик',
      published: 'Опубликована',
      archived: 'Архив',
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status as keyof typeof statusStyles]}`}>
        {statusText[status as keyof typeof statusText]}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-gray-500">Загрузка страниц...</div>
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-light text-gray-800 mb-1">Страницы</h1>
            <p className="text-sm text-gray-500">Управление страницами сайта</p>
          </div>
          <button
            onClick={onCreatePage}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={16} />
            Создать страницу
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по названию или URL..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-gray-400" />
              <select
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
              >
                <option value="all">Все статусы</option>
                <option value="published">Опубликованные</option>
                <option value="draft">Черновики</option>
                <option value="archived">Архив</option>
              </select>
            </div>
          </div>
        </div>

        {/* Pages List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {filteredPages.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredPages.map((page) => (
                <div key={page.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-gray-900">{page.title}</h3>
                        {getStatusBadge(page.status)}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">
                          /{page.slug}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        Создана {formatDistanceToNow(new Date(page.createdAt), { 
                          addSuffix: true, 
                          locale: ru 
                        })} • Автор: {page.author}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {page.status === 'published' && (
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                          <Eye size={16} />
                        </button>
                      )}
                      <button
                        onClick={() => onEditPage(page)}
                        className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => deletePage(page.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center">
              <div className="text-gray-400 mb-4">
                <Plus size={48} className="mx-auto mb-4 opacity-20" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Нет страниц</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Не найдено страниц по заданным критериям'
                  : 'Создайте первую страницу для начала работы'
                }
              </p>
              {!searchTerm && statusFilter === 'all' && (
                <button
                  onClick={onCreatePage}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Создать страницу
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}