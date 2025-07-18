import React from 'react'
import Projects from '../../components/room_renovation_components/Projects'
import Calculator from '../../components/mainpage_components/Calculator'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/turnkey_renovation/image.jpg'
import vector_about_us_1 from'../../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from'../../assets/videos/abouts_us/vector2.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import vector from '../../assets/images/room_renovation/room_renovation/vector.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/turnkey_renovation/process/first_step.jpg'
import second_step from '../../assets/images/turnkey_renovation/turnkey_renovation/process/second_step.jpg'
import third_step from '../../assets/images/turnkey_renovation/turnkey_renovation/process/third_step.jpg'


const TurnkeyRenovation = () => {
  const {t} = useTranslation('turnkey_renovation/TurnkeyRenovation')
  const selectedLang = localStorage.getItem('language') || 'en';
  return (
    <div>
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content="Turnkey renovation by EVO Home" />
        </Helmet>
        {/* first step */}
        <header className={`lg:w-[1641px] sm:w-full ${(selectedLang === 'it' || selectedLang === 'en') ? 'lg:h-[1420px]' : 'lg:h-[1520px]'}  mx-auto my-20 flex flex-col justify-between`}>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} alt='left decoration 'loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />

                <h1 className={`font-bold mx-auto text-center ${(selectedLang === 'it' || selectedLang === 'en') ? 'sm:text-[40px]' : 'sm:text-[50px]'} lg:text-[50px]`}>{t('h')}</h1>

                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h2 className={` lg:text-[50px] ${(selectedLang === 'it' || selectedLang === 'en') ? 'sm:text-[25px] sm:mt-5' : 'sm:text-[32px] sm:mt-3.5'} font-bold  lg:mt-0`}>{t('header.h')}</h2>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>{t('header.p1')}</p>
                    <p>{t('header.p2')}</p>
                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='turnkey renovation' loading="lazy" className='w-full h-full object-cover rounded-[10px]' /></div>

                <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">{t('header.button')}</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>
        </header>

        {/* reasons why */}
        <div className='relative  w-full lg:h-[1098px] sm:my-10 lg:my-20'>     
            {/* header */}
            <div className='lg:w-[1640px] mx-auto h-[74px] bg-[#F9B33B] flex flex-row sm:mb-20'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-7 lg:mr-10'>2.</div>
                <h1 className={` ${selectedLang === 'it' ? ' sm:text-[23px]' : ''}  ${selectedLang === 'en' ? ' sm:text-[26px] sm:mt-5 lg:mt-0' : ''} ${selectedLang === 'ru' ? ' sm:text-[26px] ' : ''} lg:text-[50px] font-bold `}>{t("reasons.h")}</h1>
            </div>

            {/* vector */}

            <div className='absolute w-[1261px] h-[1418px] scale-60 -z-10 bottom-[38px] right-[1300px]'><img src={vector} alt='vector' loading="lazy"/></div>

            {/* reasons */}
            <ul className='sm:w-full lg:w-[1641px] lg:h-[900px] flex flex-col justify-between  mx-auto '>
            
                <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                    {/* Левая часть — фиксированная ширина */}
                    <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                    {t('reasons.ul.1.h')}
                    </div>

                    {/* Правая часть — обязательно flex-1 */}
                    <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                    {t('reasons.ul.1.p')}
                    </div>

                </li>


                <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                    {/* Левая часть — фиксированная ширина */}
                    <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                    {t('reasons.ul.2.h')}
                    </div>

                    {/* Правая часть — обязательно flex-1 */}
                    <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                    {t('reasons.ul.2.p')}
                    </div>

                </li>

                <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                    {/* Левая часть — фиксированная ширина */}
                    <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                    {t('reasons.ul.3.h')}
                    </div>

                    {/* Правая часть — обязательно flex-1 */}
                    <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                    {t('reasons.ul.3.p')}
                    </div>

                </li>

                <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                    {/* Левая часть — фиксированная ширина */}
                    <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                    {t('reasons.ul.4.h')}
                    </div>

                    {/* Правая часть — обязательно flex-1 */}
                    <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                    {t('reasons.ul.4.p')}
                    </div>

                </li>

                <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                    {/* Левая часть — фиксированная ширина */}
                    <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                    {t('reasons.ul.5.h')}
                    </div>

                    {/* Правая часть — обязательно flex-1 */}
                    <div className="flex-1 text-[32px] px-3 py-4 leading-snug">
                    {t('reasons.ul.5.p')}
                    </div>

                </li>

                <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                    {/* Левая часть — фиксированная ширина */}
                    <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                    {t('reasons.ul.6.h')}
                    </div>

                    {/* Правая часть — обязательно flex-1 */}
                    <div className="flex-1 text-[32px] px-3 py-4 leading-snug">
                    {t('reasons.ul.6.p')}
                    </div>

                </li>

                <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                    {/* Левая часть — фиксированная ширина */}
                    <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                    {t('reasons.ul.7.h')}
                    </div>

                    {/* Правая часть — обязательно flex-1 */}
                    <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                    {t('reasons.ul.7.p')}
                    </div>

                </li>

            </ul>
            <hr className='mt-20 w-[1641px] mx-auto sm:hidden lg:block'/>

        </div>

        
        {/* calculator */}
        <div className='mb-20'>
            <Calculator/>
        </div>


        {/* process */}

        <main className='w-full sm:h-[5400px]  lg:h-[2802px]  flex flex-col justify-between '>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row lg:mb-20'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>3.</div>
                <h2 className={`${(selectedLang === 'it' || selectedLang === 'en') ? 'sm:text-[23px]' : 'sm:text-[30px]'}  lg:text-[50px] font-bold sm:mt-4 lg:mt-0`}>{t('process.h')}</h2>
            </div>

            {/* list of steps */}
            <div className='sm:h-[3400px]   lg:h-[1340px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full' /></div>

                <ul className='sm:h-[3400px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>{t('process.ul.1.h')}</h2>

                            <ul className='list-disc text-[28px] pl-12'>
                                  <li>{t('process.ul.1.li1')}</li>
                                  <li>{t('process.ul.1.li2')}</li>
                                  <li>{t('process.ul.1.li3')}</li>
                                  <li>{t('process.ul.1.li4')}</li>
                                  <li>{t('process.ul.1.li5')}</li>
                            </ul>
                        </div>

                        <div className='absolute sm:top-[200px] lg:top-[150px] left-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>{t('process.step1')}<div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col  py-5 px-6 lg:px-0 '>
                            <h2 className='font-bold sm:text-[40px] lg:text-[44px]'>{t('process.ul.2.h')}</h2>

                            <ul className='list-disc text-[19px] pl-12'>
                                  <li>{t('process.ul.2.li1')}</li>
                                  <li>{t('process.ul.2.li2')}</li>
                                  <li>{t('process.ul.2.li3')}</li>
                                  <li>{t('process.ul.2.li4')}</li>
                                  <li>{t('process.ul.2.li5')}</li>
                                  <li>{t('process.ul.2.li6')}</li>
                                  <li>{t('process.ul.2.li6')}</li>
                                  <li>{t('process.ul.2.li7')}</li>
                                  <li>{t('process.ul.2.li8')}</li>
                                  <li>{t('process.ul.2.li9')}</li>
                                  <li>{t('process.ul.2.li10')}</li>
                            </ul>
                        </div>

                        <div className={`absolute ${(selectedLang === 'it' || selectedLang === 'en') ? 'sm:top-[1440px]' : 'sm:top-[1390px]'}  sm:right-[175px] lg:top-[640px] lg:right-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white`}>{t('process.step2')}<div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>{t('process.ul.3.h')}</h2>

                            <ul className='list-disc text-[28px] pl-12'>
                                  <li>{t('process.ul.3.li1')}</li>
                                  <li>{t('process.ul.3.li2')}</li>
                                  <li>{t('process.ul.3.li3')}</li>
                                  <li>{t('process.ul.3.li4')}</li>
                                  <li>{t('process.ul.3.li5')}</li>
                                  <li>{t('process.ul.3.li6')}</li>
                            </ul>
                        </div>
                        
                        <div className={`absolute ${(selectedLang === 'it' || selectedLang === 'en') ? 'sm:top-[2560px]' : 'sm:top-[2510px]'}  lg:top-[1100px] left-[170px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white`}>{t('process.step3')}<div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                        </div>
                    </li>

                </ul>

            </div>


            {/* video */}
            <div className=' w-full sm:h-[1600px] lg:h-[1050px] flex flex-col justify-between  my-20 mx-auto'>
                <h2 className='text-[50px] font-bold text-center'>{t('process.video_text')}</h2>
    
                {/* videos(instead of them just a div with any bg color) */}
                <div className='w-full  h-[696px] relative flex flex-row'>
                    <div className='absolute  h-[853px] bottom-0 -z-10'><img src={vector_about_us_1} alt='vector 1' loading="lazy" className='w-full h-full'/></div>
                    <div className='sm:w-[80%] lg:w-[1227px]  lg:h-[696px] text-center mx-auto shadow-2xl '>
                        <iframe className='w-full h-full rounded-[10px]' src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
    
                    <div className='absolute h-[853px] bottom-0 right-0 -z-10'><img src={vector_about_us_2} alt='vector 2' loading="lazy" className='w-full h-full'/></div>
                </div>

                <div className='lg:w-[1641px] lg:h-[336px] sm:text-center lg:text-start flex flex-col space-y-5 my-10 mx-auto text-[30px]'>
                    <p>{t('process.video_p')}</p>
                </div>
                
                <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">{t('header.button')}</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>

    
            </div>


        </main>



        {/* projects */}
        <Projects/>

    </div>
  )
}

export default TurnkeyRenovation