import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// image imports
import achieve from '../../assets/icons/achieve.png'
import bill from '../../assets/icons/bill.png'
import communication from '../../assets/icons/communication.png'
import hands from '../../assets/icons/hands.png'
import money from '../../assets/icons/money.png'
import time from '../../assets/icons/time.png'
import left_arrow from '../../assets/icons/arrow_to_left.png'
import right_arrow from '../../assets/icons/arrow_to_right.png'
import bottom_arrow from '../../assets/icons/arrow_to_bottom.png'
import before_after_1 from '../../assets/images/before_after_1.png'
import before_after_2 from '../../assets/images/before_after_2.png'

import ImageComparisonSlider from '../ImageComparisonSlider'

const Advantages = () => {
  const selectedLang = localStorage.getItem('language') || 'en';
  const {t} = useTranslation('home/Advantages')
  return (
  <div className=' lg:w-full sm:h-[2750px] sm:flex sm:flex-col sm:justify-between  lg:h-[1100px]  lg:mb-[630px] '>
          
          {/* header */}
          <header className=' lg:w-[1418px]  h-[184px] text-center mx-auto mt-20 sm:mb-30 lg:mb-20 font-bold text-[#222222] items-center lg:border-r-[12px]  lg:border-r-[#E0E0E0] lg:border-l-[12px] lg:border-l-[#E0E0E0]'>
            <h1 className='sm:text-[50px] lg:text-[60px] '>{t('header.first_stroke')}</h1>
            <div className="flex flex-row justify-between">
              <div className='w-[155px] h-[12px] bg-[#E0E0E0] sm:hidden lg:block'></div>
              <div className='w-[155px] h-[12px] bg-[#E0E0E0] sm:hidden lg:block'></div>
            </div>
            <h1 className='sm:text-[50px] lg:text-[60px] mb-2'>{t('header.second_stroke')}</h1>
          </header>

          {/* main info */}

          <main className='flex sm:flex-col lg:flex-row sm:h-[2000px] lg:h-[1166px]  sm:w-full lg:w-[1655px] mx-auto  justify-between'>

            {/* info */}

            <div className='relative grid sm:grid-cols-2 lg:grid-cols-2 lg:grid-rows-3 sm:gap-y-[80px] lg:gap-x-[100px] lg:gap-y-[50px] lg:w-[735px] lg:h-full items-center sm:h-[800px]  lg:my-auto '>
                <div className='flex flex-col items-center'>
                  <h2 className='text-[32px] font-[500]'>{t('advantages.first_step.h')}</h2>
                  <img src={right_arrow} alt='right arrow' loading="lazy" className='z-10 absolute md:top-[150px] md:left-[33.6%] lg:top-[155px] lg:left-[215px] scale-[0.6] sm:hidden md:block'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={achieve} alt='achievment' loading="lazy"  className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[21px]'>{t('advantages.first_step.p')}</p>
                  </div>
                </div>


                <div className='flex flex-col items-center'>
                  <h2 className='text-[32px] font-[500]'>{t('advantages.second_step.h')}</h2>
                  <img src={bottom_arrow} alt='bottom arrow' loading="lazy" className='z-10 absolute sm:right-[10px] sm:top-[240px] md:right-[7%] lg:top-[227px] lg:right-[10px] scale-[0.6]'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={bill} alt='bill' loading="lazy" className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>{t('advantages.second_step.p')}</p>
                  </div>
                </div>


                <div className={`flex flex-col items-center  ${selectedLang === 'it' ? 'h-[340px]' : ''} `}>
                  <h2 className='text-[32px] font-[500]'>{t('advantages.third_step.h')}</h2>
                  <img src={left_arrow} alt='left arrow' loading="lazy" className='z-10 absolute lg:top-[450px] lg:left-[215px] scale-[0.6] sm:hidden md:block'/>
                  <div className={`flex flex-col items-center text-center space-y-2 px-4 w-[312px] ${selectedLang === 'it' ? 'h-[290px]' : ''} rounded-[10px] border-[#F9B33B] border-[5px]`}>
                    <img src={hands} alt='hands' loading="lazy" className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>{t('advantages.third_step.p')}</p>
                  </div>
                </div>


                <div className={`flex flex-col items-center ${selectedLang === 'it' ? 'h-[340px]' : ''} `}>
                  <h2 className='text-[32px] font-[500]'>{t('advantages.fourth_step.h')}</h2>

                  <div className={`flex flex-col items-center text-center space-y-2 px-4 w-[312px] ${selectedLang === 'it' ? 'h-[290px]' : ''} rounded-[10px] border-[#F9B33B] border-[5px]`}>
                    <img src={money} alt='money' loading="lazy" className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>{t('advantages.fourth_step.p')}</p>
                  </div>

                  
                </div>
                <div className='flex flex-col items-center'>
                  <h2 className='text-[32px] font-[500]'>{t('advantages.fifth_step.h')}</h2>
                  <img src={bottom_arrow} alt='bottom arrow' loading="lazy" className='z-10 absolute sm:top-[620px] sm:left-[15px] md:left-[7.5%] lg:top-[540px] lg:left-[10px] scale-[0.6]'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={time} alt='time' loading="lazy" className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>{t('advantages.fifth_step.p')}</p>
                  </div>
                </div>


                <div className='flex flex-col items-center'>
                  <h2 className='text-[32px] font-[500]'>{t('advantages.sixth_step.h')}</h2>
                  <img src={right_arrow} alt='right arrow' loading="lazy" className='z-10 absolute md:top-[900px] md:left-[33.6%] lg:top-[810px] lg:left-[215px] scale-[0.55] sm:hidden md:block'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={communication} alt='communication' loading="lazy" className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>{t('advantages.sixth_step.p')}</p>
                  </div>
                </div>
            
                <Link to="/contacts" className='sm:w-[500px] sm:ml-[25%] md:ml-[50%] lg:w-[734px] h-[67px] flex justify-center items-center lg:mx-auto bg-[#F9B33B] rounded-[10px]  lg:mt-[110px] text-3xl font-bold cursor-pointer hover:scale-110 transition duration-300'>{t('button')}</Link>

            </div>

            {/* image with slider  before/after*/}

            <div className='flex  sm:w-full lg:w-[820px] lg:h-[1156px] sm:h-[700px] sm:px-10 lg:mt-0 sm:mt-[100px]'>
                <ImageComparisonSlider 
                  beforeSrc={before_after_1}
                  afterSrc={before_after_2}
                />
            </div>

          </main>



          <p className='font-[400] sm:text-center sm:text-[36px] md:text-[32px] sm:w-full lg:w-[1640px] mx-auto md:my-20 '>{t('p')}</p>
          <div className='sm:hidden md:w-[1640px] h-[1px] mx-auto mb-20 bg-[#828282]'></div>
    </div>
  )
}

export default Advantages