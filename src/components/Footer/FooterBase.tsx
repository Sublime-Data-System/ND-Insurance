import React from 'react'
import { Paragraph } from '../typography'

const FooterBase = () => {
  return (
    <div className="flex justify-between ">
      <div className=" w-[470px]">
        <Paragraph className="text-[#858585] ">IRDA Registration number: 967</Paragraph>
        <Paragraph className="text-[#858585] ">Validity: 10th May, 2024 to 9th May, 2027</Paragraph>
        <Paragraph className="text-[#858585] ">CIN No : U67100GJ2022PTC135149</Paragraph>
      </div>
      <Paragraph className="text-[#858585] self-end">
        @ 2025 ND Insurance All rights reserved. 
      </Paragraph>
    </div>
  )
}

export default FooterBase
