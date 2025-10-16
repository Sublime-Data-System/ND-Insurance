import { H2, H6, H7, Paragraph } from '@/components/typography'
import React from 'react'
import ProductCard from './ProductCard'
import Image from 'next/image'
import { Switch } from '@/components/ui/switch'

const ProductList = () => {
  return (
    <div className="w-full h-auto mx-auto my-[80px] sm:my-[120px]">
      <div className="h-[32px] sm:h-[43px] w-[107px] sm:w-[136px] border-[1.8px] border-[#A9BF6838] bg-[#F6FFDB] mx-auto font-[350] rounded-[40px] flex justify-center items-center">
        <Paragraph className="leading-[100%] -tracking-[0.72px] pt-1">Products</Paragraph>
      </div>
      <H2 className="text-center font-[700] my-[10px]"> Our Core Products</H2>

      <div className="w-fit h-fit mx-auto my-[50px] flex items-center gap-[10px] md:gap-[16px]">
        <H6 className="w-[76px] md:w-[112px]">
          <i>Corporate Solution</i>
        </H6>
        <Switch className="h-[50px] w-[120px] md:w-[163px] md:h-[68px]" />
        <H6 className="w-[65px] md:w-[132px]">
          <i>Personal Solution</i>
        </H6>
      </div>

      <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center gap-[16px] pt-[10px]">
        <ProductCard>
          <Image
            src={'/images/building.png'}
            height={149.5}
            width={122.5}
            alt={'Building.png'}
            className="absolute -bottom-3 "
            style={{ left: 'calc(50% - 56px)' }}
          />
        </ProductCard>

        <ProductCard>
          <Image
            src={'/images/construction.png'}
            height={228}
            width={228}
            alt={'Building.png'}
            className="absolute -bottom-3 left-[20px]"
          />
        </ProductCard>

        <ProductCard>
          <Image
            src={'/images/boat.png'}
            height={107}
            width={306}
            alt={'Building.png'}
            className="absolute -bottom-0 "
            style={{ right: '0px', width: '306px', height: '107px' }}
            unoptimized
          />
        </ProductCard>
      </div>

      <div className="w-full flex justify-between my-[40px]">
        <button className="h-[65px] w-[263px] bg-[#4D3E99] mx-auto rounded-[45px]">
          <H7 className="text-white">View All Products</H7>
        </button>
      </div>
    </div>
  )
}

export default ProductList
