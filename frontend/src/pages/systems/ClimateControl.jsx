import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/climate_control/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/systems/climate_control/process/first_step.png'
import second_step from '../../assets/images/systems/climate_control/process/second_step.png'
import third_step from '../../assets/images/systems/climate_control/process/third_step.png'
import fourth_step from '../../assets/images/systems/climate_control/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/climate_control/process/fifth_step.png'

const ClimateControl = () => {
  return (
    <div>
      <Helmet>
          <title>Система климат-контроля</title>
          <meta name="description" content="Climate-control system made by EVO Home" />
      </Helmet>

      <header className='lg:w-[1641px] sm:w-full lg:h-[1447px] mx-auto my-20 flex flex-col justify-between'>
        <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
          <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
          <h1 className='font-bold text-center sm:text-[50px] lg:text-[57px]'>Система климат-контроля</h1>
          <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
        </div>

        <div className='space-y-10'>
          <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
            <h2 className='sm:text-[22px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Установка системы климат-контроля от EVO HOME</h2>
          </div>

          <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-4'>
            <p>Наша компания Evo Home имеет более чем 17-летний опыт установки систем вентиляции и кондиционирования воздуха в Риме, предлагая индивидуальные и инновационные решения для любых нужд. Мы специализируемся на установке систем как в жилых помещениях, таких как квартиры и частные дома, так и в коммерческих помещениях , включая офисы, магазины и корпоративные объекты.</p>
            <p>Мы гарантируем выполнение работ любой сложности, всегда гарантируя сертифицированное качество, скорость выполнения и полностью индивидуальный подход для наилучшего удовлетворения потребностей наших клиентов.</p>
          </div>

          <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='climate control' loading="lazy" className='w-full h-full object-cover' /></div>

          <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
            <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>
            <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
          </div>
        </div>
      </header>

      <main className='sm:h-[6150px]  lg:h-auto lg:w-full flex flex-col '>
        <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto sm:mb-20  flex flex-row'>
          <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
          <h2 className='sm:text-[28px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее о установке климат-контроля</h2>
        </div>

        <div className='sm:h-[4750px]  lg:h-[2470px]  sm:w-full lg:w-auto  relative mx-auto  lg:mb-30'>
          <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[380px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full' /></div>

          <ul className='sm:h-full  lg:h-full  sm:w-full  lg:w-[1641px]  flex flex-col justify-between space-y-20'>
            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={first_step} alt='arrow 1' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[46px]'>УСТАНОВКА НАСТЕННЫХ КОНДИЦИОНЕРОВ</h2>
                <p className='text-[26px]'>Мы устанавливаем настенные кондиционеры и мультисплит-системы, обеспечивая равномерное распределение воздуха, энергоэффективность и оптимальный комфорт для жилых помещений любого размера.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row-reverse justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[46px]'>УСТАНОВКА КАССЕТНЫХ КОНДИЦИОНЕРОВ</h2>
                <p className='text-[26px]'>Идеально подходящие для офисов и коммерческих помещений кассетные кондиционеры обеспечивают равномерное распределение воздуха благодаря интегрированной и незаметной конструкции для модульных потолков и подвесных потолков.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[48px]'>ОСМОТР ОБЪЕКТА</h2>
                <p className='text-[26px]'>Мы проводим профессиональные проверки для оценки конкретных потребностей, правильного подбора и оптимизации систем кондиционирования воздуха с учетом окружающей среды и тепловой нагрузки.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row-reverse justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[48px]'>НАПОЛЬНО-ПОТОЛОЧНЫЕ КОНДИЦИОНЕРЫ</h2>
                <p className='text-[26px]'>Эти универсальные системы идеально подходят для помещений с ограничениями по дизайну или сложной планировкой, предлагая эффективные решения как для жилых, так и для коммерческих помещений.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h2 className='font-bold sm:text-[42px] lg:text-[48px]'>СИСТЕМА КОНДИЦИОНИРОВАНИЯ ВОЗДУХА</h2>
                <p className='text-[26px]'>Мы проектируем и устанавливаем передовые системы для квартир, вилл, офисов и крупных коммерческих помещений, оптимизируя комфорт, энергоэффективность и климат-контроль.</p>
              </div>
            </li>
          </ul>

          <div className='w-[1604px] h-[627px] absolute top-[1420px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
        </div>

        <div className='mb-10'>
          <Video text={'Установка системы климат-контроля от EVO HOME'} />
        </div>
      </main>

      <SystemLayoutCollection />
    </div>
  )
}

export default ClimateControl
