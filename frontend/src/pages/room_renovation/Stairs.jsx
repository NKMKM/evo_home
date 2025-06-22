import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/stairs/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

// process images imports
import first_step from '../../assets/images/room_renovation/stairs/process/first_step.png'
import second_step from '../../assets/images/room_renovation/stairs/process/second_step.png'
import third_step from '../../assets/images/room_renovation/stairs/process/third_step.png'
import fourth_step from '../../assets/images/room_renovation/stairs/process/fourth_step.png'


const Stairs = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1728px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт лестниц</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' -violet-500 space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт лестница от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[550px] flex flex-col justify-around '>
                    <p>Нужна ли лестница в вашем доме или здании профессиональная реставрация? Ремонт лестницы важен не только с точки зрения функциональности, но и с точки зрения эстетики и безопасности. Имея более чем 17-летний опыт работы , компания Evo Home способна предложить высококачественные услуги в строительном секторе.</p>
                    <p>Наши вмешательства, бюджет которых начинается от 5000 евро , гарантируют долгосрочные результаты благодаря использованию первоклассных материалов и сложных, передовых методик. Со временем на лестнице могут появиться такие повреждения, как сколы, трещины, износ и скрипы. При ремонте лестниц мы решаем эти проблемы с точностью и профессионализмом, что позволяет нам предоставлять 3-летнюю гарантию на выполненные работы. Сложность реставрации зависит от материала лестницы и типа имеющихся повреждений, но с Evo Home вы можете быть уверены в превосходном сервисе.</p>

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

        <div className='w-full h-[3323px]  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте лестниц от EVO HOME</h1>
            </div>

            <p className='w-[1640px] h-[101px] text-[32px] mx-auto '>Перед началом любых работ по реставрации лестницы необходимо провести детальный осмотр, чтобы выявить дефекты и понять причины ухудшения состояния. Этот предварительный этап позволяет нам оценить масштаб ущерба и точно спланировать необходимые мероприятия.</p>

               {/* list of steps */}
                <div className='relative mx-auto '>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[1794px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px]'>МЕТАЛЛИЧЕСКИЕ ЛЕСТНИЦЫ</h1>
                                </div>
    
                                <p className='text-[26px] p-light'>Ремонт трещин с помощью специализированной сварки : целенаправленные вмешательства по ремонту трещин и разрывов. Антикоррозийная обработка : нанесение антикоррозийных средств для предотвращения коррозии и продления срока службыЗащитная покраска : использование специальных красок для защиты металла от атмосферных воздействий </p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>БЕТОННЫЕ ЛЕСТНИЦЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Ремонт трещин и сколов с помощью специальных решений : использование растворов и смол.Усиление конструкции посредством арматуры : вставка стальных стержней или других армирующих материалов для повышения устойчивости лестницы.Облицовка такими материалами, как керамогранит : нанесение прочных и декоративных покрытий</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ДЕРЕВЯННЫЕ ЛЕСТНИЦЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Ремонт поврежденных ступеней : замена или ремонт поврежденных ступеней.Обработка защитными красками : нанесение защитных красок и обработок для предотвращения повреждений от влажности и износа.Замена поврежденных частей : снятие и замена частей лестницы, которые слишком повреждены для ремонта.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] px-5'>КАМЕННЫЕ ЛЕСТНИЦЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Очистка и восстановление поверхностей : удаление грязи и пятенРемонт сколов : заполнение и реконструкция поврежденных частей для восстановления целостности камня.Обработка камня для сохранения : применение специальных продуктов для защиты камня от эрозии и атмосферных воздействий.</p>
                            </div>

                        </li>
    
                    </ul>
    
    
                    <div className='w-[1604px] h-[338px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Ремонт лестниц от EVO HOME'}/>



        </div>

        <LayoutCollection/>
        
    </div>
  )
}

export default Stairs