import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import ImageComparisonSlider from '../ImageComparisonSlider'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'

import before_after_3 from '../../assets/images/before_after_3.png'
import before_after_4 from '../../assets/images/before_after_4.png'


const AboutCompanyHome = () => {
  const {t} = useTranslation("home/AboutCompany")
  return (
    <div className=' sm:flex sm:flex-col sm:justify-between sm:h-[1550px] lg:h-[900px] mb-20 sm:w-full lg:w-[1641px] mx-auto'>
        {/* header */}
        <div className='h-[170px] w-full mx-auto flex flex-row justify-between items-center sm:mb-1 lg:mb-20 '>
            <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden lg:block '/>
            <div className='mx-auto'>
                <h1 className='font-bold text-center text-[70px]'>{t("h")}</h1>

            </div>
            <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden lg:block'/>
        </div>

        {/* content */}
        <div className=' sm:w-full sm:h-[1200px] lg:w-[1622px] lg:h-[538px]  mx-auto flex sm:flex-col-reverse lg:flex-row justify-between mb-20'>

            {/* img comparison slider */}
            <div className='sm:w-full sm:px-10 lg:px-0 lg:w-[836px] sm:h-[600px] lg:h-[536px] '>
                <ImageComparisonSlider
                    beforeSrc={before_after_3}
                    afterSrc={before_after_4}
                />
            </div>

            <div className='sm:text-center lg:text-start flex flex-col sm:w-full lg:w-[836px] py-4 sm:px-10 lg:px-0 lg:pl-20 space-y-10'>
                <p className='text-3xl'><span className='text-[#F9B33B]'>{t('text.span')} </span> {t('text.p1')}</p>

                <ul className='list-disc text-2xl ml-5 '>
                    <li>{t('ul.li1')}</li>
                    <li>{t('ul.li2')}</li>
                    <li>{t('ul.li3')}</li>
                    <li>{t('ul.li4')}</li>
                </ul>

                <h1 className='text-[31px] font-bold'><span className='text-[#F9B33B] '>{t('text.span')}</span>  {t('text.p2')}</h1>
            </div>

        </div>

        {/* button */}
        <div className='lg:w-[1640px] flex flex-row items-center mx-auto'>

            <div className='h-[1px] w-[625.5px] bg-[#F9B33B] sm:hidden lg:block'></div>

            <Link to="/about_us" className='w-[389px] h-[67px] flex items-center justify-center bg-[#F9B33B] text-[30px] font-semibold'>{t('button')}</Link>

            <div className='h-[1px] w-[625.5px] bg-[#F9B33B] sm:hidden lg:block'></div>
        </div>

    </div>
  )
}

export default AboutCompanyHome