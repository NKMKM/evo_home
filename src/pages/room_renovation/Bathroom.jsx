import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/bathroom/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/room_renovation/bathroom/process/first_step.png'
import second_step from '../../assets/images/room_renovation/bathroom/process/second_step.jpg'
import third_step from '../../assets/images/room_renovation/bathroom/process/third_step.png'
import fourth_step from '../../assets/images/room_renovation/bathroom/process/fourth_step.jpg'
import fifth_step from '../../assets/images/room_renovation/bathroom/process/fifth_step.jpg'


const Bathroom = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1677px] mx-auto mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20'>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт ванной комнаты</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='h-[1577px] flex flex-col justify-between  '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт ванной комнаты от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px] h-[504px] flex flex-col justify-between '>
                    <p>Вы планируете сделать ремонт в ванной комнате? Компания Evo Home, лидер в сфере ремонта в Риме и его окрестностях, предлагает высококачественные услуги по цене от 7000 евро . Обладая более чем 17-летним опытом, мы стремимся преобразить вашу ванную комнату, гарантируя долгосрочные результаты с минимальной гарантией на 3 года .</p>
                    <p>Каждый проект создается с максимальным вниманием к деталям и с использованием только лучших материалов, чтобы ваша ванная комната была не только красивой, но и функциональной. Независимо от того, хотите ли вы обновить внешний вид своей квартиры-студии или полностью отремонтировать ванную комнату в большой четырехкомнатной квартире, Evo Home — это правильный выбор, который выполнит работу безупречно. Свяжитесь с нами, чтобы узнать, как мы можем помочь вам создать ванную комнату вашей мечты, оптимизировав пространство и улучшив любую обстановку.</p>

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
                            <div className='w-[667px] h-full border-y-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px]'>СНОС И ПОДГОТОВКА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Первый этап процесса реконструкции включает удаление старой сантехники, труб и плитки. Это также включает удаление любой старой отделки, такой как известковая штукатурка, которую необходимо полностью удалить перед началом новой установки.Далее мы приступаем к установке новых труб для воды и канализации. </p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>ЭЛЕКТРИЧЕСКАЯ СИСТЕМА</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Модернизация вашей электрической системы необходима для поддержки новых приборов и осветительных приборов. Все электроустановки должны соответствовать действующим нормам для обеспечения безопасности и функциональности.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-y-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ОТДЕЛКА ПОТОЛКА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Материал, используемый для отделки потолка, варьируется в зависимости от бюджета и личных предпочтений. Такие материалы, как гипсокартон, могут быть экономичным и в то же время эстетически приятным выбором.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] px-5'>УКЛАДКА ПЛИТКИ</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Выбор плитки имеет решающее значение для обеспечения ее долговечности и простоты ухода. Керамика, благодаря своим гидрофобным свойствам, идеально подходит для влажных помещений ванной комнаты.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>УСТАНОВКА АКСЕССУАРОВ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Заключительный этап включает установку аксессуаров, таких как зеркала, полотенцесушители и другие функциональные и декоративные элементы.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Ремонт ванной комнаты от EVO HOME'}/>



        </div>

        <LayoutCollection/>


    </div>
  )
}

export default Bathroom