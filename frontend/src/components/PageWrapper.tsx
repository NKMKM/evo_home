import React, { useState, useEffect } from 'react';
import { CustomHtmlRenderer } from './CustomHtmlRenderer';
import { SEOHead } from './SEOHead';

interface PageWrapperProps {
  children: React.ReactNode;
  pageId?: string;
}

export function PageWrapper({ children, pageId }: PageWrapperProps) {
  const [htmlPosition, setHtmlPosition] = useState<'top' | 'bottom' | 'after-header' | 'before-footer'>('top');
  const [jsonLd, setJsonLd] = useState<string>('');

  // Загружаем расположение HTML блока и JSON-LD
  useEffect(() => {
    if (!pageId) return;

    const loadPageData = async () => {
      try {
        // Загружаем расположение HTML
        const htmlResponse = await fetch(`/html-config/${pageId}.json`);
        if (htmlResponse.ok) {
          const htmlData = await htmlResponse.json();
          setHtmlPosition(htmlData.position);
        }

        // Загружаем JSON-LD
        const jsonLdResponse = await fetch(`/jsonld/${pageId}.json`);
        if (jsonLdResponse.ok) {
          const jsonLdData = await jsonLdResponse.json();
          setJsonLd(jsonLdData.jsonLd || '');
        }
      } catch (error) {
        console.error('Ошибка загрузки данных страницы:', error);
      }
    };

    loadPageData();
  }, [pageId]);

  // Определяем, где отображать HTML блок
  const renderHtmlBlock = () => (
    <CustomHtmlRenderer pageId={pageId} position={htmlPosition} />
  );

  // Отображаем JSON-LD микроразметку
  const renderJsonLd = () => {
    if (!jsonLd) return null;
    
    try {
      // Проверяем, что JSON-LD валидный
      JSON.parse(jsonLd);
      return (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      );
    } catch (error) {
      console.error('Ошибка в JSON-LD:', error);
      return null;
    }
  };

  // Отображаем HTML блок в зависимости от позиции
  if (htmlPosition === 'top') {
    return (
      <>
        {pageId ? <SEOHead pageId={pageId} /> : null}
        {renderJsonLd()}
        {renderHtmlBlock()}
        {children}
      </>
    );
  }

  if (htmlPosition === 'bottom') {
    return (
      <>
        {pageId ? <SEOHead pageId={pageId} /> : null}
        {renderJsonLd()}
        {children}
        {renderHtmlBlock()}
      </>
    );
  }

  // Для других позиций пока просто вверху
  return (
    <>
      {pageId ? <SEOHead pageId={pageId} /> : null}
      {renderJsonLd()}
      {renderHtmlBlock()}
      {children}
    </>
  );
}
