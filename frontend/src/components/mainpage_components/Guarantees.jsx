import React from 'react'
import vector1 from '../../assets/images/vector1.png'
import vector2 from '../../assets/images/vector2.png'
import bill from '../../assets/icons/bill.png'
import hands from '../../assets/icons/hands.png'
import time from '../../assets/icons/time.png'

const Guarantees = () => {
  return (
    <div className='relative lg:mb-40 sm:h-[2900px] lg:h-[826px]'>
        {/* vector 1 */}
        <div className='sm:bottom-[400px] sm:scale-150 lg:scale-100 lg:bottom-auto w-[515px] h-[823px] absolute '><img src={vector1} alt='vector 1' loading="lazy" className='w-full h-full'/></div>


        {/* header text         */}
        <header className='sm:w-full lg:w-[754px] h-[136px] mx-auto mb-40 '>
            <h1 className='text-[70px] font-bold text-center'>Наши гарантии</h1>
            <p className='text-[30px] italic text-center '>"EVO HOME – надежность, подтвержденная делом!"</p>
        </header>
        
        {/* list of Guarantees */}
        <main className=' lg:w-[1650px] mx-auto'>

            <ul className=' sm:h-[2500px] flex sm:flex-col lg:flex-row justify-between'>
                {/* 1 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={bill} alt='bill' loading="lazy" className='w-full h-full'/></div>
                        <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>ГАРАНТИЯ <br/> КАЧЕСТВА</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-3 text-center '>Используем проверенные материалы и современные технологии, контролируем каждый этап работ</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>1</p> </div>
                </li>

                {/* 2 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={hands} alt='hands' loading="lazy" className='w-full h-full'/></div>
                        <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>ПРОФЕССИОНАЛЬНЫЙ <br/> ПОДХОД</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>Команда опытных специалистов с вниманием к деталям и стандартам</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>2</p> </div>
                </li>

                {/* 3 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={time} alt='clock' loading="lazy" className='w-full h-full'/></div>
                        <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>СОБЛЮДЕНИЕ <br/> СРОКОВ</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>Четкий график работ и выполнение проекта в установленные сроки</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>3</p> </div>
                </li>

                {/* 4 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={hands} alt='hands' loading="lazy" className='w-full h-full'/></div>
                        <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>ЮРИДИЧЕСКАЯ <br/> ЗАЩИТА</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>Работаем по официальному договору, фиксируем все условия</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>4</p> </div>
                </li>

                {/* 5 */}
                <li className=' relative sm:w-[90%] sm:mx-auto lg:mx-0 lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='sm:w-[100px] sm:h-[100px] lg:w-[64px] lg:h-[64px] mx-auto '><img src={time} alt='clock' loading="lazy" className='w-full h-full'/></div>
                        <h2 className='sm:text-[30px] lg:text-[22px] font-semibold text-center'>ПРОЗРАЧНОСТЬ  <br/> ЦЕН</h2>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[17px] w-full h-[117px] p-4 text-center '>Фиксированная смета без скрытых платежей и неожиданных доплат</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[270px] md:left-[45%] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>5</p> </div>
                </li>


            </ul>
        </main>

        {/* vector 2 */}
        <div className='sm:w-full sm:h-auto lg:w-[806px] lg:h-[804px] lg:scale-100 lg:right-0 sm:top-[300px] lg:top-0 absolute -z-10 '><img src={vector2} alt='vector 2' loading="lazy" className='w-full h-full object-cover'/></div>

    </div>
  )
}

export default Guarantees