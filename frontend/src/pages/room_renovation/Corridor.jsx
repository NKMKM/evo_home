import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/corridor/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/room_renovation/corridor/process/first_step.jpg'
import second_step from '../../assets/images/room_renovation/corridor/process/second_step.png'
import third_step from '../../assets/images/room_renovation/corridor/process/third_step.png'
import fourth_step from '../../assets/images/room_renovation/corridor/process/fourth_step.jpg'
import fifth_step from '../../assets/images/room_renovation/corridor/process/fifth_step.jpg'


const Corridor = () => {
  return (
    <div>
        <Helmet>
            <title>Реновация коридора</title>
            <meta name="description" content="Renovation of corridors by EVO Home" />
        </Helmet>
        {/* first step */}
        <header className='lg:w-[1641px] sm:w-full lg:h-[1525px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Ремонт коридора</h1>

                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h1 className='sm:text-[32px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Ремонт коридора от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>Ремонт коридора вашего дома в Риме подразумевает не только эстетические изменения; Это преобразование, которое улучшает общую функциональность и комфорт вашей жилой среды. Обладая более чем 17-летним опытом, мы в Evo Home предлагаем индивидуальные ремонтные работы по всему Риму и его окрестностям , гарантируя высококачественные результаты по цене от 2500 евро. Вы ищете ремонт, который будет отражать ваш личный стиль и отвечать всем вашим потребностям?</p>
                    <p>В самом сердце столицы наша команда экспертов использует креативные решения и современные дизайны для коридоров, которые подойдут для любого типа квартиры : от студий до четырехкомнатных квартир и дуплексов . Каждый проект выполняется из высококачественных материалов, тщательно отобранных для обеспечения долговечности и стиля. С Evo Home вы не только получите уверенность в качественно выполненной работе с гарантией от трех лет, но и сможете наслаждаться полностью обновленной обстановкой, которая повысит уют и эстетику вашего жилого пространства.</p>
                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='corridor' loading="lazy" className='w-full h-full object-cover' /></div>

                <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>
        </header>

        {/* process */}
        <main className='lg:w-full sm:h-[6800px]   lg:h-[3788px]  flex flex-col justify-between'>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>2.</div>
                <h2 className='sm:text-[25px] lg:text-[50px] font-bold sm:mt-5 lg:mt-0'>Подробнее о ремонте коридора от EVO HOME </h2>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Планирование и первоначальные консультации — важнейшие этапы, знаменующие начало любого успешного ремонта. Эти этапы позволяют нам установить четкие и прямые отношения с клиентом, что необходимо для достижения результатов, превосходящих ожидания.</p>

            {/* list of steps */}
            <div className='sm:h-[4950px]  lg:h-[2260px] sm:w-full lg:w-auto relative mx-auto '>
                <div className='lg:w-[1377px] lg:h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full' /></div>

                <ul className='sm:h-[4950px] lg:h-full sm:w-full lg:w-[1641px] flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>АНАЛИЗ ПРРОСТРАНСТВА</h2>

                            <p className='text-[26px] pb-5'>Тщательно измерьте пространство, чтобы убедиться, что каждый элемент дизайна пропорционален и хорошо интегрирован.Рассмотрение таких деталей, как естественное освещение, высота потолков и существующие конструктивные элементы. </p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6 lg:px-0 '>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ВЫБОР МАТЕРИАЛОВ</h2>

                            <p className='text-[26px] pb-5'>Выбор, основанный на качестве и долговечности : использование материалов, которые не только соответствуют высоким эстетическим стандартам, но и долговечны.Избранные поставщики : Сотрудничество с проверенными итальянскими и европейскими поставщиками, известными превосходным качеством своей продукции.</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ЭКОЛОГИЧНОСТЬ МАТЕРИАЛОВ</h2>
                            <p className='text-[26px] pb-5'>Интеграция технологических решений : предложение инновационных решений, таких как интеллектуальные системы освещения или напольное отоплениеПерсонализация посредством цифрового дизайна : использование передового программного обеспечения для предварительного просмотра окончательного дизайна</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-[378px] lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fouth step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 sm:px-6 lg:px-0'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>ОБРАБОТКА ПОТОЛКА И СТЕН</h2>
                            <p className='text-[26px] pb-5'>Выравнивание : Для обеспечения гладкости поверхности необходимо тщательно удалить все неровности.Варианты отделки : Мы подбираем отделку в соответствии с высотой и стилем вашего потолка.Виниловые обои : Мы предлагаем широкий выбор виниловых обоев, которые просты в уходе и доступны в различных дизайнах</p>
                        </div>
                    </li>

                    {/* 5 */}
                    <li className='sm:w-[85%] sm:ml-[7%] lg:w-full lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row justify-between'>
                        {/* process photo  */}
                        <div className='sm:w-full sm:h-auto lg:w-[667px] lg:h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover' /></div>
                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full flex flex-col space-y-8 py-5 px-6'>
                            <h2 className='font-bold sm:text-[42px] lg:text-[44px]'>НАПОЛЬНОЕ ПОКРЫТИЕ</h2>
                            
                            <p className='text-[26px] pb-5'>Премиальные материалы : мы выбираем только лучшие материалы, такие как высококачественный ламинат, керамика и натуральный камень, известные своей долговечностью.Профессиональная установка : установка пола выполняется опытными специалистами, которые используют точные методы и передовые технологии</p>
                        </div>
                    </li>
                </ul>

                <div className='w-[1604px] h-[627px] absolute top-[1310px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
            </div>

            <div className='mb-10'>
                <Video text={'Ремонт коридора от EVO HOME'} />
            </div>
        </main>

        <LayoutCollection/>












    </div>
  )
}

export default Corridor