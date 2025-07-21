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
  const { t } = useTranslation('components/Footer')

  // Обработчик клика по иконкам соцсетей
  function handleImageClick(url) {
    window.location.href = url;
  }

  return (
    // Главный контейнер футера с фоновым изображением
    <footer className={`w-full footer-bg-image bg-center bg-cover relative ${selectedLang === 'it' ? 'px-4 sm:px-12 lg:px-8' : 'px-4 sm:px-6 lg:px-8'} py-8 sm:py-10 lg:py-12`}>
      {/* Контейнер контента с адаптивной шириной */}
      <div className="w-full max-w-[1641px] mx-auto flex flex-col gap-8 sm:gap-10 lg:gap-12">
        {/* Логотип и иконки соцсетей */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 sm:gap-8 lg:gap-10">
          <div className="w-[200px] sm:w-[300px] lg:w-[357px] h-auto button-scale-hover">
            <img src={logo} alt="logo" className="w-full h-auto sm:hidden lg:block" loading="lazy" />
          </div>
          <ul className="flex flex-row justify-center gap-4 sm:gap-6 lg:gap-8 w-full sm:w-auto">
            <li className="button-scale-hover w-10 sm:w-12 lg:w-[57px] h-10 sm:h-12 lg:h-[57px]">
              <img src={facebook} alt="facebook" className="w-full h-full object-contain" onClick={() => handleImageClick('https://www.facebook.com/people/Evo-Home/100087325255144/')} />
            </li>
            <li className="button-scale-hover w-10 sm:w-12 lg:w-[57px] h-10 sm:h-12 lg:h-[57px]">
              <img src={instagram} alt="instagram" className="w-full h-full object-contain" onClick={() => handleImageClick('https://www.instagram.com/evohome_ristrutturazioni?igsh=MWQyNmZkcWRtenR0MA%3D%3D&utm_source=qr')} />
            </li>
            <li className="button-scale-hover w-10 sm:w-12 lg:w-[57px] h-10 sm:h-12 lg:h-[57px]">
              <img src={google} alt="google" className="w-full h-full object-contain" onClick={() => handleImageClick('https://www.google.com/maps/place/Evo+Home+Ristrutturazioni/@41.9207852,12.5263142,17z/data=!3m1!4b1!4m6!3m5!1s0x880b544c576ff2bd:0x3fc93aeeff10730d!8m2!3d41.9207852!4d12.5263142!16s%2Fg%2F11vplxvk71?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D')} />
            </li>
            <li className="button-scale-hover w-10 sm:w-12 lg:w-[57px] h-10 sm:h-12 lg:h-[57px]">
              <img src={whatsap} alt="whatsapp" className="w-full h-full object-contain" onClick={() => handleImageClick('https://wa.me/+393279866412')} />
            </li>
          </ul>
        </div>

        {/* Ссылки футера */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 sm:gap-10 lg:gap-12 font-semibold">
          {/* Первый блок: ремонт под ключ и ремонт комнат */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10">
              {/* Ремонт под ключ */}
              <div className="flex flex-col">
                <Link to="/turnkey_renovation" className="flex flex-row items-center text-lg sm:text-xl lg:text-[22px] mb-4 group">
                  <YellowSquare style={`mr-2 ${selectedLang === 'it' ? 'h-[60px]' : ''}`} />
                  <span className="transition-colors duration-300 z-20 pl-3 group-hover:text-[#F9B33B]">{t('turnkey_renovation_h')}</span>
                </Link>
                <ul className="flex flex-col gap-3 pl-4 text-base sm:text-[18px] sm:hidden lg:flex">
                  <Link to="/turnkey_renovation/designer_renovation" className="hover:text-[#F9B33B] transition duration-200">{t('turnkey_renovation_ul.li1')}</Link>
                  <Link to="/turnkey_renovation/exclusive_renovation" className="hover:text-[#F9B33B] transition duration-200">{t('turnkey_renovation_ul.li2')}</Link>
                  <Link to="/turnkey_renovation/studio" className="hover:text-[#F9B33B] transition duration-200">{t('turnkey_renovation_ul.li3')}</Link>
                  <Link to="/turnkey_renovation/tworoom_apartments" className="hover:text-[#F9B33B] transition duration-200">{t('turnkey_renovation_ul.li4')}</Link>
                  <Link to="/turnkey_renovation/threeroom_apartments" className="hover:text-[#F9B33B] transition duration-200">{t('turnkey_renovation_ul.li5')}</Link>
                  <Link to="/turnkey_renovation/fourroom_apartments" className="hover:text-[#F9B33B] transition duration-200">{t('turnkey_renovation_ul.li6')}</Link>
                  <Link to="/turnkey_renovation/twostory_apartments" className="hover:text-[#F9B33B] transition duration-200">{t('turnkey_renovation_ul.li7')}</Link>
                </ul>
              </div>

              {/* Ремонт комнат */}
              <div className="flex flex-col">
                <Link to="/room_renovation" className="flex flex-row items-center text-lg sm:text-xl lg:text-[22px] mb-4 group">
                  <YellowSquare style={`mr-2 ${selectedLang === 'it' ? 'h-[60px]' : ''}`} />
                  <span className="transition-colors duration-300 z-20 pl-3 group-hover:text-[#F9B33B]">{t('room_renovation_h')}</span>
                </Link>
                <ul className="flex flex-col gap-3 pl-4 text-base sm:text-[18px] sm:hidden lg:flex">
                  <Link to="/room_renovation/living_room" className="hover:text-[#F9B33B] transition duration-200">{t('room_renovation_ul.li1')}</Link>
                  <Link to="/room_renovation/bedroom" className="hover:text-[#F9B33B] transition duration-200">{t('room_renovation_ul.li2')}</Link>
                  <Link to="/room_renovation/children_room" className="hover:text-[#F9B33B] transition duration-200">{t('room_renovation_ul.li3')}</Link>
                  <Link to="/room_renovation/corridor" className="hover:text-[#F9B33B] transition duration-200">{t('room_renovation_ul.li4')}</Link>
                  <Link to="/room_renovation/kitchen" className="hover:text-[#F9B33B] transition duration-200">{t('room_renovation_ul.li5')}</Link>
                  <Link to="/room_renovation/bathroom" className="hover:text-[#F9B33B] transition duration-200">{t('room_renovation_ul.li6')}</Link>
                  <Link to="/room_renovation/stairs" className="hover:text-[#F9B33B] transition duration-200">{t('room_renovation_ul.li7')}</Link>
                </ul>
              </div>
            </div>

            {/* Контакты */}
            <div className="flex flex-col">
              <Link to="/contacts" className="flex flex-row items-center text-lg sm:text-xl lg:text-[22px] mb-4 group">
                <YellowSquare style="mr-2" />
                <span className="transition-colors duration-300 z-20 pl-3 group-hover:text-[#F9B33B]">{t('contacts_h')}</span>
              </Link>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 text-base sm:text-[18px] sm:hidden lg:grid">
                <li>{t('contacts_p1')}</li>
                <li className={`${selectedLang === 'it' ? 'ml-[73px]' : ''}`}>{t('contacts_p2')}</li>
                <li>{t('contacts_p3')}</li>
              </ul>
            </div>
          </div>

          {/* Второй блок: коммерческие помещения и адрес */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full sm:w-auto">
            {/* Коммерческие помещения */}
            <div className="flex flex-col">
              <Link to="/commercial_premises" className="flex flex-row items-center text-lg sm:text-xl lg:text-[22px] mb-4 group">
                <YellowSquare style="mr-2" />
                <span className="transition-colors duration-300 z-20 pl-3 group-hover:text-[#F9B33B]">{t('commercial_premises_h')}</span>
              </Link>
              <ul className="flex flex-col gap-3 pl-4 text-base sm:text-[18px] sm:hidden lg:flex">
                <Link to="/commercial_premises/business_center" className="hover:text-[#F9B33B] transition duration-200">{t('commercial_premises_ul.li1')}</Link>
                <Link to="/commercial_premises/restaurant" className="hover:text-[#F9B33B] transition duration-200">{t('commercial_premises_ul.li2')}</Link>
                <Link to="/commercial_premises/commercial_premises_renovation" className="hover:text-[#F9B33B] transition duration-200">{t('commercial_premises_ul.li3')}</Link>
                <Link to="/commercial_premises/office" className="hover:text-[#F9B33B] transition duration-200">{t('commercial_premises_ul.li4')}</Link>
                <Link to="/commercial_premises/warehouse" className="hover:text-[#F9B33B] transition duration-200">{t('commercial_premises_ul.li5')}</Link>
                <Link to="/commercial_premises/fitness_club" className="hover:text-[#F9B33B] transition duration-200">{t('commercial_premises_ul.li6')}</Link>
                <Link to="/commercial_premises/hotel" className="hover:text-[#F9B33B] transition duration-200">{t('commercial_premises_ul.li7')}</Link>
              </ul>
            </div>

            {/* Адрес */}
            <div className="flex flex-col">
              <Link to="/contacts" className="flex flex-row items-center text-lg sm:text-xl lg:text-[22px] mb-4 group">
                <YellowSquare style="mr-2" />
                <span className="transition-colors duration-300 z-20 pl-3 group-hover:text-[#F9B33B]">{t('adress_h')}</span>
              </Link>
              <p className="pl-4 text-base sm:text-[18px] sm:hidden lg:flex">
                {t('adress_p1')}<br />{t('adress_p2')}
              </p>
            </div>
          </div>

          {/* Третий блок: системы и основное */}
          <div className="flex flex-col gap-6 sm:gap-8 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10">
              {/* Системы */}
              <div className="flex flex-col">
                <Link to="/systems" className="flex flex-row items-center text-lg sm:text-xl lg:text-[22px] mb-4 group">
                  <YellowSquare style="mr-2" />
                  <span className="transition-colors duration-300 z-20 pl-3 group-hover:text-[#F9B33B]">{t('systems_h')}</span>
                </Link>
                <ul className="flex flex-col gap-3 pl-4 text-base sm:text-[18px] sm:hidden lg:flex">
                  <Link to="/systems/electrical_system" className="hover:text-[#F9B33B] transition duration-200">{t('systems_ul.li1')}</Link>
                  <Link to="/systems/gas_system" className="hover:text-[#F9B33B] transition duration-200">{t('systems_ul.li2')}</Link>
                  <Link to="/systems/floor_heating" className="hover:text-[#F9B33B] transition duration-200">{t('systems_ul.li3')}</Link>
                  <Link to="/systems/sewage" className="hover:text-[#F9B33B] transition duration-200">{t('systems_ul.li4')}</Link>
                  <Link to="/systems/climate_control" className="hover:text-[#F9B33B] transition duration-200">{t('systems_ul.li5')}</Link>
                </ul>
              </div>

              {/* Основное */}
              <div className="flex flex-col">
                <Link to="/" className="flex flex-row items-center text-lg sm:text-xl lg:text-[22px] mb-4 group">
                  <YellowSquare style="mr-2" />
                  <span className="transition-colors duration-300 z-20 pl-3 group-hover:text-[#F9B33B]">{t('main_h')}</span>
                </Link>
                <ul className="flex flex-col gap-3 pl-4 text-base sm:text-[18px] sm:hidden lg:flex">
                  <Link to="/about_us" className="hover:text-[#F9B33B] transition duration-200">{t('main_ul.li1')}</Link>
                  <Link to="/our_works" className="hover:text-[#F9B33B] transition duration-200">{t('main_ul.li2')}</Link>
                  <Link to="/reviews" className="hover:text-[#F9B33B] transition duration-200">{t('main_ul.li3')}</Link>
                  <Link to="/contacts" className="hover:text-[#F9B33B] transition duration-200">{t('main_ul.li4')}</Link>
                </ul>
              </div>
            </div>

            {/* Google Maps iframe */}
            <div className="sm:hidden lg:block w-full sm:w-[400px] lg:w-[528px] h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d504.97865238958366!2d12.526491450045123!3d41.91998840756314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b544c576ff2bd%3A0x3fc93aeeff10730d!2sEvo%20Home%20Ristrutturazioni!5e0!3m2!1sru!2s!4v1748799349742!5m2!1sru!2s"
                width="100%"
                height="216"
                className="border-white border-[4px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <p className="text-base sm:text-[16px] lg:text-[20px] text-black sm:text-center lg:text-white lg:text-end absolute bottom-2 left-0 sm:left-4 lg:left-auto right-0 sm:right-4 lg:right-8">
          {t('copyright')} <br className="lg:hidden" />
          <a href="https://www.evohome.it/cookie-policy-privacy-policy/" className="text-[#F9B33B]">{t('cookies')}</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer