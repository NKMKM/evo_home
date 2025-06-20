import React from 'react'

import vector from '../assets/images/room_renovation/room_renovation/vector.png'

const Reasons = () => {
  return (
    <div className='relative  w-full h-[1098px] my-20'>     
        {/* header */}
        <div className='w-[1640px] h-[74px] bg-[#F9B33B] flex flex-row mx-auto mb-20'>
            <div className='w-[74px] h-[74px] bg-[#222222] text-white text-[50px] text-center mr-10'>3.</div>
            <h1 className='text-[50px] font-bold'>Почему стоит выбрать EvoHome для ремонта?</h1>
        </div>

        {/* vector */}

        <div className='absolute w-[1261px] h-[1418px] -z-10 bottom-[559px] right-[1300px]'><img src={vector}/></div>

        {/* reasons */}
        <ul className='w-[1641px] h-[900px] flex flex-col justify-between  mx-auto '>
            
            <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[513px] h-[96px] bg-[#222222]'>ЛОЯЛЬНЫЕ ЦЕНЫ</div>
                <p className='text-[30px] px-3 '>Мы предлагаем комплексные услуги по ремонту от 500 евро/м2, гарантируя отличное соотношение цены и качества.</p>
            </li>

            <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[603px] h-[96px] bg-[#222222]'>ДЕСЯТИЛЕТИЯ ОПЫТА</div>
                <p className='text-[30px] px-3 '>Имея более чем 17-летний опыт работы в сфере ремонта, наша команда профессионалов готова воплотить в жизнь любое ваше желание.</p>
            </li>

            <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[567px] h-[96px] bg-[#222222]'>ГАРАНТИЯ КАЧЕСТВА</div>
                <p className='text-[30px] px-3 '>Мы предоставляем 3-летнюю гарантию на каждую выполненную работу, гарантируя ваше полное удовлетворение и спокойствие.</p>
            </li>

            <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[510px] h-[96px] bg-[#222222]'>ГЕОГРАФИЧЕСКОЕ ПОКРЫТИЕ</div>
                <p className='text-[30px] px-3 '>Мы работаем в Риме и его живописных окрестностях, гарантируя широкий спектр услуг и индивидуальный подход.</p>
            </li>

            <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[443px] h-[96px] bg-[#222222]'>ОПЛАТА ПО ЗАВЕРШЕНИЮ</div>
                <p className='text-[30px] px-3 '>Оплата производится только по завершении работы, что гарантирует ваше полное удовлетворение.</p>
            </li>

            <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[473px] h-[96px] bg-[#222222]'>РАССРОЧКА БЕЗ ПРОЦЕНТОВ</div>
                <p className='text-[30px] px-3 '>Мы предлагаем возможность беспроцентной рассрочки для облегчения финансирования вашего проекта.</p>
            </li>

            <li className='w-full h-[100px] border-[2px] border-[#F9B33B] flex flex-row'>
                <div className='text-[24px] text-[#F9B33B] flex justify-center items-center font-bold w-[603px] h-[96px] bg-[#222222]'>ОФИЦИАЛЬНЫЙ ДОГОВОР</div>
                <p className='text-[30px] px-3 '>Каждое соглашение закрепляется официальным договором, что обеспечивает прозрачность и безопасность на каждом этапе работы.</p>
            </li>

        </ul>

        <hr className='mt-20 w-[1641px] mx-auto'/>

    </div>
  )
}

export default Reasons