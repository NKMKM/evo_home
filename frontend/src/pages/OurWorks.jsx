import React from 'react'
import { Link } from 'react-router-dom'
import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

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
  const {t} = useTranslation('OurWorks')
  return (
    <div className='flex flex-col'>
        <Helmet>
            <title>{t("title")}</title>
            <meta name="description" content="Works and projects made by EVO Home" />
        </Helmet>
        {/* about us block */}
        <header className='sm:w-full lg:w-[1656px] lg:h-[1900px]  mx-auto mt-20 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
                <div className='sm:mx-auto lg:mx-0'>
                    <h1 className='font-bold text-center sm:text-[60px] lg:text-[70px]'>{t('header.h')}</h1>

                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>


            {/* info + photos */}
            <div className='sm:w-full lg:w-[1641px] sm:h-[3050px]  mx-auto sm:my-10 lg:my-20 '>
                {/* text */}
                <div className='flex flex-col sm:w-full lg:w-[1639px] sm:h-[720px] md:h-[660px]  lg:h-[300px] text-[28px] sm:px-4 lg:px-0 sm:text-center lg:text-start justify-between mb-10'>
                    <p>{t('header.p1')}<span className='text-[#F9B33B]'>{t('header.span1')}</span>{t('header.p2')}<span className='text-[#F9B33B]'>{t('header.span2')}</span> {t('header.p3')}</p>
                    <p>{t('header.p4')}</p>
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
                    <h2 className='font-bold text-center text-[70px]'>{t('comparison.h')}</h2>

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
                            <h2 className='text-[50px] font-bold'>{t('comparison.li1.name')}</h2>
                            <h3 className='text-[40px] font-light italic'>{t('comparison.li1.style')}</h3>
                        </div>

                        <div className='lg:w-[748px] h-[374px] flex flex-col text-[30px] justify-between'>
                            <p><span className='font-bold'>{t('comparison.li1.span')}</span>  {t('comparison.li1.p1')}</p>
                            <p><span className='font-bold'>{t('comparison.li1.span2')}</span> {t('comparison.li1.p2')}</p>
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
                            <h2 className='text-[50px] font-bold'>{t('comparison.li2.name')}</h2>
                            <h3 className='text-[40px] font-light italic'>{t('comparison.li2.style')}</h3>
                        </div>

                        <div className='lg:w-[748px] h-[374px] flex flex-col text-[30px] justify-between'>
                            <p><span className='font-bold'>{t('comparison.li1.span')}</span>  {t('comparison.li2.p1')}</p>
                            <p><span className='font-bold'>{t('comparison.li1.span2')}</span> {t('comparison.li2.p2')}</p>
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
                            <h2 className='text-[50px] font-bold'>{t('comparison.li3.name')}</h2>
                            <h3 className='text-[40px] font-light italic'>{t('comparison.li3.style')}</h3>
                        </div>

                        <div className='lg:w-[748px] h-[374px] flex flex-col text-[30px] justify-between'>
                            <p><span className='font-bold'>{t('comparison.li1.span')}</span>  {t('comparison.li3.p1')}</p>
                            <p><span className='font-bold'>{t('comparison.li1.span2')}</span> {t('comparison.li3.p2')}</p>

                        </div>
                    </div>
                </div>

            </div>


            <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">{t('comparison.button')}</Link>

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
                    <h2 className='text-white font-bold justify-center flex flex-row items-center text-[50px] mb-10'><img src={roof_icon} alt='roof icon' loading="lazy" className='w-[65px] h-[65px] mr-10'/>{t('steps.1.h')}</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p>{t('steps.1.p1')}</p>
                        <p>{t('steps.1.p2')}</p>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/1ajIodgloag?si=mE1cbMB4_w6vIztU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[28px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'>{t('steps.1.type')}</div>
                </div>
            </div>

            {/* 2 */}
            <div className='works-second-stage-bg-image bg-cover relative sm:pt-10 lg:pt-0 sm:pb-20 flex sm:flex-col lg:flex-row bg-blue-300/80 w-full sm:h-[1400px] lg:h-[849px]'>
                {/* vector */}
                <div className='absolute sm:hidden lg:block '><img src={vector_2} alt='vector 2' loading="lazy"/></div>
                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/pFrTK5z9B24?si=mE1cbMB4_w6vIztU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[28px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'> {t('steps.2.type')}</div>
                </div>

                <div className='absolute sm:w-full lg:w-[806px] sm:px-4 lg:px-0 h-auto lg:left-[150px] sm:bottom-[10px] lg:bottom-[80px]'>
                    <h2 className='text-white font-bold justify-center flex flex-row items-center sm:text-[45px] lg:text-[50px] mb-10'><img src={bottle_icon} alt='bottle icon 'loading="lazy" className='w-[65px] h-[65px] mr-10'/> {t('steps.2.h')}</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p>{t('steps.2.p1')}</p>
                        <p>{t('steps.2.p2')}</p>
                    </div>
                </div>

            </div>
            {/* 3 */}
            <div className='works-third-stage-bg-image bg-cover relative sm:pt-10 lg:pt-0 sm:pb-20 flex sm:flex-col lg:flex-row bg-blue-300/80 w-full sm:h-[1400px] lg:h-[849px]'>
                {/* vector */}
                <div className='absolute sm:hidden lg:block '><img src={vector_1} alt='vector 1' loading="lazy"/></div>

                <div className='absolute sm:w-full lg:w-[806px] sm:px-4 lg:px-0 h-auto lg:left-[150px] sm:bottom-[10px] lg:bottom-[80px]'>
                    <h2 className='text-white font-bold justify-center flex flex-row items-center sm:text-[40px] lg:text-[50px] mb-10'><img src={fontain_icon} alt='fontain icon' loading="lazy" className='w-[65px] h-[65px] mr-10'/> {t('steps.3.h')}</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p>{t('steps.3.p1')}</p>
                        <p>{t('steps.3.p2')}</p>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/ejCkepsLR1s?si=mE1cbMB4_w6vIztU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[26px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'>{t('steps.3.type')}</div>
                </div>
            </div>
            {/* 4 */}
            <div className='works-fourth-stage-bg-image bg-cover relative sm:pt-10 lg:pt-0 sm:pb-20 flex sm:flex-col lg:flex-row-reverse bg-blue-300/80 w-full sm:h-[1400px] lg:h-[849px]'>
                {/* vector */}
                <div className='absolute sm:hidden lg:block  '><img src={vector_2} alt='vector 2' loading="lazy"/></div>

                <div className='absolute sm:w-full lg:w-[806px] sm:px-4 lg:px-0 h-auto lg:left-[150px] sm:bottom-[10px] lg:bottom-[80px]'>
                    <h2 className='text-white font-bold justify-center flex flex-row items-center sm:text-[40px] lg:text-[50px] mb-10'><img src={food_icon} alt='food 'loading="lazy" className='w-[65px] h-[65px] mr-10'/> {t('steps.4.h')}</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p>{t('steps.4.p1')}</p>
                        <p>{t('steps.4.p2')}</p>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/l0PAzZ2V3Cs?si=mE1cbMB4_w6vIztU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>\
                    </div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[26px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'> {t('steps.4.type')}</div>
                </div>
            </div>

            {/* 5 */}
            <div className='works-third-stage-bg-image bg-cover relative sm:pt-10 lg:pt-0 sm:pb-20 flex sm:flex-col lg:flex-row bg-blue-300/80 w-full sm:h-[1400px] lg:h-[849px]'>
                {/* vector */}
                <div className='absolute sm:hidden lg:block  '><img src={vector_1} alt='vector 1' loading="lazy"/></div>

                <div className='absolute sm:w-full lg:w-[806px] sm:px-4 lg:px-0 h-auto lg:left-[150px] sm:bottom-[10px] lg:bottom-[80px]'>
                    <h2 className='text-white font-bold justify-center flex flex-row items-center sm:text-[40px] lg:text-[50px] mb-10'><img src={keys_icon} alt='keys' loading="lazy" className='w-[65px] h-[65px] mr-10'/>{t('steps.5.h')}</h2>

                    <div className='sm:w-full lg:w-[806px] h-[564px] bg-white/85 sm:text-[27px] lg:text-[31px] flex flex-col justify-between px-5 py-10'>
                        <p >{t('steps.5.p1')}</p>
                        <p>{t('steps.5.p2')}</p>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[698px] sm:px-4 lg:px-0 absolute lg:right-[150px] sm:top- lg:top-[80px]'>
                    <div className='sm:w-full lg:w-[698px] h-[540px] border-[5px] border-[#F9B33B] bg-gray-600 mb-10'>
                        <iframe className='w-full h-full' src="https://www.youtube.com/embed/i7l3dHfEA6c?si=mE1cbMB4_w6vIztU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>\
                    </div>
                    
                    <div className='flex  justify-center sm:w-full lg:w-[698px] h-[67px] text-black sm:text-[26px] lg:text-[30px] font-bold text-center bg-[#F9B33B] items-center'>{t('steps.5.type')}</div>
                </div>
            </div>

        </div>

        {/* reviews */}

        <Reviews/>
    </div>
  )
}

export default OurWorks