import React from 'react'
import { H2, H5, H7, Paragraph } from '../../typography'
import Image from 'next/image'

const InsuranceBanner = () => {
  return (
    <div className="max-w-[329px] md:max-w-[780px] xl:max-w-[1152px] w-full h-fit xl:h-[455px] flex flex-wrap justify-between mx-auto rounded-[21px] md:rounded-[32px] bg-[#4D3E99] my-[80px] px-[30px] md:px-[66px] py-[53px]">
      <div className="max-w-[280px] md:max-w-[524px] w-full h-full">
        <H2 className="text-white max-w-[280px] md:max-w-[524px] w-full">
          <i>
            Insurance
            <span className="inline-block relative w-[64px] md:w-[80px] ">
              <Image
                alt={'Shield'}
                height={80}
                width={80}
                src={'/images/shield.png'}
                className="absolute -bottom-[16px] md:-bottom-[26px] left-1 inline w-[64px] md:w-[80px] h-[64px] md:h-[80px]"
              />
            </span>{' '}
            That Works When You Need It Most
          </i>
        </H2>

        <Paragraph className="text-[16px] md:text-[18px] w-[266px] md:w-[452px] text-white !leading-[30px] my-[16px]">
          We cut the complexity out of insurance—giving you clear advice, fast claims, and coverage
          you can trust.
        </Paragraph>

        <button className="w-[159px] md:w-[173px] h-[56px] md:h-[65px] rounded-[45px] bg-[#F6FFDB] flex justify-center items-center gap-[10px]">
          <Image src={'/svg/phone.svg'} alt={'phone svg'} height={19} width={19} />
          <H7 className="text-[#5C6446]">{'Lets Talk'}</H7>
        </button>
      </div>
      <div className="max-w-[266px] md:max-w-full xl:max-w-[380px] w-full h-full max-xl:mt-[40px] ">
        <div className="h-[316px] md:h-[326px] w-full md:max-w-full xl:max-w-[380px] border-[6px] border-[#E9E9E9] rounded-[22px] bg-white relative">
          <div className="px-[15px] md:px-[30px] pt-[30px] w-full">
            <H5 className="w-full text-[20px] md:text-[30px] xl:text-[24px]">
              <i>
                Real <span className="text-[#4D3E99]">Advice.</span> Real{' '}
                <span className="text-[#4D3E99]">Claims.</span>{' '}
                <span className="text-[#4D3E99]">Real Coverage.</span>
              </i>
            </H5>

            <button
              className={
                'w-[142px] md:w-[177px] h-[56px] md:h-[65px] rounded-[45px] bg-[#2D2D2D] mt-[20px]'
              }
            >
              <H7 className="text-white">Get a Quote</H7>
            </button>
          </div>

          <Image
            src={'/images/3dMan.png'}
            alt={'3d SalesMan'}
            height={208}
            width={291}
            className="absolute -right-3  bottom-0 h-[167px]  w-[175px]  md:hidden"
          />
          <Image
            src={'/images/3dManLg.png'}
            alt={'3d SalesMan'}
            height={208}
            width={291}
            className="absolute -right-4 sm:-right-8 bottom-0 h-[167px] sm:h-[208px] w-[175px] sm:w-[291px] max-md:hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default InsuranceBanner
