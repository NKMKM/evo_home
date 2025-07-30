import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageLink from './LanguageLink';

const Video = () => {
  const { t } = useTranslation('home/AboutCompany');

  return (
    <div className="w-full max-w-[1640px] mx-auto flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          {t('process.video_h2')}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-4xl">
          {t('process.video_p')}
        </p>
      </div>

      <div className='w-full max-w-[1640px] h-auto flex flex-col sm:flex-row items-center mx-auto mt-6 gap-4'>
          <div className='h-[2px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
          <LanguageLink 
              to="contacts" 
              className="w-full sm:w-[60%] lg:w-[389px] h-[50px] lg:h-[67px] bg-[#F9B33B] text-[20px] lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300"
          >
              {t('process.video_button')}
          </LanguageLink>
          <div className='h-[2px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
      </div>
    </div>
  );
};

export default Video;