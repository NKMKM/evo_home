import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageLink from '../LanguageLink';

const Ideas = () => {
  const { t } = useTranslation('home/AboutCompany');

  return (
    <div className="w-full max-w-[1640px] mx-auto flex flex-col items-center gap-8 sm:gap-10 lg:gap-12">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          {t('ideas.h2')}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-4xl">
          {t('ideas.p')}
        </p>
      </div>

      <LanguageLink 
        to="contacts" 
        className="w-full sm:w-[389px] h-12 sm:h-[67px] flex items-center justify-center bg-[#F9B33B] text-lg sm:text-xl lg:text-[30px] font-semibold rounded hover:scale-105 transition duration-300"
      >
        {t('ideas.button')}
      </LanguageLink>
    </div>
  );
};

export default Ideas;