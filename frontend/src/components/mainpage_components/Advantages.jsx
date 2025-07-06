import React from 'react'
import { Link } from 'react-router-dom'

// image imports
import achieve from '../../assets/icons/achieve.png'
import bill from '../../assets/icons/bill.png'
import communication from '../../assets/icons/communication.png'
import hands from '../../assets/icons/hands.png'
import money from '../../assets/icons/money.png'
import time from '../../assets/icons/time.png'
import left_arrow from '../../assets/icons/arrow_to_left.png'
import right_arrow from '../../assets/icons/arrow_to_right.png'
import bottom_arrow from '../../assets/icons/arrow_to_bottom.png'
import before_after_1 from '../../assets/images/before_after_1.png'
import before_after_2 from '../../assets/images/before_after_2.png'

import ImageComparisonSlider from '../ImageComparisonSlider'

const Advantages = () => {
  return (
  <div className=' md:w-full sm:h-[2750px] sm:flex sm:flex-col sm:justify-between  md:h-[1100px]  md:mb-[630px] '>
          
          {/* header */}
          <div className=' md:w-[1418px]  h-[184px] text-center mx-auto mt-20 sm:mb-30 md:mb-20 font-bold text-[#222222] items-center md:border-r-[12px]  md:border-r-[#E0E0E0] md:border-l-[12px] md:border-l-[#E0E0E0]'>
            <h1 className='sm:text-[50px] md:text-[60px] '>Профессиональный ремонт,</h1>
            <div className="flex flex-row justify-between">
              <div className='w-[155px] h-[12px] bg-[#E0E0E0] sm:hidden md:block'></div>
              <div className='w-[155px] h-[12px] bg-[#E0E0E0] sm:hidden md:block'></div>
            </div>
            <h1 className='sm:text-[50px] md:text-[60px] mb-2'> которому можно доверять!</h1>
          </div>

          {/* main info */}

          <div className='flex sm:flex-col md:flex-row sm:h-[2000px] md:h-[1166px]  sm:w-full md:w-[1655px] mx-auto  justify-between'>

            {/* info */}

            <div className='relative grid sm:grid-cols-2 md:grid-cols-2 md:grid-rows-3 sm:gap-y-[80px] md:gap-x-[100px] md:gap-y-[30px] md:w-[735px] items-center sm:h-[800px] md:h-auto md:my-auto  '>
                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>ОПЫТ</h1>
                  <img src={right_arrow} className='z-10 absolute top-[155px] left-[215px] scale-[0.6] sm:hidden md:block'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={achieve} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Более 10 лет на рынке, сотни успешно завершенных проектов и довольных клиентов</p>
                  </div>
                </div>


                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>КАЧЕСТВО</h1>
                  <img src={bottom_arrow} className='z-10 absolute sm:right-[10px] sm:top-[240px] md:top-[227px] md:right-[10px] scale-[0.6]'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={bill} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Используем только сертифицированные материалы и современные технологии</p>
                  </div>
                </div>


                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>НАДЕЖНОСТЬ</h1>
                  <img src={left_arrow} className='z-10 absolute top-[450px] left-[215px] scale-[0.6] sm:hidden md:block'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={hands} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Работаем строго по договору, фиксированные цены без скрытых доплат</p>
                  </div>
                </div>


                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>ЭКОНОМИЯ</h1>

                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={money} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Оптимизируем затраты без потери качества, подбираем лучшие решения под ваш бюджет</p>
                  </div>

                  
                </div>
                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>СРОКИ</h1>
                  <img src={bottom_arrow} className='z-10 absolute sm:top-[620px] sm:left-[15px] md:top-[540px] md:left-[10px] scale-[0.6]'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={time} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Гарантированные сроки со штрафными санкциями за каждый день просрочки</p>
                  </div>
                </div>


                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>ПОМОЩЬ</h1>
                  <img src={right_arrow} className='z-10 absolute top-[810px] left-[215px] scale-[0.55] sm:hidden md:block'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={communication} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Консультируем на каждом этапе, помогаем с выбором материалов и проектными решениями</p>
                  </div>
                </div>
            
                <Link to="/contacts" className='sm:w-[500px] sm:ml-[25%] md:w-[734px] h-[67px] flex justify-center items-center md:mx-auto bg-[#F9B33B] rounded-[10px]  md:mt-[110px] text-3xl font-bold cursor-pointer hover:scale-110 transition duration-300'>ЗАПРОСИТЬ РАСЦЕНКИ</Link>

            </div>

            {/* image with slider  before/after*/}

            <div className='flex  sm:w-full md:w-[820px] md:h-[1156px] sm:h-[700px] sm:px-10 md:mt-0 sm:mt-[100px]'>
                <ImageComparisonSlider 
                  beforeSrc={before_after_1}
                  afterSrc={before_after_2}
                />
            </div>

          </div>



          <p className='font-[400] sm:text-center sm:text-[36px] md:text-[32px] sm:w-full md:w-[1640px] mx-auto md:my-20 '>Команда квалифицированных специалистов и  постоянная приверженность к качеству позволяют нам удовлитворить все ваши потребности в ремонте, гарантируя обговоренные сроки.</p>
          <div className='sm:hidden md:w-[1640px] h-[1px] mx-auto mb-20 bg-[#828282]'></div>
    </div>
  )
}

export default Advantages