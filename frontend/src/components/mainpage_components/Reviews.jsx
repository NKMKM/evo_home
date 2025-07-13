import React from 'react'
import { useTranslation } from 'react-i18next'
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
  const {t} = useTranslation('home/Reviews')
  const selectedLang = localStorage.getItem('language') || 'en';
  return (
    <main className={`home-reviews-bg-image w-full sm:h-[2450px] lg:h-[1100px] bg-cover mb-20 p-20 ${selectedLang === 'it' ? ' pb-30' : ''}`}>
        {/* header section */}
        <header className='sm:w-full lg:w-[1650px] h-[170px]  mx-auto flex flex-row justify-between items-center sm:mb-10 lg:mb-0  '>
            <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block '/>
            <div className=''>
                <h1 className='font-bold text-center sm:text-[60px] lg:text-[70px] '>{t('h')}</h1>

            </div>
            <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block '/>
        </header>
        <p className='text-white sm:text-[30px] lg:text-[32px] italic font-light lg:w-[600px] mx-auto text-center mb-9'>{t('p')}</p>


        <section className='sm:w-full sm:h-[1900px]  lg:h-auto lg:w-[1641px] mx-auto flex sm:flex-col lg:flex-row items-center justify-between'>
            {/* 1 */}
            <div className="relative flex flex-col sm:w-full sm:h-[500px] lg:w-[453px] lg:h-[415px] bg-white  p-10 shadow-2xl justify-between ">
                
                <div className='flex flex-row space-x-5'>
                    <div className='bg-gray-300 rounded-full'><img src={avatar} alt='avatar' loading="lazy" /></div>

                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>Marco Bianchi</h2>
                        <p>05.03.2024, 10:15</p>

                        <ul className='flex flex-row space-x-1'>
                            <li className='w-[14px] h-[14px]'><img src={golden_star} loading="lazy"/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star} loading="lazy"/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star} loading="lazy"/></li>
                            <li className='w-[14px] h-[14px]'><img src={gray_star} loading="lazy"/></li>
                            <li className='w-[14px] h-[14px]'><img src={gray_star} loading="lazy"/></li>


                        </ul>
                    </div>
                </div>

                <p className='sm:text-[20px] lg:text-[15px]'>{t('first_review')}</p>

                <ul className='flex flex-row justify-between'>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={first_review_first_image} className='w-full h-full rounded-md' loading="lazy"/></li>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={first_review_second_image} className='w-full h-full rounded-md' loading="lazy"/></li>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={first_review_third_image} className='w-full h-full rounded-md' loading="lazy"/></li>


                </ul>
                <div className=" absolute bottom-[-60px] right-10 w-1 h-1
                            border-l-[100px] border-l-transparent 
                            border-r-[0px] border-r-transparent 
                            border-t-[100px] border-white">
                </div>
            </div>

            {/* 2 */}
            <div class={`relative flex flex-col  lg:w-[667px] lg:${selectedLang === 'it' ? 'h-[640px] mb-20' : ''} bg-white  p-10 shadow-2xl space-y-10   `}>
                
                <div className='flex flex-row space-x-5'>
                    <div className='bg-gray-300 rounded-full w-[100px] h-[100px]'><img src={avatar} alt='avatar' loading="lazy" className='w-full h-full' /></div>

                    <div className='flex flex-col space-y-2'>
                        <h1 className='font-semibold'>Алексей Петров</h1>
                        <p>12.02.2024, 14:37</p>

                        <ul className='flex flex-row space-x-2'>
                            <li className='w-[20px] h-[20px]'><img src={golden_star} className='w-full h-full' loading="lazy"/></li>
                            <li className='w-[20px] h-[20px]'><img src={golden_star} className='w-full h-full' loading="lazy"/></li>
                            <li className='w-[20px] h-[20px]'><img src={golden_star} className='w-full h-full' loading="lazy"/></li>
                            <li className='w-[20px] h-[20px]'><img src={golden_star} className='w-full h-full' loading="lazy"/></li>
                            <li className='w-[20px] h-[20px]'><img src={gray_star} className='w-full h-full'loading="lazy"/></li>


                        </ul>
                    </div>
                </div>

                <p className='text-[24.2px]'> {t("second_review")}</p>

                <ul className='flex flex-row justify-between'>
                    <li className='w-[167px] h-[132px] bg-violet-500 rounded-md'><img src={second_review_first_image} className='w-full h-full rounded-md 'loading="lazy"/></li>
                    <li className='w-[167px] h-[132px] bg-violet-500 rounded-md'><img src={second_review_second_image} className='w-full h-full rounded-md'loading="lazy"/></li>
                    <li className='w-[167px] h-[132px] bg-violet-500 rounded-md'><img src={second_review_third_image} className='w-full h-full rounded-md'loading="lazy"/></li>
                </ul>
                <div class=" absolute bottom-[-60px] right-10 w-1 h-1
                            border-l-[100px] border-l-transparent 
                            border-r-[0px] border-r-transparent 
                            border-t-[100px] border-white">
                </div>
            </div>

            {/* 3 */}
            <div class={`relative flex flex-col  sm:w-full sm:h-[500px] lg:w-[453px] lg:h-[415px] bg-white  p-10 shadow-2xl justify-between`}>
                
                <div className='flex flex-row space-x-5'>
                    <div className='bg-gray-300 rounded-full'><img src={avatar} avatar loading="lazy"/></div>

                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>Игорь Васильев</h1>
                        <p>22.03.2024, 18:52</p>

                        <ul className='flex flex-row space-x-1'>
                            <li className='w-[14px] h-[14px]'><img src={golden_star} loading="lazy"/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star} loading="lazy"/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star} loading="lazy"/></li>
                            <li className='w-[14px] h-[14px]'><img src={golden_star} loading="lazy"/></li>
                            <li className='w-[14px] h-[14px]'><img src={gray_star} loading="lazy"/></li>


                        </ul>
                    </div>
                </div>

                <p className='sm:text-[20px] lg:text-[15px]'>{t('third_review')}</p>

                <ul className='flex flex-row justify-between'>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={third_review_first_image} className='w-full h-full rounded-md' loading="lazy"/></li>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={third_review_second_image} className='w-full h-full rounded-md'loading="lazy"/></li>
                    <li className='w-[114px] h-[90px] bg-violet-500 rounded-md'><img src={third_review_third_image} className='w-full h-full rounded-md' loading="lazy"/></li>


                </ul>
                <div class=" absolute bottom-[-60px] right-10 w-1 h-1
                            border-l-[100px] border-l-transparent 
                            border-r-[0px] border-r-transparent 
                            border-t-[100px] border-white">
                </div>
            </div>


        </section>


    </main>
  )
}

export default Reviews