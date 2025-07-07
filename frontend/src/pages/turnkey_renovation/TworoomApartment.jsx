import React from 'react'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import Video from '../../components/Video'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/tworoom_apartment/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/tworoom_apartment/process/first_step.png'
import second_step from '../../assets/images/turnkey_renovation/tworoom_apartment/process/second_step.png'
import third_step from '../../assets/images/turnkey_renovation/designer_renovation/process/third_step.png'
import fourth_step from '../../assets/images/turnkey_renovation/designer_renovation/process/fourth_step.png'




const TworoomApartment = () => {
  return (
    <div>
        <Helmet>
            <title>Ремонт двухкомнатных квартир </title>
            <meta name="description" content="Renovation of tworoom apartments made by EVO Home" />
        </Helmet>
        {/* first step */}
        <header className='lg:w-[1641px] sm:w-full lg:h-[1450px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} alt='left decoration' loading="lazy"  className='w-[276px] h-[83px] sm:hidden lg:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Двух-комнатные квартиры</h1>

                <img src={right_decoration} alt='right decoration' loading="lazy"  className='w-[276px] h-[83px] sm:hidden lg:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h2 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4.5 lg:mt-0'>Двух-комнатные квартиры от EVO HOME</h2>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>В компании EvoHome, специализирующейся на ремонте двухкомнатных квартир, мы верим в силу преобразования любого пространства в идеальную среду обитания. Имея более чем 17-летний опыт работы в сфере ремонта, мы с гордостью предлагаем высококачественные услуги в Риме и его окрестностях. Наше обещание? Безупречный ремонт по цене от 500 евро за квадратный метр.</p>
                    <p>Мы создаем функциональные и стильные интерьеры для двухкомнатных квартир, учитывая ваши пожелания и современные тенденции. Оптимизируем пространство, подбираем качественные материалы и внедряем современные технологии, чтобы обеспечить уют и удобство. EVO HOME – ремонт, который делает вашу квартиру идеальным местом для жизни.</p>
                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='tworoom apartment' loading="lazy"  className='w-full h-full object-cover' /></div>

                <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>
        </header>

        {/* process */}

        <main className='lg:w-full lg:h-[3288px] flex flex-col justify-between'>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h2 className='sm:text-[24px] lg:text-[50px] font-bold sm:mt-5 lg:mt-0'>Подробнее о ремонте двух-комнатных квартир</h2>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Наш специалист проводит точные измерения непосредственно на месте. Если проект предусматривает реконструкцию помещений, мы определяем, какие стены можно модифицировать, обеспечивая при этом соблюдение действующих норм и максимальную безопасность.</p>

            {/* list of steps */}
            <div className='sm:h-[4200px] lg:h-[1860px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy"  className='w-full h-full' /></div>

                <ul className='sm:h-[4200px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step ' loading="lazy"  className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ИНДИВИДУАЛЬНОЕ ПЛАНИРОВАНИЕ</h2>

                            <p className='text-[26px] pb-5'>Мы разрабатываем уникальные проекты, адаптированные под ваш образ жизни, потребности и вкусы. Оптимизируем пространство, создаем удобные функциональные зоны, подбираем стильные материалы и современное освещение. Каждый интерьер продуман до мелочей, чтобы обеспечить комфорт, эстетику и практичность. EVO HOME – дизайн, в котором сочетаются стиль и удобство.</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy"  className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6 lg:px-0 '>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ОПТИМИЗАЦИЯ ПРОСТРАНСТВА</h2>

                            <p className='text-[26px] pb-5'>Мы разрабатываем функциональные решения, позволяющие эффективно использовать каждый квадратный метр. Грамотное зонирование, встроенная мебель, многоуровневое освещение и современные технологии помогают создать просторный, уютный и стильный интерьер. EVO HOME – продуманные пространства для комфортной жизни.</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy"  className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ВЫСОКОКАЧЕСТВЕННЫЕ МАТЕРИАЛЫ</h2>
                            <p className='text-[26px] pb-5'>Мы используем только проверенные и премиальные материалы, обеспечивающие прочность, экологичность и эстетическую привлекательность. Натуральное дерево, износостойкие покрытия, современные декоративные решения – все для создания уютного и долговечного интерьера. EVO HOME – качество, которое видно и ощущается.</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy"  className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ТЕХНОЛОГИИ "УМНОГО ДОМА"</h2>
                            <p className='text-[26px] pb-5'>Мы внедряем современные системы автоматизации, позволяющие управлять освещением, климатом, безопасностью и бытовой техникой через смартфон или голосовые команды. Интеллектуальные решения делают ваш дом удобным, энергоэффективным и надежным. EVO HOME – технологии будущего для вашего комфорта.</p>
                        </div>
                    </li>

                </ul>

                <div className='absolute w-[1303px] h-[460px] top-[1280px] scale-85 left-[280px] sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy"  className='w-full h-full'/></div>
            </div>

            <div className='mb-10'>
                <Video text={'Ремонт двух-комнатных квартир от EVO HOME'} />
            </div>
        </main>

        <LayoutCollection/>
        
    </div>
  )
}

export default TworoomApartment