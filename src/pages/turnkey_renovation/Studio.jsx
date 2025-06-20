import React from 'react'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import Video from '../../components/Video'
import { Link } from 'react-router-dom'

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
        {/* first step */}
        <div className=' w-[1641px] h-[1728px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Ремонт квартир-студий</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className=' -violet-500 space-y-10 '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Ремонт квартир-студий от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px]  h-[550px] flex flex-col justify-around '>
                    <p>Ремонт квартир-студий от EVO HOME – это стильные и функциональные решения для небольшого пространства. Мы создаем уютные интерьеры, оптимизируем зонирование и используем современные материалы, чтобы ваша студия стала максимально комфортной и стильной</p>
                    <p>Компания EvoHome, лидер в секторе ремонта квартир-студий, предлагает индивидуальные решения, которые превратят ваше пространство в уникальную, функциональную и стильную среду. Имея более чем 17-летний опыт работы в сфере строительства и ремонта, EvoHome является идеальным партнером для тех, кто ищет качество, надежность и персонализированное обслуживание.</p>
                    <p>Работая в Риме и его ближайших окрестностях, мы гарантируем профессиональный и эффективный подход, который позволит превратить ваш дом в настоящую мечту по конкурентоспособной цене, начиная всего от 500 евро за квадратный метр</p>

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

        <div className='w-full h-[4883px]  flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto mb-20'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте студий</h1>
                <p></p>
            </div>

            <p className='w-[1640px] h-[101px] text-[32px] mx-auto mb-20'>Каждый проект по ремонту с EvoHome начинается с тщательного планирования и точного проектирования с учетом ваших потребностей и желаний с целью максимальной оптимизации пространства вашей квартиры-студии.</p>

            <div className=' w-[1641px] h-[3476px] mx-auto'>
               {/* list of steps */}
                <div className='relative'>
                    <div className='w-[1323px] h-[776px]  absolute top-[427px] left-[300px]'><img src={arrow_1} className='w-full h-full' /></div>
    
                    <ul className='h-[3476px] w-[1641px] flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[474px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px]  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>ПРОФЕССИОНАЛЬНОЕ КОНСУЛЬТИРОВАНИЕ</h1>
                                </div>
    
                                <p className='text-[29px] p-light'>Наши специалисты помогут разработать оптимальный план ремонта квартиры-студии, учитывая эргономику, стиль и бюджет. Мы подскажем, как эффективно зонировать пространство, выбрать материалы, освещение и мебель для создания уютного и функционального интерьера. EVO HOME – экспертный подход к каждому проекту.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[474px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px]  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>ПЕРВОКЛАССНЫЕ МАТЕРИАЛЫ</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Мы используем только проверенные и премиальные материалы, обеспечивающие надежность, экологичность и эстетическую привлекательность. В нашей работе – износостойкие покрытия, натуральные отделочные материалы, инновационные технологии и передовые решения для максимального комфорта и долговечности вашего интерьера.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[474px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px]  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>ИНДИВИДУАЛЬНЫЕ РЕШЕНИЯ</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Мы разрабатываем уникальные проекты, учитывая стиль, пожелания и особенности пространства. Каждое решение – это гармония эстетики, функциональности и комфорта. От планировки до подбора материалов и декора – все детали прорабатываются индивидуально, чтобы создать интерьер, отражающий вашу личность.</p>
                            </div>

                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[474px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px] flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>ПРОЗРАЧНОСТЬ И НАДЕЖНОСТЬ</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Прозрачность лежит в основе нашей философии. В EvoHome мы стремимся предоставлять вам понятные и подробные сметы, гарантируя, что стоимость ремонта всегда будет прозрачной и свободной от сюрпризов. При ценах от 500 евро за квадратный метр мы предлагаем доступные решения без ущерба качеству.</p>
                            </div>
                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[483px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px] flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>ОПЫТ И ГАРАНТИЯ</h1>
                                </div>
    
                                <p className='text-[32px] p-light'>Имея более чем 17-летний опыт работы, мы даем 3-летнюю гарантию на каждый ремонт, что свидетельствует о надежности и долговечности нашей работы. Выбирая EvoHome, вы доверяете профессионалам отрасли, способным преобразовать любое пространство в соответствии с вашими потребностями.</p>
                            </div>

                        </li>

                        {/* 6 */}
                        <li className=' w-full h-[474px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-[474px] border-[5px] border-[#F9B33B]'><img src={sixth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-[474px] flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[50px]'>РЕМОНТ СТУДИЙ В РИМЕ И ОКРЕСТНОСТЯХ</h1>
                                </div>
    
                                <p className='text-[30px] p-light'>Наша сфера деятельности охватывает город Рим и его ближайшие окрестности, что позволяет нам предлагать быстрое и эффективное обслуживание. Независимо от того, живете ли вы в самом центре столицы или в ее окрестностях, с командой EvoHome вы сможете превратить свою квартиру-студию в шедевр комфорта и дизайна.</p>
                            </div>

                        </li>
                    </ul>
    
    
                    <div className='w-[1323px] h-[776px]  absolute top-[1630px] left-[300px]'><img src={arrow_1} className='w-full h-full' /></div>
                    <div className='absolute w-[1303px] h-[738px] top-[2820px] right-[50px]'><img src={arrow_2}/></div>
                </div> 
            </div>


            {/* video */}
            <div className='mb-10'>
                <Video text={'Ремонт квартир-студий от EVO HOME'}/>
            </div>

        </div>

        <LayoutCollection/>

    </div>
  )
}

export default Studio