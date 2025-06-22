import React, { useEffect, useState } from 'react';
import Logo from '../assets/icons/logo.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
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
      {/* Navbar */}
      <nav
        className={`top-0 z-20 flex h-[128px] sm:w-full md:w-full items-center sm:px-4 sm:justify-between md:justify-around shadow-2xl bg-white transition-transform duration-300 ease-in-out ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        } fixed`}
      >
        {/* Logo */}
        <img
          src={Logo}
          alt="logo"
          className=" h-[30px] md:w-[280px] md:h-[44px] scale-animate-hover cursor-pointer"
          onClick={goToHome}
        />

        {/* Main Links */}
        <ul className="hidden md:flex md:flex-row space-x-12 items-center px-1 md:w-[650px] font-[500] text-[#222222]">
          <ServicesDropdown />
          <Link to="/about_us" className="navbar-underline-animate-hover">КТО МЫ</Link>
          <Link to="/our_works" className="navbar-underline-animate-hover">НАШИ РАБОТЫ</Link>
          <Link to="/reviews" className="navbar-underline-animate-hover">ОТЗЫВЫ</Link>
          <Link to="/contacts" className="navbar-underline-animate-hover">КОНТАКТЫ</Link>
        </ul>

        {/* Contact & Language + Burger */}
        <div className="flex flex-row items-center space-x-6 md:space-x-20">
          {/* Call button - hidden on small screens */}
          <div className="hidden sm:hidden md:flex bg-[#f9b33b]  md:w-[216px] h-[58px] justify-center rounded-lg items-center scale-animate-hover">
            <PhoneInTalkIcon sx={{ fontSize: 36 }} className="mr-1" />
            <div>
              <h1 className="font-[500]">ЗАКАЗАТЬ ЗВОНОК</h1>
              <h3 className="font-bold italic">+ 39 06 69353277</h3>
            </div>
          </div>

          {/* Language + Burger */}
          <div className="flex flex-row items-center space-x-2">
            <img
              src={Russian_flag}
              alt="russian flag"
              className="w-[45px] h-[30px] bg-slate-400 shadow-md object-cover"
            />
            <KeyboardArrowDownIcon className="cursor-pointer hidden sm:hidden md:block" />

            {/* Burger icon for sm */}
            <div className="md:hidden ml-2">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon sx={{ fontSize: 32 }} /> : <MenuIcon sx={{ fontSize: 32 }} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Burger Menu (Center Screen) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 bg-opacity-70 flex justify-center items-center z-40">
          <div className="flex flex-col bg-white rounded-lg p-8 w-11/12 max-w-md text-center space-y-6 text-xl font-semibold">
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>УСЛУГИ</Link>
            <Link to="/about_us" onClick={() => setIsMenuOpen(false)}>КТО МЫ</Link>
            <Link to="/our_works" onClick={() => setIsMenuOpen(false)}>НАШИ РАБОТЫ</Link>
            <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>ОТЗЫВЫ</Link>
            <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>КОНТАКТЫ</Link>
            <div className="mt-4">
              <div className="bg-[#f9b33b] py-3 px-6 rounded-lg inline-flex items-center justify-center">
                <PhoneInTalkIcon className="" />
                <span>+39 06 69353277</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
