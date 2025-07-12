import React from 'react'
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import { BsGeoAltFill } from "react-icons/bs";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { IoIosMail } from "react-icons/io";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';

import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import google from '../assets/icons/google.png'
import whatsap from '../assets/icons/whatsap.png'

const Contacts = () => {
    function handleImageClick(url) {
        window.location.href = url;
        }
    const {t} = useTranslation('Contacts')
  return (
    // all content
    <div>
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content="Contacts of EVO Home company" />
        </Helmet>
        {/* contacts evo home */}
        <div className='sm:w-full lg:w-[1641px] sm:h-[2270px] lg:h-[1297px]  mx-auto my-20' >
            
            <header className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20 '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block  '/>
                <div className='sm:mx-auto lg:mx-0 '>
                    <h1 className='font-bold text-center sm:text-[60px] lg:text-[70px]'>{t('header.h')}</h1>

                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='sm:w-full lg:w-[276px] h-[83px] sm:hidden lg:block  '/>
            </header>

            <main className='sm:w-full lg:w-[1641px] sm:h-[2160px] lg:h-[1101px]   flex flex-col justify-between sm:p-4 lg:p-0'>
                <p className='sm:text-[30px] sm:text-center lg:text-[32px] my-2'>{t('header.p')}</p>

                <div className='lg:w-[1640px] sm:h-[1455px] lg:h-[742px]   flex sm:flex-col lg:flex-row justify-between'>
                    
                    <ul className='flex flex-col justify-between lg:w-[694px] sm:h-[800px]  lg:h-[742px]'>
                        <li>
                            <div className='w-full h-[163px] bg-[#F9B33B] relative p-5'>
                                <div className='flex flex-row justify-between'>
                                    <h2 className='flex flex-row text-[32px] font-semibold items-center'><BsGeoAltFill size={37} className='mr-4'/> {t('contacts.1.h')}</h2>
                                    <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                                </div>
                                <p className='text-[30px]'>{t('contacts.1.p1')}<br/>{t('contacts.1.p2')}</p>
                            </div>
                        </li>

                        <li>
                            <div className='w-full sm:h-[163px] lg:h-[132px] bg-[#F9B33B] relative p-5'>
                                <div className='flex flex-row justify-between'>
                                    <h2 className='flex flex-row text-[32px] font-semibold  items-center'><LocalPhoneIcon fontSize='37px' className='mr-4'/> {t('contacts.2.h')}</h2>
                                    <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                                </div>
                                <p className='text-[30px]'>+39 327 986 6412 &nbsp; &nbsp; &nbsp;+39 066 935 3277</p>
                            </div>
                        </li>

                        <li>
                            <div className='w-full h-[163px] bg-[#F9B33B] relative p-5'>
                                <div className='flex flex-row justify-between'>
                                    <h2 className='flex flex-row text-[32px] font-semibold  items-center'><IoIosMail size={37} className='mr-4'/> {t('contacts.3.h')}</h2>
                                    <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                                </div>
                                <p className='text-[30px]'>evohomeroma@gmail.com<br/>evohome@gmail.com</p>
                            </div>
                        </li>

                        <li>
                            <div className='w-full h-[163px] bg-[#F9B33B] relative p-5'>
                                <div className='flex flex-row justify-between'>
                                    <h2 className='flex flex-row text-[32px] font-semibold  items-center'><AccessTimeIcon className='scale-150 mr-4'/> {t('contacts.4.h')}</h2>
                                    <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                                </div>
                                <p className='text-[30px]'>{t('contacts.4.p1')} 9:00 - 18:00 <br/>{t('contacts.4.p2')} 10:00 до 14:00.</p>
                            </div>
                        </li>
                    </ul>

                    <div>
                        <iframe className='sm:w-full sm:h-[600px] lg:w-[834px] lg:h-[742px] border-[4px] border-[#F9B33B]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.700851227668!2d12.523739276689986!3d41.92078916273934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b544c576ff2bd%3A0x3fc93aeeff10730d!2sEvo%20Home%20Ristrutturazioni!5e0!3m2!1sru!2s!4v1748806214394!5m2!1sru!2s" width="834" height="742"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className='sm:w-full lg:w-[1640px] sm:h-[360px]  lg:h-[163px]  flex sm:flex-col lg:flex-row justify-between'>
                    <div className='sm:w-full lg:w-[692px] h-[163px] bg-[#F9B33B] relative p-5'>
                        <div className='flex flex-row justify-between'>
                            <h2 className='flex flex-row text-[32px] font-semibold  items-center'><LanguageIcon  className=' scale-150 mr-4'/> {t('contacts.5.h')}</h2>
                            <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                        </div>
                        
                    </div>

                    <div className='flex items-center justify-end sm:w-full lg:w-[951px] h-[163px] border-[4px] border-[#F9B33B]'>
                        <ul className='sm:w-full lg:w-[834px] h-[92px] flex flex-row justify-between sm:px-4 lg:px-0 lg:pr-4  '>
                            <li className='w-[92px] h-[92px] hover:scale-110 transition duration-300'><img src={facebook} alt='facebook' loading="lazy" className='w-full h-full ' onClick={()=>handleImageClick('https://www.facebook.com/people/Evo-Home/100087325255144/')}/></li>
                            <li className='w-[92px] h-[92px] hover:scale-110 transition duration-300'><img src={instagram} alt='instagram' loading="lazy" className='w-full h-full ' onClick={()=>handleImageClick('https://www.instagram.com/evohome_impresa_edile')}/></li>
                            <li className='w-[92px] h-[92px] hover:scale-110 transition duration-300'><img src={google} alt='google' loading="lazy" className='w-full h-full ' onClick={()=>handleImageClick('https://www.google.com/maps/place/Evo+Home+Ristrutturazioni/@41.9207852,12.5263142,17z/data=!3m1!4b1!4m6!3m5!1s0x880b544c576ff2bd:0x3fc93aeeff10730d!8m2!3d41.9207852!4d12.5263142!16s%2Fg%2F11vplxvk71?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D')}/></li>
                            <li className='w-[92px] h-[92px] hover:scale-110 transition duration-300'><img src={whatsap} alt='whatsapp' loading="lazy" className='w-full h-full ' onClick={()=>handleImageClick('https://wa.me/+393279866412')}/></li>
                        </ul>
                    </div>
                </div>
            </main>

        </div>

        {/* contact form */}

        <div className='contact-form-bg-image bg-center sm:w-full lg:w-[1920px]  sm:h-[820px] lg:h-[650px] '>
            <h2 className='text-white text-[70px] text-center font-semibold'>{t('form.h')}</h2>
            <form className='flex flex-col sm:w-full lg:w-[1361px] sm:h-[665px] lg:h-[470px] justify-between  text-white mx-auto'>
                <div className='flex sm:flex-col sm:h-[360px] lg:h-auto lg:w-full  lg:flex-row justify-between'>
                    <div className='sm:w-full lg:w-[388px] h-[104px] sm:px-12 lg:px-0 flex flex-col'>
                        <label className='mb-3'>{t('form.first_section.h')}</label>
                        <input type='text' placeholder={t('form.first_section.placeholder')} className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>
                    <div className='sm:w-full lg:w-[388px] h-[104px] sm:px-12 lg:px-0 flex flex-col'>
                        <label className='mb-3'>{t('form.second_section.h')}</label>
                        <input type='text' placeholder={t('form.second_section.placeholder')} className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>
                    <div className='sm:w-full lg:w-[388px] h-[104px] sm:px-12 lg:px-0 flex flex-col'>
                        <label className='mb-3'>{t('form.third_section.h')}</label>
                        <input type='text' placeholder={t('form.third_section.placeholder')} className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>

                </div>

                <div className='sm:w-full sm:px-12 lg:px-0 flex flex-col'>
                    <label className='mb-3'>{t('form.fourth_section.h')}</label>
                    <textarea name="" id="" placeholder={t('form.fourth_section.placeholder')} className='w-full border-[3px] border-[#F9B33B] h-[150px] p-3 bg-gray-300/20'></textarea>
                </div>

                <button type='submit' className='text-black font-bold sm:w-[84.7%] sm:h-[70px] lg:w-[315px] lg:h-[55px] bg-[#F9B33B] mx-auto button-scale-hover text-2xl'>{t("form.button")}</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts 