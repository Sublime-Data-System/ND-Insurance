import React from 'react'
import { Paragraph } from '../typography'

const ServiceCardMain = ({ isOdd, description }: { isOdd: boolean; description: string[] }) => {
  const backgroundColor = isOdd ? '#ECE8FF' : '#F6FFDB'
  return (
    <div
      className="w-full h-full  rounded-[30px] p-8 flex flex-col justify-center items-center gap-4"
      style={{ backgroundColor }}
    >
      {description.map((data, index) => {
        return (
          <Paragraph key={data + index} className="text-[16px]! text-[#545454]">
            {data}
          </Paragraph>
        )
      })}
    </div>
  )
}

export default ServiceCardMain
