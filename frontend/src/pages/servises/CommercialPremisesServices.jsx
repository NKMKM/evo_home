import React from 'react'
import { Helmet } from 'react-helmet'
import LanguageLink from '../../components/LanguageLink'
import { PageWrapper } from '../../components/PageWrapper.tsx'
import { useTranslation } from 'react-i18next'

const CommercialPremisesServices = () => {
  const {t} = useTranslation('commercial_premises/CommercialPremises')
  return (
    <PageWrapper pageId="commercial-premises-services">
    <Helmet>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
    </Helmet>
    <h1 className='sr-only'>{t('title')}</h1>

    <ul className='text-xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <LanguageLink to={'businessCenter'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.first')}</LanguageLink>
        <LanguageLink to={'restaurant'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.second')}</LanguageLink>
        <LanguageLink to={'commercialPremisesRenovation'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.third')}</LanguageLink>
        <LanguageLink to={'office'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.fourth')}</LanguageLink>
        <LanguageLink to={'warehouse'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.fifth')}</LanguageLink>
        <LanguageLink to={'fitnessClub'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.sixth')}</LanguageLink>
        <LanguageLink to={'hotel'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.seventh')}</LanguageLink>
    </ul>
  
    </PageWrapper>
)
}

export default CommercialPremisesServices

//made