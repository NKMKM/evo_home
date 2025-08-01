import React from 'react'
import Video from '../../components/Video'
import LayoutCollection from '../../components/room_renovation_components/LayoutCollection'
import LanguageLink from '../../components/LanguageLink'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/room_renovation/kitchen/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

import first_step from '../../assets/images/room_renovation/kitchen/process/first_step.jpg'
import second_step from '../../assets/images/room_renovation/kitchen/process/second_step.png'
import third_step from '../../assets/images/room_renovation/kitchen/process/third_step.png'
import fourth_step from '../../assets/images/room_renovation/kitchen/process/fourth_step.png'
import fifth_step from '../../assets/images/room_renovation/kitchen/process/fifth_step.jpg'

const Kitchen = () => {
  const { t } = useTranslation('room_renovation/Kitchen')
  const selectedLang = localStorage.getItem('language') || 'en'

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Helmet>

      <header className="w-full max-w-[1641px] mx-auto my-6 md:my-10 lg:my-20 flex flex-col items-center">
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

        <div className="w-full flex flex-col space-y-6 md:space-y-10 px-4 sm:px-6 lg:px-0">
          <div className="w-full flex flex-row items-center bg-[#F9B33B]">
            <div className="w-16 h-16 md:w-[74px] md:h-[74px] bg-[#222222] text-white text-3xl md:text-[50px] text-center flex items-center justify-center mr-3 md:mr-10">
              1.
            </div>
            <h2 className="font-bold text-xl md:text-3xl lg:text-[50px] mt-2 md:mt-4 lg:mt-0">
              {t('header.h')}
            </h2>
          </div>

          <div className="flex flex-col space-y-4 text-lg md:text-2xl lg:text-[28px] text-center lg:text-left">
            <p>{t('header.p1')}</p>
            <p>{t('header.p2')}</p>
          </div>

          <div className="w-full h-auto bg-blue-600/20 rounded-[10px] overflow-hidden">
            <img
              src={image}
              alt="kitchen"
              loading="lazy"
              className="w-full h-auto object-cover max-h-[400px] md:max-h-[661px]"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="hidden md:block h-[1px] w-full md:w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
            <LanguageLink
              to="contacts"
              className="w-full md:w-[389px] h-12 md:h-[67px] bg-[#F9B33B] text-lg md:text-2xl lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300 rounded"
            >
              {t('header.button')}
            </LanguageLink>
            <div className="hidden md:block h-[1px] w-full md:w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1641px] mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-0">
        <div className="w-full flex flex-row items-center bg-[#F9B33B] mb-6 md:mb-10">
          <div className="w-16 h-16 md:w-[74px] md:h-[74px] bg-[#222222] text-white text-3xl md:text-[50px] text-center flex items-center justify-center mr-3 md:mr-10">
            2.
          </div>
          <h2 className="font-bold text-xl md:text-3xl lg:text-[50px] mt-2 md:mt-4 lg:mt-0">
            {t('process.h')}
          </h2>
        </div>


        <div className="w-full relative flex flex-col space-y-12 md:space-y-20">

          <ul className="w-full flex flex-col space-y-12 md:space-y-20">
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

            <li className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-6">
              <div className="w-full lg:w-[40%] max-w-[667px] border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img
                  src={second_step}
                  alt="second step"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[384px]"
                />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col space-y-4 py-4 px-4 md:px-6 lg:px-0">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.2.h')}</h2>
                <p className="text-lg md:text-xl lg:text-[26px]">{t('process.ul.2.p')}</p>
              </div>
            </li>

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

            <li className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-6">
              <div className="w-full lg:w-[40%] max-w-[667px] border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                <img
                  src={fourth_step}
                  alt="fourth step"
                  loading="lazy"
                  className="w-full h-auto object-cover max-h-[300px] md:max-h-[384px]"
                />
              </div>
              <div className="w-full lg:w-[60%] flex flex-col space-y-4 py-4 px-4 md:px-6 lg:px-0">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-[44px]">{t('process.ul.4.h')}</h2>
                <p className="text-lg md:text-xl lg:text-[26px]">{t('process.ul.4.p')}</p>
              </div>
            </li>

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

        <div className="w-full my-6 md:my-10">
          <Video text={t('process.video_text')} />
        </div>
      </main>

      <LayoutCollection />
    </div>
  )
}

export default Kitchen