import React from 'react'
import LanguageLink from '../../components/LanguageLink'
import { useTranslation } from 'react-i18next'

const CommercialPremisesServices = () => {
  const {t} = useTranslation('components/ServicesDropdown')
  return (
    <ul className='text-xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <LanguageLink to={'businessCenter'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.first')}</LanguageLink>
        <LanguageLink to={'restaurant'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.second')}</LanguageLink>
        <LanguageLink to={'commercialPremisesRenovation'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.third')}</LanguageLink>
        <LanguageLink to={'office'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.fourth')}</LanguageLink>
        <LanguageLink to={'warehouse'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.fifth')}</LanguageLink>
        <LanguageLink to={'fitnessClub'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.sixth')}</LanguageLink>
        <LanguageLink to={'hotel'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.seventh')}</LanguageLink>
    </ul>
  )
}

export default CommercialPremisesServices

//made