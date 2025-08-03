import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import HomeStart from '../components/mainpage_components/HomeStart'
import Design from '../components/mainpage_components/Design'
import Discount from '../components/mainpage_components/Discount'
import Architect from '../components/mainpage_components/Architect'
import ImageComparisonSlider from '../components/ImageComparisonSlider'

import Advantages from '../components/mainpage_components/Advantages'
import Calculator from '../components/mainpage_components/Calculator'
import Services from '../components/mainpage_components/Services'
import AboutCompanyHome from '../components/mainpage_components/AboutCompanyHome'
import Projects from '../components/mainpage_components/Projects'
import Guarantees from '../components/mainpage_components/Guarantees'
import Reviews from '../components/mainpage_components/Reviews'


const Main = () => {
  const {t} = useTranslation('home/HomeStart')
  return (
    <> 
        <Helmet>
            <title>{t('title')}</title>
            <meta name="description" content="Hai bisogno di ristrutturare casa a Roma? Rivolgiti a professionisti del settore. EVO HOME è l'Impresa edile più affidabile per la ristrutturazione chiavi in mano di case, appartamenti, locali commerciali e soluzioni indipendenti." />
        </Helmet>
        <h1 className="sr-only">{t('title')}</h1>
        <HomeStart/> 
        <Projects/>
        <Advantages/>
        <Calculator/>
        <Services/>
        <AboutCompanyHome/>
        <Guarantees/>
        <Reviews/>
    </>
  )
}
//made
export default Main