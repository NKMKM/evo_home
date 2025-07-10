import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/electrical_systems/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

import first_step from '../../assets/images/systems/gas_systems/process/first_step.png'
import second_step from '../../assets/images/systems/gas_systems/process/second_step.png'
import third_step from '../../assets/images/systems/gas_systems/process/third_step.png'
import fourth_step from '../../assets/images/systems/gas_systems/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/gas_systems/process/fifth_step.png'

const GasSystem = () => {
  return (
    <div>
      <Helmet>
          <title>Газовая система</title>
          <meta name="description" content="Gas systems made by EVO Home" />
      </Helmet>
      {/* First block */}
      <header className='lg:w-[1641px] sm:w-full lg:h-[1447px] mx-auto my-20 flex flex-col justify-between'>
        <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
          <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
            <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Газовая система</h1>
          <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
        </div>

        <div className='space-y-10'>
          <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
            <h2 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Установка газовой системы от EVO HOME</h2>
          </div>

          <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-4'>
            <p>Установка газовых систем является важнейшим этапом в управлении жилыми домами и коммерческими помещениями . Система, созданная в соответствии с правилами техники, не только гарантирует правильное распределение метана, но и обеспечивает максимальную безопасность для пользователей. Обладая более чем 17-летним опытом, компания Evo Home является идеальным партнером по установке и обслуживанию газовых систем в Риме благодаря команде специализированных и сертифицированных специалистов</p>
            <p>Метан широко применяется в быту для отопления, приготовления пищи и нагрева воды. Важно отметить, что метан — легковоспламеняющееся вещество, поэтому монтаж системы должен производиться строго по действующим нормам. Evo Home гарантирует, что каждая система соответствует всем актуальным требованиям безопасности, минимизируя таким образом вероятность утечек и неисправностей.</p>
          </div>

          <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='gas system' loading="lazy" className='w-full h-full object-cover' /></div>

          <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
            <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>
            <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
          </div>
        </div>
      </header>

      {/* Process */}
      <main className='lg:w-full lg:h-[4088px]  flex flex-col justify-between'>
        <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
          <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
          <h2 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее об установке газовой системы</h2>
        </div>

        <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Правильно спроектированная и установленная газовая система состоит из нескольких основных элементов, каждый из которых должен быть выбран и размещен с особой тщательностью. Помимо жилых домов, газовые технологии также широко используются в коммерческих помещениях, таких как рестораны, гостиницы, офисы и спортзалы, где требования к энергосбережению и безопасности особенно высоки. Ниже представлен более подробный обзор основных компонентов с конкретными примерами применения.</p>

        <div className='sm:h-[5550px] lg:h-[2260px] sm:w-full lg:w-auto relative mx-auto lg:mb-30'>
          <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full' /></div>

          <ul className='sm:h-[5550px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>СЧЕТЧИК</h2>
                <p className='text-[26px] pb-5'>Счетчик газа является точкой доступа к энергии внутри здания. Это устройство измеряет объем потребленного газа и может быть установлено как внутри, так и снаружи помещения. В коммерческих помещениях, таких как рестораны или промышленные кухни, часто требуется счетчик большей мощности для учета большего потребления энергии.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
              <div className='sm:w-full sm:h-[400px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-10 py-5 px-5'>
                <h2 className='font-bold sm:text-[42px] lg:text-[46px]'>ПОЛЬЗОВАТЕЛЬСКИЕ УСТРОЙСТВА</h2>
                <p className='text-[28px] p-light'>Приборы, подключенные к газовой системе, могут различаться в зависимости от того, используются ли они в бытовых или коммерческих целях. Помимо традиционных газовых плит и котлов, которые можно встретить во многих домах, существуют более сложные устройства, которые широко используются на коммерческих объектах.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-5 py-5 px-10'>
                <h2 className='font-bold sm:text-[42px] lg:text-[48px]'>СОВРЕМЕННЫЕ СИСТЕМЫ УПРАВЛЕНИЯ</h2>
                <p className='text-[28px] pb-5'>В коммерческих условиях управление газовой системой часто требует расширенного контроля. Evo Home устанавливает системы автоматизации и мониторинга, которые позволяют контролировать потребление в режиме реального времени, обнаруживать любые утечки и оптимизировать энергоэффективность. Это особенно важно для таких предприятий, как рестораны и гостиницы</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
              <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-10 py-5 px-5'>
                <h2 className='font-bold sm:text-[42px] lg:text-[48px]'>ГАРАНТИЯ СООТВЕТСТВИЯ UNI CIG  7129</h2>
                <p className='text-[28px] pb-5'>Все газовые системы должны соответствовать стандарту UNI CIG 7129 , который регламентирует установку после счетчика. Законодательство предусматривает конкретные меры по обеспечению безопасности системы и ее пользователей. Evo Home обязуется соблюдать все нормативные требования и по окончании работ выдавать Декларацию о соответствии, необходимую для активации системы.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] h-full flex flex-col px-10 space-y-4 py-5'>
                <h2 className='font-bold sm:text-[42px] lg:text-[48px]'>ПОЛНЫЙ СПЕКТР УСЛУГ</h2>
                <p className='text-[28px] pb-5'>Помимо установки, Evo Home предлагает услуги по техническому обслуживанию и помощи, чтобы газовая система оставалась эффективной и безопасной в течение длительного времени.</p>
              </div>
            </li>
          </ul>

          <div className='w-[1604px] h-[627px] absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
        </div>

        <div className='mb-10'>
          <Video text={'Установка газовой системы от EVO HOME'} />
        </div>
      </main>

      <SystemLayoutCollection />
    </div>
  )
}

export default GasSystem;

