import React from 'react'
import { Link } from 'react-router-dom'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import Video from '../../components/Video'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/designer_renovation/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/designer_renovation/process/first_step.jpg'
import second_step from '../../assets/images/turnkey_renovation/designer_renovation/process/second_step.png'
import third_step from '../../assets/images/turnkey_renovation/designer_renovation/process/third_step.png'
import fourth_step from '../../assets/images/turnkey_renovation/designer_renovation/process/fourth_step.png'
import fifth_step from '../../assets/images/turnkey_renovation/designer_renovation/process/fifth_step.jpg'



const DesignerRenovation = () => {
  return (
    <div>
        {/* first step */}
        <div className='lg:w-[1641px] sm:w-full lg:h-[1525px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Дизайнерский ремонт квартир </h1>

                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Дизайнерский ремонт от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>Добро пожаловать в EvoHome — ваш выбор совершенства в сфере дизайнерского ремонта.
                    Обладая более чем 17-летним опытом и страстью к преобразованию пространств, компания EvoHome является лидером в области дизайнерского ремонта квартир в Риме и его окрестностях. Мы предлагаем полный спектр услуг, сочетающий в себе изысканную эстетику, расширенную функциональность и 3-летнюю гарантию качества на выполненные работы в течение 3 лет, по конкурентоспособным ценам, начиная всего от 500 евро/м².</p>
                    <p>Дизайнерский ремонт квартир от EVO HOME – это сочетание стиля, комфорта и функциональности. Мы создаем уникальные интерьеры, отражающие индивидуальность каждого клиента. Разрабатываем эксклюзивные дизайн-проекты, используя современные технологии и премиальные материалы. Полный цикл работ включает все этапы – от разработки концепции и чертежей до финального декора и меблировки. Наши специалисты тщательно контролируют каждый процесс, чтобы гарантировать безупречное качество и строгое соблюдение сроков</p>
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
        <div className='lg:w-full lg:h-[3688px]  flex flex-col justify-between'>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h1 className='sm:text-[28px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее о дизайнерском ремонте</h1>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Наш специалист проводит точные измерения непосредственно на месте. Если проект предусматривает реконструкцию помещений, мы определяем, какие стены можно модифицировать, обеспечивая при этом соблюдение действующих норм и максимальную безопасность.</p>

            {/* list of steps */}
            <div className='sm:h-[5000px] lg:h-[2260px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='sm:h-[5000px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>РАЗРАБОТКА ДИЗАЙН-ПРОЕКТА</h1>

                            <p className='text-[26px] pb-5'>Планирование пространства: индивидуальные решения, которые оптимизируют имеющееся пространство.
                            Инженерные проекты: детальные проекты по строительству систем освещения, кондиционирования, отопления и безопасности.
                            3D-визуализация: графические материалы, как печатные, так и цифровые, позволяющие воплотить в жизнь желаемый дизайн</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6 lg:px-0 '>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>ПОДРОБНАЯ СМЕТА</h1>

                            <p className='text-[26px] pb-5'>Подробная смета – это детализированный документ, в котором отражены все работы, материалы и затраты, необходимые для ремонта. Мы составляем смету с учетом индивидуальных пожеланий клиента, предоставляя четкое представление о бюджете проекта.Наша цель – сделать ремонт максимально удобным и прогнозируемым. </p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>КАЧЕСТВЕННАЯ ОТДЕЛКА</h1>
                            <p className='text-[26px] pb-5'>Качественная отделка – это завершающий этап ремонта, который придает интерьеру эстетичный вид, комфорт и долговечность. Мы используем только проверенные материалы, профессиональное оборудование и современные технологии, чтобы добиться идеального результата.От потолка до стен, от укладки полов до создания дизайнерских ванных комнат и кухонь — каждая деталь совершенна</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>УСТАНОВКА СИСТЕМЫ АВТОМАТИЗАЦИИ</h1>
                            <p className='text-[26px] pb-5'>Система автоматизации – это комплекс современных технологий, который делает ваш дом удобным, безопасным и энергоэффективным. Мы интегрируем интеллектуальные решения, позволяющие управлять освещением, климатом, безопасностью и бытовыми устройствами через смартфон или голосовые команды.</p>
                        </div>
                    </li>

                    {/* 5 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h1 className='font-bold sm:text-[42px] lg:text-[44px]'>МЕБЕЛЬ И АКСЕССУАРЫ</h1>
                            
                            <p className='text-[26px] pb-5'>Правильно подобранная мебель и аксессуары создают гармоничное пространство, отражающее индивидуальность владельца. Мы предлагаем комплексные решения по подбору, изготовлению и расстановке мебели, а также стильных декоративных элементов.</p>
                        </div>
                    </li>
                </ul>

                <div className='w-[1604px] h-[627px] absolute top-[1300px] left-0 sm:hidden lg:block'><img src={arrow_2} className='w-full h-full' /></div>
            </div>

            <div className='mb-10'>
                <Video text={'Дизайнерский ремонт квартир от EVO HOME'} />
            </div>
        </div>

        <LayoutCollection/>












    </div>
  )
}

export default DesignerRenovation