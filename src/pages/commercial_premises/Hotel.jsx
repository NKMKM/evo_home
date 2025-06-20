import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/hotel/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/commercial_premises/hotel/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/hotel/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/hotel/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/hotel/process/fourth_step.png'
import fifth_step from '../../assets/images/commercial_premises/hotel/process/fifth_step.png'


const Hotel = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1477px] mx-auto mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20'>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Реновация отеля</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='h-[1377px] flex flex-col justify-between  '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Реновация отеля от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px] h-[400px] flex flex-col justify-between '>
                    <p>В Риме гостиничный бизнес постоянно расширяется благодаря постоянному потоку туристов со всего мира. Однако поддержание высокого уровня комфорта и гостеприимства требует постоянного обслуживания и периодического ремонта. Конкуренция высока, и для отельеров качество обстановки имеет решающее значение, поскольку оно гарантирует положительные отзывы и лояльность клиентов.</p>
                    <p>Реновация — это не только вопрос эстетики, она напрямую влияет на качество обслуживания гостей. Сегодня как никогда ранее владельцам отелей необходимо следить за тем, чтобы помещения были современными, функциональными и находились в идеальном состоянии. Не только номера, но и общие зоны, рестораны, спа-салоны и каждый уголок отеля вносят свой вклад в общий имидж и привлекательность объекта.</p>

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
                <h1 className='text-[50px] font-bold'>Подробнее о реновации отеля </h1>
            </div>



               {/* list of steps */}
                <div className='relative mx-auto my-20 mb-10'>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[2270px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col justify-between  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px] pl-5'>ЭСТЕТИЧЕСКАЯ РЕНОВАЦИЯ"</h1>
                                </div>
    
                                <p className='text-[27px] p-light pl-5'>Идеально подходит для тех, кто хочет обновить облик отеля без инвазивного структурного вмешательства.</p>
                                <ul className='text-[28px] list-disc px-20'>
                                    <li>Покраска и окрашивание</li>
                                    <li>Замена полов и покрытий</li>
                                    <li>Новое освещение и небольшие изменения дизайна</li>
                                    <li>Цены от 500 €/м²</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col justify-between '>
                                <div>
                                    <h1 className='font-bold text-[46px] '>ПОЛНА РЕНОВАЦИЯ</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Этот вариант подразумевает более сложные работы, которые могут включать изменение планировки этажей и модернизацию систем.Ремонт электрических и сантехнических систем</p>
                                <ul className='text-[28px] list-disc px-16'>
                                    <li>Замена окон и дверей</li>
                                    <li>Ремонт ванной комнаты и кухни</li>
                                    <li>Цены от 1000 €/м²</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col justify-between px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>РОСКОШНЫЙ РЕМОНТ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Для тех, кто хочет предложить своим гостям эксклюзивные впечатления, мы можем создать элегантные пространства.</p>
                                <ul className='text-[27px] list-disc px-20 pb-5'>
                                    <li>Использование роскошных материалов, таких как мрамор и ценные породы дерева</li>
                                    <li>Дизайн функциональных и современных пространств</li>
                                    <li>Цены от 1750 €/м²</li>
                                </ul>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] '>ВЫСОКОКАЧЕСТВЕННЫЕ МАТЕРИАЛЫ</h1>
                                </div>
    
                                <p className='text-[30px] p-light '>Мы используем только высококачественные материалы, чтобы гарантировать долговечные и прочные результаты.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>СОБЛЮДЕНИЕ СРОКОВ</h1>
                                </div>
    
                                <p className='text-[30px] p-light'>Мы знаем, насколько важно как можно скорее открыть двери отеля, и мы стремимся соблюдать согласованные сроки.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 


            <div className='mb-10'>
                {/* video */}
                <Video text={'Реновация отеля от EVO HOME'}/>
            </div>



        </div>

        <CommercialPremisesLayoutCollection/>



    </div>
  )
}

export default Hotel