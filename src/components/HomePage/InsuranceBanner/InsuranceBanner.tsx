import React from 'react'
import { H2, H5, H7, Paragraph } from '../../typography'
import Image from 'next/image'

const InsuranceBanner = () => {
  return (
    <div className="max-w-[1152px] w-full h-[455px] flex justify-between mx-auto rounded-[32px] bg-[#4D3E99] my-[80px] px-[66px] py-[53px]">
      <div className="max-w-[524px] w-full h-full">
        <H2 className="text-white max-w-[524px] w-full">
          <i>
            Insurance
            <Image
              alt={'Shield'}
              height={80}
              width={80}
              src={'/images/shield.png'}
              className="inline"
            />{' '}
            that Works When You Need It Most
          </i>
        </H2>

        <Paragraph className="w-[452px] text-white !leading-[30px] my-[16px]">
          We cut the complexity out of insurance—giving you clear advice, fast claims, and coverage
          you can trust.
        </Paragraph>

        <button className="w-[173px] h-[65px] rounded-[45px] bg-[#F6FFDB] flex justify-center items-center gap-[10px]">
          <Image src={'/svg/phone.svg'} alt={'phone svg'} height={19} width={19} />
          <H7 className="text-[#5C6446]">{'Lets Talk'}</H7>
        </button>
      </div>
      <div className="max-w-[380px] w-full h-full">
        <div className="h-[326px] w-[380px] border-[6px] border-[#E9E9E9] rounded-[22px] bg-white relative">
          <div className="px-[30px] pt-[30px] w-full">
            <H5 className="w-full ">
              <i>
                Real <span className="text-[#4D3E99]">Advice.</span> Real{' '}
                <span className="text-[#4D3E99]">Claims.</span>{' '}
                <span className="text-[#4D3E99]">Real Coverage.</span>
              </i>
            </H5>

            <button className={'w-[177px] h-[65px] rounded-[45px] bg-[#2D2D2D] mt-[20px]'}>
              <H7 className="text-white">Get a Quote</H7>
            </button>
          </div>

          <Image
            src={'/images/3dMan.png'}
            alt={'3d SalesMan'}
            height={208}
            width={291}
            className="absolute -right-8 bottom-0 "
          />
        </div>
      </div>
    </div>
  )
}

export default InsuranceBanner
