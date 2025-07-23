import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Discount from './Discount';
import Ideas from './Ideas';
import Design from './Design';
import Architect from './Architect';

const HomeStart = () => {
  const slides = [
    <Design key="design" />,
    <Discount key="discount" />,
    <Architect key="architect" />,
    <Ideas key="ideas" />,
  ];
  return (
    <div className=" relative w-full">
      {/* Кастомные стрелки */}
      <div className="swiper-button-prev text-black text-3xl absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer select-none" />
      <div className="swiper-button-next text-black text-3xl absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer select-none" />

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="w-full"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className=" bg-white rounded-xl shadow-md">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeStart;
