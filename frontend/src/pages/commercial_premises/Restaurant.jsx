import React from 'react'
import Video from '../../components/Video'
import CommercialPremisesLayoutCollection from '../../components/commercial_premises_components/CommercialPremisesLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/commercial_premises/restaurant/image.png'

import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

// process images imports
import first_step from '../../assets/images/commercial_premises/restaurant/process/first_step.png'
import second_step from '../../assets/images/commercial_premises/restaurant/process/second_step.png'
import third_step from '../../assets/images/commercial_premises/restaurant/process/third_step.png'
import fourth_step from '../../assets/images/commercial_premises/restaurant/process/fourth_step.jpg'
import fifth_step from '../../assets/images/commercial_premises/restaurant/process/fifth_step.jpg'

const Restaurant = () => {
  const { t } = useTranslation('commercial_premises/Restaurant')
  const selectedLang = localStorage.getItem('language') || 'en'

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content="Vuoi rinnovare il tuo bar o il tuo ristorante a Roma? Ristrutturazioni professionali. Qualità garantita. Collaborazione vantaggiosa. Contattaci subito 📞 +39 327 986 6412" />
      </Helmet>

      {/* Header Section */}
      <header className="w-full max-w-[1641px] mx-auto my-6 md:my-10 lg:my-20 flex flex-col items-center">
        {/* Header Title */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
          <img
            src={left_decoration}
            alt="left decoration"
            loading="lazy"
            className="hidden lg:block w-[200px] md:w-[276px] h-auto"
          />
          <h1 className="font-bold text-4xl md:text-5xl lg:text-[57px] text-center mx-4 my-4 md:my-0">
            {t('h')}
          </h1>
          <img
            src={right_decoration}
            alt="right decoration"
            loading="lazy"
            className="hidden lg:block w-[200px] md:w-[276px] h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col space-y-6 md:space-y-10 px-4 sm:px-6 lg:px-0">
          {/* Header Bar */}
          <div className="w-full flex flex-row items-center bg-[#F9B33B]">
            <div className="w-16 h-16 md:w-[74px] md:h-[74px] bg-[#222222] text-white text-3xl md:text-[50px] text-center flex items-center justify-center mr-3 md:mr-10">
              1.
            </div>
            <h2
              className={`font-bold text-xl md:text-3xl lg:text-[50px] ${
                selectedLang === 'it' ? 'mt-2 md:mt-4 lg:mt-0' : 'mt-2 md:mt-4 lg:mt-0'
              }`}
            >
              {t('header.h')}
            </h2>
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-4 text-lg md:text-2xl lg:text-[28px] text-center lg:text-left">
            <p>{t('header.p1')}</p>
            <p>{t('header.p2')}</p>
          </div>

          {/* Image */}
          <div className="w-full h-auto bg-blue-600/20 rounded-[10px] overflow-hidden">
            <img
              src={image}
              alt="restaurant"
              loading="lazy"
              className="w-full h-auto object-cover max-h-[400px] md:max-h-[661px]"
            />
          </div>

          {/* Call to Action */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="hidden md:block h-[1px] w-full md:w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
            <Link
              to="/contacts"
              className="w-full md:w-[389px] h-12 md:h-[67px] bg-[#F9B33B] text-lg md:text-2xl lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300 rounded"
            >
              {t('header.button')}
            </Link>
            <div className="hidden md:block h-[1px] w-full md:w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
          </div>
        </div>
      </header>

      {/* Process Section */}
      <main className="w-full max-w-[1641px] mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-0">
        {/* Process Header */}
        <div className="w-full flex flex-row items-center bg-[#F9B33B] mb-6 md:mb-10">
          <div className="w-16 h-16 md:w-[74px] md:h-[74px] bg-[#222222] text-white text-3xl md:text-[50px] text-center flex items-center justify-center mr-3 md:mr-10">
            2.
          </div>
          <h2 className="font-bold text-xl md:text-3xl lg:text-[50px] mt-2 md:mt-4 lg:mt-0">
            {t('process.h')}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="w-full relative flex flex-col space-y-12 md:space-y-20">

          <ul className="w-full flex flex-col space-y-12 md:space-y-20">
            {/* Step 1 */}
            <li className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="w-full lg:w-[40%] max-w-[667px] border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img
                  src={first_step}
                  alt="first step"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[384px]"
                />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col space-y-4 py-4 px-4 md:px-6">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.1.h')}</h2>
                <p className="text-lg md:text-xl lg:text-[26px]">{t('process.ul.1.p')}</p>
              </div>
            </li>

            {/* Step 2 */}
            <li className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-6">
              <div className="w-full lg:w-[40%] max-w-[667px] border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img
                  src={second_step}
                  alt="second step"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[384px]"
                />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col space-y-4 py-4 px-4 md:px-6">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.2.h')}</h2>
                <p className="text-lg md:text-xl lg:text-[26px]">{t('process.ul.2.p')}</p>
              </div>
            </li>

            {/* Step 3 */}
            <li className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="w-full lg:w-[40%] max-w-[667px] border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img
                  src={third_step}
                  alt="third step"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[384px]"
                />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col space-y-4 py-4 px-4 md:px-6">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.3.h')}</h2>
                <p className="text-lg md:text-xl lg:text-[26px]">{t('process.ul.3.p')}</p>
              </div>
            </li>

            {/* Step 4 */}
            <li className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-6">
              <div className="w-full lg:w-[40%] max-w-[667px] border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img
                  src={fourth_step}
                  alt="fourth step"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[384px]"
                />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col space-y-4 py-4 px-4 md:px-6">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.4.h')}</h2>
                <p className="text-lg md:text-xl lg:text-[26px]">{t('process.ul.4.p')}</p>
              </div>
            </li>

            {/* Step 5 */}
            <li className="w-full flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="w-full lg:w-[40%] max-w-[667px] border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img
                  src={fifth_step}
                  alt="fifth step"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[384px]"
                />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col space-y-4 py-4 px-4 md:px-6">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.5.h')}</h2>
                <p className="text-lg md:text-xl lg:text-[26px]">{t('process.ul.5.p')}</p>
              </div>
            </li>
          </ul>

        </div>

        {/* Video Section */}
        <div className="w-full my-6 md:my-10">
          <Video text={t('process.video_text')} />
        </div>
      </main>

      {/* Commercial Premises Layout Collection */}
      <CommercialPremisesLayoutCollection />
    </div>
  )
}

export default Restaurant