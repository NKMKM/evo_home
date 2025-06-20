import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/restaurant/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/commercial_premises/restaurant/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/restaurant/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/restaurant/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/restaurant/process/fourth_step.jpg'
import fifth_step from '../../assets/images/commercial_premises/restaurant/process/fifth_step.jpg'


const Restaurant = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1677px] mx-auto mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20'>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Реновация баров и ресторанов</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='h-[1577px] flex flex-col justify-between  '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Реновация баров и ресторанов от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px] h-[504px] flex flex-col justify-between '>
                    <p>Каждая деталь имеет значение, когда речь идет о создании уникальной атмосферы в баре, кафе или ресторане. Речь идет не только о предложении превосходного меню, но и о создании гостеприимной и особой атмосферы, которая побуждает клиентов возвращаться. Имея более чем 17-летний опыт в сфере реконструкции баров, кафе и ресторанов в Риме, наша компания Evo Home предлагает индивидуальные решения, сочетающие в себе эстетику, функциональность и соответствие действующим нормам.</p>
                    <p>Мы являемся специалистами по высококачественному ремонту баров, кафе и ресторанов по цене от 350 евро за квадратный метр и от 20 000 евро за проект . Цена, согласованная в смете, фиксирована и не меняется, мы всегда гарантируем прозрачность и надежность. Мы заключаем официальный договор и предоставляем 3-летнюю гарантию . Мы начинаем работу в течение 48 часов с момента подписания договора, гарантируя быстрые сроки выполнения и превосходные результаты.</p>

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
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте ванной комнаты от EVO HOME</h1>
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
                                    <h1 className='font-bold text-[46px] pl-5'>ТИП РЕМОНТА</h1>
                                </div>
    
                                <p className='text-[27px] p-light pl-5'>Полная реконструкция: включает в себя глубокие структурные работы, такие как снос и реконструкция стен, замена систем и ремонт конструктивных элементов.<br/>Дизайнерский ремонт: этот ремонт, ориентированный на эстетические и функциональные аспекты, направлен на преобразование среды с помощью инновационных и высококачественных решений</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] '>ЦЕНА МАТЕРИАЛОВ</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Бюджетный сегмент: качественные, но более дешевые материалы, подходящие для проектов с ограниченным бюджетом без особого ущерба для эстетики и функциональности.<br/>Премиум-сегмент: высококачественные материалы, гарантирующие максимальную эстетику, долговечность и производительность</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>СРОЧНОСТЬ И ПОВЕРХНОСТЬ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Стандартные задания: сроки выполнения соответствуют запланированному графику, обеспечивая баланс между качеством и сроками.Срочная работа: ускоренная работа, требующая дополнительных ресурсов для минимизации простоя<br/>Большие поверхности: крупномасштабные проекты могут потребовать больших инвестиций</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] '>ЭЛЕКТРИЧЕСТВО,ВЕНТИЛЯЦИЯ</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Мы устанавливаем современные системы электрики, вентиляции и отопления. Каждая система спроектирована таким образом, чтобы быть эффективной, безопасной и соответствовать действующим нормам.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ОБОРУДОВАНИЕ МЕБЕЛИ И АКСЕССУАРОВ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Мы берем на себя доставку и установку оборудования, мебели и аксессуаров, гарантируя, что каждый элемент идеально впишется в общий дизайн помещения.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Реновация баров и ресторанов от EVO HOME'}/>


        </div>

        <CommercialPremisesLayoutCollection/>

    </div>
  )
}

export default Restaurant