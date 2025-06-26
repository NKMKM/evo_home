import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/floor_heating/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

import first_step from '../../assets/images/systems/floor_heating/process/first_step.png'
import second_step from '../../assets/images/systems/floor_heating/process/second_step.png'
import third_step from '../../assets/images/systems/floor_heating/process/third_step.png'
import fourth_step from '../../assets/images/systems/floor_heating/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/floor_heating/process/fifth_step.png'

const FloorHeating = () => {
  return (
    <div>
      <div className='lg:w-[1641px] sm:w-full lg:h-[1447px] mx-auto my-20 flex flex-col justify-between'>
        <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
          <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
          <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Система "Тёплый пол"</h1>
          <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
        </div>

        <div className='space-y-10'>
          <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
            <h1 className='sm:text-[24px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Установка системы "Тёплый пол" от EVO HOME</h1>
          </div>

          <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-4'>
            <p>Наша компания Evo Home имеет более чем 17-летний опыт работы в строительной отрасли в Риме и специализируется на проектировании и установке систем напольного отопления. Мы предлагаем современные и качественные решения, идеально подходящие для любого типа жилой среды , обеспечивающие благополучие и оптимизацию потребления энергии.</p>
            <p>В системе напольного отопления используется принцип равномерного распределения тепла. В отличие от традиционных радиаторов, которые генерируют неравномерное и сухое тепло, системы отопления «теплый пол» распределяют тепло равномерно, делая окружающую среду более комфортной. Благодаря циркуляции горячей воды в трубах, расположенных под полом, тепло передается вверх, сохраняя ноги в тепле, а воздух — приятно прохладным.</p>
          </div>

          <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} className='w-full h-full object-cover' /></div>

          <div className='sm:w-full md:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
            <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
            <Link to="/contacts" className="sm:w-[40%] md:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>
            <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
          </div>
        </div>
      </div>

      <div className='lg:w-full lg:h-[4088px]  flex flex-col justify-between'>
        <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
          <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
          <h1 className='sm:text-[24px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее об установке системы "Тёплый пол"</h1>
        </div>

        <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Правильно спроектированная и установленная газовая система состоит из нескольких основных элементов, каждый из которых должен быть выбран и размещен с особой тщательностью. Помимо жилых домов, газовые технологии также широко используются в коммерческих помещениях, таких как рестораны, гостиницы, офисы и спортзалы, где требования к энергосбережению и безопасности особенно высоки. Ниже представлен более подробный обзор основных компонентов с конкретными примерами применения.</p>

        <div className='sm:h-[5450px] lg:h-[2310px]  sm:w-full lg:w-auto relative mx-auto lg:mb-30'>
          <div className='lg:w-[1177px] lg:h-[646px]  absolute top-[380px] left-[420px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

          <ul className='sm:h-[4650px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between '>
            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h1 className='font-bold sm:text-[42px] lg:text-[46px]'>ПЕРВИЧНАЯ КОНСУЛЬТАЦИЯ И ОЦЕНКА</h1>
                <p className='text-[26px]'>Мы анализируем характеристики объекта и обсуждаем с клиентом потребности в отоплении. На этом этапе мы проводим тепловой анализ для правильного расчета размеров системы.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row-reverse justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h1 className='font-bold sm:text-[42px] lg:text-[46px]'>ДЕТАЛЬНОЕ ПРОЕКТИРОВАНИЕ</h1>
                <p className='text-[26px]'>Мы составляем точный план с расположением труб, установкой узлов управления и теплоизоляцией. Этот шаг имеет решающее значение для предотвращения потерь тепла и обеспечения оптимальной работы.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h1 className='font-bold sm:text-[42px] lg:text-[48px]'>НАГРЕВ ВОДЫ</h1>
                <p className='text-[26px]'>Водяной теплый пол представляет собой систему высокопрочных пластиковых труб, расположенных под поверхностью пола и залитых слоем стяжки. Нагретая вода, вырабатываемая котлом или тепловым насосом, циркулирует по этому контуру, равномерно распределяя тепло</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row-reverse justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h1 className='font-bold sm:text-[42px] lg:text-[48px]'>ЭЛЕКТРИЧЕСКОЕ ОТОПЛЕНИЕ</h1>
                <p className='text-[26px]'>В электрическом напольном отоплении используется нагревательный кабель, который можно вставить непосредственно в стяжку или закрепить на предварительно сформированной сетке. Система питается от электросети дома, а температура регулируется с помощью программируемого термостата, что обеспечивает точный контроль тепла.</p>
              </div>
            </li>

            <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between'>
              <div className='sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover' /></div>
              <div className='sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6'>
                <h1 className='font-bold sm:text-[42px] lg:text-[48px]'>ТЕСТЫ И ОКОНЧАТЕЛЬНЫЕ НАСТРОЙКИ</h1>
                <p className='text-[26px]'>Перед поставкой мы проводим функциональные испытания, чтобы убедиться, что система соответствует стандартам и работает эффективно. Кроме того, мы предоставляем инструкции по правильному обращению.</p>
              </div>
            </li>
          </ul>

          <div className='w-[1604px] h-[627px] absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} className='w-full h-full' /></div>
        </div>

        <div className='mb-10'>
          <Video text={'Установка система Теплый пол от EVO HOME'} />
        </div>
      </div>

      <SystemLayoutCollection />
    </div>
  )
}

export default FloorHeating;
