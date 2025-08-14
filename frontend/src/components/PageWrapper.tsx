import React, { useState, useEffect } from 'react';
import { CustomHtmlRenderer } from './CustomHtmlRenderer';

interface PageWrapperProps {
  children: React.ReactNode;
  pageId?: string;
}

export function PageWrapper({ children, pageId }: PageWrapperProps) {
  const [htmlPosition, setHtmlPosition] = useState<'top' | 'bottom' | 'after-header' | 'before-footer'>('top');

  // Загружаем расположение HTML блока
  useEffect(() => {
    if (!pageId) return;

    const loadHtmlPosition = async () => {
      try {
        const response = await fetch(`/html-config/${pageId}.json`);
        if (response.ok) {
          const data = await response.json();
          setHtmlPosition(data.position);
        }
      } catch (error) {
        console.error('Ошибка загрузки расположения HTML:', error);
      }
    };

    loadHtmlPosition();
  }, [pageId]);

  // Определяем, где отображать HTML блок
  const renderHtmlBlock = () => (
    <CustomHtmlRenderer pageId={pageId} position={htmlPosition} />
  );

  // Отображаем HTML блок в зависимости от позиции
  if (htmlPosition === 'top') {
    return (
      <>
        {renderHtmlBlock()}
        {children}
      </>
    );
  }

  if (htmlPosition === 'bottom') {
    return (
      <>
        {children}
        {renderHtmlBlock()}
      </>
    );
  }

  // Для других позиций пока просто вверху
  return (
    <>
      {renderHtmlBlock()}
      {children}
    </>
  );
}
