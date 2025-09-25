import React from 'react'
import { Helmet } from 'react-helmet'
import LanguageLink from '../../components/LanguageLink'
import { PageWrapper } from '../../components/PageWrapper.tsx'
import { useTranslation } from 'react-i18next'

const ServisesPhone = () => {
  const {t} = useTranslation('home/Services')
  return (
    <PageWrapper pageId="services">
    <Helmet>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
    </Helmet>
    <h1 className='sr-only'>{t('title')}</h1>

    <ul className='font-bold text-xl  h-[670px] flex flex-col justify-around my-32 px-10 '>
        <LanguageLink to={'turnkeyRenovationServices'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">{t('first_element.h')}</span> </LanguageLink>
        <LanguageLink to={'roomRenovationServices'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">{t('second_element.h')}</span> </LanguageLink>
        <LanguageLink to={'commercialPremisesServices'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">{t('third_element.h')}</span> </LanguageLink>
        <LanguageLink to={'systemsServices'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">{t('fourth_element.h')}</span> </LanguageLink>
    </ul>
  
    </PageWrapper>
)
}

export default ServisesPhone