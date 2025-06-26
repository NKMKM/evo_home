import React from 'react'
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
  return (
    <>
        <div className=' sm:h-[4500px] md:h-[1385px]  sm:flex sm:flex-col sm:justify-between md:block my-20 sm:w-full md:w-[1641px] mx-auto'>
            {/* header section */}
            
            <div className=' md:h-[170px] w-full mx-auto flex flex-row justify-between items-center md:mb-20 '>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block'/>
                <div className='sm:w-full sm:px-4 md:w-auto md:px-0'>
                    <h1 className='font-bold text-center sm:text-[50px] md:text-[60px]'>Ваш дом в надежных руках</h1>
                    <h1 className='font-bold text-center sm:text-[70px] md:text-[70px]'>Наши услуги</h1>
                </div>
                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block'/>
            </div>

            <p className='sm:w-full md:w-[1410px] sm:h-[150px] md:h-[76px] mx-auto text-[32px] text-center font-[100] italic mb-20'>"EVO HOME  выполнит ремонт квартир любой сложности – от легкого косметического обновления до капитального ремонта с перепланировкой."</p>
            
            {/* list of services */}
            <div className=' sm:w-full md:w-[1641px] '>
                <ul className='sm:h-[3900px]  sm:w-full md:w-[1641px] mx-auto flex sm:flex-col md:flex-row justify-between '>
                    {/* first element */}
                    <li className='sm:w-[90%] sm:mx-auto md:mx-0 md:w-[389px] h-[933px]  flex flex-col justify-between py-2'>
                        <h1 className='text-center font-semibold text-[32px]'>РЕМОНТ КВАРТИР</h1>

                        <div className='w h-[778px]  flex flex-col shadow-xl'>
                            <div className=' h-1/2 bg-red-400 '><img src={room1} className='w-full h-full' /></div>
                            <div className='h-1/2  text-center items-center pt-5 space-y-5'>
                                <img src={keys} className='sm:w-[120px] sm:h-[120px] md:w-[79px] md:h-[79px] mx-auto'/>
                                <p className='sm:text-[30px] md:text-[22px]'>Выполняем косметический, капитальный и дизайнерский ремонт с заменой всех коммуникаций. Качество, сроки, гарантия!</p>
                            </div>
                        </div>

                        <button className='h-[67px] bg-[#F9B33B] font-semibold text-[30px] shadow-2xl button-scale-hover'>УЗНАТЬ ПОДРОБНЕЕ</button>
                    </li>

                    {/* second element */}
                    <li className='sm:w-[90%] sm:mx-auto md:mx-0 md:w-[389px]  h-[933px]  flex flex-col justify-between py-2'>
                        <h1 className='text-center font-semibold text-[32px]'>РЕМОНТ КОМНАТ</h1>

                        <div className='w h-[778px]  flex flex-col shadow-xl'>
                            <div className=' h-1/2 bg-red-400'><img src={room2} className='w-full h-full' /></div>
                            <div className='h-1/2  text-center items-center pt-5 space-y-5'>
                                <img src={room} className='sm:w-[120px] sm:h-[120px] md:w-[79px] md:h-[79px] mx-auto'/>
                                <p className='sm:text-[30px] md:text-[22px]'>Обновим интерьер вашей гостиной, спальни, кухни или ванной. Быстро и качественно выполним отделку, монтаж полов, освещение, натяжные потолки.</p>
                            </div>
                        </div>

                        <button className='h-[67px] bg-[#F9B33B] font-semibold text-[30px] shadow-2xl button-scale-hover'>УЗНАТЬ ПОДРОБНЕЕ</button>
                    </li>

                    {/* third element */}
                    <li className='sm:w-[90%] sm:mx-auto md:mx-0 md:w-[389px]  h-[933px]  flex flex-col justify-between pb-[12px]'>
                        <h1 className='text-center font-semibold text-3xl'>КОММЕРЧЕСКИЕ ПОМЕЩЕНИЯ</h1>

                        <div className='w h-[778px]  flex flex-col shadow-xl'>
                            <div className=' h-1/2 object-fill'><img src={basement} className='w-full h-full'/></div>
                            <div className='h-1/2  text-center items-center pt-5 space-y-5'>
                                <img src={botique} className='sm:w-[120px] sm:h-[120px] md:w-[79px] md:h-[79px] mx-auto'/>
                                <p className='sm:text-[30px] md:text-[22px]'>Создаем стильные и функциональные офисы, магазины, рестораны, салоны. Разрабатываем дизайн, выполняем отделку и подключаем инженерные системы.</p>
                            </div>
                        </div>

                        <button className='h-[67px] bg-[#F9B33B] font-semibold text-[30px] shadow-2xl mt-[10px] button-scale-hover'>УЗНАТЬ ПОДРОБНЕЕ</button>
                    </li>

                    {/* fourth element */}
                    <li className='sm:w-[90%] sm:mx-auto md:mx-0 md:w-[389px]  h-[933px]  flex flex-col justify-between py-2'>
                        <h1 className='text-center font-semibold text-[33px]'>СИСТЕМЫ</h1>

                        <div className='w h-[778px]  flex flex-col shadow-xl'>
                            <div className=' h-1/2 overflow-hidden '><img src={system} className='object-cover overflow-hidden' /></div>
                            <div className='h-1/2  text-center items-center pt-5 space-y-5'>
                                <img src={gears} className='sm:w-[120px] sm:h-[120px] md:w-[79px] md:h-[79px] mx-auto'/>
                                <p className='sm:text-[30px] md:text-[22px]'>Монтаж и обслуживание электрики, сантехники, отопления, вентиляции. Надежные решения для вашего комфорта и безопасности.</p>
                            </div>
                        </div>

                        <button className='h-[67px] bg-[#F9B33B] font-semibold text-[30px] shadow-2xl button-scale-hover'>УЗНАТЬ ПОДРОБНЕЕ</button>
                    </li>


                </ul>
            </div>
        </div>

    </>
  )
}

export default Services