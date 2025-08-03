// Конфигурация иерархии страниц для breadcrumbs
export const breadcrumbsHierarchy = {
  // Основные страницы
  home: [],
  contacts: [],
  reviews: [],
  aboutUs: [],
  ourWorks: [],
  services: [],

  // Ремонт под ключ
  turnkeyRenovation: ['services'],
  designerRenovation: ['services', 'turnkeyRenovation'],
  exclusiveRenovation: ['services', 'turnkeyRenovation'],
  studio: ['services', 'turnkeyRenovation'],
  tworoomApartment: ['services', 'turnkeyRenovation'],
  threeroomApartment: ['services', 'turnkeyRenovation'],
  fourroomApartment: ['services', 'turnkeyRenovation'],
  twostoryApartment: ['services', 'turnkeyRenovation'],

  // Ремонт комнат
  roomRenovation: ['services'],
  livingRoom: ['services', 'roomRenovation'],
  bedroom: ['services', 'roomRenovation'],
  childrenRoom: ['services', 'roomRenovation'],
  corridor: ['services', 'roomRenovation'],
  kitchen: ['services', 'roomRenovation'],
  bathroom: ['services', 'roomRenovation'],
  stairs: ['services', 'roomRenovation'],

  // Системы
  systems: ['services'],
  electricalSystem: ['services', 'systems'],
  gasSystem: ['services', 'systems'],
  floorHeating: ['services', 'systems'],
  sewage: ['services', 'systems'],
  climateControl: ['services', 'systems'],

  // Коммерческие помещения
  commercialPremises: ['services'],
  businessCenter: ['services', 'commercialPremises'],
  restaurant: ['services', 'commercialPremises'],
  commercialPremisesRenovation: ['services', 'commercialPremises'],
  office: ['services', 'commercialPremises'],
  warehouse: ['services', 'commercialPremises'],
  fitnessClub: ['services', 'commercialPremises'],
  hotel: ['services', 'commercialPremises'],

  // Услуги
  turnkeyRenovationServices: ['services'],
  roomRenovationServices: ['services'],
  commercialPremisesServices: ['services'],
  systemsServices: ['services'],
};

// Функция для получения breadcrumbs для конкретной страницы
export const getBreadcrumbs = (currentPageKey) => {
  if (!currentPageKey || !breadcrumbsHierarchy[currentPageKey]) {
    return [];
  }

  const hierarchy = breadcrumbsHierarchy[currentPageKey];
  const breadcrumbs = [];

  // Добавляем главную страницу
  breadcrumbs.push('home');

  // Добавляем родительские страницы
  hierarchy.forEach(pageKey => {
    breadcrumbs.push(pageKey);
  });

  // Добавляем текущую страницу (если это не главная)
  if (currentPageKey !== 'home') {
    breadcrumbs.push(currentPageKey);
  }

  return breadcrumbs;
};