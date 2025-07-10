import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/children_room/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/room_renovation/children_room/process/first_step.jpg'
import second_step from '../../assets/images/room_renovation/children_room/process/second_step.png'
import third_step from '../../assets/images/room_renovation/children_room/process/third_step.png'
import fourth_step from '../../assets/images/room_renovation/children_room/process/fourth_step.png'
import fifth_step from '../../assets/images/room_renovation/children_room/process/fifth_step.png'


const ChildrenRoom = () => {
  return (
    <div>
        <Helmet>
            <title>Реновация детской комнаты</title>
            <meta name="description" content="Renovation of children rooms by EVO Home" />
        </Helmet>
        {/* first step */}
        <header className='lg:w-[1641px] sm:w-full lg:h-[1450px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Ремонт детской комнаты</h1>

                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h2 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-5 lg:mt-0'>Ремонт детской комнаты от EVO HOME</h2>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>Вы ищете эксперта по ремонту детской комнаты в Риме или окрестностях? Evo Home — идеальное решение благодаря более чем 17-летнему опыту работы в сфере ремонта. Мы предлагаем полный спектр услуг по преобразованию комнаты вашего ребенка в безопасную, творческую и идеально соответствующую его потребностям среду. Начиная всего от 4000 евро , мы гарантируем качественный ремонт, который включает в себя не только ремонт детской комнаты, но и ремонт различных типов квартир, таких как студии , однокомнатные квартиры , двухкомнатные квартиры , четырехкомнатные квартиры и дуплексы .</p>
                    <p>Каждый проект выполняется с использованием высококачественных материалов и передовых технологий, что обеспечивает долговечный результат с 3-летней гарантией на выполненные работы.</p>
                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='children room' loading="lazy" className='w-full h-full object-cover' /></div>

                <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>
        </header>

        {/* process */}
        <main className='lg:w-full sm:h-[7000px]  lg:h-[3788px]  flex flex-col justify-between'>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h2 className='sm:text-[21px] lg:text-[50px] font-bold sm:mt-6 lg:mt-0'>Подробнее о ремонте детской комнаты от EVO HOME </h2>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Детская комната — это важная среда, которая существенно влияет на физическое, когнитивное и эмоциональное развитие малышей. В Риме наш подход к реконструкции направлен на создание безопасных, стимулирующих и комфортных пространств, индивидуально подобранных так, чтобы они идеально соответствовали потребностям каждого ребенка, будь то комната для мальчика или девочки.</p>

            {/* list of steps */}
            <div className='sm:h-[4950px]  lg:h-[2260px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full' /></div>

                <ul className='sm:h-[4950px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>РАЗРАБОТКА ДИЗАЙН-ПРОЕКТА</h2>

                            <p className='text-[26px] pb-5'>Наша методология начинается с разработки тщательного дизайна, разработанного в тесном сотрудничестве с родителями. Этот процесс позволяет нам учитывать индивидуальные потребности детей, проектируя пространства, способствующие игре, учебе и отдыху</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6 lg:px-0 '>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ТЕМАТИЧЕСКАЯ ПЕРСОНАЛИЗАЦИЯ</h2>

                            <p className='text-[26px] pb-5'>Мы предлагаем индивидуальные решения, отражающие уникальные интересы каждого ребенка. Будь то принцесса или астронавт, каждая комната спроектирована так, чтобы стать безопасным и вдохновляющим местом, идеально подходящим для стимулирования творчества и личностного роста.</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ЭКОЛОГИЧНОСТЬ МАТЕРИАЛОВ</h2>
                            <p className='text-[26px] pb-5'>Мы выбираем безопасные и экологичные материалы, такие как нетоксичные краски и мебель, разработанную таким образом, чтобы избежать травм, гарантируя полную безопасность окружающей среды для детей. Это особенно важно в детских комнатах, где каждая деталь должна способствовать созданию здоровой и стимулирующей обстановки.</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ТЕХНОЛОГИИ И ИННОВАЦИИ</h2>
                            <p className='text-[26px] pb-5'>Внедрение современных технологий может улучшить детскую комнату, сделав ее более функциональным и приятным местом. Мы внедряем настраиваемые системы освещения и комфортные решения по отоплению, которые адаптируются к различным видам повседневной деятельности, способствуя созданию идеальной среды для развития ребенка.</p>
                        </div>
                    </li>

                    {/* 5 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ЗОНА ДЛЯ УЧЕБЫ</h2>
                            
                            <p className='text-[26px] pb-5'>Эта зона предназначена для стимулирования концентрации и обучения. Освещение в этой зоне имеет решающее значение, поэтому мы предлагаем решения, которые позволяют изменять интенсивность света в зависимости от времени суток и вида деятельности, тем самым защищая зрение детей от чрезмерного утомления.</p>
                        </div>
                    </li>
                </ul>

                <div className='w-[1604px] h-[627px] absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
            </div>

            <div className='mb-10'>
                <Video text={'Ремонт детской комнаты от EVO HOME'} />
            </div>
        </main>

        <LayoutCollection/>












    </div>
  )
}

export default ChildrenRoom