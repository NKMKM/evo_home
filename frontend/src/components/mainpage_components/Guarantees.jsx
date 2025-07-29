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
  const { t } = useTranslation('home/Guarantees')
  const selectedLang = localStorage.getItem('language') || 'en'

  const guarantees = [
    { icon: contract, title: t('first_element.h'), desc: t('first_element.p'), number: 1 },
    { icon: achieve, title: t('second_element.h'), desc: t('second_element.p'), number: 2 },
    { icon: time, title: t('third_element.h'), desc: t('third_element.p'), number: 3 },
    { icon: hands, title: t('fourth_element.h'), desc: t('fourth_element.p'), number: 4 },
    { icon: money, title: t('fifth_element.h'), desc: t('fifth_element.p'), number: 5 },
  ]

  return (
    <div className="relative w-full max-w-[1650px] mx-auto px-4 py-16 sm:py-24 lg:py-28 overflow-hidden">
      {/* vector 1 */}
      <div className="absolute -z-10 left-[-20%] bottom-0 sm:left-[-10%] sm:bottom-[10%] lg:bottom-[5%] lg:left-0 w-[200px] sm:w-[350px] lg:w-[515px] opacity-50">
        <img src={vector1} alt="vector 1" loading="lazy" className="w-full h-auto object-contain" />
      </div>

      {/* Header */}
      <header className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-5xl lg:text-[70px] font-bold">{t('h')}</h2>
        <p className="mt-4 text-lg sm:text-2xl lg:text-[30px] italic">{t('p')}</p>
      </header>

      {/* Cards */}
      <main>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 justify-items-center">
          {guarantees.map((item) => (
            <li
              key={item.number}
              className="relative bg-gradient-to-t from-[#83b1d6] to-[#fcfdfe] shadow-2xl rounded-xl w-[300px] max-w-[380px] min-h-[400px] mx-auto p-6 pt-10 pb-16 flex flex-col items-center"
            >
              <div className="flex flex-col items-center gap-6 flex-grow">
                <div className="w-20 h-20 lg:w-16 lg:h-16">
                  <img src={item.icon} alt={`icon-${item.number}`} loading="lazy" className="w-full h-full object-contain" />
                </div>
                <h2 className="font-semibold text-center text-base lg:text-[16px]">
                  {item.title}
                </h2>
                <div className="flex-grow flex items-center justify-center">
                  <p className="bg-[#d7e4ef] text-center text-sm sm:text-lg lg:text-[17px] p-4 rounded-md h-[120px] flex items-center justify-center">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Number badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full flex items-center justify-center text-[40px] font-semibold">
                {item.number}
              </div>
            </li>
          ))}
        </ul>
      </main>

      {/* vector 2 */}
      <div className="absolute -z-10 top-[5%] right-[-20%] sm:top-[10%] sm:right-[-10%] lg:top-0 lg:right-0 w-[250px] sm:w-[400px] lg:w-[806px] opacity-50">
        <img src={vector2} alt="vector 2" loading="lazy" className="w-full h-auto object-contain" />
      </div>
    </div>
  )
}

export default Guarantees