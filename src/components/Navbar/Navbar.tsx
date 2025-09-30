'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { H7, Paragraph } from '../typography'

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const links = [
    { text: 'About us', link: '' },
    { text: 'Our Services', link: '' },
    { text: 'Our Products', link: '' },
    { text: 'Testimonials', link: '' },
    { text: 'Contact us', link: '' },
  ]

  return (
    <div
      className={`max-w-[1296px] w-full h-[86px] z-50 bg-white rounded-[52px] mx-auto flex justify-between fixed top-[20px] left-0 right-0 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-[120%]'
      }`}
    >
      <div className="h-full w-auto flex items-center pl-[20px]">
        <Image alt={'logo'} src={'/logo/navLogo.png'} height={57} width={128} />
      </div>
      <div className="h-full w-auto flex items-center gap-[30px] pr-[16px]">
        {links.map((data, index) => (
          <Paragraph className="text-[#292929]" key={data.text + index}>
            {data.text}
          </Paragraph>
        ))}
        <button className="h-[59px] w-[164px] rounded-[45px] bg-[#2F2F2F]">
          <H7 className="text-white">Get a Quote</H7>
        </button>
      </div>
    </div>
  )
}

export default Navbar
