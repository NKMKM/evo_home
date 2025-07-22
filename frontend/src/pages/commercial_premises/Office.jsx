import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/office/image.png'

// process images imports
import first_step from '../../assets/images/commercial_premises/office/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/office/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/office/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/office/process/fourth_step.jpg'
import fifth_step from '../../assets/images/commercial_premises/office/process/fifth_step.png'

const Office = () => {
  const { t } = useTranslation('commercial_premises/Ofice')
  const selectedLang = localStorage.getItem('language') || 'en';

  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content="Renovation of offices by EVO Home" />
      </Helmet>

      <header className={`max-w-[1641px] w-full ${selectedLang === 'it' || selectedLang === 'en' ? 'lg:h-[1350px]' : 'lg:h-[1440px]'} mx-auto my-20 flex flex-col justify-between px-5`}>
        <div className='h-[83px] w-full flex justify-between items-center mb-10 lg:mb-0'>
          <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] hidden lg:block' />
          <h1 className='font-bold mx-auto text-center text-[42px] sm:text-[60px] lg:text-[57px]'>{t('h')}</h1>
          <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] hidden lg:block' />
        </div>

        <div className='space-y-10'>
          <div className='w-full h-[74px] bg-[#F9B33B] flex flex-row'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-3 lg:mr-10'>1.</div>
            <h2 className='text-[24px] sm:text-[30px] lg:text-[50px] font-bold mt-4 lg:mt-0'>{t('header.h')}</h2>
          </div>

          <div className='text-[20px] sm:text-[28px] text-center lg:text-left px-2 sm:px-5 lg:px-0 flex flex-col space-y-4'>
            <p>{t('header.p1')}</p>
            <p>{t('header.p2')}</p>
          </div>

          <div className='w-full h-auto lg:h-[661px] bg-blue-600/20'>
            <img src={image} alt='office' loading="lazy" className='w-full h-full object-cover rounded-[10px]' />
          </div>

          <div className='w-full h-[67px] flex flex-row items-center justify-between'>
            <div className='h-[3px] lg:h-[1px] w-[20%] bg-[#F9B33B]'></div>
            <Link to="/contacts" className="w-[60%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[24px] sm:text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">{t('header.button')}</Link>
            <div className='h-[3px] lg:h-[1px] w-[20%] bg-[#F9B33B]'></div>
          </div>
        </div>
      </header>

      <main className='sm:w-full lg:w-[1650px] lg:mx-auto flex flex-col justify-between px-5'>
        <div className='w-full h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
          <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-3 lg:mr-10'>2.</div>
          <h2 className='text-[24px] sm:text-[30px] lg:text-[50px] font-bold mt-4 lg:mt-0'>{t('process.h')}</h2>
        </div>

        <div className='w-full relative mx-auto mt-10'>
          <ul className='flex flex-col space-y-20'>
            <li className='w-full flex flex-col lg:flex-row justify-between'>
              <div className='w-full lg:w-[667px] border-[5px] border-[#F9B33B]'>
                <img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full lg:w-[1082px] flex flex-col space-y-8 py-5 px-6'>
                <h2 className='font-bold text-[28px] sm:text-[42px] lg:text-[44px]'>{t('process.ul.1.h')}</h2>
                <p className='text-[20px] sm:text-[26px]'>{t('process.ul.1.p')}</p>
              </div>
            </li>

            <li className='w-full flex flex-col lg:flex-row-reverse justify-between'>
              <div className='w-full lg:w-[667px] border-[5px] border-[#F9B33B]'>
                <img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full lg:w-[1082px] flex flex-col space-y-8 py-5 px-6'>
                <h2 className='font-bold text-[28px] sm:text-[42px] lg:text-[44px]'>{t('process.ul.2.h')}</h2>
                <p className='text-[20px] sm:text-[26px]'>{t('process.ul.2.p')}</p>
              </div>
            </li>

            <li className='w-full flex flex-col lg:flex-row justify-between'>
              <div className='w-full lg:w-[667px] border-[5px] border-[#F9B33B]'>
                <img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full lg:w-[1082px] flex flex-col space-y-8 py-5 px-6'>
                <h2 className='font-bold text-[28px] sm:text-[42px] lg:text-[44px]'>{t('process.ul.3.h')}</h2>
                <p className='text-[20px] sm:text-[26px]'>{t('process.ul.3.p')}</p>
              </div>
            </li>

            <li className='w-full flex flex-col lg:flex-row-reverse justify-between'>
              <div className='w-full lg:w-[667px] border-[5px] border-[#F9B33B]'>
                <img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full lg:w-[1082px] flex flex-col space-y-8 py-5 px-6'>
                <h2 className='font-bold text-[28px] sm:text-[42px] lg:text-[44px]'>{t('process.ul.4.h')}</h2>
                <p className='text-[20px] sm:text-[26px]'>{t('process.ul.4.p')}</p>
              </div>
            </li>

            <li className='w-full flex flex-col lg:flex-row justify-between'>
              <div className='w-full lg:w-[667px] border-[5px] border-[#F9B33B]'>
                <img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full lg:w-[1082px] flex flex-col space-y-8 py-5 px-6'>
                <h2 className='font-bold text-[28px] sm:text-[42px] lg:text-[44px]'>{t('process.ul.5.h')}</h2>
                <p className='text-[20px] sm:text-[26px]'>{t('process.ul.5.p')}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className='my-10'>
          <Video text={t('process.video_text')} />
        </div>
      </main>

      <CommercialPremisesLayoutCollection />
    </div>
  )
}

export default Office
