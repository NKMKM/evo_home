import React from 'react'
import { Link } from 'react-router-dom'
import left_decoration from '../assets/images/leftside_black_decoration.png'
import right_decoration from '../assets/images/rightside_black_decoration.png'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

// mosaic photo imports
import image1 from '../assets/images/works/mosaic/image1.png'
import image2 from '../assets/images/works/mosaic/image2.png'
import image3 from '../assets/images/works/mosaic/image3.png'
import image4 from '../assets/images/works/mosaic/image4.png'
import image5 from '../assets/images/works/mosaic/image5.png'
import image6 from '../assets/images/works/mosaic/image6.png'
import image7 from '../assets/images/works/mosaic/image7.png'
import image8 from '../assets/images/works/mosaic/image8.png'

import ImageComparisonSlider from '../components/ImageComparisonSlider'

import before_after_3 from '../assets/images/before_after_3.png'
import before_after_4 from '../assets/images/before_after_4.png'
import toilet_before from '../assets/images/works/comparison/toilet_before.png'
import toilet_after from '../assets/images/works/comparison/toilet_after.png'
import botique_before from '../assets/images/works/comparison/botique_before.png'
import botique_after from '../assets/images/works/comparison/botique_after.png'

// icons imports
import roof_icon from '../assets/icons/works/roof.png'
import bottle_icon from '../assets/icons/works/bottle.png'
import fontain_icon from '../assets/icons/works/fontain.png'
import food_icon from '../assets/icons/works/food.png'
import keys_icon from '../assets/icons/works/keys.png'

// vectors import
import vector_1 from '../assets/images/works/bg_vector1.png'
import vector_2 from '../assets/images/works/bg_vector2.png'

import stages from '../assets/icons/works/stages.png'
import one from '../assets/icons/works/one.png'

import Reviews from '../components/mainpage_components/Reviews'

const OurWorks = () => {
  const { t } = useTranslation('OurWorks')
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{t("title")}</title>
        <meta name="description" content="Works and projects made by EVO Home" />
      </Helmet>
      {/* about us block */}
      <header className="w-full max-w-[1656px] mx-auto mt-10 flex flex-col justify-between px-4 sm:px-6 lg:px-0">
        {/* header */}
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

        {/* info + photos */}
        <div className="w-full max-w-[1641px] mx-auto my-8 lg:my-12">
          {/* text */}
          <div className="flex flex-col w-full text-lg sm:text-xl lg:text-2xl px-4 sm:px-6 lg:px-0 text-center lg:text-left mb-8 lg:mb-12 space-y-4 lg:space-y-6">
            <p>
              {t('header.p1')}
              <span className="text-[#F9B33B]">{t('header.span1')}</span>
              {t('header.p2')}
              <span className="text-[#F9B33B]">{t('header.span2')}</span>
              {t('header.p3')}
            </p>
            <p>{t('header.p4')}</p>
          </div>

          {/* photos */}
          <div className="w-full max-w-[1640px] mx-auto flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* column 1 */}
            <div className="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-6">
              <div className="w-full aspect-[2/1] lg:h-[389px]">
                <img
                  src={image1}
                  alt="image 1"
                  loading="lazy"
                  className="w-full h-full object-cover mosaic-image-scale-hover"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <div className="w-full sm:w-1/2 aspect-square">
                  <img
                    src={image2}
                    alt="image 2"
                    loading="lazy"
                    className="w-full h-full object-cover mosaic-image-scale-hover"
                  />
                </div>
                <div className="w-full sm:w-1/2 aspect-square">
                  <img
                    src={image3}
                    alt="image 3"
                    loading="lazy"
                    className="w-full h-full object-cover mosaic-image-scale-hover"
                  />
                </div>
              </div>
              <div className="w-full aspect-[2/1] lg:h-[389px]">
                <img
                  src={image4}
                  alt="image 4"
                  loading="lazy"
                  className="w-full h-full object-cover mosaic-image-scale-hover"
                />
              </div>
            </div>

            {/* column 2 */}
            <div className="flex flex-col w-full lg:w-1/2 gap-4 lg:gap-6">
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <div className="w-full sm:w-1/2 aspect-[1/2] lg:h-[802px]">
                  <img
                    src={image5}
                    alt="image 5"
                    loading="lazy"
                    className="w-full h-full object-cover mosaic-image-scale-hover"
                  />
                </div>
                <div className="flex flex-col w-full sm:w-1/2 gap-4 lg:gap-6">
                  <div className="w-full aspect-square">
                    <img
                      src={image6}
                      alt="image 6"
                      loading="lazy"
                      className="w-full h-full object-cover mosaic-image-scale-hover"
                    />
                  </div>
                  <div className="w-full aspect-square">
                    <img
                      src={image7}
                      alt="image 7"
                      loading="lazy"
                      className="w-full h-full object-cover mosaic-image-scale-hover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full aspect-[2/1] lg:h-[389px]">
                <img
                  src={image8}
                  alt="image 8"
                  loading="lazy"
                  className="w-full h-full object-cover mosaic-image-scale-hover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1640px] mx-auto flex flex-row items-center justify-center gap-4 lg:gap-6 my-8">
          <div className="h-[2px] w-1/4 lg:w-[625.5px] bg-[#F9B33B]"></div>
          <Link
            to="/contacts"
            className="w-1/2 lg:w-[389px] h-12 lg:h-[67px] bg-[#F9B33B] text-lg lg:text-2xl font-semibold flex items-center justify-center hover:scale-105 transition duration-300"
          >
            {t('comparison.button')}
          </Link>
          <div className="h-[2px] w-1/4 lg:w-[625.5px] bg-[#F9B33B]"></div>
        </div>
      </header>

      {/* before and after block */}
      <main className="w-full max-w-[1656px] mx-auto flex flex-col justify-between px-4 sm:px-6 lg:px-0 my-12 lg:my-20">
        {/* header */}
        <div className="w-full flex flex-row justify-between items-center mb-8">
          <img
            src={left_decoration}
            alt="left decoration"
            loading="lazy"
            className="w-[150px] sm:w-[200px] lg:w-[276px] h-auto hidden lg:block"
          />
          <div className="mx-auto lg:mx-0">
            <h2 className="font-bold text-center text-4xl sm:text-5xl lg:text-6xl">
              {t('comparison.h')}
            </h2>
          </div>
          <img
            src={right_decoration}
            alt="right decoration"
            loading="lazy"
            className="w-[150px] sm:w-[200px] lg:w-[276px] h-auto hidden lg:block"
          />
        </div>

        {/* comparison examples */}
        <div className="w-full max-w-[1641px] flex flex-col gap-8 lg:gap-12">
          {/* 1 */}
          <div className="flex flex-col lg:h-[600px] lg:flex-row gap-4 lg:gap-6 ">
            <div className="w-full lg:w-1/2">
              <ImageComparisonSlider beforeSrc={before_after_3} afterSrc={before_after_4} />
            </div>
            <div className="w-full  lg:w-1/2 flex flex-col justify-around gap-4 lg:gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{t('comparison.li1.name')}</h2>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light italic">
                  {t('comparison.li1.style')}
                </h3>
              </div>
              <div className="w-full text-lg sm:text-xl lg:text-2xl flex flex-col gap-4">
                <p>
                  <span className="font-bold">{t('comparison.li1.span')}</span> {t('comparison.li1.p1')}
                </p>
                <p>
                  <span className="font-bold">{t('comparison.li1.span2')}</span> {t('comparison.li1.p2')}
                </p>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="flex flex-col lg:h-[600px] lg:flex-row-reverse gap-4 lg:gap-6">
            <div className="w-full lg:w-1/2">
              <ImageComparisonSlider beforeSrc={toilet_before} afterSrc={toilet_after} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-around gap-4 lg:gap-6 text-right lg:text-left">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{t('comparison.li2.name')}</h2>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light italic">
                  {t('comparison.li2.style')}
                </h3>
              </div>
              <div className="w-full text-lg sm:text-xl lg:text-2xl flex flex-col gap-4">
                <p>
                  <span className="font-bold">{t('comparison.li1.span')}</span> {t('comparison.li2.p1')}
                </p>
                <p>
                  <span className="font-bold">{t('comparison.li1.span2')}</span> {t('comparison.li2.p2')}
                </p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="flex flex-col lg:h-[600px] lg:flex-row gap-4 lg:gap-6">
            <div className="w-full lg:w-1/2">
              <ImageComparisonSlider beforeSrc={botique_before} afterSrc={botique_after} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-around gap-4 lg:gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{t('comparison.li3.name')}</h2>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light italic">
                  {t('comparison.li3.style')}
                </h3>
              </div>
              <div className="w-full text-lg sm:text-xl lg:text-2xl flex flex-col gap-4">
                <p>
                  <span className="font-bold">{t('comparison.li1.span')}</span> {t('comparison.li3.p1')}
                </p>
                <p>
                  <span className="font-bold">{t('comparison.li1.span2')}</span> {t('comparison.li3.p2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1640px] mx-auto flex flex-row items-center justify-center gap-4 lg:gap-6 my-8">
          <div className="h-[2px] w-1/4 lg:w-[625.5px] bg-[#F9B33B]"></div>
          <Link
            to="/contacts"
            className="w-1/2 lg:w-[389px] h-12 lg:h-[67px] bg-[#F9B33B] text-lg lg:text-2xl font-semibold flex items-center justify-center hover:scale-105 transition duration-300"
          >
            {t('comparison.button')}
          </Link>
          <div className="h-[2px] w-1/4 lg:w-[625.5px] bg-[#F9B33B]"></div>
        </div>
      </main>

      {/* stages of work block */}
      <div className="relative w-full flex flex-col justify-between works-stages-bg-image bg-cover mb-12">
        <div className="w-12 h-12 absolute top-[400px] z-10 hidden lg:block">
          <img src={one} alt="1" loading="lazy" className="w-full h-full" />
        </div>
        <div className="w-12 absolute top-[458px] z-10 hidden lg:block">
          <img src={stages} alt="stages" loading="lazy" className="w-full h-full" />
        </div>

        {/* Stage 1 */}
        <div className="works-first-stage-bg-image bg-cover relative pt-8 pb-12 flex flex-col lg:flex-row bg-blue-300/80 w-full gap-6">
          <div className="absolute hidden lg:block">
            <img src={vector_1} alt="vector 1" loading="lazy" className="w-full h-full" />
          </div>
{/* -------------------------------- */}
          <div className="w-full max-w-[806px] mx-auto px-4 lg:px-8 z-10">
            <h2 className="text-white font-bold flex flex-row items-center justify-center text-3xl sm:text-4xl lg:text-5xl mb-6">
              <img src={roof_icon} alt="roof icon" loading="lazy" className="w-12 h-12 lg:w-16 lg:h-16 mr-4" />
              {t('steps.1.h')}
            </h2>
            <div className="w-full bg-white/85 text-lg sm:text-xl lg:text-2xl flex flex-col gap-4 px-5 py-8">
              <p>{t('steps.1.p1')}</p>
              <p>{t('steps.1.p2')}</p>
            </div>
          </div>
{/* ----------------------- */}
          <div className="w-full max-w-[698px] mx-auto px-4 lg:px-8 z-10">
            <div className="w-full aspect-video border-4 border-[#F9B33B] bg-gray-600 mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1ajIodgloag?si=mE1cbMB4_w6vIztU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center w-full h-12 lg:h-[67px] text-black text-lg lg:text-2xl font-bold text-center bg-[#F9B33B] items-center">
              {t('steps.1.type')}
            </div>
          </div>
        </div>

        {/* Stage 2 */}
        <div className="works-second-stage-bg-image bg-cover relative pt-8 pb-12 flex flex-col lg:flex-row-reverse bg-blue-300/80 w-full gap-6">
          <div className="absolute hidden lg:block">
            <img src={vector_2} alt="vector 2" loading="lazy" className="w-full h-full" />
          </div>
          <div className="w-full max-w-[698px] mx-auto px-4 lg:px-8 z-10">
            <div className="w-full aspect-video border-4 border-[#F9B33B] bg-gray-600 mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/pFrTK5z9B24?si=mE1cbMB4_w6vIztU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center w-full h-12 lg:h-[67px] text-black text-lg lg:text-2xl font-bold text-center bg-[#F9B33B] items-center">
              {t('steps.2.type')}
            </div>
          </div>
          <div className="w-full max-w-[806px] mx-auto px-4 lg:px-8 z-10">
            <h2 className="text-white font-bold flex flex-row items-center justify-center text-3xl sm:text-4xl lg:text-5xl mb-6">
              <img src={bottle_icon} alt="bottle icon" loading="lazy" className="w-12 h-12 lg:w-16 lg:h-16 mr-4" />
              {t('steps.2.h')}
            </h2>
            <div className="w-full bg-white/85 text-lg sm:text-xl lg:text-2xl flex flex-col gap-4 px-5 py-8">
              <p>{t('steps.2.p1')}</p>
              <p>{t('steps.2.p2')}</p>
            </div>
          </div>
        </div>

        {/* Stage 3 */}
        <div className="works-third-stage-bg-image bg-cover relative pt-8 pb-12 flex flex-col lg:flex-row bg-blue-300/80 w-full gap-6">
          <div className="absolute hidden lg:block">
            <img src={vector_1} alt="vector 1" loading="lazy" className="w-full h-full" />
          </div>
          <div className="w-full max-w-[806px] mx-auto px-4 lg:px-8 z-10">
            <h2 className="text-white font-bold flex flex-row items-center justify-center text-3xl sm:text-4xl lg:text-5xl mb-6">
              <img src={fontain_icon} alt="fontain icon" loading="lazy" className="w-12 h-12 lg:w-16 lg:h-16 mr-4" />
              {t('steps.3.h')}
            </h2>
            <div className="w-full bg-white/85 text-lg sm:text-xl lg:text-2xl flex flex-col gap-4 px-5 py-8">
              <p>{t('steps.3.p1')}</p>
              <p>{t('steps.3.p2')}</p>
            </div>
          </div>
          <div className="w-full max-w-[698px] mx-auto px-4 lg:px-8 z-10">
            <div className="w-full aspect-video border-4 border-[#F9B33B] bg-gray-600 mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ejCkepsLR1s?si=mE1cbMB4_w6vIztU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center w-full h-12 lg:h-[67px] text-black text-lg lg:text-2xl font-bold text-center bg-[#F9B33B] items-center">
              {t('steps.3.type')}
            </div>
          </div>
        </div>

        {/* Stage 4 */}
        <div className="works-fourth-stage-bg-image bg-cover relative pt-8 pb-12 flex flex-col lg:flex-row-reverse bg-blue-300/80 w-full gap-6">
          <div className="absolute hidden lg:block">
            <img src={vector_2} alt="vector 2" loading="lazy" className="w-full h-full" />
          </div>
          <div className="w-full max-w-[806px] mx-auto px-4 lg:px-8 z-10">
            <h2 className="text-white font-bold flex flex-row items-center justify-center text-3xl sm:text-4xl lg:text-5xl mb-6">
              <img src={food_icon} alt="food icon" loading="lazy" className="w-12 h-12 lg:w-16 lg:h-16 mr-4" />
              {t('steps.4.h')}
            </h2>
            <div className="w-full bg-white/85 text-lg sm:text-xl lg:text-2xl flex flex-col gap-4 px-5 py-8">
              <p>{t('steps.4.p1')}</p>
              <p>{t('steps.4.p2')}</p>
            </div>
          </div>
          <div className="w-full max-w-[698px] mx-auto px-4 lg:px-8 z-10">
            <div className="w-full aspect-video border-4 border-[#F9B33B] bg-gray-600 mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/l0PAzZ2V3Cs?si=mE1cbMB4_w6vIztU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center w-full h-12 lg:h-[67px] text-black text-lg lg:text-2xl font-bold text-center bg-[#F9B33B] items-center">
              {t('steps.4.type')}
            </div>
          </div>
        </div>

        {/* Stage 5 */}
        <div className="works-third-stage-bg-image bg-cover relative pt-8 pb-12 flex flex-col lg:flex-row bg-blue-300/80 w-full gap-6">
          <div className="absolute hidden lg:block w-full h-full">
            <img src={vector_1} alt="vector 1" loading="lazy" className="w-full h-full overflow-hidden" />
          </div>
          <div className="w-full max-w-[806px] mx-auto px-4 lg:px-8 z-10">
            <h2 className="text-white font-bold flex flex-row items-center justify-center text-3xl sm:text-4xl lg:text-5xl mb-6">
              <img src={keys_icon} alt="keys icon" loading="lazy" className="w-12 h-12 lg:w-16 lg:h-16 mr-4" />
              {t('steps.5.h')}
            </h2>
            <div className="w-full bg-white/85 text-lg sm:text-xl lg:text-2xl flex flex-col gap-4 px-5 py-8">
              <p>{t('steps.5.p1')}</p>
              <p>{t('steps.5.p2')}</p>
            </div>
          </div>
          <div className="w-full max-w-[698px] mx-auto px-4 lg:px-8 z-10">
            <div className="w-full aspect-video border-4 border-[#F9B33B] bg-gray-600 mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/i7l3dHfEA6c?si=mE1cbMB4_w6vIztU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="flex justify-center w-full h-12 lg:h-[67px] text-black text-lg lg:text-2xl font-bold text-center bg-[#F9B33B] items-center">
              {t('steps.5.type')}
            </div>
          </div>
        </div>
      </div>

      {/* reviews */}
      <Reviews />
    </div>
  )
}

export default OurWorks