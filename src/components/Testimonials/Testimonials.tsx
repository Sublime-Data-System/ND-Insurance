import React from 'react'
import TestimonialCards from './TestimonialCards'
import { H1Hero, H7, Paragraph } from '../typography'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center relative w-[300px] sm:w-[650px] mx-auto h-[280px] lg:h-[400px] gap-5 sm:gap-3">
        <H1Hero className=" md:text-[40px]! lg:text-[55px]! p-2.5">
          Hear From <span className="text-[#4D3E99]">Our Clients</span>
        </H1Hero>

        <Paragraph className="max-sm:w-[280px] text-[22px] sm:text-[24px] lg:text-[32px]! w-fit flex justify-center items-center">
          <i className="text-center">
            <span className="text-[#4D3E99]">Trusted Voices</span>, Real Experiences
          </i>
        </Paragraph>

        <button className="w-[220px] sm:w-[196px] h-[56px] sm:h-[65px] rounded-[45px] bg-[#4D3E99] text-white mt-5">
          <H7>Get in touch</H7>
        </button>

        <Image
          src="/images/user/user1.png"
          alt="User1"
          height={60}
          width={58}
          className="absolute top-28 sm:top-12 lg:top-8 left-4 sm:-left-0 lg:-left-40 max-sm:w-[40px] "
        />
        <Image
          src="/images/user/user3.png"
          alt="User2"
          height={60}
          width={58}
          className="absolute top-28 sm:top-12 lg:top-9 right-4 sm:-right-0 lg:-right-40 max-sm:w-[40px]"
        />
      </div>
      <TestimonialCards />
    </div>
  )
}

export default Testimonials
