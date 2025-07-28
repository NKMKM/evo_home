import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import { BsGeoAltFill } from 'react-icons/bs'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { IoIosMail } from 'react-icons/io'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import LanguageIcon from '@mui/icons-material/Language'
import facebook from '../assets/icons/facebook.png'
import instagram from '../assets/icons/instagram.png'
import google from '../assets/icons/google.png'
import whatsap from '../assets/icons/whatsap.png'

const Contacts = () => {
  const { t } = useTranslation('Contacts')

  function handleImageClick(url) {
    window.location.href = url
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content="Informazioni di contatto dell’ Impresa Edile a Roma Evo Home - L’ affidabilità, la qualità e l’ esperienza a cui puoi affidarti." />
      </Helmet>

      {/* contacts evo home */}
      <div className="w-full max-w-[1641px] mx-auto my-10 px-4 sm:px-6 lg:px-0">
        <header className="w-full flex flex-row justify-between items-center mb-8">
          <img
            src={left_decoration}
            alt="left decoration"
            loading="lazy"
            className="w-[150px] sm:w-[200px] lg:w-[276px] h-auto hidden lg:block"
          />
          <div className="mx-auto lg:mx-0">
            <h1 className="font-bold text-center text-4xl sm:text-5xl lg:text-6xl">
              {t('header.h')}
            </h1>
          </div>
          <img
            src={right_decoration}
            alt="right decoration"
            loading="lazy"
            className="w-[150px] sm:w-[200px] lg:w-[276px] h-auto hidden lg:block"
          />
        </header>

        <main className="w-full flex flex-col gap-8 lg:gap-12">
          <p className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left my-4">
            {t('header.p')}
          </p>

          <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ul className="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-6">
              <li>
                <div className="w-full bg-[#F9B33B] relative p-5">
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="flex flex-row items-center text-xl sm:text-2xl lg:text-3xl font-semibold">
                      <BsGeoAltFill size={30} className="mr-3 lg:mr-4" /> {t('contacts.1.h')}
                    </h2>
                    <div className="absolute right-5 w-6 h-6 lg:w-9 lg:h-9 bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl mt-2">
                    {t('contacts.1.p1')}
                    <br />
                    {t('contacts.1.p2')}
                  </p>
                </div>
              </li>

              <li>
                <div className="w-full bg-[#F9B33B] relative p-5">
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="flex flex-row items-center text-xl sm:text-2xl lg:text-3xl font-semibold">
                      <LocalPhoneIcon size={30} fontSize="large" className="mr-3 lg:mr-4" /> {t('contacts.2.h')}
                    </h2>
                    <div className="absolute right-5 w-6 h-6 lg:w-9 lg:h-9 bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl mt-2">
                    +39 327 986 6412 <br className="sm:hidden" /> +39 066 935 3277
                  </p>
                </div>
              </li>

              <li>
                <div className="w-full bg-[#F9B33B] relative p-5">
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="flex flex-row items-center text-xl sm:text-2xl lg:text-3xl font-semibold">
                      <IoIosMail size={30} className="mr-3 lg:mr-4" /> {t('contacts.3.h')}
                    </h2>
                    <div className="absolute right-5 w-6 h-6 lg:w-9 lg:h-9 bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl mt-2">
                    evohomeroma@gmail.com
                    <br />
                    evohome@gmail.com
                  </p>
                </div>
              </li>

              <li>
                <div className="w-full bg-[#F9B33B] relative p-5">
                  <div className="flex flex-row justify-between items-center">
                    <h2 className="flex flex-row items-center text-xl sm:text-2xl lg:text-3xl font-semibold">
                      <AccessTimeIcon size={30} className="mr-3 lg:mr-4" /> {t('contacts.4.h')}
                    </h2>
                    <div className="absolute right-5 w-6 h-6 lg:w-9 lg:h-9 bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
                  </div>
                  <p className="text-lg sm:text-xl lg:text-2xl mt-2">
                    {t('contacts.4.p1')} 9:00 - 18:00
                    <br />
                    {t('contacts.4.p2')} 10:00 - 14:00
                  </p>
                </div>
              </li>
            </ul>

            <div className="w-full lg:w-1/2">
              <iframe
                className="w-full h-[400px] sm:h-[500px] lg:h-[742px] border-4 border-[#F9B33B]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.700851227668!2d12.523739276689986!3d41.92078916273934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b544c576ff2bd%3A0x3fc93aeeff10730d!2sEvo%20Home%20Ristrutturazioni!5e0!3m2!1sru!2s!4v1748806214394!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-6">
            <div className="w-full lg:w-[800px] bg-[#F9B33B] relative p-5">
              <div className="flex flex-row justify-between items-center">
                <h2 className="flex flex-row items-center text-xl sm:text-2xl lg:text-3xl font-semibold">
                  <LanguageIcon className="scale-125 mr-3 lg:mr-4" /> {t('contacts.5.h')}
                </h2>
                <div className="absolute right-5 w-6 h-6 lg:w-9 lg:h-9 bg-white [clip-path:polygon(100%_0,100%_100%,0_0)]" />
              </div>
            </div>

            <div className="w-full lg:w-[805px] h-[120px] lg:h-[163px] border-4 border-[#F9B33B] flex items-center justify-center lg:justify-end">
              <ul className="w-full max-w-[834px] flex flex-row justify-between px-4 lg:pr-4">
                <li className="w-16 h-16 lg:w-24 lg:h-24 hover:scale-110 transition duration-300">
                  <img
                    src={facebook}
                    alt="facebook"
                    loading="lazy"
                    className="w-full h-full"
                    onClick={() => handleImageClick('https://www.facebook.com/people/Evo-Home/100087325255144/')}
                  />
                </li>
                <li className="w-16 h-16 lg:w-24 lg:h-24 hover:scale-110 transition duration-300">
                  <img
                    src={instagram}
                    alt="instagram"
                    loading="lazy"
                    className="w-full h-full"
                    onClick={() => handleImageClick('https://www.instagram.com/evohome_impresa_edile')}
                  />
                </li>
                <li className="w-16 h-16 lg:w-24 lg:h-24 hover:scale-110 transition duration-300">
                  <img
                    src={google}
                    alt="google"
                    loading="lazy"
                    className="w-full h-full"
                    onClick={() =>
                      handleImageClick(
                        'https://www.google.com/maps/place/Evo+Home+Ristrutturazioni/@41.9207852,12.5263142,17z/data=!3m1!4b1!4m6!3m5!1s0x880b544c576ff2bd:0x3fc93aeeff10730d!8m2!3d41.9207852!4d12.5263142!16s%2Fg%2F11vplxvk71?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D'
                      )
                    }
                  />
                </li>
                <li className="w-16 h-16 lg:w-24 lg:h-24 hover:scale-110 transition duration-300">
                  <img
                    src={whatsap}
                    alt="whatsapp"
                    loading="lazy"
                    className="w-full h-full"
                    onClick={() => handleImageClick('https://wa.me/+393279866412')}
                  />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>

      {/* contact form */}
      <div className="contact-form-bg-image bg-center bg-cover w-full">
        <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl text-center font-semibold pt-8 mb-6">
          {t('form.h')}
        </h2>
        <form className="w-full max-w-[1361px] mx-auto flex flex-col gap-6 lg:gap-8 px-4 sm:px-6 lg:px-0 pb-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            <div className="w-full lg:w-[388px] flex flex-col">
              <label className="text-white mb-2 text-lg lg:text-xl">{t('form.first_section.h')}</label>
              <input
                type="text"
                placeholder={t('form.first_section.placeholder')}
                className="w-full h-12 lg:h-16 border-2 lg:border-3 border-[#F9B33B] p-3 text-black bg-white/90"
              />
            </div>
            <div className="w-full lg:w-[388px] flex flex-col">
              <label className="text-white mb-2 text-lg lg:text-xl">{t('form.second_section.h')}</label>
              <input
                type="text"
                placeholder={t('form.second_section.placeholder')}
                className="w-full h-12 lg:h-16 border-2 lg:border-3 border-[#F9B33B] p-3 text-black bg-white/90"
              />
            </div>
            <div className="w-full lg:w-[388px] flex flex-col">
              <label className="text-white mb-2 text-lg lg:text-xl">{t('form.third_section.h')}</label>
              <input
                type="text"
                placeholder={t('form.third_section.placeholder')}
                className="w-full h-12 lg:h-16 border-2 lg:border-3 border-[#F9B33B] p-3 text-black bg-white/90"
              />
            </div>
          </div>

          <div className="w-full flex flex-col">
            <label className="text-white mb-2 text-lg lg:text-xl">{t('form.fourth_section.h')}</label>
            <textarea
              placeholder={t('form.fourth_section.placeholder')}
              className="w-full h-32 lg:h-40 border-2 lg:border-3 border-[#F9B33B] p-3 text-black bg-white/90"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-black font-bold w-full sm:w-3/4 lg:w-[315px] h-12 lg:h-14 bg-[#F9B33B] mx-auto text-lg lg:text-xl hover:scale-105 transition duration-300"
          >
            {t('form.button')}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contacts