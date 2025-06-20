import React from 'react'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
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
        <div className=' w-[1641px] h-[1728px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт гостинной</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' -violet-500 space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт гостинной от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[550px] flex flex-col justify-around '>
                    <p>Добро пожаловать в EvoHome — ваш выбор совершенства в сфере дизайнерского ремонта.
                    Вы ищете решение для преображения своей гостиной, сочетающее в себе элегантность, функциональность и инновации? Благодаря компании EvoHome, работающей в Риме и его окрестностях, вам доступны варианты ремонта гостиной стоимостью всего от 10 000 евро . Имея более чем 17-летний опыт работы в сфере ремонта, мы готовы помочь вам создать гостиную вашей мечты, гарантируя вам безупречный сервис с гарантией на результат не менее 3 лет..</p>
                    <p>Независимо от того , есть ли у вас студия , однокомнатная , двухкомнатная , четырехкомнатная или двухуровневая квартира , EvoHome предлагает широкий спектр услуг для удовлетворения потребностей в ремонте различных типов квартир, гарантируя индивидуальные решения для любого размера и образа жизни.</p>

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
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте гостинной</h1>
            </div>

            <p className='w-[1640px] h-[101px] text-[32px] mx-auto my-10'>Ремонт гостиной преследует одну большую цель: сделать пространство не только эстетически привлекательным, но и функциональным, особенно при наличии небольших комнат.</p>

               {/* list of steps */}
                <div className='relative mx-auto  mb-30'>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[2270px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px]'>ВСЕ НАЧИНАЕТСЯ С ПРОСТОГО КОНТАКТА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Вы решили вдохнуть новую жизнь в свою гостиную? Свяжитесь с нами по телефону или заполнив онлайн-форму. Один из наших специалистов перезвонит вам в течение 5-10 минут, чтобы провести предварительную консультацию, сориентировать по срокам реализации и предложить предварительную оценку стоимости.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>БЕСПЛАТНЫЙ ВИЗИТ ИНЖИНЕРА</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Для обеспечения максимальной точности сметы мы организуем бесплатный визит одного из наших инженеров-проектировщиков прямо к вам домой. Давайте вместе согласуем наиболее подходящее время для встречи; Если ваш запрос поступит до 13:00, мы сможем направить специалиста в тот же день. Эта услуга абсолютно бесплатна и ни к чему вас не обязывает.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ИНДИВИДУАЛЬНАЯ СМЕТА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>На месте мы проведем все необходимые обследования и на основании замеров составим подробную смету работ. Наш инженер будет в вашем распоряжении, чтобы проконсультировать вас по выбору материалов, различным этапам проекта и тому, как оптимизировать бюджет, не жертвуя качеством конечного результата.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-y-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] px-5'>ВСТРЕЧА С РУКОВОДИТЕЛЕМ ОБЬЕКТА</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Перед началом работ у вас будет возможность встретиться с руководителем объекта, который проверит полноту и точность сметы, выслушает ваши дополнительные пожелания и, при необходимости, внесет необходимые изменения в смету. После утверждения окончательной сметы мы совместно определим условия договора, установив сроки завершения и дату начала работ.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>НАЧАЛО РАБОТЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Начало преображения вашей гостиной. Наша команда следует четкому плану работ, начиная с этапов сноса и подготовки, затем черновых работ и заканчивая отделкой. На протяжении всего процесса мы обеспечиваем еженедельное обновление данных, выпуская отчеты о выполненных работах, обеспечивая прозрачное управление платежами, разделенными по этапам.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Ремонт гостинной от EVO HOME'}/>



        </div>

        <LayoutCollection/>


            
       














    </div>
  )
}

export default LivingRoom