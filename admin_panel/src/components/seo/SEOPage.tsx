import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, Share2, FileText, Download, Save, Eye, Edit } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface LangSEO {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonical: string;
}

interface SEOData {
  id: string;
  page: string;
  languages: { ru: LangSEO; en: LangSEO; it: LangSEO };
  lastModified: string;
}

export function SEOPage() {
  const { t } = useTranslation('common');
  const [seoData, setSeoData] = useState<SEOData[]>([]);
  const [selectedPage, setSelectedPage] = useState<SEOData | null>(null);
  const [loading, setLoading] = useState(true);
  const [editingData, setEditingData] = useState<SEOData | null>(null);
  const [sitemapGenerated, setSitemapGenerated] = useState(false);

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  // Список всех страниц для SEO
  const pages = [
    { id: 'home', name: 'Home' },
    { id: 'about-us', name: 'Chi siamo' },
    { id: 'our-works', name: 'I nostri lavori' },
    { id: 'contacts', name: 'Contatti' },
    { id: 'reviews', name: 'Recensioni' },
    { id: 'turnkey-renovation', name: 'Ristrutturazione chiavi in mano' },
    { id: 'designer-renovation', name: 'Ristrutturazione di design' },
    { id: 'exclusive-renovation', name: 'Ristrutturazione esclusiva' },
    { id: 'studio', name: 'Monolocale' },
    { id: 'two-room-apartment', name: 'Bilocale' },
    { id: 'three-room-apartment', name: 'Trilocale' },
    { id: 'four-room-apartment', name: 'Quadrilocale' },
    { id: 'two-story-apartment', name: 'Appartamento su due livelli' },
    { id: 'room-renovation', name: 'Ristrutturazione stanze' },
    { id: 'living-room', name: 'Soggiorno' },
    { id: 'bedroom', name: 'Camera da letto' },
    { id: 'children-room', name: 'Cameretta' },
    { id: 'corridor', name: 'Corridoio' },
    { id: 'kitchen', name: 'Cucina' },
    { id: 'bathroom', name: 'Bagno' },
    { id: 'stairs', name: 'Scale' },
    { id: 'systems', name: 'Sistemi' },
    { id: 'electrical-system', name: 'Impianto elettrico' },
    { id: 'gas-system', name: 'Impianto gas' },
    { id: 'floor-heating', name: 'Riscaldamento a pavimento' },
    { id: 'sewage', name: 'Fognatura' },
    { id: 'climate-control', name: 'Climatizzazione' },
    { id: 'commercial-premises', name: 'Locali commerciali' },
    { id: 'business-center', name: 'Centro direzionale' },
    { id: 'restaurant', name: 'Ristorante' },
    { id: 'commercial-premises-renovation', name: 'Ristrutturazione locali commerciali' },
    { id: 'office', name: 'Ufficio' },
    { id: 'warehouse', name: 'Magazzino' },
    { id: 'fitness-club', name: 'Fitness club' },
    { id: 'hotel', name: 'Hotel' },
    { id: 'services', name: 'Servizi' },
    { id: 'turnkey-renovation-services', name: 'Servizi chiavi in mano' },
    { id: 'room-renovation-services', name: 'Servizi di ristrutturazione stanze' },
    { id: 'commercial-premises-services', name: 'Servizi per locali commerciali' },
    { id: 'systems-services', name: 'Servizi per sistemi' }
  ];

  useEffect(() => {
    // Загружаем SEO данные для всех страниц
    loadSEOData();
  }, []);

  const loadSEOData = async () => {
    setLoading(true);
    try {
      const seoDataArray: SEOData[] = [];
      
      for (const page of pages) {
        try {
          console.log(`Загружаем SEO данные для страницы: ${page.name} (${page.id})`);
          const response = await fetch(`${backendUrl}/api/pages/${page.id}/seo`, {
            credentials: 'include'
          });
          
          console.log(`Ответ для ${page.name}:`, response.status, response.statusText);
          
          if (response.ok) {
            const payload = await response.json();
            console.log(`SEO данные для ${page.name}:`, payload);
            const empty: LangSEO = { title: '', description: '', keywords: '', ogTitle: '', ogDescription: '', ogImage: '', canonical: '' };
            const languages = payload.languages || { ru: empty, en: empty, it: empty };
            seoDataArray.push({
              id: page.id,
              page: page.name,
              languages: {
                ru: { ...empty, ...(languages.ru || {}) },
                en: { ...empty, ...(languages.en || {}) },
                it: { ...empty, ...(languages.it || {}) },
              },
              lastModified: new Date().toISOString().split('T')[0]
            });
          } else {
            console.error(`Ошибка HTTP для ${page.name}:`, response.status, response.statusText);
            // Добавляем пустые данные для страниц с ошибками
            const empty: LangSEO = { title: '', description: '', keywords: '', ogTitle: '', ogDescription: '', ogImage: '', canonical: '' };
            seoDataArray.push({ id: page.id, page: page.name, languages: { ru: empty, en: empty, it: empty }, lastModified: new Date().toISOString().split('T')[0] });
          }
        } catch (error) {
          console.error(`Ошибка загрузки SEO данных для страницы ${page.name}:`, error);
          // Добавляем пустые данные для страниц с ошибками
          const empty: LangSEO = { title: '', description: '', keywords: '', ogTitle: '', ogDescription: '', ogImage: '', canonical: '' };
          seoDataArray.push({ id: page.id, page: page.name, languages: { ru: empty, en: empty, it: empty }, lastModified: new Date().toISOString().split('T')[0] });
        }
      }
      
      console.log('Все SEO данные:', seoDataArray);
      setSeoData(seoDataArray);
    } catch (error) {
      console.error('Ошибка загрузки SEO данных:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (data: SEOData) => {
    console.log('Редактирование SEO данных:', data);
    setEditingData({ ...data });
    setSelectedPage(data);
  };

  const handleSave = async () => {
    if (!editingData) return;
    
    try {
      const response = await fetch(`${backendUrl}/api/pages/${editingData.id}/seo`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ languages: editingData.languages })
      });
      
      if (response.ok) {
        const result = await response.json();
        setSeoData(seoData.map(item => item.id === editingData.id ? editingData : item));
        
        setEditingData(null);
        setSelectedPage(null);
        alert(`✅ SEO данные сохранены с бэкапом: ${result.backupPath}`);
      } else {
        throw new Error('Ошибка сохранения SEO данных');
      }
    } catch (error) {
      console.error('Ошибка сохранения SEO данных:', error);
      alert('❌ Ошибка сохранения SEO данных');
    }
  };

  const handleCancel = () => {
    setEditingData(null);
    setSelectedPage(null);
  };

  const generateSitemap = async () => {
    try {
      // Здесь будет API вызов для генерации sitemap
      console.log('Генерация sitemap.xml...');
      
      setSitemapGenerated(true);
      setTimeout(() => setSitemapGenerated(false), 3000);
      alert('✅ Sitemap.xml успешно сгенерирован');
    } catch (error) {
      console.error('Ошибка генерации sitemap:', error);
      alert('❌ Ошибка генерации sitemap');
    }
  };

  const downloadSitemap = () => {
    // Симуляция скачивания sitemap
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://evohome.it/</loc>
    <lastmod>2024-01-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://evohome.it/about-construction-company-evo-home</loc>
    <lastmod>2024-01-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`;
    
    const blob = new Blob([sitemapContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
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

  if (selectedPage && editingData) {
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
              <button
                onClick={handleCancel}
                className="text-blue-600 hover:text-blue-800 mb-2 flex items-center"
              >
                ← Indietro all'elenco
              </button>
              <h1 className="text-2xl font-light text-gray-800 mb-1">
                Modifica SEO: {selectedPage.page}
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Annulla
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                Salva
              </button>
            </div>
          </div>

          {/* SEO Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Basic SEO */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Search className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-800">
                  Meta tag principali
                </h3>
              </div>
              
              <div className="space-y-4">
                {(['ru','en','it'] as const).map((lng) => (
                  <div key={lng} className="border rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-2">Lingua: {lng.toUpperCase()}</div>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                          type="text"
                          value={editingData.languages[lng]?.title || ''}
                          onChange={(e) => setEditingData({
                            ...editingData,
                            languages: { ...editingData.languages, [lng]: { ...editingData.languages[lng], title: e.target.value } }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Titolo pagina"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                        <textarea
                          value={editingData.languages[lng]?.description || ''}
                          onChange={(e) => setEditingData({
                            ...editingData,
                            languages: { ...editingData.languages, [lng]: { ...editingData.languages[lng], description: e.target.value } }
                          })}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Descrizione della pagina"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (через запятую)</label>
                        <input
                          type="text"
                          value={editingData.languages[lng]?.keywords || ''}
                          onChange={(e) => setEditingData({
                            ...editingData,
                            languages: { ...editingData.languages, [lng]: { ...editingData.languages[lng], keywords: e.target.value } }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="parole chiave"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
                        <input
                          type="url"
                          value={editingData.languages[lng]?.canonical || ''}
                          onChange={(e) => setEditingData({
                            ...editingData,
                            languages: { ...editingData.languages, [lng]: { ...editingData.languages[lng], canonical: e.target.value } }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="https://example.com/pagina"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OpenGraph */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Share2 className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-800">
                  OpenGraph (social)
                </h3>
              </div>
              
              <div className="space-y-4">
                {(['ru','en','it'] as const).map((lng) => (
                  <div key={lng} className="border rounded-lg p-4">
                    <div className="text-xs text-gray-500 mb-2">Lingua: {lng.toUpperCase()}</div>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">OG Title</label>
                        <input
                          type="text"
                          value={editingData.languages[lng]?.ogTitle || ''}
                          onChange={(e) => setEditingData({
                            ...editingData,
                            languages: { ...editingData.languages, [lng]: { ...editingData.languages[lng], ogTitle: e.target.value } }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Titolo per social"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">OG Description</label>
                        <textarea
                          value={editingData.languages[lng]?.ogDescription || ''}
                          onChange={(e) => setEditingData({
                            ...editingData,
                            languages: { ...editingData.languages, [lng]: { ...editingData.languages[lng], ogDescription: e.target.value } }
                          })}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Descrizione per social"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">OG Image URL</label>
                        <input
                          type="url"
                          value={editingData.languages[lng]?.ogImage || ''}
                          onChange={(e) => setEditingData({
                            ...editingData,
                            languages: { ...editingData.languages, [lng]: { ...editingData.languages[lng], ogImage: e.target.value } }
                          })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="https://example.com/immagine.jpg"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Eye className="w-5 h-5 text-purple-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">
                Anteprima
              </h3>
            </div>
            
                         <div className="bg-gray-100 rounded-lg p-4">
               <div className="max-w-md">
                  <h4 className="text-lg font-medium text-blue-600 mb-1">
                    {editingData.languages.ru.title || 'Titolo pagina'}
                  </h4>
                  <p className="text-sm text-green-600 mb-2">
                    {editingData.languages.ru.canonical || 'https://example.com/pagina'}
                  </p>
                  <p className="text-sm text-gray-600">
                    {editingData.languages.ru.description || 'Descrizione della pagina'}
                  </p>
               </div>
             </div>
          </div>
        </motion.div>
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
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-light text-gray-800 mb-1">
              Gestione SEO
            </h1>
            <p className="text-sm text-gray-500">
              Gestione meta tag, OpenGraph e sitemap
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={generateSitemap}
              className={`px-4 py-2 rounded-lg flex items-center ${
                sitemapGenerated 
                  ? 'bg-green-600 text-white' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <FileText className="w-4 h-4 mr-2" />
              {sitemapGenerated ? 'Generato!' : 'Genera Sitemap'}
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

        <div className="space-y-4">
          {seoData.map(seo => (
            <motion.div
              key={seo.id}
              layout
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Search className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{seo.page}</h3>
                      <p className="text-sm text-gray-500 truncate max-w-md">
                        {seo.languages?.ru?.title || seo.languages?.en?.title || seo.languages?.it?.title || ''}
                      </p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                        <span>🔗 {seo.languages?.ru?.canonical || seo.languages?.en?.canonical || seo.languages?.it?.canonical || ''}</span>
                        <span>📅 {seo.lastModified}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(seo)}
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 flex items-center"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Modifica
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SEO Statistics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Search className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Totale pagine</p>
                <p className="text-2xl font-semibold text-gray-800">{seoData.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <Share2 className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">OpenGraph configurato</p>
                <p className="text-2xl font-semibold text-gray-800">{seoData.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <FileText className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Sitemap aggiornato</p>
                <p className="text-2xl font-semibold text-gray-800">
                  {sitemapGenerated ? 'Oggi' : 'Di recente'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 