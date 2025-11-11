import React from 'react'
import { H1Hero, H7, Paragraph } from '../typography'

const ServicesHero = () => {
  return (
    <div className="w-[290px] sm:w-[428px] lg:w-[635px] mx-auto space-y-[30px] mb-20 sm:mb-36 relative">
      <H1Hero className="text-[26px]! sm:text-[40px]! lg:text-[55px]! w-full mx-auto ">
        Smart <span className="text-[#4D3E99]">Services</span> for{' '}
        <span className="text-[#4D3E99]">Insurance</span> needs
      </H1Hero>

      <Paragraph className="max-w-[405px] lg:max-w-[542px] w-full max-sm:text-[16px]! max-lg:text-[22px]! text-[24px]! text-[#9D9D9D] text-center! mx-auto">
        Insurance made simple, tailored to your unique needs and goals
      </Paragraph>
      <div className="w-full flex justify-center max-sm:mt-24">
        <button className="w-[220px] sm:w-[196px] h-[56px] sm:h-[65px] rounded-[45px] bg-[#4D3E99] mx-auto">
          <H7 className="text-white">Get in touch</H7>
        </button>
      </div>

      <div className="h-[34.8px] lg:h-[44px] rounded-[22px] px-5 text-[12px] lg:text-[14px] leading-[150%] tracking-tight bg-[#E4F8AA] w-fit flex items-center justify-center absolute -top-12 -rotate-12 -left-5">
        Policy Solutions
      </div>
      <div className="h-[34.8px]  lg:h-[44px] max-sm:hidden rounded-[22px] px-5 text-[12px] lg:text-[14px] leading-[150%] tracking-tight bg-[#E4F8AA] w-fit flex items-center justify-center absolute -top-12 -right-5 rotate-12">
        Risk Management
      </div>

      <div className="h-[34.8px]  lg:h-[44px] sm:hidden rounded-[22px] px-5 text-[12px] lg:text-[14px] leading-[150%] tracking-tight bg-[#E4F8AA] w-fit flex items-center justify-center absolute -top-12 -right-5 rotate-12">
        Claims Support
      </div>

      <div className="h-[34.8px]  lg:h-[44px] rounded-[22px] px-5 text-[12px] lg:text-[14px] leading-[150%] tracking-tight bg-[#ECE8FF] w-fit flex items-center justify-center absolute top-44 sm:top-14 lg:top-20 -rotate-6 -left-2 sm:-left-24 lg:-left-20">
        Coverage Planning
      </div>
      <div className="h-[34.8px]  lg:h-[44px] max-sm:hidden rounded-[22px] px-5 text-[12px] lg:text-[14px] leading-[150%] tracking-tight bg-[#ECE8FF] w-fit flex items-center justify-center absolute top-44 sm:top-14 lg:top-20 -right-20 lg:-right-14 rotate-6">
        Claims Support
      </div>
      <div className="h-[34.8px] sm:hidden  rounded-[22px] px-5 text-[12px]  leading-[150%] tracking-tight bg-[#E4F8AA] w-fit flex items-center justify-center absolute top-44 -right-2  rotate-6">
        Risk Management
      </div>
    </div>
  )
}

export default ServicesHero
