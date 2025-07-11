import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

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
import CommercialPremisesProjects from '../../components/commercial_premises_components/CommercialPremisesProjects'




const System = () => {
  return (
    <div>
        <Helmet>
            <title>Системы</title>
            <meta name="description" content="Systems made by EVO Home" />
        </Helmet>
        {/* first step */}
        <header className='sm:w-full lg:w-[1641px] sm:h-[1500px] lg:h-[1677px] mx-auto sm:mt-10 lg:mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] lg:w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block  '/>
                <div className=''>
                    <h1 className='font-bold text-center sm:text-[50px] lg:text-[57px]'>Системы</h1>

                </div>
                <img src={right_decoration} about='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>
            
            {/* main content */}
            <div className='sm:h-[1400px] lg:h-[1510px] flex flex-col justify-between  '>
                {/* header */}
                <div className='lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h2 className='sm:text-[45px] lg:text-[50px] font-bold'>Системы от EVO HOME</h2>
                </div>

                {/* text */}
                <div className='sm:text-[28px] lg:text-[32px] sm:w-full sm:px-4 lg:px-0 sm:text-center lg:text-start lg:w-[1641px] sm:h-[880px] lg:h-[504px] flex flex-col justify-between '>
                    <p>При ремонте квартиры , дома или коммерческого помещения часто возникает необходимость вмешательства в системы здания . Будь то системы водоснабжения, электроснабжения или кондиционирования воздуха, их правильная конструкция имеет решающее значение для обеспечения безопасности и функциональности дома или коммерческого помещения.</p>
                    <p>Компания Evo Home , имеющая более чем 17-летний опыт работы в этом секторе, стремится создавать самые современные системы, всегда соответствующие действующим нормам и выдающие все требуемые законом сертификаты. Мы специализируемся на установке, обслуживании и модернизации сложных систем, которые улучшают качество жизни и увеличивают стоимость недвижимости.</p>

                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='systems' loading="lazy" className='w-full h-full object-cover'/></div>

                <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>


        </header>

        {/* process */}

        <main className='w-full lg:h-[4703px] lg:mb-40 flex flex-col justify-between '>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-5 lg:mr-10'>2.</div>
                <h2 className='sm:text-[45px] lg:text-[50px] font-bold'>Подробнее о системах</h2>
            </div>



            {/* list of steps */}
            <div className=' sm:h-[6600px] lg:h-auto relative mx-auto  my-30'>
                <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full ' /></div>

                <ul className='sm:h-[6700px]  lg:h-[3213px] sm:w-full lg:w-[1641px]  flex flex-col justify-between space-y-20'>
                    {/* 1 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 lg:px-5 '>
                            <div>
                                <h2 className='font-bold text-[46px]'>ЭЛЕКТРИЧЕСКАЯ СИСТЕМА</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Бытовые электросистемы подчиняются строгим нормам, регламентирующим их проектирование, установку и испытания, что обеспечивает высокую производительность и безопасность. Компания Evo Home проектирует и устанавливает электрические системы в соответствии с регламентом CEI 64-8 и выдачей декларации о соответствии.</p>
                        </div>


                    </li>

                    {/* 2 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5  '>
                            <div>
                                <h2 className='font-bold text-[46px]'>ГАЗОВАЯ СИСТЕМА</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Установка газовых систем требует передовых технических навыков и соблюдения правил безопасности. Наша команда гарантирует профессиональный монтаж, уделяя максимальное внимание герметизации стыков и целостности труб, обеспечивая идеальную герметичность системы.</p>
                        </div>


                    </li>

                    {/* 3 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                            <div>
                                <h2 className='font-bold text-[46px]'>ПОДОГРЕВ ПОЛА</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Теплый пол — одно из самых популярных решений для нового строительства и ремонта. Эта система не только гарантирует исключительный комфорт благодаря равномерному распределению тепла, но и позволяет существенно экономить электроэнергию, особенно в сочетании с возобновляемыми источниками энергии.</p>
                        </div>


                    </li>

                    {/* 4 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                            <div>
                                <h2 className='font-bold text-[46px]'>СИСТЕМА ДРЕНАЖА И КАНАЛИЗАЦИИ</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Системы дренажа и канализации являются важнейшим компонентом надлежащего управления сточными водами. Наша компания проектирует и устанавливает дренажные системы, подключаемые к основной канализационной системе, обеспечивая оптимальную эффективность и максимальную безопасность.</p>
                        </div>


                    </li>

                    {/* 5 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={fifth_step} alt='fifth step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 lg:px-5 '>
                            <div>
                                <h2 className='font-bold text-[42px]'>ТЕРОМГИДРАВЛИЧЕСКАЯ СИСТЕМА</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Термогидравлические системы предназначены для кондиционирования помещений как летом, так и зимой. В качестве теплоносителя они используют горячую воду, что обеспечивает эффективный нагрев. Компания Evo Home проектирует и устанавливает термогидравлические системы, обеспечивающие не только комфорт проживания, но и значительную экономию энерги.</p>
                        </div>


                    </li>

                    {/* 6 */}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={sixth_step} alt='sixth step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                            <div>
                                <h2 className='font-bold text-[46px]'>СИСТЕМА КЛИМАТ КОНТРОЛЯ</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Климат-контроль необходим для обеспечения комфорта в различных помещениях, как жилых, так и коммерческих. Необходимость использования современных систем управления качеством воздуха зависит от характеристик помещений и климата региона.</p>
                        </div>


                    </li>

                    {/* 7*/}
                    <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                        {/* process photo */}
                        <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={seventh_step} alt='seventh step' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                            <div>
                                <h2 className='font-bold text-[46px]'>СЕТИ, СВЯЗИ И СИСТЕМЫ НИЗКОГО НАПРЯЖЕНИЯ</h2>
                            </div>

                            <p className='sm:text-[24px] lg:text-[27px] p-light'>Коммуникационные сети, необходимые для коммерческой деятельности, устанавливаются после прокладки основных инфраструктур завода. Прокладка линий низкого напряжения включает в себя прокладку кабелей, соединяющих отдельные счетчики с необходимым оборудованием.</p>
                        </div>


                    </li>

                </ul>


                <div className='w-[1604px] h-[627px]  absolute top-[1320px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
                <div className='w-[1604px] h-[627px]  absolute top-[2260px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
            </div> 



            {/* video */}
            <div className=' w-full lg:h-[1050px] flex flex-col justify-between  my-20 mx-auto'>
                <h2 className='text-[50px] font-bold text-center'>Установка систем от EVO HOME</h2>
    
                {/* videos(instead of them just a div with any bg color) */}
                <div className='w-full  h-[696px] relative flex flex-row'>
                    <div className='absolute  h-[853px] bottom-0 -z-10'><img src={vector_about_us_1} alt='vector 1' loading="lazy" className='w-full h-full'/></div>
                    <div className='sm:w-[80%] lg:w-[1227px]  lg:h-[696px] bg-[#f5ab32] text-center mx-auto shadow-2xl '>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
    
                    <div className='absolute h-[853px] bottom-0 right-0 -z-10'><img src={vector_about_us_2} alt='vector 2' loading="lazy" className='w-full h-full'/></div>
                </div>

                <div className='lg:w-[1641px] lg:h-[336px] sm:text-center lg:text-start flex flex-col space-y-5 my-10 mx-auto text-[30px]'>
                    <p>Доверившись Evo Home , вы выбираете надежного партнера с более чем 17-летним опытом работы в сфере систем и ремонта. Мы предоставляем полный спектр сертифицированных услуг по установке, обслуживанию и модернизации бытовых систем в Риме, всегда гарантируя безопасность, эффективность и соответствие нормам.</p>
                    <p>Свяжитесь с нами сегодня по телефону <br className='lg:hidden'/>  <span className='underline cursor-default'>+39 327 986 6412</span>, чтобы получить бесплатную консультацию или запросить персональное предложение.</p>
                </div>
                
                <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>

    
            </div>



        </main>

        {/* reasons why */}

        <Reasons/>

        {/* calculator */}
        <div className='mb-20'>
            <Calculator/>
        </div>


        {/* projects */}
        <CommercialPremisesProjects/>

    </div>
  )
}

export default System