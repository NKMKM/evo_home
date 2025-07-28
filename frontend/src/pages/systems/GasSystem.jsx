import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/electrical_systems/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

import first_step from '../../assets/images/systems/gas_systems/process/first_step.png'
import second_step from '../../assets/images/systems/gas_systems/process/second_step.png'
import third_step from '../../assets/images/systems/gas_systems/process/third_step.png'
import fourth_step from '../../assets/images/systems/gas_systems/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/gas_systems/process/fifth_step.png'

const GasSystem = () => {
  const {t} = useTranslation('systems/GasSystem')
  const selectedLang = localStorage.getItem('language') || 'en';
  return (
    <div className="font-sans">
      <Helmet>
          <title>{t('title')}</title>
          <meta name="description" content="Servizi professionali per impianti gas a Roma. Qualità, sicurezza e soluzioni su misura. Contattaci 📞 +39 327 986 6412" />
      </Helmet>
      {/* First block */}
      <header className={`w-full mx-auto my-10 md:my-20 flex flex-col justify-between px-4 md:px-8`}>
        <div className='w-full max-w-[1641px] mx-auto flex flex-row justify-between items-center mb-6 md:mb-10'>
          <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[150px] md:w-[276px] h-auto hidden md:block' />
          <h1 className='font-bold text-center text-4xl md:text-5xl lg:text-[57px] mx-auto'>{t('h')}</h1>
          <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[150px] md:w-[276px] h-auto hidden md:block' />
        </div>

        <div className='space-y-6 md:space-y-10 max-w-[1641px] mx-auto'>
          <div className='w-full h-[60px] md:h-[74px] bg-[#F9B33B] flex flex-row items-center'>
            <div className='w-[60px] md:w-[74px] h-full bg-[#222222] text-white text-3xl md:text-[50px] text-center mr-3 md:mr-10'>1.</div>
            <h2 className='text-xl md:text-3xl lg:text-[50px] font-bold mt-2 md:mt-0'>{t('header.h')}</h2>
          </div>

          <div className='text-lg md:text-2xl lg:text-[28px] text-center md:text-left px-4 md:px-0 flex flex-col space-y-4'>
            <p>{t('header.p1')}</p>
            <p>{t('header.p2')}</p>
          </div>

          <div className='w-full h-auto md:h-[661px] bg-blue-600/20 rounded-[10px] overflow-hidden'>
            <img src={image} alt='gas system' loading="lazy" className='w-full h-full object-cover' />
          </div>

          <div className='w-full max-w-[1641px] h-[50px] md:h-[67px] flex flex-row items-center mx-auto'>
            <div className='h-[2px] md:h-[1px] w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
            <Link to="/contacts" className="w-[40%] md:w-[389px] h-full bg-[#F9B33B] text-xl md:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300">{t('header.button')}</Link>
            <div className='h-[2px] md:h-[1px] w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
          </div>
        </div>
      </header>

      {/* Process */}
      <main className='w-full flex flex-col justify-between px-4 md:px-8'>
        <div className='w-full max-w-[1641px] h-[60px] md:h-[74px] bg-[#F9B33B] mx-auto flex flex-row items-center'>
          <div className='w-[60px] md:w-[74px] h-full bg-[#222222] text-white text-3xl md:text-[50px] text-center mr-3 md:mr-10'>2.</div>
          <h2 className={`text-xl md:text-3xl lg:text-[50px] font-bold mt-2 md:mt-0 ${selectedLang === 'it' ? 'text-[18px] md:text-[20px]' : ''}`}>{t('process.h')}</h2>
        </div>

        <p className='w-full max-w-[1641px] text-lg md:text-2xl lg:text-[32px] mx-auto my-6 md:my-20 text-center md:text-left px-4 md:px-0'>{t('process.p')}</p>

        <div className='w-full max-w-[1641px] mx-auto relative'>
          {/* Arrows hidden on mobile */}

          <ul className='w-full flex flex-col space-y-12 md:space-y-20'>
            <li className='w-full flex flex-col md:flex-row justify-between'>
              <div className='w-full md:w-[667px] h-auto md:h-[384px] border-[3px] md:border-[5px] border-[#F9B33B] mb-4 md:mb-0'>
                <img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full md:w-[1082px] flex flex-col space-y-4 md:space-y-8 py-4 px-4 md:px-6'>
                <h2 className='font-bold text-2xl md:text-3xl lg:text-[44px]'>{t('process.ul.1.h')}</h2>
                <p className='text-lg md:text-[26px]'>{t('process.ul.1.p')}</p>
              </div>
            </li>

            <li className='w-full flex flex-col md:flex-row-reverse justify-between'>
              <div className='w-full md:w-[667px] h-auto md:h-[384px] border-[3px] md:border-[5px] border-[#F9B33B] mb-4 md:mb-0'>
                <img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full md:w-[1082px] flex flex-col space-y-4 md:space-y-10 py-4 px-4 md:px-5'>
                <h2 className='font-bold text-2xl md:text-3xl lg:text-[46px]'>{t('process.ul.2.h')}</h2>
                <p className='text-lg md:text-[28px]'>{t('process.ul.2.p')}</p>
              </div>
            </li>

            <li className='w-full flex flex-col md:flex-row justify-between'>
              <div className='w-full md:w-[667px] h-auto md:h-[384px] border-[3px] md:border-[5px] border-[#F9B33B] mb-4 md:mb-0'>
                <img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full md:w-[1082px] flex flex-col space-y-4 md:space-y-5 py-4 px-4 md:px-10'>
                <h2 className='font-bold text-2xl md:text-3xl lg:text-[48px]'>{t('process.ul.3.h')}</h2>
                <p className='text-lg md:text-[28px]'>{t('process.ul.3.p')}</p>
              </div>
            </li>

            <li className='w-full flex flex-col md:flex-row-reverse justify-between'>
              <div className='w-full md:w-[667px] h-auto md:h-[384px] border-[3px] md:border-[5px] border-[#F9B33B] mb-4 md:mb-0'>
                <img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full md:w-[1082px] flex flex-col space-y-4 md:space-y-10 py-4 px-4 md:px-5'>
                <h2 className='font-bold text-2xl md:text-3xl lg:text-[48px]'>{t('process.ul.4.h')}</h2>
                <p className='text-lg md:text-[28px]'>{t('process.ul.4.p')}</p>
              </div>
            </li>

            <li className='w-full flex flex-col md:flex-row justify-between'>
              <div className='w-full md:w-[667px] h-auto md:h-[384px] border-[3px] md:border-[5px] border-[#F9B33B] mb-4 md:mb-0'>
                <img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover' />
              </div>
              <div className='w-full md:w-[1082px] flex flex-col space-y-4 md:space-y-4 py-4 px-4 md:px-10'>
                <h2 className='font-bold text-2xl md:text-3xl lg:text-[48px]'>{t('process.ul.5.h')}</h2>
                <p className='text-lg md:text-[28px]'>{t('process.ul.5.p')}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className='mb-10'>
          <Video text={t('process.video_text')} />
        </div>
      </main>

      <SystemLayoutCollection />
    </div>
  )
}

export default GasSystem;