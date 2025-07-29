import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import first_image from '../../assets/images/systems/electrical_systems/grid_images/first_image.jpg'
import second_image from '../../assets/images/systems/electrical_systems/grid_images/second_image.jpg'
import third_image from '../../assets/images/systems/electrical_systems/grid_images/third_image.jpg'
import fourth_image from '../../assets/images/systems/electrical_systems/grid_images/fourth_image.jpg'
import fifth_image from '../../assets/images/systems/electrical_systems/grid_images/fifth_image.jpg'
import sixth_image from '../../assets/images/systems/electrical_systems/grid_images/sixth_image.jpg'

import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'

const CommercialPremisesProjects = () => {
  const { t } = useTranslation('commercial_premises/CommercialPremisesProjects')
  const selectedLang = localStorage.getItem('language') || 'en'

  return (
    <div className="sm:w-full lg:w-[1650px]  max-w-[1641px] mx-auto px-4 py-10">
      {/* Header Section */}
      <header className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <img
          src={left_decoration}
          alt="left decoration"
          loading="lazy"
          className="w-[276px] h-[83px] hidden lg:block"
        />
        <h2
          className={`font-bold text-center ${
            selectedLang === 'it' || selectedLang === 'ru'
              ? 'text-4xl sm:text-5xl lg:text-[70px]'
              : 'text-4xl sm:text-5xl lg:text-[70px]'
          }`}
        >
          {t('h')}
        </h2>
        <img
          src={right_decoration}
          alt="right decoration"
          loading="lazy"
          className="w-[276px] h-[83px] hidden lg:block"
        />
      </header>

      {/* Subheading */}
      <p className="text-center text-lg sm:text-2xl lg:text-[32px] italic mb-10 font-light max-w-[1410px] mx-auto">
        {t('p')}
      </p>

      {/* Grid Section */}
      <main className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-y-8 lg:gap-6 mb-12">
        {[
          { img: first_image, text: t('p1') },
          { img: second_image, text: t('p2') },
          { img: third_image, text: t('p3') },
          { img: fourth_image, text: t('p4') },
          { img: fifth_image, text: t('p5') },
          { img: sixth_image, text: t('p6') },
        ].map((item, index) => (
          <div
            key={index}
            className="relative w-full max-w-[528px] h-[407px] mx-auto group rounded-[10px] overflow-hidden"
          >
            <img
              src={item.img}
              alt={`project ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover group-hover:brightness-50 transition duration-300"
            />
            <div className="absolute bottom-5 left-0 right-0 text-white bg-gradient-to-r from-[#7393c7] to-[#7393c7]/0 p-4">
              <h2 className="text-xl sm:text-2xl lg:text-[32px]">{item.text}</h2>
            </div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <Link
                to="/our_works"
                className="bg-[#F9B33B] text-black font-bold text-lg sm:text-xl lg:text-[30px] flex justify-center items-center rounded"
                style={{ width: '251px', height: '67px' }}
              >
                {t('button')}
              </Link>
            </div>
          </div>
        ))}
      </main>

      {/* Bottom Button with Lines */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="hidden lg:block h-[1px] w-[625.5px] bg-[#F9B33B]"></div>
        <Link
          to="/our_works"
          className="w-[250px] sm:w-[320px] h-[60px] bg-[#F9B33B] text-[22px] sm:text-[26px] font-semibold flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          {t('button')}
        </Link>
        <div className="hidden lg:block h-[1px] w-[625.5px] bg-[#F9B33B]"></div>
      </div>
    </div>
  )
}

export default CommercialPremisesProjects
