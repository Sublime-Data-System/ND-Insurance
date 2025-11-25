import Image from 'next/image'
import React, { ReactNode } from 'react'
import { Paragraph } from '../typography'

const ModalLeft = ({
  tags,
  title,
  image,
}: {
  tags: string[] | undefined
  title: string | undefined
  image: ReactNode | undefined
}) => {
  return (
    <div className="w-full lg:w-[290px] md:h-fit lg:h-full">
      <div className="w-full lg:w-[280px] h-[259px] bg-[#F5F5F5] rounded-[13px] flex justify-center items-end relative">
        {image}
      </div>
      <Paragraph className="text-[27px]! text-[#41357B] mt-3 leading-[121%] -tracking-[0.81px]">
        {title}
      </Paragraph>
      <div className="w-full mt-3 flex flex-wrap gap-2 max-lg:hidden">
        {tags?.map((data, index) => {
          return (
            <div
              key={data + index}
              className="border-[#A9BF6838] border-[1.37px] bg-[#ECE8FF] h-[33px] rounded-[30px] text-[14px] w-fit px-2  flex items-center justify-center"
            >
              {data}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ModalLeft
