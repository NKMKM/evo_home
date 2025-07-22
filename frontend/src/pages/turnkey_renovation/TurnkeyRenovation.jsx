import React from 'react'
import Projects from '../../components/room_renovation_components/Projects'
import Calculator from '../../components/mainpage_components/Calculator'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/turnkey_renovation/image.jpg'
import vector_about_us_1 from '../../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from '../../assets/videos/abouts_us/vector2.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import vector from '../../assets/images/room_renovation/room_renovation/vector.png'

import first_step from '../../assets/images/turnkey_renovation/turnkey_renovation/process/first_step.jpg'
import second_step from '../../assets/images/turnkey_renovation/turnkey_renovation/process/second_step.jpg'
import third_step from '../../assets/images/turnkey_renovation/turnkey_renovation/process/third_step.jpg'

const TurnkeyRenovation = () => {
  const { t } = useTranslation('turnkey_renovation/TurnkeyRenovation')
  const selectedLang = localStorage.getItem('language') || 'en'
  return (
    <div className="w-full min-h-screen">
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content="Turnkey renovation by EVO Home" />
      </Helmet>

      <header className="w-full max-w-[1641px] mx-auto my-6 sm:my-8 lg:my-10 flex flex-col justify-between px-4 lg:px-0">
        <div className="w-full flex flex-row justify-between items-center mb-6 sm:mb-8 lg:mb-10">
          <img src={left_decoration} alt='left decoration' loading="lazy" className="w-[200px] h-[60px] hidden lg:block" />
          <h1 className={`font-bold text-center text-[32px] sm:text-[40px] lg:text-[50px] mx-auto`}>{t('h')}</h1>
          <img src={right_decoration} alt='right decoration' loading="lazy" className="w-[200px] h-[60px] hidden lg:block" />
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="w-full h-[60px] sm:h-[74px] bg-[#F9B33B] flex flex-row items-center">
            <div className="w-[60px] sm:w-[74px] h-full bg-[#222222] text-white text-[40px] sm:text-[50px] text-center mr-3 lg:mr-10">1.</div>
            <h2 className={`${selectedLang === 'it' || selectedLang === 'en' ? 'text-[18px] sm:text-[20px]' : 'text-[20px] sm:text-[24px]'} lg:text-[50px] font-bold mt-1 lg:mt-0`}>{t('header.h')}</h2>
          </div>

          <div className="text-[18px] sm:text-[22px] lg:text-[28px] text-center lg:text-left flex flex-col space-y-4">
            <p>{t('header.p1')}</p>
            <p>{t('header.p2')}</p>
          </div>

          <div className="w-full bg-blue-600/20 rounded-[10px] overflow-hidden">
            <img src={image} alt='turnkey renovation' loading="lazy" className="w-full h-auto object-cover" />
          </div>

          <div className="w-full h-[50px] sm:h-[67px] flex flex-row items-center mx-auto">
            <div className="h-[2px] sm:h-[3px] lg:h-[1px] w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
            <Link to="/contacts" className="w-[40%] lg:w-[389px] h-full bg-[#F9B33B] text-[20px] sm:text-[24px] lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300">{t('header.button')}</Link>
            <div className="h-[2px] sm:h-[3px] lg:h-[1px] w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
          </div>
        </div>
      </header>
{/* ------------------------ */}
      <div className="relative w-full mx-auto my-8 sm:my-10 lg:my-12 px-4 lg:px-0">
        <div className="w-full max-w-[1640px] h-[60px] sm:h-[74px] bg-[#F9B33B] mx-auto mb-8 sm:mb-10 lg:mb-12 flex flex-row items-center">
          <div className="w-[60px] sm:w-[74px] h-full bg-[#222222] text-white text-[40px] sm:text-[50px] text-center mr-3 lg:mr-10">2.</div>
          <h1 className={`${selectedLang === 'it' ? 'text-[18px] sm:text-[20px]' : 'text-[20px] sm:text-[24px]'} lg:text-[50px] font-bold mt-1 lg:mt-0`}>{t('reasons.h')}</h1>
        </div>

        <div className="absolute w-[1000px] h-[1100px] scale-60 -z-10 bottom-0  sm:-right-[400px] lg:-right-[100px] hidden lg:block">
          <img src={vector} alt='vector' loading="lazy" className="w-full h-full object-contain" />
        </div>

        <ul className="w-full max-w-[1641px] mx-auto flex flex-col space-y-4 sm:space-y-6">
          {[...Array(7)].map((_, index) => (
            <li key={index} className="w-full border-[2px] border-[#F9B33B] flex flex-col lg:flex-row items-stretch">
              <div className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-full lg:w-[25%] bg-[#222222] p-4">
                {t(`reasons.ul.${index + 1}.h`)}
              </div>
              <div className="flex-1 text-[18px] sm:text-[22px] lg:text-[30px] px-3 py-4 leading-snug">
                {t(`reasons.ul.${index + 1}.p`)}
              </div>
            </li>
          ))}
        </ul>
        <hr className="mt-8 sm:mt-10 lg:mt-12 w-full max-w-[1641px] mx-auto hidden lg:block" />
      </div>
{/* --------------------- */}
      <div className="w-full max-w-[1641px] mx-auto mb-8 sm:mb-10 lg:mb-12 px-4 lg:px-0">
        <Calculator />
      </div>

      <main className="w-full flex flex-col px-4 lg:px-0">
        <div className="w-full max-w-[1640px] h-[60px] sm:h-[74px] bg-[#F9B33B] mx-auto mb-8 sm:mb-10 lg:mb-12 flex flex-row items-center">
          <div className="w-[60px] sm:w-[74px] h-full bg-[#222222] text-white text-[40px] sm:text-[50px] text-center mr-3 lg:mr-10">3.</div>
          <h2 className={`${selectedLang === 'it' || selectedLang === 'en' ? 'text-[18px] sm:text-[20px]' : 'text-[20px] sm:text-[24px]'} lg:text-[50px] font-bold mt-1 lg:mt-0`}>{t('process.h')}</h2>
        </div>

        <div className="w-full max-w-[1641px] mx-auto mb-8 sm:mb-10 lg:mb-12 relative">
          <div className="absolute top-[300px] sm:top-[347px] left-[180px] sm:left-[220px] w-[1100px] sm:w-[1377px] h-[500px] sm:h-[646px] scale-x-80 hidden lg:block">
          </div>

          <ul className="w-full max-w-[1641px] mx-auto flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
            <li className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row justify-between items-center relative">
              <div className="w-full lg:w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B]">
                <img src={first_step} alt='first step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[1082px] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[44px]">{t('process.ul.1.h')}</h2>
                <ul className="list-disc text-[16px] sm:text-[20px] lg:text-[28px] pl-6 lg:pl-12">
                  <li>{t('process.ul.1.li1')}</li>
                  <li>{t('process.ul.1.li2')}</li>
                  <li>{t('process.ul.1.li3')}</li>
                  <li>{t('process.ul.1.li4')}</li>
                  <li>{t('process.ul.1.li5')}</li>
                </ul>
              </div>
            </li>

            <li className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row-reverse justify-between items-center relative">
              <div className="w-full lg:w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B]">
                <img src={second_step} alt='second step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[1082px] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[44px]">{t('process.ul.2.h')}</h2>
                <ul className="list-disc text-[14px] sm:text-[16px] lg:text-[19px] pl-6 lg:pl-12">
                  <li>{t('process.ul.2.li1')}</li>
                  <li>{t('process.ul.2.li2')}</li>
                  <li>{t('process.ul.2.li3')}</li>
                  <li>{t('process.ul.2.li4')}</li>
                  <li>{t('process.ul.2.li5')}</li>
                  <li>{t('process.ul.2.li6')}</li>
                  <li>{t('process.ul.2.li7')}</li>
                  <li>{t('process.ul.2.li8')}</li>
                  <li>{t('process.ul.2.li9')}</li>
                  <li>{t('process.ul.2.li10')}</li>
                </ul>
              </div>
            </li>

            <li className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row justify-between items-center relative">
              <div className="w-full lg:w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B]">
                <img src={third_step} alt='third step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[1082px] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[44px]">{t('process.ul.3.h')}</h2>
                <ul className="list-disc text-[16px] sm:text-[20px] lg:text-[28px] pl-6 lg:pl-12">
                  <li>{t('process.ul.3.li1')}</li>
                  <li>{t('process.ul.3.li2')}</li>
                  <li>{t('process.ul.3.li3')}</li>
                  <li>{t('process.ul.3.li4')}</li>
                  <li>{t('process.ul.3.li5')}</li>
                  <li>{t('process.ul.3.li6')}</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full max-w-[1641px] mx-auto my-8 sm:my-10 lg:my-12 flex flex-col space-y-6 sm:space-y-8 lg:space-y-10 px-4 lg:px-0">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-bold text-center">{t('process.video_text')}</h2>
          <div className="relative w-full flex flex-col items-center">
            <div className="absolute w-full h-[600px] sm:h-[853px] bottom-0 -z-10 hidden lg:block">
              <img src={vector_about_us_1} alt='vector 1' loading="lazy" className="w-full h-full object-contain" />
            </div>
            <div className="w-full sm:w-[80%] lg:w-[1227px] h-[400px] sm:h-[696px] mx-auto shadow-2xl">
              <iframe className="w-full h-full rounded-[10px]" src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="absolute w-full h-[600px] sm:h-[853px] bottom-0 right-0 -z-10 hidden lg:block">
              <img src={vector_about_us_2} alt='vector 2' loading="lazy" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="w-full text-[18px] sm:text-[22px] lg:text-[30px] text-center lg:text-left">
            <p>{t('process.video_p')}</p>
          </div>
          <div className="w-full h-[50px] sm:h-[67px] flex flex-row items-center mx-auto">
            <div className="h-[2px] sm:h-[3px] lg:h-[1px] w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
            <Link to="/contacts" className="w-[40%] lg:w-[389px] h-full bg-[#F9B33B] text-[20px] sm:text-[24px] lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300">{t('header.button')}</Link>
            <div className="h-[2px] sm:h-[3px] lg:h-[1px] w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
          </div>
        </div>
      </main>

      <Projects />
    </div>
  )
}

export default TurnkeyRenovation