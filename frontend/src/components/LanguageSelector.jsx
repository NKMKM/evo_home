import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import russian_flag from '../assets/icons/russian_flag_icon.png';
import english_flag from '../assets/icons/english_flag_icon.png';
import italian_flag from '../assets/icons/italian_flag_icon.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const LanguageSelector = () => {
  const { i18n } = useTranslation('Languages');
  
  // Инициализируем язык из localStorage или дефолтный 'it'
  const storedLang = localStorage.getItem('language') || 'it';
  const [currentLang, setCurrentLang] = useState(storedLang);
  const [isOpen, setIsOpen] = useState(false);
  const selectorRef = useRef(null);

  const languages = {
    en: { label: 'English', flag: english_flag },
    ru: { label: 'Russian', flag: russian_flag },
    it: { label: 'Italian', flag: italian_flag },
  };

  useEffect(() => {
    // При загрузке синхронизируем i18n с языком из localStorage
    i18n.changeLanguage(storedLang);
  }, [i18n, storedLang]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    localStorage.setItem('language', lng); // сохраняем язык в localStorage
    setIsOpen(false);
  };

  const otherLanguages = Object.keys(languages).filter(lng => lng !== currentLang);

  return (
    <div ref={selectorRef} className="relative inline-block cursor-pointer select-none">
      <div
        onClick={toggleMenu}
        className="flex items-center gap-1"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <img
          src={languages[currentLang].flag}
          alt={languages[currentLang].label}
          className="w-[45px] h-[30px] shadow-2xl"
          draggable={false}
        />
        <KeyboardArrowDownIcon />
      </div>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute top-full mt-1 left-0 bg-white border border-gray-300 rounded shadow-lg z-50 min-w-[120px]  font-bold text-[12px] py-1"
        >
          {otherLanguages.map(lng => (
            <li
              key={lng}
              onClick={() => changeLanguage(lng)}
              role="option"
              aria-selected={false}
              className="flex items-center gap-2 px-3 py-1 cursor-pointer hover:bg-gray-100"
            >
              <div className='w-[45px] h-[30px]'>
                <img
                  src={languages[lng].flag}
                  alt={languages[lng].label}
                  className="w-full h-full object-cover shadow-2xl"
                  draggable={false}
                />
              </div>
              <span>{languages[lng].label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
