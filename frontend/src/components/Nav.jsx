
import React from 'react';
import { useEffect, useState } from 'react';
import Logo from '../assets/icons/logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Russian_flag from '../assets/icons/russian_flag_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import ServicesDropdown from './ServicesDropdown';

const Nav = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Скроллим вниз — скрыть
        setShowNavbar(false);
      } else {
        // Скроллим вверх — показать
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`top-0 z-20 flex  h-[128px] items-center justify-around shadow-2xl bg-white transition-transform duration-300 ease-in-out ${
      showNavbar ? 'translate-y-0' : '-translate-y-full'
    } fixed w-full`}
    
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="logo"
        className="w-[280px] h-[44px] scale-animate-hover cursor-pointer"
        onClick={goToHome}
      />

      {/* Links */}
      <ul className="flex flex-row space-x-12 items-center px-1 w-[650px] font-[500] text-[#222222]">
        <ServicesDropdown/>

        <Link to="/about_us" className="navbar-underline-animate-hover">
          КТО МЫ
        </Link>
        <Link to="/our_works" className="navbar-underline-animate-hover">
          НАШИ РАБОТЫ
        </Link>
        <Link to="/reviews" className="navbar-underline-animate-hover">
          ОТЗЫВЫ
        </Link>
        <Link to="/contacts" className="navbar-underline-animate-hover">
          КОНТАКТЫ
        </Link>
      </ul>

      {/* Contact & Translate */}
      <div className="flex flex-row items-center space-x-20">
        <div className="bg-[#f9b33b] w-[216px] h-[58px] flex flex-row justify-center rounded-lg items-center scale-animate-hover">
          <PhoneInTalkIcon sx={{ fontSize: 36 }} className="mr-1" />
          <div>
            <h1 className="font-[500]">ЗАКАЗАТЬ ЗВОНОК</h1>
            <h3 className="font-bold italic">+ 39 06 69353277</h3>
          </div>
        </div>

        <div className="flex flex-row w-[78px] h-[30px]">
          <img
            src={Russian_flag}
            alt="russian flag"
            className="w-[45px] h-[30px] bg-slate-400 shadow-md object-cover"
          />
          <KeyboardArrowDownIcon className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
