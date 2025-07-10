import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/sewage/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

import first_step from '../../assets/images/systems/sewage/process/first_step.png'
import second_step from '../../assets/images/systems/sewage/process/second_step.png'
import third_step from '../../assets/images/systems/sewage/process/third_step.png'
import fourth_step from '../../assets/images/systems/sewage/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/sewage/process/fifth_step.png'

const Sewage = () => {
  return (
    <div>
      <Helmet>
        <title>Система дренажа и канализации</title>
        <meta name="description" content="Sewage systems made by EVO Home" />
      </Helmet>

      <header className="lg:w-[1641px] sm:w-full lg:h-[1447px] mx-auto my-20 flex flex-col justify-between">
        <div className="h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0">
          <img src={left_decoration} alt='left decoration' loading="lazy" className="w-[276px] h-[83px] sm:hidden lg:block" />
          <h1 className="font-bold text-center sm:text-[50px] lg:text-[57px]">Система дренажа и канализации</h1>
          <img src={right_decoration} alt='right decoration' loading="lazy" className="w-[276px] h-[83px] sm:hidden lg:block" />
        </div>

        <div className="space-y-20">
          <div className="sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row">
            <div className="w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10">1.</div>
            <h2 className="sm:text-[25px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0">Установка системы дренажа и канализации </h2>
          </div>

          <div className="text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-4">
            <p>Наша компания Evo Home работает в сфере монтажа систем дренажа и канализации в Риме уже более 17 лет. Мы являемся лидерами в применении передовых технологий и соблюдении действующих норм, предлагая индивидуальные решения для удовлетворения потребностей каждого клиента.</p>
            <p>Правильно спроектированная система дренажа и канализации является важнейшим элементом безопасности, устойчивости и функциональности любого здания, будь то жилое или коммерческое . Тщательно продуманная конструкция обеспечивает эффективное управление сточными водами, сводя к минимуму риск возникновения проблем.</p>
          </div>

          <div className="sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20">
            <img src={image} alt='sewage system' loading="lazy" className="w-full h-full object-cover" />
          </div>

          <div className="sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto">
            <div className="sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
            <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>
            <div className="sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
          </div>
        </div>
      </header>

      <main className="sm:h-[5650px] lg:h-auto lg:w-full flex flex-col ">
        <div className="sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto sm:mb-20  flex flex-row">
          <div className="w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10">2.</div>
          <h2 className="sm:text-[24px] lg:text-[50px] font-bold  sm:mt-4 lg:mt-0">Подробнее о установке дренажа и канализации</h2>
        </div>

        <div className="sm:h-[5150px]  lg:h-[2470px]  sm:w-full lg:w-auto  relative mx-auto  lg:mb-30">
          <div className="lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[380px] left-[220px] sm:hidden lg:block">
            <img src={arrow_1} alt='arrow 1' loading="lazy" className="w-full h-full" />
          </div>

          <ul className="sm:h-full  lg:h-full  sm:w-full  lg:w-[1641px]  flex flex-col justify-between space-y-20">

            {/* 1 */}
            <li className="sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between">
              <div className="sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]">
                <img src={first_step} alt='first step' loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6">
                <h2 className="font-bold sm:text-[42px] lg:text-[46px]">ПЛАНИРОВАНИЕ И ДИЗАЙН</h2>
                <ul className="list-disc text-[30px] px-16">
                  <li>Анализ земельного участка и конкретных потребностей объекта недвижимости.</li>
                  <li>Детальное проектирование системы трубопроводов, обеспечивающее надлежащий поток и оптимизацию пространства.</li>
                </ul>
              </div>
            </li>

            {/* 2 */}
            <li className="sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row-reverse justify-between">
              <div className="sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]">
                <img src={second_step} alt='second step ' loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6">
                <h2 className="font-bold sm:text-[42px] lg:text-[46px]">МОНТАЖ ТРУБ</h2>
                <ul className="list-disc text-[30px] px-16">
                  <li>Размещение труб с оптимальным уклоном для отвода сточных вод.</li>
                  <li>Герметичные соединения и испытания под давлением для предотвращения утечек.</li>
                </ul>
              </div>
            </li>

            {/* 3 */}
            <li className="sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between">
              <div className="sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]">
                <img src={third_step} alt='third step' loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6">
                <h2 className="font-bold sm:text-[42px] lg:text-[48px]">СПЕЦИАЛЬНЫЕ КОМПОНЕНТЫ</h2>
                <ul className="list-disc text-[30px] px-16">
                  <li>Установка подъемных насосов для участков с неблагоприятными уклонами.</li>
                  <li>Монтаж сборных резервуаров и систем фильтрации для очистки сточных вод</li>
                </ul>
              </div>
            </li>

            {/* 4 */}
            <li className="sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row-reverse justify-between">
              <div className="sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]">
                <img src={fourth_step} alt='fourth step' loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6">
                <h2 className="font-bold sm:text-[42px] lg:text-[48px]">ОБЩЕСТВЕННАЯ КАНАЛИЗАЦИЯ</h2>
                <ul className="list-disc text-[30px] px-16">
                  <li>Проверьте местные правила и необходимые разрешения</li>
                  <li>Безопасное подключение к внешней сети, гарантирующее совместимость и функциональность.</li>
                </ul>
              </div>
            </li>

            {/* 5 */}
            <li className="sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 flex sm:flex-col lg:flex-row justify-between">
              <div className="sm:w-full lg:w-[667px] border-[5px] border-[#F9B33B]">
                <img src={fifth_step} alt='fifth step' loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="sm:w-full lg:w-[1082px] flex flex-col space-y-4 py-5 px-6">
                <h2 className="font-bold sm:text-[42px] lg:text-[48px]">ТЕСТИРОВАНИЕ И ПРОВЕРКА</h2>
                <ul className="list-disc text-[30px] px-16">
                  <li>Проверьте все компоненты, чтобы убедиться в их оптимальном функционировании.</li>
                  <li>Предоставление технической документации и помощь после установки.</li>
                </ul>
              </div>
            </li>

          </ul>

          <div className="w-[1604px] h-[627px] absolute top-[1435px] left-0 sm:hidden lg:block">
            <img src={arrow_2} alt='arrow 2' loading="lazy" className="w-full h-full" />
          </div>
        </div>

        <div className="mb-10">
          <Video text={'Установка системы дренажа и канализации от EVO HOME'} />
        </div>
      </main>

      <SystemLayoutCollection />
    </div>
  )
}

export default Sewage

