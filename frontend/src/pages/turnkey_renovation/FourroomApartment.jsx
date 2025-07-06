import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/fourroom_apartment/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/fourroom_apartment/process/first_step.jpg'
import second_step from '../../assets/images/turnkey_renovation/fourroom_apartment/process/second_step.jpg'
import third_step from '../../assets/images/turnkey_renovation/fourroom_apartment/process/third_step.png'
import fourth_step from '../../assets/images/turnkey_renovation/fourroom_apartment/process/fourth_step.jpg'


const FourroomApartment = () => {
  return (
    <div>
        {/* first step */}
        <div className='lg:w-[1641px] sm:w-full lg:h-[1450px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Четырех-комнатные квартиры</h1>

                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[25px] lg:text-[50px] font-bold sm:mt-5 lg:mt-0'>Четырех-комнатные квартиры от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>Вы ищете специалистов для ремонта вашей четырехкомнатной квартиры в Риме, чтобы превратить ее в место, отражающее максимальный комфорт и стиль? Компания EvoHome, имеющая более чем 17-летний опыт работы в Риме и его окрестностях, является идеальным выбором для тех, кто ищет качество, надежность и индивидуальный подход к каждому клиенту. При стоимости проектов по реконструкции от 50 000 евро мы гарантируем превосходные результаты и обеспечиваем долгосрочную и выгодную инвестицию с расширенной 3-летней гарантией.</p>
                    <p>Наша компания стремится предоставлять не только технические навыки и опыт, но и внимательно относиться к вашим конкретным потребностям, гарантируя, что каждый проект будет соответствовать вашим ожиданиям. Будь то ремонт кухни, перепланировка ванной комнаты или внедрение систем для повышения энергоэффективности вашего дома, EvoHome будет рядом с вами, чтобы пройти вместе с вами каждый шаг этого пути с уверенностью и безопасностью</p>
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

        <div className='lg:w-full lg:h-[3288px] flex flex-col justify-between'>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h1 className='sm:text-[22px] lg:text-[50px] font-bold sm:mt-5.5 lg:mt-0'>Подробнее о ремонте четырех-комнатных квартир</h1>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>С EvoHome каждый этап процесса ремонта управляется с максимальным вниманием к деталям, гарантируя, что ваш проект будет реализован в соответствии с вашими ожиданиями, с качеством и эффективностью, которые отличают нас.</p>

            {/* list of steps */}
            <div className='sm:h-[3600px] lg:h-[1860px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='sm:h-[3600px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ПЛАНИРОВАНИЕ И ПРОЕКТИРОВАНИЕ</h1>

                            <ul className='list-disc text-[28px] px-7'>
                                  <li>Первичная консультация</li>
                                  <li>Предварительная оценка</li>
                                  <li>Встреча с дизайнером</li>
                                  <li>Окончательный дизайн</li>
                                  <li>Подробная смета</li>
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

                            <ul className='list-disc text-[28px] px-7'>
                                  <li>Поставка материалов</li>
                                  <li>Снос</li>
                                  <li>Строительство и монтаж</li>
                                  <li>Отделочные работы</li>
                                  <li>Напольные покрытия</li>
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
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>КАЧЕСТВЕННАЯ ОТДЕЛКА</h1>
                            <p className='text-[26px] pb-5'>Качественная отделка – это завершающий этап ремонта, который придает интерьеру эстетичный вид, комфорт и долговечность. Мы используем только проверенные материалы, профессиональное оборудование и современные технологии, чтобы добиться идеального результата.От потолка до стен, от укладки полов до создания дизайнерских ванных комнат и кухонь — каждая деталь совершенна</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ЗАВЕРШЕНИЕ И СДАЧА</h1>
                            <ul className='list-disc text-[28px] px-7'>
                                  <li>Освещение и сантехника</li>
                                  <li>Меблировка</li>
                                  <li>Декорирование</li>
                                  <li>Уборка после строительства</li>
                                  <li>Передача заказчику</li>
                            </ul>
                        </div>
                    </li>

                </ul>

                <div className='absolute w-[1303px] h-[460px] top-[1280px] scale-85 left-[280px] sm:hidden lg:block'><img src={arrow_2} className='w-full h-full'/></div>
            </div>

            <div className='mb-10'>
                <Video text={'Ремонт четырех-комнатных квартир от EVO HOME'} />
            </div>
        </div>

        <LayoutCollection/>
        
    </div>
  )
}

export default FourroomApartment