import React from 'react'
import { Paragraph } from '../typography'

const ModalRight = ({
  primaryDesc,
  secondaryDesc,
  descList,
}: {
  primaryDesc: string | undefined
  secondaryDesc: string | undefined
  descList: string[] | undefined
}) => {
  return (
    <div className="md:w-full lg:w-[447px] mt-5">
      <Paragraph className="!text-[18px] text-[#7D7D7D] leading-[34px]! -tracking-[0.54px]!">
        {primaryDesc}
      </Paragraph>
      <ul style={{ listStyleType: 'disc' }} className="ml-5">
        {descList?.map((data, index) => (
          <li
            key={data + index}
            className="!text-[18px] text-[#7D7D7D] leading-[34px]! -tracking-[0.54px]!"
          >
            {data}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ModalRight
