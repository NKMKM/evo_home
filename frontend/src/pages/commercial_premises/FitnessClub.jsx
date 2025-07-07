import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/fitness_club/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/commercial_premises/fitness_club/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/fitness_club/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/fitness_club/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/fitness_club/process/fourth_step.png'
import fifth_step from '../../assets/images/commercial_premises/fitness_club/process/fifth_step.png'


const FitnessClub = () => {
  return (
    <div>
        <Helmet>
            <title>Реновация фитнес-клубов</title>
            <meta name="description" content="Renovation of fitness clubs by EVO Home" />
        </Helmet>
        {/* first step */}
        <header className=' lg:w-[1641px] sm:h-[] lg:h-[1500px]  mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] lg:w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block  '/>
                <div className=''>
                    <h1 className='font-bold text-center sm:text-[50px] lg:text-[57px]'>Реновация фитнес-клуба</h1>

                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>

            {/* main content */}
            <div className=' space-y-10 '>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h2 className='sm:text-[28px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Реновация фитнес-клуба от EVO HOME</h2>
                </div>

                {/* text */}
                <div className='text-[30px] lg:w-[1641px]  lg:h-[454px] sm:text-center lg:text-start flex flex-col justify-around '>
                    <p>Реновация фитнес-клуба в настоящее время является не только насущной необходимостью, но и конкурентным преимуществом. Светлое и просторное помещение с хорошо функционирующим оборудованием производит положительное впечатление и улучшает впечатления клиентов от тренировок.</p>
                    <p>Компания EvoHome, работающая в сфере ремонта в Риме более 17 лет, предлагает экономичные и практичные решения для ремонта вашего фитнес-клуба, гарантируя высокое качество работы и своевременную доставку. Будь то косметический ремонт или полная реконструкция с перепланировкой пространства, мы стремимся обеспечить превосходный результат, как указано в договоре. Стоимость варьируется в зависимости от первоначального состояния здания, целей проекта и первоначального разделения пространств.</p>

                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='fitness club' loading="lazy" className='w-full h-full object-cover'/></div>
                
                <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>



        </header>

        {/* process */}

        <main className='lg:w-full sm:h-[6400px] lg:h-[3588px]   flex flex-col justify-between '>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px]  h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h2 className='sm:text-[28px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее о реновации фитнес-клуба</h2>
            </div>


               {/* list of steps */}
                <div className='sm:h-[4850px]  lg:h-[2200px]  sm:w-full lg:w-auto  relative mx-auto  '>
                    <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full ' /></div>
    
                    <ul className='sm:h-[4850px]  lg:h-[2260px]  sm:w-full  lg:w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 lg:px-5 '>
                                <div>   
                                    <h2 className='font-bold sm:text-[42px] lg:text-[46px]'>РАБОТЫ ПО СНОСУ И ВЫЗОВУ</h2>
                                </div>
    
                                <ul className='list-disc text-[28px] px-7'>
                                  <li>Удаление покрытий : Демонтаж старых напольных покрытий, плитки, штукатурки и настенных покрытий.</li>
                                  <li>Снос стен : снос ненесущих перегородок для перепланировки внутренних пространств</li>
                                  <li>Демонтаж окон : демонтаж старых окон и дверей.</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5  '>
                                <div>
                                    <h2 className='font-bold sm:text-[42px] lg:text-[46px] '>ПРОМЕЖУТОЧНЫЕ ОТДЕЛОЧНЫЕ РАБОТЫ</h2>
                                </div>
                                <ul className='list-disc text-[28px] px-7'>
                                  <li>Штукатурка и выравнивание : нанесение штукатурки на стены и потолки для получения гладкой, ровной поверхности.</li>
                                  <li>Базовая краска : Первый слой краски для подготовки поверхности к окончательной отделке.</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 lg:px-5 '>
                                <div>
                                    <h2 className='font-bold sm:text-[42px] lg:text-[46px]'>ЭЛЕКТРИКА И САНТЕХНИКА</h2>
                                </div>
    
                                <ul className='list-disc text-[28px] px-7'>
                                  <li>Электрика : Установка и подключение новых электрических систем, включая розетки, выключатели и освещение.</li>
                                  <li>Сантехника : Монтаж труб горячего и холодного водоснабжения, канализации и сантехнического оборудования.</li>
                                  <li>Технологические подключения : подключения для аудио, видео и систем контроля доступа.</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5  '>
                                <div>
                                    <h2 className='font-bold sm:text-[42px] lg:text-[46px] '>ФИТНЕС-ОБОРУДОВАНИЕ</h2>
                                </div>
    
                                <p className='text-[26px] pb-5'>Сборка и ремонт фитнес-оборудования, такого как тренажеры, свободные веса и оборудование для функциональных тренировок.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className='sm:w-[85%]   sm:ml-[7%] lg:w-full   lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-4  py-5 lg:px-5 '>
                                <div>
                                    <h2 className='font-bold sm:text-[42px] lg:text-[46px]'>ОСВЕЩЕНИЕ И МЕБЛИРОВКА</h2>
                                </div>
    
                                <ul className='list-disc text-[25px] px-7'>
                                  <li>Освещение : Установите соответствующие системы освещения для каждой зоны фитнес-клуба.</li>
                                  <li>Меблировка : Поставка и монтаж мебели для приемных, зон отдыха и раздевалок</li>
                                  <li>Декоративные элементы : Нанесение настенных украшений, установка штор и ставней.</li>
                                </ul>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <div className='mb-10'>
                <Video text={'Реновация фитнес-клуба от EVO HOME'}/>
            </div>



        </main>

        <CommercialPremisesLayoutCollection/>



    </div>
  )
}

export default FitnessClub