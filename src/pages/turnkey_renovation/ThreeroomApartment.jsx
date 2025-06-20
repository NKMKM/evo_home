import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/threeroom_apartment/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/threeroom_apartment/process/first_step.jpg'
import second_step from '../../assets/images/turnkey_renovation/threeroom_apartment/process/second_step.jpg'
import third_step from '../../assets/images/turnkey_renovation/threeroom_apartment/process/third_step.jpg'


const ThreeroomApartment = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1628px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Трех-комнатные квартиры</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' -violet-500 space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Трех-комнатные квартиры от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[550px] flex flex-col justify-around '>
                    <p>Ищете лучшее решение для ремонта вашей трехкомнатной квартиры в Риме и окрестностях? Компания EvoHome готова удовлетворить все ваши потребности, имея многолетний опыт работы в сфере строительства и ремонта (более 17 лет). Мы готовы предложить Вам полный, надежный и индивидуальный сервис, который поможет превратить Вашу трехкомнатную квартиру в уникальную, комфортную среду, полностью соответствующую Вашим желаниям.</p>
                    <p>Ваш дом — это сердце вашей повседневной жизни, и мы в EvoHome хорошо это знаем. По этой причине мы стремимся предлагать высококачественные решения по ремонту стоимостью от 50 000 евро , гарантируя вмешательства, которые улучшат каждый аспект вашей трехкомнатной квартиры. Работая в Риме и его окрестностях, компания EvoHome является идеальным выбором для тех, кто ищет профессионализм, опыт и обслуживание, которое ставит потребности клиента во главу угла. Предоставляя гарантию на результаты сроком от 3 лет, мы являемся точкой отсчета в секторе, гарантируя вам надежные и долгосрочные инвестиции.</p>

                </div>

                {/* image */}
                <div className='w-[1641px] h-[661px] bg-blue-600/20'><img src={image} className='w-full h-full object-cover'/></div>
            </div>


            <div className='w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </div>

        {/* process */}

        <div className='w-full h-[2800px]  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте трех-комнатных квартир</h1>
            </div>

            <p className='w-[1640px]  h-[141px] text-[32px] mx-auto '>Наш специалист проводит точные измерения непосредственно на месте. Если проект предусматривает реконструкцию помещений, мы определяем, какие стены можно модифицировать, обеспечивая при этом соблюдение действующих норм и максимальную безопасность.</p>

               {/* list of steps */}
                <div className='relative mx-auto '>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[1327px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-7  py-4 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>ЗАПУСК И ПРОЕКТИРОВАНИЕ</h1>
                                </div>
    
                                <ul className='text-[30px] px-20 list-disc'>
                                    <li>Планирование пространства</li>
                                    <li>Предварительная оценка</li>
                                    <li>Определение концепции с дизайнером интерьера</li>
                                    <li>Разработка проекта дизайна интерьера</li>
                                    <li>Подробная и окончательная смета</li>
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
                                    <h1 className='font-bold text-[46px] '>ВЫПОЛНЕНИЕ РАБОТ</h1>
                                </div>
    
                                <ul className='text-[30px] px-20 list-disc'>
                                    <li>Закупка материалов</li>
                                    <li>Снос и вывоз</li>
                                    <li>Реконструкция и структурные изменения</li>
                                    <li>Монтаж оборудования</li>
                                    <li>Отделка стен и потолков</li>
                                    <li>Покраска</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-6 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ЗАВЕРШЕНИЕ И СДАЧА</h1>
                                </div>
                                
                                <ul className='text-[30px] px-20 list-disc'>
                                    <li>Освещение и детали</li>
                                    <li>Сантехническая отделка</li>
                                    <li>Мебель и аксессуары</li>
                                    <li>Внутренняя отделка</li>
                                    <li>Генеральная уборка</li>
                                    <li>Сдача проекта клиенту</li>
                                </ul>
                            </div>


                        </li>

    
                    </ul>
    
    
                </div> 



            {/* video */}
            <div className='mb-10'>
                <Video text={'Ремонт трех-комнатных квартир от EVO HOME'}/>
            </div>



        </div>

        <LayoutCollection/>
        
    </div>
  )
}

export default ThreeroomApartment