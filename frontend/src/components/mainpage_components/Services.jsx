import React from 'react'
import LanguageLink from '../LanguageLink'
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
  const selectedLang = localStorage.getItem('language') || 'en';
  return (
    <>
        <main className='w-full max-w-[1641px] mx-auto my-10 sm:my-12 md:my-16 lg:my-20 
                        flex flex-col min-h-screen px-4 sm:px-6 md:px-8'>
            {/* header section */}
            <header className='w-full flex flex-col lg:flex-row justify-between items-center 
                            mb-8 sm:mb-12 md:mb-16 lg:mb-20'>
                <img src={left_decoration} alt='left decoration' loading="lazy" 
                     className='w-[150px] sm:w-[200px] md:w-[276px] h-auto hidden lg:block'/>
                <div className='w-full text-center'>
                    <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                        {t('header_1')}
                    </h2>
                    <h2 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
                        {t('header_2')}
                    </h2>
                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" 
                     className='w-[150px] sm:w-[200px] md:w-[276px] h-auto hidden lg:block'/>
            </header>

            <p className='w-full max-w-[1410px] mx-auto text-lg sm:text-xl md:text-2xl lg:text-3xl 
                         text-center font-light italic mb-8 sm:mb-12 md:mb-16 lg:mb-20 
                         px-4 sm:px-6 md:px-0'>
                {t('p')}
            </p>
            
            {/* list of services */}
            <section className='w-full max-w-[1641px] mx-auto'>
                <ul className='flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 md:gap-10'>
                    {/* first element */}
                    <li className='w-full lg:h-[849px] max-w-[389px] mx-auto flex flex-col justify-between 
                                 gap-4 py-2'>
                        <h2 className={`text-center ${(selectedLang === 'it' || selectedLang === 'en') ? 'sm:text-2xl md:text-2xl lg:mb-4' : 'text-xl sm:text-2xl md:text-3xl lg:mb-0'} font-semibold `}>
                            {t('first_element.h')}
                        </h2>
                        <div className='w-full flex flex-col shadow-xl rounded-lg overflow-hidden'>
                            <div className='w-full aspect-square max-w-[300px] sm:max-w-[350px] lg:max-w-[389px] max-h-[300px] sm:max-h-[350px] lg:max-h-[389px] mx-auto'>
                                <img src={room1} alt='room 1' loading="lazy" 
                                     className='w-full h-full object-cover rounded-t-lg'/>
                            </div>
                            <div className='flex-1 text-center items-center p-4 sm:p-5 space-y-4'>
                                <img src={keys} alt='keys' loading="lazy" 
                                     className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto'/>
                                <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
                                    {t("first_element.p")}
                                </p>
                            </div>
                        </div>
                        <LanguageLink to="turnkeyRenovation" 
                              className='h-12 sm:h-14 md:h-16 bg-[#F9B33B] flex justify-center 
                                       items-center hover:scale-105 transition duration-300 
                                       font-semibold text-lg sm:text-xl md:text-2xl rounded-lg 
                                       shadow-lg'>
                            {t('button')}
                        </LanguageLink>
                    </li>

                    {/* second element */}
                    <li className='w-full lg:h-[849px] max-w-[389px] mx-auto flex flex-col justify-between 
                                 gap-4 py-2'>
                        <h2 className='text-center font-semibold text-xl sm:text-2xl md:text-3xl'>
                            {t('second_element.h')}
                        </h2>
                        <div className='w-full flex flex-col shadow-xl rounded-lg overflow-hidden'>
                            <div className='w-full aspect-square max-w-[300px] sm:max-w-[350px] lg:max-w-[389px] max-h-[300px] sm:max-h-[350px] lg:max-h-[389px] mx-auto'>
                                <img src={room2} alt='room 2' loading="lazy" 
                                     className='w-full h-full object-cover rounded-t-lg'/>
                            </div>
                            <div className='flex-1 text-center items-center p-4 sm:p-5 space-y-4'>
                                <img src={room} alt='room' loading="lazy" 
                                     className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto'/>
                                <p className='text-base sm:text-lg md:text-xl lg:text-[22px]'>
                                    {t("second_element.p")}
                                </p>
                            </div>
                        </div>
                        <LanguageLink to="roomRenovation" 
                              className='h-12 sm:h-14 md:h-16 bg-[#F9B33B] flex justify-center 
                                       items-center hover:scale-105 transition duration-300 
                                       font-semibold text-lg sm:text-xl md:text-2xl rounded-lg 
                                       shadow-lg'>
                            {t('button')}
                        </LanguageLink>
                    </li>

                    {/* third element */}
                    <li className='w-full lg:h-[849px] max-w-[389px] mx-auto flex flex-col justify-between 
                                 gap-4 py-2 '>
                        <h2 className={`text-center font-semibold ${selectedLang === 'en' ? 'sm:text-2xl md:text-3xl' : ''} ${selectedLang === 'ru' ? 'sm:text-2xl md:text-2xl lg:mb-1' : ''} ${selectedLang === 'it' ? 'sm:text-2xl md:text-3xl lg:mb-4' : ''} `}>
                            {t('third_element.h')}
                        </h2>

                        <div className='w-full flex flex-col shadow-xl rounded-lg overflow-hidden '>
                            <div className='w-full aspect-square max-w-[300px] sm:max-w-[350px] lg:max-w-[389px] max-h-[300px] sm:max-h-[350px] lg:max-h-[389px] mx-auto bo'>
                                <img src={basement} alt='basement' loading="lazy" 
                                     className='w-full h-full object-cover rounded-t-lg'/>
                            </div>
                            <div className='flex-1 text-center items-center p-4 sm:p-5 space-y-10'>
                                <img src={botique} alt='botique icon' loading="lazy" 
                                     className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto'/>
                                <p className='text-base sm:text-lg md:text-xl lg:text-[22px]'>
                                    {t("third_element.p")}
                                </p>
                            </div>
                        </div>
                        <LanguageLink to="commercialPremises" 
                              className='h-12 sm:h-14 md:h-16 bg-[#F9B33B] flex justify-center 
                                       items-center hover:scale-105 transition duration-300 
                                       font-semibold text-lg sm:text-xl md:text-2xl rounded-lg 
                                       shadow-lg'>
                            {t('button')}
                        </LanguageLink>
                    </li>

                    {/* fourth element */}
                    <li className='w-full lg:h-[849px] max-w-[389px] mx-auto flex flex-col justify-between 
                                 gap-4 py-2 '>
                        <h2 className='text-center font-semibold text-xl sm:text-2xl md:text-3xl'>
                            {t('fourth_element.h')}
                        </h2>
                        <div className='w-full flex flex-col shadow-xl rounded-lg overflow-hidden '>
                            <div className='w-full aspect-square max-w-[300px] sm:max-w-[350px] lg:max-w-[389px] max-h-[300px] sm:max-h-[350px] lg:max-h-[389px] mx-auto bo'>
                                <img src={system} alt='basement' loading="lazy" 
                                     className='w-full h-full object-cover rounded-t-lg'/>
                            </div>
                            <div className='flex-1 text-center items-center p-4 sm:p-5 space-y-4'>
                                <img src={room} alt='room' loading="lazy" 
                                     className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto'/>
                                <p className='text-base sm:text-lg md:text-xl lg:text-[22px]'>
                                    {t("fourth_element.p")}
                                </p>
                            </div>
                        </div>
                        <LanguageLink to="roomRenovation" 
                              className='h-12 sm:h-14 md:h-16 bg-[#F9B33B] flex justify-center 
                                       items-center hover:scale-105 transition duration-300 
                                       font-semibold text-lg sm:text-xl md:text-2xl rounded-lg 
                                       shadow-lg'>
                            {t('button')}
                        </LanguageLink>
                    </li>
                </ul>
            </section>
        </main>
    </>
  )
}

export default Services