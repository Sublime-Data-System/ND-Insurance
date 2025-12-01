import React from 'react'
import { H1Hero } from '../typography'
import Image from 'next/image'
import { Navigation2Icon } from 'lucide-react'

const AboutUsTitle = () => {
  return (
    <div className="mb-14 md:mb-16 mt-16 md:mt-32">
      <div className="relative w-[300px] sm:w-[650px] mx-auto">
        <H1Hero className="sm:text-[26px] md:text-[40px]">
          We Are{' '}
          <span className="text-[#4D3E99]">
            ND <span className="text-[#C8D899]">I</span>nsurance
          </span>
        </H1Hero>
        <h2 className="text-[22px] md:text-[24px] lg:text-[32px] max-md:w-[235px] mx-auto leading-[121%] -tracking-[0.66px] text-center mt-5">
          <i>
            Your <span className="text-[#4D3E99]">Trusted Insurance Brokers</span>
          </i>
        </h2>
        <div className="flex justify-center mt-20 sm:mt-10">
          <button className="w-[220px] md:w-[196px] h-[56px] md:h-[65px] text-[18px] md:text-[21px] rounded-[45px] bg-[#4D3E99] hover:bg-[#2F2F2F] mx-auto text-white">
            Get in touch
          </button>
        </div>
        <div className="absolute top-28 sm:top-12 lg:top-8 left-4 sm:-left-0 lg:-left-40 max-sm:w-[40px] ">
          <Image src="/images/user/user1.png" alt="User1" height={60} width={58} />
          <Navigation2Icon
            className="rotate-[135deg] relative -right-14 -top-2"
            color="#C8D899"
            fill="#C8D899"
          />
        </div>
        <div className="absolute top-28 sm:top-12 lg:top-9 right-4 sm:-right-0 lg:-right-40 max-sm:w-[40px]">
          <Image src="/images/user/user3.png" alt="User2" height={60} width={58} />
          <Navigation2Icon
            className="-rotate-[135deg] relative -left-5 -top-2"
            color="#C8D899"
            fill="#C8D899"
          />
        </div>
      </div>

      <div>
        <h3 className="text-[32px] md:text-[45px] lg:text-[60px] mt-32 leading-[136%] md:leading-[121%] -tracking-[1.8px] font-[700] text-[#D1D1D1] w-[316px] md:w-[512px] lg:w-[641px] text-center mx-auto">
          Comprehensive Coverage For People, Partners, & Growth.
        </h3>
      </div>
    </div>
  )
}

export default AboutUsTitle
