import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ServisesPhone = () => {
  const {t} = useTranslation('components/ServicesDropdown')
  return (
    <ul className='font-bold text-4xl h-[670px] flex flex-col justify-around my-32 px-10 '>
        <Link to={'/services/turnkey_renovation'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">{t('first_element.h')}</span> </Link>
        <Link to={'/services/room_renovation'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">{t('second_element.h')}</span> </Link>
        <Link to={'/services/commercial_premises'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">{t('third_element.h')}</span> </Link>
        <Link to={'/services/systems'} className='flex flex-row  mb-6 items-center group '> <span className="transition-colors duration-300 z-20 pl-3">{t('fourth_element.h')}</span> </Link>
    </ul>
  )
}

export default ServisesPhone

//made