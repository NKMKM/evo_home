import React from 'react'
import { Helmet } from 'react-helmet';

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
  return (
    // all content
    <div>
        <Helmet>
            <title>Контакты</title>
            <meta name="description" content="Contacts of EVO Home company" />
        </Helmet>
        {/* contacts evo home */}
        <div className='sm:w-full lg:w-[1641px] sm:h-[2270px] lg:h-[1297px]  mx-auto my-20' >
            
            <header className='h-[83px] w-full mx-auto flex flex-row justify-between items-center mb-20 '>
                <img src={left_decoration} alt='left decoration' loading="lazy" className='w-[276px] h-[83px] sm:hidden lg:block  '/>
                <div className='sm:mx-auto lg:mx-0 '>
                    <h1 className='font-bold text-center sm:text-[60px] lg:text-[70px]'>Контакты EVO HOME</h1>

                </div>
                <img src={right_decoration} alt='right decoration' loading="lazy" className='sm:w-full lg:w-[276px] h-[83px] sm:hidden lg:block  '/>
            </header>

            <main className='sm:w-full lg:w-[1641px] sm:h-[2160px] lg:h-[1101px]   flex flex-col justify-between sm:p-4 lg:p-0'>
                <p className='sm:text-[30px] sm:text-center lg:text-[32px] my-2'>Мы всегда готовы выслушать вас и пообщаться с вами! Ниже вы найдете все необходимые контакты, чтобы обсудить с нами ваш проект, задать вопросы или оставить отзыв.</p>

                <div className='lg:w-[1640px] sm:h-[1455px] lg:h-[742px]   flex sm:flex-col lg:flex-row justify-between'>
                    
                    <ul className='flex flex-col justify-between lg:w-[694px] sm:h-[800px]  lg:h-[742px]'>
                        <li>
                            <div className='w-full h-[163px] bg-[#F9B33B] relative p-5'>
                                <div className='flex flex-row justify-between'>
                                    <h2 className='flex flex-row text-[32px] font-semibold items-center'><BsGeoAltFill size={37} className='mr-4'/> АДРЕС</h2>
                                    <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                                </div>
                                <p className='text-[30px]'>00162 РИМ<br/>Кольцевая дорога Номентана, 214</p>
                            </div>
                        </li>

                        <li>
                            <div className='w-full sm:h-[163px] lg:h-[132px] bg-[#F9B33B] relative p-5'>
                                <div className='flex flex-row justify-between'>
                                    <h2 className='flex flex-row text-[32px] font-semibold  items-center'><LocalPhoneIcon fontSize='37px' className='mr-4'/> ТЕЛЕФОННЫЕ КОНТАКТЫ</h2>
                                    <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                                </div>
                                <p className='text-[30px]'>+39 327 986 6412 &nbsp; &nbsp; &nbsp;+39 066 935 3277</p>
                            </div>
                        </li>

                        <li>
                            <div className='w-full h-[163px] bg-[#F9B33B] relative p-5'>
                                <div className='flex flex-row justify-between'>
                                    <h2 className='flex flex-row text-[32px] font-semibold  items-center'><IoIosMail size={37} className='mr-4'/> E-MAIL</h2>
                                    <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                                </div>
                                <p className='text-[30px]'>evohomeroma@gmail.com<br/>evohome@gmail.com</p>
                            </div>
                        </li>

                        <li>
                            <div className='w-full h-[163px] bg-[#F9B33B] relative p-5'>
                                <div className='flex flex-row justify-between'>
                                    <h2 className='flex flex-row text-[32px] font-semibold  items-center'><AccessTimeIcon className='scale-150 mr-4'/> ЧАСЫ РАБОТЫ</h2>
                                    <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                                </div>
                                <p className='text-[30px]'>Понедельник - пятница: 9:00 - 18:00 <br/>Суббота: с 10:00 до 14:00.</p>
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
                            <h2 className='flex flex-row text-[32px] font-semibold  items-center'><LanguageIcon  className=' scale-150 mr-4'/> НАЩИ СОЦСЕТИ</h2>
                            <div className="abcolute right-[100px] w-[37px] h-[37px] bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                        </div>
                        
                    </div>

                    <div className='flex items-center justify-end sm:w-full lg:w-[951px] h-[163px] border-[4px] border-[#F9B33B]'>
                        <ul className='sm:w-full lg:w-[834px] h-[92px] flex flex-row justify-between sm:px-4 lg:px-0 lg:pr-4  '>
                            <li className='w-[92px] h-[92px]'><img src={facebook} alt='facebook' loading="lazy" className='w-full h-full'/></li>
                            <li className='w-[92px] h-[92px]'><img src={instagram} alt='instagram' loading="lazy" className='w-full h-full'/></li>
                            <li className='w-[92px] h-[92px]'><img src={google} alt='google' loading="lazy" className='w-full h-full'/></li>
                            <li className='w-[92px] h-[92px]'><img src={whatsap} alt='whatsapp' loading="lazy" className='w-full h-full'/></li>
                        </ul>
                    </div>
                </div>
            </main>

        </div>

        {/* contact form */}

        <div className='contact-form-bg-image bg-center sm:w-full lg:w-[1920px]  sm:h-[820px] lg:h-[650px] '>
            <h2 className='text-white text-[70px] text-center font-semibold'>Свяжись с нами</h2>
            <form className='flex flex-col sm:w-full lg:w-[1361px] sm:h-[665px] lg:h-[470px] justify-between  text-white mx-auto'>
                <div className='flex sm:flex-col sm:h-[360px] lg:h-auto lg:w-full  lg:flex-row justify-between'>
                    <div className='sm:w-full lg:w-[388px] h-[104px] sm:px-12 lg:px-0 flex flex-col'>
                        <label className='mb-3'>ИМЯ</label>
                        <input type='text' placeholder='Ваше Имя...' className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>
                    <div className='sm:w-full lg:w-[388px] h-[104px] sm:px-12 lg:px-0 flex flex-col'>
                        <label className='mb-3'>E-MAIL</label>
                        <input type='text' placeholder='Ваш e-mail...' className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>
                    <div className='sm:w-full lg:w-[388px] h-[104px] sm:px-12 lg:px-0 flex flex-col'>
                        <label className='mb-3'>ГОРОД</label>
                        <input type='text' placeholder='Ваш город...' className='sm:w-full lg:w-[388px] h-[63px] border-[3px] border-[#F9B33B] p-3'/>
                    </div>

                </div>

                <div className='sm:w-full sm:px-12 lg:px-0 flex flex-col'>
                    <label className='mb-3'>ДОПОЛНИТЕЛЬНО</label>
                    <textarea name="" id="" placeholder='Напишите...' className='w-full border-[3px] border-[#F9B33B] h-[150px] p-3 bg-gray-300/20'></textarea>
                </div>

                <button type='submit' className='text-black font-bold sm:w-[84.7%] sm:h-[70px] lg:w-[315px] lg:h-[55px] bg-[#F9B33B] mx-auto button-scale-hover text-2xl'>ОТПРАВИТЬ</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts 