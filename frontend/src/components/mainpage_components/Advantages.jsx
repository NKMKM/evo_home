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
    <div className="w-full max-w-[1655px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col gap-6 sm:gap-8 lg:gap-10">
      {/* Header */}
      <header className="w-full max-w-[1418px] mx-auto text-center font-bold text-[#222222] lg:border-x-[12px] lg:border-[#E0E0E0]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px]">{t('header.first_stroke')}</h1>
        <div className="flex flex-row justify-between mt-2 sm:mt-4">
          <div className="w-[100px] sm:w-[155px] h-[12px] bg-[#E0E0E0] hidden lg:block"></div>
          <div className="w-[100px] sm:w-[155px] h-[12px] bg-[#E0E0E0] hidden lg:block"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] mt-2 sm:mt-4">{t('header.second_stroke')}</h1>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 w-full justify-between">
        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-x-10 lg:gap-y-8 w-full lg:w-[735px]">
          {[
            {
              title: 'first_step',
              icon: achieve,
              arrow: right_arrow,
              arrowClass: 'absolute top-[155px] left-[215px] scale-[0.5] hidden lg:block',
            },
            {
              title: 'second_step',
              icon: bill,
              arrow: bottom_arrow,
              arrowClass: `absolute top-[215px] right-0 scale-[0.5] hidden lg:block`,
            },
            {
              title: 'third_step',
              icon: hands,
              arrow: left_arrow,
              arrowClass: 'absolute top-[460px] left-[215px] scale-[0.5] hidden lg:block',
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
              arrowClass: `absolute top-[540px] left-[10px] scale-[0.5] hidden lg:block`,
            },
            {
              title: 'fifth_step',
              icon: communication,
              arrow: right_arrow,
              arrowClass: 'absolute top-[810px] left-[215px] scale-[0.5] hidden lg:block',
            },
          ].map((step, index) => (
            <div key={index} className={`flex flex-col items-center relative ${selectedLang === 'it' && (step.title === 'third_step' || step.title === 'fourth_step') ? 'min-h-[300px]' : ''}`}>
              <h2 className="text-lg sm:text-xl lg:text-[32px] font-medium">{t(`advantages.${step.title}.h`)}</h2>
              {step.arrow && (
                <img src={step.arrow} alt={`${step.title} arrow`} loading="lazy" className={step.arrowClass} />
              )}
              <div className={`flex flex-col items-center text-center gap-2 sm:gap-3 px-4 w-full max-w-[312px] ${selectedLang === 'it' && (step.title === 'third_step' || step.title === 'fourth_step') ? 'h-[290px]' : 'h-[250px]'} border-[#F9B33B] border-[5px] rounded-[10px]`}>
                <img src={step.icon} alt={step.title} loading="lazy" className="w-12 sm:w-16 lg:w-[74px] h-12 sm:h-16 lg:h-[74px] mt-4" />
                <p className="text-sm sm:text-base lg:text-[22px]">{t(`advantages.${step.title}.p`)}</p>
              </div>
            </div>
          ))}
          <Link
            to="/contacts"
            className="w-full sm:w-[400px] lg:w-[500px] h-12 sm:h-14 lg:h-[67px] bg-[#F9B33B] flex justify-center items-center text-base sm:text-lg lg:text-2xl font-bold rounded-[10px] mt-6 sm:mt-8 lg:mt-10 hover:scale-105 transition duration-300 mx-auto"
          >
            {t('button')}
          </Link>
        </div>

        {/* Image Comparison Slider */}
        <div className="w-full lg:w-[820px] h-[400px] sm:h-[500px] lg:h-[800px] px-4 sm:px-6 lg:px-0">
          <ImageComparisonSlider beforeSrc={before_after_1} afterSrc={before_after_2} />
        </div>
      </main>

      {/* Footer Text */}
      <div className="w-full max-w-[1640px] mx-auto">
        <p className="font-normal text-lg sm:text-xl md:text-2xl lg:text-[32px] text-center px-4 sm:px-6 md:px-0">{t('p')}</p>
        <div className="w-full max-w-[1640px] h-[1px] bg-[#828282] mt-4 sm:mt-6 lg:mt-8 hidden md:block"></div>
      </div>
    </div>
  );
};

export default Advantages;