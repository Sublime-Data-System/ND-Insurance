'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '../HomePage/ProductList/ProductCard'
import Image from 'next/image'
import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog'
import { H2, H6 } from '../typography'
import ModalLeft from './ModalLeft'
import ModalRight from './ModalRight'
import { Switch } from '../ui/switch'
import InsuranceBanner from '../HomePage/InsuranceBanner/InsuranceBanner'
import { cn } from '@/lib/utils'
import { DialogTitle } from '@radix-ui/react-dialog'

type Product = {
  title: string
  image: React.ReactNode
  tags: string[]
  primaryDesc: string
  secondaryDesc: string
  descList: string[]
}

const Products = ({
  insuranceData,
  personalInsuranceData,
}: {
  insuranceData: Product[]
  personalInsuranceData: Product[]
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>()
  const [isCorporate, setIsCorporate] = useState(true)
  const [productData, setProductData] = useState<Product[]>([])

  useEffect(() => {
    if (isCorporate) {
      setProductData(insuranceData)
    } else {
      setProductData(personalInsuranceData)
    }
  }, [isCorporate, insuranceData, personalInsuranceData])

  return (
    <>
      <div className="w-full h-auto mt-8">
        <div className="mx-auto text-[18px] gotham h-[43px] w-[136px] rounded-[40px] bg-[#F6FFDB] border-[#A9BF6838] border-[1.79px] flex items-center justify-center">
          Products
        </div>
      </div>
      <H2 className="text-center font-[700] mt-2"> Our Core Products</H2>
      <div className="w-fit h-fit mx-auto mt-[25px] mb-[50px] flex items-center gap-[10px] md:gap-[16px]">
        <H6 className={cn('w-[76px] md:w-[112px]', isCorporate ? 'text-[#4D3E99]' : '')}>
          <i>Corporate Solution</i>
        </H6>
        <Switch
          className="h-[50px] w-[120px] md:w-[163px] md:h-[68px]"
          onClick={() => {
            setIsCorporate((prev) => !prev)
          }}
        />
        <H6 className={cn('w-[65px] md:w-[132px]', !isCorporate ? 'text-[#7B8659]' : '')}>
          <i>Personal Solution</i>
        </H6>
      </div>
      <Dialog>
        <div className="max-w-[307px] md:max-w-[635px] lg:max-w-[960px] h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 mx-auto">
          {productData.map((data, index) => (
            <ProductCard
              key={index + data.title}
              children={data.image}
              title={data.title}
              tags={data.tags}
              isPersonal={!isCorporate}
              product={data}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>

        <DialogContent
          showCloseButton={false}
          className="md:w-[634px] lg:w-[933px] max-w-[933px]! p-8! h-fit md:min-h-[679px] lg:min-h-[495px] border-2! border-[#E9E5FF]! rounded-[22px]"
        >
          <DialogTitle className="hidden"></DialogTitle>
          <div className="w-full md:h-fit lg:h-full flex md:flex-col lg:flex-row gap-8 relative ">
            <ModalLeft
              tags={selectedProduct?.tags}
              title={selectedProduct?.title}
              image={selectedProduct?.modalImage || selectedProduct?.image}
            />
            <ModalRight
              primaryDesc={selectedProduct?.primaryDesc}
              secondaryDesc={selectedProduct?.secondaryDesc}
              descList={selectedProduct?.descList}
            />
            <DialogClose className="absolute -top-1 right-2">
              <div className=" h-[50px] w-[50px] rounded-full bg-[#9A8BE6]  border-[2.7px] border-[#E0DAFF] "></div>
            </DialogClose>{' '}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Products
