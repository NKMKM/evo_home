import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    common: {
      appTitle: 'Панель управления',
      welcome: 'Добро пожаловать',
      selectSection: 'Выберите раздел слева для управления контентом.',
      welcomeTitle: 'Добро пожаловать в Evo Admin Panel',
      welcomeSubtitle: 'Управление контентом сайта: изображения, видео, тексты и заявки',
      quickActions: 'Быстрые действия',
      recentActivity: 'Последняя активность',
      recentSubmissions: 'Последние заявки',
      viewAll: 'Посмотреть все',
      logout: 'Выйти',
      loading: 'Загрузка данных...',
      login: {
        title: 'Вход в систему',
        username: 'Имя пользователя',
        password: 'Пароль',
        submit: 'Войти',
        loading: 'Входим...',
        error: 'Неверные данные для входа'
      },
      nav: {
        dashboard: 'Дашборд',
        submissions: 'Заявки',
        images: 'Изображения',
        videos: 'Видео',
        texts: 'Тексты',
        pages: 'Страницы',
        backups: 'Бэкапы',
        seo: 'SEO'
      },
      stats: {
        images: 'Изображения',
        videos: 'Видео',
        texts: 'Текстовые блоки',
        submissions: 'Заявки'
      },
      action: {
        manageImages: { title: 'Управление изображениями', desc: 'Просмотр и замена изображений сайта' },
        editVideos: { title: 'Редактировать видео', desc: 'Изменить YouTube видео на сайте' },
        editTexts: { title: 'Изменить тексты', desc: 'Редактировать тексты на трех языках' }
      },
      tab: {
        images: 'Изображения',
        texts: 'Тексты',
        seo: 'SEO',
        jsonld: 'JSON-LD',
        html: 'HTML',
        robots: 'Robots.txt',
        sitemap: 'Sitemap',
        diagnostics: 'Диагностика',
      },
      imagesNotFound: 'Изображения не найдены',
      images: 'Изображения',
      textsLabel: 'Тексты',
      replace: 'Заменить',
      alt: 'Alt',
      crop: 'Обрезать',
      seoSettings: 'SEO настройки',
      jsonLd: 'JSON-LD микроразметка',
      customHtml: 'Пользовательский HTML код',
      robotsTxt: 'Robots.txt директивы',
      sitemapSettings: 'Sitemap настройки',
      sitemapInfo: 'Информация о Sitemap',
      sitemapInfoText: 'Sitemap автоматически генерируется и доступен по адресу: /sitemap.xml',
      missingRuSeo: 'Отсутствует RU SEO',
      missingEnSeo: 'Отсутствует EN SEO',
      missingItSeo: 'Отсутствует IT SEO',
      partialSeo: 'SEO присутствует для некоторых языков',
      jsonldAndHtml: 'JSON-LD и HTML',
      jsonldMissing: 'JSON-LD не задан',
      jsonldPresent: 'JSON-LD задан',
      customHtmlMissing: 'Кастомный HTML не задан',
      customHtmlPresent: 'Кастомный HTML задан',
      imagesFound: 'Найдено изображений',
      imagesMissing: 'Изображения не найдены этой странице',
      lang: {
        ru: 'Русский',
        it: 'Итальянский',
      },
    },
  },
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
        backups: 'Backup',
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
        ru: 'Russo',
        it: 'Italiano',
      },
    },
  },
};

const saved = typeof window !== 'undefined' ? localStorage.getItem('admin_lang') : null;

i18n.use(initReactI18next).init({
  resources,
  lng: saved || 'it',
  fallbackLng: 'it',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: { escapeValue: false },
});

export default i18n;
