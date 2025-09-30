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
    {
      title: 'Contact Us',
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
    <div className="flex gap-[100px] pt-[20px]">
      <div className=" flex flex-col gap-[20px]">
        <Paragraph className=" text-black font-[400] mb-[10px]">
          <i>QUICK LINKS</i>
        </Paragraph>

        {pages.map((data, index) => {
          return (
            <Paragraph className="text-[#858585]" key={data.title + index}>
              {data.title}
            </Paragraph>
          )
        })}
      </div>
      <div className=" flex flex-col gap-[20px]">
        <Paragraph className=" text-black font-[400] mb-[10px]">
          <i>CONTACTS</i>
        </Paragraph>

        {contacts.map((data, index) => {
          return (
            <div key={data.text + index} className="flex gap-[14px] ">
              <div className="h-[40px] w-[40px] rounded-[50%] bg-[#4D3E99] flex items-center justify-center">
                <Image src={data.icon} height={14} width={14} alt={'icon'} />
              </div>
              <Paragraph className="max-w-[336px] w-full font-[350px] text-[#5F5F5F] flex items-center">
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
