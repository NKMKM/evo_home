import React from 'react'
import LanguageLink from '../../components/LanguageLink'
import { PageWrapper } from '../../components/PageWrapper.tsx'
import { useTranslation } from 'react-i18next'

const ServisesPhone = () => {
  const {t} = useTranslation('components/ServicesDropdown')
  return (
    <PageWrapper pageId="services">

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