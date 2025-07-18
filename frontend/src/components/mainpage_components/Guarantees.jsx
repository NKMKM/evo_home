import React from 'react'
import { useTranslation } from 'react-i18next'
import vector1 from '../../assets/images/vector1.png'
import vector2 from '../../assets/images/vector2.png'
import achieve from '../../assets/icons/achieve.png'
import money from '../../assets/icons/money2.png'
import contract from '../../assets/icons/contract.png'
import hands from '../../assets/icons/hands.png'
import time from '../../assets/icons/time.png'

const Guarantees = () => {
  const {t} = useTranslation('home/Guarantees')
  const selectedLang = localStorage.getItem('language') || 'en';	
  return (
    <div className='relative lg:my-20 sm:h-[2900px] lg:h-[826px]'>
        {/* vector 1 */}
        <div className='sm:bottom-[400px] sm:scale-150 lg:scale-100 lg:bottom-auto lg:w-[515px] h-[823px] absolute '><img src={vector1} alt='vector 1' loading="lazy" className='w-full h-full overflow-hidden'/></div>


        {/* header text         */}
        <header className='sm:w-full lg:w-[754px] h-[136px] mx-auto mb-40 px-10 '>
            <h1 className='text-[70px] font-bold text-center'>{t('h')}</h1>
            <p className='text-[30px] italic text-center '>{t('p')}</p>
        </header>
        
        {/* list of Guarantees */}
        <main className=' lg:w-[1650px] mx-auto'>

            <ul className=' sm:h-[2500px] lg:h-[430px] flex sm:flex-col lg:flex-row justify-between'>
                {/* 1 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={contract} alt='bill' loading="lazy" className='w-full h-full'/></div>
                        <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>{t('first_element.h')}</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-3 text-center '>{t('first_element.p')}</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[104px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>1</p> </div>
                </li>

                {/* 2 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={achieve} alt='hands' loading="lazy" className='w-full h-full'/></div>
                        <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>{t('second_element.h')}</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>{t('second_element.p')}</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[104px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>2</p> </div>
                </li>

                {/* 3 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={time} alt='clock' loading="lazy" className='w-full h-full'/></div>
                        <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>{t('third_element.h')}</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>{t('third_element.p')}</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[104px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>3</p> </div>
                </li>

                {/* 4 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={hands} alt='hands' loading="lazy" className='w-full h-full'/></div>
                        <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>{t('fourth_element.h')}</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>{t('fourth_element.p')}</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[104px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>4</p> </div>
                </li>

                {/* 5 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={money} alt='clock' loading="lazy" className='w-full h-full'/></div>
                        <h2 className={`sm:text-[30px]  font-semibold text-center ${selectedLang === 'it' ? 'lg:text-[24px]' :'lg:text-[22px]'}  `}>{t('fifth_element.h')}</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>{t('fifth_element.p')}</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[104px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>5</p> </div>
                </li>


            </ul>
        </main>

        {/* vector 2 */}
        <div className='sm:w-full sm:h-auto lg:w-[806px] lg:h-[804px] lg:scale-100 lg:right-0 sm:top-[300px] lg:top-0 absolute -z-10 '><img src={vector2} alt='vector 2' loading="lazy" className='w-full h-full object-cover'/></div>

    </div>
  )
}

export default Guarantees