import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ImageIcon, Search, Filter, Upload, RotateCcw, FolderIcon, MapPin } from 'lucide-react';
import { ImageEditor } from './ImageEditor';

interface FrontendImage {
  id: string;
  name: string;
  path: string;
  category: string;
  usedIn: string[];
  size: string;
  dimensions?: { width: number; height: number };
  fullPath: string;
}

export function FullImagesPage() {
  const [images, setImages] = useState<FrontendImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<FrontendImage[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [showImageEditor, setShowImageEditor] = useState(false);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [selectedImagePath, setSelectedImagePath] = useState<string>('');
  const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';

  // Категории изображений формируются динамически на основе массива изображений
  const categories = React.useMemo(() => {
    const cats = images.map(img => img.category).filter(Boolean);
    // Уникальные категории, кроме пустых
    return Array.from(new Set(cats));
  }, [images]);

  // Полный список изображений из frontend проекта
  const frontendImages: FrontendImage[] = [
    // Декорации
    { id: '1', name: 'leftside_black_decoration.png', path: 'src/assets/images/', category: 'Декорации', usedIn: ['OurWorks.jsx', 'AboutUs.jsx', 'TurnkeyRenovation.jsx'], size: '2.7 KB', fullPath: 'frontend/src/assets/images/leftside_black_decoration.png' },
    { id: '2', name: 'rightside_black_decoration.png', path: 'src/assets/images/', category: 'Декорации', usedIn: ['OurWorks.jsx', 'AboutUs.jsx', 'TurnkeyRenovation.jsx'], size: '2.7 KB', fullPath: 'frontend/src/assets/images/rightside_black_decoration.png' },
    { id: '3', name: 'leftside_yellow_decoration.png', path: 'src/assets/images/', category: 'Декорации', usedIn: ['AboutUs.jsx'], size: '2.7 KB', fullPath: 'frontend/src/assets/images/leftside_yellow_decoration.png' },
    { id: '4', name: 'rightside_yellow_decoration.png', path: 'src/assets/images/', category: 'Декорации', usedIn: ['AboutUs.jsx'], size: '2.7 KB', fullPath: 'frontend/src/assets/images/rightside_yellow_decoration.png' },

    // Команда
    { id: '5', name: 'founder.png', path: 'src/assets/images/team_images/', category: 'Команда', usedIn: ['AboutUs.jsx'], size: '351 KB', fullPath: 'frontend/src/assets/images/team_images/founder.png' },
    { id: '6', name: 'designer.png', path: 'src/assets/images/team_images/', category: 'Команда', usedIn: ['AboutUs.jsx'], size: '195 KB', fullPath: 'frontend/src/assets/images/team_images/designer.png' },
    { id: '7', name: 'engineer.png', path: 'src/assets/images/team_images/', category: 'Команда', usedIn: ['AboutUs.jsx'], size: '195 KB', fullPath: 'frontend/src/assets/images/team_images/engineer.png' },
    { id: '8', name: 'project_manager.png', path: 'src/assets/images/team_images/', category: 'Команда', usedIn: ['AboutUs.jsx'], size: '195 KB', fullPath: 'frontend/src/assets/images/team_images/project_manager.png' },
    { id: '9', name: 'arrow_1.png', path: 'src/assets/images/team_images/', category: 'Команда', usedIn: ['AboutUs.jsx'], size: '87 KB', fullPath: 'frontend/src/assets/images/team_images/arrow_1.png' },
    { id: '10', name: 'arrow_2.png', path: 'src/assets/images/team_images/', category: 'Команда', usedIn: ['AboutUs.jsx'], size: '46 KB', fullPath: 'frontend/src/assets/images/team_images/arrow_2.png' },

    // Достижения
    { id: '11', name: 'first_image.png', path: 'src/assets/images/about_us_achievments/', category: 'О нас (достижения)', usedIn: ['AboutUs.jsx'], size: '327 KB', fullPath: 'frontend/src/assets/images/about_us_achievments/first_image.png' },
    { id: '12', name: 'second_image.png', path: 'src/assets/images/about_us_achievments/', category: 'О нас (достижения)', usedIn: ['AboutUs.jsx'], size: '348 KB', fullPath: 'frontend/src/assets/images/about_us_achievments/second_image.png' },
    { id: '13', name: 'third_image.png', path: 'src/assets/images/about_us_achievments/', category: 'О нас (достижения)', usedIn: ['AboutUs.jsx'], size: '402 KB', fullPath: 'frontend/src/assets/images/about_us_achievments/third_image.png' },
    { id: '14', name: 'fourth_image.png', path: 'src/assets/images/about_us_achievments/', category: 'О нас (достижения)', usedIn: ['AboutUs.jsx'], size: '307 KB', fullPath: 'frontend/src/assets/images/about_us_achievments/fourth_image.png' },
    { id: '15', name: 'image1.png', path: 'src/assets/images/about_us_achievments/', category: 'О нас (достижения)', usedIn: ['AboutUs.jsx'], size: '332 KB', fullPath: 'frontend/src/assets/images/about_us_achievments/image1.png' },
    { id: '16', name: 'image2.png', path: 'src/assets/images/about_us_achievments/', category: 'О нас (достижения)', usedIn: ['AboutUs.jsx'], size: '702 KB', fullPath: 'frontend/src/assets/images/about_us_achievments/image2.png' },
    { id: '17', name: 'image3.png', path: 'src/assets/images/about_us_achievments/', category: 'О нас (достижения)', usedIn: ['AboutUs.jsx'], size: '412 KB', fullPath: 'frontend/src/assets/images/about_us_achievments/image3.png' },
    { id: '18', name: 'image4.png', path: 'src/assets/images/about_us_achievments/', category: 'О нас (достижения)', usedIn: ['AboutUs.jsx'], size: '897 KB', fullPath: 'frontend/src/assets/images/about_us_achievments/image4.png' },
    { id: '19', name: 'vector.png', path: 'src/assets/images/about_us_achievments/', category: 'О нас (достижения)', usedIn: ['AboutUs.jsx'], size: '760 KB', fullPath: 'frontend/src/assets/images/about_us_achievments/vector.png' },

    // Основные изображения
    { id: '20', name: 'architector.jpg', path: 'src/assets/images/', category: 'Главная', usedIn: ['Architect.jsx'], size: '664 KB', fullPath: 'frontend/src/assets/images/architector.jpg' },
    { id: '21', name: 'design.jpg', path: 'src/assets/images/', category: 'Главная', usedIn: ['Design.jsx'], size: '387 KB', fullPath: 'frontend/src/assets/images/design.jpg' },
    { id: '22', name: 'discount.jpg', path: 'src/assets/images/', category: 'Главная', usedIn: ['Discount.jsx'], size: '866 KB', fullPath: 'frontend/src/assets/images/discount.jpg' },
    { id: '23', name: 'founder_main.png', path: 'src/assets/images/', category: 'Главная', usedIn: ['AboutUs.jsx'], size: '991 KB', fullPath: 'frontend/src/assets/images/founder_main.png' },

    // Фоновые изображения
    { id: '24', name: 'home_start_bg.jpg', path: 'src/assets/images/', category: 'Фоны', usedIn: ['HomeStart.jsx'], size: '85 KB', fullPath: 'frontend/src/assets/images/home_start_bg.jpg' },
    { id: '25', name: 'footer_bg.jpg', path: 'src/assets/images/', category: 'Фоны', usedIn: ['Footer.jsx'], size: '52 KB', fullPath: 'frontend/src/assets/images/footer_bg.jpg' },
    { id: '26', name: 'contact_form_bg.jpg', path: 'src/assets/images/', category: 'Фоны', usedIn: ['Calculator.jsx'], size: '93 KB', fullPath: 'frontend/src/assets/images/contact_form_bg.jpg' },
    { id: '27', name: 'calculator_bg_img.jpg', path: 'src/assets/images/', category: 'Фоны', usedIn: ['Calculator.jsx'], size: '29 KB', fullPath: 'frontend/src/assets/images/calculator_bg_img.jpg' },
    { id: '28', name: 'review_form_bg.jpg', path: 'src/assets/images/', category: 'Фоны', usedIn: ['Reviews.jsx'], size: '113 KB', fullPath: 'frontend/src/assets/images/review_form_bg.jpg' },
    { id: '29', name: 'reviews_bg.jpg', path: 'src/assets/images/', category: 'Фоны', usedIn: ['Reviews.jsx'], size: '73 KB', fullPath: 'frontend/src/assets/images/reviews_bg.jpg' },

    // До/После
    { id: '30', name: 'before_after_1.png', path: 'src/assets/images/', category: 'До/После', usedIn: ['ImageComparisonSlider.jsx'], size: '508 KB', fullPath: 'frontend/src/assets/images/before_after_1.png' },
    { id: '31', name: 'before_after_2.png', path: 'src/assets/images/', category: 'До/После', usedIn: ['ImageComparisonSlider.jsx'], size: '483 KB', fullPath: 'frontend/src/assets/images/before_after_2.png' },
    { id: '32', name: 'before_after_3.png', path: 'src/assets/images/', category: 'До/После', usedIn: ['AboutCompanyHome.jsx'], size: '594 KB', fullPath: 'frontend/src/assets/images/before_after_3.png' },
    { id: '33', name: 'before_after_4.png', path: 'src/assets/images/', category: 'До/После', usedIn: ['AboutCompanyHome.jsx'], size: '505 KB', fullPath: 'frontend/src/assets/images/before_after_4.png' },

    // Векторы
    { id: '34', name: 'vector1.png', path: 'src/assets/images/', category: 'Векторы', usedIn: ['FiveReasons.jsx'], size: '246 KB', fullPath: 'frontend/src/assets/images/vector1.png' },
    { id: '35', name: 'vector2.png', path: 'src/assets/images/', category: 'Векторы', usedIn: ['FiveReasons.jsx'], size: '427 KB', fullPath: 'frontend/src/assets/images/vector2.png' },
    { id: '36', name: 'reviews_vector_1.png', path: 'src/assets/images/', category: 'Векторы', usedIn: ['Reviews.jsx'], size: '569 KB', fullPath: 'frontend/src/assets/images/reviews_vector_1.png' },
    { id: '37', name: 'reviews_vector_2.png', path: 'src/assets/images/', category: 'Векторы', usedIn: ['Reviews.jsx'], size: '555 KB', fullPath: 'frontend/src/assets/images/reviews_vector_2.png' },
    { id: '38', name: 'van.png', path: 'src/assets/images/', category: 'Векторы', usedIn: ['Services.jsx'], size: '4.6 MB', fullPath: 'frontend/src/assets/images/van.png' },

    // Основные иконки
    { id: '39', name: 'logo.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Nav.jsx', 'Footer.jsx'], size: '7.3 KB', fullPath: 'frontend/src/assets/icons/logo.png' },
    { id: '40', name: 'calculator.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Calculator.jsx'], size: '7.8 KB', fullPath: 'frontend/src/assets/icons/calculator.png' },
    { id: '41', name: 'avatar.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Reviews.jsx'], size: '2.0 KB', fullPath: 'frontend/src/assets/icons/avatar.png' },
    { id: '42', name: 'achieve.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Advantages.jsx', 'Guarantees.jsx'], size: '27 KB', fullPath: 'frontend/src/assets/icons/achieve.png' },
    { id: '43', name: 'bill.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Advantages.jsx', 'FiveReasons.jsx'], size: '22 KB', fullPath: 'frontend/src/assets/icons/bill.png' },
    { id: '44', name: 'hands.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Advantages.jsx', 'FiveReasons.jsx', 'Guarantees.jsx'], size: '34 KB', fullPath: 'frontend/src/assets/icons/hands.png' },
    { id: '45', name: 'time.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Advantages.jsx', 'FiveReasons.jsx', 'Guarantees.jsx'], size: '20 KB', fullPath: 'frontend/src/assets/icons/time.png' },
    { id: '46', name: 'money.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Advantages.jsx'], size: '28 KB', fullPath: 'frontend/src/assets/icons/money.png' },
    { id: '47', name: 'money2.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Guarantees.jsx'], size: '1001 B', fullPath: 'frontend/src/assets/icons/money2.png' },
    { id: '48', name: 'communication.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Advantages.jsx'], size: '21 KB', fullPath: 'frontend/src/assets/icons/communication.png' },
    { id: '49', name: 'contract.png', path: 'src/assets/icons/', category: 'Иконки', usedIn: ['Guarantees.jsx'], size: '1.2 KB', fullPath: 'frontend/src/assets/icons/contract.png' },

    // Социальные сети
    { id: '50', name: 'facebook.png', path: 'src/assets/icons/', category: 'Социальные сети', usedIn: ['Footer.jsx', 'Contacts.jsx', 'Design.jsx'], size: '1.4 KB', fullPath: 'frontend/src/assets/icons/facebook.png' },
    { id: '51', name: 'instagram.png', path: 'src/assets/icons/', category: 'Социальные сети', usedIn: ['Footer.jsx', 'Contacts.jsx', 'Design.jsx'], size: '3.3 KB', fullPath: 'frontend/src/assets/icons/instagram.png' },
    { id: '52', name: 'google.png', path: 'src/assets/icons/', category: 'Социальные сети', usedIn: ['Footer.jsx', 'Contacts.jsx'], size: '2.4 KB', fullPath: 'frontend/src/assets/icons/google.png' },
    { id: '53', name: 'whatsap.png', path: 'src/assets/icons/', category: 'Социальные сети', usedIn: ['Footer.jsx', 'Contacts.jsx'], size: '3.1 KB', fullPath: 'frontend/src/assets/icons/whatsap.png' },

    // Флаги языков
    { id: '54', name: 'russian_flag_icon.png', path: 'src/assets/icons/', category: 'Языки', usedIn: ['LanguageSelector.jsx'], size: '1.3 KB', fullPath: 'frontend/src/assets/icons/russian_flag_icon.png' },
    { id: '55', name: 'english_flag_icon.png', path: 'src/assets/icons/', category: 'Языки', usedIn: ['LanguageSelector.jsx'], size: '5.0 KB', fullPath: 'frontend/src/assets/icons/english_flag_icon.png' },
    { id: '56', name: 'italian_flag_icon.png', path: 'src/assets/icons/', category: 'Языки', usedIn: ['LanguageSelector.jsx'], size: '1.9 KB', fullPath: 'frontend/src/assets/icons/italian_flag_icon.png' },

    // Звезды рейтинга
    { id: '57', name: 'golden_star.png', path: 'src/assets/icons/', category: 'Рейтинг', usedIn: ['Reviews.jsx'], size: '470 B', fullPath: 'frontend/src/assets/icons/golden_star.png' },
    { id: '58', name: 'gray_star.png', path: 'src/assets/icons/', category: 'Рейтинг', usedIn: ['Reviews.jsx'], size: '295 B', fullPath: 'frontend/src/assets/icons/gray_star.png' },

    // Стрелки
    { id: '59', name: 'arrow_to_left.png', path: 'src/assets/icons/', category: 'Стрелки', usedIn: ['Advantages.jsx'], size: '2.4 KB', fullPath: 'frontend/src/assets/icons/arrow_to_left.png' },
    { id: '60', name: 'arrow_to_right.png', path: 'src/assets/icons/', category: 'Стрелки', usedIn: ['Advantages.jsx'], size: '2.4 KB', fullPath: 'frontend/src/assets/icons/arrow_to_right.png' },
    { id: '61', name: 'arrow_to_bottom.png', path: 'src/assets/icons/', category: 'Стрелки', usedIn: ['Advantages.jsx'], size: '3.6 KB', fullPath: 'frontend/src/assets/icons/arrow_to_bottom.png' },

    // Иконки услуг
    { id: '62', name: 'keys.png', path: 'src/assets/icons/', category: 'Услуги', usedIn: ['AboutUs.jsx', 'Services.jsx'], size: '23 KB', fullPath: 'frontend/src/assets/icons/keys.png' },
    { id: '63', name: 'gears.png', path: 'src/assets/icons/', category: 'Услуги', usedIn: ['AboutUs.jsx', 'Services.jsx'], size: '28 KB', fullPath: 'frontend/src/assets/icons/gears.png' },
    { id: '64', name: 'botique.png', path: 'src/assets/icons/', category: 'Услуги', usedIn: ['AboutUs.jsx', 'Services.jsx'], size: '22 KB', fullPath: 'frontend/src/assets/icons/botique.png' },
    { id: '65', name: 'room.png', path: 'src/assets/icons/', category: 'Услуги', usedIn: ['AboutUs.jsx', 'Services.jsx'], size: '21 KB', fullPath: 'frontend/src/assets/icons/room.png' },
    { id: '66', name: 'smart_home.png', path: 'src/assets/icons/', category: 'Услуги', usedIn: ['Systems.jsx'], size: '20 KB', fullPath: 'frontend/src/assets/icons/smart_home.png' },

    // Иконки работ
    { id: '67', name: 'roof.png', path: 'src/assets/icons/works/', category: 'Иконки работ', usedIn: ['OurWorks.jsx'], size: '2.2 KB', fullPath: 'frontend/src/assets/icons/works/roof.png' },
    { id: '68', name: 'bottle.png', path: 'src/assets/icons/works/', category: 'Иконки работ', usedIn: ['OurWorks.jsx'], size: '2.6 KB', fullPath: 'frontend/src/assets/icons/works/bottle.png' },
    { id: '69', name: 'fontain.png', path: 'src/assets/icons/works/', category: 'Иконки работ', usedIn: ['OurWorks.jsx'], size: '2.7 KB', fullPath: 'frontend/src/assets/icons/works/fontain.png' },
    { id: '70', name: 'food.png', path: 'src/assets/icons/works/', category: 'Иконки работ', usedIn: ['OurWorks.jsx'], size: '3.4 KB', fullPath: 'frontend/src/assets/icons/works/food.png' },
    { id: '71', name: 'keys.png', path: 'src/assets/icons/works/', category: 'Иконки работ', usedIn: ['OurWorks.jsx'], size: '4.5 KB', fullPath: 'frontend/src/assets/icons/works/keys.png' },
    { id: '72', name: 'stages.png', path: 'src/assets/icons/works/', category: 'Иконки работ', usedIn: ['OurWorks.jsx'], size: '39 KB', fullPath: 'frontend/src/assets/icons/works/stages.png' },
    { id: '73', name: 'one.png', path: 'src/assets/icons/works/', category: 'Иконки работ', usedIn: ['OurWorks.jsx'], size: '910 B', fullPath: 'frontend/src/assets/icons/works/one.png' },

    // Галерея работ (все 29 изображений)
    ...Array.from({ length: 29 }, (_, i) => ({
      id: `gallery-${i + 1}`,
      name: `${i + 1}.JPG`,
      path: 'src/assets/images/our_works_gallery/',
      category: 'Галерея работ',
      usedIn: ['OurWorks.jsx'],
      size: '488 KB',
      fullPath: `frontend/src/assets/images/our_works_gallery/${i + 1}.JPG`
    })),

    // Изображения отзывов (примерные)
    { id: '200', name: 'first_review.png', path: 'src/assets/images/reviews_page_images/', category: 'Отзывы', usedIn: ['Reviews.jsx'], size: '150 KB', fullPath: 'frontend/src/assets/images/reviews_page_images/first_review.png' },
    { id: '201', name: 'second_review.png', path: 'src/assets/images/reviews_page_images/', category: 'Отзывы', usedIn: ['Reviews.jsx'], size: '140 KB', fullPath: 'frontend/src/assets/images/reviews_page_images/second_review.png' },
    { id: '202', name: 'third_review.jpg', path: 'src/assets/images/reviews_page_images/', category: 'Отзывы', usedIn: ['Reviews.jsx'], size: '160 KB', fullPath: 'frontend/src/assets/images/reviews_page_images/third_review.jpg' },
    { id: '203', name: 'fourth_review.jpg', path: 'src/assets/images/reviews_page_images/', category: 'Отзывы', usedIn: ['Reviews.jsx'], size: '145 KB', fullPath: 'frontend/src/assets/images/reviews_page_images/fourth_review.jpg' },

    // Изображения услуг
    { id: '210', name: 'basement.jpg', path: 'src/assets/images/services_images/', category: 'Услуги', usedIn: ['Services.jsx'], size: '180 KB', fullPath: 'frontend/src/assets/images/services_images/basement.jpg' },
    { id: '211', name: 'room.jpg', path: 'src/assets/images/services_images/', category: 'Услуги', usedIn: ['Services.jsx'], size: '200 KB', fullPath: 'frontend/src/assets/images/services_images/room.jpg' },
    { id: '212', name: 'room2.jpg', path: 'src/assets/images/services_images/', category: 'Услуги', usedIn: ['Services.jsx'], size: '195 KB', fullPath: 'frontend/src/assets/images/services_images/room2.jpg' },
    { id: '213', name: 'warehouse.jpg', path: 'src/assets/images/services_images/', category: 'Услуги', usedIn: ['Services.jsx'], size: '220 KB', fullPath: 'frontend/src/assets/images/services_images/warehouse.jpg' },

    // Изображения проектов
    { id: '220', name: 'bar.jpg', path: 'src/assets/images/projects_images/', category: 'Проекты', usedIn: ['Projects.jsx'], size: '250 KB', fullPath: 'frontend/src/assets/images/projects_images/bar.jpg' },
    { id: '221', name: 'bath.jpg', path: 'src/assets/images/projects_images/', category: 'Проекты', usedIn: ['Projects.jsx'], size: '280 KB', fullPath: 'frontend/src/assets/images/projects_images/bath.jpg' },
    { id: '222', name: 'hall.jpg', path: 'src/assets/images/projects_images/', category: 'Проекты', usedIn: ['Projects.jsx'], size: '320 KB', fullPath: 'frontend/src/assets/images/projects_images/hall.jpg' },
    { id: '223', name: 'kitchen.jpg', path: 'src/assets/images/projects_images/', category: 'Проекты', usedIn: ['Projects.jsx'], size: '290 KB', fullPath: 'frontend/src/assets/images/projects_images/kitchen.jpg' },
    { id: '224', name: 'living_room.jpg', path: 'src/assets/images/projects_images/', category: 'Проекты', usedIn: ['Projects.jsx'], size: '300 KB', fullPath: 'frontend/src/assets/images/projects_images/living_room.jpg' }
  ];

  useEffect(() => {
    loadImagesFromBackend();
  }, []);

  const loadImagesFromBackend = async () => {
    setLoading(true);
    try {
      const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';
      const response = await fetch(`${backendUrl}/api/images/scan`, {
        credentials: 'include',
      });
      
      if (response.ok) {
        const scannedImages = await response.json();
        console.log('Загружено изображений:', scannedImages.length);
        setImages(scannedImages);
        setFilteredImages(scannedImages);
      } else {
        console.error('Ошибка загрузки изображений:', response.status);
        // Fallback на статические данные
        setImages(frontendImages);
        setFilteredImages(frontendImages);
      }
    } catch (error) {
      console.error('Ошибка при загрузке изображений:', error);
      // Fallback на статические данные
      setImages(frontendImages);
      setFilteredImages(frontendImages);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filterImages();
  }, [images, searchTerm, categoryFilter]);

  const filterImages = () => {
    let filtered = images;

    if (searchTerm) {
      filtered = filtered.filter(image =>
        image.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        image.usedIn.some(usage => usage.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(image => image.category === categoryFilter);
    }

    setFilteredImages(filtered);
  };

  const handleReplaceImage = async (image: FrontendImage) => {
    const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';
    try {
      // Сначала создаем бэкап
      const backupResponse = await fetch(`${backendUrl}/api/images/backup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ imagePath: image.path })
      });
      if (!backupResponse.ok) throw new Error('Ошибка создания бэкапа');

      // Выбор файла и открытие редактора
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) return;
        
        setSelectedImageFile(file);
        setSelectedImagePath(image.path);
        setShowImageEditor(true);
      };
      input.click();
    } catch (error) {
      console.error('Ошибка при замене изображения:', error);
      alert('Ошибка при замене изображения.');
    }
  };

  const handleImageEditorSave = async (editedFile: File) => {
    const backendUrl = (import.meta as any).env?.VITE_BACKEND_URL || 'http://localhost:3001';
    try {
      const formData = new FormData();
      formData.append('file', editedFile);
      formData.append('imagePath', selectedImagePath);

      const replaceRes = await fetch(`${backendUrl}/api/images/replace`, {
        method: 'POST',
        credentials: 'include',
        body: formData
      });
      if (!replaceRes.ok) {
        const errText = await replaceRes.text();
        throw new Error(errText || 'Ошибка замены изображения');
      }
      await replaceRes.json();
      alert(`✅ Изображение обработано и заменено`);
      setShowImageEditor(false);
      setSelectedImageFile(null);
      setSelectedImagePath('');
      // Обновим список
      loadImagesFromBackend();
    } catch (error) {
      console.error('Ошибка при сохранении изображения:', error);
      alert('Ошибка при сохранении изображения.');
    }
  };

  const handleImageEditorCancel = () => {
    setShowImageEditor(false);
    setSelectedImageFile(null);
    setSelectedImagePath('');
  };



  if (loading) {
    return (
      <div className="px-6 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Загрузка изображений...</p>
        </div>
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
              Управление изображениями
            </h1>
            <p className="text-sm text-gray-500">
              Полный список всех {images.length} изображений используемых на сайте
            </p>
          </div>
          <button
            onClick={loadImagesFromBackend}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            disabled={loading}
          >
            <Upload size={16} />
            <span>{loading ? 'Сканирование...' : 'Обновить список'}</span>
          </button>
        </div>

        {/* Фильтры */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск изображений..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-gray-400" />
              <select
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">Все категории ({images.length})</option>
                {categories.map(category => {
                  const count = images.filter(img => img.category === category).length;
                  return <option key={category} value={category}>{category} ({count})</option>;
                })}
              </select>
            </div>
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <ImageIcon className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Всего изображений</p>
                <p className="text-xl font-semibold text-gray-800">{images.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <FolderIcon className="w-8 h-8 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Категорий</p>
                <p className="text-xl font-semibold text-gray-800">{categories.filter(cat => images.some(img => img.category === cat)).length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <MapPin className="w-8 h-8 text-purple-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Найдено</p>
                <p className="text-xl font-semibold text-gray-800">{filteredImages.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex items-center">
              <Upload className="w-8 h-8 text-orange-600 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Галерея работ</p>
                <p className="text-xl font-semibold text-gray-800">29</p>
              </div>
            </div>
          </div>
        </div>

        {/* Список изображений - компактный вид */}
        <div className="grid gap-3">
          {filteredImages.map(image => (
            <motion.div
              key={image.id}
              layout
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={`${backendUrl}/frontend-assets/${encodeURI(image.path)}`}
                        alt={image.name}
                        className="w-full h-auto object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center hidden">
                        <ImageIcon className="w-6 h-6 text-gray-500" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-medium text-gray-800 truncate">{image.name}</h3>
                      <div className="flex items-center text-xs text-gray-500 space-x-3">
                        <span>📁 {image.category}</span>
                        <span>💾 {image.size}</span>
                        <span className="truncate">📍 {image.path}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <div className="hidden md:flex flex-wrap gap-1 max-w-md">
                      {image.usedIn.slice(0, 3).map(usage => (
                        <span
                          key={usage}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {usage}
                        </span>
                      ))}
                      {image.usedIn.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{image.usedIn.length - 3}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleReplaceImage(image)}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors text-xs flex items-center space-x-1"
                    >
                      <Upload size={12} />
                      <span>Заменить</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">
              {searchTerm || categoryFilter !== 'all' 
                ? 'Не найдено изображений по заданным критериям'
                : 'Нет изображений для отображения'
              }
            </p>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Информация о содержимом */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-green-800 mb-2 flex items-center">
              <ImageIcon className="w-4 h-4 mr-2" />
              Содержимое сайта
            </h3>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• <strong>Галерея работ:</strong> 29 фотографий наших проектов</li>
              <li>• <strong>Процессы ремонта:</strong> Пошаговые фото для каждого типа ремонта</li>
              <li>• <strong>Команда:</strong> Фотографии сотрудников и основателя</li>
              <li>• <strong>Иконки и графика:</strong> Логотипы, социальные сети, стрелки</li>
              <li>• <strong>Фоны и декорации:</strong> Изображения для различных секций</li>
              <li>• <strong>Системы и услуги:</strong> Фото различных видов работ</li>
            </ul>
          </div>

          {/* Информация о бэкапах */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2 flex items-center">
              <RotateCcw className="w-4 h-4 mr-2" />
              Система бэкапов
            </h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• <strong>Автоматический бэкап:</strong> При каждой замене изображения</li>
              <li>• <strong>Именование:</strong> filename_YYYY-MM-DD-HH-mm-ss.ext</li>
              <li>• <strong>Папка:</strong> backend/backups/images/</li>
              <li>• <strong>Безопасность:</strong> Невозможно потерять оригиналы</li>
              <li>• <strong>Восстановление:</strong> Ручное копирование из папки бэкапов</li>
            </ul>
            <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-600">
              💡 Все изображения автоматически резервируются перед заменой
            </div>
          </div>
        </div>
      </motion.div>

      {/* Image Editor Modal */}
      {showImageEditor && selectedImageFile && (
        <ImageEditor
          imageFile={selectedImageFile}
          onSave={handleImageEditorSave}
          onCancel={handleImageEditorCancel}
          originalImagePath={selectedImagePath}
        />
      )}
    </div>
  );
}