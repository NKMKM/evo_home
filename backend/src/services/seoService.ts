export const seoService = {
  getMeta: async (pageId: number) => {
    await new Promise(r => setTimeout(r, 200));
    return {
      title: 'Sample Title',
      description: 'Sample Description',
      keywords: 'sample, keywords',
      og: { title: 'OG Title', image: '', description: '' },
      canonical: '/sample',
      robots: 'index,follow',
      schema: '{ "@context": "https://schema.org" }'
    };
  },
  updateMeta: async (pageId: number, meta: any) => {
    await new Promise(r => setTimeout(r, 200));
    return meta;
  },
  generateSitemap: async () => {
    await new Promise(r => setTimeout(r, 500));
    return '<urlset>...</urlset>';
  },
  getRobots: async () => {
    await new Promise(r => setTimeout(r, 100));
    return 'User-agent: *\nAllow: /';
  },
  updateRobots: async (content: string) => {
    await new Promise(r => setTimeout(r, 100));
    return content;
  }
}; 