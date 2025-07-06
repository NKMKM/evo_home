import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/twostory_apartment/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/twostory_apartment/process/first_step.jpg'
import second_step from '../../assets/images/turnkey_renovation/twostory_apartment/process/second_step.jpg'
import third_step from '../../assets/images/turnkey_renovation/twostory_apartment/process/third_step.jpg'
import fourth_step from '../../assets/images/turnkey_renovation/twostory_apartment/process/fourth_step.jpg'


const TwostoryApartment = () => {
  return (
    <div>
        {/* first step */}
        <div className='lg:w-[1641px] sm:w-full lg:h-[1475px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Ремонт двухэтажной квартиры</h1>

                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[24px] lg:text-[50px] font-bold sm:mt-4.5 lg:mt-0'>Ремонт двухэтажной квартиры от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>Вы планируете отремонтировать двухуровневую квартиру, чтобы превратить свой дом в уникальное место, отражающее ваш образ жизни? EvoHome — ваше идеальное решение. Имея более чем 17-летний опыт работы в сфере строительства и ремонта, мы специализируемся на инновационных проектах двухуровневых квартир и предлагаем комплексные услуги, охватывающие все аспекты процесса ремонта. Работая в Риме и его окрестностях, мы гарантируем высочайшее качество преобразований по ценам от 60 000 евро и гарантию на результат сроком более 3 лет.</p>
                    <p>Оценка и выбор различных вариантов планировки двухуровневой квартиры является важнейшим этапом на этапе проектирования, поскольку позволяет максимально эффективно использовать пространство и повысить удобство проживания в доме. В EvoHome мы обладаем обширным опытом в сфере ремонта и предлагаем инновационные и индивидуальные решения для удовлетворения любых потребностей.</p>
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

        <div className='lg:w-full lg:h-[3288px] flex flex-col justify-between'>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h1 className='sm:text-[24px] lg:text-[50px] font-bold sm:mt-5 lg:mt-0'>Подробнее о ремонте двухэтажных квартир</h1>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Наш специалист проводит точные измерения непосредственно на месте. Если проект предусматривает реконструкцию помещений, мы определяем, какие стены можно модифицировать, обеспечивая при этом соблюдение действующих норм и максимальную безопасность.</p>

            {/* list of steps */}
            <div className='sm:h-[4200px] lg:h-[1860px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='sm:h-[4200px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>КОМФОРТНАЯ ПЛАНИРОВКА</h1>

                            <p className='text-[26px] pb-5'>В традиционной планировке дуплекса первый уровень обычно отведен под общие жилые помещения, такие как кухня, столовая, гостиная, кладовая и ванная комната, а на втором уровне располагаются личные помещения, такие как главная спальня, кабинет, детская комната и дополнительная ванная комната. Такая конфигурация способствует четкому разделению зон.</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6 lg:px-0 '>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ПЛАНИРОВКА ТЕРРАСЫ</h1>

                            <p className='text-[26px] pb-5'>Интересный вариант предполагает изменение распределения пространств на противоположное, когда на втором этаже расположена терраса. В этом случае спальни и личные помещения расположены на первом уровне, а кухня, гостиная и другие общественные зоны — на втором, что позволяет воспользоваться прямым выходом на террасу.</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>РАСПОЛОЖЕНИЕ ЛЕСТНИЦЫ</h1>
                            <p className='text-[26px] pb-5'>Лестница, связующий элемент между двумя уровнями, должна быть тщательно спроектирована, чтобы обеспечить функциональность и эстетическую гармонию. В зависимости от имеющегося пространства и личных предпочтений вы можете выбрать между винтовой лестницей, которая занимает меньше места, и традиционной лестницей с несколькими пролетами.</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ВЕНТИЛЯЦИЯ И КОМФОРТ</h1>
                            <p className='text-[26px] pb-5'>Проектирование эффективной системы вентиляции имеет решающее значение в двухуровневых квартирах, где необходимо оптимизировать циркуляцию воздуха, чтобы предотвратить перегрев верхних помещений. В EvoHome мы используем передовые технологии для обеспечения комфортного климата в помещении в любое время года.</p>
                        </div>
                    </li>

                </ul>

                <div className='absolute w-[1303px] h-[460px] top-[1290px] scale-85 left-[280px] sm:hidden lg:block'><img src={arrow_2} className='w-full h-full'/></div>
            </div>

            <div className='mb-10'>
                <Video text={'Ремонт двухэтажной квартиры от EVO HOME'} />
            </div>
        </div>

        <LayoutCollection/>
        
    </div>
  )
}

export default TwostoryApartment