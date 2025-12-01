import React from 'react'
import { Paragraph } from '../typography'
import Image from 'next/image'
import FooterBase from './FooterBase'
import FooterRight from './FooterRight'
import Link from 'next/link'

const Footer = () => {
  const contacts = [
    {
      icon: '/svg/location.svg',
      text: '7, Tapovan Society , S M Road Ambawadi , Ahmedabad - 380015',
    },
    {
      icon: '/svg/footerPhone.svg',
      text: '+91 9274415148',
    },
    {
      icon: '/svg/email.svg',
      text: 'info@ndinsurance.com',
    },
  ]
  return (
    <div className="max-w-[329px] md:max-w-[713px] lg:max-w-[1296px] w-full h-fit xl:h-[584px] flex flex-col rounded-[21px] md:rounded-[52px] bg-white mx-auto px-[15px] py-[40px] xs:p-[30px] md:p-[40px] lg:p-[60px] mt-[40px]! my-[80px] ">
      <div className="flex flex-wrap flex-1 pb-[50px] justify-between">
        <div className="w-[250px] md:w-[300px]">
          <Image
            src={'/logo/footerLogo.png'}
            className="h-[114px] sm:h-[147px] w-[179px] sm:w-[221px]"
            height={147}
            width={221}
            alt={'logo'}
          />
          <Paragraph className="text-[16px] sm:text-[18px] w-[225px] sm:w-[300px]  !leading-[30px]  text-[#4D3E99] font-[400] mt-[10px] uppercase">
            <i>Protecting Your Growth, Securing Your Future !</i>
          </Paragraph>

          <Link href={'/contact-us'}>
            <button className="w-[177px] h-[56px] sm:h-[65px] bg-[#2D2D2D] rounded-[45px] mt-[30px] hover:bg-[#4D3E99]">
              <Paragraph className="text-[18px] sm:text-[21px] font-[350] text-white">
                Get a Quote
              </Paragraph>
            </button>
          </Link>
        </div>
        <div className=" flex flex-col gap-[30px] w-[286px] max-md:pt-[50px] max-md:hidden lg:hidden mt-14">
          <Paragraph className="text-[18px] text-black font-[400] mb-[10px]">
            <i>CONTACTS</i>
          </Paragraph>

          {contacts.map((data, index) => {
            return (
              <div key={data.text + index} className="flex gap-[18px] ">
                <div className="h-[40px] w-[40px] rounded-[50%] bg-[#4D3E99] flex items-center justify-center">
                  <Image src={data.icon} height={14} width={14} alt={'icon'} />
                </div>
                <Paragraph className="flex-1 sm:max-w-[336px] sm:w-full font-[350px] text-[18px] sm:text-[20px] text-[#5F5F5F] flex items-center">
                  {data.text}
                </Paragraph>
              </div>
            )
          })}
        </div>
        <FooterRight />
      </div>
      <FooterBase />
    </div>
  )
}

export default Footer
