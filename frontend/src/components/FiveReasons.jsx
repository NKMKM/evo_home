import React from 'react'
import vector1 from '../assets/images/vector1.png'
import vector2 from '../assets/images/vector2.png'
import bill from '../assets/icons/bill.png'
import hands from '../assets/icons/hands.png'
import time from '../assets/icons/time.png'

const FiveReasons = () => {
  return (
    <div className='relative w-full h-auto px-4'>
        <div className='w-full h-[300px] sm:h-[500px] lg:h-[823px] absolute bottom-0 -z-10'>
            <img src={vector1} alt='vector 1' loading="lazy" className='w-full h-full object-cover'/>
        </div>

        <div className='w-full max-w-[1353px] h-auto mx-auto mb-10 sm:mb-20 lg:mb-40'>
            <h1 className='text-[30px] sm:text-[50px] lg:text-[70px] font-bold text-center'>5 причин разработать дизайн с EvoHome</h1>
            <p className='text-[18px] sm:text-[24px] lg:text-[30px] italic text-center'>"EVO HOME – надежность, подтвержденная делом!"</p>
        </div>
        
        <div className='w-full max-w-[1650px] mx-auto'>
            <ul className='flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-0'>
                {[
                    { icon: bill, title: '17-ЛЕТ ОПЫТА', text: 'Наша команда обладает знаниями и опытом, необходимыми для того, чтобы преобразить каждый метр вашего пространства', number: 1 },
                    { icon: hands, title: 'ОПЛАТА ПО СЧЕТУ', text: 'в EvoHome оплата производится по счету, что позволяет вам оплачивать фактически выполненную работу.', number: 2 },
                    { icon: time, title: 'ОФИЦИАЛЬНЫЙ <br/> ДОГОВОР', text: 'Мы предоставляем официальные договоры на все проекты, в которых подробно описывается каждый этап работы, стоимость и сроки.', number: 3 },
                    { icon: hands, title: '3-ЛЕТНЯЯ ГАРАНТИЯ', text: 'Мы предлагаем 3-летнюю гарантию на выполненную работу, демонстрируя нашу приверженность качеству и долгосрочным результатам.', number: 4 },
                    { icon: time, title: 'EVO HOME', text: 'Вы полагаетесь на опытного и надежного партнера для ремонта вашей гостиной, и вам гарантированы качество, безопасность и прозрачность проекта.', number: 5 }
                ].map((reason, index) => (
                    <li key={index} className='relative w-full max-w-[350px] lg:w-[278px] h-[420px] bg-gradient-to-t from-[#83b1d6] to-[#fcfdfe] shadow-2xl mx-auto'>
                        <div className='flex flex-col justify-between h-full w-full py-8'>
                            <div className='w-[48px] sm:w-[64px] h-[48px] sm:h-[64px] mx-auto'>
                                <img src={reason.icon} alt={reason.title.toLowerCase()} loading="lazy" className='w-full h-full'/>
                            </div>
                            <h2 className='text-[18px] sm:text-[20px] lg:text-[22px] font-semibold text-center' dangerouslySetInnerHTML={{ __html: reason.title }}></h2>
                            <p className='bg-[#d7e4ef] text-[16px] sm:text-[18px] lg:text-[16px] w-full h-[156px] p-4 text-center'>
                                {reason.text}
                            </p>
                        </div>
                        <div className='absolute top-[385px] left-[50%] -translate-x-[50%] w-[50px] sm:w-[60px] lg:w-[70px] h-[50px] sm:h-[60px] lg:h-[70px] border-[3px] sm:border-[4px] lg:border-[5px] border-white bg-[#F9BA4E] rounded-full text-center'>
                            <p className='font-semibold text-[24px] sm:text-[32px] lg:text-[40px]'>{reason.number}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

        <div className='w-full h-[300px] sm:h-[500px] lg:h-[804px] absolute top-0 right-0 -z-10'>
            <img src={vector2} alt='vector 2' loading="lazy" className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default FiveReasons