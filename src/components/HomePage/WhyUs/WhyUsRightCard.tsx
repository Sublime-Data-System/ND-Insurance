import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const WhyUsRightCard = () => {
  return (
    <div className="w-[298px] md:w-[302px] lg:w-[405px] h-[300px] rounded-[20px] bg-[#ECE8FF] flex items-center justify-center mb-3">
      <div className="w-[261px] lg:w-[293px] h-[245px] rounded-[14px] bg-white py-8 flex flex-col justify-between">
        <Image
          alt={'Logo'}
          height={41}
          width={88}
          src={'/logo/navLogo.png'}
          className="h-[41px] mx-auto"
        />

        <p className="text-[16px] w-[237px] text-[#090A0A] text-center mx-auto">
          <i>
            Find the <span className="text-[#4D3E99]">Right Insurance</span> — with the{' '}
            <span className="text-[#4D3E99]">Best Advisors.</span>
          </i>
        </p>
        <div className="flex justify-center items-center ml-5">
          <Image
            src={'/images/about-us/parth-desai-sm.png'}
            alt={''}
            height={59}
            width={59}
            className="rounded-full border-2 border-white"
          />
          <Image
            src={'/images/about-us/dhruv.png'}
            alt={''}
            height={59}
            width={59}
            className="rounded-full border-2 border-white relative -left-5"
          />
          <div className="h-[43px] w-[43px] rounded-full border-2 border-white bg-[#4D3E99] relative -left-9 flex justify-center items-center">
            <PlusIcon color="#fff" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUsRightCard
