import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import avatar from '../assets/icons/avatar.png'
import golden_star from '../assets/icons/golden_star.png'
import gray_star from '../assets/icons/gray_star.png'
import first_review from '../assets/images/reviews_page_images/first_review.png'
import second_review from '../assets/images/reviews_page_images/second_review.png'
import third_review from '../assets/images/reviews_page_images/third_review.jpg'
import fourth_review from '../assets/images/reviews_page_images/fourth_review.jpg'
import Reviews from '../components/mainpage_components/Reviews'
import reviews_vector_1 from '../assets/images/reviews_vector_1.png'
import reviews_vector_2 from '../assets/images/reviews_vector_2.png'

const ReviewsPage = () => {
  const { t } = useTranslation('Reviews')
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content="Reviews about EVO Home" />
      </Helmet>

      {/* our clients block */}
      <div className="w-full max-w-[1641px] mx-auto mt-10 px-4 sm:px-6 lg:px-0">
        <div className="w-full flex flex-row justify-between items-center mb-8">
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
        </div>

        <div className="w-full flex flex-col text-lg sm:text-xl lg:text-2xl text-center lg:text-left gap-4 lg:gap-6">
          <p>{t('header.p1')}</p>
          <p>
            <span className="font-bold text-[#F9B33B]">{t('header.span1')}</span>
            {t('header.p2')}
          </p>
          <p>
            {t('header.p3')}
            <span className="font-bold text-[#F9B33B]">{t('header.span2')}</span>
            {t('header.p4')}
          </p>
        </div>
      </div>

      {/* reviews section */}
      <div className="relative w-full max-w-[1641px] mx-auto flex flex-col gap-18 lg:gap-16 px-4 sm:px-6 lg:px-0">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-6">
          {t('reviews.h')}
        </h2>

        <div className="absolute right-0 w-full lg:w-[1335px] h-auto hidden lg:block -z-10">
          <img src={reviews_vector_1} alt="vector 1" loading="lazy" className="w-full h-full" />
        </div>

        {/* review 1 */}
        <div className="relative bg-[#d9e7f3] text-black rounded-lg w-full p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex flex-col w-full lg:w-[916px] gap-4 lg:gap-6">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-3 lg:gap-4">
                  <div className="bg-gray-600/20 rounded-full">
                    <img src={avatar} alt="avatar" loading="lazy" className="w-12 h-12 lg:w-16 lg:h-16" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl lg:text-2xl">Annalisa</p>
                    <p className="text-[#222222B2]/70 text-sm lg:text-base">6 месяцев назад</p>
                    <ul className="flex flex-row gap-1 w-[70px] lg:w-[94px] h-auto">
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={gray_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                    </ul>
                  </div>
                </div>
                <p className="text-[#222222B2]/70 text-sm lg:text-base">Google reviews</p>
              </div>
              <div className="flex flex-col gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl">
                <p>{t('reviews.1.p1')}</p>
                <p>{t('reviews.1.p2')}</p>
                <p>{t('reviews.1.p3')}</p>
              </div>
            </div>
            <div className="w-full lg:w-[604px] aspect-[3/2] lg:aspect-[4/3]">
              <img src={first_review} alt="first review image" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[-60px] lg:bottom-[-90px] right-8 lg:right-40 w-4 h-0 border-l-[100px] lg:border-l-[200px] border-l-transparent border-r-[1px] border-r-transparent border-t-[60px] lg:border-t-[90px] border-t-[#d9e7f3]" />
        </div>

        {/* review 2 */}
        <div className="relative bg-[#d9e7f3] text-black rounded-lg w-full p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex flex-col w-full lg:w-[916px] gap-4 lg:gap-6">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-3 lg:gap-4">
                  <div className="bg-gray-600/20 rounded-full">
                    <img src={avatar} alt="avatar" loading="lazy" className="w-12 h-12 lg:w-16 lg:h-16" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl lg:text-2xl">Инна Чикурова</p>
                    <p className="text-[#222222B2]/70 text-sm lg:text-base">4 месяцев назад</p>
                    <ul className="flex flex-row gap-1 w-[70px] lg:w-[94px] h-auto">
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={gray_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                    </ul>
                  </div>
                </div>
                <p className="text-[#222222B2]/70 text-sm lg:text-base">Google reviews</p>
              </div>
              <div className="flex flex-col gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl">
                <p>{t('reviews.2.p1')}</p>
                <p>{t('reviews.2.p2')}</p>
              </div>
            </div>
            <div className="w-full lg:w-[604px] aspect-[3/2] lg:aspect-[4/3]">
              <img src={second_review} alt="second review image" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[-60px] lg:bottom-[-90px] left-8 lg:left-40 w-4 h-0 border-r-[100px] lg:border-r-[200px] border-l-transparent border-l-[1px] border-r-transparent border-t-[60px] lg:border-t-[90px] border-t-[#d9e7f3]" />
        </div>

        {/* review 3 */}
        <div className="relative bg-[#d9e7f3] text-black rounded-lg w-full p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex flex-col w-full lg:w-[916px] gap-4 lg:gap-6">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-3 lg:gap-4">
                  <div className="bg-gray-600/20 rounded-full">
                    <img src={avatar} alt="avatar" loading="lazy" className="w-12 h-12 lg:w-16 lg:h-16" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl lg:text-2xl">Sergiu Fana</p>
                    <p className="text-[#222222B2]/70 text-sm lg:text-base">8 месяцев назад</p>
                    <ul className="flex flex-row gap-1 w-[70px] lg:w-[94px] h-auto">
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={gray_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                    </ul>
                  </div>
                </div>
                <p className="text-[#222222B2]/70 text-sm lg:text-base">Google reviews</p>
              </div>
              <div className="flex flex-col gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl">
                <p>{t('reviews.3.p1')}</p>
                <p>{t('reviews.3.p2')}</p>
              </div>
            </div>
            <div className="w-full lg:w-[604px] aspect-[3/2] lg:aspect-[4/3]">
              <img src={third_review} alt="third review image" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[-60px] lg:bottom-[-90px] right-8 lg:right-40 w-4 h-0 border-l-[100px] lg:border-l-[200px] border-l-transparent border-r-[1px] border-r-transparent border-t-[60px] lg:border-t-[90px] border-t-[#d9e7f3]" />
        </div>

        <div className="absolute left-0 w-full lg:w-[1345px] h-auto bottom-0 lg:bottom-[280px] hidden lg:block -z-10">
          <img src={reviews_vector_2} alt="vector 2" loading="lazy" className="w-full h-full" />
        </div>

        {/* review 4 */}
        <div className="relative bg-[#d9e7f3] text-black rounded-lg w-full p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <div className="flex flex-col w-full lg:w-[916px] gap-4 lg:gap-6">
              <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-3 lg:gap-4">
                  <div className="bg-gray-600/20 rounded-full">
                    <img src={avatar} alt="avatar" loading="lazy" className="w-12 h-12 lg:w-16 lg:h-16" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl lg:text-2xl">Ubaldo Manfroncelli</p>
                    <p className="text-[#222222B2]/70 text-sm lg:text-base">год назад</p>
                    <ul className="flex flex-row gap-1 w-[70px] lg:w-[94px] h-auto">
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={golden_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={gray_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                      <li><img src={gray_star} loading="lazy" className="w-3 h-3 lg:w-4 lg:h-4" /></li>
                    </ul>
                  </div>
                </div>
                <p className="text-[#222222B2]/70 text-sm lg:text-base">Google reviews</p>
              </div>
              <div className="flex flex-col gap-3 lg:gap-4 text-base sm:text-lg lg:text-xl">
                <p>{t('reviews.4.p1')}</p>
              </div>
            </div>
            <div className="w-full lg:w-[604px] aspect-[3/2] lg:aspect-[4/3]">
              <img src={fourth_review} alt="fourth review image" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute bottom-[-60px] lg:bottom-[-90px] left-8 lg:left-40 w-4 h-0 border-r-[100px] lg:border-r-[200px] border-l-transparent border-l-[1px] border-r-transparent border-t-[60px] lg:border-t-[90px] border-t-[#d9e7f3]" />
        </div>

        <div className="w-full text-lg sm:text-xl lg:text-2xl flex flex-col gap-4 lg:gap-6 text-center lg:text-left">
          <p>{t('reviews.p1')}</p>
          <p>{t('reviews.p2')}</p>
          <p>{t('reviews.p3')}</p>
        </div>
      </div>

      {/* review form */}
      <div className="review-form-bg-image bg-center bg-cover w-full mt-12 mb-16">
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

      <Reviews />
    </div>
  )
}

export default ReviewsPage