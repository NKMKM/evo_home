import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
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
    <div className="relative w-full">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        className="w-full"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeStart;
