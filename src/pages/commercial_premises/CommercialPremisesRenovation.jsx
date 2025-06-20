import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/commercial_premises_renovation/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/commercial_premises/commercial_premises_renovation/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/commercial_premises_renovation/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/commercial_premises_renovation/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/commercial_premises_renovation/process/fourth_step.png'
import fifth_step from '../../assets/images/commercial_premises/commercial_premises_renovation/process/fifth_step.png'


const CommercialPremisesRenovation = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1677px] mx-auto mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20'>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Реновация коммерческих помещений</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='h-[1577px] flex flex-col justify-between  '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Реновация коммерческих помещений от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px] h-[404px] flex flex-col justify-between '>
                    <p>Реновация является одним из важнейших элементов успешной деятельности бизнеса. Наша компания Evo Home уже более 17 лет предлагает комплексные услуги по ремонту магазинов, бизнес-центров, офисов, баров и ресторанов в Риме и его окрестностях . Мы гарантируем функциональную и современную среду, которая привлекает и удерживает клиентов, при этом цены на реновацию коммерческих помещений начинаются от 400 евро за квадратный метр.</p>
                    <p>Компания Evo Home специализируется на ремонте широкого спектра коммерческих помещений, каждое из которых имеет свои особенности и особые потребности. Мы предлагаем индивидуальный подход к оптимизации использования и эстетики каждой среды</p>

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
                <h1 className='text-[50px] font-bold'>Подробнее о реновации коммерческих помещений</h1>
            </div>



               {/* list of steps */}
                <div className='relative mx-auto my-20 mb-10'>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[2270px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px] pl-5'>ТОРГОВЫЕ ЦЕНТРЫ</h1>
                                </div>
    
                                <p className='text-[27px] p-light pl-5'>Реконструкция торговых центров требует детального планирования, чтобы обеспечить оптимальный поток покупателей, а также максимальную доступность и безопасность. Мы вносим изменения в общие зоны, внутренние магазины, туалеты и зоны ресторанов, улучшая эстетику и функциональность.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] '>РАЗВЛЕКАТЕЛЬНЫЕ КОМПЛЕКСЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>В развлекательных комплексах, таких как кинотеатры и парки развлечений, мы уделяем особое внимание модернизации технических, акустических и визуальных объектов. Мы создаем комфортную и привлекательную среду, которая улучшает качество обслуживания клиентов.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>КРУПНЫЕ СУПЕРМАРКЕТЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>В супермаркетах ключевыми факторами являются эффективность пространства и расположение товаров. Мы предлагаем решения, которые улучшают внутреннюю логистику, освещение и презентацию продукции, повышая удовлетворенность клиентов.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] '>СПЕЦИАЛИЗИРОВАННЫЕ МАГАЗИНЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Нишевым магазинам требуется дизайн, отражающий индивидуальность бренда и привлекающий целевую клиентуру. Мы создаем индивидуальные интерьеры, используя высококачественные материалы и передовые технологии для создания уникальной атмосферы.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>КАФЕ,РЕСТОРАНЫ И БАРЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>При реновации предприятий общественного питания особое внимание уделяется таким аспектам, как эргономика кухни, атмосфера в помещении, безопасность и соблюдение санитарно-гигиенических норм. Мы проектируем уютные пространства, в которые клиентам хочется возвращаться.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1310px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <div className='mb-10'>
                <Video text={'Реновация коммерческих помещений от EVO HOME'}/>
            </div>



        </div>

        <CommercialPremisesLayoutCollection/>













    </div>
  )
}

export default CommercialPremisesRenovation