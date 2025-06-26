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
        <div className=' lg:w-[1641px] lg:h-[1370px]  mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] md:w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block  '/>
                <div className=''>
                    <h1 className='font-bold text-center sm:text-[50px] md:text-[57px]'>Электросистемы</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block'/>
            </div>

            {/* main content */}
            <div className=' space-y-10 '>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[28px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Установка электросистем от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] lg:w-[1641px]  lg:h-[274px] sm:text-center lg:text-start flex flex-col justify-around '>
                    <p>Evo Home — компания с более чем 17-летним опытом установки и обслуживания электросистем в Риме. Наши высококвалифицированные специалисты предлагают профессиональные решения для квартир , домов, офисов и промышленных сооружений всех типов. Благодаря использованию сертифицированных материалов и строгому соблюдению правил электробезопасности мы гарантируем надежный и безопасный сервис, всегда учитывающий потребности клиента, ставя на первое место наш опыт и профессионализм.</p>

                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} className='w-full h-full object-cover'/></div>
                
                <div className='sm:w-full md:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] md:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>



        </div>

        {/* process */}

        <div className='lg:w-full lg:h-[3788px]   flex flex-col justify-between '>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px]  h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h1 className='sm:text-[28px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее об установке электросистем</h1>
            </div>

            <p className='sm:w-full lg:w-[1640px] lg:h-[101px] sm:text-center lg:text-start sm:px-4 lg:px-0 text-[32px] mx-auto my-20'>Эффективная и безопасная электрическая система требует не только точности при установке розеток и выключателей, но и глубоких знаний основных электроприборов, используемых в жилых и коммерческих помещениях.</p>

               {/* list of steps */}
                <div className='sm:h-[5550px]  lg:h-[2270px]  sm:w-full lg:w-auto  relative mx-auto  lg:mb-30'>
                    <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='sm:h-[5550px]  lg:h-full  sm:w-full  lg:w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 lg:px-5 '>
                                <div>   
                                    <h1 className='font-bold sm:text-[42px] lg:text-[46px]'>УСТАНОВКА ЭЛЕКТРООБАРУДОВАНИЯ</h1>
                                </div>
    
                                <ul className='list-disc text-[28px] px-7'>
                                  <li>Полный электромонтаж в домах и офисах.</li>
                                  <li>Частичная или полная замена системы для повышения энергоэффективности и повышения безопасности.</li>
                                  <li>Диагностика и устранение неисправностей электрооборудования для быстрого и надежного обслуживания.</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5  '>
                                <div>
                                    <h1 className='font-bold sm:text-[42px] lg:text-[46px] '>УСТАНОВКА РОЗЕТОК И ВЫКЛЮЧАТЕЛЕЙ</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Электрические розетки и выключатели последнего поколения<br/>Регуляторы температуры для систем отопления и охлаждения<br/>Комплексные системы освещения : от традиционных люстр до светодиодных световых решений<br/>Подключение высокоэффективной бытовой техники, такой как духовки, индукционные варочные панели</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 lg:px-5 '>
                                <div>
                                    <h1 className='font-bold sm:text-[42px] lg:text-[46px]'>ЭЛЕКТРОПАНЕЛЬ И СИСТЕМ ЗАЩИТЫ</h1>
                                </div>
    
                                <ul className='list-disc text-[28px] px-7'>
                                  <li>Сборка и обслуживание электрических щитов для управления предприятием.</li>
                                  <li>Замена выключателей и счетчиков для обеспечения правильной работы и предотвращения перегрузок.</li>
                                  <li>Монтаж систем заземления для защиты от коротких замыканий.</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5  '>
                                <div>
                                    <h1 className='font-bold sm:text-[42px] lg:text-[46px] '>ПРОЕКТИРОВАНИЕ И ПРОВЕРКА ЗАВОДА </h1>
                                </div>
    
                                <ul className='list-disc text-[28px] px-7'>
                                  <li>Индивидуальное проектирование электрических систем, от трассировки до прокладки кабелей.</li>
                                  <li>Проверки и испытания для обеспечения соответствия системы нормам CEI и положениям законодательства.</li>
                                  <li>Плановое техническое обслуживание для поддержания эффективности системы с течением времени.</li>
                                </ul>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-4  py-5 lg:px-5 '>
                                <div>
                                    <h1 className='font-bold sm:text-[42px] lg:text-[46px]'>БЕЗОПАСНОСТЬ И ЭНЕРГОЭФФИКТИВНОСТЬ</h1>
                                </div>
    
                                <ul className='list-disc text-[25px] px-7'>
                                  <li>Уровень 1 (Базовый) : система с минимально необходимым оборудованием.</li>
                                  <li>Уровень 2 (Стандарт) : более высокий уровень безопасности и комфорта проживания.</li>
                                  <li>Уровень 3 (Домашняя автоматизация) : максимальная производительность для умных домов.</li>
                                </ul>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <div className='mb-10'>
                <Video text={'Установка электросистем от EVO HOME'}/>
            </div>



        </div>

        <SystemLayoutCollection/>

       













    </div>
  )
}

export default ElectricalSystem