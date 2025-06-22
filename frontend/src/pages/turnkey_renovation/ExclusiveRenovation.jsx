import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/exclusive_renovation/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/exclusive_renovation/process/first_step.png'
import second_step from '../../assets/images/turnkey_renovation/exclusive_renovation/process/second_step.png'
import third_step from '../../assets/images/turnkey_renovation/exclusive_renovation/process/third_step.jpg'
import fourth_step from '../../assets/images/turnkey_renovation/exclusive_renovation/process/fourth_step.png'


const ExclusiveRenovation = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1700px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Эксклюзивный ремонт квартир</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Эксклюзивный ремонт от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[500px] flex flex-col justify-around '>
                    <p>Добро пожаловать в EvoHome — идеального партнера по эксклюзивному ремонту квартир в Риме и его окрестностях. Мы создаем интерьеры, которые подчеркивают индивидуальность и статус владельца, используя инновационные решения и эксклюзивные элементы декора. Имея более чем 17-летний опыт работы в этом секторе, компания EvoHome является лидером и специализируется на рестайлинге объектов недвижимости, уделяя особое внимание качеству и элегантности. Наша миссия — превратить каждое жилое пространство в уникальную и индивидуальную среду, полностью отражающую желания и потребности каждого клиента.</p>
                    <p>Мы работаем с лучшими мастерами и дизайнерами, чтобы превратить ваш дом в произведение искусства. EVO HOME – создаем пространство, которое вдохновляет.</p>

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
                <h1 className='text-[50px] font-bold'>Подробнее об эксклюзивном ремонте</h1>
            </div>

            <p className='w-[1640px] h-[101px] text-[32px] mx-auto '>Наша команда проводит тщательные замеры прямо на объекте. Если ваш проект включает реконструкцию, мы определяем, какие стены подлежат модификации, гарантируя при этом полное соответствие строительным нормам и максимальную безопасность.</p>

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
                                    <h1 className='font-bold text-[46px]'>ИНДИВИДУАЛЬНЫЙ ДИЗАЙН</h1>
                                </div>
    
                                <p className='text-[26px] p-light'>Ремонт квартиры с EvoHome — это уникальный процесс, начинающийся с внимательного изучения ваших идей. Мы тесно сотрудничаем с каждым клиентом, чтобы обеспечить идеальное соответствие всех аспектов проекта — от выбора цвета до планировки и стиля мебели — вашим ожиданиям.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] '>КАЧЕСТВО БЕЗ КОМПРОМИССОВ</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Выбирая EvoHome, вы выбираете безупречное качество в каждой детали. Мы используем только лучшие отделочные материалы, передовые технические решения и современный инструментарий. От выравнивания поверхностей до установки окон, дверей, многоуровневых потолков и декоративной отделки — каждый этап выполняется с максимальной точностью и вниманием.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ДОСТУПНЫЕ ЦЕНЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Мы предлагаем выгодные цены, сохраняя при этом высокий стандарт качества. Первоначальная стоимость квадратного метра всегда согласовывается заранее. Благодаря поэтапной оплате и небольшому авансу за материалы, планирование затрат становится полностью прозрачным и управляемым.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] '>ГАРАНТИЯ КАЧЕСТВА</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Мы уверены в качестве нашей работы и предоставляем гарантию на результаты минимум на 3 года. Это подтверждает неизменную приверженность EvoHome полному удовлетворению потребностей клиентов.</p>
                            </div>

                        </li>
    
                    </ul>
    
    
                    <div className='w-[1604px] h-[338px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Эксклюзивный ремонт от EVO HOME'}/>



        </div>

        <LayoutCollection/>
        
    </div>
  )
}

export default ExclusiveRenovation