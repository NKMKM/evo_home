import React from 'react';

const YellowSquare = ({ style = '' }) => {
  return (
    <div className={`bg-[#F9B33B] w-[9px] z-10 mr-10 absolute h-[25px] transition-all duration-300 ${style}`} />
  );
};

export default YellowSquare;
