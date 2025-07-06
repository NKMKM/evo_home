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
        <div className='lg:w-[1641px] sm:w-full lg:h-[1520px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Трех-комнатные квартиры</h1>

                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[25px] lg:text-[50px] font-bold sm:mt-5 lg:mt-0'>Трех-комнатные квартиры от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>Ищете лучшее решение для ремонта вашей трехкомнатной квартиры в Риме и окрестностях? Компания EvoHome готова удовлетворить все ваши потребности, имея многолетний опыт работы в сфере строительства и ремонта (более 17 лет). Мы готовы предложить Вам полный, надежный и индивидуальный сервис, который поможет превратить Вашу трехкомнатную квартиру в уникальную, комфортную среду, полностью соответствующую Вашим желаниям.</p>
                    <p>Ваш дом — это сердце вашей повседневной жизни, и мы в EvoHome хорошо это знаем. По этой причине мы стремимся предлагать высококачественные решения по ремонту стоимостью от 50 000 евро , гарантируя вмешательства, которые улучшат каждый аспект вашей трехкомнатной квартиры. Работая в Риме и его окрестностях, компания EvoHome является идеальным выбором для тех, кто ищет профессионализм, опыт и обслуживание, которое ставит потребности клиента во главу угла. Предоставляя гарантию на результаты сроком от 3 лет, мы являемся точкой отсчета в секторе, гарантируя вам надежные и долгосрочные инвестиции.</p>
                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} className='w-full h-full object-cover' /></div>

                <div className='sm:w-full md:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
                    <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] md:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>
        </div>

        {/* process */}

        <div className='lg:w-full lg:h-[2700px] flex flex-col justify-between lg:mb-20'>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h1 className='sm:text-[22px] lg:text-[50px] font-bold sm:mt-5.5 lg:mt-0'>Подробнее о ремонте трех-комнатных квартир</h1>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Наш специалист проводит точные измерения непосредственно на месте. Если проект предусматривает реконструкцию помещений, мы определяем, какие стены можно модифицировать, обеспечивая при этом соблюдение действующих норм и максимальную безопасность.</p>

            {/* list of steps */}
            <div className='sm:h-[2800px] lg:h-[1340px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='sm:h-[2800px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ЗАПУСК И ПРОЕКТИРОВАНИЕ</h1>

                            <ul className='list-disc text-[28px] pl-12'>
                                  <li>Планирование пространства</li>
                                  <li>Предварительная оценка</li>
                                  <li>Определение концепции с дизайнером интерьера</li>
                                  <li>Разработка проекта дизайна интерьера</li>
                                  <li>Подробная и окончательная смета</li>
                            </ul>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-6 py-5 px-6 lg:px-0 '>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ВЫПОЛНЕНИЕ РАБОТ</h1>

                            <ul className='list-disc text-[28px] pl-12'>
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
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ЗАВЕРШЕНИЕ И СДАЧА</h1>

                            <ul className='list-disc text-[28px] pl-12'>
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

            <div className='mb-10 '>
                <Video text={'Ремонт трех-комнатных квартир от EVO HOME'} />
            </div>
        </div>

        <LayoutCollection/>
        
    </div>
  )
}

export default ThreeroomApartment