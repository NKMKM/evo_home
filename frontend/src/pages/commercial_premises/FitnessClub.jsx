import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'

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
        {/* first step */}
        <div className=' w-[1641px] h-[1477px] mx-auto mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20'>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Реновация фитнес-клуба</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='h-[1377px] flex flex-col justify-between  '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Реновация фитнес-клуба от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px] h-[400px] flex flex-col justify-between '>
                    <p>Реновация фитнес-клуба в настоящее время является не только насущной необходимостью, но и конкурентным преимуществом. Светлое и просторное помещение с хорошо функционирующим оборудованием производит положительное впечатление и улучшает впечатления клиентов от тренировок</p>
                    <p>Компания EvoHome, работающая в сфере ремонта в Риме более 17 лет, предлагает экономичные и практичные решения для ремонта вашего фитнес-клуба, гарантируя высокое качество работы и своевременную доставку. Будь то косметический ремонт или полная реконструкция с перепланировкой пространства, мы стремимся обеспечить превосходный результат, как указано в договоре. Стоимость варьируется в зависимости от первоначального состояния здания, целей проекта и первоначального разделения пространств.</p>

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

        <div className='w-full h-auto  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о реновации фитнес-клуба</h1>
            </div>



               {/* list of steps */}
                <div className='relative mx-auto my-20 mb-10'>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[2270px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px] pl-5'>РАБОТЫ ПО СНОСУ И ВЫЗОВУ</h1>
                                </div>
    
                                <ul className='list-disc text-[30px] px-14'>
                                    <li>Удаление покрытий : Демонтаж старых напольных покрытий, плитки, штукатурки и настенных покрытий.</li>
                                    <li>Снос стен : снос ненесущих перегородок для перепланировки внутренних пространств</li>
                                    <li>Демонтаж окон : демонтаж старых окон и дверей.</li>
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
                                    <h1 className='font-bold text-[46px] '>ПРОМЕЖУТОЧНЫЕ ОТДЕЛОЧНЫЕ РАБОТЫ</h1>
                                </div>
    
                                <ul className='list-disc text-[30px] '>
                                    <li>Штукатурка и выравнивание : нанесение штукатурки на стены и потолки для получения гладкой, ровной поверхности.</li>
                                    <li>Базовая краска : Первый слой краски для подготовки поверхности к окончательной отделке.</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px]'>ЭЛЕКТРИКА И САНТЕХНИКА</h1>
                                </div>
    
                                <ul className='list-disc text-[28px] px-8'>
                                    <li>Электрика : Установка и подключение новых электрических систем, включая розетки, выключатели и освещение.</li>
                                    <li>Сантехника : Монтаж труб горячего и холодного водоснабжения, канализации и сантехнического оборудования.</li>
                                    <li>Технологические подключения : подключения для аудио, видео и систем контроля доступа.</li>
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
                                    <h1 className='font-bold text-[48px] '>ФИТНЕС-ОБАРУДОВАНИЕ</h1>
                                </div>
    
                                <p className='text-[30px] p-light '>Сборка и ремонт фитнес-оборудования, такого как тренажеры, свободные веса и оборудование для функциональных тренировок.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ОСВЕЩЕНИЕ И МЕБЛИРОВКА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Освещение : Установите соответствующие системы освещения для каждой зоны фитнес-клуба.<br/>Меблировка : Поставка и монтаж мебели для приемных, зон отдыха и раздевалок.<br/>Декоративные элементы : Нанесение настенных украшений, установка штор и ставней.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 


            <div className='mb-10'>
                {/* video */}
                <Video text={'Реновация фитнес-клуба от EVO HOME'}/>
            </div>



        </div>

        <CommercialPremisesLayoutCollection/>


    </div>
  )
}

export default FitnessClub