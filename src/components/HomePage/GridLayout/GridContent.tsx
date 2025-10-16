import { H2, Paragraph } from '@/components/typography'
import Image from 'next/image'
import React from 'react'

const GridContent = ({
  heading,
  subHeading,
  backgroundColor = '#A89BE1',
  borderColor = '#D7D1FC',
  src,
  alt,
}: {
  heading: string
  subHeading: string
  backgroundColor?: string
  borderColor?: string
  src: string
  alt: string
}) => {
  return (
    <>
      <div className="h-auto">
        <div
          style={{ backgroundColor, borderColor }}
          className="h-[79px] md:h-[89px] w-[82px] md:w-[92px]  border-[4px]  rounded-full flex justify-center items-center"
        >
          <Image src={src} alt={alt} height={34} width={34} />
        </div>
      </div>
      <div className="h-auto">
        <H2 className="text-[36px] md:text-[40px] font-[600] !leading-[121%]">{heading}</H2>
        <Paragraph className="text-[#858585] italic text-[18px] md:text-[20px]">
          {subHeading}
        </Paragraph>
      </div>
    </>
  )
}

export default GridContent
