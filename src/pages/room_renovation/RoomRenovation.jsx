import React from 'react'
import { Link } from 'react-router-dom'
import Reasons from '../../components/Reasons'
import Projects from '../../components/room_renovation_components/Projects'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/room_renovation/image.jpg'
import vector_about_us_1 from'../../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from'../../assets/videos/abouts_us/vector2.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

// process images imports
import first_step from '../../assets/images/room_renovation/room_renovation/process/first_step.png'
import second_step from '../../assets/images/room_renovation/room_renovation/process/second_step.jpg'
import third_step from '../../assets/images/room_renovation/room_renovation/process/third_step.jpg'
import fourth_step from '../../assets/images/room_renovation/room_renovation/process/fourth_step.jpg'
import fifth_step from '../../assets/images/room_renovation/room_renovation/process/fifth_step.jpg'
import sixth_step from '../../assets/images/room_renovation/room_renovation/process/sixth_step.jpg'
import Calculator from '../../components/mainpage_components/Calculator'


const RoomRenovation = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1728px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт комнат</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' -violet-500 space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт комнат с EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[620px] flex flex-col justify-between '>
                    <p>Вы ищете надежное решение для ремонта комнат в вашем доме? Компания EvoHome, имеющая более чем 17-летний опыт работы в секторе строительства и ремонта, готова преобразить любое помещение, гарантируя вам исключительные результаты с 3-летней гарантией.</p>
                    <p>Будь то ремонт гостиной, чтобы сделать ее более уютной и функциональной, переделка спальни, чтобы превратить ее в оазис отдыха и комфорта, обновление спальни новыми интеллектуальными решениями для учебы и игр, ремонт коридора, чтобы сделать ваш дом более гостеприимным, модернизация лестницы, чтобы обеспечить безопасность и стиль, или полная трансформация ванных комнат и кухонь, чтобы адаптировать их к последним тенденциям дизайна и технологий, EvoHome станет для вас идеальным партнером.</p>
                    <p>Наша компания предоставляет услуги по ремонту помещений, предлагая решения от 5000 евро. Мы специализируемся на высококачественном ремонте в Риме и его окрестностях. Выбирая нашу команду, вы получаете экспертный подход и профессиональное управление проектом на всех этапах, от начальной фазы до завершения, что гарантирует точное и надежное соответствие вашим требованиям.</p>
                </div>

                {/* image */}
                <div className='w-[1641px] h-[661px] bg-blue-600/20'><img src={image} className='w-full h-full object-cover'/></div>
            </div>


            <div className='w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </div>

        {/* process */}

        <div className='w-full h-[4883px]  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto mb-20'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Процесс ремонта комнат с EvoHome</h1>
            </div>

            <div className=' w-[1641px] h-[3476px] mx-auto'>
               {/* list of steps */}
                <div className='relative'>
                    <div className='w-[1323px] h-[776px]  absolute top-[427px] left-[300px]'><img src={arrow_1} className='w-full h-full' /></div>
    
                    <ul className='h-[3476px] w-[1641px] flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[474px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px]  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>РЕМОНТ ГОСТИННОЙ</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Реставрация гостиной включает в себя удаление существующих покрытий, подготовку стен, укладку новых полов и установку дизайнерских потолков, а также замену электросистемы для адаптации помещения к современным потребностям. По желанию заказчика могут быть выполнены и другие работы.</p>
                            </div>

                            <div className='absolute top-[190px] left-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 1
                                <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                            </div>
                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[474px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px]  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>РЕМОНТ СПАЛЬНИ</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Ремонт спальни направлен на создание спокойной, расслабляющей обстановки, включая замену полов, обработку стен и потолков, а также обновление окон для лучшей изоляции и комфорта. По желанию заказчика могут быть добавлены дополнительные работы.</p>
                            </div>

                            <div className='absolute top-[800px] right-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 2
                                <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                            </div>
                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[474px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px]  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>РЕМОНТ ДЕСТКОЙ КОМНАТЫ</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Этот проект направлен на создание безопасного и стимулирующего пространства путем удаления старых полов, подготовки стен и потолка к отделке и установки подходящих решений по освещению. Возможны дополнительные работы по желанию заказчика.</p>
                            </div>

                            <div className='absolute top-[1390px] left-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 3
                                <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                            </div>
                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[474px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px] flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>РЕМОНТ КОРИДОРА</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Обновление коридора включает в себя укладку прочных напольных покрытий, установку новых потолочных оснований и отделку стен, а также замену электросистемы для создания яркой и теплой атмосферы. По запросу могут быть выполнены и другие индивидуальные работы.</p>
                            </div>
                            <div className='absolute top-[2000px] right-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 4
                                <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                            </div>
                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[483px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px] flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>РЕМОНТ КУХНИ</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Преобразование кухни требует особого внимания к электропроводке и сантехнике, удалению старой отделки, подготовке стен и потолков, а также установке новых полов и окон для создания функционального и уютного пространства. Возможность дополнительных работ по желанию заказчика.</p>
                            </div>

                            <div className='absolute top-[2590px] left-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 5
                                <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                            </div>
                        </li>

                        {/* 6 */}
                        <li className=' w-full h-[474px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={sixth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px] flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>РЕМОНТ ВАННОЙ КОМНАТЫ</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Этот тип ремонта является одним из самых сложных, учитывая необходимость надежной сантехники, замены электросистем, нанесения влагостойких материалов на стены и полы, а также установку эффективных систем вентиляции. По запросу могут быть добавлены дополнительные работы.</p>
                            </div>

                            <div className='absolute top-[3190px] right-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 6
                                <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                            </div>
                        </li>
                    </ul>
    
    
                    <div className='w-[1323px] h-[776px]  absolute top-[1630px] left-[300px]'><img src={arrow_1} className='w-full h-full' /></div>
                    <div className='absolute w-[1303px] h-[738px] top-[2820px] right-[10px]'><img src={arrow_2}/></div>
                </div> 
            </div>


            {/* video */}
            <div className=' w-full h-[1050px] flex flex-col justify-between  my-20 mx-auto'>
                <h1 className='text-[50px] font-bold text-center'>Ремонт квартир под ключ от EVO HOME</h1>
    
                {/* videos(instead of them just a div with any bg color) */}
                <div className='w-full h-[696px] relative flex flex-row'>
                    <div className='absolute  h-[853px] top-0 -z-10'><img src={vector_about_us_1} className='w-full h-full'/></div>
                    <div className='w-[1227px] h-[696px] bg-[#f5ab32] text-center mx-auto shadow-2xl '>
                        <iframe width="1227px" height="696px" src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
    
                    <div className='absolute h-[853px] bottom-0 right-0 -z-10'><img src={vector_about_us_2} className='w-full h-full'/></div>
                </div>
                
                <p className='text-[32px] w-[1641px] text-center mx-auto'>Компания EvoHome стремится превратить вашу квартиру в комфортную, функциональную и стильную среду, соблюдая установленные сроки и бюджет. Наш опыт, гарантия качества и индивидуальный подход делают нас идеальным партнером для вашего ремонта в Риме и его окрестностях. Свяжитесь с нами сегодня, чтобы начать свой проект с EvoHome.</p>
    
            </div>


            <div className='w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </div>

        {/* calculator */}
        <Calculator/>

        {/* reasons why */}

        <Reasons/>

        {/* projects */}
        <Projects/>

    </div>
  )
}

export default RoomRenovation