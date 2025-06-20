import React from 'react'

const HomeStart = () => {
  return (
    <div className=" ">
        <div className=" home-start-bg-image  bg-cover bg-center -z-10 w-full h-[900px]"> </div>
        <div className='absolute top-[346px] left-[88px] shadow-2xl w-[1414px] h-[494px] z-10 bg-gray-300/60 rounded-[10px] px-10 py-14 '>
            <ul className='text-[#222222] space-y-4 text-6xl font-semibold'>
                <li>Мы хотим превратить</li>
                <li>ваши <span className='text-white'>идеи </span>в</li>
                <li>необыкновенные пространства для <span className='text-white'>жизни</span> </li>
            </ul>

            <button className='w-[432px] h-[83px] bg-[#F9B33B] rounded-[10px] mt-[110px] text-3xl cursor-pointer button-scale-hover font-bold'>ЗАПРОСИТЬ РАСЦЕНКИ</button>
        </div>
    </div>
  )
}

export default HomeStart