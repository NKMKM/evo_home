import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageLink from './LanguageLink';

const Video = ({ text }) => {
  const { i18n } = useTranslation();

  const getButtonText = () => {
    switch (i18n.language) {
      case 'en':
        return 'ORDER';
      case 'it':
        return 'ORDINA';
      case 'ru':
      default:
        return 'ЗАКАЗАТЬ';
    }
  };

  return (
    <div className="w-full max-w-[1640px] mx-auto flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          {text}
        </h2>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-[1227px] h-[400px] sm:h-[696px] mx-auto shadow-2xl">
        <iframe 
          className="w-full h-full rounded-[10px]" 
          src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      </div>

      <div className='w-full max-w-[1640px] h-auto flex flex-col sm:flex-row items-center mx-auto mt-6 gap-4'>
          <div className='h-[2px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
          <LanguageLink 
              to="contacts" 
              className="w-full sm:w-[60%] lg:w-[389px] h-[50px] lg:h-[67px] bg-[#F9B33B] text-[20px] lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300"
          >
              {getButtonText()}
          </LanguageLink>
          <div className='h-[2px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
      </div>
    </div>
  );
};

export default Video;