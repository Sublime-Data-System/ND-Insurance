import React from 'react'
import { Paragraph } from '../typography'
import Image from 'next/image'

const TestimonialRating = () => {
  return (
    <div className="w-[57px] sm:w-[65px] h-[33px] border-[1px] border-[#00000036] rounded-4xl bg-[#F6FFDB] flex justify-center  items-center">
      <i>
        <Paragraph className="text-[20px] flex justify-center items-center gap-0.5 sm:gap-1.5 w-full">
          <span className="w-fit h-[28px] md:h-[22px] inline-block">5</span>
          <span className="w-fit h-fit inline-block">
            <Image
              src="/svg/star.svg"
              alt="star"
              height={20}
              width={20}
              className="h-[14px] md:h-[20px]"
            />
          </span>
        </Paragraph>
      </i>
    </div>
  )
}

export default TestimonialRating
