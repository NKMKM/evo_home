import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import { useTranslation } from 'react-i18next';

const Design = () => {
    function handleImageClick(url) {
        window.location.href = url
    }
    const {t} = useTranslation('slider/Design')
    return (
    <div className="flex flex-col  justify-around w-full min-h-[600px]  md:min-h-[800px] design-bg-image bg-cover">
      {/* Header */}
      <div className="flex flex-row h-[90px] md:h-[200px] lg:bg-black/55 pt-4 md:pt-0">

        {/* Header text */}
        <div className="relative bg-black/55 lg:bg-transparent flex-1 md:w-[75%] z-0">
          {/* Жёлтая полоска — ПОД текстом, НО НАД фоном */}
          <div className="bg-[#f9b33b] h-4 md:h-10 w-[90%] mx-auto absolute bottom-4 lg:bottom-6 md:bottom-8 left-0 right-0 md:left-[10px] z-[100]"></div>

          {/* Текст — самый верхний */}
          <h1 className=" md:bg-transparent text-white text-center font-bold text-[34px] sm:text-2xl md:text-[140px] absolute inset-0 flex items-center justify-center z-[200] text-shadow-lg">
            {t('h')}
          </h1>
        </div>

        {/* Days */}
        <div className="flex flex-col items-center justify-center bg-[#64b1d9] text-black w-[40%] md:w-[25%] p-4 md:p-5">
          <p className="text-2xl sm:text-5xl md:text-7xl font-light">{t('left_block.p')}</p>
          <strong className="text-2xl sm:text-6xl md:text-7xl font-bold">{t('left_block.strong')}</strong>
        </div>
      </div>

      {/* Comment */}
      <div className="flex items-center bg-black/58 text-white text-2xl sm:text-xl md:text-[29px] font-light px-4 py-6 md:px-32 md:py-0 md:h-[130px]">
        <p className="text-center md:text-left">{t('comment.p1')}<span className='text-[#f9b33b]'>{t('comment.span1')} </span> {t('comment.p2')} <span className='text-[#f9b33b]'>{t('comment.span2')}</span> {t('comment.p3')}  </p>
      </div>

      {/* Buttons and conditions */}
      <div className="w-full  flex flex-col-reverse md:flex-row md:justify-around md:h-[270px] gap-6 lg:p-4 md:p-0">
        {/* Buttons */}
        <div className="flex flex-row md:flex-row md:items-center md:justify-between w-[300px] mx-auto lg:mx-0 md:w-[500px] gap-4">
        <Link className="flex justify-center items-center 
            h-14 md:h-16 lg:h-20 
            w-full md:w-[300px] lg:w-[360px] 
            bg-[#f9b33b] font-bold 
            text-xl md:text-3xl lg:text-2xl 
            rounded-lg hover:scale-110 transition duration-300" to={'/contacts'}>
            {t('button')}
        </Link>
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
        <div className="md:w-[500px] bg-black/55  md:border-6 lg:border-[#f9b33b] lg:rounded-lg text-white px-4 md:px-5 md:py-8 lg:backdrop-blur-sm">
          <p className="font-semibold text-xl md:text-3xl hidden lg:inline">{t('condition.h')}</p>
          <ul className=" text-center font-[300] lg:font-[500] lg:text-start pl-6 pt-2 md:pt-4 text-base md:text-[22px]">
            <li>{t('condition.li1')} <span className='text-[#ffb429]'>{t('condition.span1')}</span></li>
            <li>{t('condition.li2')} <span className='text-[#ffb429]'>{t('condition.span2')}</span></li>
            <li>{t('condition.li3')} <span className='text-[#ffb429]'>{t('condition.span3')}</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Design;