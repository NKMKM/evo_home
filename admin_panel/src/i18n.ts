import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    common: {
      appTitle: 'Pannello di controllo',
      welcome: 'Benvenuto',
      selectSection: 'Seleziona una sezione a sinistra per gestire i contenuti.',
      welcomeTitle: 'Benvenuto in Evo Admin Panel',
      welcomeSubtitle: 'Gestione contenuti del sito: immagini, video, testi e richieste',
      quickActions: 'Azioni rapide',
      recentActivity: 'Attività recente',
      recentSubmissions: 'Ultime richieste',
      viewAll: 'Vedi tutto',
      logout: 'Esci',
      loading: 'Caricamento dati...',
      login: {
        title: 'Accesso',
        username: 'Nome utente',
        password: 'Password',
        submit: 'Accedi',
        loading: 'Accesso in corso...',
        error: 'Credenziali non valide'
      },
      nav: {
        dashboard: 'Dashboard',
        submissions: 'Richieste',
        images: 'Immagini',
        videos: 'Video',
        texts: 'Testi',
        pages: 'Pagine',
        seo: 'SEO'
      },
      stats: {
        images: 'Immagini',
        videos: 'Video',
        texts: 'Blocchi di testo',
        submissions: 'Richieste'
      },
      action: {
        manageImages: { title: 'Gestione immagini', desc: 'Visualizza e sostituisci le immagini del sito' },
        editVideos: { title: 'Modifica video', desc: 'Aggiorna i video YouTube sul sito' },
        editTexts: { title: 'Modifica testi', desc: 'Modifica testi in tre lingue' }
      },
      tab: {
        images: 'Immagini',
        texts: 'Testi',
        seo: 'SEO',
        jsonld: 'JSON-LD',
        html: 'HTML',
        robots: 'Robots.txt',
        sitemap: 'Sitemap',
        diagnostics: 'Diagnostica',
      },
      imagesNotFound: 'Immagini non trovate',
      images: 'Immagini',
      textsLabel: 'Testi',
      replace: 'Sostituisci',
      alt: 'Alt',
      crop: 'Ritaglia',
      seoSettings: 'Impostazioni SEO',
      jsonLd: 'Markup JSON-LD',
      customHtml: 'HTML personalizzato',
      robotsTxt: 'Direttive Robots.txt',
      sitemapSettings: 'Impostazioni Sitemap',
      sitemapInfo: 'Informazioni sulla Sitemap',
      sitemapInfoText: 'La sitemap è generata automaticamente e disponibile su: /sitemap.xml',
      missingRuSeo: 'SEO RU mancante',
      missingEnSeo: 'SEO EN mancante',
      missingItSeo: 'SEO IT mancante',
      partialSeo: 'SEO presente per alcune lingue',
      jsonldAndHtml: 'JSON-LD e HTML',
      jsonldMissing: 'JSON-LD non impostato',
      jsonldPresent: 'JSON-LD impostato',
      customHtmlMissing: 'HTML personalizzato non impostato',
      customHtmlPresent: 'HTML personalizzato impostato',
      imagesFound: 'Immagini trovate',
      imagesMissing: 'Nessuna immagine trovata per questa pagina',
      lang: {
        it: 'Italiano',
      },
    },
  },
};

const saved = typeof window !== 'undefined' ? localStorage.getItem('admin_lang') : null;

i18n.use(initReactI18next).init({
  resources,
  lng: 'it',
  fallbackLng: 'it',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;
