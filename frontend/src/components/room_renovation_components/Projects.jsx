import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import tatto_studio from '../../assets/images/projects_images/tatto_studio.jpg'
import bar from '../../assets/images/projects_images/bar.jpg'
import bath from '../../assets/images/projects_images/bath.jpg'
import hall from '../../assets/images/projects_images/hall.jpg'
import kitchen from '../../assets/images/projects_images/kitchen.jpg'
import basement from '../../assets/images/services_images/basement.jpg'

const Projects = () => {
  const {t} = useTranslation('commercial_premises/CommercialPremisesProjects')
  const selectedLang = localStorage.getItem('language') || 'en';	
  return (
    <div className='sm:w-full lg:w-[1650px]  h-auto mx-auto px-4 mb-10 sm:mb-20 lg:mb-20'>
        {/* header section */}
        <header className={`h-auto w-full mx-auto flex flex-col lg:flex-row justify-between items-center ${selectedLang === 'it' || selectedLang === 'en' ? 'sm:my-10 lg:my-0' : ''}`}>
            <img src={left_decoration} alt='left decoration' loading="lazy" className='hidden lg:block w-[200px] lg:w-[276px] h-[60px] lg:h-[83px] mb-4 lg:mb-0'/>
            <div className='w-full lg:w-auto mx-auto lg:mx-0'>
                <h2 className='font-bold text-center text-[28px] sm:text-[40px] lg:text-[70px] px-4'>{t('h')}</h2>
            </div>
            <img src={right_decoration} alt='right decoration' loading="lazy" className='hidden lg:block w-[200px] lg:w-[276px] h-[60px] lg:h-[83px] mt-4 lg:mt-0'/>
        </header>

        <p className='w-full max-w-[1410px] h-auto mx-auto text-[18px] sm:text-[24px] lg:text-[32px] text-center font-[100] italic mt-4'>{t('p')}</p>
        
        {/* grid section with projects */}
        <div className='w-full h-auto flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 mt-6 mb-10 gap-6'>
            {[
                { image: bar, title: t('p1'), alt: 'bar' },
                { image: basement, title: t('p2'), alt: 'basement' },
                { image: bath, title: t('p3'), alt: 'bath' },
                { image: kitchen, title: t('p4'), alt: 'kitchen' },
                { image: tatto_studio, title: t('p5'), alt: 'tattoo studio' },
                { image: hall, title: t('p6'), alt: 'hall' }
            ].map((project, index) => (
                <div key={index} className='relative w-full max-w-[528px] h-[300px] sm:h-[350px] lg:h-[407px] group mx-auto'>
                    <div className='w-full h-full group-hover:brightness-50 transition duration-300'>
                        <img src={project.image} alt={project.alt} loading="lazy" className='w-full h-full rounded-[10px] object-cover'/>
                    </div>
                    <div className='absolute bottom-[15px] text-white bg-gradient-to-r from-[#7393c7] to-[#7393c7]/0 p-3 sm:p-4'>
                        <h2 className='text-[18px] sm:text-[24px] lg:text-[32px]'>{project.title}</h2>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <Link 
                            to="/our_works" 
                            className="bg-[#F9B33B] text-black font-bold text-[18px] sm:text-[24px] lg:text-[30px] flex justify-center items-center w-[200px] sm:w-[220px] lg:w-[251px] h-[50px] lg:h-[67px]"
                        >
                            {t('button')}
                        </Link>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-full max-w-[1641px] flex flex-col sm:flex-row items-center mx-auto gap-4'>
            <div className='h-[1px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B] hidden sm:block'></div>
            <Link 
                to="/our_works" 
                className='w-full max-w-[389px] h-[50px] lg:h-[67px] flex justify-center items-center bg-[#F9B33B] text-[20px] sm:text-[24px] lg:text-[30px] font-semibold hover:scale-105 transition duration-300 mx-auto'
            >
                {t('button')}
            </Link>
            <div className='h-[1px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B] hidden sm:block'></div>
        </div>
    </div>
  )
}

export default Projects