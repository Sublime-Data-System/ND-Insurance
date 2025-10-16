import React from 'react'
import { Paragraph } from '../typography'
import Image from 'next/image'
import FooterBase from './FooterBase'
import FooterRight from './FooterRight'

const Footer = () => {
  return (
    <div className="max-w-[329px] sm:max-w-[1296px] w-full h-fit xl:h-[584px] flex flex-col rounded-[21px] md:rounded-[52px] bg-white mx-auto px-[15px] py-[40px] xs:p-[30px] sm:p-[60px] my-[80px] ">
      <div className="flex flex-wrap flex-1 pb-[50px] justify-between">
        <div className="">
          <Image
            src={'/logo/footerLogo.png'}
            className="h-[114px] sm:h-[147px] w-[179px] sm:w-[221px]"
            height={147}
            width={221}
            alt={'logo'}
          />
          <Paragraph className="text-[16px] sm:text-[18px] w-[300px] sm:w-[327px] !leading-[30px]  text-[#4D3E99] font-[400] mt-[10px] uppercase">
            <i>Protecting Your Growth, Securing Your Future !</i>
          </Paragraph>

          <button className="w-[177px] h-[56px] sm:h-[65px] bg-[#2D2D2D] rounded-[45px] mt-[30px]">
            <Paragraph className="text-[18px] sm:text-[21px] font-[350] text-white">
              Get a Quote
            </Paragraph>
          </button>
        </div>
        <FooterRight />
      </div>
      <FooterBase />
    </div>
  )
}

export default Footer
