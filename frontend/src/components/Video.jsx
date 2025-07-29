import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import vector_about_us_1 from '../assets/videos/abouts_us/vector1.png'
import vector_about_us_2 from '../assets/videos/abouts_us/vector2.png'

const Video = ({text}) => {
  const {t} = useTranslation('commercial_premises/CommercialPremises')
  return (
    <div className='w-full sm:h-auto lg:h-[950px] flex flex-col justify-between mt-10 mx-auto px-4'>
        <h2 className='text-[32px] sm:text-[40px] lg:text-[50px] font-bold text-center'>{text}</h2>

        {/* videos */}
        <div className='w-full h-auto relative flex flex-col mt-6'>
            <div className='absolute w-full h-full bottom-0 -z-10'>
                <img src={vector_about_us_1} className='w-full h-full object-cover' alt="vector 1"/>
            </div>
            <div className='w-full max-w-[1641px] h-auto mx-auto'>
                <div className='w-full h-[250px] sm:h-[400px] lg:h-[696px] text-center mx-auto shadow-2xl'>
                    <iframe 
                        className='w-full h-full rounded-[10px]' 
                        src="https://www.youtube.com/embed/4hUYRlP9iGM?si=EbQXomtpUSifbO4J" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <div className='absolute w-full h-full bottom-0 right-0 -z-10'>
                <img src={vector_about_us_2} className='w-full h-full object-cover' alt="vector 2"/>
            </div>
        </div>

        <div className='w-full max-w-[1640px] h-auto flex flex-col sm:flex-row items-center mx-auto mt-6 gap-4'>
            <div className='h-[2px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
            <Link 
                to="/contacts" 
                className="w-full sm:w-[60%] lg:w-[389px] h-[50px] lg:h-[67px] bg-[#F9B33B] text-[20px] lg:text-[30px] font-semibold flex items-center justify-center hover:scale-105 transition duration-300"
            >
                {t('process.video_button')}
            </Link>
            <div className='h-[2px] w-full sm:w-[30%] lg:w-[625.5px] bg-[#F9B33B]'></div>
        </div>
    </div>
  )
}

export default Video