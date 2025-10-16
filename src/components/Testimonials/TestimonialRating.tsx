import React from 'react'
import { Paragraph } from '../typography'
import Image from 'next/image'

const TestimonialRating = () => {
  return (
    <div className=" w-[65px] h-[33px] border-[1px] border-[#00000036] rounded-4xl bg-[#F6FFDB]">
      <i>
        <Paragraph className="text-[20px] flex justify-center items-center gap-1.5">
          <span>5</span>
          <span>
            <Image src="/svg/star.svg" alt="star" height={20} width={20} />
          </span>
        </Paragraph>
      </i>
    </div>
  )
}

export default TestimonialRating
