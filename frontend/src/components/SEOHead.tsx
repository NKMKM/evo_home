import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

interface SEOHeadProps {
  pageId: string;
}

export function SEOHead({ pageId }: SEOHeadProps) {
  const [seo, setSeo] = useState<SEOData>({});

  useEffect(() => {
    let isMounted = true;
    async function fetchSEO() {
      try {
        // Загружаем SEO из публичной папки, формируем из локализаций, подготовленных бэкендом
        const res = await fetch(`/seo/${pageId}.json`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted) setSeo(data || {});
        } else {
          // fallback — ничего
          if (isMounted) setSeo({});
        }
      } catch {
        if (isMounted) setSeo({});
      }
    }
    fetchSEO();
    return () => { isMounted = false; };
  }, [pageId]);

  const title = seo.title || '';
  const description = seo.description || '';
  const keywords = seo.keywords || '';
  const ogTitle = seo.ogTitle || title || '';
  const ogDescription = seo.ogDescription || description || '';
  const ogImage = seo.ogImage || '';
  const canonical = seo.canonical || '';

  return (
    <Helmet>
      {title ? <title>{title}</title> : null}
      {description ? <meta name="description" content={description} /> : null}
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {ogTitle ? <meta property="og:title" content={ogTitle} /> : null}
      {ogDescription ? <meta property="og:description" content={ogDescription} /> : null}
      {ogImage ? <meta property="og:image" content={ogImage} /> : null}
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  );
}


