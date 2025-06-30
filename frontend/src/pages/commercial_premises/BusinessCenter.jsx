import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/business_center/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/commercial_premises/business_center/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/business_center/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/business_center/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/business_center/process/fourth_step.png'
import fifth_step from '../../assets/images/commercial_premises/business_center/process/fifth_step.png'



const BusinessCenter = () => {
  return (
    <div>
        {/* first step */}
        <div className='lg:w-[1641px] sm:w-full lg:h-[1280px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Реновация бизнес-центра</h1>

                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Реновация бизнес-центра от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-4'>
                    <p>Успех бизнес-центра во многом зависит от его внешнего вида и функциональности. Грамотно спланированный и выполненный рестайлинг улучшает не только эстетику, но и безопасность и комфорт, тем самым повышая привлекательность для потенциальных арендаторов и посетителей.</p>
                    <p>Компания Evo Home предлагает комплексные услуги по ремонту «под ключ» бизнес-центров в Риме, гарантируя превосходные результаты благодаря более чем 17-летнему опыту работы в этом секторе.</p>
                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} className='w-full h-full object-cover' /></div>

                <div className='sm:w-full md:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
                    <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] md:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>
        </div>

        {/* process */}
      <div className='lg:w-full lg:h-[3688px]  flex flex-col justify-between'>
        {/* header */}
        <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
            <h1 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее о ремонте бизнес-центра</h1>
        </div>

        <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Реновация бизнес-центра требует соблюдения многочисленных правил безопасности и стандартов качества. Среди основных требований CVI:</p>

        {/* list of steps */}
        <div className='sm:h-[5550px] lg:h-[2260px] sm:w-full lg:w-auto relative mx-auto '>
            <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

            <ul className='sm:h-[5550px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                {/* 1 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>СИСТЕМЫ СВЯЗИ И ВЕНТИЛЯЦИИ</h1>

                        <p className='text-[26px] pb-5'>Установка высокоэффективных систем HVAC (отопления, вентиляции и кондиционирования воздуха) для обеспечения комфортной среды в любое время года.Автоматическое пожаротушение:<br className='lg:block'/>
                        Внедрение систем обнаружения дыма и тепла.
                        Предоставление автоматических систем пожаротушения, таких как спринклеры и системы инертного газа.</p>
                    </div>
                </li>

                {/* 2 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 '>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>СТРОИТЕЛЬНЫЕ МАТЕРИАЛЫ</h1>

                        <p className='text-[26px] pb-5'>Сертификаты качества: Использование сертифицированных CE материалов для обеспечения соответствия европейским стандартам.
                        Выбор экологически чистых и устойчивых материалов.Прочность и долговечность: Использование материалов с высокой огнестойкостью, таких как обработанная сталь и огнестойкая штукатурка.</p>
                    </div>
                </li>

                {/* 3 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ПОЖАРНАЯ БЕЗОПАСНОСТЬ</h1>
                        <p className='text-[26px] pb-5'>Системы обнаружения пожара: Установка дымовых и тепловых извещателей. Подключение к централизованным системам мониторинга.Системы сигнализации и эвакуации: Внедрение систем звукового и визуального оповещения для быстрой эвакуации. Системы спринклерного пожаротушения: Монтаж систем водяного, газового или пенного пожаротушения</p>
                    </div>
                </li>

                {/* 4 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ТЕХНОЛОГИЧЕСКИЕ ИНФРАСТРУКТУРЫ</h1>
                        <p className='text-[26px] pb-5'>ИТ-сети и связь: Проектирование и монтаж высокоскоростных проводных и беспроводных сетей. Внедрение систем кибербезопасности для защиты данных компании. Автоматизация зданий: Использование систем автоматизации для управления освещением, климатом и безопасностью.
                        </p>
                    </div>
                </li>

                {/* 5 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>СОБЛЮДЕНИЕ НОРМАТИВНЫХ ТРЕБОВАНИЙ</h1>
                        
                        <p className='text-[26px] pb-5'>Строительные нормы:Соблюдение местных и национальных строительных норм.
                            Получение всех необходимых разрешений перед началом работ.Правила безопасности:Соблюдение правил техники безопасности на рабочем месте и правил эксплуатации электросистем.
                            Обучение персонала действиям в чрезвычайных ситуациях и протоколам безопасности.</p>
                    </div>
                </li>
            </ul>

            <div className='w-[1604px] h-[627px] absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} className='w-full h-full' /></div>
        </div>

        <div className='mb-10'>
          <Video text={'Реновация бизнес-центра от EVO HOME'} />
        </div>
      </div>

        <CommercialPremisesLayoutCollection/>












    </div>
  )
}

export default BusinessCenter