import React from "react";
import Image from "next/image";
import FeatureImage from "../image/Image Block.png";

const FeatureFF = () => {
  return (
    <>
      <div className="w-full max-w-[1440px] h-auto lg:h-[598px] flex flex-wrap lg:flex-nowrap items-center justify-center px-6 lg:px-[120px] gap-6 lg:gap-[36px] mx-auto">
  
  <div className="w-full max-w-[630px] h-auto lg:h-[430px] bg-[#2A254B] px-6 lg:px-[64px] py-6 lg:py-[54px]">
    <h1 className="font-clash-display text-[24px] lg:text-[32px] text-[#FFFFFF] font-normal leading-[30px] lg:leading-[39.36px] text-left underline-position-from-font decoration-none">
      It started with a small idea
    </h1>
    <p className="font-satoshi text-[16px] lg:text-[18px] font-normal leading-[20px] lg:leading-[24.3px] text-white text-left mt-4 lg:mt-6">
      A global brand with local beginnings, our story began in a small studio in South London in early 2014
    </p>
    <div className="mt-6 text-center lg:text-right">
      <button className="w-full lg:w-auto px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900">
        View Collection
      </button>
    </div>
  </div>
  
  <div className="w-full max-w-[630px] h-auto lg:h-[430px] flex items-center justify-center">
    <Image
      src={FeatureImage}
      alt="image"
      height={430}
      width={630}
      className="w-full h-auto lg:w-[630px] lg:h-[430px]"
    />
  </div>
</div>

    </>
  );
};

export default FeatureFF;
