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

    <div className='mb-20 w-[1641px] mx-auto'>
        {/* header section */}
        <div className='h-[170px] w-full mx-auto flex flex-row justify-between items-center mb-5 '>
            <img src={left_decoration} className='w-[276px] h-[83px] '/>
            <div className=''>
                <h1 className='font-bold text-center text-[70px]'>Проекты EVO HOME</h1>

            </div>
            <img src={right_decoration} className='w-[276px] h-[83px]'/>
        </div>

        <p className='w-[1410px] h-[76px] mx-auto text-[32px] text-center font-[100] italic mb-5'>"Ваш дом – наша работа"</p>
        


        <div className="grid grid-cols-3 grid-rows-2 gap-y-4 mb-10">

            {/* 1 */}
            <div className="relative w-[528px] h-[407px] group overflow-hidden">
                <img src={first_image} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute bottom-[20px] bg-gradient-to-r from-blue-300/90 via-90% via-white/0 left-0 text-white h-[65px] w-full flex items-center px-4 z-10">
                    <h1 className="text-[32px]">Дизайнерский ремонт</h1>
                </div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>
            </div>

            {/* 2 */}
            <div className="relative w-[528px] h-[407px] group overflow-hidden">
                <img src={second_image} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute bottom-[20px] bg-gradient-to-r from-blue-300/90 via-90% via-white/0 left-0 text-white h-[65px] w-full flex items-center px-4 z-10">
                    <h1 className="text-[32px]">Эксклюзивный ремонт</h1>
                </div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                            ПОСМОТРЕТЬ
                    </Link>
                </div>
            </div>

            {/* 3 */}
            <div className="relative w-[528px] h-[407px] group overflow-hidden">
                <img src={third_image} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute bottom-[20px] bg-gradient-to-r from-blue-300/90 via-90% via-white/0 left-0 text-white h-[65px] w-full flex items-center px-4 z-10">
                    <h1 className="text-[32px]">Ремонт квартиры студии</h1>
                </div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>
            </div>

            {/* 4 */}
            <div className="relative w-[528px] h-[407px] group overflow-hidden">
                <img src={fourth_image} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute bottom-[20px] bg-gradient-to-r from-blue-300/90 via-90% via-white/0 left-0 text-white h-[65px] w-full flex items-center px-4 z-10">
                    <h1 className="text-[32px]">Ремонт двухкомнатных квартир</h1>
                </div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>
            </div>

            {/* 5 */}
            <div className="relative w-[528px] h-[407px] group overflow-hidden">
                <img src={fifth_image} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute bottom-[20px] bg-gradient-to-r from-blue-300/90 via-90% via-white/0 left-0 text-white h-[65px] w-full flex items-center px-4 z-10">
                    <h1 className="text-[32px]">Ремонт трехкомнатных квартир</h1>
                </div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>
            </div>

            {/* 6 */}
            <div className="relative w-[528px] h-[407px] group overflow-hidden">
                <img src={sixth_image} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-50" />
                <div className="absolute bottom-[20px] bg-gradient-to-r from-blue-300/90 via-90% via-white/0 left-0 text-white h-[65px] w-full flex items-center px-4 z-10">
                    <h1 className="text-[32px]">Ремонт двуэтажных квартир</h1>
                </div>
                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>
            </div>

        </div>


        
    </div>
  )
}

export default SystemProjects