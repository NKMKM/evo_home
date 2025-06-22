import React from 'react'

// icons import
import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import golden_star from '../../assets/icons/golden_star.png'
import gray_star from '../../assets/icons/gray_star.png'
import avatar from '../../assets/icons/avatar.png'

// reviews images imports
import first_review_first_image from '../../assets/images/reviews_images/first_review/first_review_first_image.png'
import first_review_second_image from '../../assets/images/reviews_images/first_review/first_review_second_image.png'
import first_review_third_image from '../../assets/images/reviews_images/first_review/first_review_third_image.png'
//----------------
import second_review_first_image from '../../assets/images/reviews_images/second_review/second_review_first_image.jpg'
import second_review_second_image from '../../assets/images/reviews_images/second_review/second_review_second_image.jpg'
import second_review_third_image from '../../assets/images/reviews_images/second_review/second_review_third_image.jpg'
//---------------
import third_review_first_image from '../../assets/images/reviews_images/third_review/third_review_first_image.png'
import third_review_second_image from '../../assets/images/reviews_images/third_review/third_review_second_image.png'
import third_review_third_image from '../../assets/images/reviews_images/third_review/third_review_third_image.png'

const Reviews = () => {
  return (
    <div className='home-reviews-bg-image w-full sm:h-[2450px] md:h-[1030px] bg-cover mb-20 p-20'>
        {/* header section */}
        <div className='sm:w-full md:w-[1650px] h-[170px]  mx-auto flex flex-row justify-between items-center sm:mb-10 md:mb-0  '>
            <img src={left_decoration} className='w-[276px] h-[83px] sm:hidden md:block '/>
            <div className=''>
                <h1 className='font-bold text-center text-[70px] '>Отзывы наших клиентов</h1>

            </div>
            <img src={right_decoration} className='w-[276px] h-[83px] sm:hidden md:block '/>
        </div>
        <p className='text-white text-[32px] italic font-light md:w-[600px] mx-auto text-center mb-9'>"Реальные отзывы о работе EVO HOME"</p>


        <div className='sm:w-full sm:h-[1900px]  md:h-auto md:w-[1641px] mx-auto flex sm:flex-col md:flex-row items-center justify-between'>
            {/* 1 */}
            <div className="relative flex flex-col sm:w-full sm:h-[500px] md:w-[453px] md:h-[415px] bg-white  p-10 shadow-2xl justify-between ">
                
                <div className='flex flex-row space-x-5'>
                    <div className='bg-gray-300 rounded-full'><img src={avatar} /></div>

                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>Marco Bianchi</h1>
                        <p>05.03.2024, 10:15</p>

                        <ul className='flex flex-row space-x-1'>
                            <li className='w-[14px] h-[14px]'><img src={golden_star}/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star}/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star}/></li>
                            <li className='w-[14px] h-[14px]'><img src={gray_star}/></li>
                            <li className='w-[14px] h-[14px]'><img src={gray_star}/></li>


                        </ul>
                    </div>
                </div>

                <p className='sm:text-[20px] md:text-[15px]'>Ci siamo rivolti per la ristrutturazione dell'ufficio ed è stata la decisione migliore! Tutto è stato organizzato al massimo livello – dalla pianificazione alla pulizia finale. Il processo lavorativo è stato trasparente, e siamo stati informati su ogni fase dei lavori. Ora consigliamo EVO HOME a tutti i nostri amici!</p>

                <ul className='flex flex-row justify-between'>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={first_review_first_image} className='w-full h-full rounded-md'/></li>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={first_review_second_image} className='w-full h-full rounded-md'/></li>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={first_review_third_image} className='w-full h-full rounded-md'/></li>


                </ul>
                <div className=" absolute bottom-[-60px] right-10 w-1 h-1
                            border-l-[100px] border-l-transparent 
                            border-r-[0px] border-r-transparent 
                            border-t-[100px] border-white">
                </div>
            </div>

            {/* 2 */}
            <div class="relative flex flex-col  md:w-[667px] md:h-[610px] bg-white  p-10 shadow-2xl space-y-10 ">
                
                <div className='flex flex-row space-x-5'>
                    <div className='bg-gray-300 rounded-full w-[100px] h-[100px]'><img src={avatar} className='w-full h-full' /></div>

                    <div className='flex flex-col space-y-2'>
                        <h1 className='font-semibold'>Алексей Петров</h1>
                        <p>12.02.2024, 14:37</p>

                        <ul className='flex flex-row space-x-2'>
                            <li className='w-[20px] h-[20px]'><img src={golden_star} className='w-full h-full'/></li>
                            <li className='w-[20px] h-[20px]'><img src={golden_star} className='w-full h-full'/></li>
                            <li className='w-[20px] h-[20px]'><img src={golden_star} className='w-full h-full'/></li>
                            <li className='w-[20px] h-[20px]'><img src={golden_star} className='w-full h-full'/></li>
                            <li className='w-[20px] h-[20px]'><img src={gray_star} className='w-full h-full'/></li>


                        </ul>
                    </div>
                </div>

                <p className='text-2xl'> "Результат превзошел ожидания! Команда EVO HOME сделала капитальный ремонт нашей квартиры под ключ. Все работы выполнены четко по срокам, материалы качественные, а дизайн получился даже лучше, чем мы представляли. Спасибо за профессионализм!"</p>

                <ul className='flex flex-row justify-between'>
                    <li className='w-[167px] h-[132px] bg-violet-500 rounded-md'><img src={second_review_first_image} className='w-full h-full rounded-md'/></li>
                    <li className='w-[167px] h-[132px] bg-violet-500 rounded-md'><img src={second_review_second_image} className='w-full h-full rounded-md'/></li>
                    <li className='w-[167px] h-[132px] bg-violet-500 rounded-md'><img src={second_review_third_image} className='w-full h-full rounded-md'/></li>
                </ul>
                <div class=" absolute bottom-[-60px] right-10 w-1 h-1
                            border-l-[100px] border-l-transparent 
                            border-r-[0px] border-r-transparent 
                            border-t-[100px] border-white">
                </div>
            </div>

            {/* 3 */}
            <div class="relative flex flex-col  sm:w-full sm:h-[500px] md:w-[453px] md:h-[415px] bg-white  p-10 shadow-2xl justify-between ">
                
                <div className='flex flex-row space-x-5'>
                    <div className='bg-gray-300 rounded-full'><img src={avatar} /></div>

                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>Игорь Васильев</h1>
                        <p>22.03.2024, 18:52</p>

                        <ul className='flex flex-row space-x-1'>
                            <li className='w-[14px] h-[14px]'><img src={golden_star}/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star}/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star}/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star}/></li>
                            <li className='w-[14px] h-[14px]'><img src={gray_star}/></li>


                        </ul>
                    </div>
                </div>

                <p className='sm:text-[20px] md:text-[15px]'>"Сделали ремонт в ванной и кухне – просто супер! Работы выполнены аккуратно, сантехника установлена идеально, а плитка выглядит шикарно. Очень понравилось, что не было скрытых платежей, всё по договору. Спасибо EVO HOME!"</p>

                <ul className='flex flex-row justify-between'>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={third_review_first_image} className='w-full h-full rounded-md'/></li>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={third_review_second_image} className='w-full h-full rounded-md'/></li>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={third_review_third_image} className='w-full h-full rounded-md'/></li>


                </ul>
                <div class=" absolute bottom-[-60px] right-10 w-1 h-1
                            border-l-[100px] border-l-transparent 
                            border-r-[0px] border-r-transparent 
                            border-t-[100px] border-white">
                </div>
            </div>


        </div>


    </div>
  )
}

export default Reviews