import React from 'react'
import { useTranslation } from 'react-i18next'
import vector from '../assets/images/room_renovation/room_renovation/vector.png'

const Reasons = () => {
  const {t} = useTranslation('components/Reasons')
  const selectedLang = localStorage.getItem('language') || 'en';
  return (
    <div className='relative w-full h-auto my-10 px-4'>     
        <header className='w-full max-w-[1640px] mx-auto h-auto bg-[#F9B33B] flex flex-row items-center mb-10'>
            <div className='w-[50px] sm:w-[60px] lg:w-[74px] h-[50px] sm:h-[60px] lg:h-[74px] bg-[#222222] text-white text-[30px] sm:text-[40px] lg:text-[50px] text-center mr-4 sm:mr-7 lg:mr-10 flex items-center justify-center'>3.</div>
            <h1 className={`text-[20px] sm:text-[26px] lg:text-[50px] font-bold ${selectedLang === 'it' ? 'text-[20px] sm:text-[25px]' : ''} ${selectedLang === 'en' ? 'mt-2 sm:mt-4 lg:mt-0' : ''}`}>{t('h')}</h1>
        </header>

        <div className='hidden lg:block absolute w-full h-[600px] sm:h-[800px] lg:h-[1418px] -z-10 bottom-0 right-0'>
            <img src={vector} alt='vector' loading="lazy" className='w-full h-full object-cover'/>
        </div>

        <ul className='w-full max-w-[1640px] h-auto flex flex-col gap-4 mx-auto'>
            {[...Array(7)].map((_, index) => (
                <li key={index} className="w-full border-[2px] border-[#F9B33B] flex flex-col lg:flex-row items-stretch">
                    <div className="text-[18px] sm:text-[20px] lg:text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-full lg:w-[25%] bg-[#222222] py-3 lg:py-0">
                        {t(`ul.${index + 1}.h`)}
                    </div>
                    <div className="flex-1 text-[20px] sm:text-[24px] lg:text-[30px] px-3 py-4 leading-snug">
                        {t(`ul.${index + 1}.p`)}
                    </div>
                </li>
            ))}
        </ul>

        <hr className='mt-10 w-full max-w-[1640px] mx-auto hidden lg:block'/>
    </div>
  )
}

export default Reasons