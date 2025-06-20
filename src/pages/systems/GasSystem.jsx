import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/electrical_systems/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/systems/gas_systems/process/first_step.png'
import second_step from '../../assets/images/systems/gas_systems/process/second_step.png'
import third_step from '../../assets/images/systems/gas_systems/process/third_step.png'
import fourth_step from '../../assets/images/systems/gas_systems/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/gas_systems/process/fifth_step.png'


const GasSystem = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1447px]  mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Газовая система</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Установка газовой системы от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] w-[1641px]  h-[400px] flex flex-col justify-between '>
                    <p>Установка газовых систем является важнейшим этапом в управлении жилыми домами и коммерческими помещениями . Система, созданная в соответствии с правилами техники, не только гарантирует правильное распределение метана, но и обеспечивает максимальную безопасность для пользователей. Обладая более чем 17-летним опытом, компания Evo Home является идеальным партнером по установке и обслуживанию газовых систем в Риме благодаря команде специализированных и сертифицированных специалистов</p>
                    <p>Метан широко применяется в быту для отопления, приготовления пищи и нагрева воды. Важно отметить, что метан — легковоспламеняющееся вещество, поэтому монтаж системы должен производиться строго по действующим нормам. Evo Home гарантирует, что каждая система соответствует всем актуальным требованиям безопасности, минимизируя таким образом вероятность утечек и неисправностей.</p>

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

        <div className='w-full h-[3700px]  flex flex-col justify-between mb-10 '>
            {/* header */}
            <div className=' w-[1640px] h-[383px] flex flex-col justify-between mx-auto'>
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                    <h1 className='text-[50px] font-bold'>Подробнее об установке газовой системы</h1>
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
                            <div className='w-[1082px] h-full  flex flex-col space-y-8  py-5 px-6 '>
                                <div>
                                    <h1 className='font-bold text-[44px]'>СЧЕТЧИК</h1>
                                </div>
                                
                                <p className='text-[26px] pb-5'>Счетчик газа является точкой доступа к энергии внутри здания. Это устройство измеряет объем потребленного газа и может быть установлено как внутри, так и снаружи помещения. В коммерческих помещениях, таких как рестораны или промышленные кухни, часто требуется счетчик большей мощности для учета большего потребления энергии.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>ПОЛЬЗОВАТЕЛЬСКИЕ УСТРОЙСТВА</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Приборы, подключенные к газовой системе, могут различаться в зависимости от того, используются ли они в бытовых или коммерческих целях. Помимо традиционных газовых плит и котлов, которые можно встретить во многих домах, существуют более сложные устройства, которые широко используются на коммерческих объектах.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-5 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>СОВРЕМЕННЫЕ СИСТЕМЫ УПРАВЛЕНИЯ</h1>
                                </div>
    
                                <p className='text-[28px] pb-5'>В коммерческих условиях управление газовой системой часто требует расширенного контроля. Evo Home устанавливает системы автоматизации и мониторинга, которые позволяют контролировать потребление в режиме реального времени, обнаруживать любые утечки и оптимизировать энергоэффективность. Это особенно важно для таких предприятий, как рестораны и гостиницы</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] px-5'>ГАРАНТИЯ СООТВЕТСТВИЯ UNI CIG  7129</h1> 
                                </div>
    
                                <p className='text-[28px] pb-5 pr-5'>Все газовые системы должны соответствовать стандарту UNI CIG 7129 , который регламентирует установку после счетчика. Законодательство предусматривает конкретные меры по обеспечению безопасности системы и ее пользователей. Evo Home обязуется соблюдать все нормативные требования и по окончании работ выдавать Декларацию о соответствии, необходимую для активации системы.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ПОЛНЫЙ СПЕКТР УСЛУГ</h1>
                                </div>
    
                                <p className='text-[28px] pb-5'>Помимо установки, Evo Home предлагает услуги по техническому обслуживанию и помощи, чтобы газовая система оставалась эффективной и безопасной в течение длительного времени.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Установка газовой системы от EVO HOME'}/>



        </div>

        <SystemLayoutCollection/>














    </div>
  )
}

export default GasSystem