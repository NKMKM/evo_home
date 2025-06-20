import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/fourroom_apartment/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/stairs/arrow_2.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/fourroom_apartment/process/first_step.jpg'
import second_step from '../../assets/images/turnkey_renovation/fourroom_apartment/process/second_step.jpg'
import third_step from '../../assets/images/turnkey_renovation/fourroom_apartment/process/third_step.png'
import fourth_step from '../../assets/images/turnkey_renovation/fourroom_apartment/process/fourth_step.jpg'


const FourroomApartment = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1728px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Четырех-комнатные квартиры</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' -violet-500 space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Четырех-комнатные квартиры от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[550px] flex flex-col justify-around '>
                    <p>Вы ищете специалистов для ремонта вашей четырехкомнатной квартиры в Риме, чтобы превратить ее в место, отражающее максимальный комфорт и стиль? Компания EvoHome, имеющая более чем 17-летний опыт работы в Риме и его окрестностях, является идеальным выбором для тех, кто ищет качество, надежность и индивидуальный подход к каждому клиенту. При стоимости проектов по реконструкции от 50 000 евро мы гарантируем превосходные результаты и обеспечиваем долгосрочную и выгодную инвестицию с расширенной 3-летней гарантией.</p>
                    <p>Наша компания стремится предоставлять не только технические навыки и опыт, но и внимательно относиться к вашим конкретным потребностям, гарантируя, что каждый проект будет соответствовать вашим ожиданиям. Будь то ремонт кухни, перепланировка ванной комнаты или внедрение систем для повышения энергоэффективности вашего дома, EvoHome будет рядом с вами, чтобы пройти вместе с вами каждый шаг этого пути с уверенностью и безопасностью.</p>

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

        <div className='w-full h-[3223px]  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте четырех-комнатных квартир</h1>
            </div>

            <p className='w-[1640px] h-[141px] text-[32px] mx-auto '>С EvoHome каждый этап процесса ремонта управляется с максимальным вниманием к деталям, гарантируя, что ваш проект будет реализован в соответствии с вашими ожиданиями, с качеством и эффективностью, которые отличают нас.</p>

               {/* list of steps */}
                <div className='relative mx-auto '>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[1794px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px] pl-5'>ПЛАНИРОВАНИЕ И ПРОЕКТИРОВАНИЕ</h1>
                                </div>
    
                                <ul className='text-[30px] px-20 list-disc'>
                                    <li>Первичная консультация</li>
                                    <li>Предварительная оценка</li>
                                    <li>Встреча с дизайнером</li>
                                    <li>Окончательный дизайн</li>
                                    <li>Подробная смета</li>
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
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col justify-between py-5 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>КАЧЕТСВЕННАЯ ОТДЕЛКА</h1>
                                </div>
    
                                <p className='text-[26px] p-light'>Качественная отделка – это завершающий этап ремонта, который придает интерьеру эстетичный вид, комфорт и долговечность. Мы используем только проверенные материалы, профессиональное оборудование и современные технологии, чтобы добиться идеального результата.От потолка до стен, от укладки полов до создания дизайнерских ванных комнат и кухонь — каждая деталь совершенна</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] '>ЗАВЕРШЕНИЕ И СДАЧА</h1>
                                </div>
    
                                <ul className='text-[30px] px-20 list-disc'>
                                    <li>Освещение и сантехника</li>
                                    <li>Меблировка</li>
                                    <li>Декорирование</li>
                                    <li>Уборка после строительства</li>
                                    <li>Передача заказчику</li>
                                </ul>
                            </div>

                        </li>
    
                    </ul>
    
    
                    <div className='w-[1604px] h-[338px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <div className='mb-10'>
                <Video text={'Ремонт четырех-комнатных квартир от EVO HOME'}/>
            </div>



        </div>

        <LayoutCollection/>
        
    </div>
  )
}

export default FourroomApartment