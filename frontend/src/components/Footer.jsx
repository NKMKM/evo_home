import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import logo from '../assets/icons/logo.png'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import google from '../assets/icons/google.png'
import whatsap from '../assets/icons/whatsap.png'
import YellowSquare from './YellowSquare'

const Footer = () => {
  const selectedLang = localStorage.getItem('language') || 'en';
  

  function handleImageClick(url) {
    window.location.href = url;
  }
  const {t} = useTranslation('components/Footer')
  return (
    <footer className='relative footer-bg-image w-full  sm:flex sm:flex-col sm:justify-between lg:block  sm:h-[700px] lg:h-[800px] '>
        <div className=' lg:w-[1641px] h-[635px] lg:mt-20 mx-auto flex flex-col justify-between sm:py-0 lg:py-5'>
            {/* logo and links */}
            <div className='flex sm:flex-col lg:flex-row justify-between mb-20 '>
                <div className='w-[357px] h-[57px] button-scale-hover  '><img src={logo} className='w-full h-full sm:hidden lg:block'/></div>
                {/* <button onClick={()=>{console.log(localStorage.getItem('language'));}}>click</button> */}

                <ul className=' sm:w-full lg:w-[389px] sm:h-[80px] lg:h-[57px] flex flex-row justify-between '>
                    <li className='button-scale-hover'><img src={facebook} className='w-full h-full' onClick={()=>handleImageClick('https://www.facebook.com/people/Evo-Home/100087325255144/')}/></li>
                    <li className='button-scale-hover'><img src={instagram} className='w-full h-full' onClick={()=>handleImageClick('https://www.instagram.com/evohome_impresa_edile')}/></li>
                    <li className='button-scale-hover'><img src={google} className='w-full h-full' onClick={()=>handleImageClick('https://www.google.com/maps/place/Evo+Home+Ristrutturazioni/@41.9207852,12.5263142,17z/data=!3m1!4b1!4m6!3m5!1s0x880b544c576ff2bd:0x3fc93aeeff10730d!8m2!3d41.9207852!4d12.5263142!16s%2Fg%2F11vplxvk71?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D')}/></li>
                    <li className='button-scale-hover'><img src={whatsap} className='w-full h-full' onClick={()=>handleImageClick('https://wa.me/+393279866412')}/></li>
                </ul>
            </div>

            {/* links */}

            <div className='flex sm:flex-col lg:flex-row justify-between font-semibold'>
                
              {/* first block */}
              <div className=' flex flex-col justify-between'>
                  {/* top list(reparation by key and room repair) */}
                  <div className='flex sm:flex-col lg:flex-row space-x-10'>
                    {/* repair by key */}
                    <div>
                      <Link to={'/turnkey_renovation'} className='flex flex-row text-[22px] mb-6 items-center group '> <YellowSquare   style={`mr-2 ${selectedLang === 'it'? 'h-[60px]' : '' } `}/><span className="transition-colors duration-300 z-20 pl-3">{t('turnkey_renovation_h')}</span> </Link>
                      <ul className='text-[18px] flex flex-col space-y-3 pl-4 sm:hidden lg:flex '>
                        <Link to={'/turnkey_renovation/designer_renovation'} className='hover:text-[#F9B33B] transition duration-200'>{t('turnkey_renovation_ul.li1')}</Link>
                        <Link to={'/turnkey_renovation/exclusive_renovation'} className='hover:text-[#F9B33B] transition duration-200'>{t('turnkey_renovation_ul.li2')}</Link>
                        <Link to={'/turnkey_renovation/studio'} className='hover:text-[#F9B33B] transition duration-200'>{t('turnkey_renovation_ul.li3')}</Link>
                        <Link to={'/turnkey_renovation/tworoom_apartments'} className='hover:text-[#F9B33B] transition duration-200'>{t('turnkey_renovation_ul.li4')}</Link>
                        <Link to={'/turnkey_renovation/threeroom_apartments'} className='hover:text-[#F9B33B] transition duration-200'>{t('turnkey_renovation_ul.li5')}</Link>
                        <Link to={'/turnkey_renovation/fourroom_apartments'} className='hover:text-[#F9B33B] transition duration-200'>{t('turnkey_renovation_ul.li6')}</Link>
                        <Link to={'/turnkey_renovation/twostory_apartments'} className='hover:text-[#F9B33B] transition duration-200'>{t('turnkey_renovation_ul.li7')}</Link>
                      </ul>
                    </div>

                    {/* room repair */}
                    <div>
                    <Link to={'/room_renovation'} className='flex lg:flex-row text-[22px] mb-6 items-center group '> <YellowSquare style={`mr-2 ${selectedLang === 'it'? 'h-[60px]' : '' }`}/><span className="transition-colors duration-300 z-20 pl-3">{t('room_renovation_h')}</span> </Link>
                      <ul className='text-[18px] flex flex-col space-y-3 pl-4 sm:hidden lg:flex'>
                        <Link to={'/room_renovation/living_room'}  className='hover:text-[#F9B33B] transition duration-200'>{t('room_renovation_ul.li1')}</Link>
                        <Link to={'/room_renovation/bedroom'}  className='hover:text-[#F9B33B] transition duration-200'>{t('room_renovation_ul.li2')}</Link>
                        <Link to={'/room_renovation/children_room'}  className='hover:text-[#F9B33B] transition duration-200'>{t('room_renovation_ul.li3')}</Link>
                        <Link to={'/room_renovation/corridor'}  className='hover:text-[#F9B33B] transition duration-200'>{t('room_renovation_ul.li4')}</Link>
                        <Link to={'/room_renovation/kitchen'}  className='hover:text-[#F9B33B] transition duration-200'>{t('room_renovation_ul.li5')}</Link>
                        <Link to={'/room_renovation/bathroom'}  className='hover:text-[#F9B33B] transition duration-200'>{t('room_renovation_ul.li6')}</Link>
                        <Link to={'/room_renovation/stairs'}  className='hover:text-[#F9B33B] transition duration-200'>{t('room_renovation_ul.li7')}</Link>
                      </ul>
                    </div>
                  </div>

                  {/* contacts */}
                  <div>
                  <Link to={'/contacts'} className='flex flex-row text-[22px] mb-6 items-center group '> <YellowSquare style="mr-2"/><span className="transition-colors duration-300 z-20 pl-3">{t('contacts_h')}</span> </Link>
                    <div className='grid grid-cols-2 gap-2 pl-4 sm:hidden lg:grid'>
                      <p>{t('contacts_p1')}</p>
                      <p>{t('contacts_p2')}</p>
                      <p>{t('contacts_p3')}</p>
                    </div>
                  </div>
              </div>


              {/* second block */}
              <div className='w-[400px] h-auto  flex flex-col justify-between'>
                {/* commercial premises */}
                <div>
                <Link to={'/commercial_premises'} className='flex flex-row text-[22px] mb-6 items-center group '> <YellowSquare style={`mr-2`}/><span className="transition-colors duration-300 z-20 pl-3">{t('commercial_premises_h')}</span> </Link>
                  <ul className='pl-4 text-[18px] flex flex-col space-y-3 sm:hidden lg:flex'>
                    <Link to={'/commercial_premises/business_center'} className='hover:text-[#F9B33B] transition duration-200'>{t("commercial_premises_ul.li1")}</Link>
                    <Link to={'/commercial_premises/restaurant'} className='hover:text-[#F9B33B] transition duration-200'>{t("commercial_premises_ul.li2")}</Link>
                    <Link to={'/commercial_premises/commercial_premises_renovation'} className='hover:text-[#F9B33B] transition duration-200'>{t("commercial_premises_ul.li3")}</Link>
                    <Link to={'/commercial_premises/office'} className='hover:text-[#F9B33B] transition duration-200'>{t("commercial_premises_ul.li4")}</Link>
                    <Link to={'/commercial_premises/warehouse'} className='hover:text-[#F9B33B] transition duration-200'>{t("commercial_premises_ul.li5")}</Link>
                    <Link to={'/commercial_premises/fitness_club'} className='hover:text-[#F9B33B] transition duration-200'>{t("commercial_premises_ul.li6")}</Link>
                    <Link to={'/commercial_premises/hotel'} className='hover:text-[#F9B33B] transition duration-200'>{t("commercial_premises_ul.li7")}</Link>
                  </ul>
                </div>
                
                {/* adress */}
                <div>
                <Link to="/contacts" className='flex flex-row text-[22px] mb-6 items-center group '> <YellowSquare style="mr-2 "/><span className="transition-colors duration-300 z-20 pl-3">{t('adress_h')}</span> </Link>
                  <p className='ml-4 sm:hidden lg:flex'>{t('adress_p1')}<br/>{t('adress_p2')}</p>
                </div>
              </div>
              

              {/* third block  */}
              <div className='flex flex-col w-[528px] h-auto  justify-between'>
                
                <div className='flex sm:flex-col lg:flex-row mb-10 justify-between'>
                  {/* systems */}
                  <div>
                  <Link to={'/systems'} className='flex flex-row text-[22px] mb-6 items-center group '> <YellowSquare style="mr-2"/><span className="transition-colors duration-300 z-20 pl-3">{t('systems_h')}</span> </Link>
                    <ul className='space-y-3 flex flex-col sm:hidden lg:flex'>
                      <Link to={'/systems/electrical_system'} className='hover:text-[#F9B33B] transition duration-200'>{t('systems_ul.li1')}</Link>
                      <Link to={'/systems/gas_system'} className='hover:text-[#F9B33B] transition duration-200'>{t('systems_ul.li2')}</Link>
                      <Link to={'/systems/floor_heating'} className='hover:text-[#F9B33B] transition duration-200'>{t('systems_ul.li3')}</Link>
                      <Link to={'/systems/sewage'} className='hover:text-[#F9B33B] transition duration-200'>{t('systems_ul.li4')}</Link>
                      <Link to={'/systems/climate_control'} className='hover:text-[#F9B33B] transition duration-200'>{t('systems_ul.li5')}</Link>
                    </ul>
                  </div>

                  {/* main */}

                  <div>
                  <Link to={'/'} className='flex flex-row text-[22px] mb-6 items-center group '> <YellowSquare style="mr-2 "/><span className="transition-colors duration-300 z-20 pl-3">{t('main_h')}</span> </Link>
                    <ul className='pl-4 flex flex-col space-y-3 sm:hidden lg:flex'>
                      <Link to={'/about_us'} className='hover:text-[#F9B33B] transition duration-200'>{t('main_ul.li1')}</Link>
                      <Link to={'/our_works'} className='hover:text-[#F9B33B] transition duration-200'>{t('main_ul.li2')}</Link>
                      <Link to={'/reviews'} className='hover:text-[#F9B33B] transition duration-200'>{t('main_ul.li3')}</Link>
                      <Link to={'contacts'} className='hover:text-[#F9B33B] transition duration-200'>{t('main_ul.li4')}</Link>
                    </ul>
                  </div>

                </div>


                {/* google map iframe */}

                <div className='sm:hidden lg:block'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.97865238958366!2d12.526491450045123!3d41.91998840756314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b544c576ff2bd%3A0x3fc93aeeff10730d!2sEvo%20Home%20Ristrutturazioni!5e0!3m2!1sru!2s!4v1748799349742!5m2!1sru!2s" width="528" height="216" className='border-white border-[4px]'  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>


            </div>

        </div>

        <p className='sm:text-black sm:text-[14px] lg:text-[20px] absolute bottom-1 lg:text-white lg:left-[500px] sm:left-[60px] sm:text-center lg:text-end '>{t('copyright')}<br className="md:hidden"/> <a href='https://www.evohome.it/cookie-policy-privacy-policy/' className='text-[#F9B33B]'>{t('cookies')}</a> </p>
    </footer>
  )
}

export default Footer