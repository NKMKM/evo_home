import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/floor_heating/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

import first_step from '../../assets/images/systems/floor_heating/process/first_step.png'
import second_step from '../../assets/images/systems/floor_heating/process/second_step.png'
import third_step from '../../assets/images/systems/floor_heating/process/third_step.png'
import fourth_step from '../../assets/images/systems/floor_heating/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/floor_heating/process/fifth_step.png'

const FloorHeating = () => {
  const {t} = useTranslation('systems/FloorHeating')
  return (
    <div>
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content="Floor heating systems made by EVO Home" />
        </Helmet>
      <header className='lg:w-[1641px] sm:w-full lg:h-[1400px] mx-auto my-20 flex flex-col justify-between'>
        <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
          <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
          <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>{t('h')}</h1>
          <img src={right_decoration} alt='right decoration' loading="lazy"  className='w-[276px] h-[83px] sm:hidden lg:block' />
        </div>

        <div className='space-y-10'>
          <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
            <h2 className='sm:text-[20px] lg:text-[40px] font-bold sm:mt-3 lg:mt-2'>{t('header.h')}</h2>
          </div>

          <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-4'>
            <p>{t('header.p1')}</p>
            <p>{t('header.p2')}</p>
          </div>

          <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='floor heating' loading="lazy" className='w-full h-full object-cover rounded-[10px]' /></div>

          <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
            <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">{t('header.button')}</Link>
            <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
          </div>
        </div>
      </header>

      <main className='lg:w-full lg:h-[4088px]  flex flex-col justify-between'>
        <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
          <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
          <h2 className='sm:text-[24px] lg:text-[40px] font-bold sm:mt-4 lg:mt-0'>{t('process.h')}</h2>
        </div>

        <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>{t('process.p')}</p>

        <div className='sm:h-[5450px] lg:h-[2310px]  sm:w-full lg:w-auto relative mx-auto lg:mb-30'>
          <div className='lg:w-[1177px] lg:h-[646px]  absolute top-[380px] left-[420px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full' /></div>

          <ul className='sm:h-[4650px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between '>
            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[46px]'>{t('process.ul.1.h')}</h2>
                <p className='text-[26px]'>{t('process.ul.1.p')}</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row-reverse justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[46px]'>{t('process.ul.2.h')}</h2>
                <p className='text-[26px]'>{t('process.ul.2.p')}</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[48px]'>{t('process.ul.3.h')}</h2>
                <p className='text-[26px]'>{t('process.ul.3.p')}</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row-reverse justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[48px]'>{t('process.ul.4.h')}</h2>
                <p className='text-[26px]'>{t('process.ul.4.p')}</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[48px]'>{t('process.ul.5.h')}</h2>
                <p className='text-[26px]'>{t('process.ul.5.p')}</p>
              </div>
            </li>
          </ul>

          <div className='w-[1604px] h-[627px] absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
        </div>

        <div className='mb-10'>
          <Video text={t('process.video_text')} />
        </div>
      </main>

      <SystemLayoutCollection />
    </div>
  )
}

export default FloorHeating;
