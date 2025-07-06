import React from 'react'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import FiveReasons from '../../components/FiveReasons'
import Calculator from '../../components/mainpage_components/Calculator'
import Reasons from '../../components/Reasons'
import Projects from '../../components/room_renovation_components/Projects'
import Video from '../../components/Video'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/living_room/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/room_renovation/living_room/process/first_step.jpg'
import second_step from '../../assets/images/room_renovation/living_room/process/second_step.jpg'
import third_step from '../../assets/images/room_renovation/living_room/process/third_step.jpg'
import fourth_step from '../../assets/images/room_renovation/living_room/process/fourth_step.png'
import fifth_step from '../../assets/images/room_renovation/living_room/process/fifth_step.jpg'



const LivingRoom = () => {
  return (
    <div>
        {/* first step */}
        <div className='lg:w-[1641px] sm:w-full lg:h-[1480px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Ремонт гостиной </h1>

                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Ремонт гостиной  от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>Добро пожаловать в EvoHome — ваш выбор совершенства в сфере дизайнерского ремонта.
                    Вы ищете решение для преображения своей гостиной, сочетающее в себе элегантность, функциональность и инновации? Благодаря компании EvoHome, работающей в Риме и его окрестностях, вам доступны варианты ремонта гостиной стоимостью всего от 10 000 евро . Имея более чем 17-летний опыт работы в сфере ремонта, мы готовы помочь вам создать гостиную вашей мечты, гарантируя вам безупречный сервис с гарантией на результат не менее 3 лет</p>
                    <p>Независимо от того , есть ли у вас студия , однокомнатная , двухкомнатная , четырехкомнатная или двухуровневая квартира , EvoHome предлагает широкий спектр услуг для удовлетворения потребностей в ремонте различных типов квартир, гарантируя индивидуальные решения для любого размера и образа жизни.</p>
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

        {/* process */}
        <div className='lg:w-full lg:h-[3688px]  flex flex-col justify-between'>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h1 className='sm:text-[28px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее о ремонте гостинной</h1>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Ремонт гостиной преследует одну большую цель: сделать пространство не только эстетически привлекательным, но и функциональным, особенно при наличии небольших комнат.</p>

            {/* list of steps */}
            <div className='sm:h-[5550px] lg:h-[2260px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='sm:h-[5550px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ВСЕ НАЧИНАЕТСЯ С ПРОСТОГО КОНТАКТА</h1>

                            <p className='text-[26px] pb-5'>Вы решили вдохнуть новую жизнь в свою гостиную? Свяжитесь с нами по телефону или заполнив онлайн-форму. Один из наших специалистов перезвонит вам в течение 5-10 минут, чтобы провести предварительную консультацию, сориентировать по срокам реализации и предложить предварительную оценку стоимости.</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6 lg:px-0 '>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>БЕСПЛАТНЫЙ ВИЗИТ ИНЖИНЕРА</h1>

                            <p className='text-[26px] pb-5'>Для обеспечения максимальной точности сметы мы организуем бесплатный визит одного из наших инженеров-проектировщиков прямо к вам домой. Давайте вместе согласуем наиболее подходящее время для встречи; Если ваш запрос поступит до 13:00, мы сможем направить специалиста в тот же день. Эта услуга абсолютно бесплатна и ни к чему вас не обязывает.</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ИНДИВИДУАЛЬНАЯ СМЕТА</h1>
                            <p className='text-[26px] pb-5'>На месте мы проведем все необходимые обследования и на основании замеров составим подробную смету работ. Наш инженер будет в вашем распоряжении, чтобы проконсультировать вас по выбору материалов, различным этапам проекта и тому, как оптимизировать бюджет, не жертвуя качеством конечного результата.</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ВСТРЕЧА С РУКОВОДИТЕЛЕМ ОБЪЕКТА</h1>
                            <p className='text-[26px] pb-5'>Перед началом работ у вас будет возможность встретиться с руководителем объекта, который проверит полноту и точность сметы, выслушает ваши дополнительные пожелания и, при необходимости, внесет необходимые изменения в смету. После утверждения окончательной сметы мы совместно определим условия договора, установив сроки завершения и дату начала работ.</p>
                        </div>
                    </li>

                    {/* 5 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>НАЧАЛО РАБОТЫ</h1>
                            
                            <p className='text-[26px] pb-5'>Начало преображения вашей гостиной. Наша команда следует четкому плану работ, начиная с этапов сноса и подготовки, затем черновых работ и заканчивая отделкой. На протяжении всего процесса мы обеспечиваем еженедельное обновление данных, выпуская отчеты о выполненных работах, обеспечивая прозрачное управление платежами, разделенными по этапам.</p>
                        </div>
                    </li>
                </ul>

                <div className='w-[1604px] h-[627px] absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} className='w-full h-full' /></div>
            </div>

            <div className='mb-10'>
                <Video text={'Ремонт гостинной от EVO HOME'} />
            </div>
        </div>

        <div className='flex flex-col'>
            <FiveReasons/>
            <Calculator/>
            <Reasons/>
            <Projects/>
        </div>



    </div>
  )
}

export default LivingRoom