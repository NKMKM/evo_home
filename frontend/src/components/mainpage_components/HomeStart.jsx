import React from 'react';
import { Link } from 'react-router-dom';

const HomeStart = () => {
  return (
    <div className="relative sm:w-full">
      <div className="home-start-bg-image bg-cover bg-center -z-10 sm:w-full  lg:h-[900px] sm:h-[600px]" />

      <div className="absolute sm:top-[50px] sm:left-[30px] lg:top-[150px] lg:left-[88px] shadow-2xl sm:w-[90%]  lg:w-[1414px] lg:h-[580px] sm:h-[494px] z-10 bg-gray-300/60 rounded-[10px] px-10 py-14 sm:max-w-max">

        <ul className="text-[#222222]  lg:space-y-10  lg:text-6xl font-semibold  lg:text-start sm:text-5xl">
          <li className="">Мы хотим превратить</li>
          <li>
            ваши <span className="  lg:text-white">идеи</span> в
          </li>
          <li>
            необыкновенные пространства для <span className= " lg:text-white">жизни</span> 
          </li>
        </ul>

        <Link to="/contacts" className="sm:w-[400px] sm:h-[100px] sm:mt-[20px]  lg:w-[432px] lg:h-[83px] bg-[#F9B33B] flex justify-center items-center hover:scale-110 transittion duration-300 rounded-[10px] lg:mt-[110px] text-3xl font-bold cursor-pointer">
          ЗАПРОСИТЬ РАСЦЕНКИ
        </Link>
      </div>
    </div>
  );
};

export default HomeStart;
