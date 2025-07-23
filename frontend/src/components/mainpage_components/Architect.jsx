import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import { useTranslation } from 'react-i18next';

const Architect = () => {
    function handleImageClick(url) {
        window.location.href = url
    }
    const {t} = useTranslation('slider/Architect')
    const selectedLang = localStorage.getItem('language') || 'en';	
    return (
    <div className="flex flex-col  justify-around w-full min-h-[480px]  md:min-h-[800px] architect-bg-image bg-cover">
      {/* Header */}
      <div className="flex flex-col lg:flex-row h-[90px] md:h-[200px] lg:bg-black/55 pt-4 md:pt-0">

        {/* Header text */}
        <div className="relative bg-black/55 lg:bg-transparent flex-1 flex-col md:w-[75%] z-0">
          {/* Жёлтая полоска — ПОД текстом, НО НАД фоном */}
          <div className="bg-[#f9b33b] h-4 md:h-10 w-[95%] mx-auto absolute bottom-5 lg:bottom-6 md:bottom-8 left-0 right-0 md:left-[10px] z-[600]"></div>

          {/* Текст — самый верхний */}
          <h1 className=" md:bg-transparent text-white text-center font-bold text-[39px] sm:text-2xl md:text-[120px] absolute inset-0 flex items-center justify-center z-[700] text-shadow-lg">
            {t('h')}
          </h1>
        </div>

        {/* Days */}
        <div className={`absolute top-[87px] ${selectedLang === 'it' ? 'right-[30%]' : 'right-[26%]'}  w-[50%] h-[90px] mx-auto text-center text-black 
                lg:static lg:flex lg:flex-col lg:items-center lg:justify-center 
                lg:bg-[#64b1d9] lg:w-[25%] lg:p-4 lg:h-[200px] lg:space-y-5 lg:mr-[30px]`}>
          <p className="text-2xl font-light hidden lg:inline sm:text-5xl md:text-5xl">
            {t('left_block.p')}
          </p>
          <strong className="text-[40px] font-bold bg-[#64b1d9] sm:text-6xl md:text-7xl lg:bg-transparent">
            {t('left_block.strong')}
          </strong>
        </div>
      </div>

      {/* Comment */}
      <div className="flex items-center bg-black/58 text-white text-[15px] sm:text-xl md:text-[29px] font-[300] px-4 py-5 md:px-32 md:py-0 md:h-[130px] ">
        <p className="text-center md:text-left">{t('comment.p1')}<span className='text-[#f9b33b]'>{t('comment.span1')} </span> {t('comment.p2')} <span className='text-[#f9b33b]'>{t('comment.span2')}</span> {t('comment.p3')}  </p>
      </div>

      {/* Buttons and conditions */}
      <div className="w-full  flex flex-col-reverse md:flex-row md:justify-around md:h-[270px] gap-6 lg:p-4 md:p-0">
        {/* Buttons */}
        <div className="flex flex-row md:flex-row md:items-center md:justify-between w-[300px] mx-auto lg:mx-0 md:w-[500px] gap-4">
        <Link className="flex justify-center items-center 
            h-14 md:h-16 lg:h-20 
            w-full md:w-[300px] lg:w-[360px] 
            bg-[#f9b33b] font-medium 
            text-xl md:text-3xl lg:text-2xl 
            hover:scale-110 transition duration-300" to={'/contacts'}>
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
        <div className="md:w-[500px] bg-black/55  md:border-6 lg:border-[#f9b33b] lg:rounded-lg text-white px-4 md:px-5 md:py-7 lg:backdrop-blur-sm">
          <p className="font-semibold text-xl md:text-3xl hidden lg:inline">{t('condition.h')}</p>
          <ul className=" text-center font-[200] lg:font-[500] lg:text-start pl-6 pt-2 md:pt-0 text-base md:text-[22px]">
          <li>{t('condition.li1')} <span className='text-[#ffb429]'>{t('condition.span1')}</span></li>
            <li>{t('condition.li2')} <span className='text-[#ffb429]'>{t('condition.span2')}</span></li>
            <li>{t('condition.li3')} <span className='text-[#ffb429]'>{t('condition.span3')}</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Architect;