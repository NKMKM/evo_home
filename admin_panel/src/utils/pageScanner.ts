// Утилита для сканирования всех страниц и компонентов проекта

export interface ScannedPage {
  id: string;
  title: string;
  path: string;
  type: 'page' | 'component';
  category: string;
  fileName: string;
  lastModified?: string;
  hasImages?: boolean;
  hasTranslations?: boolean;
  status: 'active' | 'inactive' | 'draft';
}

export interface PageCategory {
  name: string;
  pages: ScannedPage[];
  icon: string;
}

// Основные страницы из pages.json
const mainPages = [
  { id: 'home', title: 'Home', path: '/', category: 'main', hasImages: true },
  { id: 'about-us', title: 'Chi siamo', path: '/about-us', category: 'main', hasImages: true },
  { id: 'our-works', title: 'I nostri lavori', path: '/our-works', category: 'main', hasImages: true },
  { id: 'contacts', title: 'Contatti', path: '/contacts', category: 'main', hasImages: true },
  { id: 'reviews', title: 'Recensioni', path: '/reviews', category: 'main', hasImages: true },
  { id: 'turnkey-renovation', title: 'Ristrutturazione chiavi in mano', path: '/turnkey-renovation', category: 'services', hasImages: true },
  { id: 'room-renovation', title: "Ristrutturazione stanze", path: '/room-renovation', category: 'services', hasImages: true },
  { id: 'systems', title: 'Sistemi', path: '/systems', category: 'services', hasImages: true },
  { id: 'commercial-premises', title: 'Locali commerciali', path: '/commercial-premises', category: 'services', hasImages: true }
];

// Подстраницы по категориям
const subPages = {
  'commercial-premises': [
    { id: 'commercial-premises-main', title: 'Locali commerciali', path: '/commercial-premises', fileName: 'CommercialPremises.jsx' },
    { id: 'business-center', title: 'Centro business', path: '/commercial-premises/business-center', fileName: 'BusinessCenter.jsx' },
    { id: 'commercial-premises-renovation', title: 'Ristrutturazione locali commerciali', path: '/commercial-premises/renovation', fileName: 'CommercialPremisesRenovation.jsx' },
    { id: 'fitness-club', title: 'Fitness club', path: '/commercial-premises/fitness-club', fileName: 'FitnessClub.jsx' },
    { id: 'hotel', title: 'Hotel', path: '/commercial-premises/hotel', fileName: 'Hotel.jsx' },
    { id: 'office', title: 'Ufficio', path: '/commercial-premises/office', fileName: 'Office.jsx' },
    { id: 'restaurant', title: 'Ristorante', path: '/commercial-premises/restaurant', fileName: 'Restaurant.jsx' },
    { id: 'warehouse', title: 'Magazzino', path: '/commercial-premises/warehouse', fileName: 'Warehouse.jsx' }
  ],
  'room-renovation': [
    { id: 'room-renovation-main', title: 'Ristrutturazione stanze', path: '/room-renovation', fileName: 'RoomRenovation.jsx' },
    { id: 'bathroom', title: 'Bagno', path: '/room-renovation/bathroom', fileName: 'Bathroom.jsx' },
    { id: 'bedroom', title: 'Camera da letto', path: '/room-renovation/bedroom', fileName: 'Bedroom.jsx' },
    { id: 'children-room', title: 'Cameretta', path: '/room-renovation/children-room', fileName: 'ChildrenRoom.jsx' },
    { id: 'corridor', title: 'Corridoio', path: '/room-renovation/corridor', fileName: 'Corridor.jsx' },
    { id: 'kitchen', title: 'Cucina', path: '/room-renovation/kitchen', fileName: 'Kitchen.jsx' },
    { id: 'living-room', title: 'Soggiorno', path: '/room-renovation/living-room', fileName: 'LivingRoom.jsx' },
    { id: 'stairs', title: 'Scale', path: '/room-renovation/stairs', fileName: 'Stairs.jsx' }
  ],
  'services': [
    { id: 'commercial-premises-services', title: 'Servizi per locali commerciali', path: '/services/commercial-premises', fileName: 'CommercialPremisesServices.jsx' },
    { id: 'room-renovation-services', title: 'Servizi di ristrutturazione stanze', path: '/services/room-renovation', fileName: 'RoomRenovationServices.jsx' },
    { id: 'services-phone', title: 'Servizi (telefono)', path: '/services/phone', fileName: 'ServisesPhone.jsx' },
    { id: 'systems-services', title: 'Servizi sistemi', path: '/services/systems', fileName: 'SystemsServices.jsx' },
    { id: 'turnkey-renovation-services', title: 'Servizi ristrutturazione chiavi in mano', path: '/services/turnkey-renovation', fileName: 'TurnkeyRenovationServices.jsx' }
  ],
  'systems': [
    { id: 'systems-main', title: 'Sistemi', path: '/systems', fileName: 'Systems.jsx' },
    { id: 'climate-control', title: 'Controllo clima', path: '/systems/climate-control', fileName: 'ClimateControl.jsx' },
    { id: 'electrical-system', title: 'Impianto elettrico', path: '/systems/electrical-system', fileName: 'ElectricalSystem.jsx' },
    { id: 'floor-heating', title: 'Riscaldamento a pavimento', path: '/systems/floor-heating', fileName: 'FloorHeating.jsx' },
    { id: 'gas-system', title: 'Impianto gas', path: '/systems/gas-system', fileName: 'GasSystem.jsx' },
    { id: 'sewage', title: 'Fognatura', path: '/systems/sewage', fileName: 'Sewage.jsx' }
  ],
  'turnkey-renovation': [
    { id: 'turnkey-renovation-main', title: 'Ristrutturazione chiavi in mano', path: '/turnkey-renovation', fileName: 'TurnkeyRenovation.jsx' },
    { id: 'designer-renovation', title: 'Ristrutturazione di design', path: '/turnkey-renovation/designer-renovation', fileName: 'DesignerRenovation.jsx' },
    { id: 'exclusive-renovation', title: 'Ristrutturazione esclusiva', path: '/turnkey-renovation/exclusive-renovation', fileName: 'ExclusiveRenovation.jsx' },
    { id: 'fourroom-apartment', title: "Appartamento quattro locali", path: '/turnkey-renovation/fourroom-apartment', fileName: 'FourroomApartment.jsx' },
    { id: 'studio', title: 'Monolocale', path: '/turnkey-renovation/studio', fileName: 'Studio.jsx' },
    { id: 'threeroom-apartment', title: "Appartamento tre locali", path: '/turnkey-renovation/threeroom-apartment', fileName: 'ThreeroomApartment.jsx' },
    { id: 'tworoom-apartment', title: "Appartamento due locali", path: '/turnkey-renovation/tworoom-apartment', fileName: 'TworoomApartment.jsx' },
    { id: 'twostory-apartment', title: 'Appartamento su due livelli', path: '/turnkey-renovation/twostory-apartment', fileName: 'TwostoryApartment.jsx' }
  ]
};

// Компоненты по категориям
const components = {
  'mainpage': [
    { id: 'about-company-home', title: 'О компании (главная)', fileName: 'AboutCompanyHome.jsx' },
    { id: 'advantages', title: 'Преимущества', fileName: 'Advantages.jsx' },
    { id: 'architect', title: 'Архитектор', fileName: 'Architect.jsx' },
    { id: 'calculator', title: 'Калькулятор', fileName: 'Calculator.jsx' },
    { id: 'design', title: 'Дизайн', fileName: 'Design.jsx' },
    { id: 'discount', title: 'Скидки', fileName: 'Discount.jsx' },
    { id: 'guarantees', title: 'Гарантии', fileName: 'Guarantees.jsx' },
    { id: 'home-start', title: 'Начало главной', fileName: 'HomeStart.jsx' },
    { id: 'ideas', title: 'Идеи', fileName: 'Ideas.jsx' },
    { id: 'projects', title: 'Проекты', fileName: 'Projects.jsx' },
    { id: 'reviews', title: 'Отзывы', fileName: 'Reviews.jsx' },
    { id: 'services', title: 'Услуги', fileName: 'Services.jsx' }
  ],
  'commercial-premises': [
    { id: 'commercial-premises-layout-collection', title: 'Коллекция планировок', fileName: 'CommercialPremisesLayoutCollection.jsx' },
    { id: 'commercial-premises-projects', title: 'Проекты', fileName: 'CommercialPremisesProjects.jsx' }
  ],
  'room-renovation': [
    { id: 'layout-collection', title: 'Коллекция планировок', fileName: 'LayoutCollection.jsx' },
    { id: 'projects', title: 'Проекты', fileName: 'Projects.jsx' }
  ],
  'systems': [
    { id: 'system-layout-collection', title: 'Коллекция систем', fileName: 'SystemLayoutCollection.jsx' },
    { id: 'system-projects', title: 'Проекты систем', fileName: 'SystemProjects.jsx' }
  ],
  'common': [
    { id: 'breadcrumbs', title: 'Хлебные крошки', fileName: 'Breadcrumbs.jsx' },
    { id: 'custom-html-renderer', title: 'HTML рендерер', fileName: 'CustomHtmlRenderer.tsx' },
    { id: 'five-reasons', title: 'Пять причин', fileName: 'FiveReasons.jsx' },
    { id: 'footer', title: 'Подвал', fileName: 'Footer.jsx' },
    { id: 'image-comparison-slider', title: 'Слайдер сравнения', fileName: 'ImageComparisonSlider.jsx' },
    { id: 'language-link', title: 'Языковая ссылка', fileName: 'LanguageLink.jsx' },
    { id: 'language-router', title: 'Языковой роутер', fileName: 'LanguageRouter.jsx' },
    { id: 'language-selector', title: 'Выбор языка', fileName: 'LanguageSelector.jsx' },
    { id: 'nav', title: 'Навигация', fileName: 'Nav.jsx' },
    { id: 'page-wrapper', title: 'Обертка страницы', fileName: 'PageWrapper.tsx' },
    { id: 'phone-menu', title: 'Мобильное меню', fileName: 'PhoneMenu.jsx' },
    { id: 'reasons', title: 'Причины', fileName: 'Reasons.jsx' },
    { id: 'scroll-to-top', title: 'Прокрутка вверх', fileName: 'ScrollToTop.jsx' },
    { id: 'services-dropdown', title: 'Выпадающее меню услуг', fileName: 'ServicesDropdown.jsx' },
    { id: 'video', title: 'Видео', fileName: 'Video.jsx' },
    { id: 'yellow-square', title: 'Желтый квадрат', fileName: 'YellowSquare.jsx' }
  ]
};

export function scanAllPages(): PageCategory[] {
  const categories: PageCategory[] = [];

  // Основные страницы
  const mainPagesData: ScannedPage[] = mainPages.map(page => ({
    ...page,
    type: 'page' as const,
    fileName: `${page.id}.jsx`,
    status: 'active' as const,
    hasImages: page.hasImages || true,
    hasTranslations: true
  }));

  categories.push({
    name: 'Основные страницы',
    pages: mainPagesData,
    icon: '🏠'
  });

  // Подстраницы по категориям
  Object.entries(subPages).forEach(([categoryKey, pages]) => {
    const categoryName = getCategoryDisplayName(categoryKey);
    const pagesData: ScannedPage[] = pages.map(page => ({
      ...page,
      type: 'page' as const,
      category: categoryKey,
      status: 'active' as const,
      hasImages: true,
      hasTranslations: true
    }));

    categories.push({
      name: categoryName,
      pages: pagesData,
      icon: getCategoryIcon(categoryKey)
    });
  });

  // Компоненты по категориям
  Object.entries(components).forEach(([categoryKey, comps]) => {
    const categoryName = getComponentCategoryDisplayName(categoryKey);
    const componentsData: ScannedPage[] = comps.map(comp => ({
      ...comp,
      type: 'component' as const,
      category: categoryKey,
      path: `/components/${categoryKey}/${comp.fileName}`,
      status: 'active' as const,
      hasImages: false,
      hasTranslations: false
    }));

    categories.push({
      name: categoryName,
      pages: componentsData,
      icon: getComponentCategoryIcon(categoryKey)
    });
  });

  return categories;
}

function getCategoryDisplayName(key: string): string {
  const names: Record<string, string> = {
    'commercial-premises': 'Коммерческие помещения',
    'room-renovation': 'Ремонт комнат',
    'services': 'Услуги',
    'systems': 'Системы',
    'turnkey-renovation': 'Ремонт под ключ'
  };
  return names[key] || key;
}

function getCategoryIcon(key: string): string {
  const icons: Record<string, string> = {
    'commercial-premises': '🏢',
    'room-renovation': '🏠',
    'services': '⚙️',
    'systems': '🔧',
    'turnkey-renovation': '🔨'
  };
  return icons[key] || '📄';
}

function getComponentCategoryDisplayName(key: string): string {
  const names: Record<string, string> = {
    'mainpage': 'Компоненты главной страницы',
    'commercial-premises': 'Компоненты коммерческих помещений',
    'room-renovation': 'Компоненты ремонта комнат',
    'systems': 'Компоненты систем',
    'common': 'Общие компоненты'
  };
  return names[key] || key;
}

function getComponentCategoryIcon(key: string): string {
  const icons: Record<string, string> = {
    'mainpage': '🏠',
    'commercial-premises': '🏢',
    'room-renovation': '🏠',
    'systems': '🔧',
    'common': '🧩'
  };
  return icons[key] || '📦';
}

export function searchPages(categories: PageCategory[], searchTerm: string): PageCategory[] {
  if (!searchTerm.trim()) return categories;

  const filteredCategories = categories.map(category => ({
    ...category,
    pages: category.pages.filter(page =>
      page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.fileName.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.pages.length > 0);

  return filteredCategories;
}

export function filterPagesByType(categories: PageCategory[], type: 'all' | 'page' | 'component'): PageCategory[] {
  if (type === 'all') return categories;

  return categories.map(category => ({
    ...category,
    pages: category.pages.filter(page => page.type === type)
  })).filter(category => category.pages.length > 0);
}
