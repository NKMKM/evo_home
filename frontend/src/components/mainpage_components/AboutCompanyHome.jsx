import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ImageComparisonSlider from '../ImageComparisonSlider'
import left_decoration from '../../assets/images/leftside_black_decoration.png'
import right_decoration from '../../assets/images/rightside_black_decoration.png'
import before_after_3 from '../../assets/images/before_after_3.png'
import before_after_4 from '../../assets/images/before_after_4.png'

const AboutCompanyHome = () => {
  const { t } = useTranslation("home/AboutCompany")
  return (
    <div className="w-full max-w-[1641px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col gap-6 sm:gap-8 lg:gap-10">
      {/* Заголовок с декорациями */}
      <div className="flex flex-row items-center justify-center w-full">
        <img src={left_decoration} alt="left decoration" className="w-[276px] h-auto hidden lg:block" loading="lazy" />
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[70px] text-center px-4">{t("h")}</h2>
        <img src={right_decoration} alt="right decoration" className="w-[276px] h-auto hidden lg:block" loading="lazy" />
      </div>

      {/* Контент */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-between w-full">
        {/* Слайдер сравнения изображений */}
        <div className="w-full lg:w-1/2">
          <ImageComparisonSlider
            beforeSrc={before_after_3}
            afterSrc={before_after_4}
          />
        </div>

        {/* Текст */}
        <div className="flex flex-col w-full lg:w-1/2 py-4 text-center lg:text-start gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:pl-8">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            <span className="text-[#F9B33B]">{t('text.span')}</span> {t('text.p1')}
          </p>
          <ul className="list-disc text-base sm:text-lg md:text-xl lg:text-2xl ml-5">
            <li>{t('ul.li1')}</li>
            <li>{t('ul.li2')}</li>
            <li>{t('ul.li3')}</li>
            <li>{t('ul.li4')}</li>
          </ul>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[31px] font-bold">
            <span className="text-[#F9B33B]">{t('text.span')}</span> {t('text.p2')}
          </h2>
        </div>
      </div>

      {/* Кнопка */}
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full">
        <div className="h-[1px] w-full sm:w-1/3 lg:w-[625.5px] bg-[#F9B33B] hidden lg:block"></div>
        <Link to="/about_us" className="w-full sm:w-[389px] h-12 sm:h-[67px] flex items-center justify-center bg-[#F9B33B] text-lg sm:text-xl lg:text-[30px] font-semibold rounded">
          {t('button')}
        </Link>
        <div className="h-[1px] w-full sm:w-1/3 lg:w-[625.5px] bg-[#F9B33B] hidden lg:block"></div>
      </div>
    </div>
  )
}

export default AboutCompanyHome