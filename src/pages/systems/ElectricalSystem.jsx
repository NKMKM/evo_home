import React from 'react'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import Video from '../../components/Video'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/electrical_systems/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/systems/electrical_systems/process/first_step.png'
import second_step from '../../assets/images/systems/electrical_systems/process/second_step.png'
import third_step from '../../assets/images/systems/electrical_systems/process/third_step.png'
import fourth_step from '../../assets/images/systems/electrical_systems/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/electrical_systems/process/fifth_step.png'


const ElectricalSystem = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1370px]  mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Электросистема</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Установка электросистем от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[274px] flex flex-col justify-around '>
                    <p>Evo Home — компания с более чем 17-летним опытом установки и обслуживания электросистем в Риме. Наши высококвалифицированные специалисты предлагают профессиональные решения для квартир , домов, офисов и промышленных сооружений всех типов. Благодаря использованию сертифицированных материалов и строгому соблюдению правил электробезопасности мы гарантируем надежный и безопасный сервис, всегда учитывающий потребности клиента, ставя на первое место наш опыт и профессионализм.</p>

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

        <div className='w-full h-[3824px]   flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее об установке электросистем</h1>
            </div>

            <p className='w-[1640px] h-[101px] text-[32px] mx-auto my-20'>Эффективная и безопасная электрическая система требует не только точности при установке розеток и выключателей, но и глубоких знаний основных электроприборов, используемых в жилых и коммерческих помещениях.</p>

               {/* list of steps */}
                <div className='relative mx-auto  mb-30'>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[2270px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-8  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px]'>УСТАНОВКА ЭЛЕКТРООБАРУДОВАНИЯ</h1>
                                </div>
    
                                <ul className='list-disc text-[30px] px-7'>
                                  <li>Полный электромонтаж в домах и офисах.</li>
                                  <li>Частичная или полная замена системы для повышения энергоэффективности и повышения безопасности.</li>
                                  <li>Диагностика и устранение неисправностей электрооборудования для быстрого и надежного обслуживания.</li>
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
                                    <h1 className='font-bold text-[46px] px-5'>УСТАНОВКА РОЗЕТОК И ВЫКЛЮЧАТЕЛЕЙ</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Электрические розетки и выключатели последнего поколения<br/>Регуляторы температуры для систем отопления и охлаждения<br/>Комплексные системы освещения : от традиционных люстр до светодиодных световых решений<br/>Подключение высокоэффективной бытовой техники, такой как духовки, индукционные варочные панели</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-5 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ЭЛЕКТРОПАНЕЛЬ И СИСТЕМ ЗАЩИТЫ</h1>
                                </div>
    
                                <ul className='list-disc text-[30px] px-7'>
                                  <li>Сборка и обслуживание электрических щитов для управления предприятием.</li>
                                  <li>Замена выключателей и счетчиков для обеспечения правильной работы и предотвращения перегрузок.</li>
                                  <li>Монтаж систем заземления для защиты от коротких замыканий.</li>
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
                                    <h1 className='font-bold text-[48px] px-5'>ПРОЕКТИРОВАНИЕ И ПРОВЕРКА ЗАВОДА </h1>
                                </div>
    
                                <ul className='list-disc text-[30px] px-7'>
                                  <li>Индивидуальное проектирование электрических систем, от трассировки до прокладки кабелей.</li>
                                  <li>Проверки и испытания для обеспечения соответствия системы нормам CEI и положениям законодательства.</li>
                                  <li>Плановое техническое обслуживание для поддержания эффективности системы с течением времени.</li>
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
                                    <h1 className='font-bold text-[48px]'>БЕЗОПАСНОСТЬ И ЭНЕРГОЭФФИКТИВНОСТЬ</h1>
                                </div>
    
                                <ul className='list-disc text-[28px] px-7'>
                                  <li>Уровень 1 (Базовый) : система с минимально необходимым оборудованием.</li>
                                  <li>Уровень 2 (Стандарт) : более высокий уровень безопасности и комфорта проживания.</li>
                                  <li>Уровень 3 (Домашняя автоматизация) : максимальная производительность для умных домов.</li>
                                </ul>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Установка электросистем от EVO HOME'}/>



        </div>

        <SystemLayoutCollection/>

       













    </div>
  )
}

export default ElectricalSystem