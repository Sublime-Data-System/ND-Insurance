import { H1Hero, H5, H7 } from '@/components/typography'
import React from 'react'
import FloatingComments from './FloatingComments'

const Hero = () => {
  return (
    <div className="w-full pt-[230px] flex items-center justify-center">
      <div className="w-fit h-fit relative">
        <H1Hero>
          Beyond <span className="text-[#4D3E99]">Insurance</span>
        </H1Hero>
        <H1Hero>
          We <span className="text-[#4D3E99]">Deliver Assurance</span> !
        </H1Hero>

        <H5 className="w-[750px] my-[20px] text-center text-[#9D9D9D] mx-auto">
          We are Insurance Brokers specializing in providing Insurance and risk management
          services. 
        </H5>

        <div className="flex gap-[18px] justify-center my-[40px]">
          <button className="h-[65px] w-[181px] rounded-[45px] flex items-center justify-center bg-[#E4F8AA] border-[2px] border-[#A9BF68B0]">
            <H7 className="text-[#2A2A2A]">Our Services</H7>
          </button>
          <button className="h-[65px] w-[181px] rounded-[45px] flex items-center justify-center bg-[#4D3E99] ">
            <H7 className="text-[#fff]">Get in touch</H7>
          </button>
        </div>

        <FloatingComments
          color="#E4F8AA"
          className="absolute -top-[150px] -left-[100px]"
          imagesrc="/images/user/user1.png"
        />
        <FloatingComments
          color="#ECE8FF"
          className="absolute bottom-[40px] -left-[200px]"
          imagesrc="/images/user/user2.png"
        />
        <FloatingComments
          color="#ECE8FF"
          isLeftImage={true}
          className="absolute -top-[110px] -right-[100px]"
          imagesrc="/images/user/user3.png"
        />
        <FloatingComments
          color="#E4F8AA"
          isLeftImage={true}
          className="absolute bottom-[40px] -right-[200px]"
          imagesrc="/images/user/user4.png"
        />
      </div>
    </div>
  )
}

export default Hero
