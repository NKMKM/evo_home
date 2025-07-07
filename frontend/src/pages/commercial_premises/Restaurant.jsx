import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/restaurant/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/commercial_premises/restaurant/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/restaurant/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/restaurant/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/restaurant/process/fourth_step.jpg'
import fifth_step from '../../assets/images/commercial_premises/restaurant/process/fifth_step.jpg'


const Restaurant = () => {
  return (
    <div>
        <Helmet>
            <title>Реновация ресторанов и баров</title>
            <meta name="description" content="Renovation of restaurants and bars by EVO Home" />
        </Helmet>

        {/* first step */}
        <header className='lg:w-[1641px] sm:w-full lg:h-[1500px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Реновация баров и ресторанов</h1>

                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h2 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Реновация баров и ресторанов от EVO HOME</h2>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-4'>
                    <p>Каждая деталь имеет значение, когда речь идет о создании уникальной атмосферы в баре, кафе или ресторане. Речь идет не только о предложении превосходного меню, но и о создании гостеприимной и особой атмосферы, которая побуждает клиентов возвращаться. Имея более чем 17-летний опыт в сфере реконструкции баров, кафе и ресторанов в Риме, наша компания Evo Home предлагает индивидуальные решения, сочетающие в себе эстетику, функциональность и соответствие действующим нормам.</p>
                    <p>Мы являемся специалистами по высококачественному ремонту баров, кафе и ресторанов по цене от 350 евро за квадратный метр и от 20 000 евро за проект . Цена, согласованная в смете, фиксирована и не меняется, мы всегда гарантируем прозрачность и надежность. Мы заключаем официальный договор и предоставляем 3-летнюю гарантию . Мы начинаем работу в течение 48 часов с момента подписания договора, гарантируя быстрые сроки выполнения и превосходные результаты.</p>
                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='restaurant' loading="lazy" className='w-full h-full object-cover' /></div>

                <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>
        </header>

        {/* process */}
      <main className='sm:h-[6200px] lg:w-full lg:h-[3688px]  flex flex-col justify-between'>
        {/* header */}
        <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
            <h2 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее о ремонте баров и ресторанов</h2>
        </div>

        {/* list of steps */}
        <div className='sm:h-[4750px] lg:h-[2260px] sm:w-full lg:w-auto relative mx-auto '>
            <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full' /></div>

            <ul className='sm:h-[4750px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                {/* 1 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ТИП РЕМОНТА</h2>

                        <p className='text-[26px] pb-5'>Полная реконструкция: включает в себя глубокие структурные работы, такие как снос и реконструкция стен, замена систем и ремонт конструктивных элементов. Дизайнерский ремонт: этот ремонт, ориентированный на эстетические и функциональные аспекты, направлен на преобразование среды с помощью инновационных и высококачественных решений</p>
                    </div>
                </li>

                {/* 2 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 '>
                        <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ЦЕНА МАТЕРИАЛОВ</h2>

                        <p className='text-[26px] pb-5'>Бюджетный сегмент: качественные, но более дешевые материалы, подходящие для проектов с ограниченным бюджетом без особого ущерба для эстетики и функциональности. Премиум-сегмент: высококачественные материалы, гарантирующие максимальную эстетику, долговечность и производительность</p>
                    </div>
                </li>

                {/* 3 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>СРОЧНОСТЬ И ПОВЕРХНОСТЬ</h2>
                        <p className='text-[26px] pb-5'>Стандартные задания: сроки выполнения соответствуют запланированному графику, обеспечивая баланс между качеством и сроками.Срочная работа: ускоренная работа, требующая дополнительных ресурсов для минимизации простояБольшие поверхности: крупномасштабные проекты могут потребовать больших инвестиций</p>
                    </div>
                </li>

                {/* 4 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ЭЛЕКТРИЧЕСТВО И ВЕНТИЛЯЦИЯ</h2>
                        <p className='text-[26px] pb-5'>Мы устанавливаем современные системы электрики, вентиляции и отопления. Каждая система спроектирована таким образом, чтобы быть эффективной, безопасной и соответствовать действующим нормам.</p>
                    </div>
                </li>

                {/* 5 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ОБОРУДОВАНИЕ МЕБЕЛИ И АКСЕССУАРОВ</h2>
                        
                        <p className='text-[26px] pb-5'>Мы берем на себя доставку и установку оборудования, мебели и аксессуаров, гарантируя, что каждый элемент идеально впишется в общий дизайн помещения.</p>
                    </div>
                </li>
            </ul>

            <div className='w-[1604px] h-[627px] absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} className='w-full h-full' /></div>
        </div>

        <div className='mb-10'>
          <Video text={'Реновация баров и ресторанов от EVO HOME'} />
        </div>
      </main>

        <CommercialPremisesLayoutCollection/>












    </div>
  )
}

export default Restaurant