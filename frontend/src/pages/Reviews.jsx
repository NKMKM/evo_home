import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

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
  const {t} = useTranslation('Reviews')
  return (
    // all content
    <div>
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content="Reviews about EVO Home" />
        </Helmet>

        {/* our clients block */}
        <div className='sm:w-full lg:w-[1641px] sm:h-[1800px] lg:h-[868px] mx-auto mt-20'>
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20 '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block '/>
                <div className=''>
                    <h1 className='font-bold text-center text-[70px]'>{t('header.h')}</h1>

                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>

            <div className='flex flex-col  sm:w-full sm:text-center lg:text-start lg:w-[1639px] sm:h-[1600px] sm:px-4 lg:h-[672px] justify-between text-[32px]'>
                <p>{t('header.p1')}</p>

                <p><span className='font-bold text-[#F9B33B]'>{t('header.span1')}</span>{t('header.p2')}</p>

                <p>{t('header.p3')}<span className='font-bold text-[#F9B33B]'>{t('header.span2')}</span> {t('header.p4')}</p>
            </div>

        </div>

        <div className='relative sm:w-full lg:w-[1641px]  sm:h-[5800px] lg:h-[3135px] sm:px-5 lg:px-0 mx-auto flex flex-col space-y-30'>
            <h2 className='text-[70px] font-bold text-center mb-10'>{t('reviews.h')}</h2>

            <div className='sm:w-full lg:w-[1335px] h-[1361px] absolute right-0'><img src={reviews_vector_1} alt='vector 1' loading="lazy"/></div>
            {/* review 1 */}
            <div class="relative inline-block bg-[#d9e7f3]  text-black sm:px-10 lg:px-4 py-2 sm:w-full lg:w-[1641px] sm:h-[1100px]  lg:h-[542px] rounded-lg  ml-auto">
                <div className='flex sm:flex-col  lg:flex-row sm:justify-between sm:h-[1050px] lg:justify-center pt-7 lg:space-x-10 '>
                    {/* text review info */}
                    <div className='flex flex-col justify-between lg:w-[916px] sm:h-[430px] lg:h-[411px] '>
                        <div className='w-full h-[87px]  flex flex-row items-center justify-between'>
                            <div className=' w-[315px] h-[87px] flex flex-row items-center space-x-4'>
                                <div className='bg-gray-600/20 rounded-full'><img src={avatar} alt='avatar' loading="lazy"/></div>
                                <div>
                                    <p className='text-[28px]'>Annalisa</p>
                                    <p className='text-[#222222B2]/70 text-[18px]'>6 месяцев назад</p>
                                    <ul className='flex flex-row w-[94px] h-[14px] justify-between'>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} loading="lazy" className='w-full h-full'/></li>
                                    </ul>
                                </div>
                            </div>

                            <p className='text-[#222222B2]/70'>Google reviews</p>
                        </div>

                        <div className='w-full h-[312px]  flex flex-col justify-between text-[20px]'>
                            <p>{t('reviews.1.p1')}</p>
                            <p>{t('reviews.1.p2')}</p>
                            <p>{t('reviews.1.p3')}</p>
                        </div>
                    </div>

                    {/* image */}
                    <div className='sm:w-full lg:w-[604px] lg:h-[411px] '>
                        <img src={first_review} alt='first review image' loading="lazy" className='w-full h-full'/>
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
                                <div className='bg-gray-600/20 rounded-full'><img src={avatar} alt='avatar' loading="lazy"/></div>
                                <div>
                                    <p className='text-[28px]'>Инна Чикурова</p>
                                    <p className='text-[#222222B2]/70 text-[18px]'>4 месяцев назад</p>
                                    <ul className='flex flex-row w-[94px] h-[14px] justify-between'>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} loading="lazy" className='w-full h-full'/></li>
                                    </ul>
                                </div>
                            </div>

                            <p className='text-[#222222B2]/70'>Google reviews</p>
                        </div>

                        <div className='w-full sm:h-[280px] lg:h-[312px]  flex flex-col sm:justify-between lg:justify-around lg:py-10 text-[20px]'>
                            <p>{t('reviews.2.p1')}</p>
                            <p>{t('reviews.2.p2')}</p>
                        </div>
                    </div>

                    {/* image */}
                    <div className='sm:w-full lg:w-[604px] lg:h-[411px] '>
                        <img src={second_review} alt='second review image' loading="lazy" className='w-full h-full'/>
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
                                <div className='bg-gray-600/20 rounded-full'><img src={avatar} alt='avatar' loading="lazy"/></div>
                                <div>
                                    <p className='text-[28px]'>Sergiu Fana</p>
                                    <p className='text-[#222222B2]/70 text-[18px]'>8 месяцев назад</p>
                                    <ul className='flex flex-row w-[94px] h-[14px] justify-between'>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy"className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} loading="lazy" className='w-full h-full'/></li>
                                    </ul>
                                </div>
                            </div>

                            <p className='text-[#222222B2]/70'>Google reviews</p>
                        </div>

                        <div className='w-full sm:h-[420px] lg:h-[312px]  flex flex-col justify-between text-[20px]'>
                            <p>{t('reviews.3.p1')}</p>
                            <p>{t('reviews.3.p2')}</p>
                        </div>
                    </div>

                    {/* image */}
                    <div className='sm:w-full lg:w-[604px] lg:h-[411px] '>
                        <img src={third_review} alt='third review image' loading="lazy" className='w-full h-full'/>
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
                                <div className='bg-gray-600/20 rounded-full'><img src={avatar} alt='avatar' loading="lazy"/></div>
                                <div>
                                    <p className='text-[28px]'>Ubaldo Manfroncelli</p>
                                    <p className='text-[#222222B2]/70 text-[18px]'>год назад</p>
                                    <ul className='flex flex-row w-[94px] h-[14px] justify-between'>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={golden_star}  loading="lazy"className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} loading="lazy" className='w-full h-full'/></li>
                                        <li className='w-[14px] h-[14px] '><img src={gray_star} loading="lazy" className='w-full h-full'/></li>
                                    </ul>
                                </div>
                            </div>

                            <p className='text-[#222222B2]/70'>Google reviews</p>
                        </div>

                        <div className='w-full lg:h-[312px]  flex flex-col justify-center text-[20px]'>
                            <p>{t('reviews.4.p1')}</p>

                        </div>
                    </div>

                    {/* image */}
                    <div className='sm:w-full lg:w-[604px] lg:h-[411px] '>
                        <img src={fourth_review} alt='fourth review image'  loading="lazy" className='w-full h-full'/>
                    </div>
                </div>

                <div class=" absolute bottom-[-90px] left-40 w-4 h-0 
                            border-r-[200px] border-l-transparent 
                            border-l-[1px] border-r-transparent 
                            border-t-[90px] border-t-[#d9e7f3]">
                </div>
            </div>


            <div className='sm:w-full sm:px-4 lg:px-0 lg:w-[1639px] h-[386px] text-[32px] flex flex-col sm:text-center lg:text-start  space-y-6'>
                <p>{t('reviews.p1')}</p>
                <p>{t('reviews.p2')}</p>
                <p>{t('reviews.p3')}</p>
            </div>

        </div>

        {/* review form */}

        <div className='review-form-bg-image bg-center sm:w-full lg:w-[1920px] sm:h-[940px] lg:h-[620px]  mt-20 mb-30 '>
            <h2 className='text-white text-[70px]  text-center font-semibold'>{t('form.h')}</h2>
            <form className='flex flex-col sm:w-full lg:w-[1361px]  sm:h-[700px] lg:h-[470px] justify-between  text-white mx-auto'>
                <div className='flex sm:flex-col lg:flex-row lg:w-[1361px]  sm:h-[320px] lg:h-auto justify-between'>
                    <div className='sm:w-full lg:w-[388px] sm:px-6 lg:px-0 h-[104px] flex flex-col'>
                        <label className='mb-3'>{t("form.first_section.h")}</label>
                        <input type='text' placeholder={t('form.first_section.placeholder')} className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>
                    <div className='sm:w-full lg:w-[388px] sm:px-6 lg:px-0 h-[104px] flex flex-col'>
                        <label className='mb-3'>{t("form.second_section.h")}</label>
                        <input type='text' placeholder={t('form.second_section.placeholder')}  className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>
                    <div className='sm:w-full lg:w-[388px] sm:px-6 lg:px-0 h-[104px] flex flex-col'>
                        <label className='mb-3'>{t("form.third_section.h")}</label>
                        <input type='text' placeholder={t('form.third_section.placeholder')}  className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>

                </div>

                <div className='flex flex-col sm:mx-auto sm:w-[92%] lg:w-full'>
                    <label className=' mb-3'>{t("form.fourth_section.h")}</label>
                    <textarea name="" id="" placeholder={t('form.fourth_section.placeholder')}  className='w-full  border-[3px] border-[#F9B33B] h-[200px] p-3 bg-gray-300/20'></textarea>
                </div>

                <button type='submit' className='text-black font-bold sm:w-[92%] sm:text-3xl lg:text-[18px] lg:w-[315px]  sm:h-[70px] lg:h-[55px] bg-[#F9B33B] mx-auto button-scale-hover'>{t('form.button')} </button>
            </form>
        </div>

        <Reviews/>
        
    </div>
  )
}

export default ReviewsPage