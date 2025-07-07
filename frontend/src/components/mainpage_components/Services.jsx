import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// icons import
import left_decoration from '../../assets/images/leftside_yellow_decoration.png'
import right_decoration from '../../assets/images/rightside_yellow_decoration.png'
import keys from '../../assets/icons/keys.png'
import gears from '../../assets/icons/gears.png'
import botique from '../../assets/icons/botique.png'
import room from '../../assets/icons/room.png'



// photo import

import room1 from '../../assets/images/services_images/room.jpg'
import room2 from '../../assets/images/services_images/room2.jpg'
import basement from '../../assets/images/services_images/basement.jpg'
import system from '../../assets/images/services_images/system.jpg'

const Services = () => {
  const {t} = useTranslation('home/Services')
  return (
    <>
        <main className=' sm:h-[4500px] lg:h-[1385px]  sm:flex sm:flex-col sm:justify-between lg:block my-20 sm:w-full lg:w-[1641px] mx-auto'>
            {/* header section */}
            
            <header className=' lg:h-[170px] w-full mx-auto flex flex-row justify-between items-center lg:mb-20 '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
                <div className='sm:w-full sm:px-4 lg:w-auto lg:px-0'>
                    <h1 className='font-bold text-center sm:text-[50px] lg:text-[60px]'>{t('header_1')}</h1>
                    <h1 className='font-bold text-center sm:text-[70px] lg:text-[70px]'>{t('header_2')}</h1>
                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </header>

            <p className='sm:w-full lg:w-[1410px] sm:h-[150px] lg:h-[76px] mx-auto text-[32px] text-center font-[100] italic mb-20'>{t('p')}</p>
            
            {/* list of services */}
            <section className=' sm:w-full lg:w-[1641px] '>
                <ul className='sm:h-[3900px]  sm:w-full lg:w-[1641px] mx-auto flex sm:flex-col lg:flex-row justify-between '>
                    {/* first element */}
                    <li className='sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[389px] h-[933px]  flex flex-col justify-between py-2'>
                        <h2 className='text-center font-semibold text-[30px]'>{t('first_element.h')}</h2>

                        <div className='w h-[778px]  flex flex-col shadow-xl'>
                            <div className=' h-1/2 bg-red-400 '><img src={room1} alt='room 1' loading="lazy" className='w-full h-full' /></div>
                            <div className='h-1/2  text-center items-center pt-5 space-y-5'>
                                <img src={keys} alt='keys' loading="lazy" className='sm:w-[120px] sm:h-[120px] lg:w-[79px] lg:h-[79px] mx-auto'/>
                                <p className='sm:text-[30px] lg:text-[22px]'>{t("first_element.p")}</p>
                            </div>
                        </div>

                        <Link to={"/turnkey_renovation"} className='h-[67px] bg-[#F9B33B] flex justify-center items-center hover:scale-110 transition duration-300 font-semibold text-[30px] shadow-2xl'>{t('button')}</Link>
                    </li>

                    {/* second element */}
                    <li className='sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[389px]  h-[933px]  flex flex-col justify-between py-2'>
                        <h2 className='text-center font-semibold text-[32px]'>{t('second_element.h')}</h2>

                        <div className='w h-[778px]  flex flex-col shadow-xl'>
                            <div className=' h-1/2 bg-red-400'><img src={room2} alt='room 2' loading="lazy" className='w-full h-full' /></div>
                            <div className='h-1/2  text-center items-center pt-5 space-y-5'>
                                <img src={room} alt='room' loading="lazy" className='sm:w-[120px] sm:h-[120px] lg:w-[79px] lg:h-[79px] mx-auto'/>
                                <p className='sm:text-[30px] lg:text-[22px]'>{t("second_element.p")}</p>
                            </div>
                        </div>

                        <Link to="/room_renovation" className='h-[67px] bg-[#F9B33B] flex justify-center items-center hover:scale-110 transition duration-300 font-semibold text-[30px] shadow-2xl'>{t('button')}</Link>
                    </li>

                    {/* third element */}
                    <li className='sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[389px]  h-[933px]  flex flex-col justify-between pb-[12px]'>
                        <h2 className='text-center font-semibold text-[26px] mt-[15px] '>{t('third_element.h')}</h2>

                        <div className='w h-[778px]  flex flex-col shadow-xl'>
                            <div className=' h-1/2 object-fill'><img src={basement} alt='basement' loading="lazy" className='w-full h-full'/></div>
                            <div className='h-1/2  text-center items-center pt-5 space-y-5'>
                                <img src={botique} alt='botique icon' loading="lazy" className='sm:w-[120px] sm:h-[100px] lg:w-[79px] lg:h-[79px] mx-auto'/>
                                <p className='sm:text-[30px] lg:text-[22px]'>{t("third_element.p")}</p>
                            </div>
                        </div>

                        <Link to={'/commercial_premises'} className='h-[67px] bg-[#F9B33B] flex justify-center items-center hover:scale-110 transition duration-300 font-semibold text-[30px] shadow-2xl'>{t('button')}</Link>
                    </li>

                    {/* fourth element */}
                    <li className='sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[389px]  h-[933px]  flex flex-col justify-between py-2'>
                        <h2 className='text-center font-semibold text-[30px]'>{t('fourth_element.h')}</h2>

                        <div className='w h-[778px]  flex flex-col shadow-xl'>
                            <div className=' h-1/2 overflow-hidden '><img src={system} alt='systems' loading="lazy" className='object-cover overflow-hidden' /></div>
                            <div className='h-1/2  text-center items-center pt-5 space-y-5'>
                                <img src={gears} alt='gears icon' loading="lazy" className='sm:w-[120px] sm:h-[120px] lg:w-[79px] lg:h-[79px] mx-auto'/>
                                <p className='sm:text-[30px] lg:text-[22px]'>{t("fourth_element.p")}</p>
                            </div>
                        </div>

                        <Link to="/systems" className='h-[67px] bg-[#F9B33B] flex justify-center items-center hover:scale-110 transition duration-300 font-semibold text-[30px] shadow-2xl'>{t('button')}</Link>
                    </li>


                </ul>
            </section>
        </main>

    </>
  )
}

export default Services