import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/twostory_apartment/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/stairs/arrow_2.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/twostory_apartment/process/first_step.jpg'
import second_step from '../../assets/images/turnkey_renovation/twostory_apartment/process/second_step.jpg'
import third_step from '../../assets/images/turnkey_renovation/twostory_apartment/process/third_step.jpg'
import fourth_step from '../../assets/images/turnkey_renovation/twostory_apartment/process/fourth_step.jpg'


const TwostoryApartment = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1728px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт двухэтажной квартиры</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' -violet-500 space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт двухэтажной квартиры от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[550px] flex flex-col justify-around '>
                    <p>Вы планируете отремонтировать двухуровневую квартиру, чтобы превратить свой дом в уникальное место, отражающее ваш образ жизни? EvoHome — ваше идеальное решение. Имея более чем 17-летний опыт работы в сфере строительства и ремонта, мы специализируемся на инновационных проектах двухуровневых квартир и предлагаем комплексные услуги, охватывающие все аспекты процесса ремонта. Работая в Риме и его окрестностях, мы гарантируем высочайшее качество преобразований по ценам от 60 000 евро и гарантию на результат сроком более 3 лет.</p>
                    <p>Оценка и выбор различных вариантов планировки двухуровневой квартиры является важнейшим этапом на этапе проектирования, поскольку позволяет максимально эффективно использовать пространство и повысить удобство проживания в доме. В EvoHome мы обладаем обширным опытом в сфере ремонта и предлагаем инновационные и индивидуальные решения для удовлетворения любых потребностей.</p>

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

        <div className='w-full h-[3223px]  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте двухэтажных квартир</h1>
            </div>


               {/* list of steps */}
                <div className='relative mx-auto '>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[1794px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col justify-between  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px] pl-5'>КОМФОРТНАЯ ПЛАНИРОВКА</h1>
                                </div>
    
                                <p className='text-[28px] pl-5'>В традиционной планировке дуплекса первый уровень обычно отведен под общие жилые помещения, такие как кухня, столовая, гостиная, кладовая и ванная комната, а на втором уровне располагаются личные помещения, такие как главная спальня, кабинет, детская комната и дополнительная ванная комната. Такая конфигурация способствует четкому разделению зон.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] '>ПЛАНИРОВКА ТЕРАССЫ</h1>
                                </div>

                                <p className='text-[28px]'>Интересный вариант предполагает изменение распределения пространств на противоположное, когда на втором этаже расположена терраса. В этом случае спальни и личные помещения расположены на первом уровне, а кухня, гостиная и другие общественные зоны — на втором, что позволяет воспользоваться прямым выходом на террасу.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col justify-between py-5 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>РАСПОЛОЖЕНИЕ ЛЕСТНИЦЫ</h1>
                                </div>
    
                                <p className='text-[26px] p-light'>Лестница, связующий элемент между двумя уровнями, должна быть тщательно спроектирована, чтобы обеспечить функциональность и эстетическую гармонию. В зависимости от имеющегося пространства и личных предпочтений вы можете выбрать между винтовой лестницей, которая занимает меньше места, и традиционной лестницей с несколькими пролетами.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] '>ВЕНТИЛЯЦИЯ И КОМФОРТ</h1>
                                </div>
    
                                <p className='text-[28px] '>Проектирование эффективной системы вентиляции имеет решающее значение в двухуровневых квартирах, где необходимо оптимизировать циркуляцию воздуха, чтобы предотвратить перегрев верхних помещений. В EvoHome мы используем передовые технологии для обеспечения комфортного климата в помещении в любое время года.
                                </p>
                            </div>

                        </li>
    
                    </ul>
    
    
                    <div className='w-[1604px] h-[338px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <div className='mb-10'>
                <Video text={'Ремонт двухэтажной квартиры от EVO HOME'}/>
            </div>



        </div>

        <LayoutCollection/>
        
    </div>
  )
}

export default TwostoryApartment