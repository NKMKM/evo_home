import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/stairs/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

// process images imports
import first_step from '../../assets/images/room_renovation/stairs/process/first_step.png'
import second_step from '../../assets/images/room_renovation/stairs/process/second_step.png'
import third_step from '../../assets/images/room_renovation/stairs/process/third_step.png'
import fourth_step from '../../assets/images/room_renovation/stairs/process/fourth_step.png'


const Stairs = () => {
  const {t} = useTranslation('room_renovation/Stairs')
  const selectedLang = localStorage.getItem('language') || 'en';
  return (
    <div>
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content="Renovation of stairs by EVO Home" />
        </Helmet>
        {/* first step */}
        <header className={`sm:w-full  lg:w-[1641px] sm:h-[1900px] ${selectedLang === 'it' ? 'lg:h-[1628px]' : 'lg:h-[1728px]'}  mx-auto my-20 flex flex-col justify-between`}>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
                <div className='sm:mx-auto'>
                    <h1 className='font-bold text-center text-[57px]'>{t('h')}</h1>
                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>
            {/* main content */}
            <div className=' space-y-10 '>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h2 className={`${selectedLang === 'it' ? 'sm:text-[28px]  sm:mt-4' : 'sm:text-[32px] sm:mt-4 '} lg:text-[50px] font-bold  lg:mt-0`}>{t('header.h')}</h2>
                </div>

                {/* text */}
                <div className={`text-[30px] sm:w-full lg:w-[1641px]  sm:h-[1200px] ${selectedLang === 'it' ? 'lg:h-[500px] ' : 'lg:h-[550px] '} sm:text-center lg:text-start flex flex-col justify-around `}>
                    <p>{t('header.p1')}</p>
                    <p>{t('header.p2')}</p>

                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='stairs' loading="lazy" className='w-full h-full object-cover rounded-[10px]'/></div>
            </div>


            <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">{t('header.button')}</Link>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </header>

        {/* process */}

        <main className='w-full sm:h-[5900px] lg:h-[3323px]   flex flex-col justify-between '>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-5 lg:mr-10'>2.</div>
                <h2 className={`${selectedLang === 'it' ? 'sm:text-[20px]  sm:mt-3' : 'sm:text-[28px] sm:mt-4 '} lg:text-[50px] font-bold  lg:mt-0`}>{t('process.h')}</h2>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:h-[450px] lg:h-[101px] sm:text-center lg:text-start text-[32px] mx-auto '>{t('process.p')}</p>

               {/* list of steps */}
                <div className='relative mx-auto '>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full ' /></div>
    
                    <ul className='lg:h-[1794px] sm:w-full lg:w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                            {/* process photo  */}
                            <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover' /></div>
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                                <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>{t('process.ul.1.h')}</h2>

                                <p className='text-[26px] pb-5'>{t('process.ul.1.p')}</p>
                            </div>
                        </li>
    
                        {/* 2 */}
                        <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                            {/* process photo */}
                            <div className=' sm:w-full lg:w-[667px] sm:h-[378px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover'/></div>

                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 sm:px-5 lg:px-0  '>
                                <div>
                                    <h2 className='font-bold text-[46px]'>{t('process.ul.2.h')}</h2>
                                </div>

                                <p className='sm:text-[24px] lg:text-[27px] p-light'>{t('process.ul.2.p')}</p>

                                
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                            {/* process photo  */}
                            <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' /></div>
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                                <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>{t('process.ul.3.h')}</h2>

                                <p className='text-[26px] pb-5'>{t('process.ul.3.p')}</p>
                            </div>
                        </li>
    
                        {/* 4 */}
                        <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                            {/* process photo */}
                            <div className=' sm:w-full lg:w-[667px] sm:h-[378px] h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover'/></div>

                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 sm:px-5 lg:px-0  '>
                                <div>
                                    <h2 className='font-bold text-[46px]'>{t('process.ul.4.h')}</h2>
                                </div>

                                <p className='sm:text-[24px] lg:text-[27px] p-light'>{t('process.ul.4.p')}</p>

                                
                            </div>

                        </li>
    
                    </ul>
    
    
                    <div className='w-[1100px] h-[338px]  absolute top-[1290px] left-[370px] sm:hidden lg:block'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <div className='mb-10'>
                <Video text={t('process.video_text')}/>
            </div>



        </main>

        <LayoutCollection/>
        
    </div>
  )
}

export default Stairs