import React from 'react'
import { Paragraph } from '../typography'
import Image from 'next/image'

const FooterRight = () => {
  const pages = [
    {
      title: 'Home',
      link: '#',
    },
    {
      title: 'About us',
      link: '#',
    },
    {
      title: 'Contact Us',
      link: '#',
    },
    {
      title: 'Our Services',
      link: '#',
    },
    {
      title: 'Our Products',
      link: '#',
    },
    {
      title: 'Testimonials',
      link: '#',
    },
  ]

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
    <div className="flex flex-wrap gap-[20px] md:gap-[100px] pt-[50px] md:pt-[40px] xl:pt-[20px]">
      <div className=" flex flex-col gap-[20px] max-md:w-full">
        <Paragraph className="text-[18px] text-black font-[400] mb-[10px]">
          <i>QUICK LINKS</i>
        </Paragraph>

        <div className=" flex flex-col flex-wrap gap-[16px] h-[130px] md:h-fit">
          {pages.map((data, index) => {
            return (
              <Paragraph
                className="text-[#858585] text-[18px] sm:text-[20px]"
                key={data.title + index}
              >
                {data.title}
              </Paragraph>
            )
          })}
        </div>
      </div>

      <div className=" flex flex-col gap-[20px] max-md:pt-[50px]">
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
    </div>
  )
}

export default FooterRight
