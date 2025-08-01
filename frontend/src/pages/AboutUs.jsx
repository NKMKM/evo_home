import React from 'react'
import LanguageLink from '../components/LanguageLink'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

// images imports
import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import left_yellow_decoration from '../assets/images/leftside_yellow_decoration.png'
import right_yellow_decoration from '../assets/images/rightside_yellow_decoration.png'
import arrow_1 from '../assets/images/team_images/arrow_1.png'
import arrow_2 from '../assets/images/team_images/arrow_2.png'
import founder_main from '../assets/images/founder_main.png'

import keys from '../assets/icons/keys.png'
import gears from '../assets/icons/gears.png'
import botique from '../assets/icons/botique.png'
import room from '../assets/icons/room.png'

import first_image from '../assets/images/about_us_achievments/first_image.png'
import second_image from '../assets/images/about_us_achievments/second_image.png'
import third_image from '../assets/images/about_us_achievments/third_image.png'
import fourth_image from '../assets/images/about_us_achievments/fourth_image.png'

import image1 from '../assets/images/about_us_achievments/image1.png'
import image2 from '../assets/images/about_us_achievments/image2.png'
import image3 from '../assets/images/about_us_achievments/image3.png'
import image4 from '../assets/images/about_us_achievments/image4.png'
import vector from '../assets/images/about_us_achievments/vector.png'

// team members photos import 
import founder from '../assets/images/team_images/founder.png'
import designer from '../assets/images/team_images/designer.png'
import project_manager from '../assets/images/team_images/project_manager.png'
import engineer from '../assets/images/team_images/engineer.png'

import Calculator from '../components/mainpage_components/Calculator'
import Guarantees from '../components/mainpage_components/Guarantees'

import vector_about_us_1 from'../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from'../assets/videos/abouts_us/vector2.png'

//gallery photos---------------------------------


const AboutUs = () => {
    const {t} = useTranslation('AboutUs')
    const selectedLang = localStorage.getItem('language') || 'en';
  return (
    <div className="w-full">
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content={t('description')} />
        </Helmet>
        {/* about us block */}
        <header className='w-full lg:w-[1640px]  mx-auto mt-6 sm:mt-10 px-4 sm:px-6 md:px-8'>
            {/* header */}
            <div className='w-full flex flex-row justify-between items-center mb-6 sm:mb-8'>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='hidden md:block w-24 sm:w-32 h-16 sm:h-20'/>
                <div className='flex-1 flex justify-center'>
                    <h1 className={`font-bold text-center text-xl sm:text-4xl md:text-4xl lg:text-5xl ${(selectedLang === 'it' || selectedLang === 'en') ? 'lg:text-[40px]' : 'lg:text-[48px]'}`}>{t("header.h")}</h1>
                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='hidden md:block w-24 sm:w-32 h-16 sm:h-20'/>
            </div>

            <div className='flex flex-col md:flex-row w-full justify-between text-base sm:text-lg md:text-xl lg:text-[30.5px] gap-6 md:gap-8'>
                <div className='flex flex-col w-full md:w-1/2 text-center md:text-left justify-around gap-4 sm:gap-6'>
                    <p>{t("header.p1")}<span className='text-[#F9B33B]'>{t("header.span1")}</span>{t('header.p2')}<span className='text-[#F9B33B]'>{t("header.span2")}</span></p>
                    <p>{t("header.p3")}<span className='text-[#F9B33B]'>{t("header.span3")}</span></p>
                    <p>{t("header.p4")}</p>
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <img src={founder_main} alt='van' loading="lazy" className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-full h-auto rounded-[10px] object-cover'/>
                </div>
            </div>
            
            <div className='w-full flex flex-col sm:flex-row items-center gap-4 my-6'>
                <div className='h-1 w-full sm:w-1/3 bg-[#F9B33B]'></div>
                <LanguageLink to="contacts" className="w-full sm:w-1/3 h-12 sm:h-14 bg-[#F9B33B] text-lg sm:text-xl md:text-2xl font-semibold flex items-center justify-center hover:scale-105 transition duration-300">{t('header.button')}</LanguageLink>
                <div className='h-1 w-full sm:w-1/3 bg-[#F9B33B]'></div>
            </div>
        </header>

        {/* benefits of company */}
        <div className='mt-10 sm:mt-20'>
            <Guarantees/>
        </div>

        {/* our team */}
        <div className='w-full max-w-[1641px] mx-auto flex flex-col justify-between px-4 sm:px-6 md:px-8'>
            <div className='w-full flex flex-row justify-around items-center mb-6 sm:mb-8'>
                <img src={left_yellow_decoration} alt='left decoration' loading="lazy" className='hidden lg:block w-[200px] sm:w-[276px] h-[60px] sm:h-[83px]'/>
                <div className='flex-1 text-center'>
                    <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[57px]'>{t("our_team.h")}</h2>
                </div>
                <img src={right_yellow_decoration} alt='right decoration' loading="lazy" className='hidden lg:block w-[200px] sm:w-[276px] h-[60px] sm:h-[83px]'/>
            </div>
            
            {/* list of employees */}
            <div className='relative mb-10'>

                <ul className='w-full space-y-12 sm:space-y-16 lg:space-y-20'>

                    {/* 2 */}
                    <li className='w-full flex flex-col lg:flex-row-reverse justify-between gap-6 lg:gap-0 border-b border-gray-300 pb-6 lg:pb-0'>
                        <div className='w-full lg:w-[528px] h-[300px] sm:h-[376px] border-[3px] lg:border-[5px] border-[#F9B33B]'>
                            <img src={designer} alt='designer' loading="lazy" className='w-full h-full object-cover rounded-[10px]'/>
                        </div>
                        <div className='w-full lg:w-[1082px] flex flex-col space-y-6 lg:space-y-10 text-end lg:text-start'>
                            <div>
                                <h2 className='font-bold text-3xl sm:text-4xl lg:text-[50px]'>{t('our_team.ul.li2.h')}</h2>
                                <h3 className='font-light italic text-2xl sm:text-3xl lg:text-[40px]'>{t('our_team.ul.li2.h2')}</h3>
                            </div>
                            <p className='text-xl sm:text-2xl lg:text-[32px] font-light'>{t('our_team.ul.li2.p')}</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-0'>
                        <div className='w-full lg:w-[528px] h-[300px] sm:h-[376px] border-[3px] lg:border-[5px] border-[#F9B33B]'>
                            <img src={project_manager} alt='project manager' loading="lazy" className='w-full h-full object-cover rounded-[10px]'/>
                        </div>
                        <div className='w-full lg:w-[1082px] flex flex-col space-y-6 lg:space-y-10 lg:pl-6'>
                            <div>
                                <h2 className='font-bold text-3xl sm:text-4xl lg:text-[50px]'>{t('our_team.ul.li3.h')}</h2>
                                <h3 className='font-light italic text-2xl sm:text-3xl lg:text-[40px]'>{t('our_team.ul.li3.h2')}</h3>
                            </div>
                            <p className='text-xl sm:text-2xl lg:text-[32px] font-light'>{t('our_team.ul.li3.p')}</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className='w-full flex flex-col lg:flex-row-reverse justify-between gap-6 lg:gap-0 border-b border-gray-300 pb-6 lg:pb-0'>
                        <div className='w-full lg:w-[528px] h-[300px] sm:h-[376px] border-[3px] lg:border-[5px] border-[#F9B33B]'>
                            <img src={engineer} alt='engineer' loading="lazy" className='w-full h-full object-cover rounded-[10px]'/>
                        </div>
                        <div className='w-full lg:w-[1082px] flex flex-col space-y-6 lg:space-y-10 text-end lg:text-start'>
                            <div>
                                <h2 className='font-bold text-3xl sm:text-4xl lg:text-[50px]'>{t('our_team.ul.li4.h')}</h2>
                                <h3 className='font-light italic text-2xl sm:text-3xl lg:text-[40px]'>{t('our_team.ul.li4.h2')}</h3>
                            </div>
                            <p className='text-xl sm:text-2xl lg:text-[32px] font-light'>{t('our_team.ul.li4.p')}</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='w-full max-w-[1640px] h-[50px] sm:h-[67px] flex flex-row items-center justify-center mx-auto gap-4'>
                <div className='h-[2px] sm:h-[3px] w-[30%] sm:w-[625.5px] bg-[#F9B33B]'></div>
                <LanguageLink to="contacts" className="w-[40%] sm:w-[389px] h-[50px] sm:h-[67px] bg-[#F9B33B] text-xl sm:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300">{t('our_team.button')}</LanguageLink>
                <div className='h-[2px] sm:h-[3px] w-[30%] sm:w-[625.5px] bg-[#F9B33B]'></div>
            </div>
        </div>  



{/* our achievements */}
<div className='w-full max-w-[1640px] mx-auto my-10 sm:my-20 px-4 sm:px-6 md:px-8'>
            {/* header */}
            <div className='relative w-full max-w-[1418px] mx-auto mb-6 text-center font-bold text-[#222222] border-x-8 lg:border-x-[12px] border-[#E0E0E0]'>
                <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-[70px]'>{t('achievements.h')}</h2>
                <div className="flex flex-row justify-between">
                    
                </div>
            </div>

            <ul className='w-full flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 text-lg sm:text-xl text-center'>

  {/* 1 */}
  <li className='w-full lg:w-[389px]'>
    <div className='w-full aspect-square max-h-[300px] sm:max-h-[350px] lg:max-h-[389px]'>
      <img src={first_image} alt='first image' loading="lazy" className='w-full h-full object-cover rounded-[10px]' />
    </div>
    <div className='flex flex-col justify-center sm:justify-start items-center sm:items-stretch text-center sm:text-start w-full aspect-square max-h-[300px] sm:max-h-[350px] lg:max-h-[389px] py-4 sm:py-6 space-y-4 sm:space-y-6 border-[3px] border-[#F9B33B]'>
      <div className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] mx-auto'>
        <img src={keys} alt='keys' loading="lazy" className='w-full h-full object-contain' />
      </div>
      <p className='text-base sm:text-lg md:text-xl lg:text-[20px] px-4'>{t('achievements.p1')}</p>
    </div>
  </li>

  {/* 2 */}
  <li className='w-full lg:w-[389px]'>
    <div className='w-full aspect-square max-h-[300px] sm:max-h-[350px] lg:max-h-[389px]'>
      <img src={second_image} alt='second image' loading="lazy" className='w-full h-full object-cover rounded-[10px]' />
    </div>
    <div className='flex flex-col justify-center sm:justify-start items-center sm:items-stretch text-center sm:text-start w-full aspect-square max-h-[300px] sm:max-h-[350px] lg:max-h-[389px] py-4 sm:py-6 space-y-4 sm:space-y-6 border-[3px] border-[#F9B33B]'>
      <div className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] mx-auto'>
        <img src={room} alt='room' loading="lazy" className='w-full h-full object-contain' />
      </div>
      <p className='text-base sm:text-lg md:text-xl lg:text-[20px] px-4'>{t('achievements.p2')}</p>
    </div>
  </li>

  {/* 3 */}
  <li className='w-full lg:w-[389px]'>
    <div className='w-full aspect-square max-h-[300px] sm:max-h-[350px] lg:max-h-[389px]'>
      <img src={third_image} alt='third image' loading="lazy" className='w-full h-full object-cover rounded-[10px]' />
    </div>
    <div className='flex flex-col justify-center sm:justify-start items-center sm:items-stretch text-center sm:text-start w-full aspect-square max-h-[300px] sm:max-h-[350px] lg:max-h-[389px] py-4 sm:py-6 space-y-4 sm:space-y-6 border-[3px] border-[#F9B33B]'>
      <div className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] mx-auto'>
        <img src={botique} alt='botique' loading="lazy" className='w-full h-full object-contain' />
      </div>
      <p className='text-base sm:text-lg md:text-xl lg:text-[20px] px-4'>{t('achievements.p3')}</p>
    </div>
  </li>

  {/* 4 */}
  <li className='w-full lg:w-[389px]'>
    <div className='w-full aspect-square max-h-[300px] sm:max-h-[350px] lg:max-h-[389px]'>
      <img src={fourth_image} alt='fourth image' loading="lazy" className='w-full h-full object-cover rounded-[10px]' />
    </div>
    <div className='flex flex-col justify-center sm:justify-start items-center sm:items-stretch text-center sm:text-start w-full aspect-square max-h-[300px] sm:max-h-[350px] lg:max-h-[389px] py-4 sm:py-6 space-y-4 sm:space-y-6 border-[3px] border-[#F9B33B]'>
      <div className='w-[80px] sm:w-[100px] h-[80px] sm:h-[100px] mx-auto'>
        <img src={gears} alt='gears' loading="lazy" className='w-full h-full object-contain' />
      </div>
      <p className='text-base sm:text-lg md:text-xl lg:text-[20px] px-4'>{t('achievements.p4')}</p>
    </div>
  </li>

</ul>

        </div>

        {/* grid */}
        <div className='relative w-full mx-auto px-4 sm:px-6 md:px-8'>
            <div className='absolute -z-10 top-0 left-0 w-full h-full overflow-hidden'>
                <img src={vector} alt='vector' loading="lazy" className='w-full h-full object-cover'/>
            </div>
            <header className='w-full max-w-[1641px] mx-auto flex flex-row justify-between items-center mb-6 sm:mb-8'>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='hidden lg:block w-[150px] sm:w-[200px] lg:w-[276px] h-[50px] sm:h-[60px] lg:h-[83px]'/>
                <div className='flex-1 text-center'>
                    <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[57px]'>{t('trust.h')}</h2>
                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='hidden lg:block w-[150px] sm:w-[200px] lg:w-[276px] h-[50px] sm:h-[60px] lg:h-[83px]'/>
            </header>
            
            <section className='w-full max-w-[1641px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 select-none'>
                <div className='relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[1/1] max-h-[500px] sm:max-h-[600px] lg:max-h-[806px]'>
                    <img src={image1} alt='image 1' loading="lazy" className='w-full h-full rounded-[10px] object-cover'/>
                    <div className='absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4'>
                        <p className='text-[#F9B33B] font-bold text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[280px] leading-tight'>{t("trust.main_p_1")}</p>
                        <p className='text-white text-xl sm:text-2xl md:text-3xl lg:text-[60px] mt-2 sm:mt-4'>{t('trust.p1')}</p>
                    </div>
                </div>
                
                <div className='relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[1/1] max-h-[500px] sm:max-h-[600px] lg:max-h-[806px]'>
                    <img src={image2} alt='image 2' loading="lazy" className='w-full h-full rounded-[10px] object-cover'/>
                    <div className='absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4'>
                        <p className='text-[#F9B33B] font-bold text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[280px] leading-tight'>{t("trust.main_p_2")}</p>
                        <p className='text-white text-xl sm:text-2xl md:text-3xl lg:text-[60px] mt-2 sm:mt-4'>{t('trust.p2')}</p>
                    </div>
                </div>
                
                <div className='relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[1/1] max-h-[500px] sm:max-h-[600px] lg:max-h-[806px]'>
                    <img src={image3} alt='image 3' loading="lazy" className='w-full h-full rounded-[10px] object-cover'/>
                    <div className='absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4'>
                        <p className='text-[#F9B33B] font-bold text-[16vw] sm:text-[12vw] md:text-[10vw] lg:text-[280px] leading-tight'>{t("trust.main_p_3")}</p>
                        <p className='text-white text-xl sm:text-2xl md:text-3xl lg:text-[60px] mt-2 sm:mt-4'>{t('trust.p3')}</p>
                    </div>
                </div>
                
                <div className='relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[1/1] max-h-[500px] sm:max-h-[600px] lg:max-h-[806px]'>
                    <img src={image4} alt='image 4' loading="lazy" className='w-full h-full rounded-[10px] object-cover'/>
                    <div className='absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4'>
                        <p className='text-[#F9B33B] font-bold text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[200px] leading-tight'>{t("trust.main_p_4")}</p>
                        <p className='text-white text-xl sm:text-2xl md:text-3xl lg:text-[60px] mt-2 sm:mt-4'>{t('trust.p4')}</p>
                    </div>
                </div>
            </section>
        </div>
        
        {/* calculator */}
        <div className='my-10 sm:my-20'>
            <Calculator/>
        </div>

        {/* videos */}
        <div className='w-full max-w-[1640px] mx-auto flex flex-col justify-between my-10 sm:my-20 px-4 sm:px-6 md:px-8'>
            <h2 className='text-4xl sm:text-5xl lg:text-[50px] font-bold text-center mb-6 sm:mb-8'>{t('section.h')}</h2>
            <div className='relative w-full flex flex-col lg:flex-row gap-6 lg:gap-8'>
                <div className='absolute top-0 -z-10 h-full w-full'>
                    <img src={vector_about_us_1} alt='vector 1' loading="lazy" className='w-full h-full object-cover'/>
                </div>
                <div className='w-full lg:w-[527px] h-[300px] sm:h-[500px] lg:h-[696px] mx-auto'>
                    <iframe className='w-full h-full rounded-[10px]' src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='w-full lg:w-[527px] h-[300px] sm:h-[500px] lg:h-[696px] mx-auto'>
                    <iframe className='w-full h-full rounded-[10px]' src="https://www.youtube.com/embed/1ajIodgloag?si=mE1cbMB4_w6vIztU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='w-full lg:w-[527px] h-[300px] sm:h-[500px] lg:h-[696px] mx-auto'>
                    <iframe className='w-full h-full rounded-[10px]' src="https://www.youtube.com/embed/l0PAzZ2V3Cs?si=9gF9jbR6ECQOcfY-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className='absolute bottom-0 right-0 -z-10 h-full w-full'>
                    <img src={vector_about_us_2} alt='vector 2' loading="lazy" className='w-full h-full object-cover'/>
                </div>
            </div>
            <div className='w-full max-w-[1640px] h-[50px] sm:h-[67px] flex flex-row items-center justify-center mx-auto gap-4 mt-6 sm:mt-8'>
                <div className='h-[2px] sm:h-[3px] w-[30%] sm:w-[625.5px] bg-[#F9B33B]'></div>
                <LanguageLink to="contacts" className="w-[40%] sm:w-[389px] h-[50px] sm:h-[67px] bg-[#F9B33B] text-xl sm:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300">{t('section.button')}</LanguageLink>
                <div className='h-[2px] sm:h-[3px] w-[30%] sm:w-[625.5px] bg-[#F9B33B]'></div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs