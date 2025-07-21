import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomeStart = () => {
  const { t } = useTranslation('home/HomeStart');
  const selectedLang = localStorage.getItem('language') || 'en';

  return (
    <div className="relative w-full">
      <div className="home-start-bg-image bg-cover bg-center w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] -z-10" />
      <div className="absolute top-6 sm:top-8 md:top-10 lg:top-12 left-4 sm:left-6 lg:left-8 w-[90%] sm:w-[85%] lg:w-[90%] max-w-[1414px] bg-gradient-to-r from-gray-300/90 via-70% via-gray-300/65 to-gray-300/0 rounded-[10px] px-4 sm:px-6 lg:px-10 py-6 sm:py-8 lg:py-12 z-10 shadow-2xl">
        <ul className={`text-[#222222] flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-center lg:text-start ${selectedLang === 'ru' ? 'sm:mb-6 lg:mb-10' : 'sm:mb-8 lg:mb-12'}`}>
          <li>{t('list.first_stroke')}</li>
          <li>
            {t('list.second_stroke.text_1')} <span className="text-[#4C4C4C] text-shadow-lg">{t('list.second_stroke.span')}</span> {t('list.second_stroke.text_2')}
          </li>
          <li>
            {t('list.third_stroke.text')} <span className="text-[#4C4C4C] text-shadow-lg">{t('list.third_stroke.span')}</span>
          </li>
        </ul>
        <Link
          to="/contacts"
          className="w-full sm:w-[350px] md:w-[400px] lg:w-[432px] h-12 sm:h-14 lg:h-[83px] bg-[#F9B33B] flex justify-center items-center text-base sm:text-lg lg:text-2xl font-bold rounded-[10px] mt-6 sm:mt-8 lg:mt-10 hover:scale-105 transition duration-300"
        >
          {t('button')}
        </Link>
      </div>
    </div>
  );
};

export default HomeStart;