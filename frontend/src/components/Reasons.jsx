import React from 'react'
import { useTranslation } from 'react-i18next'

import vector from '../assets/images/room_renovation/room_renovation/vector.png'

const Reasons = () => {
  const {t} = useTranslation('components/Reasons')
  return (
    <div className='relative  w-full lg:h-[1098px] sm:my-10 lg:my-20'>     
        {/* header */}
        <header className='lg:w-[1640px] mx-auto h-[74px] bg-[#F9B33B] flex flex-row sm:mb-20'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center sm:mr-7 lg:mr-10'>3.</div>
            <h1 className='sm:text-[39px] lg:text-[50px] font-bold'>{t('h')}</h1>
        </header>

        {/* vector */}

        <div className='absolute w-[1261px] h-[1418px] -z-10 bottom-[559px] right-[1300px]'><img src={vector} alt='vector' loading="lazy"/></div>

        {/* reasons */}
        <ul className='sm:w-full lg:w-[1641px] lg:h-[900px] flex flex-col justify-between  mx-auto '>
            
            <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                {/* Левая часть — фиксированная ширина */}
                <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                {t('ul.1.h')}
                </div>

                {/* Правая часть — обязательно flex-1 */}
                <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                {t('ul.1.p')}
                </div>

            </li>


            <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                {/* Левая часть — фиксированная ширина */}
                <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                {t('ul.2.h')}
                </div>

                {/* Правая часть — обязательно flex-1 */}
                <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                {t('ul.2.p')}
                </div>

            </li>

            <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                {/* Левая часть — фиксированная ширина */}
                <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                {t('ul.3.h')}
                </div>

                {/* Правая часть — обязательно flex-1 */}
                <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                {t('ul.3.p')}
                </div>

            </li>

            <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                {/* Левая часть — фиксированная ширина */}
                <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                {t('ul.4.h')}
                </div>

                {/* Правая часть — обязательно flex-1 */}
                <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                {t('ul.4.p')}
                </div>

            </li>

            <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                {/* Левая часть — фиксированная ширина */}
                <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                {t('ul.5.h')}
                </div>

                {/* Правая часть — обязательно flex-1 */}
                <div className="flex-1 text-[32px] px-3 py-4 leading-snug">
                {t('ul.5.p')}
                </div>

            </li>

            <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                {/* Левая часть — фиксированная ширина */}
                <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                {t('ul.6.h')}
                </div>

                {/* Правая часть — обязательно flex-1 */}
                <div className="flex-1 text-[32px] px-3 py-4 leading-snug">
                {t('ul.6.p')}
                </div>

            </li>

            <li className="w-full border-[2px] border-[#F9B33B] flex sm:flex-col lg:flex-row items-stretch">

                {/* Левая часть — фиксированная ширина */}
                <div className="text-[24px] text-[#F9B33B] flex justify-center items-center font-bold sm:w-full lg:w-[25%] bg-[#222222]">
                {t('ul.7.h')}
                </div>

                {/* Правая часть — обязательно flex-1 */}
                <div className="flex-1 text-[30px] px-3 py-4 leading-snug">
                {t('ul.7.p')}
                </div>

            </li>

        </ul>

        <hr className='mt-20 w-[1641px] mx-auto sm:hidden lg:block'/>

    </div>
  )
}

export default Reasons