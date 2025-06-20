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
        <div className='w-[1641px] h-[1243px]  mx-auto mt-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>О строительной компании — Evo Home</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>

            <div className='flex flex-row w-[1639px] h-[914px] justify-between text-[32px]'>
                <div className=' flex flex-col w-[804px] h-[914px] text-[30px] justify-between'>
                    <p>Добро пожаловать в «Evo Home» — вашего надежного партнера в мире строительства и ремонта. За <span className='text-[#F9B33B]'>более чем 17 лет работы</span>  наша компания зарекомендовала себя как лидер по предоставлению высококачественных услуг по строительству и ремонту в<span className='text-[#F9B33B]'>Риме и его окрестностях</span> </p>

                    <p>В « Evo Home » мы уверены, что строительство или ремонт вашего дома, квартиры или офиса должны оставить у вас только приятные воспоминания. Именно поэтому мы отказываемся от стандартных решений, предлагая <span className='text-[#F9B33B]'>индивидуальный подход к каждому проекту.</span></p>

                    <p>Наши специалисты по замерам тщательно учитывают характеристики вашего объекта при составлении сметы, что исключает возможность непредвиденных расходов. Наши дизайнеры внимательно выслушают ваши пожелания, чтобы воплотить вашу мечту в реальность, а наши строители строго следуют проекту, стараясь оправдать и даже превзойти все ваши ожидания.</p>
                </div>

                <div className='w-[806px] h-[914px]'><img src={van} className='w-full h-full'/></div>
            </div>
            
            <div className='w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
            </div>


        </div>

        {/* benefits of company  */}
        <div className='relative mb-40  h-[826px] my-20'>
            {/* vector 1 */}
            <div className='w-[515px] h-[823px] absolute '><img src={vector1} className='w-full h-full'/></div>


            {/* header text         */}
            <div className='w-[754px] h-[136px] mx-auto mb-40 '>
                <h1 className='text-[70px] font-bold text-center'>Наши гарантии</h1>
                <p className='text-[30px] italic text-center '>"EVO HOME – надежность, подтвержденная делом!"</p>
            </div>
            
            {/* list of Guarantees */}
            <div className='w-[1650px] mx-auto'>

                <ul className='flex flex-row justify-between'>
                    {/* 1 */}
                    <li className=' relative w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='w-[64px] h-[64px] mx-auto '><img src={bill} className='w-full h-full'/></div>
                            <h1 className='text-[22px] font-semibold text-center'>ИНДИВИДУАЛЬНЫЙ ПОДХОД</h1>
                            <p className='bg-[#d7e4ef] w-full h-[117px] p-4 text-center '>Каждый проект адаптирован под желания клиента — от планировки до мельчайших деталей интерьера.</p>

                        </div>

                        <div className='absolute top-[385px] left-[90px] w-[70px] h-[70px] -[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>1</p> </div>
                    </li>

                    {/* 2 */}
                    <li className=' relative w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='w-[64px] h-[64px] mx-auto '><img src={hands} className='w-full h-full'/></div>
                            <h1 className='text-[22px] font-semibold text-center'>ПРОЗРАЧНАЯ <br/> СМЕТА</h1>
                            <p className='bg-[#d7e4ef] w-full h-[117px] p-4 text-center'>Честная стоимость без скрытых расходов — вы заранее знаете, за что платите.</p>

                        </div>

                        <div className='absolute top-[385px] left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>2</p> </div>
                    </li>

                    {/* 3 */}
                    <li className=' relative w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='w-[64px] h-[64px] mx-auto '><img src={time} className='w-full h-full'/></div>
                            <h1 className='text-[22px] font-semibold text-center'>ВЫСОКОКАЧЕСТВЕННЫЕ МАТЕРИАЛЫ</h1>
                            <p className='bg-[#d7e4ef] w-full h-[117px] p-4 text-center'>Используем только проверенные и долговечные материалы от надежных поставщиков.</p>

                        </div>

                        <div className='absolute top-[385px] left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>3</p> </div>
                    </li>

                    {/* 4 */}
                    <li className=' relative w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='w-[64px] h-[64px] mx-auto '><img src={hands} className='w-full h-full'/></div>
                            <h1 className='text-[22px] font-semibold text-center'>УМНЫЙ <br/> ДОМ </h1>
                            <p className='bg-[#d7e4ef] w-full h-[117px] p-4 text-center'>Интеграция современных технологий для удобства, безопасности и энергосбережения дома.</p>

                        </div>

                        <div className='absolute top-[385px] left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>4</p> </div>
                    </li>

                    {/* 5 */}
                    <li className=' relative w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]/100  to-[#fcfdfe] shadow-2xl'>
                        <div className='flex flex-col justify-between h-full w-full py-10'>
                            <div className='w-[64px] h-[64px] mx-auto '><img src={time} className='w-full h-full'/></div>
                            <h1 className='text-[22px] font-semibold text-center'>СОБЛЮДЕНИЕ <br/> СРОКОВ</h1>
                            <p className='bg-[#d7e4ef] w-full h-[117px] p-4 text-center'>Гарантируем завершение работ в установленные сроки — без задержек и оправданий.</p>

                        </div>

                        <div className='absolute top-[385px] left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>5</p> </div>
                    </li>


                </ul>
            </div>

            {/* vector 2 */}
            <div className='w-[806px] h-[804px] right-0 top-0 absolute -z-10 '><img src={vector2} className='w-full h-full'/></div>

        </div>

        {/* our team */}
        <div className='w-[1641px] h-[1969px] mx-auto flex flex-col justify-between '>
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center  '>
                <img src={left_yellow_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Команда EVO Home</h1>

                </div>
                <img src={right_yellow_decoration} className='w-[276px] h-[83px]'/>
            </div>
            
            {/* list of empolyees */}
            <div className='relative'>
                <div className='w-[1378px] h-[647px]  absolute top-[328px] left-[200px]'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='h-auto w-[1641px]  space-y-20'>
                    {/* 1 */}
                    <li className=' w-full h-[376px] flex flex-row justify-between '>
                        {/* empolyee photo */}
                        <div className='w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={founder} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='w-[1082px] h-[376px]  flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[50px]'>ПЬЕТРО БОСТАН</h1>
                                <h2 className='font-light italic text-[40px]'>Директор и основатель EVO HOME</h2>
                            </div>

                            <p className='text-[32px] p-light'>Идейный вдохновитель компании. Курирует все этапы проектов — от концепции до финального результата. Более 17 лет опыта в строительстве и дизайне.</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className=' w-full h-[376px] flex flex-row-reverse justify-between border-b '>
                        {/* empolyee photo */}
                        <div className='w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={designer} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='w-[1082px] h-[376px]  flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[50px]'>АННА ВЕРДИНИ</h1>
                                <h2 className='font-light italic text-[40px]'>Ведущий Дизайнер Интерьеров</h2>
                            </div>

                            <p className='text-[32px] p-light'>Создаёт эксклюзивные концепции и визуализации. Специализируется на оптимизации пространства, сочетании стиля и функциональности.</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className=' w-full h-[376px] flex flex-row justify-between '>
                        {/* empolyee photo */}
                        <div className='w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={project_manager} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='w-[1082px] h-[376px]  flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[50px]'>МАРКО ЛОМБАРДИ</h1>
                                <h2 className='font-light italic text-[40px]'>РУКОВОДИТЕЛЬ ПРОЕКТОВ</h2>
                            </div>

                            <p className='text-[32px] p-light'>Контролирует процесс реализации — от планирования до сдачи объекта. Следит за сроками, коммуникацией с клиентами и качеством выполнения.</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className=' w-full h-[376px] flex flex-row-reverse justify-between border-b '>
                        {/* empolyee photo */}
                        <div className='w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={engineer} className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='w-[1082px] h-[376px] flex flex-col space-y-10 '>
                            <div>
                                <h1 className='font-bold text-[50px]'>ФАББИО ЧЕККИ</h1>
                                <h2 className='font-light italic text-[40px]'>Главный Инженер-Строитель</h2>
                            </div>

                            <p className='text-[32px] p-light'>Отвечает за техническую реализацию проектов. Профессионал в области современных строительных технологий и инженерных решений.</p>
                        </div>
                    </li>

                </ul>



                <div className='absolute w-[1605px] h-[338px]  bottom-[120px]'><img src={arrow_2}/></div>
            </div>

            <div className='w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                                <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">СВЯЗАТЬСЯ</Link>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
            </div>
        </div>  

        {/* our achievements */}
        
        <div className='w-[1640px] h-[938px] mx-auto my-10'>
            {/* header */}
            <div className='relative w-[1418px] h-[132px] text-center mx-auto mb-6 font-bold text-[#222222] items-center border-r-[12px]  border-r-[#E0E0E0] border-l-[12px] border-l-[#E0E0E0]'>
                <h1 className='text-[70px] absolute top-[19px] left-[410px] '>Наши достижения</h1>
                <div className=" flex flex-row ">
                    <div className='absolute top-[65px] w-[155px] h-[12px] bg-[#E0E0E0]'></div>
                    <div className='absolute top-[65px] right-0 w-[155px] h-[12px] bg-[#E0E0E0]'></div>
                </div>
            </div>

            {/* list of achievements */}

            <ul className=' flex flex-row justify-between border-amber-400 w-[1640px] h-[778px] text-[22px] text-center'>
                {/* 1 */}
                <li className=' w-[389px] h-full'>
                    {/* photo */}
                    <div className='w-[389px] h-1/2 '><img src={first_image} className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='w-[79px] h-[79px] mx-auto'><img src={keys} className='w-full h-full'/></div>

                        <p>В нашу команду входят более 30 высококвалифицированных специалистов , среди которых проектировщики, архитекторы-дизайнеры, инженеры и строители.</p>
                    </div>
                </li>

                {/* 2 */}
                <li className=' w-[389px] h-full'>
                    {/* photo */}
                    <div className='w-[389px] h-1/2 '><img src={second_image} className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='w-[79px] h-[79px] mx-auto'><img src={room} className='w-full h-full'/></div>

                        <p>Мы работаем одновременно более чем над 7 проектами , общей площадью управляемой поверхности более 1000 м2 .</p>
                    </div>
                </li>

                {/* 3 */}
                <li className=' w-[389px] h-full'>
                    {/* photo */}
                    <div className='w-[389px] h-1/2 '><img src={third_image} className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='w-[79px] h-[79px] mx-auto'><img src={botique} className='w-full h-full'/></div>

                        <p>Ежемесячно на различные строительные площадки поставляется более 30 тонн строительных материалов.</p>
                    </div>
                </li>

                {/* 4 */}
                <li className=' w-[389px] h-full'>
                    {/* photo */}
                    <div className='w-[389px] h-1/2 '><img src={fourth_image} className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='w-[79px] h-[79px] mx-auto'><img src={gears} className='w-full h-full'/></div>

                        <p>За эти годы мы успешно реализовали более 100 проектов.</p>
                    </div>
                </li>




            </ul>

        </div>

        {/* grid */}

        <div className='relative w-full h-[1882px]  mx-auto'>
            {/* vector */}
            <div className='absolute -z-10 top-[165px] h-[1727px] w-full overflow-hidden '><img src={vector} className='object-cover w-full h-full'/></div>
            
            {/* header */}
            <div className='h-[83px] w-[1641px] mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Почему нам доверяют</h1>
                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            
            {/* grid images */}
            <div className='w-[1641px] h-[1641px]  grid grid-cols-2 grid-rows-2 mx-auto mt-20'>

                {/* 1 */}
                <div className='w-[806px] h-[806px]'><img src={image1} className='w-full h-full'/></div>
                
                {/* 2 */}
                <div className='w-[806px] h-[806px]'><img src={image2} className='w-full h-full'/></div>
                
                {/* 3 */}
                <div className='w-[806px] h-[806px]'><img src={image3} className='w-full h-full'/></div>
                
                {/* 4 */}
                <div className='w-[806px] h-[806px]'><img src={image4} className='w-full h-full'/></div>

            </div>
        </div>
        
        {/* calculator */}
        <Calculator/>

        {/* videos */}
        <div className='w-full h-[909px] flex flex-col justify-between  my-20 mx-auto'>
            <h1 className='text-[50px] font-bold text-center'>Строим вместе с EVO HOME</h1>

            {/* videos(instead of them just a div with any bg color) */}
            <div className='w-full h-[696px] relative flex flex-row'>
                <div className='absolute  h-[853px] bottom-0 -z-10'><img src={vector_about_us_1} className='w-full h-full'/></div>
                <div className='w-[1641px] h-[696px] flex flex-row justify-between mx-auto'>
                    <div className='w-[527px] h-[696px] bg-[#f5ab32] text-center'>video</div>
                    <div className='w-[527px] h-[696px] bg-[#f5ab32] text-center'>video</div>
                    <div className='w-[527px] h-[696px] bg-[#f5ab32] text-center'>video</div>
                </div>

                <div className='absolute h-[853px] bottom-0 right-0 -z-10'><img src={vector_about_us_2} className='w-full h-full'/></div>
            </div>
            


            <div className='w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </div>


    </div>
  )
}

export default AboutUs