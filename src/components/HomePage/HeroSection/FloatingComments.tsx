import { Paragraph } from '@/components/typography'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const FloatingComments = ({
  className,
  color,
  isLeftImage,
  imagesrc,
  text,
}: {
  className?: string
  color: string
  isLeftImage?: boolean
  imagesrc: string
  text: string
}) => {
  return (
    <div className={cn('h-fit w-fit flex gap-[10px] items-center', className)}>
      {isLeftImage && <Image src={imagesrc} alt={''} height={58} width={60.5} />}
      <div
        className="h-[44px] px-[10px] rounded-[22px] flex items-center"
        style={{ backgroundColor: color }}
      >
        <Paragraph className="!text-[14px] leading-[150%] -tracking-[0.54px] px-[18px] pt-[3px]">
          {text}
        </Paragraph>
      </div>
      {!isLeftImage && <Image src={imagesrc} alt={''} height={58} width={60.5} />}
    </div>
  )
}

export default FloatingComments
