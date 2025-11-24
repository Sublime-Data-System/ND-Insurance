import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className="flex max-md:flex-col max-md:items-center md:justify-center gap-7 px-2">
      <div className="w-[330px] lg:w-[657px] h-[477px] lg:h-[310px] rounded-[35px] bg-[#f4f2f2] p-10 relative">
        <h4 className="text-[26px] lg:text-[32px] text-[#2C2C2C] leading-[121%] -tracking-[0.96px] font-bold w-[234px] lg:w-[356px]">
          <i>End-to-End Insurance & Claims Support</i>
        </h4>
        <p className="text-[22px] leading-[121%] -tracking-[0.66px] text-[#41357B] mt-5 flex gap-2">
          Chat With Us Live
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-1"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <rect width="18" height="18" rx="9" fill="#F60000" fillOpacity="0.25" />
            <rect
              x="6.04688"
              y="5.34668"
              width="6.04679"
              height="6.34682"
              rx="3.0234"
              fill="#F60000"
            />
          </svg>
        </p>
        <button className="w-[180px] h-[59px] text-[21px] bg-[#2F2F2F] rounded-[45px] text-white mt-6 hover:bg-[#4D3E99]">
          Connect Now
        </button>

        <div className="h-[194px] w-[300px]  rounded-[8px] flex flex-col p-3 gap-4 justify-center absolute right-3 md:right-10 bottom-3 lg:top-16">
          <div className="flex items-center justify-end gap-2">
            <div className="h-[30px] w-[30px] border-2 border-[#D7E5AE] rounded-full relative">
              <Image src={'/images/user/user3.png'} alt={''} fill />
            </div>
            <div className="h-[55px] w-[183px] rounded-[9.5px] bg-[#FFFFFF] flex justify-center items-center">
              <p className="text-[14px] leading-[18px] -tracking-[0.28px] w-[149px]">
                Can I insure my home quickly?
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-2">
            <div className="h-[80px] w-[240px] md:w-[240px] rounded-[9.5px] bg-[#C8D899] flex justify-center items-center">
              <p className="text-[14px] leading-[18px] -tracking-[0.28px] w-[197px]">
                Definitely! We’ll compare options and secure the right coverage for you !
              </p>
            </div>
            <div className="h-[30px] w-[30px] border-2 border-[#D7E5AE] rounded-full relative">
              <Image src={'/images/user/nd_user.png'} alt={''} fill />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[330px] lg:w-[323px] h-[477px] lg:h-[310px] rounded-[35px] bg-[#F6FFDB] relative lg:hidden max-md:hidden">
        <Image
          src={'/images/products/project.png'}
          alt={'project.png'}
          className="absolute bottom-0 right-3"
          height={271}
          width={271}
        />
        <Image
          src={'/images/building.png'}
          alt={'project.png'}
          className="absolute bottom-4 left-3"
          height={356}
          width={175}
        />
        <Image
          src={'/images/boat.png'}
          alt={'project.png'}
          className="absolute bottom-0 right-2"
          height={117}
          width={334}
        />
      </div>
      <div className="w-[330px] lg:w-[323px] h-[310px] md:h-[477px] lg:h-[310px] rounded-[35px] bg-[#F6FFDB] relative md:hidden lg:block">
        <Image
          src={'/images/products/project.png'}
          alt={'project.png'}
          className="absolute bottom-4 left-16"
          height={198}
          width={198}
        />
        <Image
          src={'/images/building.png'}
          alt={'project.png'}
          className="absolute bottom-5 left-12"
          height={217}
          width={106}
        />
        <Image
          src={'/images/boat.png'}
          alt={'project.png'}
          className="absolute bottom-0 left-10"
          height={93}
          width={265}
        />

        <div className="w-[135px] absolute right-5 top-8">
          <h5 className="text-[40px] font-bold leading-[121%] -tracking-[1.2px]">20+</h5>
          <p className="text-[26px] text-[#858585] leading-[121%] -tracking-[1.2px]">Industries</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
