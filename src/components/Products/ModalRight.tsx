import React from 'react'
import { Paragraph } from '../typography'

const ModalRight = ({
  primaryDesc,
  secondaryDesc,
  descList,
  tags,
}: {
  primaryDesc: string | undefined
  secondaryDesc: string | undefined
  descList: string[] | undefined
  tags: string[] | undefined
}) => {
  return (
    <div className="md:w-full lg:w-[447px] lg:mt-5">
      <Paragraph className=" text-[16px]! md:text-[18px]! text-[#7D7D7D] leading-[34px]! -tracking-[0.54px]!">
        {primaryDesc}
      </Paragraph>
      <ul style={{ listStyleType: 'disc' }} className="ml-5">
        {descList?.map((data, index) => (
          <li
            key={data + index}
            className="text-[16px]! md:text-[18px]! text-[#7D7D7D] leading-[34px]! -tracking-[0.54px]! whitespace-pre-line"
          >
            {data}
          </li>
        ))}
      </ul>

      <div className="w-full mt-3 flex flex-wrap gap-2 lg:hidden">
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

export default ModalRight
