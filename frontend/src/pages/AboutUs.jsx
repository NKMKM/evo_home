import React from 'react'
import { Link } from 'react-router-dom'

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
        {/* about us block */}
        <div className='sm:w-full sm:h-[2270px] md:w-[1641px] md:h-[1243px] sm:px-5 md:px-0 mx-auto mt-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] md:w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block  '/>
                <div className=''>
                    <h1 className='font-bold text-center sm:text-[50px] md:text-[57px]'>О строительной компании — Evo Home</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block'/>
            </div>

            <div className='flex sm:flex-col md:flex-row md:w-[1639px]  sm:h-[1950px] md:h-[914px] justify-between text-[32px]'>
                <div className=' flex flex-col sm:w-full md:w-[804px] sm:h-[1200px] md:h-[914px] sm:text-center md:text-start  text-[30px] justify-between'>
                    <p>Добро пожаловать в «Evo Home» — вашего надежного партнера в мире строительства и ремонта. За <span className='text-[#F9B33B]'>более чем 17 лет работы</span>  наша компания зарекомендовала себя как лидер по предоставлению высококачественных услуг по строительству и ремонту в<span className='text-[#F9B33B]'>Риме и его окрестностях</span> </p>

                    <p>В « Evo Home » мы уверены, что строительство или ремонт вашего дома, квартиры или офиса должны оставить у вас только приятные воспоминания. Именно поэтому мы отказываемся от стандартных решений, предлагая <span className='text-[#F9B33B]'>индивидуальный подход к каждому проекту.</span></p>

                    <p>Наши специалисты по замерам тщательно учитывают характеристики вашего объекта при составлении сметы, что исключает возможность непредвиденных расходов. Наши дизайнеры внимательно выслушают ваши пожелания, чтобы воплотить вашу мечту в реальность, а наши строители строго следуют проекту, стараясь оправдать и даже превзойти все ваши ожидания.</p>
                </div>

                <div className='sm:w-full md:w-[806px] md:h-[914px]'><img src={van} className='w-full h-full'/></div>
            </div>
            
            <div className='sm:w-full md:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] md:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
            </div>


        </div>

        {/* benefits of company  */}
        <div className='relative sm:mt-10 md:mb-40 sm:h-[2900px] md:h-[826px]'>
            {/* vector 1 */}
            <div className='sm:bottom-[400px] sm:scale-150 md:scale-100 md:bottom-auto w-[515px] h-[823px] absolute '><img src={vector1} className='w-full h-full'/></div>


            {/* header text         */}
            <div className='sm:w-full md:w-[754px] h-[136px] mx-auto mb-40 '>
                <h1 className='text-[70px] font-bold text-center'>Наши ценности и преимущества</h1>
                <p className='text-[30px] italic text-center '>"EVO HOME – надежность, подтвержденная делом!"</p>
            </div>
            
            {/* list of Guarantees */}
            <div className=' md:w-[1650px] mx-auto'>

                <ul className=' sm:h-[2500px] flex sm:flex-col md:flex-row justify-between'>
                    {/* 1 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] mx-auto '><img src={bill} className='w-full h-full'/></div>
                            <h1 className='sm:text-[30px] md:text-[22px] font-semibold text-center'>ИНДВИДУАЛЬНЫЙ <br/> ПОДХОД</h1>
                            <p className='bg-[#d7e4ef] sm:text-[22px] md:text-[17px] w-full h-[117px] p-3 text-center '>Каждый проект адаптирован под желания клиента — от планировки до мельчайших деталей интерьера.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] md:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>1</p> </div>
                    </li>

                    {/* 2 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] mx-auto '><img src={hands} className='w-full h-full'/></div>
                            <h1 className='sm:text-[30px] md:text-[22px] font-semibold text-center'>ПРОЗРАЧНАЯ <br/> СМЕТА</h1>
                            <p className='bg-[#d7e4ef] sm:text-[22px] md:text-[17px] w-full h-[117px] p-4 text-center '>Честная стоимость без скрытых расходов — вы заранее знаете, за что платите.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] md:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>2</p> </div>
                    </li>

                    {/* 3 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] mx-auto '><img src={achievment} className='w-full h-full'/></div>
                            <h1 className='sm:text-[30px] md:text-[22px] font-semibold text-center'>ВЫСОКОКАЧЕСТВЕННЫЕ <br/> МАТЕРИАЛЫ</h1>
                            <p className='bg-[#d7e4ef] sm:text-[22px] md:text-[17px] w-full h-[117px] p-4 text-center '>Используем только проверенные и долговечные материалы от надежных поставщиков.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] md:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>3</p> </div>
                    </li>

                    {/* 4 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] mx-auto '><img src={hands} className='w-full h-full'/></div>
                            <h1 className='sm:text-[30px] md:text-[22px] font-semibold text-center'>УМНЫЙ <br/> ДОМ</h1>
                            <p className='bg-[#d7e4ef] sm:text-[22px] md:text-[17px] w-full h-[117px] p-4 text-center '>Интеграция современных технологий для удобства, безопасности и энергосбережения в вашем доме.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] md:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>4</p> </div>
                    </li>

                    {/* 5 */}
                    <li className=' relative sm:w-[90%] sm:mx-auto md:mx-0 md:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='sm:w-[100px] sm:h-[100px] md:w-[64px] md:h-[64px] mx-auto '><img src={smart_home} className='w-full h-full'/></div>
                            <h1 className='sm:text-[30px] md:text-[22px] font-semibold text-center'>СОБЛЮДЕНИЕ <br/> СРОКОВ</h1>
                            <p className='bg-[#d7e4ef] sm:text-[22px] md:text-[17px] w-full h-[117px] p-4 text-center '>Гарантируем завершение работ в установленные сроки — без задержек и оправданий.</p>

                        </div>

                        <div className='absolute top-[385px] sm:left-[270px] md:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>5</p> </div>
                    </li>


                </ul>
            </div>

            {/* vector 2 */}
            <div className='w-[806px] h-[804px] sm:scale-125 md:scale-100 right-0 sm:top-[300px] md:top-0 absolute -z-10 '><img src={vector2} className='w-full h-full'/></div>

        </div>

        {/* our team */}
        <div className='sm:w-full md:w-[1641px] md:h-[1969px] mx-auto flex flex-col justify-between '>
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center  '>
                <img src={left_yellow_decoration} className='w-[276px] h-[83px] sm:hidden md:block '/>
                <div className='sm:mx-auto md:mx-0'>
                    <h1 className='font-bold text-center text-[57px]'>Команда EVO Home</h1>

                </div>
                <img src={right_yellow_decoration} className='w-[276px] h-[83px] sm:hidden md:block'/>
            </div>
            
            {/* list of empolyees */}
            <div className='relative sm:mb-10 md:mb-0'>
                <div className='sm:w-full md:w-[1378px] sm:h-auto md:h-[647px]  absolute top-[328px] left-[200px] sm:hidden md:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='h-auto  md:w-[1641px] sm:px-10 md:px-0  space-y-20'>
                    {/* 1 */}
                    <li className=' w-full  sm:h-[900px] md:h-[376px] flex sm:flex-col md:flex-row justify-between '>
                        {/* empolyee photo */}
                        <div className='sm:w-full md:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={founder} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full md:w-[1082px] md:h-[376px]  flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[50px]'>ПЬЕТРО БОСТАН</h1>
                                <h2 className='font-light italic text-[40px]'>Директор и основатель EVO HOME</h2>
                            </div>

                            <p className='text-[32px] p-light'>Идейный вдохновитель компании. Курирует все этапы проектов — от концепции до финального результата. Более 17 лет опыта в строительстве и дизайне.</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className=' w-full sm:h-[900px] md:h-[376px] flex sm:flex-col md:flex-row-reverse justify-between border-b '>
                        {/* empolyee photo */}
                        <div className='sm:w-full md:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={designer} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full md:w-[1082px] md:h-[376px] sm:text-end md:text-start flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[50px]'>АННА ВЕРДИНИ</h1>
                                <h2 className='font-light italic text-[40px]'>Ведущий Дизайнер Интерьеров</h2>
                            </div>

                            <p className='text-[32px] p-light'>Создаёт эксклюзивные концепции и визуализации. Специализируется на оптимизации пространства, сочетании стиля и функциональности.</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className=' w-full  sm:h-[900px] md:h-[376px] flex sm:flex-col md:flex-row justify-between '>
                        {/* empolyee photo */}
                        <div className='sm:w-full md:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={project_manager} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full md:w-[1082px] md:h-[376px]  flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[50px]'>МАРКО ЛОМБАРДИ</h1>
                                <h2 className='font-light italic text-[40px]'>Руководитель проектов</h2>
                            </div>

                            <p className='text-[32px] p-light'>Контролирует процесс реализации — от планирования до сдачи объекта. Следит за сроками, коммуникацией с клиентами и качеством выполнения.</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className=' w-full sm:h-[850px] md:h-[376px] flex sm:flex-col md:flex-row-reverse justify-between border-b '>
                        {/* empolyee photo */}
                        <div className='sm:w-full md:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={engineer} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full md:w-[1082px] md:h-[376px] sm:text-end md:text-start flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[50px]'>ФАБИО ЧЕККИ</h1>
                                <h2 className='font-light italic text-[40px]'>Главный инженер-строитель</h2>
                            </div>

                            <p className='text-[32px] p-light'>Отвечает за техническую реализацию проектов. Профессионал в области современных строительных технологий и инженерных решений.</p>
                        </div>
                    </li>

                </ul>



                <div className='absolute w-[1605px] h-[338px]  bottom-[120px] sm:hidden md:block'><img src={arrow_2}/></div>
            </div>

            <div className='sm:w-full md:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] md:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">СВЯЗАТЬСЯ</Link>

                <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
            </div>
        </div>  

        {/* our achievements */}
        
        <div className='sm:w-full md:w-[1640px] sm:h-[4400px] md:h-[938px] mx-auto my-10'>
            {/* header */}
            <div className='relative  sm:w-full md:w-[1418px] h-[132px] text-center mx-auto mb-6 font-bold text-[#222222] items-center md:border-r-[12px]  md:border-r-[#E0E0E0] md:border-l-[12px] md:border-l-[#E0E0E0]'>
                <h1 className='sm:text-[66px] md:text-[70px] absolute md:top-[19px] md:left-[410px] sm:px-5 md:px-0 '>Наши достижения</h1>
                <div className=" flex flex-row ">
                    <div className='sm:hidden md:block absolute top-[65px] w-[155px] h-[12px] bg-[#E0E0E0]'></div>
                    <div className='sm:hidden md:block absolute top-[65px] right-0 w-[155px] h-[12px] bg-[#E0E0E0]'></div>
                </div>
            </div>

            {/* list of achievements */}

            <ul className=' flex sm:flex-col  md:flex-row justify-between border-amber-600 sm:w-full md:w-[1640px] sm:px-10 md:px-0 sm:h-[4200px] md:h-[778px] text-[22px] text-center'>
                {/* 1 */}
                <li className=' sm:w-full md:w-[389px] md:h-full '>
                    {/* photo */}
                    <div className='md:w-[389px] h-1/2 '><img src={first_image} className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col md:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] md:w-[79px] md:h-[79px] mx-auto'><img src={keys} className='w-full h-full'/></div>

                        <p className='sm:text-[30px] md:text-[20px]'>В нашу команду входят более 30 высококвалифицированных специалистов , среди которых проектировщики, архитекторы-дизайнеры, инженеры и строители.</p>
                    </div>
                </li>

                {/* 2 */}
                <li className=' sm:w-full md:w-[389px] md:h-full '>
                    {/* photo */}
                    <div className='md:w-[389px] h-1/2 '><img src={second_image} className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col md:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] md:w-[79px] md:h-[79px] mx-auto'><img src={room} className='w-full h-full'/></div>

                        <p className='sm:text-[30px] md:text-[20px]'>Мы работаем одновременно более чем над 7 проектами , общей площадью управляемой поверхности более 1000 м2 .</p>
                    </div>
                </li>

                {/* 3 */}
                <li className=' sm:w-full md:w-[389px] md:h-full '>
                    {/* photo */}
                    <div className='md:w-[389px] h-1/2 '><img src={third_image} className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col md:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] md:w-[79px] md:h-[79px] mx-auto'><img src={botique} className='w-full h-full'/></div>

                        <p className='sm:text-[30px] md:text-[20px]'>Ежемесячно на различные строительные площадки поставляется более 30 тонн строительных материалов .</p>
                    </div>
                </li>

                {/* 4 */}
                <li className=' sm:w-full md:w-[389px] md:h-full '>
                    {/* photo */}
                    <div className='md:w-[389px] h-1/2 '><img src={fourth_image} className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col md:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] md:w-[79px] md:h-[79px] mx-auto'><img src={gears} className='w-full h-full'/></div>

                        <p className='sm:text-[30px] md:text-[20px]'>За эти годы мы успешно реализовали более 100 проектов .</p>
                    </div>
                </li>




            </ul>

        </div>

        {/* grid */}

        <div className='relative md:w-full md:h-[1882px] sm:mt-20 md:mt-0 mx-auto'>
            {/* vector */}
            <div className='absolute -z-10 top-[165px] h-[1727px] w-full overflow-hidden '><img src={vector} className='object-cover w-full h-full'/></div>
            
            {/* header */}
            <div className='h-[83px] sm:w-full md:w-[1641px] mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block '/>
                <div className='sm:mx-auto md:mx-0'>
                    <h1 className='font-bold text-center sm:text-[70px] md:text-[57px]'>Почему нам доверяют</h1>
                </div>
                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block '/>
            </div>
            
            {/* grid images */}
            <div className='sm:w-full md:w-[1641px] md:h-[1641px] sm:px-10 md:px-0 grid sm:gap-y-10 md:gap-y-0  sm:grid-cols-1 sm:grid-rows-4 md:grid-cols-2 md:grid-rows-2 mx-auto mt-20'>

                {/* 1 */}
                <div className='sm:w-full sm:h-fit md:w-[806px] md:h-[806px]'><img src={image1} className='w-full h-full'/></div>
                
                {/* 2 */}
                <div className='sm:w-full sm:h-fit md:w-[806px] md:h-[806px]'><img src={image2} className='w-full h-full'/></div>
                
                {/* 3 */}
                <div className='sm:w-full sm:h-fit md:w-[806px] md:h-[806px]'><img src={image3} className='w-full h-full'/></div>
                
                {/* 4 */}
                <div className='sm:w-full sm:h-fit md:w-[806px] md:h-[806px]'><img src={image4} className='w-full h-full'/></div>

            </div>
        </div>
        
        {/* calculator */}
        <Calculator/>

        {/* videos */}
        <div className='w-full sm:h-[2550px]  md:h-[909px] flex flex-col justify-between  my-20 mx-auto'>
            <h1 className='sm:text-[60px] md:text-[50px] font-bold text-center'>Строим вместе с <br className='md:hidden' />EVO HOME</h1>

            {/* videos(instead of them just a div with any bg color) */}
            <div className='w-full sm:h-[2700px] md:h-[696px] relative flex sm:flex-col md:flex-row'>
                <div className='absolute  h-[853px] sm:top-0 md:bottom-0 -z-10'><img src={vector_about_us_1} className='w-full h-full'/></div>
                <div className='sm:w-full  md:w-[1641px] sm:h-[2250px] md:h-[696px] flex sm:flex-col md:flex-row justify-between mx-auto'>
                    <div className='w-[527px] h-[696px] bg-[#f5ab32] text-center sm:mx-auto md:mx-0'>video</div>
                    <div className='w-[527px] h-[696px] bg-[#f5ab32] text-center sm:mx-auto md:mx-0'>video</div>
                    <div className='w-[527px] h-[696px] bg-[#f5ab32] text-center sm:mx-auto md:mx-0'>video</div>
                </div>

                <div className='absolute h-[853px] sm:bottom-[46px] md:bottom-0 right-0 -z-10'><img src={vector_about_us_2} className='w-full h-full'/></div>
            </div>
            


            <div className='sm:w-full md:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] md:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </div>


    </div>
  )
}

export default AboutUs