import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/sewage/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/systems/sewage/process/first_step.png'
import second_step from '../../assets/images/systems/sewage/process/second_step.png'
import third_step from '../../assets/images/systems/sewage/process/third_step.png'
import fourth_step from '../../assets/images/systems/sewage/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/sewage/process/fifth_step.png'



const Sewage = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1447px]  mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Система дренажа и канализации</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Установка системы дренажа и канализации от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[29px] w-[1641px]  h-[350px] flex flex-col justify-between '>
                    <p>Наша компания Evo Home работает в сфере монтажа систем дренажа и канализации в Риме уже более 17 лет. Мы являемся лидерами в применении передовых технологий и соблюдении действующих норм, предлагая индивидуальные решения для удовлетворения потребностей каждого клиента.</p>
                    <p>Правильно спроектированная система дренажа и канализации является важнейшим элементом безопасности, устойчивости и функциональности любого здания, будь то жилое или коммерческое . Тщательно продуманная конструкция обеспечивает эффективное управление сточными водами, сводя к минимуму риск возникновения проблем.</p>

                </div>

                {/* image */}
                <div className='w-[1641px] h-[661px] bg-blue-600/20'><img src={image} className='w-full h-full object-cover'/></div>
                
                <div className='w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>
                    

                    <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>



        </div>

        {/* process */}

        <div className='w-full h-[3488px] flex flex-col '>
            {/* header */}
            <div className=' w-[1640px] h-[123px] flex flex-col justify-between mx-auto'>
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                    <h1 className='text-[50px] font-bold'>Подробнее о установке дренажа и канализации</h1>
                </div>
                
            </div>


               {/* list of steps */}
                <div className='relative mx-auto  '>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[2270px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-8  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px]'>ПЛАНИРОВАНИЕ И ДИЗАЙН</h1>
                                </div>
                                
                                <ul className='list-disc text-[30px] px-16'>
                                    <li>Анализ земельного участка и конкретных потребностей объекта недвижимости.</li>
                                    <li>Детальное проектирование системы трубопроводов, обеспечивающее надлежащий поток и оптимизацию пространства.</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>МОНТАЖ ТРУБ</h1>
                                </div>
    
                                <ul className='list-disc text-[30px] px-16'>
                                    <li>Размещение труб с оптимальным уклоном для отвода сточных вод.</li>
                                    <li>Герметичные соединения и испытания под давлением для предотвращения утечек.</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-5 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>СПЕЦИАЛЬНЫЕ КОМПОНЕНТЫ</h1>
                                </div>
    
                                <ul className='list-disc text-[30px] px-16'>
                                    <li>Установка подъемных насосов для участков с неблагоприятными уклонами.</li>
                                    <li>Монтаж сборных резервуаров и систем фильтрации для очистки сточных вод</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] px-5'>ОБЩЕСТВЕННАЯ КАНАЛИЗАЦИЯ</h1> 
                                </div>
    
                                <ul className='list-disc text-[30px] px-16'>
                                    <li>Проверьте местные правила и необходимые разрешения</li>
                                    <li>Безопасное подключение к внешней сети, гарантирующее совместимость и функциональность.</li>
                                </ul>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ТЕСТИРОВАНИЕ И ПРОВЕРКА</h1>
                                </div>
    
                                <ul className='list-disc text-[30px] px-16'>
                                    <li>Проверьте все компоненты, чтобы убедиться в их оптимальном функционировании.</li>
                                    <li>Предоставление технической документации и помощь после установки.</li>
                                </ul>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Установка системы дренажа и канализации от EVO HOME'}/>



        </div>

       <SystemLayoutCollection/>














    </div>
  )
}

export default Sewage