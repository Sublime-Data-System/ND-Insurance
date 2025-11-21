import InsuranceBanner from '@/components/HomePage/InsuranceBanner/InsuranceBanner'
import OurProductsTitle from '@/components/Products/OurProductsTitle'
import Products from '@/components/Products/Products'
import { insuranceData, personalInsuranceData } from '@/components/utils'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <OurProductsTitle />
      <Products insuranceData={insuranceData} personalInsuranceData={personalInsuranceData} />
      <InsuranceBanner />
    </>
  )
}

export default page
