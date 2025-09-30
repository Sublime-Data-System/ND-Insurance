import { H6, Paragraph } from '@/components/typography'
import Image from 'next/image'
import React, { ReactNode } from 'react'

const ProductCard = ({ children }: { children: ReactNode }) => {
  const arr = ['Fire Insurance', 'Erection All Risk', 'Erection All Risk', 'Construction All Risk']
  return (
    <div className="h-[364px] w-[307px] rounded-[20px] border-[2px] border-[#E9E5FF] p-[13px] flex flex-col">
      <div className="w-full h-[183.34px] bg-[#F5F5F5] rounded-[20px] relative">{children}</div>
      <div className=" py-[24px] pl-[0px]">
        <H6 className="text-[#41357B] pl-[6px]">Property</H6>
        <div className="w-full h-auto flex flex-wrap gap-[5px] mt-[14px]">
          {arr.map((data, index) => {
            return (
              <div
                key={data + index}
                className="h-[28.5px] rounded-[26.7px] w-fit mt-[3px] bg-[#ECE8FF] border-[1.19px] border-[#A9BF6838] px-[8px] flex justify-center items-center"
              >
                <Paragraph className="!text-[12.5px] !leading-[100%]">{data}</Paragraph>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
