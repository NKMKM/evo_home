import React from 'react'
import Projects from '../../components/room_renovation_components/Projects'
import Calculator from '../../components/mainpage_components/Calculator'
import Reasons from '../../components/Reasons'
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
        <div className='lg:w-[1641px] sm:w-full lg:h-[1520px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Ремонт квартир под ключ</h1>

                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[32px] lg:text-[50px] font-bold sm:mt-3.5 lg:mt-0'>Ремонт квартиры с EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>Добро пожаловать на страницу компании EvoHome, предлагающей услуги по ремонту квартир «под ключ» — надежное и качественное решение для преображения вашей недвижимости. Имея более чем 17-летний опыт работы в сфере ремонта, компания EvoHome позиционирует себя как лидер на рынке, предлагая безупречные услуги по конкурентоспособным ценам, начиная всего от 500 евро/м2. Расположенная в самом сердце Рима, а также работающая в его очаровательных окрестностях, мы являемся идеальным выбором для тех, кто ищет профессионализм, эффективность и гарантированный результат.</p>
                    <p>Ремонт квартиры – это сложный и многозадачный процесс, требующий профессионального подхода. EVO HOME берет на себя все этапы работ, от разработки проекта до полной сдачи объекта. Вам не нужно искать подрядчиков, закупать материалы или контролировать рабочих – мы сделаем всё за вас!</p>
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

        {/* reasons why */}
        <div className='relative  w-full lg:h-[1098px] sm:my-10 lg:my-20'>     
            {/* header */}
            <div className='lg:w-[1640px] mx-auto h-[74px] bg-[#F9B33B] flex flex-row sm:mb-20'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-7 lg:mr-10'>2.</div>
                <h1 className='sm:text-[39px] lg:text-[50px] font-bold sm:mt-2 lg:mt-0'>Почему стоит выбрать нас</h1>
            </div>

            {/* vector */}

            <div className='absolute w-[1261px] h-[1418px] scale-60 -z-10 bottom-[38px] right-[1300px]'><img src={vector}/></div>

            {/* reasons */}
            <ul className='sm:w-full lg:w-[1641px] lg:h-[900px] flex flex-col justify-between  mx-auto '>
                
                <li className='w-full lg:h-[100px] border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row'>
                    <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[550px] h-[96px] bg-[#222222]'>ЛОЯЛЬНЫЕ ЦЕНЫ</div>
                    <p className='text-[30px] px-3 '>Мы предлагаем комплексные услуги по ремонту от 500 евро/м2, гарантируя отличное соотношение цены и качества.</p>
                </li>

                <li className='w-full lg:h-[100px] border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row'>
                    <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[650px] h-[96px] bg-[#222222]'>ДЕСЯТИЛЕТИЯ ОПЫТА</div>
                    <p className='text-[30px] px-3 '>Имея более чем 17-летний опыт работы в сфере ремонта, наша команда профессионалов готова воплотить в жизнь любое ваше желание.</p>
                </li>

                <li className='w-full lg:h-[100px] border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row'>
                    <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[610px] h-[96px] bg-[#222222]'>ГАРАНТИЯ КАЧЕСТВА</div>
                    <p className='text-[30px] px-3 '>Мы предоставляем 3-летнюю гарантию на каждую выполненную работу, гарантируя ваше полное удовлетворение и спокойствие.</p>
                </li>

                <li className='w-full lg:h-[100px] border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row'>
                    <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[540px] h-[96px] bg-[#222222]'>ГЕОГРАФИЧЕСКОЕ ПОКРЫТИЕ</div>
                    <p className='text-[30px] px-3 '>Мы работаем в Риме и его живописных окрестностях, гарантируя широкий спектр услуг и индивидуальный подход.</p>
                </li>

                <li className='w-full lg:h-[100px] border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row'>
                    <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[470px] h-[96px] bg-[#222222]'>ОПЛАТА ПО ЗАВЕРШЕНИЮ</div>
                    <p className='text-[30px] px-3 '>Оплата производится только по завершении работы, что гарантирует ваше полное удовлетворение.</p>
                </li>

                <li className='w-full lg:h-[100px] border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row'>
                    <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[500px] h-[96px] bg-[#222222]'>РАССРОЧКА БЕЗ ПРОЦЕНТОВ</div>
                    <p className='text-[30px] px-3 '>Мы предлагаем возможность беспроцентной рассрочки для облегчения финансирования вашего проекта.</p>
                </li>

                <li className='w-full lg:h-[100px] border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row'>
                    <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[630px] h-[96px] bg-[#222222]'>ОФИЦИАЛЬНЫЙ ДОГОВОР</div>
                    <p className='text-[30px] px-3 '>Каждое соглашение закрепляется официальным договором, что обеспечивает прозрачность и безопасность на каждом этапе работы.</p>
                </li>

            </ul>

            <hr className='mt-20 w-[1641px] mx-auto sm:hidden lg:block'/>

        </div>

        
        {/* calculator */}
        <div className='mb-20'>
            <Calculator/>
        </div>


        {/* process */}

        <div className='w-full sm:h-[5400px]  lg:h-[2802px]  flex flex-col justify-between '>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row lg:mb-20'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>3.</div>
                <h1 className='sm:text-[30px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Процесс ремонта квартир с EvoHome</h1>
            </div>

            {/* list of steps */}
            <div className='sm:h-[3400px]   lg:h-[1340px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='sm:h-[3400px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ПОДГОТОВКА К РАБОТЕ</h1>

                            <ul className='list-disc text-[28px] pl-12'>
                                  <li>Встреча с архитектором и замеры помещений квартиры.</li>
                                  <li>Составление предварительной сметы (точность 90%).</li>
                                  <li>Консультация и встреча с дизайнером интерьера.</li>
                                  <li>Разработка дизайна интерьера квартиры.</li>
                                  <li>Составление подробной сметы работ (фиксированная цена).</li>
                            </ul>
                        </div>

                        <div className='absolute sm:top-[200px] lg:top-[150px] left-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 1
                            <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col  py-5 px-6 lg:px-0 '>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>РЕНОВАНИЦОННЫЕ РАБОТЫ</h1>

                            <ul className='list-disc text-[21px] pl-12'>
                                  <li>Закупка и доставка сырья</li>
                                  <li>Снос и утилизация</li>
                                  <li>Строительство перегородок</li>
                                  <li>Строительство электрической системы</li>
                                  <li>Строительство системы кондиционирования воздуха</li>
                                  <li>Штукатурка стен и потолков</li>
                                  <li>Монтаж напольных / настенных покрытий и плинтусов</li>
                                  <li>Покраска потолков и стен</li>
                                  <li>Установка межкомнатных дверей.</li>
                                  <li>Уборка и вывоз строительного мусора.</li>
                            </ul>
                        </div>

                        <div className='absolute sm:top-[1390px] sm:right-[175px] lg:top-[640px] lg:right-[160px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 2
                            <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>СДАЧА КВАРТИРЫ</h1>

                            <ul className='list-disc text-[28px] pl-12'>
                                  <li>Монтаж осветительных приборов.</li>
                                  <li>Краны и аксессуары для сантехнического оборудования</li>
                                  <li>Закупка и сборка мебели, электроники и аксессуаров.</li>
                                  <li>Планировка квартиры согласно проекту.</li>
                                  <li>Финальная уборка от клининговой компании.</li>
                                  <li>Сдача ремонтных работ заказчику.</li>
                            </ul>
                        </div>
                        
                        <div className='absolute sm:top-[2510px] lg:top-[1100px] left-[170px] w-[291px] h-[110px] justify-center font-bold text-[50px] items-center flex bg-white'>ЭТАП 3
                            <div className='absolute bottom-0 right-0 w-[30px] h-[30px] bg-[#F9B33B] clip-path-triangle mb-2 mr-2' />
                        </div>
                    </li>

                </ul>

            </div>


            {/* video */}
            <div className=' w-full sm:h-[1600px] lg:h-[1050px] flex flex-col justify-between  my-20 mx-auto'>
                <h1 className='text-[50px] font-bold text-center'>Ремонт квартир под ключ от EVO HOME</h1>
    
                {/* videos(instead of them just a div with any bg color) */}
                <div className='w-full  h-[696px] relative flex flex-row'>
                    <div className='absolute  h-[853px] bottom-0 -z-10'><img src={vector_about_us_1} className='w-full h-full'/></div>
                    <div className='sm:w-[80%] lg:w-[1227px]  lg:h-[696px] bg-[#f5ab32] text-center mx-auto shadow-2xl '>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
    
                    <div className='absolute h-[853px] bottom-0 right-0 -z-10'><img src={vector_about_us_2} className='w-full h-full'/></div>
                </div>

                <div className='lg:w-[1641px] lg:h-[336px] sm:text-center lg:text-start flex flex-col space-y-5 my-10 mx-auto text-[30px]'>
                    <p>Компания EvoHome стремится превратить вашу квартиру в комфортную, функциональную и стильную среду, соблюдая установленные сроки и бюджет. Наш опыт, гарантия качества и индивидуальный подход делают нас идеальным партнером для вашего ремонта в Риме и его окрестностях. Свяжитесь с нами сегодня, чтобы начать свой проект с EvoHome.</p>
                </div>
                
                <div className='sm:w-full md:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] md:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
                </div>

    
            </div>


        </div>



        {/* projects */}
        <Projects/>

    </div>
  )
}

export default TurnkeyRenovation