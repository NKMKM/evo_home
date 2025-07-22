import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import achieve from '../../assets/icons/achieve.png';
import bill from '../../assets/icons/bill.png';
import communication from '../../assets/icons/communication.png';
import hands from '../../assets/icons/hands.png';
import money from '../../assets/icons/money.png';
import time from '../../assets/icons/time.png';
import left_arrow from '../../assets/icons/arrow_to_left.png';
import right_arrow from '../../assets/icons/arrow_to_right.png';
import bottom_arrow from '../../assets/icons/arrow_to_bottom.png';
import before_after_1 from '../../assets/images/before_after_1.png';
import before_after_2 from '../../assets/images/before_after_2.png';
import ImageComparisonSlider from '../ImageComparisonSlider';

const Advantages = () => {
  const selectedLang = localStorage.getItem('language') || 'en';
  const { t } = useTranslation('home/Advantages');

  return (
    <div className="w-full max-w-[1755px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 flex flex-col gap-4 sm:gap-6 lg:gap-10">
      {/* Header */}
      <header className="w-full max-w-[1418px] mx-auto text-center font-bold text-[#222222] lg:border-x-[12px] lg:border-[#E0E0E0]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px]">{t('header.first_stroke')}</h1>
        <div className="flex flex-row justify-between mt-2 sm:mt-4">
          <div className="w-[80px] sm:w-[120px] lg:w-[155px] h-[8px] sm:h-[10px] lg:h-[12px] bg-[#E0E0E0] hidden lg:block"></div>
          <div className="w-[80px] sm:w-[120px] lg:w-[155px] h-[8px] sm:h-[10px] lg:h-[12px] bg-[#E0E0E0] hidden lg:block"></div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] mt-2 sm:mt-4">{t('header.second_stroke')}</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10 w-full justify-between">
        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-x-18 lg:gap-y-4 w-full lg:w-[735px]">
        {[
            {
              title: 'first_step',
              icon: achieve,
              arrow: right_arrow,
              arrowClass: 'absolute lg:top-[170px] sm:top-[160px] left-[180px] sm:left-[215px] lg:scale-[0.45]  sm:scale-[0.5] hidden lg:block z-20',
            },
            {
              title: 'second_step',
              icon: bill,
              arrow: bottom_arrow,
              arrowClass: 'absolute lg:top-[277px] sm:top-[280px] right-0 lg:scale-[0.4] sm:scale-[0.5] hidden lg:block z-20',
            },
            {
              title: 'third_step',
              icon: hands,
              arrow: left_arrow,
              arrowClass: 'absolute top-[160px] sm:top-[160px] left-[180px] sm:left-[215px] lg:scale-[0.4] sm:scale-[0.5] hidden lg:block z-20',
            },
            {
              title: 'fourth_step',
              icon: money,
              arrow: null,
              arrowClass: '',
            },
            {
              title: 'sixth_step',
              icon: time,
              arrow: bottom_arrow,
              arrowClass: 'absolute lg:top-[-105px] sm:bottom-[10px] left-[10px] lg:scale-[0.4] sm:scale-[0.5] hidden lg:block z-20',
            },
            {
              title: 'fifth_step',
              icon: communication,
              arrow: right_arrow,
              arrowClass: 'absolute top-[100px] sm:top-[170px] left-[150px] sm:left-[-190px] lg:scale-[0.4] sm:scale-[0.5] hidden lg:block z-20',
            },
          ].map((step, index) => (
            <div key={index} className={`flex flex-col items-center relative ${selectedLang === 'it' && (step.title === 'third_step' || step.title === 'fourth_step') ? 'min-h-[240px] sm:min-h-[260px]' : ''}`}>
              <h2 className="text-base sm:text-lg lg:text-[32px] font-medium px-2 text-center">{t(`advantages.${step.title}.h`)}</h2>
              {step.arrow && (
                <img src={step.arrow} alt={`${step.title} arrow`} loading="lazy" className={step.arrowClass} />
              )}
              <div className={`flex flex-col items-center text-center gap-2 sm:gap-3 px-4 w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[312px] aspect-square max-h-[240px] sm:max-h-[280px] lg:max-h-[312px] border-[#F9B33B] border-[3px] sm:border-[5px] rounded-[10px]`}>
                <img src={step.icon} alt={step.title} loading="lazy" className="w-10 sm:w-12 lg:w-[74px] h-10 sm:h-12 lg:h-[74px] mt-3 sm:mt-4" />
                <p className="text-xs sm:text-sm lg:text-[22px] px-2">{t(`advantages.${step.title}.p`)}</p>
              </div>
            </div>
          ))}
          <Link
            to="/contacts"
            className="w-full sm:w-[360px] lg:w-[730px] h-10 sm:h-12  lg:h-[67px] bg-[#F9B33B] flex justify-center items-center text-sm sm:text-base lg:text-2xl font-bold rounded-[10px] sm:mt-6 lg:mt-8  hover:scale-105 transition duration-300 mx-auto"
          >
            {t('button')}
          </Link>
        </div>

        {/* Image Comparison Slider */}
        <div className=" lg:w-[820px] sm:h-[400px] lg:h-[1230px] px-4 sm:px-6 lg:px-0 sm:top-[10px]">
          <ImageComparisonSlider beforeSrc={before_after_1} afterSrc={before_after_2}  />
        </div>
      </main>

      {/* Footer Text */}
      <div className="w-full max-w-[1640px] mx-auto">
        <p className="font-normal text-base sm:text-lg md:text-xl lg:text-[32px] text-center px-4 sm:px-6 md:px-0">{t('p')}</p>
        <div className="w-full max-w-[1640px] h-[1px] bg-[#828282] mt-4 sm:mt-6 lg:mt-8 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Advantages;