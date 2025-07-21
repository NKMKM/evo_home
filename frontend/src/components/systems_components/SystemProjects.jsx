import React from 'react'
import { Link } from 'react-router-dom'

import first_image from '../../assets/images/systems/electrical_systems/grid_images/first_image.jpg'
import second_image from '../../assets/images/systems/electrical_systems/grid_images/second_image.jpg'
import third_image from '../../assets/images/systems/electrical_systems/grid_images/third_image.jpg'
import fourth_image from '../../assets/images/systems/electrical_systems/grid_images/fourth_image.jpg'
import fifth_image from '../../assets/images/systems/electrical_systems/grid_images/fifth_image.jpg'
import sixth_image from '../../assets/images/systems/electrical_systems/grid_images/sixth_image.jpg'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'

const SystemProjects = () => {
  return (
    <div className='w-full h-auto mx-auto px-4 mb-10 sm:mb-20 lg:mb-20'>
        {/* header section */}
        <header className='h-auto w-full mx-auto flex flex-col lg:flex-row justify-between items-center'>
            <img src={left_decoration} alt='left decoration' loading="lazy" className='hidden lg:block w-[200px] lg:w-[276px] h-[60px] lg:h-[83px] mb-4 lg:mb-0'/>
            <div className='w-full lg:w-auto mx-auto lg:mx-0'>
                <h1 className='font-bold text-center text-[28px] sm:text-[40px] lg:text-[70px] px-4'>Проекты EVO HOME</h1>
            </div>
            <img src={right_decoration} alt='right decoration' loading="lazy" className='hidden lg:block w-[200px] lg:w-[276px] h-[60px] lg:h-[83px] mt-4 lg:mt-0'/>
        </header>

        <p className='w-full max-w-[1410px] h-auto mx-auto text-[18px] sm:text-[24px] lg:text-[32px] text-center font-[100] italic mt-4'>"Ваш дом – наша работа"</p>
        
        {/* grid section with projects */}
        <div className='w-full h-auto flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:gap-4 mt-6 mb-10 gap-6'>
            {[
                { image: first_image, title: 'Дизайнерский ремонт' },
                { image: second_image, title: 'Эксклюзивный ремонт' },
                { image: third_image, title: 'Ремонт квартиры - студии' },
                { image: fourth_image, title: 'Ремонт двухкомнатных квартир' },
                { image: fifth_image, title: 'Ремонт трехкомнатных квартир' },
                { image: sixth_image, title: 'Ремонт двухэтажных квартир' }
            ].map((project, index) => (
                <div key={index} className='relative w-full max-w-[528px] h-[300px] sm:h-[350px] lg:h-[407px] group mx-auto'>
                    <div className='w-full h-full group-hover:brightness-50 transition duration-300'>
                        <img src={project.image} alt={project.title.toLowerCase()} loading="lazy" className='w-full h-full rounded-[10px] object-cover'/>
                    </div>
                    <div className='absolute bottom-[15px] text-white bg-gradient-to-r from-[#7393c7] to-[#7393c7]/0 p-3 sm:p-4'>
                        <h2 className='text-[18px] sm:text-[24px] lg:text-[32px]'>{project.title}</h2>
                    </div>
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <Link 
                            to="/our_works" 
                            className="bg-[#F9B33B] text-black font-bold text-[18px] sm:text-[24px] lg:text-[30px] flex justify-center items-center w-[200px] sm:w-[220px] lg:w-[251px] h-[50px] lg:h-[67px]"
                        >
                            ПОСМОТРЕТЬ
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
                ПОДРОБНЕЕ
            </Link>
            <div className='h-[1px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B] hidden sm:block'></div>
        </div>
    </div>
  )
}

export default SystemProjects