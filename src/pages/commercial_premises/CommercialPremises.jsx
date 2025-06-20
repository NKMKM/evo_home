import React from 'react'
import { Link } from 'react-router-dom'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/commercial_premises/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports

import first_step from '../../assets/images/commercial_premises/commercial_premises/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/commercial_premises/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/commercial_premises/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/commercial_premises/process/fourth_step.png'
import sixth_step from '../../assets/images/commercial_premises/commercial_premises/process/sixth_step.png'
import seventh_step from '../../assets/images/commercial_premises/commercial_premises/process/seventh_step.png'



import Calculator from '../../components/mainpage_components/Calculator'
import Reasons from '../../components/Reasons'
import Video from '../../components/Video'
import CommercialPremisesProjects from '../../components/commercial_premises_components/CommercialPremisesProjects'




const CommercialPremises = () => {
  return (
    <div>
        {/* first step */}
        <div className=' w-[1641px] h-[1677px] mx-auto my-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20'>
                <img src={left_decoration} className='w-[276px] h-[83px] '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[57px]'>Коммерческие помещения</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px]'/>
            </div>
            {/* main content */}
            <div className='h-[1577px] flex flex-col justify-between  '>
                {/* header */}
                <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>1.</div>
                    <h1 className='text-[50px] font-bold'>Реновация коммерческих помещений</h1>
                </div>

                {/* text */}
                <div className='text-[30px] w-[1641px] h-[504px] flex flex-col justify-between '>
                    <p>Ремонт коммерческих помещений поднимает ряд важных вопросов: как рассчитать смету? У какого поставщика мне следует покупать материалы и у кого мне следует приобретать системы? Какую компанию выбрать для закупки стекла и как правильно выполнить монтаж? Эти и многие другие вопросы требуют точных ответов. Компания Evo Home, имеющая более чем 17-летний опыт работы в Риме, является идеальным решением для решения этих задач.<br/>
                    Наш подход гарантирует результат, отражающий ваши ожидания и требования, поскольку мы можем предложить выгодные условия, высокое качество услуг и 3-летнюю гарантию .</p>
                    <p>Реновация коммерческих помещений от EVO HOME – это комплексное обновление офисов, магазинов, ресторанов и других коммерческих пространств. Мы создаем современные, стильные и функциональные интерьеры, повышая комфорт и эффективность вашего бизнеса. Полный цикл работ: от дизайна до реализации.</p>

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

        {/* calculator */}
        <div className='mb-20'>
            <Calculator/>
        </div>

        {/* process */}

        <div className='w-full h-[4503px] mb-20 flex flex-col justify-between '>
            {/* header */}
            <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto '>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>2.</div>
                <h1 className='text-[50px] font-bold'>Подробнее о ремонте коммерческих помещений</h1>
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
                                    <h1 className='font-bold text-[46px] pl-10'>РЕНОВАЦИЯ БИЗНЕС-ЦЕНТРА</h1>
                                </div>
    
                                <p className='text-[27px] p-light pl-10 pb-10'>Реновация бизнес-центров требует особого внимания к функциональности и эффективности рабочих пространств. Крайне важно создать среду, способствующую производительности и благополучию сотрудников. Наши мероприятия включают оптимизацию общих зон, создание коворкинг-пространств, модернизацию технологической инфраструктуры и создание офисов.</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className=' w-full h-[375px] flex flex-row-reverse justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-full  flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[46px] '>КОММЕРЧЕСКИЕ ПОМЕЩЕНИЯ</h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Мы заботимся обо всех аспектах: от проектирования планировки до выбора наиболее подходящих материалов для создания уютной и функциональной среды. Наши решения включают реорганизацию выставочных пространств, установку современных систем освещения и внедрение технологических решений для улучшения качества обслуживания клиентов и увеличения продаж.</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between '>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={third_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto  flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>РЕМОНТ ОФИСА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Мы предлагаем индивидуальные решения по разделению пространства, созданию технологически продвинутых конференц-залов и интеграции систем управления энергопотреблением для снижения эксплуатационных расходов.</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className=' w-full h-[386px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B] '><img src={fourth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px] '>РЕНОВАЦИЯ БАРОВ И РЕСТОРАНОВ </h1>
                                </div>
    
                                <p className='text-[28px] p-light '>Реновация баров и ресторанов имеет решающее значение для создания атмосферы, которая привлекает клиентов и способствует приятному времяпрепровождению. Мы занимаемся дизайном интерьера, выбором прочных и легкоочищаемых материалов, установкой систем вентиляции и кондиционирования. Каждый проект направлен на улучшение индивидуальности помещения.</p>
                            </div>

                        </li>
    
                        {/* 5 */}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={image} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>РЕНОВАЦИЯ СКЛАДА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Реконструкция склада требует тщательного планирования для оптимизации эффективности работы и обеспечения безопасности работников. Мы предлагаем решения по реорганизации складских помещений, установке современных стеллажных систем и созданию функциональных погрузочно-разгрузочных зон.
                                </p>
                            </div>


                        </li>

                        {/* 6 */}
                        <li className=' w-full h-[384px] flex flex-row-reverse justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={sixth_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>РЕНОВАЦИЯ ФИТНЕС-КЛУБА</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Реновация фитнес-клуба необходима для создания стимулирующей и комфортной обстановки для клиентов. Мы проектируем пространства, способствующие физической активности и благополучию, уделяя особое внимание расположению оборудования, качеству используемых материалов и эстетике среды.</p>
                            </div>


                        </li>

                        {/* 7*/}
                        <li className=' w-full h-[384px] flex flex-row justify-between'>
                            {/* process photo */}
                            <div className='w-[667px] h-auto border-[5px] border-[#F9B33B]'><img src={seventh_step} className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='w-[1082px] h-auto flex flex-col space-y-10 px-10 '>
                                <div>
                                    <h1 className='font-bold text-[48px]'>РЕНОВАЦИЯ ГОСТИНИЦЫ</h1>
                                </div>
    
                                <p className='text-[28px] p-light'>Реновация гостиницы — сложный процесс, направленный на улучшение обслуживания гостей и повышение привлекательности объекта. Мы предлагаем полный спектр услуг: от дизайна помещений до создания элегантных и функциональных мест общего пользования.</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1307px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                    <div className='w-[1604px] h-[627px]  absolute top-[2260px] left-0'><img src={arrow_2} className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <Video text={'Реновация коммерческих помещений от EVO HOME'}/>



        </div>





        {/* reasons why */}

        <Reasons/>

        {/* projects */}
        <CommercialPremisesProjects/>













    </div>
  )
}

export default CommercialPremises