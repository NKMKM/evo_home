import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

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
        {/* first step */}
        <div className=' w-[1641px] h-[1728px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт детской комнаты</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' -violet-500 space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт детской комнаты от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[550px] flex flex-col justify-around '>
                    <p>Вы ищете эксперта по ремонту детской комнаты в Риме или окрестностях? Evo Home — идеальное решение благодаря более чем 17-летнему опыту работы в сфере ремонта. Мы предлагаем полный спектр услуг по преобразованию комнаты вашего ребенка в безопасную, творческую и идеально соответствующую его потребностям среду. Начиная всего от 4000 евро , мы гарантируем качественный ремонт, который включает в себя не только ремонт детской комнаты, но и ремонт различных типов квартир, таких как студии , однокомнатные квартиры , двухкомнатные квартиры , четырехкомнатные квартиры и дуплексы .</p>
                    <p>Каждый проект выполняется с использованием высококачественных материалов и передовых технологий, что обеспечивает долговечный результат с 3-летней гарантией на выполненные работы.</p>

                </div>

                {/* image */}
                <div className='w-[1641px] h-[661px] bg-blue-600/20'><img src={image} className='h-full w-full '/></div>
            </div>


            <div className='w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </div>

        {/* process */}

        <div className='w-full h-[3806px]  flex flex-col justify-between  '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте спальни</h1>
            </div>

            <p className='w-[1640px] h-[163px] text-[32px] mx-auto '>Детская комната — это важная среда, которая существенно влияет на физическое, когнитивное и эмоциональное развитие малышей. В Риме наш подход к реконструкции направлен на создание безопасных, стимулирующих и комфортных пространств, индивидуально подобранных так, чтобы они идеально соответствовали потребностям каждого ребенка, будь то комната для мальчика или девочки.</p>
                
            {/* list of steps */}
            <div className='relative mx-auto '>
                <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>

                <ul className='h-[2270px] w-[1641px]  flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className=' w-full h-[384px] flex flex-row justify-between '>
                        {/* process photo */}
                        <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                            <div>
                                <h1 className='font-bold text-[46px]'>РАЗРАБОТКА ДИЗАЙН-ПРОЕКТА</h1>
                            </div>

                            <p className='text-[28px] p-light'>Наша методология начинается с разработки тщательного дизайна, разработанного в тесном сотрудничестве с родителями. Этот процесс позволяет нам учитывать индивидуальные потребности детей, проектируя пространства, способствующие игре, учебе и отдыху</p>
                        </div>


                    </li>

                    {/* 2 */}
                    <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                        {/* process photo */}
                        <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[46px] px-5'>ТЕМАТИЧЕСКАЯ ПЕРСОНАЛИЗАЦИЯ</h1>
                            </div>

                            <p className='text-[28px] p-light px-5'>Мы предлагаем индивидуальные решения, отражающие уникальные интересы каждого ребенка. Будь то принцесса или астронавт, каждая комната спроектирована так, чтобы стать безопасным и вдохновляющим местом, идеально подходящим для стимулирования творчества и личностного роста.</p>
                        </div>


                    </li>

                    {/* 3 */}
                    <li className=' w-full h-[384px] flex flex-row justify-between '>
                        {/* process photo */}
                        <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                            <div>
                                <h1 className='font-bold text-[48px]'>ЭКОЛОГИЧНОСТЬМАТЕРИАЛЫ</h1>
                            </div>

                            <p className='text-[28px] p-light'>Мы выбираем безопасные и экологичные материалы, такие как нетоксичные краски и мебель, разработанную таким образом, чтобы избежать травм, гарантируя полную безопасность окружающей среды для детей. Это особенно важно в детских комнатах, где каждая деталь должна способствовать созданию здоровой и стимулирующей обстановки.</p>
                        </div>


                    </li>

                    {/* 4 */}
                    <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                        {/* process photo */}
                        <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[48px] px-5'>ТЕХНОЛОГИИ И ИННОВАЦИИ</h1>
                            </div>

                            <p className='text-[28px] p-light px-5'>Внедрение современных технологий может улучшить детскую комнату, сделав ее более функциональным и приятным местом. Мы внедряем настраиваемые системы освещения и комфортные решения по отоплению, которые адаптируются к различным видам повседневной деятельности, способствуя созданию идеальной среды для развития ребенка.</p>
                        </div>

                    </li>

                    {/* 5 */}
                    <li className=' w-full h-[384px] flex flex-row justify-between'>
                        {/* process photo */}
                        <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                            <div>
                                <h1 className='font-bold text-[48px]'>ЗОНА ДЛЯ УЧЕБЫ</h1>
                            </div>

                            <p className='text-[28px] p-light'>Эта зона предназначена для стимулирования концентрации и обучения. Освещение в этой зоне имеет решающее значение, поэтому мы предлагаем решения, которые позволяют изменять интенсивность света в зависимости от времени суток и вида деятельности, тем самым защищая зрение детей от чрезмерного утомления.</p>
                        </div>


                    </li>

                </ul>


                <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
            </div> 



            {/* video */}
            <Video text={'Ремонт детской комнаты от EVO HOME'}/>



        </div>

        <LayoutCollection/>














    </div>
  )
}

export default ChildrenRoom