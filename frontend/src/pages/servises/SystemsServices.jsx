import React from 'react'
import LanguageLink from '../../components/LanguageLink'
import { PageWrapper } from '../../components/PageWrapper.tsx'
import { useTranslation } from 'react-i18next'

const SystemsServices = () => {
  const {t} = useTranslation('components/ServicesDropdown')
  return (
    <PageWrapper pageId="systems-services">

    <ul className='text-xl h-[600px] font-bold justify-between flex flex-col space-y-3 pl-16 my-26  '>
        <LanguageLink to={'electricalSystem'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.first')}</LanguageLink>
        <LanguageLink to={'gasSystem'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.second')}</LanguageLink>
        <LanguageLink to={'floorHeating'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.third')}</LanguageLink>
        <LanguageLink to={'sewage'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.fourth')}</LanguageLink>
        <LanguageLink to={'climateControl'} className='hover:text-[#F9B33B] transition duration-200'>{t('fourth_element.list_of_services.fifth')}</LanguageLink>
    </ul>
  
    </PageWrapper>
)
}

export default SystemsServices
//made