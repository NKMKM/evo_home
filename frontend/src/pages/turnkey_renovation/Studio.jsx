import React from 'react'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import Video from '../../components/Video'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/studio/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

// process images imports
import first_step from '../../assets/images/turnkey_renovation/studio/process/first_step.png'
import second_step from '../../assets/images/turnkey_renovation/studio/process/second_step.png'
import third_step from '../../assets/images/turnkey_renovation/studio/process/third_step.png'
import fourth_step from '../../assets/images/turnkey_renovation/studio/process/fourth_step.jpg'
import fifth_step from '../../assets/images/turnkey_renovation/studio/process/fifth_step.jpg'
import sixth_step from '../../assets/images/turnkey_renovation/studio/process/sixth_step.jpg'


const Studio = () => {
  return (
    <div>
        <Helmet>
            <title>Ремонт квартир студий</title>
            <meta name="description" content="Renovation of studio apartments by EVO Home" />
        </Helmet>
        {/* first step */}
        <header className='lg:w-[1641px] sm:w-full lg:h-[1550px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0'>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />

                <h1 className='font-bold mx-auto text-center sm:text-[50px] lg:text-[57px]'>Ремонт квартир-студий</h1>

                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block' />
            </div>
            
            {/* main content */}
            <div className='space-y-10'>
                {/* header */}
                <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-3 lg:mr-10'>1.</div>
                    <h2 className='sm:text-[26px] lg:text-[50px] font-bold sm:mt-4.5 lg:mt-0'>Ремонт квартир-студий от EVO HOME</h2>
                </div>

                {/* text */}
                <div className='text-[28px] sm:text-center lg:text-start sm:px-5 lg:px-0 flex flex-col space-y-10'>
                    <p>Ремонт квартир-студий от EVO HOME – это стильные и функциональные решения для небольшого пространства. Мы создаем уютные интерьеры, оптимизируем зонирование и используем современные материалы, чтобы ваша студия стала максимально комфортной и стильной.</p>
                    <p>Компания EvoHome, лидер в секторе ремонта квартир-студий, предлагает индивидуальные решения, которые превратят ваше пространство в уникальную, функциональную и стильную среду. Имея более чем 17-летний опыт работы в сфере строительства и ремонта, EvoHome является идеальным партнером для тех, кто ищет качество, надежность и персонализированное обслуживание.</p>
                    <p>Работая в Риме и его ближайших окрестностях, мы гарантируем профессиональный и эффективный подход, который позволит превратить ваш дом в настоящую мечту по конкурентоспособной цене, начиная всего от 500 евро за квадратный метр.</p>
                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='studio' loading="lazy" className='w-full h-full object-cover' /></div>

                <div className='sm:w-full lg:w-[1640px] h-[67px] flex flex-row items-center mx-auto'>
                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>
        </header>

        {/* process */}
        <main className='w-full sm:h-[7400px] lg:h-[4280px] flex flex-col justify-between '>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h2 className='sm:text-[28px] lg:text-[50px] font-bold sm:mt-4 lg:mt-0'>Подробнее о ремонте студий</h2>
            </div>

            <p className='sm:w-full lg:w-[1640px] sm:px-4 lg:px-0 text-[32px] mx-auto my-20 sm:text-center lg:text-start'>Каждый проект по ремонту с EvoHome начинается с тщательного планирования и точного проектирования с учетом ваших потребностей и желаний с целью максимальной оптимизации пространства вашей квартиры-студии.</p>

            <div className=' sm:h-[5600px] lg:h-[2813px] relative mx-auto '>
                <div className='w-[1557px] h-[690px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block '><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full ' /></div>

                <ul className='sm:h-[5500px] lg:h-[2813px] sm:w-full lg:w-[1641px]  flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-1  py-5 px-5 '>
                            <div>
                                <h2 className='font-bold text-[46px]'>ПРОФЕССИОНАЛЬНОЕ КОНСУЛЬТИРОВАНИЕ</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Наши специалисты помогут разработать оптимальный план ремонта квартиры-студии, учитывая эргономику, стиль и бюджет. Мы подскажем, как эффективно зонировать пространство, выбрать материалы, освещение и мебель для создания уютного и функционального интерьера. EVO HOME – экспертный подход к каждому проекту.</p>
                        </div>


                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] sm:h-[378px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 sm:px-5 lg:px-0  '>
                            <div>
                                <h2 className='font-bold text-[46px]'>ПЕРВОКЛАССНЫЕ МАТЕРИАЛЫ</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Мы используем только проверенные и премиальные материалы, обеспечивающие надежность, экологичность и эстетическую привлекательность. В нашей работе – износостойкие покрытия, натуральные отделочные материалы, инновационные технологии и передовые решения для максимального комфорта и долговечности вашего интерьера.</p>

                            
                        </div>


                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                            <div>
                                <h2 className='font-bold text-[46px]'>ИНДВИДУАЛЬНЫЕ РЕШЕНИЯ</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Мы разрабатываем уникальные проекты, учитывая стиль, пожелания и особенности пространства. Каждое решение – это гармония эстетики, функциональности и комфорта. От планировки до подбора материалов и декора – все детали прорабатываются индивидуально, чтобы создать интерьер, отражающий вашу личность.</p>
                        </div>


                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 sm:px-5 lg:px-0 lg:pr-5'>
                            <div>
                                <h2 className='font-bold text-[46px]'>ПРОЗРАЧНОСТЬ И НАДЕЖНОСТЬ</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Прозрачность лежит в основе нашей философии. В EvoHome мы стремимся предоставлять вам понятные и подробные сметы, гарантируя, что стоимость ремонта всегда будет прозрачной и свободной от сюрпризов. При ценах от 500 евро за квадратный метр мы предлагаем доступные решения без ущерба качеству.</p>
                        </div>



                    </li>

                    {/* 5 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                            <div>
                                <h2 className='font-bold text-[42px]'>ОПЫТ И ГАРАНТИЯ</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Имея более чем 17-летний опыт работы, мы даем 3-летнюю гарантию на каждый ремонт, что свидетельствует о надежности и долговечности нашей работы. Выбирая EvoHome, вы доверяете профессионалам отрасли, способным преобразовать любое пространство в соответствии с вашими потребностями.</p>
                        </div>


                    </li>

                    {/* 6 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full sm:h-[378px] lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={sixth_step} alt='sixth step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 sm:px-5 lg:px-0 '>
                            <div>
                                <h2 className='font-bold text-[46px]'>РЕМОНТ В РИМЕ И ОКРЕСТНОСТЯХ</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Наша сфера деятельности охватывает город Рим и его ближайшие окрестности, что позволяет нам предлагать быстрое и эффективное обслуживание. Независимо от того, живете ли вы в самом центре столицы или в ее окрестностях, с командой EvoHome вы сможете превратить свою квартиру-студию в шедевр комфорта и дизайна.</p>
                        </div>


                    </li>


                </ul>


                <div className='w-[1370px] h-[776px]  absolute scale-90 top-[1275px] left-[325px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full' /></div>
                <div className='absolute w-[1303px] h-[460px] top-[2270px] scale-95 left-[355px] sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full'/></div>
            </div> 


            {/* video */}
            <Video text={'Ремонт квартир-студий от EVO HOME'}/>


        </main>

        <LayoutCollection/>

    </div>
  )
}

export default Studio