import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// images imports
import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import tatto_studio from '../../assets/images/projects_images/tatto_studio.jpg'
import bar from '../../assets/images/projects_images/bar.jpg'
import bath from '../../assets/images/projects_images/bath.jpg'
import hall from '../../assets/images/projects_images/hall.jpg'
import kithcen from '../../assets/images/projects_images/kitchen.jpg'
import basement from '../../assets/images/services_images/basement.jpg'


const Projects = () => {
  const {t} = useTranslation('home/Projects')
  return (
    <main className=' sm:flex sm:flex-col sm:justify-between lg:block sm:mb-30 lg:mb-20 sm:w-full sm:h-[3200px] lg:h-[1250px] lg:w-[1641px] mx-auto'>
        {/* header section */}
        <header className=' h-[170px] w-full mx-auto flex flex-row justify-between items-center  '>
            <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block '/>
            <div className='sm:mx-auto lg:mx-0'>
                <h1 className='font-bold text-center text-[70px] sm:px-4 lg:px-0'>{t('h')}</h1>

            </div>
            <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block '/>
        </header>

        <p className='sm:w-full lg:w-[1410px] h-[76px] mx-auto text-[32px] text-center font-[100] italic '>{t('p')}</p>
        
        {/* grid section with projects */}
        <section className=' sm:flex sm:flex-col sm:justify-between sm:h-[2800px] lg:h-[900px] lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-y-4 mb-10'>

            {/* first element */}
            <div className='relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[528px] h-[407px] group '>
                <div className='w-full h-full  group-hover:brightness-50 transition duration-300'><img src={tatto_studio} alt='tatto studio' loading="lazy" className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h2 className='text-[32px]'>{t('first_element.h')}</h2>
                    <p className='text-[18px]'>{t('first_element.p')}</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        {t("button")}
                    </Link>
                </div>

            </div>
            {/* second element */}
            <div className='relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[528px] h-[407px] group'>
                <div className='w-full h-full group-hover:brightness-50 transition duration-300'><img src={bar} alt='bar' loading="lazy" className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h2 className='text-[32px]'>{t('second_element.h')}</h2>
                    <p className='text-[18px]'>{t('second_element.p')}</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        {t("button")}
                    </Link>
                </div>

            </div>
            {/* third element */}
            <div className='relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[528px] h-[407px] group'>
                <div className='w-full h-full  group-hover:brightness-50 transition duration-300'><img src={basement} alt='basement' loading="lazy" className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h2 className='text-[32px]'>{t('third_element.h')}</h2>
                    <p className='text-[18px]'>{t('third_element.p')}</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        {t("button")}
                    </Link>
                </div>

            </div>
            {/* fouirth element */}
            <div className='relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[528px] h-[407px] group'>
                <div className='w-full h-full group-hover:brightness-50 transition duration-300'><img src={bath} alt='bath' loading="lazy" className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h2 className='text-[32px]'>{t('fourth_element.h')}</h2>
                    <p className='text-[18px]'>{t('fourth_element.p')}</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        {t("button")}
                    </Link>
                </div>

            </div>
            {/* fifth element */}
            <div className='relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[528px] h-[407px] group'>
                <div className='w-full h-full group-hover:brightness-50 transition duration-300'><img src={kithcen} alt='kitchen' loading="lazy" className='w-full h-full' /></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h2 className='text-[32px]'>{t('fifth_element.h')}</h2>
                    <p className='text-[18px]'>{t('fifth_element.p')}</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        {t("button")}
                    </Link>
                </div>

            </div>
            {/* sixth element */}
            <div className='relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[528px] h-[407px] group'>
                <div className='w-full h-full  group-hover:brightness-50 transition duration-300'><img src={hall} alt='hall' loading="lazy" className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h2 className='text-[32px]'>{t('sixth_element.h')}</h2>
                    <p className='text-[18px]'>{t('sixth_element.p')}</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        {t("button")}
                    </Link>
                </div>

            </div>

        </section>

        <div className='sm:w-full lg:w-[1641px] flex flex-row items-center mx-auto'>

            <div className='h-[1px] w-[625.5px] bg-[#F9B33B] sm:hidden lg:block'></div>

            <Link to={'/our_works'} className='sm:mx-auto lg:mx-0 flex items-center justify-center hover:scale-110 transition duration-300 w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold'>{t("button")}</Link>

            <div className='h-[1px] w-[625.5px] bg-[#F9B33B] sm:hidden lg:block'></div>
        </div>
        
    </main>
  )
}

export default Projects