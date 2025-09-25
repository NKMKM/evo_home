import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, Search, Filter, Globe, Globe2, Image, ChevronDown, ChevronRight, FileText, Code, Layers } from 'lucide-react';
import { Page } from '../../utils/types';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { PageImagesManager } from '../PageImagesManager';
import { ComponentManager } from '../ComponentManager';
import { PagesStats } from '../PagesStats';
import { scanAllPages, searchPages, filterPagesByType, PageCategory, ScannedPage } from '../../utils/pageScanner';

interface PagesPageProps {
  onEditPage: (page: Page) => void;
  onCreatePage: () => void;
}

export function PagesPage({ onEditPage, onCreatePage }: PagesPageProps) {
  const [pages, setPages] = useState<Page[]>([]);
  const [scannedCategories, setScannedCategories] = useState<PageCategory[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<PageCategory[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'draft' | 'published' | 'archived'>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'page' | 'component'>('all');
  const [loading, setLoading] = useState(true);
  const [sitemapStatus, setSitemapStatus] = useState<Record<string, boolean>>({});
  const [showPageImagesManager, setShowPageImagesManager] = useState<{ pageId: string; pageTitle: string } | null>(null);
  const [showComponentManager, setShowComponentManager] = useState<ScannedPage | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  useEffect(() => {
    fetchPages();
    // Сканируем все страницы и компоненты
    const categories = scanAllPages();
    setScannedCategories(categories);
    setExpandedCategories(new Set(categories.map(cat => cat.name)));
  }, []);

  useEffect(() => {
    if (pages.length > 0) {
      fetchSitemapStatus();
    }
  }, [pages]);

  useEffect(() => {
    filterPages();
    setCurrentPage(1); // Сбрасываем пагинацию при изменении фильтров
  }, [scannedCategories, searchTerm, statusFilter, typeFilter]);

  const fetchPages = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/pages/list`, {
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

  const fetchSitemapStatus = async () => {
    try {
      // Загружаем статус sitemap для всех страниц
      const statusMap: Record<string, boolean> = {};
      
      // Используем только страницы из pages.json
      const pageIds = pages.map(page => page.id);

      for (const pageId of pageIds) {
        try {
          const response = await fetch(`${backendUrl}/api/pages/${pageId}/data`, {
            credentials: 'include'
          });
          if (response.ok) {
            const data = await response.json();
            statusMap[pageId] = data.sitemap !== false; // По умолчанию true
          } else {
            statusMap[pageId] = true; // По умолчанию включено
          }
        } catch (error) {
          statusMap[pageId] = true; // По умолчанию включено
        }
      }
      
      setSitemapStatus(statusMap);
    } catch (error) {
      console.error('Ошибка при загрузке статуса sitemap:', error);
    }
  };

  const toggleSitemapStatus = async (pageId: string) => {
    try {
      const currentStatus = sitemapStatus[pageId] !== false;
      const newStatus = !currentStatus;
      
      const response = await fetch(`${backendUrl}/api/pages/${pageId}/sitemap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ sitemap: newStatus })
      });

      if (response.ok) {
        setSitemapStatus(prev => ({
          ...prev,
          [pageId]: newStatus
        }));
      } else {
        throw new Error('Ошибка обновления статуса sitemap');
      }
    } catch (error) {
      console.error('Ошибка при переключении статуса sitemap:', error);
    }
  };

  const filterPages = () => {
    let filtered = searchPages(scannedCategories, searchTerm);
    filtered = filterPagesByType(filtered, typeFilter);
    setFilteredCategories(filtered);
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  const getTotalItems = () => {
    return filteredCategories.reduce((total, category) => total + category.pages.length, 0);
  };

  const getPaginatedCategories = () => {
    const allItems: { category: PageCategory; page: ScannedPage }[] = [];
    
    filteredCategories.forEach(category => {
      category.pages.forEach(page => {
        allItems.push({ category, page });
      });
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = allItems.slice(startIndex, endIndex);

    // Группируем обратно по категориям
    const groupedCategories: PageCategory[] = [];
    const categoryMap = new Map<string, PageCategory>();

    paginatedItems.forEach(({ category, page }) => {
      if (!categoryMap.has(category.name)) {
        categoryMap.set(category.name, {
          ...category,
          pages: []
        });
      }
      categoryMap.get(category.name)!.pages.push(page);
    });

    return Array.from(categoryMap.values());
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
            <h1 className="text-2xl font-light text-gray-800 mb-1">Страницы и компоненты</h1>
            <p className="text-sm text-gray-500">
              Управление страницами и компонентами сайта ({getTotalItems()} элементов)
            </p>
          </div>
          <button
            onClick={onCreatePage}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={16} />
            Создать страницу
          </button>
        </div>

        {/* Statistics */}
        <PagesStats 
          categories={scannedCategories}
          totalPages={pages.length}
          totalComponents={scannedCategories.reduce((total, cat) => 
            total + cat.pages.filter(p => p.type === 'component').length, 0
          )}
        />

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex-1 relative min-w-64">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по названию, пути или файлу..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-gray-400" />
              <select
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value as any)}
              >
                <option value="all">Все типы</option>
                <option value="page">Страницы</option>
                <option value="component">Компоненты</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
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

        {/* Pages and Components List */}
        <div className="space-y-4">
          {getPaginatedCategories().map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Category Header */}
              <div 
                className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{category.icon}</span>
                  <div>
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.pages.length} элементов</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {expandedCategories.has(category.name) ? (
                    <ChevronDown size={20} className="text-gray-400" />
                  ) : (
                    <ChevronRight size={20} className="text-gray-400" />
                  )}
                </div>
              </div>

              {/* Category Items */}
              {expandedCategories.has(category.name) && (
                <div className="divide-y divide-gray-100">
                  {category.pages.map((page) => (
                    <div key={page.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            {page.type === 'page' ? (
                              <FileText size={16} className="text-blue-500" />
                            ) : (
                              <Code size={16} className="text-green-500" />
                            )}
                            <h4 className="font-medium text-gray-900">{page.title}</h4>
                            {getStatusBadge(page.status)}
                            {page.type === 'component' && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                                Компонент
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 mb-2">
                            <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">
                              {page.path}
                            </span>
                          </div>
                          <div className="text-xs text-gray-400 flex items-center gap-4">
                            <span>Файл: {page.fileName}</span>
                            {page.hasImages && <span>📷 Изображения</span>}
                            {page.hasTranslations && <span>🌐 Переводы</span>}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {page.type === 'page' && page.status === 'published' && (
                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                              <Eye size={16} />
                            </button>
                          )}
                          {page.type === 'page' && (
                            <button
                              onClick={() => setShowPageImagesManager({ pageId: page.id, pageTitle: page.title })}
                              className="p-2 text-purple-600 hover:text-purple-700 transition-colors"
                              title="Управление изображениями"
                            >
                              <Image size={16} />
                            </button>
                          )}
                          {page.type === 'page' && (
                            <button
                              onClick={() => toggleSitemapStatus(page.id)}
                              className={`p-2 transition-colors ${
                                sitemapStatus[page.id] !== false
                                  ? 'text-green-600 hover:text-green-700'
                                  : 'text-gray-400 hover:text-gray-600'
                              }`}
                              title={sitemapStatus[page.id] !== false ? 'Исключить из sitemap' : 'Включить в sitemap'}
                            >
                              {sitemapStatus[page.id] !== false ? <Globe size={16} /> : <Globe2 size={16} />}
                            </button>
                          )}
                          <button
                            onClick={() => {
                              // Для компонентов показываем ComponentManager
                              if (page.type === 'component') {
                                setShowComponentManager(page);
                              } else {
                                // Для страниц вызываем редактирование
                                const cmsPage = pages.find(p => p.id === page.id);
                                if (cmsPage) {
                                  onEditPage(cmsPage);
                                }
                              }
                            }}
                            className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                            title={page.type === 'component' ? 'Информация о компоненте' : 'Редактировать страницу'}
                          >
                            <Edit size={16} />
                          </button>
                          {page.type === 'page' && (
                            <button
                              onClick={() => deletePage(page.id)}
                              className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {getPaginatedCategories().length === 0 && (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="text-gray-400 mb-4">
                <Layers size={48} className="mx-auto mb-4 opacity-20" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Нет элементов</h3>
              <p className="text-gray-500 mb-4">
                {searchTerm || statusFilter !== 'all' || typeFilter !== 'all'
                  ? 'Не найдено элементов по заданным критериям'
                  : 'Создайте первую страницу для начала работы'
                }
              </p>
              {!searchTerm && statusFilter === 'all' && typeFilter === 'all' && (
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

        {/* Pagination */}
        {getTotalItems() > itemsPerPage && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Назад
            </button>
            <span className="text-sm text-gray-600">
              Страница {currentPage} из {Math.ceil(getTotalItems() / itemsPerPage)}
            </span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(Math.ceil(getTotalItems() / itemsPerPage), prev + 1))}
              disabled={currentPage >= Math.ceil(getTotalItems() / itemsPerPage)}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Вперед
            </button>
          </div>
        )}
      </motion.div>

      {/* Page Images Manager Modal */}
      {showPageImagesManager && (
        <PageImagesManager
          pageId={showPageImagesManager.pageId}
          pageTitle={showPageImagesManager.pageTitle}
          onClose={() => setShowPageImagesManager(null)}
        />
      )}

      {/* Component Manager Modal */}
      {showComponentManager && (
        <ComponentManager
          component={showComponentManager}
          onClose={() => setShowComponentManager(null)}
        />
      )}
    </div>
  );
}