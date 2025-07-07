import React from 'react'

import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import avatar from '../assets/icons/avatar.png'
import golden_star from '../assets/icons/golden_star.png'
import gray_star from '../assets/icons/gray_star.png'

import first_review from '../assets/images/reviews_page_images/first_review.png'
import second_review from '../assets/images/reviews_page_images/second_review.png'
import third_review from '../assets/images/reviews_page_images/third_review.jpg'
import fourth_review from '../assets/images/reviews_page_images/fourth_review.jpg'

import Reviews from '../components/mainpage_components/Reviews'

import reviews_vector_1 from '../assets/images/reviews_vector_1.png'
import reviews_vector_2 from '../assets/images/reviews_vector_2.png'

const ReviewsPage = () => {
  return (
    // all content
    <div>
        {/* our clients block */}
        <div className='sm:w-full lg:w-[1641px] sm:h-[1800px] lg:h-[868px] mx-auto mt-20'>
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20 '>
                <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden lg:block '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[70px]'>Наши довольные клиенты</h1>

                </div>
                <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>

            <div className='flex flex-col  sm:w-full sm:text-center lg:text-start lg:w-[1639px] sm:h-[1600px] sm:px-4 lg:h-[672px] justify-between text-[32px]'>
                <p>Для нас ремонт — это не просто процесс отделки и дизайна. Это история вашего дома, в которую мы вкладываем душу. Каждый проект для нас — как персональная история, где важно всё: ваши желания, ощущения, образ жизни.Мы искренне верим, что интерьер должен быть отражением характера и создавать пространство, в котором хочется жить, мечтать и отдыхать.</p>

                <p>В <span className='font-bold text-[#F9B33B]'>EVO HOME</span>  мы стремимся к безупречному качеству, уделяем внимание каждой мелочи и строим сотрудничество на честности и уважении. Мы не просто выполняем работы — мы сопровождаем вас, поддерживаем, советуем и всегда рядом, даже если проект завершён.Забота о клиентах — это не опция, а наша основа.
                Нам важно, чтобы каждый, кто обратился к нам, чувствовал себя уверенно и спокойно на всём пути.Поэтому настоящим показателем нашего успеха являются не только красивые интерьеры, но и слова благодарности от тех, кто уже прошёл этот путь с нами.</p>

                <p>Ниже вы найдете <span className='font-bold text-[#F9B33B]'>отзывы наших клиентов</span> , в которых — искренние эмоции, впечатления и результат, которым можно гордиться.</p>
            </div>

        </div>

        <div className='relative sm:w-full lg:w-[1641px]  sm:h-[5800px] lg:h-[3135px] sm:px-5 lg:px-0 mx-auto flex flex-col space-y-30'>
            <h1 className='text-[70px] font-bold text-center mb-10'>EVO HOME глаазми клиентов</h1>

            <div className='sm:w-full lg:w-[1335px] h-[1361px] absolute right-0'><img src={reviews_vector_1}/></div>
            {/* review 1 */}
            <div class="relative inline-block bg-[#d9e7f3]  text-black sm:px-10 lg:px-4 py-2 sm:w-full lg:w-[1641px] sm:h-[1100px]  lg:h-[542px] rounded-lg  ml-auto">
                <div className='flex sm:flex-col  lg:flex-row sm:justify-between sm:h-[1050px] lg:justify-center pt-7 lg:space-x-10 '>
                    {/* text review info */}
                    <div className='flex flex-col justify-between lg:w-[916px] sm:h-[430px] lg:h-[411px] '>
                        <div className='w-full h-[87px]  flex flex-row items-center justify-between'>
                            <div className=' w-[315px] h-[87px] flex flex-row items-center space-x-4'>
                                <div className='bg-gray-600/20 rounded-full'><img src={avatar}/></div>
                                <div>
                                    <p className='text-[28px]'>Annalisa</p>
                                    <p className='text-[#222222B2]/70 text-[18px]'>6 месяцев назад</p>
                                    <ul className='flex flex-row w-[94px] h-[14px] justify-between'>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} className='w-full h-full'/></li>
                                    </ul>
                                </div>
                            </div>

                            <p className='text-[#222222B2]/70'>Google reviews</p>
                        </div>

                        <div className='w-full h-[312px]  flex flex-col justify-between text-[20px]'>
                            <p>Мы доверили Evo Home полный ремонт нашей квартиры и остались очень довольны их работой.Пьетро и его команда – настоящие профессионалы, способные выполнить любую работу с точностью и пунктуальностью.</p>
                            <p>Они поразили нас, в частности, своей способностью справляться с непредвиденными событиями, предлагая всегда действенные решения, а также организацией и чистотой строительной площадки, предпосылками, которые мы считаем необходимыми для отличного конечного результата. Связь была постоянной на каждом этапе работы и полной доступности по всем направлениям</p>
                            <p>Мы бы выбрали их еще тысячу раз! 💯</p>
                        </div>
                    </div>

                    {/* image */}
                    <div className='sm:w-full lg:w-[604px] lg:h-[411px] '>
                        <img src={first_review} className='w-full h-full'/>
                    </div>
                </div>

                <div class=" absolute bottom-[-90px] right-40 w-4 h-0 
                            border-l-[200px] border-l-transparent 
                            border-r-[1px] border-r-transparent 
                            border-t-[90px] border-t-[#d9e7f3]">
                </div>
            </div>

            {/* review 2  */}
            <div class="relative inline-block bg-[#d9e7f3]  text-black sm:px-10 lg:px-4 py-2 sm:w-full lg:w-[1641px] sm:h-[850px]  lg:h-[542px] rounded-lg  ml-auto">
                <div className='flex sm:flex-col  lg:flex-row sm:justify-between sm:h-[780px] lg:justify-center pt-7 lg:space-x-10 '>
                    {/* text review info */}
                    <div className='flex flex-col justify-between lg:w-[916px] sm:h-[390px] lg:h-[411px] '>
                        <div className='w-full h-[87px]  flex flex-row items-center justify-between'>
                            <div className=' w-[315px] h-[87px] flex flex-row items-center space-x-4'>
                                <div className='bg-gray-600/20 rounded-full'><img src={avatar}/></div>
                                <div>
                                    <p className='text-[28px]'>Инна Чикурова</p>
                                    <p className='text-[#222222B2]/70 text-[18px]'>4 месяцев назад</p>
                                    <ul className='flex flex-row w-[94px] h-[14px] justify-between'>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} className='w-full h-full'/></li>
                                    </ul>
                                </div>
                            </div>

                            <p className='text-[#222222B2]/70'>Google reviews</p>
                        </div>

                        <div className='w-full sm:h-[280px] lg:h-[312px]  flex flex-col sm:justify-between lg:justify-around lg:py-10 text-[20px]'>
                            <p>Выбрали строительную компанию EvoHome и ни разу не пожалели о своем выборе! Остались очень довольны! Максимально профессиональный подход к работе! Замечальная строительная компания! Работают профессионально, быстро и качественно! </p>
                            <p>Строительный материал высокого качества! Ребята очень воспитанные, аккуратные и ответственные!  Благодарю за проделанную работу! Очень рекомендую!</p>
                        </div>
                    </div>

                    {/* image */}
                    <div className='sm:w-full lg:w-[604px] lg:h-[411px] '>
                        <img src={second_review} className='w-full h-full'/>
                    </div>
                </div>

                <div class=" absolute bottom-[-90px] left-40 w-4 h-0 
                            border-r-[200px] border-l-transparent 
                            border-l-[1px] border-r-transparent 
                            border-t-[90px] border-t-[#d9e7f3]">
                </div>
            </div>

            {/* review 3 */}
            <div class="relative inline-block bg-[#d9e7f3]  text-black sm:px-10 lg:px-4 py-2 sm:w-full lg:w-[1641px] sm:h-[1100px]  lg:h-[542px] rounded-lg  ml-auto">
                <div className='flex sm:flex-col  lg:flex-row sm:justify-between sm:h-[1030px] lg:justify-center pt-7 lg:space-x-10 '>
                    {/* text review info */}
                    <div className='flex flex-col justify-between lg:w-[916px] sm:h-[530px] lg:h-[411px] '>
                        <div className='w-full h-[87px]  flex flex-row items-center justify-between'>
                            <div className=' w-[315px] h-[87px] flex flex-row items-center space-x-4'>
                                <div className='bg-gray-600/20 rounded-full'><img src={avatar}/></div>
                                <div>
                                    <p className='text-[28px]'>Sergiu Fana</p>
                                    <p className='text-[#222222B2]/70 text-[18px]'>8 месяцев назад</p>
                                    <ul className='flex flex-row w-[94px] h-[14px] justify-between'>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} className='w-full h-full'/></li>
                                    </ul>
                                </div>
                            </div>

                            <p className='text-[#222222B2]/70'>Google reviews</p>
                        </div>

                        <div className='w-full sm:h-[420px] lg:h-[312px]  flex flex-col justify-between text-[20px]'>
                            <p>Недавно мы доверили ремонт нашего ресторана компании Evo Home и очень довольны своим выбором.Ребята выполнили работу на отлично, строго соблюдая заранее установленные сроки.В ходе процесса возникли некоторые неожиданные проблемы, но они были решены чрезвычайно профессионально и своевременно.Это продемонстрировало их способность адаптироваться и решать проблемы с большой компетентностью.За этой компанией стоит Пьетро, ​​очень честный, профессиональный и надежный человек</p>
                            <p>Если вы ищете команду по ремонту, которая выполняет свои обязательства и обеспечивает отличные результаты, не ищите дальше!</p>
                        </div>
                    </div>

                    {/* image */}
                    <div className='sm:w-full lg:w-[604px] lg:h-[411px] '>
                        <img src={first_review} className='w-full h-full'/>
                    </div>
                </div>

                <div class=" absolute bottom-[-90px] right-40 w-4 h-0 
                            border-l-[200px] border-l-transparent 
                            border-r-[1px] border-r-transparent 
                            border-t-[90px] border-t-[#d9e7f3]">
                </div>
            </div>
            
            <div className='sm:w-full lg:w-[1345px] h-[1106px] absolute left-0 sm:bottom-0 lg:bottom-[280px] -z-10'><img src={reviews_vector_2}/></div>
            {/* review 4  */}
            <div class="relative inline-block bg-[#d9e7f3]  text-black sm:px-10 lg:px-4 py-2 sm:w-full lg:w-[1641px] sm:h-[1000px]  lg:h-[542px] rounded-lg  ml-auto">
                <div className='flex sm:flex-col  lg:flex-row sm:justify-between sm:h-[900px] lg:justify-center pt-7 lg:space-x-10 '>
                    {/* text review info */}
                    <div className='flex flex-col justify-between lg:w-[916px] sm:h-[425px] lg:h-[411px] '>
                        <div className='w-full h-[87px]  flex flex-row items-center  sm:justify-between'>
                            <div className=' w-[315px] h-[87px] flex flex-row items-center space-x-4'>
                                <div className='bg-gray-600/20 rounded-full'><img src={avatar}/></div>
                                <div>
                                    <p className='text-[28px]'>Ubaldo Manfroncelli</p>
                                    <p className='text-[#222222B2]/70 text-[18px]'>год назад</p>
                                    <ul className='flex flex-row w-[94px] h-[14px] justify-between'>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} className='w-full h-full'/></li>
                                    </ul>
                                </div>
                            </div>

                            <p className='text-[#222222B2]/70'>Google reviews</p>
                        </div>

                        <div className='w-full lg:h-[312px]  flex flex-col justify-center text-[20px]'>
                            <p>Отличный опыт.... Серьезная и пунктуальная компания, в ней работают работники отличного уровня, Юрий (мастер), который взял на себя монтаж полов, покрытий в ванной и кухне, настоящий мастер, создавший шедевр, настоящая работа стамеской... парень, который занимался покраской и изготовлением гипсокартонных деталей, был превосходен... ну что же можно сказать о Пьетро, ​​начальнике, серьезный, надежный и добрый человек... все молодцы! я очень доволен</p>

                        </div>
                    </div>

                    {/* image */}
                    <div className='sm:w-full lg:w-[604px] lg:h-[411px] '>
                        <img src={first_review} className='w-full h-full'/>
                    </div>
                </div>

                <div class=" absolute bottom-[-90px] left-40 w-4 h-0 
                            border-r-[200px] border-l-transparent 
                            border-l-[1px] border-r-transparent 
                            border-t-[90px] border-t-[#d9e7f3]">
                </div>
            </div>


            <div className='sm:w-full sm:px-4 lg:px-0 lg:w-[1639px] h-[386px] text-[32px] flex flex-col sm:text-center lg:text-start  space-y-6'>
                <p>Каждый наш проект — это синтез безупречного исполнения, эстетики и индивидуального подхода.Мы не просто делаем ремонт — мы создаём пространство, в котором важны ощущения, детали и настроение.</p>
                <p>Мы работаем с первоклассными материалами, проверенными поставщиками и высокими стандартами.Наша команда — это профессионалы, которым действительно важно, чтобы результат вдохновлял.
                Мы слушаем, советуем, предлагаем решения — и всегда находим баланс между функциональностью и красотой</p>
                <p>Потому что в центре всего — вы и ваш дом.</p>
            </div>

        </div>

        {/* review form */}

        <div className='review-form-bg-image bg-center sm:w-full lg:w-[1920px] sm:h-[940px] lg:h-[620px]  mt-20 mb-30 '>
            <h1 className='text-white text-[70px]  text-center font-semibold'>Оставь свой отзыв здесь!</h1>
            <form className='flex flex-col sm:w-full lg:w-[1361px]  sm:h-[700px] lg:h-[470px] justify-between  text-white mx-auto'>
                <div className='flex sm:flex-col lg:flex-row lg:w-[1361px]  sm:h-[320px] lg:h-auto justify-between'>
                    <div className='sm:w-full lg:w-[388px] sm:px-6 lg:px-0 h-[104px] flex flex-col'>
                        <label className='mb-3'>ИМЯ</label>
                        <input type='text' placeholder='Ваше Имя...' className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>
                    <div className='sm:w-full lg:w-[388px] sm:px-6 lg:px-0 h-[104px] flex flex-col'>
                        <label className='mb-3'>E-MAIL</label>
                        <input type='text' placeholder='Ваш e-mail...' className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>
                    <div className='sm:w-full lg:w-[388px] sm:px-6 lg:px-0 h-[104px] flex flex-col'>
                        <label className='mb-3'>ГОРОД</label>
                        <input type='text' placeholder='Ваш город...' className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>

                </div>

                <div className='flex flex-col sm:mx-auto sm:w-[92%] lg:w-full'>
                    <label className=' mb-3'>ВАШ ОТЗЫВ</label>
                    <textarea name="" id="" placeholder='Напишите ваш отзыв...' className='w-full  border-[3px] border-[#F9B33B] h-[200px] p-3 bg-gray-300/20'></textarea>
                </div>

                <button type='submit' className='text-black font-bold sm:w-[92%] sm:text-3xl lg:text-[18px] lg:w-[315px]  sm:h-[70px] lg:h-[55px] bg-[#F9B33B] mx-auto button-scale-hover'>ОТПРАВИТЬ</button>
            </form>
        </div>

        <Reviews/>
        
    </div>
  )
}

export default ReviewsPage