'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { H7, Paragraph } from '../typography'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [menuVisible, setMenuVisible] = useState(false)
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
    <>
      <div
        className={cn(
          `h-fit   border-[3px] z-10 bg-white border-[#0000000A] lg:hidden   px-[20px]  sticky  left-0  transition-transform duration-300 ${
            visible || menuVisible ? 'translate-y-0' : '-translate-y-[120%]'
          }`,
          menuVisible
            ? 'rounded-b-[25px] pt-[20px] w-full top-[0px]'
            : 'rounded-[52px] mx-auto w-[calc(100%-40px)] top-[20px]',
        )}
      >
        <div className="h-[66px] flex items-center justify-between ">
          <Image alt={'logo'} src={'/logo/navLogo.png'} height={46} width={104} />
          {menuVisible ? (
            <Image
              alt={'cross'}
              src={'/svg/cross.svg'}
              width={20}
              height={20}
              onClick={() =>
                setMenuVisible((prev) => {
                  return !prev
                })
              }
            />
          ) : (
            <Image
              alt={'hamburger'}
              src={'/svg/hamburger.svg'}
              width={30}
              height={16}
              onClick={() =>
                setMenuVisible((prev) => {
                  return !prev
                })
              }
            />
          )}
        </div>
        {menuVisible && (
          <div className="w-full flex flex-col items-center gap-[16px] py-[30px]">
            <Paragraph className="!text-[24px] -tracking-[0.84px]">Home</Paragraph>
            {links.map((data, index) => {
              return (
                <Paragraph
                  className="!text-[24px] -tracking-[0.84px]"
                  key={data.link + index + '-sm'}
                >
                  {data.text}
                </Paragraph>
              )
            })}

            <button className="h-[65px] w-[220px] rounded-[45px] bg-[#2F2F2F] mt-[50px]">
              <H7 className="text-[#fff] ">Get a Quote</H7>
            </button>
          </div>
        )}
      </div>
      <div
        className={`max-w-[1336px] w-full h-[86px] px-[20px] z-50   mx-auto  max-lg:hidden sticky top-[20px] left-0  transition-transform duration-300 ${
          visible ? 'translate-y-0' : '-translate-y-[120%]'
        }`}
      >
        <div
          className="w-full h-full rounded-[52px] flex justify-between bg-white"
          style={{ boxShadow: '0px 3.71px 51.6px -42px #0000000A', border: '3px solid #0000000A' }}
        >
          <div className="h-full w-auto flex items-center pl-[20px]">
            <Image alt={'logo'} src={'/logo/navLogo.png'} height={57} width={128} />
          </div>
          <div className="h-full w-auto flex items-center gap-[30px] pr-[16px]">
            {links.map((data, index) => (
              <Paragraph className="text-[#292929] -tracking-[0.84px]" key={data.text + index}>
                {data.text}
              </Paragraph>
            ))}
            <button className="h-[50px] w-[50px] xl:h-[59px] xl:w-[164px] rounded-[45px] bg-[#2F2F2F] flex items-center justify-center">
              <H7 className="text-white max-xl:hidden">Get a Quote</H7>
              <Image
                className="max-lg:hidden xl:hidden"
                alt={'logo'}
                src={'/svg/buttonArrow.svg'}
                height={30}
                width={30}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
