import React from 'react'
import { Link } from 'react-router-dom'
import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import { Helmet } from 'react-helmet'

// mosaic photo imports
import image1 from '../assets/images/works/mosaic/image1.png'
import image2 from '../assets/images/works/mosaic/image2.png'
import image3 from '../assets/images/works/mosaic/image3.png'
import image4 from '../assets/images/works/mosaic/image4.png'
import image5 from '../assets/images/works/mosaic/image5.png'
import image6 from '../assets/images/works/mosaic/image6.png'
import image7 from '../assets/images/works/mosaic/image7.png'
import image8 from '../assets/images/works/mosaic/image8.png'

import ImageComparisonSlider from '../components/ImageComparisonSlider'

import before_after_3 from '../assets/images/before_after_3.png'
import before_after_4 from '../assets/images/before_after_4.png'
import toilet_before from '../assets/images/works/comparison/toilet_before.png'
import toilet_after from '../assets/images/works/comparison/toilet_after.png'
import botique_before from '../assets/images/works/comparison/botique_before.png'
import botique_after from '../assets/images/works/comparison/botique_after.png'

// icons imports
import roof_icon from '../assets/icons/works/roof.png'
import bottle_icon from '../assets/icons/works/bottle.png'
import fontain_icon from '../assets/icons/works/fontain.png'
import food_icon from '../assets/icons/works/food.png'
import keys_icon from '../assets/icons/works/keys.png'

// vectors imort
import vector_1 from '../assets/images/works/bg_vector1.png'
import vector_2 from '../assets/images/works/bg_vector2.png'

import stages from '../assets/icons/works/stages.png'
import one from '../assets/icons/works/one.png'

import Reviews from '../components/mainpage_components/Reviews'
const OurWorks = () => {
  return (
    <div className='flex flex-col'>
        <Helmet>
            <title>Наши Работы</title>
            <meta name="description" content="Works and projects made by EVO Home" />
        </Helmet>
        {/* about us block */}
        <header className='sm:w-full lg:w-[1656px] lg:h-[1900px]  mx-auto mt-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
                <div className='sm:mx-auto lg:mx-0'>
                    <h1 className='font-bold text-center sm:text-[60px] lg:text-[70px]'>Проекты EVO HOME</h1>

                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>


            {/* info + photos */}
            <div className='sm:w-full lg:w-[1641px] sm:h-[3050px]  mx-auto sm:my-10 lg:my-20 '>
                {/* text */}
                <div className='flex flex-col sm:w-full lg:w-[1639px] sm:h-[720px] md:h-[660px]  lg:h-[336px] text-[28px] sm:px-4 lg:px-0 sm:text-center lg:text-start justify-between mb-10'>
                    <p>Добро пожаловать в галерею EvoHome, где каждое изображение отражает нашу страсть к качеству и инновациям. Здесь вы найдете фотографии и видео наших завершенных проектов по ремонту в Риме: <span className='text-[#F9B33B]'>современные квартиры</span>,   элегантные дома, функциональные офисы и дизайнерские <span className='text-[#F9B33B]'>коммерческие помещения</span> . Каждая деталь учитывается для обеспечения безупречных результатов.</p>
                    <p>Познакомьтесь с нашей работой и вдохновитесь креативностью и опытом нашей команды. EvoHome — идеальный партнер для любых нужд по ремонту. Узнайте, как мы можем превратить ваши пространства в функциональные произведения искусства.</p>
                </div>

                {/* photos */}

                <div className='sm:mx-auto lg:mx-0 sm:w-[90%] lg:w-[1640px] sm:h-[2240px] md:h-[2300px]  lg:h-[1223px] flex sm:flex-col lg:flex-row space-x-6'>
                    {/* column 1  */}
                    <div className='flex flex-col   sm:w-full sm:h-[1120px] lg:h-auto lg:w-auto space-y-[27px]'>
                        {/* row 1 */}
                        <div className=' lg:w-[806px] h-[389px]'>
                            <img src={image1} alt='image 1' loading="lazy" className='w-full h-full object-cover mosaic-image-scale-hover'/>    
                        </div>

                        {/* row 2 */}
                        <div className='lg:h-[389px]  flex flex-row space-x-[29px]'>
                            {/* image 1 */}
                            <div className=' w-[389px] lg:h-[389px] '><img src={image2} alt='image 2' loading="lazy" className='mosaic-image-scale-hover'/></div>
                            
                            {/* image 2 */}
                            <div className=' w-[389px] lg:h-[389px] '><img src={image3} alt='image 3' loading="lazy" className='mosaic-image-scale-hover'/></div>
                        </div>

                        {/* row 3 */}
                        <div className=' lg:w-[806px] sm:h-[375px] lg:h-[389px]'>
                            <img src={image4} alt='image 4' loading="lazy" className='w-full h-full object-cover mosaic-image-scale-hover'/>
                        </div>
                    </div>

                    {/* column 2 */}
                    <div className=' flex flex-col space-y-6 '>
                        {/* row 1 */}
                        <div className=' flex flex-row space-x-6'>
                            {/* column 1 */}
                            <div className=' lg:w-[389px] sm:h-[807px] lg:h-[802px] '>
                                <img src={image5} alt='image 5' loading="lazy" className='w-full h-full object-cover mosaic-image-scale-hover'/>
                            </div>

                            {/* column 2 */}
                            <div className='flex flex-col lg:h-[806px] space-y-[29px]'>
                                {/* row 1 */}
                                <div className=' w-[389px] h-[389px] '><img src={image6} alt='image 6' loading="lazy" className='mosaic-image-scale-hover'/></div>

                                {/* row 2 */}
                                <div className=' w-[389px] h-[389px]'><img src={image7} alt='image 7' loading="lazy" className='mosaic-image-scale-hover'/></div>
                            </div>
                        </div>

                        {/* row 2 */}
                        <div className='sm:w-full  lg:w-[806px] lg:h-[389px]'>
                            <img src={image8} alt='image 8' loading="lazy" className='mosaic-image-scale-hover w-full h-full'/>
                        </div>

                    </div>

                </div>

            </div>

            
            
            <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            </div>


        </header>
        
        {/* before and after block */}
        <main className=' sm:w-full lg:w-[1656px] flex flex-col justify-between sm:h-[3800px] lg:h-[2045px] mx-auto sm:my-30 lg:my-20'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block '/>
                <div className=''>
                    <h2 className='font-bold text-center text-[70px]'>Интерьеры ДО и ПОСЛЕ</h2>

                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>

            {/* comparison examples */}
            <div className='lg:w-[1656px] sm:h-[3460px] lg:h-[1741px] flex flex-col justify-between '>
                {/* 1 */}
                <div className=' sm:h-[1150px] lg:h-[536px] lg:w-[1641px] flex sm:flex-col lg:flex-row justify-between '>
                    <div className='lg:w-[806px] lg:h-[536px] sm:px-4 lg:px-0'>
                        <ImageComparisonSlider beforeSrc={before_after_3} afterSrc={before_after_4}/>
                    </div>

                    <div className='lg:w-[806px] sm:h-2/3 h-full sm:px-4 lg:px-0 flex flex-col sm:justify-around lg:justify-between'>
                        <div>
                            <h2 className='text-[50px] font-bold'>КУХНЯ</h2>
                            <h3 className='text-[40px] font-light italic'>В Стиле Современный Минимализм</h3>
                        </div>

                        <div className='lg:w-[748px] h-[374px] flex flex-col text-[30px] justify-between'>
                            <p><span className='font-bold'>До:</span>  Устаревшие фасады, плохое освещение и недостаток рабочей зоны.</p>
                            <p><span className='font-bold'>После:</span> Светлая, эргономичная кухня с лаконичным дизайном и встроенной техникой.</p>
                            <p>Полная реконструкция: теперь кухня не только красива, но и функциональна — продуман каждый сантиметр.</p>
                        </div>
                    </div>
                </div>

                {/* 2 */}
                <div className=' sm:h-[1150px] lg:h-[536px] lg:w-[1641px] flex sm:flex-col lg:flex-row-reverse justify-between '>
                    <div className='sm:h-1/3 lg:w-[806px] lg:h-[536px] sm:px-4 lg:px-0'>
                        <ImageComparisonSlider beforeSrc={toilet_before} afterSrc={toilet_after}/>
                    </div>

                    <div className='lg:w-[806px] sm:h-2/3 h-full sm:px-4 lg:px-0 flex flex-col sm:justify-around lg:justify-between sm:text-end lg:text-start'>
                        <div>
                            <h2 className='text-[50px] font-bold'>ТУАЛЕТ</h2>
                            <h3 className='text-[40px] font-light italic'>В Стиле Современная Классика</h3>
                        </div>

                        <div className='lg:w-[748px] h-[374px] flex flex-col text-[30px] justify-between'>
                            <p><span className='font-bold'>До:</span>  Тесное пространство с устаревшей плиткой и сантехникой.</p>
                            <p><span className='font-bold'>После:</span> Элегантная трансформация в стильное помещение с продуманной эргономикой.</p>
                            <p>Грамотное использование пространства и современные материалы превращают обыденное помещение в комфортную зону</p>
                        </div>
                    </div>
                </div>

                {/* 3 */}
                <div className=' sm:h-[1000px] lg:h-[536px] lg:w-[1641px] flex sm:flex-col lg:flex-row justify-between '>
                    <div className='sm:h-1/3 lg:w-[806px] lg:h-[536px] sm:px-4 lg:px-0'>
                        <ImageComparisonSlider beforeSrc={botique_before} afterSrc={botique_after}/>
                    </div>

                    <div className='lg:w-[806px] sm:h-2/3 h-full sm:px-4 lg:px-0 flex flex-col sm:justify-around lg:justify-between'>
                        <div>
                            <h2 className='text-[50px] font-bold'>ПАРФЮМЕРНЫЙ БУТИК</h2>
                            <h3 className='text-[40px] font-light italic'>В Стиле Промышленная Роскошь</h3>
                        </div>

                        <div className='lg:w-[748px] h-[374px] flex flex-col text-[30px] justify-between'>
                            <p><span className='font-bold'>До:</span>  Пустое помещение с голыми стенами и строительными конструкциями.</p>
                            <p><span className='font-bold'>После:</span> Теплые кирпичные арки, мягкое освещение стратегически расположенные витрины</p>
                            <p>Сочетание индустриальных элементов с уютными акцентами делает бутик не просто магазином, а местом для ценителей изысканных ароматов.</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </main>

        {/* stages of work block */}

        <div className='relative border w-full sm:h-[7400px] lg:h-[4700px] flex flex-col justify-between works-stages-bg-image bg-cover mb-22'>
            <div className='w-[58px] h-[58px] absolute top-[400px] z-10 sm:hidden lg:block '><img src={one} alt='1' loading="lazy" className='w-full h-full'/></div>
            <div className='w-[58px] absolute top-[458px] z-10 sm:hidden lg:block'><img src={stages} alt='stages' loading="lazy" className=''/></div>

            {/* 1 */}
            <div className='works-first-stage-bg-image bg-cover relative sm:pt-10 lg:pt-0 sm:pb-20 flex sm:flex-col lg:flex-row bg-blue-300/80 w-full sm:h-[1450px] lg:h-[849px]'>
                {/* vector */}
                <div className='absolute sm:hidden lg:block '><img src={vector_1} alt='vector 1' loading="lazy"/></div>

                <div className='absolute sm:w-full lg:w-[806px] sm:px-4 lg:px-0 h-auto lg:left-[150px] sm:bottom-[10px] lg:bottom-[80px]'>
                    <h2 className='text-white font-bold justify-center flex flex-row items-center text-[50px] mb-10'><img src={roof_icon} alt='roof icon' loading="lazy" className='w-[65px] h-[65px] mr-10'/> Ремонт крыши</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p>Мы даем новую жизнь коммерческим помещениям с помощью индивидуального ремонта. Узнайте, как мы превратили этот парфюмерный магазин в элегантное и функциональное пространство, идеально подходящее для приема клиентов в самом сердце Рима</p>
                        <p>Посмотрите видео для получения подробной информации о проекте и свяжитесь с нами, чтобы создать ваше уникальное пространство!</p>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>video</div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[28px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'>Ремонт крыши Рим (район Аурелия, Рим)</div>
                </div>
            </div>

            {/* 2 */}
            <div className='works-second-stage-bg-image bg-cover relative sm:pt-10 lg:pt-0 sm:pb-20 flex sm:flex-col lg:flex-row bg-blue-300/80 w-full sm:h-[1400px] lg:h-[849px]'>
                {/* vector */}
                <div className='absolute sm:hidden lg:block '><img src={vector_2} alt='vector 2' loading="lazy"/></div>

                <div className='absolute sm:w-full lg:w-[806px] sm:px-4 lg:px-0 h-auto lg:left-[150px] sm:bottom-[10px] lg:bottom-[80px]'>
                    <h2 className='text-white font-bold justify-center flex flex-row items-center sm:text-[45px] lg:text-[50px] mb-10'><img src={bottle_icon} alt='bottle icon 'loading="lazy" className='w-[65px] h-[65px] mr-10'/> Магазин парфюмерии</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p>Мы даем новую жизнь коммерческим помещениям с помощью индивидуального ремонта. Узнайте, как мы превратили этот парфюмерный магазин в элегантное и функциональное пространство, идеально подходящее для приема клиентов в самом сердце Рима.</p>
                        <p>Посмотрите видео для получения подробной информации о проекте и свяжитесь с нами, чтобы создать ваше уникальное пространство!</p>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>video</div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[28px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'> Исторический центр Рима – via Vittoria 3b</div>
                </div>
            </div>
            {/* 3 */}
            <div className='works-third-stage-bg-image bg-cover relative sm:pt-10 lg:pt-0 sm:pb-20 flex sm:flex-col lg:flex-row bg-blue-300/80 w-full sm:h-[1400px] lg:h-[849px]'>
                {/* vector */}
                <div className='absolute sm:hidden lg:block '><img src={vector_1} alt='vector 1' loading="lazy"/></div>

                <div className='absolute sm:w-full lg:w-[806px] sm:px-4 lg:px-0 h-auto lg:left-[150px] sm:bottom-[10px] lg:bottom-[80px]'>
                    <h2 className='text-white font-bold justify-center flex flex-row items-center sm:text-[40px] lg:text-[50px] mb-10'><img src={fontain_icon} alt='fontain icon' loading="lazy" className='w-[65px] h-[65px] mr-10'/> Реконструкция фонтана</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p>Мы возвращаем фонтанам красоту и функциональность с помощью профессиональных реставрационных работ. Узнайте, как мы превратили этот фонтан в уникальный декоративный элемент, сочетающий традиции и современность</p>
                        <p>Посмотрите видео, чтобы узнать подробности нашей работы, и свяжитесь с нами, чтобы украсить ваши помещения стильно и точно!</p>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>video</div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[26px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'>Реконструкция фонтана – Рим (район Аурелия)</div>
                </div>
            </div>
            {/* 4 */}
            <div className='works-fourth-stage-bg-image bg-cover relative sm:pt-10 lg:pt-0 sm:pb-20 flex sm:flex-col lg:flex-row bg-blue-300/80 w-full sm:h-[1400px] lg:h-[849px]'>
                {/* vector */}
                <div className='absolute sm:hidden lg:block  '><img src={vector_2} alt='vector 2' loading="lazy"/></div>

                <div className='absolute sm:w-full lg:w-[806px] sm:px-4 lg:px-0 h-auto lg:left-[150px] sm:bottom-[10px] lg:bottom-[80px]'>
                    <h2 className='text-white font-bold justify-center flex flex-row items-center sm:text-[40px] lg:text-[50px] mb-10'><img src={food_icon} alt='food 'loading="lazy" className='w-[65px] h-[65px] mr-10'/> Рестайлинг ресторана</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p>Мы преображаем пространства с помощью эксклюзивного дизайна и изысканных деталей. Узнайте, как мы отремонтировали эту винодельню, создав гостеприимное и элегантное пространство, идеально подходящее для любого случая.</p>
                        <p>Посмотрите видео, чтобы полюбоваться результатом, и свяжитесь с нами, чтобы вдохнуть новую жизнь в ваше помещение со стилем и качеством!</p>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>video</div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[26px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'> Sentori Vineria del Quartiere (Рим)</div>
                </div>
            </div>

            {/* 5 */}
            <div className='works-third-stage-bg-image bg-cover relative sm:pt-10 lg:pt-0 sm:pb-20 flex sm:flex-col lg:flex-row bg-blue-300/80 w-full sm:h-[1400px] lg:h-[849px]'>
                {/* vector */}
                <div className='absolute sm:hidden lg:block  '><img src={vector_1} alt='vector 1' loading="lazy"/></div>

                <div className='absolute sm:w-full lg:w-[806px] sm:px-4 lg:px-0 h-auto lg:left-[150px] sm:bottom-[10px] lg:bottom-[80px]'>
                    <h2 className='text-white font-bold justify-center flex flex-row items-center sm:text-[40px] lg:text-[50px] mb-10'><img src={keys_icon} alt='keys' loading="lazy" className='w-[65px] h-[65px] mr-10'/>Трехкомнатная квартира</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p>Мы модернизируем жилые помещения с помощью индивидуальных и функциональных решений. Узнайте, как мы преобразили эту трехкомнатную квартиру , объединив комфорт и дизайн, чтобы удовлетворить все потребности.</p>
                        <p>Посмотрите видео, чтобы узнать подробности проекта, и свяжитесь с нами, чтобы отремонтировать ваш дом стильно и профессионально!</p>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>video</div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[26px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'>Ремонт квартиры — Рим, район Сан Паоло</div>
                </div>
            </div>

        </div>

        {/* reviews */}

        <Reviews/>
    </div>
  )
}

export default OurWorks