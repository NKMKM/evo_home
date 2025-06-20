import React from 'react'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import Video from '../../components/Video'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/tworoom_apartment/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/tworoom_apartment/process/first_step.png'
import second_step from '../../assets/images/turnkey_renovation/tworoom_apartment/process/second_step.png'
import third_step from '../../assets/images/turnkey_renovation/designer_renovation/process/third_step.png'
import fourth_step from '../../assets/images/turnkey_renovation/designer_renovation/process/fourth_step.png'




const TworoomApartment = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1600px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Двух-комнатные квартиры</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Двух-комнатные квартиры от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[450px] flex flex-col justify-around '>
                    <p>В компании EvoHome, специализирующейся на ремонте двухкомнатных квартир, мы верим в силу преобразования любого пространства в идеальную среду обитания. Имея более чем 17-летний опыт работы в сфере ремонта, мы с гордостью предлагаем высококачественные услуги в Риме и его окрестностях. Наше обещание? Безупречный ремонт по цене от 500 евро за квадратный метр.</p>
                    <p>Мы создаем функциональные и стильные интерьеры для двухкомнатных квартир, учитывая ваши пожелания и современные тенденции. Оптимизируем пространство, подбираем качественные материалы и внедряем современные технологии, чтобы обеспечить уют и удобство. EVO HOME – ремонт, который делает вашу квартиру идеальным местом для жизни.</p>

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

        <div className='w-full h-[3240px]   flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте двух-комнатных квартир</h1>
            </div>

            <p className='w-[1640px] h-[141px]  text-[32px] mx-auto mt-4 mb-10'>Наш специалист проводит точные измерения непосредственно на месте. Если проект предусматривает реконструкцию помещений, мы определяем, какие стены можно модифицировать, обеспечивая при этом соблюдение действующих норм и максимальную безопасность.</p>

               {/* list of steps */}
                <div className='relative mx-auto'>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[1795px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10   '>
                                <div>
                                    <h1 className='font-bold text-[46px] pl-5'>ИНДИВИДУАЛЬНОЕ ПЛАНИРОВАНИЕ</h1>
                                </div>
    
                                <p className='text-[28px] pl-5 p-light pb-5'>Мы разрабатываем уникальные проекты, адаптированные под ваш образ жизни, потребности и вкусы. Оптимизируем пространство, создаем удобные функциональные зоны, подбираем стильные материалы и современное освещение. Каждый интерьер продуман до мелочей, чтобы обеспечить комфорт, эстетику и практичность. EVO HOME – дизайн, в котором сочетаются стиль и удобство.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] '>ОПТИМИЗАЦИЯ ПРОСТРАНСТВА</h1>
                                </div>
    
                                <p className='text-[28px] p-light pr-5 '>Мы разрабатываем функциональные решения, позволяющие эффективно использовать каждый квадратный метр. Грамотное зонирование, встроенная мебель, многоуровневое освещение и современные технологии помогают создать просторный, уютный и стильный интерьер. EVO HOME – продуманные пространства для комфортной жизни.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ВЫСОКОКАЧЕТСВЕННЫЕ МАТЕРИАЛЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Мы используем только проверенные и премиальные материалы, обеспечивающие прочность, экологичность и  эстетическую привлекательность. Натуральное дерево, износостойкие покрытия, современные декоративные решения – все для создания уютного и долговечного интерьера. EVO HOME – качество, которое видно и ощущается.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] '>ТЕХНОЛОГИИ "УМНЫЙ ДОМ"</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Мы внедряем современные системы автоматизации, позволяющие управлять освещением, климатом, безопасностью и бытовой техникой через смартфон или голосовые команды. Интеллектуальные решения делают ваш дом удобным, энергоэффективным и надежным. EVO HOME – технологии будущего для вашего комфорта.</p>
                            </div>

                        </li>
    

                    </ul>
    
    
                    <div className='absolute w-[1303px] h-[738px] scale-[0.95] top-[1259px] right-[0px]'><img src={arrow_2}/></div>
                </div> 



            {/* video */}
            <div className='mb-10'>
                <Video text={'Ремонт двух-комнатных квартир от EVO HOME'}/>
            </div>



        </div>

        <LayoutCollection/>

    </div>
  )
}

export default TworoomApartment