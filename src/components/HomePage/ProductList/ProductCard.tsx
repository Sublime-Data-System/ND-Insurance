'use client'
import { H5, Paragraph } from '@/components/typography'
import { ArrowUp } from 'lucide-react'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import { DialogTrigger } from '@/components/ui/dialog'
import { cn } from '@/lib/utils'

type Product = {
  title: string
  image: React.ReactNode
  tags: string[]
  primaryDesc: string
  secondaryDesc: string
  descList: string[]
}

const ProductCard = ({
  children,
  title,
  tags,
  isPersonal,
  product,
  setSelectedProduct,
}: {
  children: ReactNode
  title: string
  tags: string[]
  isPersonal: boolean
  product: Product
  setSelectedProduct: Dispatch<SetStateAction<Product | undefined>>
}) => {
  const arr = ['Fire Insurance', 'Erection All Risk', 'Erection All Risk', 'Construction All Risk']
  return (
    <div className="h-[364px] w-[307px] rounded-[19px] border-[2px] border-[#E9E5FF] p-[13px] flex flex-col">
      <div className="w-full h-[183.34px] bg-[#F5F5F5] rounded-[13px] relative">
        {children}
        <DialogTrigger>
          <div
            className={cn(
              'h-11 w-11 flex items-center justify-center  border-2 rounded-full absolute right-2.5 top-2.5',
              isPersonal ? 'bg-[#9FC03B] border-[#DFEDB5]' : 'bg-[#9A8BE6] border-[#E0DAFF] ',
            )}
            onClick={() => setSelectedProduct(product)}
          >
            <ArrowUp className="text-white transform rotate-[45deg]" />
          </div>
        </DialogTrigger>
      </div>
      <div className=" pt-5 pl-[0px]">
        <H5 className="text-[#41357B] pl-[6px] text-[22px]!">{title}</H5>
        <div className="w-full h-auto flex flex-wrap gap-[5px] mt-[14px] ">
          {tags.map((data, index) => {
            console.log(data + index + 'card')
            return (
              <div
                key={index + Math.random() + data.replace(' ', '-')}
                className={cn(
                  'h-[28.5px] rounded-[26.7px] w-fit mt-[3px]  border-[1.19px] border-[#A9BF6838] px-[8px] flex justify-center items-center',
                  isPersonal
                    ? 'bg-[#DFEDB5] border-[#A9BF6838]'
                    : 'bg-[#ECE8FF] border-[#A9BF6838]',
                )}
              >
                <Paragraph className="!text-[12px] !leading-[100%]">{data}</Paragraph>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
