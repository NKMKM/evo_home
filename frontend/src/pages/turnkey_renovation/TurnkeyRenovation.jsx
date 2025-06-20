import React from 'react'
import Projects from '../../components/room_renovation_components/Projects'
import Calculator from '../../components/mainpage_components/Calculator'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/turnkey_renovation/image.jpg'
import vector_about_us_1 from'../../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from'../../assets/videos/abouts_us/vector2.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import vector from '../../assets/images/room_renovation/room_renovation/vector.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/turnkey_renovation/process/first_step.jpg'
import second_step from '../../assets/images/turnkey_renovation/turnkey_renovation/process/second_step.jpg'
import third_step from '../../assets/images/turnkey_renovation/turnkey_renovation/process/third_step.jpg'


const TurnkeyRenovation = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1600px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт квартир под ключ</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' -violet-500 space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт квартиры с EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[470px] flex flex-col justify-between '>
                    <p>Добро пожаловать на страницу компании EvoHome, предлагающей услуги по ремонту квартир «под ключ» — надежное и качественное решение для преображения вашей недвижимости. Имея более чем 17-летний опыт работы в сфере ремонта, компания EvoHome позиционирует себя как лидер на рынке, предлагая безупречные услуги по конкурентоспособным ценам, начиная всего от 500 евро/м2. Расположенная в самом сердце Рима, а также работающая в его очаровательных окрестностях, мы являемся идеальным выбором для тех, кто ищет профессионализм, эффективность и гарантированный результат.</p>
                    <p>Ремонт квартиры – это сложный и многозадачный процесс, требующий профессионального подхода. EVO HOME берет на себя все этапы работ, от разработки проекта до полной сдачи объекта. Вам не нужно искать подрядчиков, закупать материалы или контролировать рабочих – мы сделаем всё за вас!</p>
                </div>

                {/* image */}
                <div className='w-[1641px] h-[661px] bg-blue-600/20'><img src={image} className='w-full h-full object-cover'/></div>
            </div>


            <div className='w-[1640px] h-[67px]  flex flex-row  mx-auto'>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B] my-auto'></div>

                <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B] my-auto'></div>
            </div>

        </div>

        {/* reasons why */}
        <div className='overflow-hidden'>
            <div className='relative  w-full h-[1098px] my-20'>     
                    {/* header */}
                    <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto mb-20'>
                        <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                        <h1 className='text-[50px] font-bold'>Почему стоит выбрать EvoHome для ремонта?</h1>
                    </div>

                    {/* vector */}

                    <div className='absolute w-[1261px] h-[1418px] -z-10 bottom-[559px] right-[1300px]'><img src={vector}/></div>

                    {/* reasons */}
                    <ul className='w-[1641px] h-[900px] flex flex-col justify-between  mx-auto '>
                        
                        <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                            <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[513px] h-[96px] bg-[#222222]'>ЛОЯЛЬНЫЕ ЦЕНЫ</div>
                            <p className='text-[30px] px-3 '>Мы предлагаем комплексные услуги по ремонту от 500 евро/м2, гарантируя отличное соотношение цены и качества.</p>
                        </li>

                        <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                            <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[603px] h-[96px] bg-[#222222]'>ДЕСЯТИЛЕТИЯ ОПЫТА</div>
                            <p className='text-[30px] px-3 '>Имея более чем 17-летний опыт работы в сфере ремонта, наша команда профессионалов готова воплотить в жизнь любое ваше желание.</p>
                        </li>

                        <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                            <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[567px] h-[96px] bg-[#222222]'>ГАРАНТИЯ КАЧЕСТВА</div>
                            <p className='text-[30px] px-3 '>Мы предоставляем 3-летнюю гарантию на каждую выполненную работу, гарантируя ваше полное удовлетворение и спокойствие.</p>
                        </li>

                        <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                            <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[510px] h-[96px] bg-[#222222]'>ГЕОГРАФИЧЕСКОЕ ПОКРЫТИЕ</div>
                            <p className='text-[30px] px-3 '>Мы работаем в Риме и его живописных окрестностях, гарантируя широкий спектр услуг и индивидуальный подход.</p>
                        </li>

                        <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                            <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[443px] h-[96px] bg-[#222222]'>ОПЛАТА ПО ЗАВЕРШЕНИЮ</div>
                            <p className='text-[30px] px-3 '>Оплата производится только по завершении работы, что гарантирует ваше полное удовлетворение.</p>
                        </li>

                        <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                            <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[473px] h-[96px] bg-[#222222]'>РАССРОЧКА БЕЗ ПРОЦЕНТОВ</div>
                            <p className='text-[30px] px-3 '>Мы предлагаем возможность беспроцентной рассрочки для облегчения финансирования вашего проекта.</p>
                        </li>

                        <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                            <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[603px] h-[96px] bg-[#222222]'>ОФИЦИАЛЬНЫЙ ДОГОВОР</div>
                            <p className='text-[30px] px-3 '>Каждое соглашение закрепляется официальным договором, что обеспечивает прозрачность и безопасность на каждом этапе работы.</p>
                        </li>

                    </ul>

                    <hr className='mt-20 w-[1641px] mx-auto'/>

                </div>
        </div>

        
        {/* calculator */}
        <div className='mb-20'>
            <Calculator/>
        </div>


        {/* process */}

        <div className='w-full h-[3202px]  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto mb-20'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>3.</div>
                <h1 className='text-[50px] font-bold'>Процесс ремонта квартир с EvoHome</h1>
            </div>

            <div className=' w-[1641px] h-[3476px] mx-auto'>
               {/* list of steps */}
                <div className='relative'>
                    <div className='w-[1323px] h-[776px]  absolute top-[427px] left-[300px]'><img src={arrow_1} className='w-full h-full' /></div>
    
                    <ul className=' h-[1670px] w-[1641px] flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[483px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px]  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>ПОДГОТОВКА К РАБОТЕ</h1>
                                </div>
    
                                <ul className='list-disc text-[30px] px-16'>
                                    <li>Встреча с архитектором и замеры помещений квартиры.</li>
                                    <li>Составление предварительной сметы (точность 90%).</li>
                                    <li>Консультация и встреча с дизайнером интерьера.</li>
                                    <li>Разработка дизайна интерьера квартиры.</li>
                                    <li>Составление подробной сметы работ (фиксированная цена).</li>
                                </ul>
                            </div>

                            <div className='absolute top-[190px] left-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 1
                                <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                            </div>
                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[483px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px]  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>РЕНОВАЦИОННЫЕ РАБОТЫ</h1>
                                </div>
                                <ul className='list-disc text-[24px] px-10'>
                                    <li>Закупка и доставка сырья</li>
                                    <li>Снос и утилизация</li>
                                    <li>Строительство перегородок</li>
                                    <li>Строительство электрической системы</li>
                                    <li>Строительство системы кондиционирования воздуха</li>
                                    <li>Штукатурка стен и потолков</li>
                                    <li>Монтаж напольных / настенных покрытий и плинтусов</li>
                                    <li>Покраска потолков и стен</li>
                                    <li>Установка межкомнатных дверей</li>
                                    <li>Уборка и вывоз строительного мусора</li>
                                </ul>
                            </div>

                            <div className='absolute top-[800px] right-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 2
                                <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                            </div>
                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[483px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[483px] border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[483px]  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>СДАЧА КВАРТИРЫ</h1>
                                </div>
    
                                <ul className='list-disc text-[30px] px-16'>
                                    <li>Монтаж осветительных приборов</li>
                                    <li>Краны и аксессуары для сантехнического оборудования</li>
                                    <li>Закупка и сборка мебели, электроники и аксессуаров</li>
                                    <li>Планировка квартиры согласно проекту</li>
                                    <li>Финальная уборка от клининговой компании</li>
                                    <li>Сдача ремонтных работ заказчику</li>
                                </ul>
                            </div>

                            <div className='absolute top-[1390px] left-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 3
                                <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                            </div>
                        </li>
    
                    </ul>
    
    

                </div> 
            </div>


            {/* video */}
            <div className=' w-full h-[1450px] flex flex-col space-y-10  my-20 mx-auto'>
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



        {/* projects */}
        <Projects/>

    </div>
  )
}

export default TurnkeyRenovation