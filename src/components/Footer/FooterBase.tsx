import React from 'react'
import { Paragraph } from '../typography'

const FooterBase = () => {
  return (
    <div className="flex max-md:flex-col justify-between gap-[20px] ">
      <div className="w-full md:w-[470px]">
        <Paragraph className="text-[#858585] text-[16px] sm:text-[18px]">
          IRDA Registration number: 967
        </Paragraph>
        <Paragraph className="text-[#858585] text-[16px] sm:text-[18px]">
          Validity: 10th May, 2024 to 9th May, 2027
        </Paragraph>
        <Paragraph className="text-[#858585] text-[16px] sm:text-[18px]">
          CIN No : U67100GJ2022PTC135149
        </Paragraph>
      </div>
      <Paragraph className="text-[#858585] md:self-end text-[16px] md:text-[18px]">
        @ 2025 ND Insurance All rights reserved. 
      </Paragraph>
    </div>
  )
}

export default FooterBase
