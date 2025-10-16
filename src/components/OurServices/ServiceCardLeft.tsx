import React from 'react'
import { H2 } from '../typography'
import Image from 'next/image'
import { log } from 'console'

const ServiceCardLeft = ({
  isOdd,
  title,
  logo,
}: {
  isOdd: boolean
  title: string
  logo: string
}) => {
  const borderColor = isOdd ? '#D7D1FC' : '#E7F4BE'
  const backgroundColor = isOdd ? '#A89BE1' : '#C3D09A'

  return (
    <div className=" max-xl:flex max-md:flex-col md:items-center gap-4 md:gap-7">
      <div
        className="aspect-square max-md:w-[89px] h-[89px] xl:h-28 border-[5px] rounded-full flex items-center justify-center"
        style={{ borderColor, backgroundColor }}
      >
        <Image
          src={`/svg/${logo}`}
          alt={logo}
          height={50}
          width={50}
          className="w-[34px] xl:w-[50px]"
        />
      </div>
      <div className="w-64 xl:w-52 xl:mt-7">
        <i>
          <H2 className="max-xl:text-[26px] xl:text-[36px]">{title}</H2>
        </i>
      </div>
    </div>
  )
}

export default ServiceCardLeft
