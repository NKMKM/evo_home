import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/icons/logo.png';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import ServicesDropdown from './ServicesDropdown';
import LanguageSelector from './LanguageSelector';
import PhoneMenu from './PhoneMenu';
import LanguageLink from './LanguageLink';

const Nav = () => {
  const { t } = useTranslation('components/Nav');
  const selectedLang = localStorage.getItem('language') || 'en';
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <nav
        className={`fixed top-0 left-0 w-full z-[999] flex h-16 sm:h-20 lg:h-[128px] items-center justify-between px-4 sm:px-6 lg:px-8 bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <img
          src={Logo}
          alt="logo"
          className="w-32 sm:w-48 lg:w-[280px] h-auto scale-animate-hover cursor-pointer"
          onClick={goToHome}
        />

        <ul className="hidden lg:flex flex-row items-center gap-4 lg:gap-8 font-medium text-[#222222] text-base lg:text-lg">
          {/* ServicesDropdown может содержать внутренние ссылки */}
          <ServicesDropdown />

          {/* Обновленные ссылки с использованием LanguageLink */}
          <LanguageLink to="aboutUs" className="navbar-underline-animate-hover">{t('list.second')}</LanguageLink>
          <LanguageLink to="ourWorks" className="navbar-underline-animate-hover">{t('list.third')}</LanguageLink>
          <LanguageLink to="reviews" className="navbar-underline-animate-hover">{t('list.fourth')}</LanguageLink>
          <LanguageLink to="contacts" className="navbar-underline-animate-hover">{t('list.fifth')}</LanguageLink>
        </ul>

        <div className="flex flex-row items-center gap-4 sm:gap-4 lg:gap-16">
          <div className={`hidden lg:flex bg-[#f9b33b] rounded-lg items-center justify-center py-2 px-4 sm:px-6 gap-1 scale-animate-hover left-[-50px] ${selectedLang === 'it' ? 'pl-3' : ''}`}>
            <PhoneInTalkIcon sx={{ fontSize: { xs: 24, sm: 28, lg: 36 } }} className={`${selectedLang === 'it' || selectedLang === 'en' ? 'mr-3' : 'mr-1'}`} />
            <div className="text-center">
              <h1 className="font-medium text-sm lg:text-base">{t('call_text')}</h1>
              <h3 className="font-bold italic text-sm lg:text-base">+39 06 69353277</h3>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 sm:gap-4 left-[90px]">
            <PhoneMenu className="lg:hidden"/>
            <div className="hidden md:block">
              <LanguageSelector  />
            </div>
            <div className="lg:hidden ">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon sx={{ fontSize: { xs: 28, sm: 32 } }} /> : <MenuIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-70 flex justify-center items-center z-40"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="flex flex-col bg-white rounded-lg p-6 sm:p-8 w-11/12 max-w-md text-center gap-4 sm:gap-6 text-base sm:text-lg font-semibold"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Обновленные ссылки с использованием LanguageLink */}
            <LanguageLink to="turnkeyRenovation" onClick={() => setIsMenuOpen(false)}>{t('list.first')}</LanguageLink>
            <LanguageLink to="aboutUs" onClick={() => setIsMenuOpen(false)}>{t('list.second')}</LanguageLink>
            <LanguageLink to="ourWorks" onClick={() => setIsMenuOpen(false)}>{t('list.third')}</LanguageLink>
            <LanguageLink to="reviews" onClick={() => setIsMenuOpen(false)}>{t('list.fourth')}</LanguageLink>
            <LanguageLink to="contacts" onClick={() => setIsMenuOpen(false)}>{t('list.fifth')}</LanguageLink>
            <div className="ml-16 mt-4">
              <LanguageSelector/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
