import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

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
  const {t} = useTranslation('commercial_premises/CommercialPremises')
  return (
    <div>
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content="Renovation of commercial premises by EVO Home" />
        </Helmet>
        {/* first step */}
        <header className='sm:w-full  lg:w-[1641px] sm:h-[1900px] lg:h-[1677px] mx-auto sm:mt-10 lg:mt-20 mb-30 flex flex-col justify-between'>
            {/* header */}
            <div className='h-[83px] lg:w-full sm:my-10 lg:my-0 mx-auto flex flex-row justify-between items-center '>
                <img src={left_decoration} alt='left decoratioin' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block  '/>
                <div className=''>
                    <h1 className='font-bold text-center  sm:text-[50px] lg:text-[57px]'>{t('h')}</h1>

                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block'/>
            </div>
            
            {/* main content */}
            <div className='sm:h-[1700px]  lg:h-[1510px] flex flex-col justify-between  '>
                {/* header */}
                <div className='lg:w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row'>
                    <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-5 lg:mr-10'>1.</div>
                    <h2 className='sm:text-[29px] sm:mt-4 lg:mt-0 lg:text-[50px] font-bold'>{t('header.h')}</h2>
                </div>

                {/* text */}
                <div className='sm:text-[28px] lg:text-[32px] sm:w-full sm:px-4 lg:px-0 sm:text-center lg:text-start lg:w-[1641px] sm:h-[950px] lg:h-[504px] flex flex-col justify-between '>
                    <p>{t('header.p1')}</p>
                    <p>{t('header.p2')}</p>

                </div>

                {/* image */}
                <div className='sm:w-full lg:w-[1641px] lg:h-[661px] bg-blue-600/20'><img src={image} alt='commercial premises' loading="lazy" className='w-full h-full object-cover'/></div>

                <div className='sm:w-full lg:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>

                    <Link to="/contacts" className="sm:w-[40%] lg:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">{t('header.button')}</Link>

                    <div className='sm:h-[3px] lg:h-[1px] sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
                </div>
            </div>


        </header>

        {/* calculator */}
        <div className='mb-20'>
            <Calculator/>
        </div>

        <main className='w-full sm:h-[8200px]  lg:h-[4503px] lg:mb-20 flex flex-col   justify-between '>
            {/* header */}
            <div className='sm:w-full lg:w-[1640px] h-[74px] bg-[#F9B33B] mx-auto flex flex-row'>
                <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-5 lg:mr-10'>2.</div>
                <h2 className='sm:text-[26px] lg:text-[50px] font-bold'>{t('process.h')}</h2>
            </div>



               {/* list of steps */}
                <div className=' sm:h-[6700px] lg:h-auto relative mx-auto  '>
                    <div className='w-[1377px] h-[646px] scale-x-80 absolute top-[347px] left-[220px] sm:hidden lg:block'><img src={arrow_1} alt='arrow 1' loading="lazy" className='w-full h-full ' /></div>
    
                    <ul className='sm:h-[6700px]  lg:h-[3213px] sm:w-full lg:w-[1641px]  flex flex-col justify-between space-y-20'>
                        {/* 1 */}
                        <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={first_step} alt='first step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 lg:px-5 '>
                                <div>
                                    <h2 className='font-bold text-[46px]'>{t('process.ul.1.h')}</h2>
                                </div>
    
                                <p className='sm:text-[24px] lg:text-[27px] p-light'>{t('process.ul.1.p')}</p>
                            </div>


                        </li>
    
                        {/* 2 */}
                        <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                            {/* process photo */}
                            <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={second_step} alt='second step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5  '>
                                <div>
                                    <h2 className='font-bold text-[46px]'>{t('process.ul.2.h')}</h2>
                                </div>
    
                                <p className='sm:text-[24px] lg:text-[27px] p-light'>{t('process.ul.2.p')}</p>
                            </div>


                        </li>
    
                        {/* 3 */}
                        <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={third_step} alt='third step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                                <div>
                                    <h2 className='font-bold text-[46px]'>{t('process.ul.3.h')}</h2>
                                </div>
    
                                <p className='sm:text-[24px] lg:text-[27px] p-light'>{t('process.ul.3.p')}</p>
                            </div>


                        </li>
    
                        {/* 4 */}
                        <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                            {/* process photo */}
                            <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={fourth_step} alt='fourth step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                                <div>
                                    <h2 className='font-bold text-[46px]'>{t('process.ul.4.h')}</h2>
                                </div>
    
                                <p className='sm:text-[24px] lg:text-[27px] p-light'>{t('process.ul.4.p')}</p>
                            </div>


                        </li>
    
                        {/* 5 */}
                        <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={image} alt='fifth step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 lg:px-5 '>
                                <div>
                                    <h2 className='font-bold text-[42px]'>{t('process.ul.5.h')}</h2>
                                </div>
    
                                <p className='sm:text-[24px] lg:text-[27px] p-light'>{t('process.ul.5.p')}</p>
                            </div>


                        </li>

                        {/* 6 */}
                        <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row-reverse  justify-between '>
                            {/* process photo */}
                            <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={sixth_step} alt='sixth step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                                <div>
                                    <h2 className='font-bold text-[46px]'>{t('process.ul.6.h')}</h2>
                                </div>
    
                                <p className='sm:text-[24px] lg:text-[27px] p-light'>{t('process.ul.6.p')}</p>
                            </div>


                        </li>

                        {/* 7*/}
                        <li className='sm:w-[85%] lg:w-full  sm:ml-[5%] lg:ml-0 lg:h-[384px] flex sm:flex-col lg:flex-row  justify-between '>
                            {/* process photo */}
                            <div className=' sm:w-full lg:w-[667px] h-full border-[5px] border-[#F9B33B]'><img src={seventh_step} alt='seventh step' loading="lazy" className='w-full h-full object-cover'/></div>
    
                            {/* info */}
                            <div className='sm:w-full lg:w-[1082px] h-full  flex flex-col space-y-10  py-5 px-5 '>
                                <div>
                                    <h2 className='font-bold text-[46px]'>{t('process.ul.7.h')}</h2>
                                </div>
    
                                <p className='sm:text-[24px] lg:text-[27px] p-light'>{t('process.ul.7.p')}</p>
                            </div>


                        </li>

                    </ul>
    
    
                    <div className='w-[1604px] h-[627px]  absolute top-[1320px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
                    <div className='w-[1604px] h-[627px]  absolute top-[2260px] left-0 sm:hidden lg:block'><img src={arrow_2} alt='arrow 2' loading="lazy" className='w-full h-full' /></div>
                </div> 



            {/* video */}
            <div className='sm:mb-20 lg:mb-0'>
                <Video text={t('process.video_text')}/>
            </div>



        </main>




        {/* reasons why */}

        <Reasons/>

        {/* projects */}
        <CommercialPremisesProjects/>













    </div>
  )
}

export default CommercialPremises