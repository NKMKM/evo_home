import React from 'react'

import vector1 from '../assets/images/vector1.png'
import vector2 from '../assets/images/vector2.png'
import bill from '../assets/icons/bill.png'
import hands from '../assets/icons/hands.png'
import time from '../assets/icons/time.png'

const FiveReasons = () => {
  return (
    <div className='relative sm:w-full  lg:w-full lg:h-[826px] '>
        {/* vector 1 */}
        <div className='w-[515px] h-[823px] absolute sm:bottom-0 '><img src={vector1} className='w-full h-full'/></div>


        {/* header text         */}
        <div className='lg:w-[1353px]  lg:h-[136px] mx-auto mb-40 '>
            <h1 className='text-[70px] font-bold text-center lg:w-[1353px] mx-auto'>5 причин разработать дизайн с EvoHome</h1>
            <p className='text-[30px] italic text-center '>"EVO HOME – надежность, подтвержденная делом!"</p>
        </div>
        
        {/* list of Guarantees */}
        <div className='sm:h-[2750px] lg:w-[1650px] mx-auto'>

            <ul className='flex sm:flex-col sm:w-[90%] sm:h-[2750px] lg:w-[1650px] lg:h-auto  sm:mx-auto lg:mx-0 lg:flex-row justify-between'>
                {/* 1 */}
                <li className=' relative sm:w-full lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='w-[64px] h-[64px] mx-auto '><img src={bill} className='w-full h-full'/></div>
                        <h1 className='text-[22px] font-semibold text-center'>17-ЛЕТ ОПЫТА</h1>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[18px] w-full h-[156px] p-4 text-center '>Наша команда обладает знаниями и опытом, необходимыми для того, чтобы преобразить каждый метр вашего пространства</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[240px] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>1</p> </div>
                </li>

                {/* 2 */}
                <li className=' relative sm:w-full lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='w-[64px] h-[64px] mx-auto '><img src={hands} className='w-full h-full'/></div>
                        <h1 className='text-[22px] font-semibold text-center'>ОПЛАТА ПО СЧЕТУ</h1>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[18px] w-full h-[156px] p-4 text-center '>в EvoHome оплата производится по счету, что позволяет вам оплачивать фактически выполненную работу.</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[240px] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>2</p> </div>
                </li>

                {/* 3 */}
                <li className=' relative sm:w-full lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='w-[64px] h-[64px] mx-auto '><img src={time} className='w-full h-full'/></div>
                        <h1 className='text-[22px] font-semibold text-center'>ОФИЦИАЛЬНЫЙ <br/> ДОГОВОР</h1>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[16px] w-full h-[156px] p-4 text-center '>Мы предоставляем официальные договоры на все проекты, в которых подробно описывается каждый этап работы, стоимость и сроки.</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[240px] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>3</p> </div>
                </li>

                {/* 4 */}
                <li className=' relative sm:w-full lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='w-[64px] h-[64px] mx-auto '><img src={hands} className='w-full h-full'/></div>
                        <h1 className='text-[22px] font-semibold text-center'>3-ЛЕТНЯЯ ГАРАНТИЯ</h1>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[18px] w-full h-[156px] p-4 text-center '>Мы предлагаем 3-летнюю гарантию на выполненную работу, демонстрируя нашу приверженность качеству и долгосрочным результатам.</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[240px] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>4</p> </div>
                </li>

                {/* 5 */}
                <li className=' relative sm:w-full lg:w-[278px] h-[420px] bg-linear-to-t from-[#83b1d6]  to-[#fcfdfe] shadow-2xl'>
                    <div className='flex flex-col justify-between h-full w-full py-10'>
                        <div className='w-[64px] h-[64px] mx-auto '><img src={time} className='w-full h-full'/></div>
                        <h1 className='text-[22px] font-semibold text-center'>EVO HOME</h1>
                        <p className='bg-[#d7e4ef] sm:text-[22px] lg:text-[16px] w-full h-[156px] p-4 text-center '>Вы полагаетесь на опытного и надежного партнера для ремонта вашей гостиной, и вам гарантированы качество, безопасность и прозрачность проекта.</p>

                    </div>

                    <div className='absolute top-[385px] sm:left-[240px] lg:left-[90px] w-[70px] h-[70px] border-[5px] border-white bg-[#F9BA4E] rounded-full text-center  '><p className='font-semibold text-[40px]'>5</p> </div>
                </li>


            </ul>
        </div>

        {/* vector 2 */}
        <div className='w-[806px] h-[804px] right-0 top-0 absolute -z-10 '><img src={vector2} className='w-full h-full'/></div>

    </div>
  )
}

export default FiveReasons