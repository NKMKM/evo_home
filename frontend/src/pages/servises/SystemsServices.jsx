import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SystemsServices = () => {
  const {t} = useTranslation('components/ServicesDropdown')
  return (
    <ul className='text-xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <Link to={'/systems/electrical_system'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.first')}</Link>
        <Link to={'/systems/gas_system'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.second')}</Link>
        <Link to={'/systems/floor_heating'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.third')}</Link>
        <Link to={'/systems/sewage'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.fourth')}</Link>
        <Link to={'/systems/climate_control'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.fifth')}</Link>
    </ul>
  )
}

export default SystemsServices
//made