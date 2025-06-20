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
        <div className=' w-[1641px] h-[1528px] mx-auto mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт спальни</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт спальни от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[370px] flex flex-col justify-around '>
                    <p>С EvoHome, лидером в сфере ремонта спален, ваша мечта может стать реальностью. Всего от 5000 евро мы предлагаем комплексные услуги по ремонту спальни, идеально соответствующие вашим потребностям и бюджету</p>
                    <p>Работая в Риме и его окрестностях более 17 лет , мы отточили свои навыки, чтобы предложить вам инновационные решения, начиная от ремонта различных типов квартир — включая студии , квартиры с одной , двумя и четырьмя спальнями , вплоть до двухуровневых квартир — и заканчивая созданием индивидуальных проектов современных спален</p>

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

        <div className='w-full h-auto  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте спальни с EVO HOME</h1>
            </div>

            <p className='w-[1640px] h-[101px] text-[32px] mx-auto my-20'>Ремонт спальни — это больше, чем просто проект по благоустройству; Это сложный процесс, требующий внимания, опыта и экспертного взгляда на детали, которые напрямую влияют на качество вашего отдыха. Компания EvoHome, имеющая многолетний опыт работы в сфере строительства и ремонта, проведет вас через каждый этап ремонта вашей комнаты, гарантируя результаты, которые не только соответствуют, но и превосходят ваши ожидания.
            </p>

               {/* list of steps */}
                <div className='relative mx-auto  my-30'>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[2270px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px]'>СТЕНЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Выбираем экологичные материалы с отличной звуко- и теплоизоляцией: штукатурку с натуральными волокнами, акустические панели, покрытия на водной основе, натуральные ткани и обои без вредных веществ.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-y-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>НАПОЛЬНОЕ ПОКРЫТИЕ</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Цель состоит в том, чтобы пол был не только эстетически привлекательным, но и функциональным. От натурального паркета, дарящего тепло и уют, до ковров, приглушающих звуки и приветствующих шаги, и таких инновационных решений, как пробковое напольное покрытие, сочетающее в себе тепло- и звукоизоляцию с долговечностью.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-y-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ПОТОЛОК</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Ремонт потолка дополняет отделку стен и пола, обеспечивая звукоизоляцию. Гипсокартон с изоляцией или подвесные конструкции помогают снизить шум и создать мягкое, расслабляющее освещение.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] px-5'>НАЧНИТЕ СО ЗВОНКА</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Как только мы получим ваш запрос, один из наших специалистов свяжется с вами в течение 5–10 минут, чтобы предложить вам предварительную консультацию, сориентировать вас по срокам внедрения и предоставить смету расходов.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ПРОФЕСИОНАЛЬНАЯ ОЦЕНКА НА МЕСТЕ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Мы организуем встречу с одним из наших опытных инженеров, который посетит ваш дом напрямую. Если вы свяжетесь с нами до 13:00, мы гарантируем визит в тот же день. Эта услуга абсолютно бесплатна и не подразумевает никаких обязательств с вашей стороны.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



                <Video text={'Ремонт спальни от EVO HOME'}/>



        </div>

       
        <LayoutCollection/>
            
        














    </div>
  )
}

export default Bedroom