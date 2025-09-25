import React from 'react'
import { Helmet } from 'react-helmet'
import LanguageLink from '../../components/LanguageLink'
import { PageWrapper } from '../../components/PageWrapper.tsx'
import { useTranslation } from 'react-i18next'

const TurnkeyRenovationServices = () => {
  const {t} = useTranslation('turnkey_renovation/TurnkeyRenovation')
  return (
    <PageWrapper pageId="turnkey-renovation-services">
    <Helmet>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
    </Helmet>
    <h1 className='sr-only'>{t('title')}</h1>

    <ul className='text-xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <LanguageLink to={'designerRenovation'} className='hover:text-[#F9B33B] transition duration-200'>{t('first_element.list_of_services.first')}</LanguageLink>
        <LanguageLink to={'exclusiveRenovation'} className='hover:text-[#F9B33B] transition duration-200'>{t('first_element.list_of_services.second')}</LanguageLink>
        <LanguageLink to={'studio'} className='hover:text-[#F9B33B] transition duration-200'>{t('first_element.list_of_services.third')}</LanguageLink>
        <LanguageLink to={'tworoomApartment'} className='hover:text-[#F9B33B] transition duration-200'>{t('first_element.list_of_services.fourth')}</LanguageLink>
        <LanguageLink to={'threeroomApartment'} className='hover:text-[#F9B33B] transition duration-200'>{t('first_element.list_of_services.fifth')}</LanguageLink>
        <LanguageLink to={'fourroomApartment'} className='hover:text-[#F9B33B] transition duration-200'>{t('first_element.list_of_services.sixth')}</LanguageLink>
        <LanguageLink to={'twostoryApartment'} className='hover:text-[#F9B33B] transition duration-200'>{t('first_element.list_of_services.seventh')}</LanguageLink>
    </ul>
  
    </PageWrapper>
)
}

export default TurnkeyRenovationServices

//made
