import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/floor_heating/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/systems/floor_heating/process/first_step.png'
import second_step from '../../assets/images/systems/floor_heating/process/second_step.png'
import third_step from '../../assets/images/systems/floor_heating/process/third_step.png'
import fourth_step from '../../assets/images/systems/floor_heating/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/floor_heating/process/fifth_step.png'


const FloorHeating = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1447px]  mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Система "Тёплый пол"</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Установка системы "Тёплый пол" от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[29px] w-[1641px]  h-[400px] flex flex-col justify-between '>
                    <p>Наша компания Evo Home имеет более чем 17-летний опыт работы в строительной отрасли в Риме и специализируется на проектировании и установке систем напольного отопления. Мы предлагаем современные и качественные решения, идеально подходящие для любого типа жилой среды , обеспечивающие благополучие и оптимизацию потребления энергии.</p>
                    <p>В системе напольного отопления используется принцип равномерного распределения тепла. В отличие от традиционных радиаторов, которые генерируют неравномерное и сухое тепло, системы отопления «теплый пол» распределяют тепло равномерно, делая окружающую среду более комфортной. Благодаря циркуляции горячей воды в трубах, расположенных под полом, тепло передается вверх, сохраняя ноги в тепле, а воздух — приятно прохладным.</p>

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

        <div className='w-full h-[4000px]  flex flex-col justify-between '>
            {/* header */}
            <div className=' w-[1640px] h-[383px] flex flex-col justify-between mx-auto'>
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                    <h1 className='text-[50px] font-bold'>Подробнее об установке системы "Тёплый пол"</h1>
                </div>
                <p className='w-[1640px] h-[252px] text-[32px] mx-auto '>Правильно спроектированная и установленная газовая система состоит из нескольких основных элементов, каждый из которых должен быть выбран и размещен с особой тщательностью. Помимо жилых домов, газовые технологии также широко используются в коммерческих помещениях, таких как рестораны, гостиницы, офисы и спортзалы, где требования к энергосбережению и безопасности особенно высоки. Ниже представлен более подробный обзор основных компонентов с конкретными примерами применения.</p>
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
                                    <h1 className='font-bold text-[46px]'>ПЕРВИЧНАЯ КОНСУЛЬТАЦИЯ И ОЦЕНКА</h1>
                                </div>
                                
                                <p className='text-[27.5px] pb-5'>Мы анализируем характеристики объекта и обсуждаем с клиентом потребности в отоплении. На этом этапе мы проводим тепловой анализ для правильного расчета размеров системы.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>ДЕТАЛЬНОЕ ПРОЕКТИРОВАНИЕ</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Мы составляем точный план с расположением труб, установкой узлов управления и теплоизоляцией. Этот шаг имеет решающее значение для предотвращения потерь тепла и обеспечения оптимальной работы.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-5 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>НАГРЕВ ВОДЫ</h1>
                                </div>
    
                                <p className='text-[28px] pb-5'>Водяной теплый пол представляет собой систему высокопрочных пластиковых труб, расположенных под поверхностью пола и залитых слоем стяжки. Нагретая вода, вырабатываемая котлом или тепловым насосом, циркулирует по этому контуру, равномерно распределяя тепло</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] px-5'>ЭЛЕКТРИЧЕСКОЕ ОТОПЛЕНИЕ</h1> 
                                </div>
    
                                <p className='text-[28px] pb-5'>В электрическом напольном отоплении используется нагревательный кабель, который можно вставить непосредственно в стяжку или закрепить на предварительно сформированной сетке. Система питается от электросети дома, а температура регулируется с помощью программируемого термостата, что обеспечивает точный контроль тепла.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ТЕСТЫ И ОКОНЧАТЕЛЬНЫЕ НАСТРОЙКИ</h1>
                                </div>
    
                                <p className='text-[28px] pb-5'>Перед поставкой мы проводим функциональные испытания, чтобы убедиться, что система соответствует стандартам и работает эффективно. Кроме того, мы предоставляем инструкции по правильному обращению.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Установка система Теплый пол от EVO HOME'}/>



        </div>

        <SystemLayoutCollection/>














    </div>
  )
}

export default FloorHeating