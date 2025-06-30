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
        <div className='lg:w-[1641px] sm:w-full  sm:h-[1700px] lg:h-[1450px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[60px] lg:text-[57px]'>Ремонт ванной комнаты</h1>

                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[30px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Ремонт ванной комнаты от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-5'>
                    <p>Вы планируете сделать ремонт в ванной комнате? Компания Evo Home, лидер в сфере ремонта в Риме и его окрестностях, предлагает высококачественные услуги по цене от 7000 евро . Обладая более чем 17-летним опытом, мы стремимся преобразить вашу ванную комнату, гарантируя долгосрочные результаты с минимальной гарантией на 3 года .</p>
                    <p>Каждый проект создается с максимальным вниманием к деталям и с использованием только лучших материалов, чтобы ваша ванная комната была не только красивой, но и функциональной. Независимо от того, хотите ли вы обновить внешний вид своей квартиры-студии или полностью отремонтировать ванную комнату в большой четырехкомнатной квартире, Evo Home — это правильный выбор, который выполнит работу безупречно. Свяжитесь с нами, чтобы узнать, как мы можем помочь вам создать ванную комнату вашей мечты, оптимизировав пространство и улучшив любую обстановку.</p>
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
      <div className='sm:h-[6000px]  lg:w-full lg:h-[3588px] flex flex-col justify-between'>
        {/* header */}
        <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
            <h1 className='sm:text-[22px] lg:text-[50px] font-bold sm:mt-5.5 lg:mt-0'>Подробнее о ремонте ванной комнаты от EVO HOME </h1>
        </div>

        {/* list of steps */}
        <div className='sm:h-[4600px] lg:h-[2260px] sm:w-full lg:w-auto relative mx-auto '>
            <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

            <ul className='sm:h-[4600px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                {/* 1 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-[358px] lg:w-[667px] lg:h-full border-y-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>СНОС И ПОДГОТОВКА</h1>

                        <p className='text-[26px] pb-5'>Первый этап процесса реконструкции включает удаление старой сантехники, труб и плитки. Это также включает удаление любой старой отделки, такой как известковая штукатурка, которую необходимо полностью удалить перед началом новой установки.Далее мы приступаем к установке новых труб для воды и канализации. </p>
                    </div>
                </li>

                {/* 2 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0 '>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ЭЛЕКТРИЧЕСКАЯ СИСТЕМА</h1>

                        <p className='text-[26px] pb-5'>Модернизация вашей электрической системы необходима для поддержки новых приборов и осветительных приборов. Все электроустановки должны соответствовать действующим нормам для обеспечения безопасности и функциональности.</p>
                    </div>
                </li>

                {/* 3 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-y-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ОТДЕЛКА ПОТОЛКА</h1>
                        <p className='text-[26px] pb-5'>Материал, используемый для отделки потолка, варьируется в зависимости от бюджета и личных предпочтений. Такие материалы, как гипсокартон, могут быть экономичным и в то же время эстетически приятным выбором.</p>
                    </div>
                </li>

                {/* 4 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0'>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>УКЛАДКА ПЛИТКИ</h1>
                        <p className='text-[26px] pb-5'>Выбор плитки имеет решающее значение для обеспечения ее долговечности и простоты ухода. Керамика, благодаря своим гидрофобным свойствам, идеально подходит для влажных помещений ванной комнаты.</p>
                    </div>
                </li>

                {/* 5 */}
                <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                    {/* process photo  */}
                    <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover' /></div>
                    {/* info */}
                    <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                        <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>УСТАНОВКА АКСЕССУАРОВ</h1>
                        
                        <p className='text-[26px] pb-5'>Заключительный этап включает установку аксессуаров, таких как зеркала, полотенцесушители и другие функциональные и декоративные элементы.</p>
                    </div>
                </li>
            </ul>

            <div className='w-[1604px] h-[627px] absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} className='w-full h-full' /></div>
        </div>

        <div className='mb-10 '>
          <Video text={'Ремонт ванной комнаты от EVO HOME'} />
        </div>
      </div>

        <LayoutCollection/>












    </div>
  )
}

export default Bathroom