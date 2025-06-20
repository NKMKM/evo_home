import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/warehouse/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/commercial_premises/warehouse/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/warehouse/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/warehouse/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/warehouse/process/fourth_step.png'
import fifth_step from '../../assets/images/commercial_premises/warehouse/process/fifth_step.png'


const Warehouse = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1377px] mx-auto mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20'>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Реновация склада</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='h-[1277px] flex flex-col justify-between  '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Реновация склада от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px] h-[300px] flex flex-col justify-between '>
                    <p>Доверить реновацию склада в Риме опытной компании крайне важно для обеспечения безопасности и эффективности складских помещений. EvoHome предлагает полный и профессиональный сервис, гарантируя высокое качество результатов благодаря многолетнему опыту</p>
                    <p>Компания EvoHome имеет более чем 17-летний опыт работы в сфере реконструкции складских помещений в Риме. Мы предоставляем 3-летнюю гарантию на все выполненные работы и гарантируем максимальную удовлетворенность клиентов.</p>

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
                <h1 className='text-[50px] font-bold'>Подробнее о реновации складов</h1>
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
                            <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px] pl-5'>ОБНОВЛЕНИЕ СТЕН, ПОЛОВ И ПОТОЛКОВ</h1>
                                </div>
    
                                <p className='text-[27px] p-light pl-5'>Этот процесс может включать ремонт поврежденных поверхностей или установку новых материалов, которые не только улучшают эстетику, но и функциональность, например, нескользящие полы или звуконепроницаемые стены.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] '>ДЕКОРАТИВНЫЕ МАТЕРИАЛЫ И ОТДЕЛКА</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Использование моющихся красок, декоративных панелей и современной отделки не только делает склад визуально более привлекательным, но и облегчает обслуживание и уборку помещений.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>СОЗДАНИЕ ПРИЯТНОЙ РАБОЧЕЙ СРЕДЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Внедрение естественного освещения или энергосберегающих светодиодов, комнатных растений и мест общего пользования улучшает настроение сотрудников и повышает их производительность.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] '>ЗАМЕНА СИСТЕМ И ОБОРУДОВАНИЯ</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Системы электрики, сантехники, вентиляции и кондиционирования воздуха обновляются или заменяются для обеспечения энергоэффективности и соответствия действующим нормам. Сюда также входит установка автоматических систем контроля и управления.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>МОДЕРНИЗАЦИЯ ИНФРАСТРУКТУРЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Создание индивидуальной мебели и предметов интерьера для удовлетворения конкретных потребностей заказчика.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 


            <div className='mb-10'>
                <Video text={'Реновация склада от EVO HOME'}/>
            </div>



        </div>

        <CommercialPremisesLayoutCollection/>



    </div>
  )
}

export default Warehouse