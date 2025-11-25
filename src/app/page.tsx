import Hero from '@/components/HomePage/HeroSection/Hero'
import IndustriesSection from '@/components/HomePage/IndustriesSection/IndustriesSection'
import InsuranceBanner from '@/components/HomePage/InsuranceBanner/InsuranceBanner'
import ServicesSection from '@/components/HomePage/ServicesSection/ServicesSection'
import TestimonialsCarousel from '@/components/HomePage/TestimonialsCarousel/TestimonialsCarousel'
import WhyUs from '@/components/HomePage/WhyUs/WhyUs'
import Products from '@/components/Products/Products'
import { insuranceData, personalInsuranceData } from '@/components/utils'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-[#ffffff]">
      <Hero />
      <GridLayout />
      <TestimonialsCarousel />
      <ServicesSection />
      <IndustriesSection />
      <WhyUs />
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
