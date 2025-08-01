import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import LanguageLink from '../../components/LanguageLink'
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/business_center/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/commercial_premises/business_center/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/business_center/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/business_center/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/business_center/process/fourth_step.png'
import fifth_step from '../../assets/images/commercial_premises/business_center/process/fifth_step.png'

const BusinessCenter = () => {
  const {t} = useTranslation('commercial_premises/BusinessCenter')
  const selectedLang = localStorage.getItem('language') || 'en';

  return (
    <div className="w-full max-w-[1641px] mx-auto px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Helmet>

      {/* Header Section */}
      <header className="my-6 sm:my-10 lg:my-16 flex flex-col gap-6 sm:gap-8 lg:gap-12">
        {/* Header Title */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <img 
            src={left_decoration} 
            alt='left decoration' 
            loading="lazy" 
            className="hidden lg:block w-[120px] sm:w-[180px] lg:w-[276px] h-auto" 
          />
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[57px] text-center">
            {t('h')}
          </h1>
          <img 
            src={right_decoration} 
            alt='right decoration' 
            loading="lazy" 
            className="hidden lg:block w-[120px] sm:w-[180px] lg:w-[276px] h-auto" 
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Subheader */}
          <div className="w-full flex flex-row items-center bg-[#F9B33B] h-[50px] sm:h-[60px] lg:h-[74px]">
            <div className="w-[50px] sm:w-[60px] lg:w-[74px] h-full bg-[#222222] text-white text-2xl sm:text-3xl lg:text-[50px] flex items-center justify-center mr-2 sm:mr-4 lg:mr-10">
              1.
            </div>
            <h2 className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-[50px] ${selectedLang === 'it' ? 'mt-1' : 'mt-1 sm:mt-2 lg:mt-0'}`}>
              {t('header.h')}
            </h2>
          </div>

          {/* Text */}
          <div className="text-base sm:text-lg md:text-xl lg:text-[28px] text-center lg:text-left space-y-4">
            <p>{t('header.p1')}</p>
            <p>{t('header.p2')}</p>
          </div>

          {/* Image */}
          <div className="w-full rounded-[10px] overflow-hidden bg-blue-600/20">
            <img 
              src={image} 
              alt='business center' 
              loading="lazy" 
              className="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-[661px] object-cover" 
            />
          </div>

          {/* Button */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="hidden sm:block h-[2px] flex-1 bg-[#F9B33B]"></div>
            <LanguageLink 
              to="contacts" 
              className="w-full sm:w-auto px-6 py-3 bg-[#F9B33B] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center hover:scale-105 transition duration-300 rounded-[10px]"
            >
              {t('header.button')}
            </LanguageLink>
            <div className="hidden sm:block h-[2px] flex-1 bg-[#F9B33B]"></div>
          </div>
        </div>
      </header>

      {/* Process Section */}
      <main className="flex flex-col gap-6 sm:gap-10 lg:gap-16">
        {/* Header */}
        <div className="w-full flex flex-row items-center bg-[#F9B33B] h-[50px] sm:h-[60px] lg:h-[74px]">
          <div className="w-[50px] sm:w-[60px] lg:w-[74px] h-full bg-[#222222] text-white text-2xl sm:text-3xl lg:text-[50px] flex items-center justify-center mr-2 sm:mr-4 lg:mr-10">
            2.
          </div>
          <h2 className={`font-bold text-lg sm:text-xl md:text-2xl lg:text-[50px] ${selectedLang === 'it' ? 'mt-1' : 'mt-1 sm:mt-2 lg:mt-0'}`}>
            {t('process.h')}
          </h2>
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-[32px] text-center lg:text-left">
          {t('process.p')}
        </p>

        {/* List of Steps */}
        <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16">
          <ul className="flex flex-col gap-8 sm:gap-12 lg:gap-16 w-full">
            {/* Step 1 */}
            <li className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
              <div className="w-full lg:w-[40%] border-[3px] sm:border-[4px] lg:border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img src={first_step} alt='first step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col gap-4 sm:gap-6 py-4 px-0 sm:px-4">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.1.h')}</h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-[26px]">{t('process.ul.1.p')}</p>
              </div>
            </li>

            {/* Step 2 */}
            <li className="flex flex-col lg:flex-row-reverse gap-4 sm:gap-6 lg:gap-8">
              <div className="w-full lg:w-[40%] border-[3px] sm:border-[4px] lg:border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img src={second_step} alt='second step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col gap-4 sm:gap-6 py-4 px-0 sm:px-4">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.2.h')}</h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-[26px]">{t('process.ul.2.p')}</p>
              </div>
            </li>

            {/* Step 3 */}
            <li className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
              <div className="w-full lg:w-[40%] border-[3px] sm:border-[4px] lg:border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img src={third_step} alt='third step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col gap-4 sm:gap-6 py-4 px-0 sm:px-4">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.3.h')}</h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-[26px]">{t('process.ul.3.p')}</p>
              </div>
            </li>

            {/* Step 4 */}
            <li className="flex flex-col lg:flex-row-reverse gap-4 sm:gap-6 lg:gap-8">
              <div className="w-full lg:w-[40%] border-[3px] sm:border-[4px] lg:border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img src={fourth_step} alt='fourth step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col gap-4 sm:gap-6 py-4 px-0 sm:px-4">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.4.h')}</h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-[26px]">{t('process.ul.4.p')}</p>
              </div>
            </li>

            {/* Step 5 */}
            <li className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
              <div className="w-full lg:w-[40%] border-[3px] sm:border-[4px] lg:border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img src={fifth_step} alt='fifth step' loading="lazy" className="w-full h-auto object-cover" />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col gap-4 sm:gap-6 py-4 px-0 sm:px-4">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.5.h')}</h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-[26px]">{t('process.ul.5.p')}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="my-6 sm:my-10">
          <Video text={t('process.video_text')} />
        </div>
      </main>

      <CommercialPremisesLayoutCollection />
    </div>
  )
}

export default BusinessCenter