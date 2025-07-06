import React from 'react';
import { Link } from 'react-router-dom';

const HomeStart = () => {
  return (
    <div className="relative sm:w-full">
      <div className="home-start-bg-image bg-cover bg-center -z-10 sm:w-full  md:h-[900px] sm:h-[600px]" />

      <div className="absolute sm:top-[50px] sm:left-[30px] md:top-[150px] md:left-[88px] shadow-2xl sm:w-[90%]  md:w-[1414px] md:h-[580px] sm:h-[494px] z-10 bg-gray-300/60 rounded-[10px] px-10 py-14 sm:max-w-max">

        <ul className="text-[#222222]  md:space-y-10  md:text-6xl font-semibold  md:text-start sm:text-5xl">
          <li className="">Мы хотим превратить</li>
          <li>
            ваши <span className="  md:text-white">идеи</span> в
          </li>
          <li>
            необыкновенные пространства для <span className= " md:text-white">жизни</span> 
          </li>
        </ul>

        <Link to="/contacts" className="sm:w-[400px] sm:h-[100px] sm:mt-[20px]  md:w-[432px] md:h-[83px] bg-[#F9B33B] flex justify-center items-center hover:scale-110 transittion duration-300 rounded-[10px] md:mt-[110px] text-3xl font-bold cursor-pointer">
          ЗАПРОСИТЬ РАСЦЕНКИ
        </Link>
      </div>
    </div>
  );
};

export default HomeStart;
