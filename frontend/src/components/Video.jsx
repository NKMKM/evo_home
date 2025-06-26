import React from 'react'
import { Link } from 'react-router-dom'
import vector_about_us_1 from'../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from'../assets/videos/abouts_us/vector2.png'

const Video = ({text}) => {
  return (
    <div className=' w-full sm:h-[1100px] lg:h-[950px] flex flex-col justify-between  mt-20 mx-auto'>
        <h1 className='text-[50px] font-bold text-center'>{text}</h1>

        {/* videos(instead of them just a div with any bg color) */}
        <div className='w-full  h-[696px] relative flex flex-row'>
            <div className='absolute  h-[853px] bottom-0 -z-10'><img src={vector_about_us_1} className='w-full h-full'/></div>
            <div className='sm:w-full  lg:w-[1641px] h-[696px] flex flex-row justify-between mx-auto'>
                <div className='sm:w-full lg:w-[1227px] h-[696px] bg-[#f5ab32] text-center mx-auto shadow-2xl '>
                  <iframe className='w-full h-full' src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div className='absolute h-[853px] bottom-0 right-0 -z-10'><img src={vector_about_us_2} className='w-full h-full'/></div>
        </div>

        
        <div className='sm:w-full md:w-[1640px] h-[67px]  flex flex-row items-center mx-auto'>

            <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>

            <Link to="/contacts" className="sm:w-[40%] md:w-[389px] h-[67px] bg-[#F9B33B] text-[30px] font-semibold flex items-center justify-center hover:scale-110 transition duration-300">ЗАКАЗАТЬ</Link>

            <div className='sm:h-[3px] md:h-[1px] sm:w-[30%] md:w-[625.5px] bg-[#F9B33B]'></div>
        </div>


    </div>
  )
}

export default Video