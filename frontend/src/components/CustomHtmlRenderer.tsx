import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface CustomHtmlRendererProps {
  pageId?: string;
  position?: 'top' | 'bottom' | 'after-header' | 'before-footer';
}

export function CustomHtmlRenderer({ pageId, position = 'top' }: CustomHtmlRendererProps) {
  const [customHtml, setCustomHtml] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [htmlPosition, setHtmlPosition] = useState(position);
  const location = useLocation();

  // Определяем pageId из URL если не передан
  const getPageIdFromUrl = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/about-us') return 'about-us';
    if (path === '/our-works') return 'our-works';
    if (path === '/contacts') return 'contacts';
    if (path === '/reviews') return 'reviews';
    if (path === '/turnkey-renovation') return 'turnkey-renovation';
    if (path === '/room-renovation') return 'room-renovation';
    if (path === '/systems') return 'systems';
    if (path === '/commercial-premises') return 'commercial-premises';
    if (path === '/living-room') return 'living-room';
    if (path === '/business-center') return 'business-center';
    if (path === '/restaurant') return 'restaurant';
    if (path === '/office') return 'office';
    if (path === '/warehouse') return 'warehouse';
    if (path === '/fitness-club') return 'fitness-club';
    if (path === '/hotel') return 'hotel';
    if (path === '/commercial-premises-renovation') return 'commercial-premises-renovation';
    if (path === '/services') return 'services';
    if (path === '/turnkey-renovation-services') return 'turnkey-renovation-services';
    if (path === '/room-renovation-services') return 'room-renovation-services';
    if (path === '/commercial-premises-services') return 'commercial-premises-services';
    if (path === '/systems-services') return 'systems-services';
    
    // Для других страниц можно добавить маппинг
    return null;
  };

  useEffect(() => {
    const currentPageId = pageId || getPageIdFromUrl();
    
    if (!currentPageId) {
      setLoading(false);
      return;
    }

    // Загружаем HTML код для текущей страницы
    const loadCustomHtml = async () => {
      try {
        console.log('Загружаем HTML для страницы:', currentPageId);
        
        // Пробуем загрузить напрямую из папки public
        const response = await fetch(`/custom-html/${currentPageId}.html`);
        
        console.log('Ответ сервера:', response.status, response.statusText);
        
        if (response.ok) {
          const htmlContent = await response.text();
          console.log('Полученный HTML:', htmlContent);
          setCustomHtml(htmlContent);
        } else {
          console.error('Ошибка ответа:', response.status, response.statusText);
          // Если не удалось загрузить, показываем сообщение об ошибке
          setCustomHtml(`<div style="padding: 10px; background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; border-radius: 5px;">HTML файл не найден для страницы: ${currentPageId}</div>`);
        }
      } catch (error) {
        console.error('Ошибка загрузки HTML:', error);
        setCustomHtml(`<div style="padding: 10px; background: #f8d7da; border: 1px solid #f5c6cb; color: #721c24; border-radius: 5px;">Ошибка загрузки HTML: ${error.message}</div>`);
      } finally {
        setLoading(false);
      }
    };

    loadCustomHtml();
    loadHtmlPosition();
  }, [pageId, location.pathname]);

  // Загружаем расположение HTML блока
  const loadHtmlPosition = async () => {
    const currentPageId = pageId || getPageIdFromUrl();
    if (!currentPageId) return;

    try {
      const response = await fetch(`/html-config/${currentPageId}.json`);
      if (response.ok) {
        const data = await response.json();
        setHtmlPosition(data.position);
      }
    } catch (error) {
      console.error('Ошибка загрузки расположения HTML:', error);
    }
  };

  if (loading) {
    return <div style={{padding: '10px', background: '#f0f0f0', border: '1px solid #ccc'}}>Загрузка HTML...</div>;
  }

  if (!customHtml) {
    return <div style={{padding: '10px', background: '#f0f0f0', border: '1px solid #ccc'}}>HTML код не найден для страницы: {pageId || getPageIdFromUrl()}</div>;
  }

  // Опасный способ отображения HTML (используйте только для доверенного контента)
  return (
    <div 
      className="custom-html-content"
      style={{ padding: '10px', margin: '10px'}}
      dangerouslySetInnerHTML={{ __html: customHtml }}
    />
  );
}
