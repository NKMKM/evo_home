import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CommercialPremisesServices = () => {
  const {t} = useTranslation('components/ServicesDropdown')
  return (
    <ul className='text-3xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <Link to={'/commercial_premises/business_center'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.first')}</Link>
        <Link to={'/commercial_premises/restaurant'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.second')}</Link>
        <Link to={'/commercial_premises/commercial_premises_renovation'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.third')}</Link>
        <Link to={'/commercial_premises/office'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.fourth')}</Link>
        <Link to={'/commercial_premises/warehouse'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.fifth')}</Link>
        <Link to={'/commercial_premises/fitness_club'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.sixth')}</Link>
        <Link to={'/commercial_premises/hotel'} className='hover:text-[#F9B33B] transition duration-200'>{t('third_element.list_of_services.seventh')}</Link>
    </ul>
  )
}

export default CommercialPremisesServices