import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// images imports
import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import left_yellow_decoration from '../assets/images/leftside_yellow_decoration.png'
import right_yellow_decoration from '../assets/images/rightside_yellow_decoration.png'
import van from '../assets/images/van.png'
import vector1 from '../assets/images/vector1.png'
import vector2 from '../assets/images/vector2.png'
import bill from '../assets/icons/bill.png'
import achievment from '../assets/icons/achieve.png'
import smart_home from '../assets/icons/smart_home.png'
import hands from '../assets/icons/hands.png'
import time from '../assets/icons/time.png'
import arrow_1 from '../assets/images/team_images/arrow_1.png'
import arrow_2 from '../assets/images/team_images/arrow_2.png'

import keys from '../assets/icons/keys.png'
import gears from '../assets/icons/gears.png'
import botique from '../assets/icons/botique.png'
import room from '../assets/icons/room.png'

import first_image from '../assets/images/about_us_achievments/first_image.png'
import second_image from '../assets/images/about_us_achievments/second_image.png'
import third_image from '../assets/images/about_us_achievments/third_image.png'
import fourth_image from '../assets/images/about_us_achievments/fourth_image.png'

import image1 from '../assets/images/about_us_achievments/image1.png'
import image2 from '../assets/images/about_us_achievments/image2.png'
import image3 from '../assets/images/about_us_achievments/image3.png'
import image4 from '../assets/images/about_us_achievments/image4.png'
import vector from '../assets/images/about_us_achievments/vector.png'

// team members photos import 
import founder from '../assets/images/team_images/founder.png'
import designer from '../assets/images/team_images/designer.png'
import project_manager from '../assets/images/team_images/project_manager.png'
import engineer from '../assets/images/team_images/engineer.png'

import Calculator from '../components/mainpage_components/Calculator'

import vector_about_us_1 from'../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from'../assets/videos/abouts_us/vector2.png'

const AboutUs = () => {
  return (
    <div>
        <Helmet>
            <title>О нас</title>
            <meta name="description" content="About EVO Home" />
        </Helmet>
        {/* about us block */}
        <header className='sm:w-full sm:h-[2270px] lg:w-[1641px] lg:h-[1243px] sm:px-5 lg:px-0 mx-auto mt-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] lg:w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block  '/>
                <div className=''>
                    <h1 className='font-bold text-center sm:text-[50px] lg:text-[57px]'>О строительной компании — Evo Home</h1>

                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>

            <div className='flex sm:flex-col lg:flex-row lg:w-[1639px]  sm:h-[1950px] lg:h-[914px] justify-between text-[32px]'>
                <div className=' flex flex-col sm:w-full lg:w-[804px] sm:h-[1200px] lg:h-[914px] sm:text-center lg:text-start  text-[30px] justify-between'>
                    <p>Добро пожаловать в «Evo Home» — вашего надежного партнера в мире строительства и ремонта. За <span className='text-[#F9B33B]'>более чем 17 лет работы</span>  наша компания зарекомендовала себя как лидер по предоставлению высококачественных услуг по строительству и ремонту в<span className='text-[#F9B33B]'>Риме и его окрестностях</span> </p>

                    <p>В « Evo Home » мы уверены, что строительство или ремонт вашего дома, квартиры или офиса должны оставить у вас только приятные воспоминания. Именно поэтому мы отказываемся от стандартных решений, предлагая <span className='text-[#F9B33B]'>индивидуальный подход к каждому проекту.</span></p>

                    <p>Наши специалисты по замерам тщательно учитывают характеристики вашего объекта при составлении сметы, что исключает возможность непредвиденных расходов. Наши дизайнеры внимательно выслушают ваши пожелания, чтобы воплотить вашу мечту в реальность, а наши строители строго следуют проекту, стараясь оправдать и даже превзойти все ваши ожидания.</p>
                </div>

                <div className='sm:w-full lg:w-[806px] lg:h-[914px]'><img src={van} alt='van' loading="lazy" className='w-full h-full'/></div>
            </div>
            
            <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            </div>


        </header>

        {/* benefits of company  */}
        <div className='relative sm:mt-10 lg:mb-40 sm:h-[2900px] lg:h-[826px]'>
            {/* vector 1 */}
            <div className='sm:bottom-[400px] sm:scale-150 lg:scale-100 lg:bottom-auto w-[515px] h-[823px] absolute '><img src={vector1} alt='vector 1' loading="lazy" className='w-full h-full'/></div>


            {/* header text         */}
            <div className='sm:w-full lg:w-[754px] h-[136px] mx-auto mb-40 '>
                <h2 className='text-[70px] font-bold text-center'>Наши ценности и преимущества</h2>
                <p className='text-[30px] italic text-center '>"EVO HOME – надежность, подтвержденная делом!"</p>
            </div>
            
            {/* list of Guarantees */}
            <div className=' lg:w-[1650px] mx-auto'>

                <ul className=' sm:h-[2500px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* 1 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={bill} alt='bill' loading="lazy" className='w-full h-full'/></div>
                            <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>ИНДВИДУАЛЬНЫЙ <br/> ПОДХОД</h2>
                            <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-3 text-center '>Каждый проект адаптирован под желания клиента — от планировки до мельчайших деталей интерьера.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] lg:left-[100px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>1</p> </div>
                    </li>

                    {/* 2 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={hands} alt='hands' loading="lazy" className='w-full h-full'/></div>
                            <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>ПРОЗРАЧНАЯ <br/> СМЕТА</h2>
                            <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>Честная стоимость без скрытых расходов — вы заранее знаете, за что платите.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] lg:left-[100px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>2</p> </div>
                    </li>

                    {/* 3 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={achievment} alt='achievment' loading="lazy" className='w-full h-full'/></div>
                            <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>ВЫСОКОКАЧЕСТВЕННЫЕ <br/> МАТЕРИАЛЫ</h2>
                            <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>Используем только проверенные и долговечные материалы от надежных поставщиков.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] lg:left-[100px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>3</p> </div>
                    </li>

                    {/* 4 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={hands} alt='hands' loading="lazy" className='w-full h-full'/></div>
                            <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>УМНЫЙ <br/> ДОМ</h2>
                            <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>Интеграция современных технологий для удобства, безопасности и энергосбережения в вашем доме.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] lg:left-[100px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>4</p> </div>
                    </li>

                    {/* 5 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={smart_home} alt='smart home icon' loading="lazy" className='w-full h-full'/></div>
                            <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>СОБЛЮДЕНИЕ <br/> СРОКОВ</h2>
                            <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>Гарантируем завершение работ в установленные сроки — без задержек и оправданий.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] lg:left-[110px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>5</p> </div>
                    </li>


                </ul>
            </div>

            {/* vector 2 */}
            <div className='w-[806px] h-[804px] sm:scale-125 lg:scale-100 right-0 sm:top-[300px] lg:top-0 absolute -z-10 '><img src={vector2} alt='vector 2' className='w-full h-full'/></div>

        </div>

        {/* our team */}
        <div className='sm:w-full lg:w-[1641px] lg:h-[1969px] mx-auto flex flex-col justify-between '>
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center  '>
                <img src={left_yellow_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block '/>
                <div className='sm:mx-auto lg:mx-0'>
                    <h2 className='font-bold text-center text-[57px]'>Команда EVO Home</h2>

                </div>
                <img src={right_yellow_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>
            
            {/* list of empolyees */}
            <div className='relative sm:mb-10 lg:mb-0'>
                <div className='sm:w-full lg:w-[1378px] sm:h-auto lg:h-[647px]  absolute top-[328px] left-[200px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='h-auto  lg:w-[1641px] sm:px-10 lg:px-0  space-y-20'>
                    {/* 1 */}
                    <li className=' w-full  sm:h-[900px] lg:h-[376px] flex sm:flex-col lg:flex-row justify-between '>
                        {/* empolyee photo */}
                        <div className='sm:w-full lg:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={founder} alt='founder' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] lg:h-[376px]  flex flex-col space-y-10 '>
                            <div>
                                <h2 className='font-bold text-[50px]'>ПЬЕТРО БОСТАН</h2>
                                <h3 className='font-light italic text-[40px]'>Директор и основатель EVO HOME</h3>
                            </div>

                            <p className='text-[32px] p-light'>Идейный вдохновитель компании. Курирует все этапы проектов — от концепции до финального результата. Более 17 лет опыта в строительстве и дизайне.</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className=' w-full sm:h-[900px] lg:h-[376px] flex sm:flex-col lg:flex-row-reverse justify-between border-b '>
                        {/* empolyee photo */}
                        <div className='sm:w-full lg:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={designer} alt='designer' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] lg:h-[376px] sm:text-end lg:text-start flex flex-col space-y-10 '>
                            <div>
                                <h2 className='font-bold text-[50px]'>АННА ВЕРДИНИ</h2>
                                <h3 className='font-light italic text-[40px]'>Ведущий Дизайнер Интерьеров</h3>
                            </div>

                            <p className='text-[32px] p-light'>Создаёт эксклюзивные концепции и визуализации. Специализируется на оптимизации пространства, сочетании стиля и функциональности.</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className=' w-full  sm:h-[900px] lg:h-[376px] flex sm:flex-col lg:flex-row justify-between '>
                        {/* empolyee photo */}
                        <div className='sm:w-full lg:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={project_manager} alt='project manager' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] lg:h-[376px]  flex flex-col space-y-10 '>
                            <div>
                                <h2 className='font-bold text-[50px]'>МАРКО ЛОМБАРДИ</h2>
                                <h3 className='font-light italic text-[40px]'>Руководитель проектов</h3>
                            </div>

                            <p className='text-[32px] p-light'>Контролирует процесс реализации — от планирования до сдачи объекта. Следит за сроками, коммуникацией с клиентами и качеством выполнения.</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className=' w-full sm:h-[850px] lg:h-[376px] flex sm:flex-col lg:flex-row-reverse justify-between border-b '>
                        {/* empolyee photo */}
                        <div className='sm:w-full lg:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={engineer} alt='engineer' loading="lazy"  className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] lg:h-[376px] sm:text-end lg:text-start flex flex-col space-y-10 '>
                            <div>
                                <h2 className='font-bold text-[50px]'>ФАБИО ЧЕККИ</h2>
                                <h3 className='font-light italic text-[40px]'>Главный инженер-строитель</h3>
                            </div>

                            <p className='text-[32px] p-light'>Отвечает за техническую реализацию проектов. Профессионал в области современных строительных технологий и инженерных решений.</p>
                        </div>
                    </li>

                </ul>



                <div className='absolute w-[1605px] h-[338px]  bottom-[120px] sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy"  /></div>
            </div>

            <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">СВЯЗАТЬСЯ</Link>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            </div>
        </div>  

        {/* our achievements */}
        
        <div className='sm:w-full lg:w-[1640px] sm:h-[4400px] lg:h-[938px] mx-auto my-10'>
            {/* header */}
            <div className='relative  sm:w-full lg:w-[1418px] h-[132px] text-center mx-auto mb-6 font-bold text-[#222222] items-center lg:border-r-[12px]  lg:border-r-[#E0E0E0] lg:border-l-[12px] lg:border-l-[#E0E0E0]'>
                <h2 className='sm:text-[66px] lg:text-[70px] absolute lg:top-[19px] lg:left-[410px] sm:px-5 lg:px-0 '>Наши достижения</h2>
                <div className=" flex flex-row ">
                    <div className='sm:hidden lg:block absolute top-[65px] w-[155px] h-[12px] bg-[#E0E0E0]'></div>
                    <div className='sm:hidden lg:block absolute top-[65px] right-0 w-[155px] h-[12px] bg-[#E0E0E0]'></div>
                </div>
            </div>

            {/* list of achievements */}

            <ul className=' flex sm:flex-col  lg:flex-row justify-between border-amber-600 sm:w-full lg:w-[1640px] sm:px-10 lg:px-0 sm:h-[4200px] lg:h-[778px] text-[22px] text-center'>
                {/* 1 */}
                <li className=' sm:w-full lg:w-[389px] lg:h-full '>
                    {/* photo */}
                    <div className='lg:w-[389px] h-1/2 '><img src={first_image} alt='first image' loading="lazy"  className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col lg:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[79px] lg:h-[79px] mx-auto'><img src={keys} alt='keys' loading="lazy"  className='w-full h-full'/></div>

                        <p className='sm:text-[30px] lg:text-[20px]'>В нашу команду входят более 30 высококвалифицированных специалистов , среди которых проектировщики, архитекторы-дизайнеры, инженеры и строители.</p>
                    </div>
                </li>

                {/* 2 */}
                <li className=' sm:w-full lg:w-[389px] lg:h-full '>
                    {/* photo */}
                    <div className='lg:w-[389px] h-1/2 '><img src={second_image} alt='secind image' loading="lazy"  className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col lg:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[79px] lg:h-[79px] mx-auto'><img src={room} alt='room' loading="lazy"  className='w-full h-full'/></div>

                        <p className='sm:text-[30px] lg:text-[20px]'>Мы работаем одновременно более чем над 7 проектами , общей площадью управляемой поверхности более 1000 м2 .</p>
                    </div>
                </li>

                {/* 3 */}
                <li className=' sm:w-full lg:w-[389px] lg:h-full '>
                    {/* photo */}
                    <div className='lg:w-[389px] h-1/2 '><img src={third_image} alt='third image' loading="lazy"  className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col lg:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[79px] lg:h-[79px] mx-auto'><img src={botique} alt='botique' className='w-full h-full'/></div>

                        <p className='sm:text-[30px] lg:text-[20px]'>Ежемесячно на различные строительные площадки поставляется более 30 тонн строительных материалов .</p>
                    </div>
                </li>

                {/* 4 */}
                <li className=' sm:w-full lg:w-[389px] lg:h-full '>
                    {/* photo */}
                    <div className='lg:w-[389px] h-1/2 '><img src={fourth_image} alt='fourth image' loading="lazy"  className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col lg:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[79px] lg:h-[79px] mx-auto'><img src={gears} alt='gears' loading="lazy"  className='w-full h-full'/></div>

                        <p className='sm:text-[30px] lg:text-[20px]'>За эти годы мы успешно реализовали более 100 проектов .</p>
                    </div>
                </li>




            </ul>

        </div>

        {/* grid */}

        <div className='relative lg:w-full lg:h-[1882px] sm:mt-20 lg:mt-0 mx-auto'>
            {/* vector */}
            <div className='absolute -z-10 top-[165px] h-[1727px] w-full overflow-hidden '><img src={vector} alt='vector' loading="lazy"  className='object-cover w-full h-full'/></div>
            
            {/* header */}
            <header className='h-[83px] sm:w-full lg:w-[1641px] mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} alt='left decoration' loading="lazy"  className='w-[276px] h-[83px] sm:hidden lg:block '/>
                <div className='sm:mx-auto lg:mx-0'>
                    <h1 className='font-bold text-center sm:text-[70px] lg:text-[57px]'>Почему нам доверяют</h1>
                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy"  className='w-[276px] h-[83px] sm:hidden lg:block '/>
            </header>
            
            {/* grid images */}
            <section className='sm:w-full lg:w-[1641px] lg:h-[1641px] sm:px-10 lg:px-0 grid sm:gap-y-10 lg:gap-y-0  sm:grid-cols-1 sm:grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 mx-auto mt-20'>

                {/* 1 */}
                <div className='sm:w-full sm:h-fit lg:w-[806px] lg:h-[806px]'><img src={image1} alt='image 1' loading="lazy"  className='w-full h-full'/></div>
                
                {/* 2 */}
                <div className='sm:w-full sm:h-fit lg:w-[806px] lg:h-[806px]'><img src={image2} alt='image 2' loading="lazy"  className='w-full h-full'/></div>
                
                {/* 3 */}
                <div className='sm:w-full sm:h-fit lg:w-[806px] lg:h-[806px]'><img src={image3} alt='image 3' loading="lazy"  className='w-full h-full'/></div>
                
                {/* 4 */}
                <div className='sm:w-full sm:h-fit lg:w-[806px] lg:h-[806px]'><img src={image4} alt='image 4' loading="lazy"  className='w-full h-full'/></div>

            </section>
        </div>
        
        {/* calculator */}
        <Calculator/>

        {/* videos */}
        <div className='w-full sm:h-[2550px]  lg:h-[909px] flex flex-col justify-between  my-20 mx-auto'>
            <h2 className='sm:text-[60px] lg:text-[50px] font-bold text-center'>Строим вместе с <br className='lg:hidden' />EVO HOME</h2>

            {/* videos(instead of them just a div with any bg color) */}
            <div className='w-full sm:h-[2700px] lg:h-[696px] relative flex sm:flex-col lg:flex-row'>
                <div className='absolute  h-[853px] sm:top-0 lg:bottom-0 -z-10'><img src={vector_about_us_1} alt='vector 1' loading="lazy"  className='w-full h-full'/></div>
                <div className='sm:w-full  lg:w-[1641px] sm:h-[2250px] lg:h-[696px] flex sm:flex-col lg:flex-row justify-between mx-auto'>
                    <div className='w-[527px] h-[696px] bg-[#f5ab32] text-center sm:mx-auto lg:mx-0'>video</div>
                    <div className='w-[527px] h-[696px] bg-[#f5ab32] text-center sm:mx-auto lg:mx-0'>video</div>
                    <div className='w-[527px] h-[696px] bg-[#f5ab32] text-center sm:mx-auto lg:mx-0'>video</div>
                </div>

                <div className='absolute h-[853px] sm:bottom-[46px] lg:bottom-0 right-0 -z-10'><img src={vector_about_us_2} alt='vector 2' loading="lazy"  className='w-full h-full'/></div>
            </div>
            


            <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </div>


    </div>
  )
}

export default AboutUs