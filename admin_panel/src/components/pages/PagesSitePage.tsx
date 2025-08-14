import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FileText, Image, Globe, Edit, Eye, Layers, Code, Settings, FileCode, Search } from 'lucide-react';

interface PageData {
  id: string;
  name: string;
  path: string;
  url: string;
  images: string[];
  texts: {
    language: string;
    namespace: string;
    path: string;
  }[];
  description: string;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonical?: string;
  };
  jsonLd?: string;
  customHtml?: string;
  robots?: string;
  sitemap?: boolean;
}

interface ImageData {
  path: string;
  alt: string;
  title?: string;
}

export function PagesSitePage() {
  const [pages, setPages] = useState<PageData[]>([]);
  const [selectedPage, setSelectedPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [activeTab, setActiveTab] = useState<'images' | 'texts' | 'seo' | 'jsonld' | 'html' | 'robots' | 'sitemap'>('images');
  const [editingAlt, setEditingAlt] = useState<string | null>(null);
  const [altText, setAltText] = useState('');
  const [imageAltTexts, setImageAltTexts] = useState<{[key: string]: string}>({});
  const [showImageEditor, setShowImageEditor] = useState(false);
  const [selectedImageForEdit, setSelectedImageForEdit] = useState<string | null>(null);
  const [htmlPosition, setHtmlPosition] = useState('top');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const navigate = useNavigate();

  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  // Список всех страниц сайта
  const sitePages: PageData[] = [
    {
      id: 'home',
      name: 'Главная страница',
      path: '/',
      url: '/',
      images: ['design.jpg', 'discount.jpg', 'architector.jpg', 'founder_main.png'],
      texts: [
        { language: 'ru', namespace: 'home/HomeStart', path: 'frontend/public/locales/ru/home/HomeStart.json' },
        { language: 'en', namespace: 'home/HomeStart', path: 'frontend/public/locales/en/home/HomeStart.json' },
        { language: 'it', namespace: 'home/HomeStart', path: 'frontend/public/locales/it/home/HomeStart.json' },
        { language: 'ru', namespace: 'home/Calculator', path: 'frontend/public/locales/ru/home/Calculator.json' },
        { language: 'en', namespace: 'home/Calculator', path: 'frontend/public/locales/en/home/Calculator.json' },
        { language: 'it', namespace: 'home/Calculator', path: 'frontend/public/locales/it/home/Calculator.json' },
        { language: 'ru', namespace: 'home/Guarantees', path: 'frontend/public/locales/ru/home/Guarantees.json' },
        { language: 'en', namespace: 'home/Guarantees', path: 'frontend/public/locales/en/home/Guarantees.json' },
        { language: 'it', namespace: 'home/Guarantees', path: 'frontend/public/locales/it/home/Guarantees.json' }
      ],
      description: 'Основная страница сайта с главным контентом'
    },
    {
      id: 'about-us',
      name: 'О нас',
      path: '/about-us',
      url: '/about-construction-company-evo-home',
      images: ['team_images/founder.png', 'team_images/designer.png', 'team_images/engineer.png', 'team_images/project_manager.png', 'founder_main.png', 'about_us_achievments/first_image.png', 'about_us_achievments/second_image.png', 'about_us_achievments/third_image.png', 'about_us_achievments/fourth_image.png', 'about_us_achievments/image1.png', 'about_us_achievments/image2.png', 'about_us_achievments/image3.png', 'about_us_achievments/image4.png', 'about_us_achievments/vector.png', 'team_images/arrow_1.png', 'team_images/arrow_2.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'leftside_yellow_decoration.png', 'rightside_yellow_decoration.png'],
      texts: [
        { language: 'ru', namespace: 'AboutUs', path: 'frontend/public/locales/ru/AboutUs.json' },
        { language: 'en', namespace: 'AboutUs', path: 'frontend/public/locales/en/AboutUs.json' },
        { language: 'it', namespace: 'AboutUs', path: 'frontend/public/locales/it/AboutUs.json' }
      ],
      description: 'Страница о компании и команде'
    },
    {
      id: 'our-works',
      name: 'Наши работы',
      path: '/our-works',
      url: '/gallery-of-renovation-projects-video-and-photo-in-rome',
      images: ['our_works_gallery/1.JPG', 'our_works_gallery/2.JPG', 'our_works_gallery/3.JPG', 'our_works_gallery/4.JPG', 'our_works_gallery/5.JPG', 'our_works_gallery/6.JPG', 'our_works_gallery/7.JPG', 'our_works_gallery/8.JPG', 'our_works_gallery/9.JPG', 'our_works_gallery/10.JPG', 'our_works_gallery/11.JPG', 'our_works_gallery/12.JPG', 'our_works_gallery/13.JPG', 'our_works_gallery/14.JPG', 'our_works_gallery/15.JPG', 'our_works_gallery/16.JPG', 'our_works_gallery/17.JPG', 'our_works_gallery/18.JPG', 'our_works_gallery/19.JPG', 'our_works_gallery/20.JPG', 'our_works_gallery/21.JPG', 'our_works_gallery/22.JPG', 'our_works_gallery/23.JPG', 'our_works_gallery/24.JPG', 'our_works_gallery/29.JPG', 'works/mosaic/image1.png', 'works/mosaic/image2.png', 'works/mosaic/image3.png', 'works/mosaic/image4.png', 'works/mosaic/image5.png', 'works/mosaic/image6.png', 'works/mosaic/image7.png', 'works/mosaic/image8.png', 'works/comparison/toilet_before.png', 'works/comparison/toilet_after.png', 'works/comparison/botique_before.png', 'works/comparison/botique_after.png', 'works/bg_vector1.png', 'works/bg_vector2.png', 'before_after_3.png', 'before_after_4.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png'],
      texts: [
        { language: 'ru', namespace: 'OurWorks', path: 'frontend/public/locales/ru/OurWorks.json' },
        { language: 'en', namespace: 'OurWorks', path: 'frontend/public/locales/en/OurWorks.json' },
        { language: 'it', namespace: 'OurWorks', path: 'frontend/public/locales/it/OurWorks.json' }
      ],
      description: 'Галерея выполненных проектов'
    },
    {
      id: 'contacts',
      name: 'Контакты',
      path: '/contacts',
      url: '/contact-information',
      images: ['contact_form_bg.jpg'],
      texts: [
        { language: 'ru', namespace: 'Contacts', path: 'frontend/public/locales/ru/Contacts.json' },
        { language: 'en', namespace: 'Contacts', path: 'frontend/public/locales/en/Contacts.json' },
        { language: 'it', namespace: 'Contacts', path: 'frontend/public/locales/it/Contacts.json' }
      ],
      description: 'Контактная информация и форма обратной связи'
    },
    {
      id: 'reviews',
      name: 'Отзывы',
      path: '/reviews',
      url: '/reviews',
      images: ['reviews_bg.jpg'],
      texts: [
        { language: 'ru', namespace: 'Reviews', path: 'frontend/public/locales/ru/Reviews.json' },
        { language: 'en', namespace: 'Reviews', path: 'frontend/public/locales/en/Reviews.json' },
        { language: 'it', namespace: 'Reviews', path: 'frontend/public/locales/it/Reviews.json' }
      ],
      description: 'Отзывы клиентов о нашей работе'
    },
    {
      id: 'turnkey-renovation',
      name: 'Ремонт под ключ',
      path: '/turnkey-renovation',
      url: '/renovation-of-an-apartment-turnkey',
      images: ['turnkey_renovation/turnkey_renovation/image.jpg', 'turnkey_renovation/turnkey_renovation/process/first_step.jpg', 'turnkey_renovation/turnkey_renovation/process/second_step.jpg', 'turnkey_renovation/turnkey_renovation/process/third_step.jpg', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/room_renovation/vector.png', 'videos/abouts_us/vector1.png', 'videos/abouts_us/vector2.png'],
      texts: [
        { language: 'ru', namespace: 'turnkey_renovation/TurnkeyRenovation', path: 'frontend/public/locales/ru/turnkey_renovation/TurnkeyRenovation.json' },
        { language: 'en', namespace: 'turnkey_renovation/TurnkeyRenovation', path: 'frontend/public/locales/en/turnkey_renovation/TurnkeyRenovation.json' },
        { language: 'it', namespace: 'turnkey_renovation/TurnkeyRenovation', path: 'frontend/public/locales/it/turnkey_renovation/TurnkeyRenovation.json' }
      ],
      description: 'Услуги ремонта под ключ'
    },
    {
      id: 'designer-renovation',
      name: 'Дизайнерский ремонт',
      path: '/designer-renovation',
      url: '/design-renovation',
      images: ['turnkey_renovation/designer_renovation/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'turnkey_renovation/DesignerRenovation', path: 'frontend/public/locales/ru/turnkey_renovation/DesignerRenovation.json' },
        { language: 'en', namespace: 'turnkey_renovation/DesignerRenovation', path: 'frontend/public/locales/en/turnkey_renovation/DesignerRenovation.json' },
        { language: 'it', namespace: 'turnkey_renovation/DesignerRenovation', path: 'frontend/public/locales/it/turnkey_renovation/DesignerRenovation.json' }
      ],
      description: 'Дизайнерский ремонт квартир'
    },
    {
      id: 'exclusive-renovation',
      name: 'Эксклюзивный ремонт',
      path: '/exclusive-renovation',
      url: '/transform-your-home-with-evohome-exclusive-high-level-renovations',
      images: ['turnkey_renovation/exclusive_renovation/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'turnkey_renovation/ExclusiveRenovation', path: 'frontend/public/locales/ru/turnkey_renovation/ExclusiveRenovation.json' },
        { language: 'en', namespace: 'turnkey_renovation/ExclusiveRenovation', path: 'frontend/public/locales/en/turnkey_renovation/ExclusiveRenovation.json' },
        { language: 'it', namespace: 'turnkey_renovation/ExclusiveRenovation', path: 'frontend/public/locales/it/turnkey_renovation/ExclusiveRenovation.json' }
      ],
      description: 'Эксклюзивный ремонт высокого уровня'
    },
    {
      id: 'studio',
      name: 'Студия',
      path: '/studio',
      url: '/studio-renovation',
      images: ['turnkey_renovation/studio/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'turnkey_renovation/Studio', path: 'frontend/public/locales/ru/turnkey_renovation/Studio.json' },
        { language: 'en', namespace: 'turnkey_renovation/Studio', path: 'frontend/public/locales/en/turnkey_renovation/Studio.json' },
        { language: 'it', namespace: 'turnkey_renovation/Studio', path: 'frontend/public/locales/it/turnkey_renovation/Studio.json' }
      ],
      description: 'Ремонт студий'
    },
    {
      id: 'two-room-apartment',
      name: 'Двухкомнатная квартира',
      path: '/two-room-apartment',
      url: '/two-room-apartment-renovation',
      images: ['turnkey_renovation/tworoom_apartment/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'turnkey_renovation/TworoomApartment', path: 'frontend/public/locales/ru/turnkey_renovation/TworoomApartment.json' },
        { language: 'en', namespace: 'turnkey_renovation/TworoomApartment', path: 'frontend/public/locales/en/turnkey_renovation/TworoomApartment.json' },
        { language: 'it', namespace: 'turnkey_renovation/TworoomApartment', path: 'frontend/public/locales/it/turnkey_renovation/TworoomApartment.json' }
      ],
      description: 'Ремонт двухкомнатных квартир'
    },
    {
      id: 'three-room-apartment',
      name: 'Трехкомнатная квартира',
      path: '/three-room-apartment',
      url: '/three-room-apartment-renovation',
      images: ['turnkey_renovation/threeroom_apartment/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'turnkey_renovation/ThreeroomApartment', path: 'frontend/public/locales/ru/turnkey_renovation/ThreeroomApartment.json' },
        { language: 'en', namespace: 'turnkey_renovation/ThreeroomApartment', path: 'frontend/public/locales/en/turnkey_renovation/ThreeroomApartment.json' },
        { language: 'it', namespace: 'turnkey_renovation/ThreeroomApartment', path: 'frontend/public/locales/it/turnkey_renovation/ThreeroomApartment.json' }
      ],
      description: 'Ремонт трехкомнатных квартир'
    },
    {
      id: 'four-room-apartment',
      name: 'Четырехкомнатная квартира',
      path: '/four-room-apartment',
      url: '/four-room-apartment-renovation-in-rome',
      images: ['turnkey_renovation/fourroom_apartment/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'turnkey_renovation/FourroomApartment', path: 'frontend/public/locales/ru/turnkey_renovation/FourroomApartment.json' },
        { language: 'en', namespace: 'turnkey_renovation/FourroomApartment', path: 'frontend/public/locales/en/turnkey_renovation/FourroomApartment.json' },
        { language: 'it', namespace: 'turnkey_renovation/FourroomApartment', path: 'frontend/public/locales/it/turnkey_renovation/FourroomApartment.json' }
      ],
      description: 'Ремонт четырехкомнатных квартир'
    },
    {
      id: 'two-story-apartment',
      name: 'Двухэтажная квартира',
      path: '/two-story-apartment',
      url: '/two-story-apartment-renovation',
      images: ['turnkey_renovation/twostory_apartment/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'turnkey_renovation/TwolevelApartment', path: 'frontend/public/locales/ru/turnkey_renovation/TwolevelApartment.json' },
        { language: 'en', namespace: 'turnkey_renovation/TwolevelApartment', path: 'frontend/public/locales/en/turnkey_renovation/TwolevelApartment.json' },
        { language: 'it', namespace: 'turnkey_renovation/TwolevelApartment', path: 'frontend/public/locales/it/turnkey_renovation/TwolevelApartment.json' }
      ],
      description: 'Ремонт двухэтажных квартир'
    },
    {
      id: 'room-renovation',
      name: 'Ремонт комнат',
      path: '/room-renovation',
      url: '/room-renovation',
      images: ['room_renovation/room_renovation/image.jpg', 'room_renovation/room_renovation/process/first_step.png', 'room_renovation/room_renovation/process/second_step.jpg', 'room_renovation/room_renovation/process/third_step.jpg', 'room_renovation/room_renovation/process/fourth_step.jpg', 'room_renovation/room_renovation/process/fifth_step.jpg', 'room_renovation/room_renovation/process/sixth_step.jpg', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/room_renovation/arrow_2.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'videos/abouts_us/vector1.png', 'videos/abouts_us/vector2.png'],
      texts: [
        { language: 'ru', namespace: 'room_renovation/RoomRenovation', path: 'frontend/public/locales/ru/room_renovation/RoomRenovation.json' },
        { language: 'en', namespace: 'room_renovation/RoomRenovation', path: 'frontend/public/locales/en/room_renovation/RoomRenovation.json' },
        { language: 'it', namespace: 'room_renovation/RoomRenovation', path: 'frontend/public/locales/it/room_renovation/RoomRenovation.json' }
      ],
      description: 'Ремонт отдельных комнат'
    },
    {
      id: 'living-room',
      name: 'Гостиная',
      path: '/living-room',
      url: '/living-room-renovation',
      images: ['room_renovation/living_room/image.jpg', 'room_renovation/living_room/process/first_step.jpg', 'room_renovation/living_room/process/second_step.jpg', 'room_renovation/living_room/process/third_step.jpg', 'room_renovation/living_room/process/fourth_step.png', 'room_renovation/living_room/process/fifth_step.jpg', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/living_room/arrow_2.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png'],
      texts: [
        { language: 'ru', namespace: 'room_renovation/LivingRoom', path: 'frontend/public/locales/ru/room_renovation/LivingRoom.json' },
        { language: 'en', namespace: 'room_renovation/LivingRoom', path: 'frontend/public/locales/en/room_renovation/LivingRoom.json' },
        { language: 'it', namespace: 'room_renovation/LivingRoom', path: 'frontend/public/locales/it/room_renovation/LivingRoom.json' }
      ],
      description: 'Ремонт гостиной'
    },
    {
      id: 'bedroom',
      name: 'Спальня',
      path: '/bedroom',
      url: '/bedroom-renovation',
      images: ['room_renovation/bedroom/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'room_renovation/Bedroom', path: 'frontend/public/locales/ru/room_renovation/Bedroom.json' },
        { language: 'en', namespace: 'room_renovation/Bedroom', path: 'frontend/public/locales/en/room_renovation/Bedroom.json' },
        { language: 'it', namespace: 'room_renovation/Bedroom', path: 'frontend/public/locales/it/room_renovation/Bedroom.json' }
      ],
      description: 'Ремонт спальни'
    },
    {
      id: 'children-room',
      name: 'Детская комната',
      path: '/children-room',
      url: '/children-room-renovation',
      images: ['room_renovation/children_room/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'room_renovation/ChildrenRoomRenovation', path: 'frontend/public/locales/ru/room_renovation/ChildrenRoomRenovation.json' },
        { language: 'en', namespace: 'room_renovation/ChildrenRoomRenovation', path: 'frontend/public/locales/en/room_renovation/ChildrenRoomRenovation.json' },
        { language: 'it', namespace: 'room_renovation/ChildrenRoomRenovation', path: 'frontend/public/locales/it/room_renovation/ChildrenRoomRenovation.json' }
      ],
      description: 'Ремонт детской комнаты'
    },
    {
      id: 'corridor',
      name: 'Коридор',
      path: '/corridor',
      url: '/corridor-renovation',
      images: ['room_renovation/corridor/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'room_renovation/Corridor', path: 'frontend/public/locales/ru/room_renovation/Corridor.json' },
        { language: 'en', namespace: 'room_renovation/Corridor', path: 'frontend/public/locales/en/room_renovation/Corridor.json' },
        { language: 'it', namespace: 'room_renovation/Corridor', path: 'frontend/public/locales/it/room_renovation/Corridor.json' }
      ],
      description: 'Ремонт коридора'
    },
    {
      id: 'kitchen',
      name: 'Кухня',
      path: '/kitchen',
      url: '/kitchen-renovation',
      images: ['room_renovation/kitchen/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'room_renovation/Kitchen', path: 'frontend/public/locales/ru/room_renovation/Kitchen.json' },
        { language: 'en', namespace: 'room_renovation/Kitchen', path: 'frontend/public/locales/en/room_renovation/Kitchen.json' },
        { language: 'it', namespace: 'room_renovation/Kitchen', path: 'frontend/public/locales/it/room_renovation/Kitchen.json' }
      ],
      description: 'Ремонт кухни'
    },
    {
      id: 'bathroom',
      name: 'Ванная комната',
      path: '/bathroom',
      url: '/bathroom-renovation',
      images: ['room_renovation/bathroom/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'room_renovation/Bathroom', path: 'frontend/public/locales/ru/room_renovation/Bathroom.json' },
        { language: 'en', namespace: 'room_renovation/Bathroom', path: 'frontend/public/locales/en/room_renovation/Bathroom.json' },
        { language: 'it', namespace: 'room_renovation/Bathroom', path: 'frontend/public/locales/it/room_renovation/Bathroom.json' }
      ],
      description: 'Ремонт ванной комнаты'
    },
    {
      id: 'stairs',
      name: 'Лестница',
      path: '/stairs',
      url: '/stairs-renovation',
      images: ['room_renovation/stairs/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'room_renovation/Stairs', path: 'frontend/public/locales/ru/room_renovation/Stairs.json' },
        { language: 'en', namespace: 'room_renovation/Stairs', path: 'frontend/public/locales/en/room_renovation/Stairs.json' },
        { language: 'it', namespace: 'room_renovation/Stairs', path: 'frontend/public/locales/it/room_renovation/Stairs.json' }
      ],
      description: 'Ремонт лестниц'
    },
    {
      id: 'systems',
      name: 'Системы',
      path: '/systems',
      url: '/systems',
      images: ['systems/systems/image.png', 'systems/systems/process/first_step.png', 'systems/systems/process/second_step.png', 'systems/systems/process/third_step.png', 'systems/systems/process/fourth_step.png', 'systems/systems/process/fifth_step.png', 'systems/systems/process/sixth_step.png', 'systems/systems/process/seventh_step.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/living_room/arrow_2.png', 'videos/abouts_us/vector1.png', 'videos/abouts_us/vector2.png'],
      texts: [
        { language: 'ru', namespace: 'systems/Systems', path: 'frontend/public/locales/ru/systems/Systems.json' },
        { language: 'en', namespace: 'systems/Systems', path: 'frontend/public/locales/en/systems/Systems.json' },
        { language: 'it', namespace: 'systems/Systems', path: 'frontend/public/locales/it/systems/Systems.json' }
      ],
      description: 'Инженерные системы'
    },
    {
      id: 'electrical-system',
      name: 'Электрическая система',
      path: '/electrical-system',
      url: '/electrical-system',
      images: ['systems/electrical_systems/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'systems/ElectricalSystem', path: 'frontend/public/locales/ru/systems/ElectricalSystem.json' },
        { language: 'en', namespace: 'systems/ElectricalSystem', path: 'frontend/public/locales/en/systems/ElectricalSystem.json' },
        { language: 'it', namespace: 'systems/ElectricalSystem', path: 'frontend/public/locales/it/systems/ElectricalSystem.json' }
      ],
      description: 'Электрические системы'
    },
    {
      id: 'gas-system',
      name: 'Газовая система',
      path: '/gas-system',
      url: '/gas-system',
      images: ['systems/gas_systems/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'systems/GasSystem', path: 'frontend/public/locales/ru/systems/GasSystem.json' },
        { language: 'en', namespace: 'systems/GasSystem', path: 'frontend/public/locales/en/systems/GasSystem.json' },
        { language: 'it', namespace: 'systems/GasSystem', path: 'frontend/public/locales/it/systems/GasSystem.json' }
      ],
      description: 'Газовые системы'
    },
    {
      id: 'floor-heating',
      name: 'Теплый пол',
      path: '/floor-heating',
      url: '/floor-heating',
      images: ['systems/floor_heating/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'systems/FloorHeating', path: 'frontend/public/locales/ru/systems/FloorHeating.json' },
        { language: 'en', namespace: 'systems/FloorHeating', path: 'frontend/public/locales/en/systems/FloorHeating.json' },
        { language: 'it', namespace: 'systems/FloorHeating', path: 'frontend/public/locales/it/systems/FloorHeating.json' }
      ],
      description: 'Системы теплого пола'
    },
    {
      id: 'sewage',
      name: 'Канализация',
      path: '/sewage',
      url: '/sewage',
      images: ['systems/sewage/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'systems/Sewage', path: 'frontend/public/locales/ru/systems/Sewage.json' },
        { language: 'en', namespace: 'systems/Sewage', path: 'frontend/public/locales/en/systems/Sewage.json' },
        { language: 'it', namespace: 'systems/Sewage', path: 'frontend/public/locales/it/systems/Sewage.json' }
      ],
      description: 'Системы канализации'
    },
    {
      id: 'climate-control',
      name: 'Климат-контроль',
      path: '/climate-control',
      url: '/climate-control',
      images: ['systems/climate_control/image.jpg'],
      texts: [
        { language: 'ru', namespace: 'systems/ClimateControl', path: 'frontend/public/locales/ru/systems/ClimateControl.json' },
        { language: 'en', namespace: 'systems/ClimateControl', path: 'frontend/public/locales/en/systems/ClimateControl.json' },
        { language: 'it', namespace: 'systems/ClimateControl', path: 'frontend/public/locales/it/systems/ClimateControl.json' }
      ],
      description: 'Системы климат-контроля'
    },
    {
      id: 'commercial-premises',
      name: 'Коммерческие помещения',
      path: '/commercial-premises',
      url: '/commercial-premises',
      images: ['commercial_premises/commercial_premises/image.png', 'commercial_premises/commercial_premises/process/first_step.png', 'commercial_premises/commercial_premises/process/second_step.png', 'commercial_premises/commercial_premises/process/third_step.png', 'commercial_premises/commercial_premises/process/fourth_step.png', 'commercial_premises/commercial_premises/process/sixth_step.png', 'commercial_premises/commercial_premises/process/seventh_step.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/living_room/arrow_2.png'],
      texts: [
        { language: 'ru', namespace: 'commercial_premises/CommercialPremises', path: 'frontend/public/locales/ru/commercial_premises/CommercialPremises.json' },
        { language: 'en', namespace: 'commercial_premises/CommercialPremises', path: 'frontend/public/locales/en/commercial_premises/CommercialPremises.json' },
        { language: 'it', namespace: 'commercial_premises/CommercialPremises', path: 'frontend/public/locales/it/commercial_premises/CommercialPremises.json' }
      ],
      description: 'Ремонт коммерческих помещений'
    },
    {
      id: 'business-center',
      name: 'Бизнес-центр',
      path: '/business-center',
      url: '/business-center',
      images: ['commercial_premises/business_center/image.png', 'commercial_premises/business_center/process/first_step.png', 'commercial_premises/business_center/process/second_step.png', 'commercial_premises/business_center/process/third_step.png', 'commercial_premises/business_center/process/fourth_step.png', 'commercial_premises/business_center/process/fifth_step.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/living_room/arrow_2.png'],
      texts: [
        { language: 'ru', namespace: 'commercial_premises/BusinessCenter', path: 'frontend/public/locales/ru/commercial_premises/BusinessCenter.json' },
        { language: 'en', namespace: 'commercial_premises/BusinessCenter', path: 'frontend/public/locales/en/commercial_premises/BusinessCenter.json' },
        { language: 'it', namespace: 'commercial_premises/BusinessCenter', path: 'frontend/public/locales/it/commercial_premises/BusinessCenter.json' }
      ],
      description: 'Ремонт бизнес-центров'
    },
    {
      id: 'restaurant',
      name: 'Ресторан',
      path: '/restaurant',
      url: '/restaurant',
      images: ['commercial_premises/restaurant/image.png', 'commercial_premises/restaurant/process/first_step.png', 'commercial_premises/restaurant/process/second_step.png', 'commercial_premises/restaurant/process/third_step.png', 'commercial_premises/restaurant/process/fourth_step.jpg', 'commercial_premises/restaurant/process/fifth_step.jpg', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/living_room/arrow_2.png'],
      texts: [
        { language: 'ru', namespace: 'commercial_premises/Restaurant', path: 'frontend/public/locales/ru/commercial_premises/Restaurant.json' },
        { language: 'en', namespace: 'commercial_premises/Restaurant', path: 'frontend/public/locales/en/commercial_premises/Restaurant.json' },
        { language: 'it', namespace: 'commercial_premises/Restaurant', path: 'frontend/public/locales/it/commercial_premises/Restaurant.json' }
      ],
      description: 'Ремонт ресторанов'
    },
    {
      id: 'commercial-premises-renovation',
      name: 'Ремонт коммерческих помещений',
      path: '/commercial-premises-renovation',
      url: '/commercial-premises-renovation',
      images: ['commercial_premises/commercial_premises_renovation/image.png', 'commercial_premises/commercial_premises_renovation/process/first_step.png', 'commercial_premises/commercial_premises_renovation/process/second_step.png', 'commercial_premises/commercial_premises_renovation/process/third_step.png', 'commercial_premises/commercial_premises_renovation/process/fourth_step.png', 'commercial_premises/commercial_premises_renovation/process/fifth_step.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/living_room/arrow_2.png'],
      texts: [
        { language: 'ru', namespace: 'commercial_premises/CommercialSpaces', path: 'frontend/public/locales/ru/commercial_premises/CommercialSpaces.json' },
        { language: 'en', namespace: 'commercial_premises/CommercialSpaces', path: 'frontend/public/locales/en/commercial_premises/CommercialSpaces.json' },
        { language: 'it', namespace: 'commercial_premises/CommercialSpaces', path: 'frontend/public/locales/it/commercial_premises/CommercialSpaces.json' }
      ],
      description: 'Ремонт коммерческих помещений'
    },
    {
      id: 'office',
      name: 'Офис',
      path: '/office',
      url: '/office',
      images: ['commercial_premises/office/image.png', 'commercial_premises/office/process/first_step.png', 'commercial_premises/office/process/second_step.png', 'commercial_premises/office/process/third_step.png', 'commercial_premises/office/process/fourth_step.jpg', 'commercial_premises/office/process/fifth_step.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png'],
      texts: [
        { language: 'ru', namespace: 'commercial_premises/Ofice', path: 'frontend/public/locales/ru/commercial_premises/Ofice.json' },
        { language: 'en', namespace: 'commercial_premises/Ofice', path: 'frontend/public/locales/en/commercial_premises/Ofice.json' },
        { language: 'it', namespace: 'commercial_premises/Ofice', path: 'frontend/public/locales/it/commercial_premises/Ofice.json' }
      ],
      description: 'Ремонт офисов'
    },
    {
      id: 'warehouse',
      name: 'Склад',
      path: '/warehouse',
      url: '/warehouse',
      images: ['commercial_premises/warehouse/image.png', 'commercial_premises/warehouse/process/first_step.png', 'commercial_premises/warehouse/process/second_step.png', 'commercial_premises/warehouse/process/third_step.png', 'commercial_premises/warehouse/process/fourth_step.png', 'commercial_premises/warehouse/process/fifth_step.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/living_room/arrow_2.png'],
      texts: [
        { language: 'ru', namespace: 'commercial_premises/Warehouse', path: 'frontend/public/locales/ru/commercial_premises/Warehouse.json' },
        { language: 'en', namespace: 'commercial_premises/Warehouse', path: 'frontend/public/locales/en/commercial_premises/Warehouse.json' },
        { language: 'it', namespace: 'commercial_premises/Warehouse', path: 'frontend/public/locales/it/commercial_premises/Warehouse.json' }
      ],
      description: 'Ремонт складов'
    },
    {
      id: 'fitness-club',
      name: 'Фитнес-клуб',
      path: '/fitness-club',
      url: '/fitness-club',
      images: ['commercial_premises/fitness_club/image.png', 'commercial_premises/fitness_club/process/first_step.png', 'commercial_premises/fitness_club/process/second_step.png', 'commercial_premises/fitness_club/process/third_step.png', 'commercial_premises/fitness_club/process/fourth_step.png', 'commercial_premises/fitness_club/process/fifth_step.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/living_room/arrow_2.png'],
      texts: [
        { language: 'ru', namespace: 'commercial_premises/FitnessClub', path: 'frontend/public/locales/ru/commercial_premises/FitnessClub.json' },
        { language: 'en', namespace: 'commercial_premises/FitnessClub', path: 'frontend/public/locales/en/commercial_premises/FitnessClub.json' },
        { language: 'it', namespace: 'commercial_premises/FitnessClub', path: 'frontend/public/locales/it/commercial_premises/FitnessClub.json' }
      ],
      description: 'Ремонт фитнес-клубов'
    },
    {
      id: 'hotel',
      name: 'Отель',
      path: '/hotel',
      url: '/hotel',
      images: ['commercial_premises/hotel/image.png', 'commercial_premises/hotel/process/first_step.png', 'commercial_premises/hotel/process/second_step.png', 'commercial_premises/hotel/process/third_step.png', 'commercial_premises/hotel/process/fourth_step.png', 'commercial_premises/hotel/process/fifth_step.png', 'leftside_black_decoration.png', 'rightside_black_decoration.png', 'room_renovation/room_renovation/arrow_1.png', 'room_renovation/living_room/arrow_2.png'],
      texts: [
        { language: 'ru', namespace: 'commercial_premises/Hotel', path: 'frontend/public/locales/ru/commercial_premises/Hotel.json' },
        { language: 'en', namespace: 'commercial_premises/Hotel', path: 'frontend/public/locales/en/commercial_premises/Hotel.json' },
        { language: 'it', namespace: 'commercial_premises/Hotel', path: 'frontend/public/locales/it/commercial_premises/Hotel.json' }
      ],
      description: 'Ремонт отелей'
    },
    {
      id: 'services',
      name: 'Услуги',
      path: '/services',
      url: '/services',
      images: [],
      texts: [
        { language: 'ru', namespace: 'home/Services', path: 'frontend/public/locales/ru/home/Services.json' },
        { language: 'en', namespace: 'home/Services', path: 'frontend/public/locales/en/home/Services.json' },
        { language: 'it', namespace: 'home/Services', path: 'frontend/public/locales/it/home/Services.json' }
      ],
      description: 'Все услуги компании'
    },
    {
      id: 'turnkey-renovation-services',
      name: 'Услуги ремонта под ключ',
      path: '/turnkey-renovation-services',
      url: '/turnkey-renovation-services',
      images: [],
      texts: [
        { language: 'ru', namespace: 'turnkey_renovation/TurnkeyRenovation', path: 'frontend/public/locales/ru/turnkey_renovation/TurnkeyRenovation.json' },
        { language: 'en', namespace: 'turnkey_renovation/TurnkeyRenovation', path: 'frontend/public/locales/en/turnkey_renovation/TurnkeyRenovation.json' },
        { language: 'it', namespace: 'turnkey_renovation/TurnkeyRenovation', path: 'frontend/public/locales/it/turnkey_renovation/TurnkeyRenovation.json' }
      ],
      description: 'Услуги ремонта под ключ'
    },
    {
      id: 'room-renovation-services',
      name: 'Услуги ремонта комнат',
      path: '/room-renovation-services',
      url: '/room-renovation-services',
      images: [],
      texts: [
        { language: 'ru', namespace: 'room_renovation/RoomRenovation', path: 'frontend/public/locales/ru/room_renovation/RoomRenovation.json' },
        { language: 'en', namespace: 'room_renovation/RoomRenovation', path: 'frontend/public/locales/en/room_renovation/RoomRenovation.json' },
        { language: 'it', namespace: 'room_renovation/RoomRenovation', path: 'frontend/public/locales/it/room_renovation/RoomRenovation.json' }
      ],
      description: 'Услуги ремонта комнат'
    },
    {
      id: 'commercial-premises-services',
      name: 'Услуги коммерческих помещений',
      path: '/commercial-premises-services',
      url: '/commercial-premises-services',
      images: [],
      texts: [
        { language: 'ru', namespace: 'commercial_premises/CommercialPremises', path: 'frontend/public/locales/ru/commercial_premises/CommercialPremises.json' },
        { language: 'en', namespace: 'commercial_premises/CommercialPremises', path: 'frontend/public/locales/en/commercial_premises/CommercialPremises.json' },
        { language: 'it', namespace: 'commercial_premises/CommercialPremises', path: 'frontend/public/locales/it/commercial_premises/CommercialPremises.json' }
      ],
      description: 'Услуги коммерческих помещений'
    },
    {
      id: 'systems-services',
      name: 'Услуги систем',
      path: '/systems-services',
      url: '/systems-services',
      images: [],
      texts: [
        { language: 'ru', namespace: 'systems/Systems', path: 'frontend/public/locales/ru/systems/Systems.json' },
        { language: 'en', namespace: 'systems/Systems', path: 'frontend/public/locales/en/systems/Systems.json' },
        { language: 'it', namespace: 'systems/Systems', path: 'frontend/public/locales/it/systems/Systems.json' }
      ],
      description: 'Услуги инженерных систем'
    }
  ];

  useEffect(() => {
    // Загружаем данные страниц
    setTimeout(() => {
      setPages(sitePages);
      setLoading(false);
    }, 500);
  }, []);

  // Загружаем динамические данные для выбранной страницы
  const loadPageData = async (pageId: string) => {
    try {
      // Загружаем изображения страницы
      const imagesResponse = await fetch(`${backendUrl}/api/pages/${pageId}/images`, {
        credentials: 'include'
      });
      const pageImages = imagesResponse.ok ? await imagesResponse.json() : [];

      // Загружаем тексты страницы
      const textsResponse = await fetch(`${backendUrl}/api/pages/${pageId}/texts`, {
        credentials: 'include'
      });
      const pageTexts = textsResponse.ok ? await textsResponse.json() : [];

      // Загружаем дополнительные данные страницы (alt тексты, SEO, JSON-LD, HTML, robots, sitemap)
      const dataResponse = await fetch(`${backendUrl}/api/pages/${pageId}/data`, {
        credentials: 'include'
      });
      const pageData = dataResponse.ok ? await dataResponse.json() : {};

      // Обрабатываем изображения - используем все найденные изображения
      const processedImages = pageImages.length > 0 
        ? pageImages.map((img: any) => img.path || img.name).filter(Boolean)
        : [];

      // Обновляем alt тексты
      if (pageData.altTexts) {
        setImageAltTexts(pageData.altTexts);
      }

      // Загружаем расположение HTML блока
      await loadHtmlPosition(pageId);

      // Обновляем данные страницы - приоритет динамическим данным
      setPages(prevPages => 
        prevPages.map(page => 
          page.id === pageId 
            ? { 
                ...page, 
                images: processedImages.length > 0 ? processedImages : page.images,
                texts: pageTexts.length > 0 ? pageTexts.map((text: any) => ({
                  language: text.language,
                  namespace: text.namespace,
                  path: text.path
                })) : page.texts,
                jsonLd: pageData.jsonLd || page.jsonLd,
                customHtml: pageData.customHtml || page.customHtml,
                robots: pageData.robots || page.robots,
                sitemap: pageData.sitemap !== undefined ? pageData.sitemap : page.sitemap
              }
            : page
        )
      );

      // Обновляем selectedPage с новыми данными - приоритет динамическим данным
      setSelectedPage(prevSelectedPage => {
        if (prevSelectedPage && prevSelectedPage.id === pageId) {
          return {
            ...prevSelectedPage,
            images: processedImages.length > 0 ? processedImages : prevSelectedPage.images,
            texts: pageTexts.length > 0 ? pageTexts.map((text: any) => ({
              language: text.language,
              namespace: text.namespace,
              path: text.path
            })) : prevSelectedPage.texts,
            jsonLd: pageData.jsonLd || prevSelectedPage.jsonLd,
            customHtml: pageData.customHtml || prevSelectedPage.customHtml,
            robots: pageData.robots || prevSelectedPage.robots,
            sitemap: pageData.sitemap !== undefined ? pageData.sitemap : prevSelectedPage.sitemap
          };
        }
        return prevSelectedPage;
      });
    } catch (error) {
      console.error('Ошибка загрузки данных страницы:', error);
    }
  };

  const handlePageClick = async (page: PageData) => {
    setSelectedPage(page);
    // Загружаем динамические данные для страницы
    await loadPageData(page.id);
  };

  const handleBackToList = () => {
    setSelectedPage(null);
  };

  const handleReplaceImage = async (imagePath: string) => {
    try {
      // Создаем input для выбора файла
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;

        // Создаем FormData для отправки файла
        const formData = new FormData();
        formData.append('file', file);
        formData.append('imagePath', imagePath);

        try {
          const response = await fetch(`${backendUrl}/api/images/replace`, {
            method: 'POST',
            credentials: 'include',
            body: formData
          });

          if (response.ok) {
            alert('✅ Изображение успешно заменено');
            // Перезагружаем данные страницы
            if (selectedPage) {
              await loadPageData(selectedPage.id);
            }
          } else {
            throw new Error('Ошибка замены изображения');
          }
        } catch (error) {
          console.error('Ошибка замены изображения:', error);
          alert('❌ Ошибка замены изображения');
        }
      };
      input.click();
    } catch (error) {
      console.error('Ошибка при замене изображения:', error);
      alert('❌ Ошибка при замене изображения');
    }
  };

  const handleEditText = (text: any) => {
    // Перенаправляем на страницу редактирования текстов
    if (text && text.language && text.namespace) {
      navigate(`/dashboard/texts?lang=${text.language}&ns=${text.namespace}`);
    } else {
      navigate('/texts');
    }
  };

  const handleEditAlt = (imagePath: string, currentAlt: string = '') => {
    setEditingAlt(imagePath);
    setAltText(currentAlt);
  };

  const handleSaveAlt = async () => {
    if (!editingAlt || !selectedPage) return;

    try {
      const response = await fetch(`${backendUrl}/api/images/alt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          imagePath: editingAlt,
          altText: altText,
          pageId: selectedPage.id
        })
      });

      if (response.ok) {
        setImageAltTexts(prev => ({
          ...prev,
          [editingAlt]: altText
        }));
        alert('✅ Alt текст сохранен');
      } else {
        throw new Error('Ошибка сохранения alt текста');
      }
    } catch (error) {
      console.error('Ошибка сохранения alt текста:', error);
      alert('❌ Ошибка сохранения alt текста');
    } finally {
      setEditingAlt(null);
      setAltText('');
    }
  };

  const handleSaveSEO = async (seoData: any) => {
    if (!selectedPage) return;

    try {
      const response = await fetch(`${backendUrl}/api/pages/${selectedPage.id}/seo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(seoData)
      });

      if (response.ok) {
        setSelectedPage(prev => prev ? { ...prev, seo: seoData } : null);
        alert('✅ SEO данные сохранены');
      } else {
        throw new Error('Ошибка сохранения SEO данных');
      }
    } catch (error) {
      console.error('Ошибка сохранения SEO данных:', error);
      alert('❌ Ошибка сохранения SEO данных');
    }
  };

  const handleSaveJsonLd = async (jsonLd: string) => {
    if (!selectedPage) return;

    try {
      const response = await fetch(`${backendUrl}/api/pages/${selectedPage.id}/jsonld`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ jsonLd })
      });

      if (response.ok) {
        setSelectedPage(prev => prev ? { ...prev, jsonLd } : null);
        alert('✅ JSON-LD данные сохранены');
      } else {
        throw new Error('Ошибка сохранения JSON-LD данных');
      }
    } catch (error) {
      console.error('Ошибка сохранения JSON-LD данных:', error);
      alert('❌ Ошибка сохранения JSON-LD данных');
    }
  };

  const handleSaveCustomHtml = async (customHtml: string) => {
    if (!selectedPage) return;

    try {
      const response = await fetch(`${backendUrl}/api/pages/${selectedPage.id}/html`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ customHtml })
      });

      if (response.ok) {
        setSelectedPage(prev => prev ? { ...prev, customHtml } : null);
        alert('✅ HTML код сохранен');
      } else {
        throw new Error('Ошибка сохранения HTML кода');
      }
    } catch (error) {
      console.error('Ошибка сохранения HTML кода:', error);
      alert('❌ Ошибка сохранения HTML кода');
    }
  };

  const handleDeleteHtml = async () => {
    if (!selectedPage) return;
    
    try {
      const response = await fetch(`${backendUrl}/api/pages/${selectedPage.id}/html`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        alert('✅ HTML код удален');
        setShowDeleteConfirm(false);
        // Обновляем данные страницы
        loadPageData(selectedPage.id);
      } else {
        const error = await response.json();
        alert(`❌ Ошибка удаления: ${error.error}`);
      }
    } catch (error) {
      console.error('Ошибка удаления HTML:', error);
      alert('❌ Ошибка удаления HTML');
    }
  };

  const handleSaveHtmlPosition = async (position: string) => {
    if (!selectedPage) return;
    
    try {
      const response = await fetch(`${backendUrl}/api/pages/${selectedPage.id}/html-position`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ position }),
      });

      if (response.ok) {
        alert('✅ Расположение HTML блока сохранено');
        setHtmlPosition(position);
      } else {
        const error = await response.json();
        alert(`❌ Ошибка сохранения: ${error.error}`);
      }
    } catch (error) {
      console.error('Ошибка сохранения расположения HTML:', error);
      alert('❌ Ошибка сохранения расположения HTML');
    }
  };

  const loadHtmlPosition = async (pageId: string) => {
    try {
      const response = await fetch(`${backendUrl}/api/pages/${pageId}/html-position`);
      if (response.ok) {
        const data = await response.json();
        setHtmlPosition(data.position);
      }
    } catch (error) {
      console.error('Ошибка загрузки расположения HTML:', error);
    }
  };

  const handleSaveRobots = async (robots: string) => {
    if (!selectedPage) return;

    try {
      const response = await fetch(`${backendUrl}/api/pages/${selectedPage.id}/robots`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ robots })
      });

      if (response.ok) {
        setSelectedPage(prev => prev ? { ...prev, robots } : null);
        alert('✅ Robots.txt данные сохранены');
      } else {
        throw new Error('Ошибка сохранения robots.txt данных');
      }
    } catch (error) {
      console.error('Ошибка сохранения robots.txt данных:', error);
      alert('❌ Ошибка сохранения robots.txt данных');
    }
  };

  const handleToggleSitemap = async (sitemap: boolean) => {
    if (!selectedPage) return;

    try {
      const response = await fetch(`${backendUrl}/api/pages/${selectedPage.id}/sitemap`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ sitemap })
      });

      if (response.ok) {
        setSelectedPage(prev => prev ? { ...prev, sitemap } : null);
        alert(`✅ Страница ${sitemap ? 'добавлена в' : 'удалена из'} sitemap`);
      } else {
        throw new Error('Ошибка обновления sitemap');
      }
    } catch (error) {
      console.error('Ошибка обновления sitemap:', error);
      alert('❌ Ошибка обновления sitemap');
    }
  };

  const handleEditImage = (imagePath: string) => {
    setSelectedImageForEdit(imagePath);
    setShowImageEditor(true);
  };

  if (loading) {
    return (
      <div className="px-6 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Загрузка страниц...</p>
        </div>
      </div>
    );
  }

  if (selectedPage) {
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
                onClick={handleBackToList}
                className="text-blue-600 hover:text-blue-800 mb-2 flex items-center"
              >
                ← Назад к списку
              </button>
              <h1 className="text-2xl font-light text-gray-800 mb-1">
                {selectedPage.name}
              </h1>
              <p className="text-sm text-gray-500">
                {selectedPage.description}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">URL:</span>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                {selectedPage.url}
              </code>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                <button
                  onClick={() => setActiveTab('images')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'images'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Image className="w-4 h-4 inline mr-2" />
                  Изображения
                </button>
                <button
                  onClick={() => setActiveTab('texts')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'texts'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <FileText className="w-4 h-4 inline mr-2" />
                  Тексты
                </button>
                <button
                  onClick={() => setActiveTab('seo')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'seo'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Search className="w-4 h-4 inline mr-2" />
                  SEO
                </button>
                <button
                  onClick={() => setActiveTab('jsonld')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'jsonld'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Code className="w-4 h-4 inline mr-2" />
                  JSON-LD
                </button>
                <button
                  onClick={() => setActiveTab('html')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'html'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <FileCode className="w-4 h-4 inline mr-2" />
                  HTML
                </button>
                <button
                  onClick={() => setActiveTab('robots')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'robots'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Settings className="w-4 h-4 inline mr-2" />
                  Robots.txt
                </button>
                <button
                  onClick={() => setActiveTab('sitemap')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'sitemap'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Globe className="w-4 h-4 inline mr-2" />
                  Sitemap
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'images' && (
                <div>
                  <div className="flex items-center mb-4">
                    <Image className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">
                      Изображения ({selectedPage.images.length})
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {selectedPage.images && selectedPage.images.length > 0 ? (
                      selectedPage.images.map((image, index) => (
                        <div key={index} className="relative group border rounded-lg overflow-hidden">
                          <img
                            src={`${backendUrl}/frontend-assets/${image}`}
                            alt={imageAltTexts[image] || image}
                            className="w-full h-32 object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center space-x-2">
                            <button 
                              onClick={() => handleReplaceImage(image)}
                              className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-3 py-1 rounded text-sm transition-opacity hover:bg-gray-100"
                            >
                              Заменить
                            </button>
                            <button 
                              onClick={() => handleEditAlt(image, imageAltTexts[image] || '')}
                              className="opacity-0 group-hover:opacity-100 bg-blue-500 text-white px-3 py-1 rounded text-sm transition-opacity hover:bg-blue-600"
                            >
                              Alt
                            </button>
                            <button 
                              onClick={() => handleEditImage(image)}
                              className="opacity-0 group-hover:opacity-100 bg-green-500 text-white px-3 py-1 rounded text-sm transition-opacity hover:bg-green-600"
                            >
                              Обрезать
                            </button>
                          </div>
                          <div className="p-2">
                            <p className="text-xs text-gray-500 truncate">{image}</p>
                            {imageAltTexts[image] && (
                              <p className="text-xs text-blue-600 truncate" title={imageAltTexts[image]}>
                                Alt: {imageAltTexts[image]}
                              </p>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 text-center py-8 text-gray-500">
                        <Image className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                        <p>Изображения не найдены</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'texts' && (
                <div>
                  <div className="flex items-center mb-4">
                    <FileText className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">
                      Тексты ({selectedPage.texts.length})
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {selectedPage.texts.map((text, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <Globe className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium text-gray-700">
                              {text.language.toUpperCase()}
                            </span>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {text.namespace}
                            </span>
                          </div>
                          <button 
                            onClick={() => handleEditText(text)}
                            className="text-blue-600 hover:text-blue-800 text-sm"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-gray-500 truncate">
                          {text.path}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'seo' && (
                <div>
                  <div className="flex items-center mb-4">
                    <Search className="w-5 h-5 text-purple-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">SEO настройки</h3>
                  </div>
                  <SEOForm 
                    seo={selectedPage.seo || {}} 
                    onSave={handleSaveSEO}
                  />
                </div>
              )}

              {activeTab === 'jsonld' && (
                <div>
                  <div className="flex items-center mb-4">
                    <Code className="w-5 h-5 text-orange-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">JSON-LD микроразметка</h3>
                  </div>
                  <JsonLdForm 
                    jsonLd={selectedPage.jsonLd || ''} 
                    onSave={handleSaveJsonLd}
                  />
                </div>
              )}

              {activeTab === 'html' && (
                <div>
                  <div className="flex items-center mb-4">
                    <FileCode className="w-5 h-5 text-green-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">Пользовательский HTML код</h3>
                  </div>
                  <HtmlForm 
                    customHtml={selectedPage.customHtml || ''} 
                    onSave={handleSaveCustomHtml}
                    onDelete={handleDeleteHtml}
                    position={htmlPosition}
                    onPositionChange={handleSaveHtmlPosition}
                    showDeleteConfirm={showDeleteConfirm}
                    onShowDeleteConfirm={setShowDeleteConfirm}
                  />
                </div>
              )}

              {activeTab === 'robots' && (
                <div>
                  <div className="flex items-center mb-4">
                    <Settings className="w-5 h-5 text-gray-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">Robots.txt директивы</h3>
                  </div>
                  <RobotsForm 
                    robots={selectedPage.robots || 'index, follow'} 
                    onSave={handleSaveRobots}
                  />
                </div>
              )}

              {activeTab === 'sitemap' && (
                <div>
                  <div className="flex items-center mb-4">
                    <Globe className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-lg font-medium text-gray-800">Sitemap настройки</h3>
                  </div>
                  <SitemapForm 
                    sitemap={selectedPage.sitemap || false} 
                    onSave={handleToggleSitemap}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Alt Text Modal */}
          {editingAlt && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-6 w-96">
                <h3 className="text-lg font-medium mb-4">Редактировать Alt текст</h3>
                <p className="text-sm text-gray-500 mb-2">Изображение: {editingAlt}</p>
                <textarea
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  className="w-full h-24 border border-gray-300 rounded p-2 text-sm"
                  placeholder="Введите alt текст для изображения..."
                />
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={() => setEditingAlt(null)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Отмена
                  </button>
                  <button
                    onClick={handleSaveAlt}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Сохранить
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Image Editor Modal */}
          {showImageEditor && selectedImageForEdit && (
            <ImageEditor 
              imagePath={selectedImageForEdit}
              onClose={() => {
                setShowImageEditor(false);
                setSelectedImageForEdit(null);
              }}
              onSave={(editedImage) => {
                // Handle edited image
                setShowImageEditor(false);
                setSelectedImageForEdit(null);
              }}
            />
          )}
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
              Страницы сайта
            </h1>
            <p className="text-sm text-gray-500">
              Управление страницами, их изображениями и текстами
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
            >
              <Layers className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
            >
              <Image className="w-4 h-4" />
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="space-y-4">
            {pages.map(page => (
              <motion.div
                key={page.id}
                layout
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handlePageClick(page)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        {page.images.length > 0 && (
                          <img
                            src={`${backendUrl}/frontend-assets/${page.images[0]}`}
                            alt={page.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{page.name}</h3>
                        <p className="text-sm text-gray-500">{page.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-400">
                          <span>📷 {Math.min(page.images.length, 8)} изображений{page.images.length > 8 ? ' (макс. 8)' : ''}</span>
                          <span>📝 {page.texts.length} языков</span>
                          <span>🔗 {page.url}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map(page => (
              <motion.div
                key={page.id}
                layout
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handlePageClick(page)}
              >
                <div className="h-48 bg-gray-100 relative">
                  {page.images.length > 0 && (
                    <img
                      src={`${backendUrl}/frontend-assets/${page.images[0]}`}
                      alt={page.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{page.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{page.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>📷 {Math.min(page.images.length, 8)}{page.images.length > 8 ? '+' : ''}</span>
                    <span>📝 {page.texts.length}</span>
                    <span>🔗 {page.url}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Компоненты форм
function SEOForm({ seo, onSave }: { seo: any, onSave: (data: any) => void }) {
  const [formData, setFormData] = useState(seo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="Заголовок страницы"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
          <input
            type="text"
            value={formData.description || ''}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="Описание страницы"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Keywords</label>
          <input
            type="text"
            value={formData.keywords || ''}
            onChange={(e) => setFormData({...formData, keywords: e.target.value})}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="Ключевые слова через запятую"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
          <input
            type="url"
            value={formData.canonical || ''}
            onChange={(e) => setFormData({...formData, canonical: e.target.value})}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="https://example.com/page"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">OG Title</label>
          <input
            type="text"
            value={formData.ogTitle || ''}
            onChange={(e) => setFormData({...formData, ogTitle: e.target.value})}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="Open Graph заголовок"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">OG Description</label>
          <input
            type="text"
            value={formData.ogDescription || ''}
            onChange={(e) => setFormData({...formData, ogDescription: e.target.value})}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="Open Graph описание"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">OG Image</label>
          <input
            type="url"
            value={formData.ogImage || ''}
            onChange={(e) => setFormData({...formData, ogImage: e.target.value})}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            placeholder="https://example.com/og-image.jpg"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Сохранить SEO
        </button>
      </div>
    </form>
  );
}

function JsonLdForm({ jsonLd, onSave }: { jsonLd: string, onSave: (data: string) => void }) {
  const [code, setCode] = useState(jsonLd);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(code);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">JSON-LD код</label>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-64 border border-gray-300 rounded p-3 font-mono text-sm"
          placeholder='{"@context": "https://schema.org", "@type": "WebPage", "name": "Page Name"}'
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Сохранить JSON-LD
        </button>
      </div>
    </form>
  );
}

function HtmlForm({ 
  customHtml, 
  onSave, 
  onDelete, 
  position, 
  onPositionChange, 
  showDeleteConfirm, 
  onShowDeleteConfirm 
}: { 
  customHtml: string, 
  onSave: (data: string) => void,
  onDelete: () => void,
  position: string,
  onPositionChange: (position: string) => void,
  showDeleteConfirm: boolean,
  onShowDeleteConfirm: (show: boolean) => void
}) {
  const [code, setCode] = useState(customHtml);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(code);
  };

  return (
    <div className="space-y-4">
      {/* Выбор расположения */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Расположение HTML блока на странице</label>
        <select
          value={position}
          onChange={(e) => onPositionChange(e.target.value)}
          className="w-full border border-gray-300 rounded p-2"
        >
          <option value="top">Вверху страницы</option>
          <option value="after-header">После заголовка</option>
          <option value="before-footer">Перед футером</option>
          <option value="bottom">Внизу страницы</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Выберите, где будет отображаться HTML блок на странице
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Пользовательский HTML код</label>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 border border-gray-300 rounded p-3 font-mono text-sm"
            placeholder="<div>Ваш HTML код здесь</div>"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => onShowDeleteConfirm(true)}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Удалить HTML
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Сохранить HTML
          </button>
        </div>
      </form>

      {/* Модальное окно подтверждения удаления */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-medium mb-4">Подтверждение удаления</h3>
            <p className="text-sm text-gray-500 mb-4">
              Вы уверены, что хотите удалить HTML код? Это действие нельзя отменить.
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => onShowDeleteConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Отмена
              </button>
              <button
                onClick={onDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RobotsForm({ robots, onSave }: { robots: string, onSave: (data: string) => void }) {
  const [directives, setDirectives] = useState(robots);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(directives);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Robots.txt директивы</label>
        <textarea
          value={directives}
          onChange={(e) => setDirectives(e.target.value)}
          className="w-full h-32 border border-gray-300 rounded p-3 font-mono text-sm"
          placeholder="index, follow"
        />
        <p className="text-xs text-gray-500 mt-1">
          Примеры: index, follow | noindex, nofollow | index, nofollow
        </p>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Сохранить Robots
        </button>
      </div>
    </form>
  );
}

function SitemapForm({ sitemap, onSave }: { sitemap: boolean, onSave: (data: boolean) => void }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
        <div>
          <h4 className="font-medium text-gray-800">Включить в sitemap</h4>
          <p className="text-sm text-gray-500">
            Добавить эту страницу в автоматически генерируемый sitemap.xml
          </p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={sitemap}
            onChange={(e) => onSave(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-800 mb-2">Информация о Sitemap</h4>
        <p className="text-sm text-blue-700">
          Sitemap автоматически генерируется и доступен по адресу: <code className="bg-blue-100 px-1 rounded">/sitemap.xml</code>
        </p>
      </div>
    </div>
  );
}

function ImageEditor({ imagePath, onClose, onSave }: { 
  imagePath: string; 
  onClose: () => void; 
  onSave: (editedImage: string) => void; 
}) {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 200, height: 200 });
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImage(img);
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      setCanvas(canvas);
    };
    img.src = `${(import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001'}/frontend-assets/${imagePath}`;
  }, [imagePath]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    // Handle crop area movement
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCrop = () => {
    if (!canvas || !image) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.scale(scale, scale);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);
    ctx.restore();

    const croppedCanvas = document.createElement('canvas');
    croppedCanvas.width = crop.width;
    croppedCanvas.height = crop.height;
    const croppedCtx = croppedCanvas.getContext('2d');
    if (croppedCtx) {
      croppedCtx.drawImage(canvas, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
      const dataUrl = croppedCanvas.toDataURL('image/jpeg', 0.8);
      onSave(dataUrl);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-4/5 h-4/5 max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Редактировать изображение</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>
        
        <div className="flex space-x-4 h-full">
          <div className="flex-1 border border-gray-300 rounded overflow-hidden">
            {image && (
              <div 
                className="relative cursor-move"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                <img
                  src={image.src}
                  alt="Редактируемое изображение"
                  className="max-w-full max-h-full"
                  style={{
                    transform: `scale(${scale}) rotate(${rotation}deg)`
                  }}
                />
                <div
                  className="absolute border-2 border-blue-500 bg-blue-500 bg-opacity-20"
                  style={{
                    left: crop.x,
                    top: crop.y,
                    width: crop.width,
                    height: crop.height
                  }}
                />
              </div>
            )}
          </div>
          
          <div className="w-64 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Масштаб</label>
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.1"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{Math.round(scale * 100)}%</span>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Поворот</label>
              <input
                type="range"
                min="0"
                max="360"
                value={rotation}
                onChange={(e) => setRotation(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{rotation}°</span>
            </div>
            
            <div className="space-y-2">
              <button
                onClick={handleCrop}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Обрезать и сохранить
              </button>
              <button
                onClick={onClose}
                className="w-full bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}