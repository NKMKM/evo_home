import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider';
import { MdDragHandle } from 'react-icons/md';


const ImageComparisonSlider = ({ beforeSrc, afterSrc }) => {
  return (
    <div className="w-full h-full">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={beforeSrc}
            alt="До"
            className="object-cover w-full h-full"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={afterSrc}
            alt="После"
            className="object-cover w-full h-full"
          />
        }
        className="w-full h-full  shadow-lg overflow-hidden"
        handle={
          <div className="relative h-full flex items-center">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[5px] bg-white z-0" />
            <div className="relative z-10 w-8 h-8 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center shadow-md cursor-ew-resize">
              <MdDragHandle className="text-gray-600 text-xl" />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ImageComparisonSlider;
