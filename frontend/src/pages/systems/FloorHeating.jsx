import React from 'react'
import Video from '../../components/Video'
import SystemLayoutCollection from '../../components/systems_components/SystemLayoutCollection'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import image from '../../assets/images/systems/floor_heating/image.png'
import arrow_1 from '../../assets/images/room_renovation/room_renovation/arrow_1.png'
import arrow_2 from '../../assets/images/room_renovation/living_room/arrow_2.png'

import first_step from '../../assets/images/systems/floor_heating/process/first_step.png'
import second_step from '../../assets/images/systems/floor_heating/process/second_step.png'
import third_step from '../../assets/images/systems/floor_heating/process/third_step.png'
import fourth_step from '../../assets/images/systems/floor_heating/process/fourth_step.png'
import fifth_step from '../../assets/images/systems/floor_heating/process/fifth_step.png'

const FloorHeating = () => {
  const { t } = useTranslation('systems/FloorHeating')
  const selectedLang = localStorage.getItem('language') || 'en'

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content="Floor heating systems made by EVO Home" />
      </Helmet>

      <header className="w-full max-w-[1641px] mx-auto my-6 md:my-10 lg:my-20 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6 md:mb-10">
          <img
            src={left_decoration}
            alt="left decoration"
            loading="lazy"
            className="hidden lg:block w-[150px] md:w-[200px] lg:w-[276px] h-auto"
          />
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[57px] text-center mx-4 my-4 md:my-0 break-words">
            {t('h')}
          </h1>
          <img
            src={right_decoration}
            alt="right decoration"
            loading="lazy"
            className="hidden lg:block w-[150px] md:w-[200px] lg:w-[276px] h-auto"
          />
        </div>

        <div className="w-full flex flex-col space-y-6 md:space-y-10 px-4 sm:px-6 lg:px-0">
          <div className="w-full flex flex-row items-center bg-[#F9B33B]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[74px] md:h-[74px] bg-[#222222] text-white text-2xl sm:text-3xl md:text-[50px] text-center flex items-center justify-center mr-3 md:mr-10 shrink-0">
              1.
            </div>
            <h2 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-[50px] mt-2 md:mt-4 lg:mt-0 break-words">
              {t('header.h')}
            </h2>
          </div>

          <div className="w-full flex flex-col space-y-4 text-base sm:text-lg md:text-2xl lg:text-[28px] text-center lg:text-left">
            <p className="break-words">{t('header.p1')}</p>
            <p className="break-words">{t('header.p2')}</p>
          </div>

          <div className="w-full h-auto bg-blue-600/20 rounded-[10px] overflow-hidden">
            <img
              src={image}
              alt="floor heating"
              loading="lazy"
              className="w-full h-auto object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[661px]"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="hidden md:block h-[1px] w-full md:w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
            <Link
              to="/contacts"
              className="w-full sm:w-[300px] md:w-[389px] h-12 md:h-[67px] bg-[#F9B33B] text-base sm:text-lg md:text-2xl lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300 rounded"
            >
              {t('header.button')}
            </Link>
            <div className="hidden md:block h-[1px] w-full md:w-[30%] lg:w-[625.5px] bg-[#F9B33B]"></div>
          </div>
        </div>
      </header>

      <main className="w-full max-w-[1641px] mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-0">
        <div className="w-full flex flex-row items-center bg-[#F9B33B] mb-6 md:mb-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-[74px] md:h-[74px] bg-[#222222] text-white text-2xl sm:text-3xl md:text-[50px] text-center flex items-center justify-center mr-3 md:mr-10 shrink-0">
            2.
          </div>
          <h2 className="font-bold text-lg sm:text-xl md:text-3xl lg:text-[50px] mt-2 md:mt-4 lg:mt-0 break-words">
            {t('process.h')}
          </h2>
        </div>

        <p className="w-full text-base sm:text-lg md:text-2xl lg:text-[32px] text-center lg:text-left mb-6 md:mb-10 break-words">
          {t('process.p')}
        </p>

        <div className="w-full relative flex flex-col space-y-12 md:space-y-20">
          <div className="hidden lg:block absolute top-[150px] left-[10%] w-[80%] max-w-[1177px] h-auto">
            <img src={arrow_1} alt="arrow 1" loading="lazy" className="w-full h-auto" />
          </div>

          <ul className="w-full flex flex-col space-y-12 md:space-y-20">
            {[
              { step: 1, img: first_step },
              { step: 2, img: second_step, reverse: true },
              { step: 3, img: third_step },
              { step: 4, img: fourth_step, reverse: true },
              { step: 5, img: fifth_step },
            ].map(({ step, img, reverse }) => (
              <li
                key={step}
                className={`w-full flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between items-center gap-4 lg:gap-6`}
              >
                <div className="w-full lg:w-[40%] max-w-[600px] lg:max-w-[667px] border-[3px] sm:border-[5px] border-[#F9B33B] rounded-[10px] overflow-hidden">
                  <img
                    src={img}
                    alt={`step ${step}`}
                    loading="lazy"
                    className="w-full h-auto object-cover max-h-[250px] sm:max-h-[300px] md:max-h-[384px]"
                  />
                </div>
                <div className="w-full lg:w-[60%] flex flex-col space-y-4 py-4 px-4 sm:px-6 lg:px-0">
                  <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[44px] break-words">
                    {t(`process.ul.${step}.h`)}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-[26px] break-words">
                    {t(`process.ul.${step}.p`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block absolute bottom-[10%] w-full max-w-[1604px] h-auto">
            <img src={arrow_2} alt="arrow 2" loading="lazy" className="w-full h-auto" />
          </div>
        </div>

        <div className="w-full my-6 md:my-10">
          <Video text={t('process.video_text')} />
        </div>
      </main>

      <SystemLayoutCollection />
    </div>
  )
}

export default FloorHeating