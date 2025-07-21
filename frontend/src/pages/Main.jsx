import React from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

import HomeStart from '../components/mainpage_components/HomeStart'
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
            <meta name="description" content="Home page with all info about EVO Home" />
        </Helmet>
        <HomeStart/>
        <Advantages/>
        <Calculator/>
        <Services/>
        <AboutCompanyHome/>
        <Projects/>
        <Guarantees/>
        <Reviews/>
    </>
  )
}
//made
export default Main