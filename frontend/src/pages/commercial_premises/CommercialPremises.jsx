import React from 'react'
import LanguageLink from '../../components/LanguageLink'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/commercial_premises/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

import first_step from '../../assets/images/commercial_premises/commercial_premises/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/commercial_premises/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/commercial_premises/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/commercial_premises/process/fourth_step.png'
import sixth_step from '../../assets/images/commercial_premises/commercial_premises/process/sixth_step.png'
import seventh_step from '../../assets/images/commercial_premises/commercial_premises/process/seventh_step.png'

import Calculator from '../../components/mainpage_components/Calculator'
import Reasons from '../../components/Reasons'
import Video from '../../components/Video'
import CommercialPremisesProjects from '../../components/commercial_premises_components/CommercialPremisesProjects'

const CommercialPremises = () => {
  const {t} = useTranslation('commercial_premises/CommercialPremises')
  const selectedLang = localStorage.getItem('language') || 'en';	
  return (
    <div className='w-full'>
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content={t('description')} />
        </Helmet>
        <header className='w-full max-w-[1641px] h-auto mx-auto mt-10 sm:mt-10 lg:mt-20 mb-10 sm:mb-20 lg:mb-30 px-4 flex flex-col justify-between'>
            <div className='h-auto w-full mx-auto flex flex-col lg:flex-row justify-between items-center mb-6 sm:mb-10 lg:mb-0'>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='hidden lg:block w-[200px] lg:w-[276px] h-[60px] lg:h-[83px] mb-4 lg:mb-0'/>
                <div className='w-full lg:w-auto'>
                    <h1 className='font-bold text-center text-[32px] sm:text-[40px] lg:text-[57px] px-4'>{t('h')}</h1>
                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='hidden lg:block w-[200px] lg:w-[276px] h-[60px] lg:h-[83px] mt-4 lg:mt-0'/>
            </div>
            
            <div className='w-full h-auto flex flex-col justify-between gap-6'>
                <div className='w-full max-w-[1640px] h-auto bg-[#F9B33B] flex flex-row items-center'>
                    <div className='w-[50px] sm:w-[60px] lg:w-[74px] h-[50px] sm:h-[60px] lg:h-[74px] bg-[#222222] text-white text-[30px] sm:text-[40px] lg:text-[50px] text-center mr-4 sm:mr-5 lg:mr-10 flex items-center justify-center'>1.</div>
                    <h2 className='text-[20px] sm:text-[24px] lg:text-[50px] font-bold mt-2 sm:mt-4 lg:mt-0'>{t('header.h')}</h2>
                </div>

                <div className='w-full text-[18px] sm:text-[24px] lg:text-[32px] text-center lg:text-start px-4 lg:px-0 flex flex-col gap-4'>
                    <p>{t('header.p1')}</p>
                    <p>{t('header.p2')}</p>
                </div>

                <div className='w-full max-w-[1641px] h-[300px] sm:h-[400px] lg:h-[661px] bg-blue-600/20'>
                    <img src={image} alt='commercial premises' loading="lazy" className='w-full h-full object-cover rounded-[10px]'/>
                </div>

                <div className='w-full max-w-[1640px] h-auto flex flex-col sm:flex-row items-center mx-auto gap-4'>
                    <div className='h-[2px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                    <LanguageLink 
                        to="contacts" 
                        className="w-full sm:w-[60%] lg:w-[389px] h-[50px] lg:h-[67px] bg-[#F9B33B] text-[20px] sm:text-[24px] lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300"
                    >
                        {t('header.button')}
                    </LanguageLink>
                    <div className='h-[2px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>
        </header>

        <div className='mb-10 sm:mb-20 lg:mb-20 px-4'>
            <Calculator/>
        </div>

        <main className='w-full h-auto mb-10 sm:mb-20 lg:mb-20 px-4 flex flex-col justify-between '>
            <div className='w-full max-w-[1640px] h-auto bg-[#F9B33B] mx-auto flex flex-row items-center'>
                <div className='w-[50px] sm:w-[60px] lg:w-[74px] h-[50px] sm:h-[60px] lg:h-[74px] bg-[#222222] text-white text-[30px] sm:text-[40px] lg:text-[50px] text-center mr-4 sm:mr-5 lg:mr-10 flex items-center justify-center'>2.</div>
                <h2 className={`text-[20px] sm:text-[24px] lg:text-[50px] font-bold ${selectedLang === 'en' ? 'mt-2 sm:mt-4 lg:mt-0' : 'mt-0'}`}>{t('process.h')}</h2>
            </div>

            <div className='w-full max-w-[1641px] h-auto relative mx-auto lg:pt-10'>
    
                <ul className='w-full h-auto flex flex-col justify-between gap-10 sm:gap-16 lg:gap-20 mx-auto'>
                    {[
                        { image: first_step, alt: 'first step', h: t('process.ul.1.h'), p: t('process.ul.1.p') },
                        { image: second_step, alt: 'second step', h: t('process.ul.2.h'), p: t('process.ul.2.p') },
                        { image: third_step, alt: 'third step', h: t('process.ul.3.h'), p: t('process.ul.3.p') },
                        { image: fourth_step, alt: 'fourth step', h: t('process.ul.4.h'), p: t('process.ul.4.p') },
                        { image: image, alt: 'fifth step', h: t('process.ul.5.h'), p: t('process.ul.5.p') },
                        { image: sixth_step, alt: 'sixth step', h: t('process.ul.6.h'), p: t('process.ul.6.p') },
                        { image: seventh_step, alt: 'seventh step', h: t('process.ul.7.h'), p: t('process.ul.7.p') }
                    ].map((step, index) => (
                        <li key={index} className={`w-full max-w-[1641px] h-auto flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between mx-auto`}>
                            <div className='w-full max-w-[667px] h-[250px] sm:h-[350px] lg:h-[384px] border-[3px] sm:border-[4px] lg:border-[5px] border-[#F9B33B] mx-auto'>
                                <img src={step.image} alt={step.alt} loading="lazy" className='w-full h-full object-cover'/>
                            </div>
                            <div className='w-full max-w-[1082px] h-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 py-5 px-4 sm:px-5 lg:px-5'>
                                <h2 className='font-bold text-[28px] sm:text-[36px] lg:text-[46px]'>{step.h}</h2>
                                <p className='text-[18px] sm:text-[22px] lg:text-[27px]'>{step.p}</p>
                            </div>
                        </li>
                    ))}
                </ul>
    
            </div>

            <div className='mb-10 sm:mb-20 lg:mb-0'>
                <Video text={t('process.video_text')}/>
            </div>
        </main>

        <Reasons/>
        <CommercialPremisesProjects/>
    </div>
  )
}

export default CommercialPremises