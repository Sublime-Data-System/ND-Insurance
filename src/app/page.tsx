import GridLayout from '@/components/HomePage/GridLayout/GridLayout'
import Hero from '@/components/HomePage/HeroSection/Hero'
import InsuranceBanner from '@/components/HomePage/InsuranceBanner/InsuranceBanner'
import ProductList from '@/components/HomePage/ProductList/ProductList'

export default function Home() {
  return (
    <div className="  bg-gray-50">
      <Hero />
      <ProductList />
      <GridLayout />
      <InsuranceBanner />
    </div>
  )
}
