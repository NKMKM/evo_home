import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

// images imports
import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import left_yellow_decoration from '../assets/images/leftside_yellow_decoration.png'
import right_yellow_decoration from '../assets/images/rightside_yellow_decoration.png'
import van from '../assets/images/van.png'
import arrow_1 from '../assets/images/team_images/arrow_1.png'
import arrow_2 from '../assets/images/team_images/arrow_2.png'

import keys from '../assets/icons/keys.png'
import gears from '../assets/icons/gears.png'
import botique from '../assets/icons/botique.png'
import room from '../assets/icons/room.png'

import first_image from '../assets/images/about_us_achievments/first_image.png'
import second_image from '../assets/images/about_us_achievments/second_image.png'
import third_image from '../assets/images/about_us_achievments/third_image.png'
import fourth_image from '../assets/images/about_us_achievments/fourth_image.png'

import image1 from '../assets/images/about_us_achievments/image1.png'
import image2 from '../assets/images/about_us_achievments/image2.png'
import image3 from '../assets/images/about_us_achievments/image3.png'
import image4 from '../assets/images/about_us_achievments/image4.png'
import vector from '../assets/images/about_us_achievments/vector.png'

// team members photos import 
import founder from '../assets/images/team_images/founder.png'
import designer from '../assets/images/team_images/designer.png'
import project_manager from '../assets/images/team_images/project_manager.png'
import engineer from '../assets/images/team_images/engineer.png'

import Calculator from '../components/mainpage_components/Calculator'
import Guarantees from '../components/mainpage_components/Guarantees'

import vector_about_us_1 from'../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from'../assets/videos/abouts_us/vector2.png'


const AboutUs = () => {
    const {t} = useTranslation('AboutUs')
    const selectedLang = localStorage.getItem('language') || 'en';
  return (
    <div>
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content="About EVO Home" />
        </Helmet>
        {/* about us block */}
        <header className='w-full max-w-screen-xl mx-auto mt-10 flex flex-col justify-between px-4 md:px-8'>
            {/* header */}
            <div className='h-20 w-full flex flex-row justify-between items-center'>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='hidden md:block w-32 h-20'/>
                <div className='flex-1 flex justify-center'>
                    <h1 className={`font-bold text-center text-3xl md:text-5xl lg:text-6xl ${(selectedLang === 'it' || selectedLang === 'en') ? 'lg:text-[45px]' : 'lg:text-[53px]'}`}>{t("header.h")}</h1>
                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='hidden md:block w-32 h-20'/>
            </div>

            <div className='flex flex-col md:flex-row w-full justify-between text-lg md:text-2xl lg:text-3xl gap-8 md:gap-0'>
                <div className='flex flex-col w-full md:w-1/2 text-center md:text-left justify-around gap-6'>
                    <p>{t("header.p1")}<span className='text-[#F9B33B]'>{t("header.span1")}</span>{t('header.p2')}<span className='text-[#F9B33B]'>{t("header.span2")}</span> </p>

                    <p>{t("header.p3")}<span className='text-[#F9B33B]'>{t("header.span3")}</span></p>

                    <p>{t("header.p4")}</p>
                </div>

                <div className='w-full md:w-1/2 flex items-center justify-center'><img src={van} alt='van' loading="lazy" className='w-full max-w-md md:max-w-full h-auto rounded-[10px] object-cover'/></div>
            </div>
            
            <div className='w-full flex flex-col md:flex-row items-center gap-4 my-6'>
                <div className='h-1 w-full md:w-1/3 bg-[#F9B33B]'></div>
                <Link to="/contacts" className="w-full md:w-1/3 h-14 bg-[#F9B33B] text-xl md:text-2xl font-semibold flex items-center justify-center hover:scale-105 transition duration-300">{t('header.button')}</Link>
                <div className='h-1 w-full md:w-1/3 bg-[#F9B33B]'></div>
            </div>


        </header>

        {/* benefits of company  */}
        <div className='mt-20'>
            <Guarantees/>
        </div>

        {/* our team */}
        <div className='sm:w-full lg:w-[1641px] lg:h-[2069px] mx-auto flex flex-col justify-between '>
            <div className='h-[83px] w-full mx-auto flex flex-row justify-between items-center  '>
                <img src={left_yellow_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block '/>
                <div className='sm:mx-auto lg:mx-0'>
                    <h2 className='font-bold text-center text-[57px]'>{t("our_team.h")}</h2>

                </div>
                <img src={right_yellow_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>
            
            {/* list of empolyees */}
            <div className='relative sm:mb-10 '>
                <div className='sm:w-full lg:w-[1378px] sm:h-auto lg:h-[647px]  absolute top-[328px] left-[200px] sm:hidden lg:block'><img src={arrow_1} className='w-full h-full' /></div>

                <ul className='h-auto  lg:w-[1641px] sm:px-10 lg:px-0  space-y-20'>
                    {/* 1 */}
                    <li className=' w-full  sm:h-[900px] lg:h-[376px] flex sm:flex-col lg:flex-row justify-between '>
                        {/* empolyee photo */}
                        <div className='sm:w-full lg:w-[528px] h-[376px] '><img src={founder} alt='founder' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] lg:h-[376px]  flex flex-col space-y-10 '>
                            <div>
                                <h2 className='font-bold text-[50px]'>{t('our_team.ul.li1.h')}</h2>
                                <h3 className='font-light italic text-[40px]'>{t('our_team.ul.li1.h2')}</h3>
                            </div>

                            <p className='text-[32px] p-light'>{t('our_team.ul.li1.p')}</p>
                        </div>
                    </li>

                    {/* 2 */}
                    <li className=' w-full sm:h-[900px] lg:h-[376px] flex sm:flex-col lg:flex-row-reverse justify-between border-b '>
                        {/* empolyee photo */}
                        <div className='sm:w-full lg:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={designer} alt='designer' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] lg:h-[376px] sm:text-end lg:text-start flex flex-col space-y-10 '>
                            <div>
                                <h2 className='font-bold text-[50px]'>{t('our_team.ul.li2.h')}</h2>
                                <h3 className='font-light italic text-[40px]'>{t('our_team.ul.li2.h2')}</h3>
                            </div>

                            <p className='text-[32px] p-light'>{t('our_team.ul.li2.p')}</p>
                        </div>
                    </li>

                    {/* 3 */}
                    <li className=' w-full  sm:h-[900px] lg:h-[376px] flex sm:flex-col lg:flex-row justify-between '>
                        {/* empolyee photo */}
                        <div className='sm:w-full lg:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={project_manager} alt='project manager' loading="lazy" className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] lg:h-[376px]  flex flex-col space-y-10 '>
                            <div>
                                <h2 className='font-bold text-[50px]'>{t('our_team.ul.li3.h')}</h2>
                                <h3 className='font-light italic text-[40px]'>{t('our_team.ul.li2.h2')}</h3>
                            </div>

                            <p className='text-[32px] p-light'>{t('our_team.ul.li3.p')}</p>
                        </div>
                    </li>

                    {/* 4 */}
                    <li className=' w-full sm:h-[850px] lg:h-[376px] flex sm:flex-col lg:flex-row-reverse justify-between border-b '>
                        {/* empolyee photo */}
                        <div className='sm:w-full lg:w-[528px] h-[376px] border-[5px] border-[#F9B33B]'><img src={engineer} alt='engineer' loading="lazy"  className='w-full h-full object-cover'/></div>

                        {/* info */}
                        <div className='sm:w-full lg:w-[1082px] lg:h-[376px] sm:text-end lg:text-start flex flex-col space-y-10 '>
                            <div>
                                <h2 className='font-bold text-[50px]'>{t('our_team.ul.li4.h')}</h2>
                                <h3 className='font-light italic text-[40px]'>{t('our_team.ul.li2.h2')}</h3>
                            </div>

                            <p className='text-[32px] p-light'>{t('our_team.ul.li4.p')}</p>
                        </div>
                    </li>

                </ul>



                <div className='absolute w-[1605px] h-[338px]  bottom-[120px] sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy"  /></div>
            </div>

            <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">{t('our_team.button')}</Link>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            </div>
        </div>  

        {/* our achievements */}
        
        <div className='sm:w-full lg:w-[1640px] sm:h-[4400px] lg:h-[938px] mx-auto my-20'>
            {/* header */}
            <div className='relative  sm:w-full lg:w-[1418px] h-[132px] text-center mx-auto mb-6 font-bold text-[#222222] items-center lg:border-r-[12px]  lg:border-r-[#E0E0E0] lg:border-l-[12px] lg:border-l-[#E0E0E0]'>
                <h2 className='sm:text-[66px] lg:text-[70px] absolute lg:top-[19px] lg:left-[410px] sm:px-5 lg:px-0 '>{t('achievements.h')}</h2>
                <div className=" flex flex-row ">
                    <div className='sm:hidden lg:block absolute top-[65px] w-[155px] h-[12px] bg-[#E0E0E0]'></div>
                    <div className='sm:hidden lg:block absolute top-[65px] right-0 w-[155px] h-[12px] bg-[#E0E0E0]'></div>
                </div>
            </div>

            {/* list of achievements */}

            <ul className=' flex sm:flex-col  lg:flex-row justify-between border-amber-600 sm:w-full lg:w-[1640px] sm:px-10 lg:px-0 sm:h-[4200px] lg:h-[778px] text-[22px] text-center'>
                {/* 1 */}
                <li className=' sm:w-full lg:w-[389px] lg:h-full '>
                    {/* photo */}
                    <div className='lg:w-[389px] h-1/2  '><img src={first_image} alt='first image' loading="lazy"  className='w-full h-full '/></div>

                    {/* text */}
                    <div className='flex flex-col lg:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[79px] lg:h-[79px] mx-auto'><img src={keys} alt='keys' loading="lazy"  className='w-full h-full'/></div>

                        <p className='sm:text-[30px] lg:text-[20px]'>{t('achievements.p1')}</p>
                    </div>
                </li>

                {/* 2 */}
                <li className=' sm:w-full lg:w-[389px] lg:h-full '>
                    {/* photo */}
                    <div className='lg:w-[389px] h-1/2 '><img src={second_image} alt='secind image' loading="lazy"  className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col lg:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[79px] lg:h-[79px] mx-auto'><img src={room} alt='room' loading="lazy"  className='w-full h-full'/></div>

                        <p className='sm:text-[30px] lg:text-[20px]'>{t('achievements.p2')}</p>
                    </div>
                </li>

                {/* 3 */}
                <li className=' sm:w-full lg:w-[389px] lg:h-full '>
                    {/* photo */}
                    <div className='lg:w-[389px] h-1/2 '><img src={third_image} alt='third image' loading="lazy"  className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col lg:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[79px] lg:h-[79px] mx-auto'><img src={botique} alt='botique' className='w-full h-full'/></div>

                        <p className='sm:text-[30px] lg:text-[20px]'>{t('achievements.p3')}</p>
                    </div>
                </li>

                {/* 4 */}
                <li className=' sm:w-full lg:w-[389px] lg:h-full '>
                    {/* photo */}
                    <div className='lg:w-[389px] h-1/2 '><img src={fourth_image} alt='fourth image' loading="lazy"  className='w-full h-full'/></div>

                    {/* text */}
                    <div className='flex flex-col lg:w-[389px] h-1/2 py-10 space-y-10 border-[3px] border-[#F9B33B]'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[79px] lg:h-[79px] mx-auto'><img src={gears} alt='gears' loading="lazy"  className='w-full h-full'/></div>

                        <p className='sm:text-[30px] lg:text-[20px]'>{t('achievements.p4')}</p>
                    </div>
                </li>




            </ul>

        </div>

        {/* grid */}

        <div className='relative lg:w-full lg:h-[1882px] sm:mt-40 lg:mt-0 mx-auto'>
            {/* vector */}
            <div className='absolute -z-10 top-[165px] h-[1727px] w-full overflow-hidden '><img src={vector} alt='vector' loading="lazy"  className='object-cover w-full h-full'/></div>
            
            {/* header */}
            <header className='h-[83px] sm:w-full lg:w-[1641px] mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} alt='left decoration' loading="lazy"  className='w-[276px] h-[83px] sm:hidden lg:block '/>
                <div className='sm:mx-auto lg:mx-0'>
                    <h1 className='font-bold text-center sm:text-[70px] lg:text-[57px]'>{t('trust.h')}</h1>
                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy"  className='w-[276px] h-[83px] sm:hidden lg:block '/>
            </header>
            
            {/* grid images */}
            <section className='sm:w-full lg:w-[1641px] lg:h-[1641px] sm:px-10 lg:px-0 grid sm:gap-y-10 lg:gap-y-0  sm:grid-cols-1 sm:grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 mx-auto mt-20 select-none'>

                {/* 1 */}
                <div className='relative sm:w-full sm:h-fit lg:w-[806px] lg:h-[806px]'>
                    <img src={image1} alt='image 1' loading="lazy"  className='w-full h-full rounded-[10px] '/> 
                    <div className='absolute flex flex-col justify-around w-[530px] h-[590px] text-center z-10 sm:top-0 sm:left-[3%] lg:top-[15%] lg:left-[17%]'>
                        <p className='  text-[#F9B33B] font-bold sm:text-[260px] lg:text-[280px]'>{t("trust.main_p_1")}</p>
                        <p className='  text-white sm:text-[50px] lg:text-[60px] mb-20 '>{t('trust.p1')}</p>
                    </div>
                </div>
                
                {/* 2 */}
                <div className='relative sm:w-full sm:h-fit lg:w-[806px] lg:h-[806px]'>
                    <img src={image2} alt='image 1' loading="lazy"  className='w-full h-full rounded-[10px] '/> 
                    <div className='absolute flex flex-col justify-around w-[530px] h-[590px] text-center z-10 sm:top-0 sm:left-[3%] lg:top-[15%] lg:left-[17%]'>
                        <p className='  text-[#F9B33B] font-bold sm:text-[260px] lg:text-[280px]'>{t("trust.main_p_2")}</p>
                        <p className='  text-white sm:text-[50px] lg:text-[60px] mb-20 '>{t('trust.p2')}</p>
                    </div>
                </div>
                
                {/* 3 */}
                <div className='relative sm:w-full sm:h-fit lg:w-[806px] lg:h-[806px]'>
                    <img src={image3} alt='image 1' loading="lazy"  className='w-full h-full  rounded-[10px]'/> 
                    <div className='absolute flex flex-col justify-around w-[530px] h-[590px] text-center z-10 sm:top-0 sm:left-[3%] lg:top-[15%] lg:left-[17%]'>
                        <p className='  text-[#F9B33B] font-bold sm:text-[260px] lg:text-[280px]'>{t("trust.main_p_3")}</p>
                        <p className='  text-white sm:text-[50px] lg:text-[60px] mb-20 '>{t('trust.p3')}</p>
                    </div>
                </div>
                
                {/* 4 */}
                <div className='relative sm:w-full sm:h-fit lg:w-[806px] lg:h-[806px]'>
                    <img src={image4} alt='image 1' loading="lazy"  className='w-full h-full rounded-[10px] '/> 
                    <div className='absolute flex flex-col justify-around w-[530px] h-[590px] text-center z-10 sm:top-0 sm:left-[3%] lg:top-[18%] lg:left-[17%]'>
                        <p className='  text-[#F9B33B] font-bold sm:text-[200px] lg:text-[200px] sm:mt-20 lg:mt-9'>{t("trust.main_p_4")}</p>
                        <p className='  text-white sm:text-[50px] lg:text-[60px] sm:mb-30 lg:mb-20 '>{t('trust.p4')}</p>
                    </div>
                </div>
            </section>
        </div>
        
        {/* calculator */}
        <Calculator/>

        {/* videos */}
        <div className='w-full sm:h-[2550px]  lg:h-[909px] flex flex-col justify-between  my-20 mx-auto'>
            <h2 className='sm:text-[60px] lg:text-[50px] font-bold text-center'>{t('section.h')}</h2>

            {/* videos(instead of them just a div with any bg color) */}
            <div className='w-full sm:h-[2700px] lg:h-[696px] relative flex sm:flex-col lg:flex-row'>
                <div className='absolute  h-[853px] sm:top-0 lg:bottom-0 -z-10'><img src={vector_about_us_1} alt='vector 1' loading="lazy"  className='w-full h-full'/></div>
                <div className='sm:w-full  lg:w-[1641px] sm:h-[2250px] lg:h-[696px] flex sm:flex-col lg:flex-row justify-between mx-auto'>
                    <div className='w-[527px] h-[696px]  text-center sm:mx-auto lg:mx-0 '>
                        <iframe className='w-full h-full rounded-[10px]' src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='w-[527px] h-[696px]  text-center sm:mx-auto lg:mx-0'>
                        <iframe className='w-full h-full rounded-[10px]' src="https://www.youtube.com/embed/1ajIodgloag?si=mE1cbMB4_w6vIztU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='w-[527px] h-[696px]  text-center sm:mx-auto lg:mx-0'>
                        <iframe className='w-full h-full rounded-[10px]' src="https://www.youtube.com/embed/l0PAzZ2V3Cs?si=9gF9jbR6ECQOcfY-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                <div className='absolute h-[853px] sm:bottom-[46px] lg:bottom-0 right-0 -z-10'><img src={vector_about_us_2} alt='vector 2' loading="lazy"  className='w-full h-full'/></div>
            </div>
            


            <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">{t('section.button')}</Link>

                <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            </div>

        </div>


    </div>
  )
}

export default AboutUs