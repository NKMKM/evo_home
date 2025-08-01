import React from 'react'
import LanguageLink from '../../components/LanguageLink'
import { useTranslation } from 'react-i18next'

const RoomRenovationServices = () => {
  const {t} = useTranslation('components/ServicesDropdown')
  return (
    <ul className='text-xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <LanguageLink to={'livingRoom'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.first')}</LanguageLink>
        <LanguageLink to={'bedroom'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.second')}</LanguageLink>
        <LanguageLink to={'childrenRoom'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.third')}</LanguageLink>
        <LanguageLink to={'corridor'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.fourth')}</LanguageLink>
        <LanguageLink to={'kitchen'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.fifth')}</LanguageLink>
        <LanguageLink to={'bathroom'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.sixth')}</LanguageLink>
        <LanguageLink to={'stairs'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.seventh')}</LanguageLink>
    </ul>
  )
}

export default RoomRenovationServices

//made