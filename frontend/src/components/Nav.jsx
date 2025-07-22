import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/icons/logo.png';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate } from 'react-router-dom';
import ServicesDropdown from './ServicesDropdown';
import LanguageSelector from './LanguageSelector';

const Nav = () => {
  const { t } = useTranslation('components/Nav');
  const selectedLang = localStorage.getItem('language') || 'en';
  const navigate = useNavigate();

  // Переход на главную страницу при клике на логотип
  const goToHome = () => {
    navigate('/');
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Управление видимостью навбара при прокрутке
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <>
      {/* Навбар */}
      <nav
        className={`fixed top-0 left-0 w-full z-20 flex h-16 sm:h-20 lg:h-[128px] items-center justify-between px-4 sm:px-6 lg:px-8 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Логотип */}
        <img
          src={Logo}
          alt="logo"
          className="w-32 sm:w-48 lg:w-[280px] h-auto scale-animate-hover cursor-pointer"
          onClick={goToHome}
        />

        {/* Основные ссылки */}
        <ul className="hidden lg:flex flex-row items-center gap-4 lg:gap-8 font-medium text-[#222222] text-base lg:text-lg">
          <ServicesDropdown />
          <Link to="/about_us" className="navbar-underline-animate-hover">{t('list.second')}</Link>
          <Link to="/our_works" className="navbar-underline-animate-hover">{t('list.third')}</Link>
          <Link to="/reviews" className="navbar-underline-animate-hover">{t('list.fourth')}</Link>
          <Link to="/contacts" className="navbar-underline-animate-hover">{t('list.fifth')}</Link>
        </ul>

        {/* Контакты и язык + бургер-меню */}
        <div className="flex flex-row items-center gap-4 sm:gap-4 lg:gap-16">
          {/* Кнопка звонка, скрыта на маленьких экранах */}
          <div className={`hidden lg:flex bg-[#f9b33b] rounded-lg items-center justify-center py-2 px-4 sm:px-6 gap-1 scale-animate-hover left-[-50px] ${selectedLang === 'it' ? 'pl-3' : ''}`}>
              <PhoneInTalkIcon sx={{ fontSize: { xs: 24, sm: 28, lg: 36 } }} className={`${selectedLang === 'it' || selectedLang === 'en' ? 'mr-3' : 'mr-1'}`} />
              <div className="text-center">
                <h1 className="font-medium text-sm lg:text-base">{t('call_text')}</h1>
                <h3 className="font-bold italic text-sm lg:text-base">+39 06 69353277</h3>
              </div>
            </div>
          {/* Селектор языка и бургер-меню */}
          <div className="flex flex-row items-center gap-2 sm:gap-4 left-[90px]">
            <LanguageSelector />
            <div className="lg:hidden ">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon sx={{ fontSize: { xs: 28, sm: 32 } }} /> : <MenuIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Бургер-меню (центр экрана) */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-70 flex justify-center items-center z-40"
          onClick={() => setIsMenuOpen(false)} // Закрытие меню при клике на фон
        >
          <div
            className="flex flex-col bg-white rounded-lg p-6 sm:p-8 w-11/12 max-w-md text-center gap-4 sm:gap-6 text-base sm:text-lg font-semibold"
            onClick={(e) => e.stopPropagation()} // Клик внутри меню не закрывает его
          >
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>{t('list.first')}</Link>
            <Link to="/about_us" onClick={() => setIsMenuOpen(false)}>{t('list.second')}</Link>
            <Link to="/our_works" onClick={() => setIsMenuOpen(false)}>{t('list.third')}</Link>
            <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>{t('list.fourth')}</Link>
            <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>{t('list.fifth')}</Link>
            <div className="mt-4">
              <div className="bg-[#f9b33b] py-2 sm:py-3 px-4 sm:px-6 rounded-lg inline-flex items-center justify-center gap-2">
                <PhoneInTalkIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                <span className="text-sm sm:text-base">+39 06 69353277</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;