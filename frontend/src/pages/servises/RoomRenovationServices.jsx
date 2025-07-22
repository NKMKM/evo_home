import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const RoomRenovationServices = () => {
  const {t} = useTranslation('components/ServicesDropdown')
  return (
    <ul className='text-xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <Link to={'/room_renovation/living_room'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.first')}</Link>
        <Link to={'/room_renovation/bedroom'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.second')}</Link>
        <Link to={'/room_renovation/children_room'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.third')}</Link>
        <Link to={'/room_renovation/corridor'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.fourth')}</Link>
        <Link to={'/room_renovation/kitchen'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.fifth')}</Link>
        <Link to={'/room_renovation/bathroom'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.sixth')}</Link>
        <Link to={'/room_renovation/stairs'}  className='hover:text-[#F9B33B] transition duration-200'>{t('second_element.list_of_services.seventh')}</Link>
    </ul>
  )
}

export default RoomRenovationServices

//made