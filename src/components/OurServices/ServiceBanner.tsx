import React from 'react'
import { H2, H5, H7, Paragraph } from '../typography'
import Image from 'next/image'

const ServiceBanner = () => {
  return (
    <div className="my-8 mx-auto w-full max-w-[329px] sm:max-w-[686px] lg:max-w-[1185px] h-auto lg:h-[455px] rounded-[21px] sm:rounded-[32px] bg-[#4D3E99] px-7 sm:px-20 flex flex-wrap justify-between py-12 lg:py-16 ">
      <div className="w-[420px] h-full">
        <H2 className="max-sm:text-[26px]! text-[40px]! text-white font-[500] relative">
          <i>Smart Protection For Every Need</i>{' '}
          <span className="relative">
            <Image
              alt={'Shield'}
              height={80}
              width={80}
              src={'/images/shield.png'}
              className="absolute -bottom-[16px] md:-bottom-[26px] left-1 inline w-[64px] md:w-[80px] h-[64px] md:h-[80px]"
            />
          </span>
        </H2>

        <Paragraph className="my-6 text-white max-sm:text-[16px]! text-[18px]! leading-[27px]!">
          Expertly crafted plans and advisory support so you’re covered in every situation.
        </Paragraph>

        <button className="h-[56px] sm:h-[65px] w-[159px] sm:w-[173px] rounded-[45px] bg-[#F6FFDB] hover:bg-[#E9E5FF]">
          <H7 className="text-[#5C6446] font-[400] max-sm:text-[18px]! text-[21px]!">Contact Us</H7>
        </button>
      </div>

      <div className="w-full lg:w-fit h-[350px] sm:h-fit flex max-sm:items-end  max-sm:justify-start max-lg:justify-end max-lg:mt-12">
        <div className="w-full sm:w-[327px] h-[268px] sm:h-[340px] relative  ">
          <div className="w-[256px] sm:w-[308px] h-[268px] sm:h-[322px] relative z-10  rounded-[35.5px] bg-[#FFFFFF] transform -rotate-3 p-7 sm:p-10 flex flex-col justify-between">
            <H5 className="text-[20px]! sm:text-[25.5px]! w-[100px] sm:w-[225px] max-sm:flex max-sm:flex-col">
              <i>
                Smart <span className="text-[#4D3E99]">Insurance</span>
                <span className="text-[#4D3E99]"> Services</span>
              </i>
            </H5>

            <div className="flex">
              <Paragraph className="text-[16px] sm:text-[20px] text-[400] w-[200px]">
                One Policy, Complete Protection
              </Paragraph>

              <div className="w-[26.5px] h-[26.5px] rounded-[4.5px] bg-[#9FC03B] flex justify-center items-center">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8451 1.58875L4.8681 9.56575L1.24219 5.93984"
                    stroke="white"
                    strokeWidth="1.74044"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <button className="h-[54px] sm:h-[65px] w-full rounded-[44.6px] bg-[#2F2F2F] hover:bg-[#4D3E99]">
              <H7 className="text-white text-[17.5px] sm:text-[21px]">Get a Quote</H7>
            </button>
          </div>
          <div className="h-[44px] w-[180px] text-[14px] rounded-l-[22px] bg-[#E4F8AA] absolute pl-8 flex items-center -top-[70px] sm:top-[40px] -right-[28px] sm:-left-40 z-10 sm:z-0">
            Right coverage
          </div>
          <div className="h-[44px] w-[140px] sm:w-[160px] text-[14px] rounded-l-[22px] bg-[#ECE8FF] absolute pl-8  flex items-center -top-[20px] sm:top-[100px] -right-[28px] sm:-left-[132px] z-10 sm:z-0">
            Right terms
          </div>
          <div className="h-[44px] w-[160px] sm:w-[200px] text-[14px] rounded-l-[22px] bg-[#E4F8AA] absolute pl-8  flex items-center top-[30px] sm:top-[162px] -right-[28px] sm:-left-[146px] z-10 sm:z-0">
            Right on time
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceBanner
