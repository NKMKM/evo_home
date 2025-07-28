import React from 'react'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import Video from '../../components/Video'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/turnkey_renovation/studio/image.jpg'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/room_renovation/arrow_2.png'

import first_step from '../../assets/images/turnkey_renovation/studio/process/first_step.png'
import second_step from '../../assets/images/turnkey_renovation/studio/process/second_step.png'
import third_step from '../../assets/images/turnkey_renovation/studio/process/third_step.png'
import fourth_step from '../../assets/images/turnkey_renovation/studio/process/fourth_step.jpg'
import fifth_step from '../../assets/images/turnkey_renovation/studio/process/fifth_step.jpg'
import sixth_step from '../../assets/images/turnkey_renovation/studio/process/sixth_step.jpg'

const Studio = () => {
  const { t } = useTranslation('turnkey_renovation/Studio')
  const selectedLang = localStorage.getItem('language') || 'en'
  return (
    <div className="w-full min-h-screen">
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content="🏡 Cerchi una ristrutturazione di monolocali a Roma? Affidati a noi per qualità e professionalità. Contattaci per iniziare 📞 +39 327 986 6412" />
      </Helmet>

      <header className="w-full max-w-[1641px] mx-auto my-6 sm:my-8 lg:my-10 flex flex-col justify-between px-4 lg:px-0">
        <div className="w-full flex flex-row justify-between items-center mb-6 sm:mb-8 lg:mb-10">
          <img src={left_decoration} alt='left decoration' loading="lazy" className="w-[200px] h-[60px] hidden lg:block" />
          <h1 className="font-bold text-center text-[32px] sm:text-[40px] lg:text-[57px] mx-auto">{t('h')}</h1>
          <img src={right_decoration} alt='right decoration' loading="lazy" className="w-[200px] h-[60px] hidden lg:block" />
        </div>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="w-full h-[60px] sm:h-[74px] bg-[#F9B33B] flex flex-row items-center">
            <div className="w-[60px] sm:w-[74px] h-full bg-[#222222] text-white text-[40px] sm:text-[50px] text-center mr-3 lg:mr-10">1.</div>
            <h2 className={`${selectedLang === 'it' ? 'text-[18px] sm:text-[20px]' : 'text-[20px] sm:text-[24px]'} lg:text-[50px] font-bold mt-1 lg:mt-0`}>{t('header.h')}</h2>
          </div>

          <div className="text-[18px] sm:text-[22px] lg:text-[28px] text-center lg:text-left flex flex-col space-y-4">
            <p>{t('header.p1')}</p>
            <p>{t('header.p2')}</p>
            <p>{t('header.p3')}</p>
          </div>

          <div className="w-full bg-blue-600/20 rounded-[10px] overflow-hidden">
            <img src={image} alt='studio' loading="lazy" className="w-full h-auto object-cover" />
          </div>

          <div className="w-full h-[50px] sm:h-[67px] flex flex-row items-center mx-auto">
            <div className="h-[2px] sm:h-[3px] lg:h-[1px] w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
            <Link to="/contacts" className="w-[40%] lg:w-[389px] h-full bg-[#F9B33B] text-[20px] sm:text-[24px] lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300">{t('header.button')}</Link>
            <div className="h-[2px] sm:h-[3px] lg:h-[1px] w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
          </div>
        </div>
      </header>

      <main className="w-full flex flex-col px-4 lg:px-0">
        <div className="w-full max-w-[1640px] h-[60px] sm:h-[74px] bg-[#F9B33B] mx-auto mb-8 sm:mb-10 lg:mb-12 flex flex-row items-center">
          <div className="w-[60px] sm:w-[74px] h-full bg-[#222222] text-white text-[40px] sm:text-[50px] text-center mr-3 lg:mr-10">2.</div>
          <h2 className={`${selectedLang === 'it' ? 'text-[18px] sm:text-[20px]' : 'text-[20px] sm:text-[24px]'} lg:text-[50px] font-bold mt-1 lg:mt-0`}>{t('process.h')}</h2>
        </div>

        <p className="w-full max-w-[1640px] mx-auto text-[20px] sm:text-[24px] lg:text-[32px] text-center lg:text-left mb-8 sm:mb-10 lg:mb-12">{t('process.p')}</p>

        <div className="w-full max-w-[1641px] mx-auto mb-8 sm:mb-10 lg:mb-12 relative">

          <ul className="w-full max-w-[1641px] mx-auto flex flex-col space-y-8 sm:space-y-10 lg:space-y-12">
            <li className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B]">
                <img src={first_step} alt='first step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[1082px] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[46px]">{t('process.ul.1.h')}</h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[27px] p-light">{t('process.ul.1.p')}</p>
              </div>
            </li>

            <li className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row-reverse justify-between items-center">
              <div className="w-full lg:w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B]">
                <img src={second_step} alt='second step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[1082px] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[46px]">{t('process.ul.2.h')}</h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[27px] p-light">{t('process.ul.2.p')}</p>
              </div>
            </li>

            <li className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B]">
                <img src={third_step} alt='third step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[1082px] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[46px]">{t('process.ul.3.h')}</h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[27px] p-light">{t('process.ul.3.p')}</p>
              </div>
            </li>

            <li className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row-reverse justify-between items-center">
              <div className="w-full lg:w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B]">
                <img src={fourth_step} alt='fourth step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[1082px] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[46px]">{t('process.ul.4.h')}</h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[27px] p-light">{t('process.ul.4.p')}</p>
              </div>
            </li>

            <li className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row justify-between items-center">
              <div className="w-full lg:w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B]">
                <img src={fifth_step} alt='fifth step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[1082px] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[46px]">{t('process.ul.5.h')}</h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[27px] p-light">{t('process.ul.5.p')}</p>
              </div>
            </li>

            <li className="w-full sm:w-[90%] lg:w-full mx-auto flex flex-col lg:flex-row-reverse justify-between items-center">
              <div className="w-full lg:w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B]">
                <img src={sixth_step} alt='sixth step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[1082px] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-8">
                <h2 className="font-bold text-[24px] sm:text-[28px] lg:text-[46px]">{t('process.ul.6.h')}</h2>
                <p className="text-[16px] sm:text-[20px] lg:text-[27px] p-light">{t('process.ul.6.p')}</p>
              </div>
            </li>
          </ul>

        </div>

        <div className="mb-8 sm:mb-10 lg:mb-12 px-4 lg:px-0">
          <Video text={t('process.video_text')} />
        </div>
      </main>

      <LayoutCollection />
    </div>
  )
}

export default Studio