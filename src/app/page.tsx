import GridLayout from '@/components/HomePage/GridLayout/GridLayout'
import Hero from '@/components/HomePage/HeroSection/Hero'
import IndustriesSection from '@/components/HomePage/IndustriesSection/IndustriesSection'
import InsuranceBanner from '@/components/HomePage/InsuranceBanner/InsuranceBanner'
import ProductList from '@/components/HomePage/ProductList/ProductList'
import ServicesSection from '@/components/HomePage/ServicesSection/ServicesSection'
import TestimonialsCarousel from '@/components/HomePage/TestimonialsCarousel/TestimonialsCarousel'

export default function Home() {
  return (
    <div className="  bg-gray-50">
      <Hero />
      <ProductList />
      <GridLayout />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsCarousel />
      <InsuranceBanner />
    </div>
  )
}
