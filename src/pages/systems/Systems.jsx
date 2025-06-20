import React from 'react'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/systems/image.png'
import vector_about_us_1 from'../../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from'../../assets/videos/abouts_us/vector2.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/systems/systems/process/first_step.png'
import second_step from '../../assets/images/systems/systems/process/second_step.png'
import third_step from '../../assets/images/systems/systems/process/third_step.png'
import fourth_step from '../../assets/images/systems/systems/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/systems/process/fifth_step.png'
import sixth_step from '../../assets/images/systems/systems/process/sixth_step.png'
import seventh_step from '../../assets/images/systems/systems/process/seventh_step.png'

import Calculator from '../../components/mainpage_components/Calculator'
import Reasons from '../../components/Reasons'
import SystemProjects from '../../components/systems_components/SystemProjects'




const System = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1677px] mx-auto mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20'>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Системы</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='h-[1577px] flex flex-col justify-between  '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Системы от EVO HOME</h1>
                </div>

                {/* text */}
                <div className='text-[32px] w-[1641px] h-[504px] flex flex-col justify-between '>
                    <p>При ремонте квартиры , дома или коммерческого помещения часто возникает необходимость вмешательства в системы здания . Будь то системы водоснабжения, электроснабжения или кондиционирования воздуха, их правильная конструкция имеет решающее значение для обеспечения безопасности и функциональности дома или коммерческого помещения.</p>
                    <p>Компания Evo Home , имеющая более чем 17-летний опыт работы в этом секторе, стремится создавать самые современные системы, всегда соответствующие действующим нормам и выдающие все требуемые законом сертификаты. Мы специализируемся на установке, обслуживании и модернизации сложных систем, которые улучшают качество жизни и увеличивают стоимость недвижимости.</p>

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

        <div className='w-full h-[4703px] mb-40 flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о системах</h1>
            </div>



               {/* list of steps */}
                <div className='relative mx-auto  my-30'>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px]'><img src={arrow_1} className='w-full h-full ' /></div>
    
                    <ul className='h-[3213px] w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10  py-5 px-3 '>
                                <div>
                                    <h1 className='font-bold text-[46px]'>ЭЛЕКТРИЧЕСКАЯ СИСТЕМА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Бытовые электросистемы подчиняются строгим нормам, регламентирующим их проектирование, установку и испытания, что обеспечивает высокую производительность и безопасность. Компания Evo Home проектирует и устанавливает электрические системы в соответствии с регламентом CEI 64-8 и выдачей декларации о соответствии.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] px-5'>ГАЗОВАЯ СИСТЕМА</h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Установка газовых систем требует передовых технических навыков и соблюдения правил безопасности. Наша команда гарантирует профессиональный монтаж, уделяя максимальное внимание герметизации стыков и целостности труб, обеспечивая идеальную герметичность системы.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ПОДОГРЕВ ПОЛА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Теплый пол — одно из самых популярных решений для нового строительства и ремонта. Эта система не только гарантирует исключительный комфорт благодаря равномерному распределению тепла, но и позволяет существенно экономить электроэнергию, особенно в сочетании с возобновляемыми источниками энергии.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] px-5'>СИСТЕМЫ ДРЕНАЖА И КАНАЛИЗАЦИИ </h1>
                                </div>
    
                                <p className='text-[28px] p-light px-5'>Системы дренажа и канализации являются важнейшим компонентом надлежащего управления сточными водами. Наша компания проектирует и устанавливает дренажные системы, подключаемые к основной канализационной системе, обеспечивая оптимальную эффективность и максимальную безопасность.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={fifth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>ТЕРМОГИДРАВЛИЧЕСКИЕ СИСТЕМЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Термогидравлические системы предназначены для кондиционирования помещений как летом, так и зимой. В качестве теплоносителя они используют горячую воду, что обеспечивает эффективный нагрев. Компания Evo Home проектирует и устанавливает термогидравлические системы, обеспечивающие не только комфорт проживания, но и значительную экономию энерги.</p>
                            </div>


                        </li>

                        {/* 6 */}
                        <li className=' w-full h-[384px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={sixth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>КОНДИЦИОНИРОВАНИЕ И КЛИМАТ-КОНТРОЛЬ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Климат-контроль необходим для обеспечения комфорта в различных помещениях, как жилых, так и коммерческих. Необходимость использования современных систем управления качеством воздуха зависит от характеристик помещений и климата региона.</p>
                            </div>


                        </li>

                        {/* 7*/}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={seventh_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>СЕТИ СВЯЗИ И СИСТЕМЫ НИЗКОГО НАПРЯЖЕНИЯ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Коммуникационные сети, необходимые для коммерческой деятельности, устанавливаются после прокладки основных инфраструктур завода. Прокладка линий низкого напряжения включает в себя прокладку кабелей, соединяющих отдельные счетчики с необходимым оборудованием.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1307px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                    <div className='w-[1604px] h-[627px]  absolute top-[2260px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <div className=' w-full h-[1050px] flex flex-col justify-between  my-20 mx-auto'>
                <h1 className='text-[50px] font-bold text-center'>Установка систем от EVO HOME</h1>
    
                {/* videos(instead of them just a div with any bg color) */}
                <div className='w-full h-[696px] relative flex flex-row'>
                    <div className='absolute  h-[853px] bottom-0 -z-10'><img src={vector_about_us_1} className='w-full h-full'/></div>
                    <div className='w-[1227px] h-[696px] bg-[#f5ab32] text-center mx-auto shadow-2xl '>
                        <iframe width="1227px" height="696px" src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
    
                    <div className='absolute h-[853px] bottom-0 right-0 -z-10'><img src={vector_about_us_2} className='w-full h-full'/></div>
                </div>

                <div className='w-[1641px] h-[336px] flex flex-col space-y-5 my-10 mx-auto text-[30px]'>
                    <p>Доверившись Evo Home , вы выбираете надежного партнера с более чем 17-летним опытом работы в сфере систем и ремонта. Мы предоставляем полный спектр сертифицированных услуг по установке, обслуживанию и модернизации бытовых систем в Риме, всегда гарантируя безопасность, эффективность и соответствие нормам.</p>
                    <p>Свяжитесь с нами сегодня по телефону <span className='underline cursor-default'>+39 327 986 6412</span>, чтобы получить бесплатную консультацию или запросить персональное предложение.</p>
                </div>
                
                <div className='w-[1640px]  h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>
                    

                    <div className='h-[1px] w-[625.5px] bg-[#F9B33B]'></div>
                </div>

    
            </div>



        </div>

        {/* reasons why */}

        <Reasons/>

        {/* calculator */}
        <div className='mb-20'>
            <Calculator/>
        </div>


        {/* projects */}
        <SystemProjects/>

    </div>
  )
}

export default System