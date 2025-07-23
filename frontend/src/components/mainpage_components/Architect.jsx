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
    return (
    <div className="flex flex-col sm:pt-10 justify-around w-full min-h-screen md:min-h-[800px] architect-bg-image bg-cover">
      {/* Header */}
      <div className="flex flex-col md:flex-row h-[300px] md:h-[200px] lg:bg-black/55 pt-24 md:pt-0">

        {/* Header text */}
        <div className="relative flex-1 md:w-[75%] ">
          <h1 className="bg-black/55 md:bg-transparent text-white text-center font-bold text-5xl sm:text-7xl md:text-[110px] absolute inset-0 flex items-center justify-center z-[100] text-shadow-lg">
            {t('h')}
          </h1>
          {/* Yellow bar */}
          <div className="bg-[#f9b33b] hidden lg:block h-6 md:h-10 w-[90%] md:w-[90%] mx-auto absolute bottom-2 md:bottom-8 left-0 right-0 md:left-[10px] z-0"></div>
        </div>

        {/* Days */}
        <div className="flex flex-col items-center justify-center bg-[#64b1d9] text-black md:w-[25%] p-4 md:p-5">
          <p className="text-3xl sm:text-5xl md:text-7xl font-light">{t('left_block.p')}</p>
          <strong className="text-4xl sm:text-6xl md:text-7xl font-bold">{t('left_block.strong')}</strong>
        </div>
      </div>

      {/* Comment */}
      <div className="flex items-center bg-black/58 text-white text-lg sm:text-xl md:text-[29px] font-light px-4 py-6 md:px-32 md:py-0 md:h-[130px]">
        <p className="text-center md:text-left">{t('comment.p1')}<span className='text-[#f9b33b]'>{t('comment.span1')}</span>  {t('comment.p2')}<span className='text-[#f9b33b]'>{t('comment.span2')}</span>  {t('comment.p3')}</p>
      </div>

      {/* Buttons and conditions */}
      <div className="flex flex-col md:flex-row md:justify-around md:h-[270px] gap-6 p-4 md:p-0">
        {/* Buttons */}
        <div className="flex flex-row md:flex-row md:items-center md:justify-between md:w-[500px] gap-4">
        <Link className="flex justify-center items-center 
            h-14 md:h-16 lg:h-20 
            w-full md:w-[300px] lg:w-[360px] 
            bg-[#f9b33b] font-bold 
            text-xl md:text-3xl lg:text-2xl 
            rounded-lg hover:scale-110 transition duration-300" to={'/contacts'}>
            {t('button')}
        </Link>
          <div className="flex justify-center gap-4">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg shadow-lg hover:scale-110 transition duration-300">
              <img src={facebook} alt="facebook" className="w-full h-full object-contain" onClick={() => handleImageClick('https://www.facebook.com/people/Evo-Home/100087325255144/')} />
            </div>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg shadow-lg hover:scale-110 transition duration-300">
              <img src={instagram} alt="instagram"  className="w-full h-full object-contain" onClick={() => handleImageClick('https://www.instagram.com/evohome_ristrutturazioni?igsh=MWQyNmZkcWRtenR0MA%3D%3D&utm_source=qr')} />
            </div>
          </div>
        </div>

        {/* Conditions */}
        <div className="w-full md:w-[500px] bg-black/35 border-4 md:border-6 border-[#f9b33b] rounded-lg text-white p-4 md:p-5 backdrop-blur-sm">
          <p className="font-semibold text-xl md:text-3xl">{t('condition.h')}</p>
          <ul className="list-disc pl-6 pt-2 md:pt-4 text-base md:text-[22px]">
            <li>{t('condition.li1')}</li>
            <li>{t('condition.li2')}</li>
            <li>{t('condition.li3')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Architect;