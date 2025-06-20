import React from 'react'

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
  <div className='w-full h-[1000px] mb-[630px] '>
          
          {/* header */}
          <div className=' w-[1418px]  h-[184px] text-center mx-auto mt-20 mb-20 font-bold text-[#222222] items-center border-r-[12px]  border-r-[#E0E0E0] border-l-[12px] border-l-[#E0E0E0]'>
            <h1 className='text-[60px] '>Профессиональный ремонт,</h1>
            <div className="flex flex-row justify-between">
              <div className='w-[155px] h-[12px] bg-[#E0E0E0]'></div>
              <div className='w-[155px] h-[12px] bg-[#E0E0E0]'></div>
            </div>
            <h1 className='text-[60px] mb-2'> которому можно доверять!</h1>
          </div>

          {/* main info */}

          <div className='flex flex-row  w-[1655px] mx-auto  justify-between'>

            {/* info */}

            <div className='relative grid grid-cols-2 grid-rows-3 gap-x-[100px] w-[735px] items-center h-[1071px] my-auto  '>
                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>ОПЫТ</h1>
                  <img src={right_arrow} className='z-10 absolute top-[155px] left-[215px] scale-[0.6]'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={achieve} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Более X лет на рынке, сотни успешно завершенных проектов и довольных клиентов</p>
                  </div>
                </div>


                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>КАЧЕСТВО</h1>
                  <img src={bottom_arrow} className='z-10 absolute top-[227px] right-[10px] scale-[0.6]'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={bill} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Используем только сертифицированные материалы и современные технологии</p>
                  </div>
                </div>


                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>НАДЕЖНОСТЬ</h1>
                  <img src={left_arrow} className='z-10 absolute top-[450px] left-[215px] scale-[0.6]'/>
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
                  <img src={bottom_arrow} className='z-10 absolute top-[520px] left-[10px] scale-[0.6]'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={time} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Гарантированные сроки со штрафными санкциями за каждый день просрочки</p>
                  </div>
                </div>


                <div className='flex flex-col items-center'>
                  <h1 className='text-[32px] font-[500]'>ПОМОЩЬ</h1>
                  <img src={right_arrow} className='z-10 absolute top-[760px] left-[215px] scale-[0.55]'/>
                  <div className='flex flex-col items-center text-center space-y-2 px-4 w-[312px] h-[250px] rounded-[10px] border-[#F9B33B] border-[5px]'>
                    <img src={communication} className='w-[74px] h-[74px] mt-4' />
                    <p className='text-[22px]'>Консультируем на каждом этапе, помогаем с выбором материалов и проектными решениями</p>
                  </div>
                </div>
            
                <button className='w-[734px] h-[67px] mx-auto bg-[#F9B33B] rounded-[10px] mt-[110px] text-3xl font-bold cursor-pointer button-scale-hover'>ЗАПРОСИТЬ РАСЦЕНКИ</button>

            </div>

            {/* image with slider  before/after*/}

            <div className='w-[820px] h-[1071px] '>
                <ImageComparisonSlider 
                
                  beforeSrc={before_after_1}
                  afterSrc={before_after_2}

                />
            </div>



        </div>
          <p className='font-[400] text-[32px] w-[1640px] mx-auto my-20 '>Команда квалифицированных специалистов и  постоянная приверженность к качеству позволяют нам удовлитворить все ваши потребности в ремонте, гарантируя обговоренные сроки.</p>
          <div className='w-[1640px] h-[1px] mx-auto mb-20 bg-[#828282]'></div>
    </div>
  )
}

export default Advantages