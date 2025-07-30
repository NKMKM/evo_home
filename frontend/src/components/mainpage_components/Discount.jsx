import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageLink from '../LanguageLink';

import discount from '../../assets/images/discount.jpg';
import facebook from '../../assets/icons/facebook.png';
import instagram from '../../assets/icons/instagram.png';

const Discount = () => {
  const { t } = useTranslation('slider/Discount');

  // Обработчик клика по иконкам соцсетей
  function handleImageClick(url) {
    window.location.href = url;
  }

  return (
    <div className="relative w-full h-full">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={discount} alt="discount" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Title and subtitle */}
        <div className="flex flex-col justify-center items-center text-center text-white px-4 py-8 md:py-12 lg:py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            {t('title.h1')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-2xl lg:max-w-4xl">
            {t('title.p')}
          </p>
        </div>

        {/* Comment */}
        <div className="flex items-center bg-black/58 text-white text-2xl sm:text-xl md:text-[29px] font-[200] px-4 py-6 md:px-32 md:py-0 md:h-[130px]">
          <p className="text-center md:text-left">{t('comment.p')}<span className='text-[#f9b33b]'>{t('comment.span')}</span></p>
        </div>

        {/* Buttons and conditions */}
        <div className="w-full  flex flex-col-reverse md:flex-row md:justify-around md:h-[270px] gap-6 lg:p-4 md:p-0">
          {/* Buttons */}
          <div className="flex flex-row md:flex-row md:items-center md:justify-between w-[300px] mx-auto lg:mx-0 md:w-[500px] gap-4">
          <LanguageLink className="flex justify-center items-center 
              h-14 md:h-16 lg:h-20 
              w-full md:w-[300px] lg:w-[360px] 
              bg-[#f9b33b] font-medium 
              text-xl md:text-3xl lg:text-2xl 
               hover:scale-110 transition duration-300" to="contacts">
              {t('button')}
          </LanguageLink>
            <div className=" justify-center gap-4 hidden lg:flex lg:flex-row">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg shadow-lg hover:scale-110 transition duration-300 ">
                <img src={facebook} alt="facebook" className="w-full h-full object-contain" onClick={() => handleImageClick('https://www.facebook.com/people/Evo-Home/100087325255144/')} />
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg shadow-lg hover:scale-110 transition duration-300">
                <img src={instagram} alt="instagram"  className="w-full h-full object-contain" onClick={() => handleImageClick('https://www.instagram.com/evohome_ristrutturazioni?igsh=MWQyNmZkcWRtenR0MA%3D%3D&utm_source=qr')} />
              </div>
            </div>
          </div>

          {/* Conditions */}
          <div className="md:w-[500px] bg-black/55  md:border-6 lg:border-[#f9b33b] lg:rounded-lg text-white px-4 md:px-5 md:py-7 lg:backdrop-blur-sm">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">{t('conditions.h3')}</h3>
            <ul className="text-sm sm:text-base md:text-lg lg:text-xl space-y-2 md:space-y-3">
              <li>{t('conditions.li1')}</li>
              <li>{t('conditions.li2')}</li>
              <li>{t('conditions.li3')}</li>
              <li>{t('conditions.li4')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;