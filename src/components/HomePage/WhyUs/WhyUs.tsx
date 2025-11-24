import React from 'react'
import WhyUsCardContainer from './WhyUsCardContainer'

const WhyUs = () => {
  return (
    <div className="my-20">
      <div className="text-[14px] md:text-[18px] w-[90px] sm:w-[121px] h-[32px] sm:h-[43px] pt-1 mx-auto border-[1.8px] border-[#A9BF6838] flex justify-center items-center bg-[#F6FFDB] rounded-[40px]">
        Why Us
      </div>
      <h3 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[121%] -tracking-[1.2px] text-center my-5">
        Why Choose Us
      </h3>
      <div className="mt-8 sm:mt-12">
        <h4 className="text-[32px] md:text-[45px] lg:text-[60px] font-bold leading-[121%] -tracking-[1.8px] text-[#D1D1D1] text-center">
          Build On Trust
        </h4>
        <h4 className="text-[32px] md:text-[45px] lg:text-[60px] font-bold leading-[121%] -tracking-[1.8px] text-[#D1D1D1] text-center">
          Driven By Result
        </h4>
      </div>
      <WhyUsCardContainer />
    </div>
  )
}

export default WhyUs
