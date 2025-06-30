import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/bedroom/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/room_renovation/bedroom/process/walls.jpg'
import second_step from '../../assets/images/room_renovation/bedroom/process/floor.png'
import third_step from '../../assets/images/room_renovation/bedroom/process/ceiling.png'
import fourth_step from '../../assets/images/room_renovation/living_room/process/first_step.jpg'
import fifth_step from '../../assets/images/room_renovation/living_room/process/fifth_step.jpg'



const Bedroom = () => {
  return (
    <div>
        {/* first step */}
        <div className='lg:w-[1641px] sm:w-full lg:h-[1350px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Ремонт спальни</h1>

                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Ремонт спальни от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>С EvoHome, лидером в сфере ремонта спален, ваша мечта может стать реальностью. Всего от 5000 евро мы предлагаем комплексные услуги по ремонту спальни, идеально соответствующие вашим потребностям и бюджету</p>
                    <p>Работая в Риме и его окрестностях более 17 лет , мы отточили свои навыки, чтобы предложить вам инновационные решения, начиная от ремонта различных типов квартир — включая студии , квартиры с одной , двумя и четырьмя спальнями , вплоть до двухуровневых квартир — и заканчивая созданием индивидуальных проектов современных спален</p>
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
        <div className='lg:w-full lg:h-[3788px]  flex flex-col justify-between'>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h1 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее о ремонте спальни от EVO HOME </h1>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Ремонт спальни — это больше, чем просто проект по благоустройству; Это сложный процесс, требующий внимания, опыта и экспертного взгляда на детали, которые напрямую влияют на качество вашего отдыха. Компания EvoHome, имеющая многолетний опыт работы в сфере строительства и ремонта, проведет вас через каждый этап ремонта вашей комнаты, гарантируя результаты, которые не только соответствуют, но и превосходят ваши ожидания.</p>

            {/* list of steps */}
            <div className='sm:h-[4850px] lg:h-[2260px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='sm:h-[4850px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>СТЕНЫ</h1>

                            <p className='text-[26px] pb-5'>Выбираем экологичные материалы с отличной звуко- и теплоизоляцией: штукатурку с натуральными волокнами, акустические панели, покрытия на водной основе, натуральные ткани и обои без вредных веществ.</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6 lg:px-0 '>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>НАПОЛЬНОЕ ПОКРЫТИЕ</h1>

                            <p className='text-[26px] pb-5'>Цель состоит в том, чтобы пол был не только эстетически привлекательным, но и функциональным. От натурального паркета, дарящего тепло и уют, до ковров, приглушающих звуки и приветствующих шаги, и таких инновационных решений, как пробковое напольное покрытие, сочетающее в себе тепло- и звукоизоляцию с долговечностью.</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ПОТОЛОК</h1>
                            <p className='text-[26px] pb-5'>Ремонт потолка дополняет отделку стен и пола, обеспечивая звукоизоляцию. Гипсокартон с изоляцией или подвесные конструкции помогают снизить шум и создать мягкое, расслабляющее освещение.</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>НАЧНИТЕ СО ЗВОНКА</h1>
                            <p className='text-[26px] pb-5'>Как только мы получим ваш запрос, один из наших специалистов свяжется с вами в течение 5–10 минут, чтобы предложить вам предварительную консультацию, сориентировать вас по срокам внедрения и предоставить смету расходов.</p>
                        </div>
                    </li>

                    {/* 5 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ПРОФЕССИОНАЛЬНАЯ ОЦЕНКА НА МЕСТЕ </h1>
                            
                            <p className='text-[26px] pb-5'>Мы организуем встречу с одним из наших опытных инженеров, который посетит ваш дом напрямую. Если вы свяжетесь с нами до 13:00, мы гарантируем визит в тот же день. Эта услуга абсолютно бесплатна и не подразумевает никаких обязательств с вашей стороны.</p>
                        </div>
                    </li>
                </ul>

                <div className='w-[1604px] h-[627px] absolute top-[1300px] left-0 sm:hidden lg:block'><img src={arrow_2} className='w-full h-full' /></div>
            </div>

            <div className='mb-10'>
                <Video text={'Ремонт спальни от EVO HOME'} />
            </div>
        </div>

        <LayoutCollection/>












    </div>
  )
}

export default Bedroom