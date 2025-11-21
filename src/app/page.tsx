import Hero from '@/components/HomePage/HeroSection/Hero'
import InsuranceBanner from '@/components/HomePage/InsuranceBanner/InsuranceBanner'
import Products from '@/components/Products/Products'
import { insuranceData, personalInsuranceData } from '@/components/utils'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="  bg-gray-50">
      <Hero />
      <div className="mt-20">
        <Products
          insuranceData={insuranceData.slice(0, 3)}
          personalInsuranceData={personalInsuranceData.slice(0, 3)}
        />
        <div className="w-full flex justify-center">
          <Link href={'/our-products'}>
            <button className="w-[263px] h-[65px] rounded-[45px] bg-[#4D3E99] text-white text-[21px] mx-auto hover:bg-[#2F2F2F]">
              View All Products
            </button>
          </Link>
        </div>
      </div>
      <InsuranceBanner />
    </div>
  )
}
