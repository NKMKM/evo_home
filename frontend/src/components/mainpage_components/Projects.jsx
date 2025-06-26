import React from 'react'
import { Link } from 'react-router-dom'
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
  return (
    <div className=' sm:flex sm:flex-col sm:justify-between md:block sm:mb-30 md:mb-20 sm:w-full sm:h-[3200px] md:h-[1250px] md:w-[1641px] mx-auto'>
        {/* header section */}
        <div className=' h-[170px] w-full mx-auto flex flex-row justify-between items-center  '>
            <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block '/>
            <div className='sm:mx-auto md:mx-0'>
                <h1 className='font-bold text-center text-[70px] sm:px-4 md:px-0'>Проекты EVO HOME</h1>

            </div>
            <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block '/>
        </div>

        <p className='sm:w-full md:w-[1410px] h-[76px] mx-auto text-[32px] text-center font-[100] italic '>"Ваш дом – наша работа"</p>
        
        {/* grid section with projects */}
        <div className=' sm:flex sm:flex-col sm:justify-between sm:h-[2800px] md:h-[900px] md:grid md:grid-cols-3 md:grid-rows-2 md:gap-y-4 mb-10'>

            {/* first element */}
            <div className='relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[528px] h-[407px] group '>
                <div className='w-full h-full  group-hover:brightness-50 transition duration-300'><img src={tatto_studio} className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h1 className='text-[32px]'>Бизнес-центр 116 м²</h1>
                    <p className='text-[18px]'>Дизайн, отделка, освещение, удобная планировка. Выполнено за 1,5 месяца.</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>

            </div>
            {/* second element */}
            <div className='relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[528px] h-[407px] group'>
                <div className='w-full h-full group-hover:brightness-50 transition duration-300'><img src={bar} className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h1 className='text-[32px]'>Дизайнерский ремонт 123 м²</h1>
                    <p className='text-[18px]'>Современный интерьер, уникальные решения, премиальные материалы. Выполнено за 2,5 месяца.</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>

            </div>
            {/* third element */}
            <div className='relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[528px] h-[407px] group'>
                <div className='w-full h-full  group-hover:brightness-50 transition duration-300'><img src={basement} className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h1 className='text-[32px]'>Эксклюзивный ремонт 93 м²</h1>
                    <p className='text-[18px]'>Авторский подход, индивидуальный стиль, тонкая работа с деталями. Выполнено за 2,5 месяца.</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>

            </div>
            {/* fouirth element */}
            <div className='relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[528px] h-[407px] group'>
                <div className='w-full h-full group-hover:brightness-50 transition duration-300'><img src={bath} className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h1 className='text-[32px]'>Ремонт квартиры-студии 34 м²</h1>
                    <p className='text-[18px]'>Функциональная планировка, зонирование, тёплые акценты в интерьере. Сдано за 1 месяц.</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>

            </div>
            {/* fifth element */}
            <div className='relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[528px] h-[407px] group'>
                <div className='w-full h-full group-hover:brightness-50 transition duration-300'><img src={kithcen} className='w-full h-full' /></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h1 className='text-[32px]'>Двухкомнатая квартира 78 м²</h1>
                    <p className='text-[18px]'>Минимализм, комфорт, грамотное распределение пространства. Реализовано за 1,5 месяца.</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>

            </div>
            {/* sixth element */}
            <div className='relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[528px] h-[407px] group'>
                <div className='w-full h-full  group-hover:brightness-50 transition duration-300'><img src={hall} className='w-full h-full'/></div>

                <div className='absolute bottom-[20px] text-white bg-linear-to-r from-[#7393c7] to-95% to-[#7393c7]/0 p-4'>
                    <h1 className='text-[32px]'>Двухэтажные квартиры145 м²</h1>
                    <p className='text-[18px]'>Свободная планировка, лестничная зона, дизайнерское освещение. Выполнено за 3 месяца.</p>
                </div>

                <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <Link to="/our_works" className="bg-[#F9B33B] text-black font-bold text-[30px] flex justify-center items-center" style={{ width: '251px', height: '67px' }}>
                        ПОСМОТРЕТЬ
                    </Link>
                </div>

            </div>

        </div>

        <div className='sm:w-full md:w-[1641px] flex flex-row items-center mx-auto'>

            <div className='h-[1px] w-[625.5px] bg-[#F9B33B] sm:hidden md:block'></div>

            <button className='sm:mx-auto md:mx-0 w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold'>ПОДРОБНЕЕ</button>

            <div className='h-[1px] w-[625.5px] bg-[#F9B33B] sm:hidden md:block'></div>
        </div>

        
    </div>
  )
}

export default Projects