import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/kitchen/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/room_renovation/kitchen/process/first_step.jpg'
import second_step from '../../assets/images/room_renovation/kitchen/process/second_step.png'
import third_step from '../../assets/images/room_renovation/kitchen/process/third_step.png'
import fourth_step from '../../assets/images/room_renovation/kitchen/process/fourth_step.png'
import fifth_step from '../../assets/images/room_renovation/kitchen/process/fifth_step.jpg'


const Kitchen = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1677px] mx-auto mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20'>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт кухни</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='h-[1577px] flex flex-col justify-between  '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт кухни от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px] h-[504px] flex flex-col justify-between '>
                    <p>Вы планируете обновить кухню и ищете надежную и качественную услугу? Имея более чем 17-летний опыт работы в этом секторе, наша компания занимается реновацией современных кухонь в Риме и его окрестностях, гарантируя проекты, которые улучшают как эстетику, так и функциональность дома . При инвестициях от 10 000 евро мы предлагаем полный спектр услуг, включающий трехлетнюю гарантию , что гарантирует долговечность и качество нашей работы.</p>
                    <p>Кухня — это сердце дома, место, где встречаются семья и друзья. Поэтому крайне важно, чтобы это пространство было не только красивым, но и практичным и функциональным. Независимо от того, ищете ли вы современный или более классический дизайн, наша команда экспертов будет тесно сотрудничать с вами, чтобы воплотить вашу мечту в реальность. Мы максимально эффективно используем все имеющееся пространство, выбираем высококачественные материалы и внедряем самые инновационные решения, чтобы ваша новая кухня была именно такой, какой вы ее хотите.</p>

                </div>

                {/* image */}
                <div className='w-[1641px] h-[661px] bg-blue-600/20'><img src={image} className='w-full h-full object-cover'/></div>

                <div className='w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>


        </div>

        {/* process */}

        <div className='w-full h-auto  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте кухни с EVO HOME</h1>
            </div>



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
                                    <h1 className='font-bold text-[46px]'>ОПТИМАЛЬНОЕ ЗОНИРОВАНИЕ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Данный подход включает в себя создание четко определенных зон для различных функций: подготовки пищи, приготовления пищи и уборки.Такая компоновка оптимизирует рабочий процесс и повышает эффективность приготовления пищи.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>ВЫБОР МАТЕРИАЛОВ</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Выбор материалов при ремонте кухни имеет решающее значение не только с точки зрения эстетики, но и с точки зрения функциональности и долговечности.Такие материалы для столешниц, как гранит, кварц и мрамор, часто выбирают из-за их прочности и красоты, а также из-за того, что поверхность устойчива к порезам и царапинам и проста в уходе.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>СОВРЕМЕННЫЕ ТЕХНОЛОГИИ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Помимо традиционных материалов, мы также планируем использовать современные технологии, такие как антибактериальные поверхности или интегрированные столешницы с зонами беспроводной зарядки для мобильных устройств, которые могут еще больше повысить функциональность кухни.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] px-5'>НАПОЛЬНОЕ ПОКРЫТИЕ</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Каждый материал выбирается не только с учетом его функциональности и долговечности, но и с учетом того, как он вписывается в общий дизайн кухни.Такие материалы, как керамика, фарфор и натуральный камень, выбираются из-за их износостойкости и простоты очистки.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ШКАФЫ И ОТДЕЛКА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Массив дерева, лакированный МДФ и ламинат известны своей универсальностью и разнообразием доступных отделок.Каждый материал выбирается не только с учетом его функциональности и долговечности, но и с учетом того, как он вписывается в общий дизайн кухни, гарантируя, что каждый аспект проекта будет соответствовать вашему эстетическому и практическому видению.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Ремонт кухни от EVO HOME'}/>



        </div>

        <LayoutCollection/>

    </div>
  )
}

export default Kitchen