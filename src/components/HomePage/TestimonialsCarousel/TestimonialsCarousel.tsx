'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import styles from './TestimonialsCarousel.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface Testimonial {
  id: number
  rating: number
  text: string
  company: string
  name: string
  companyName: string
  logo: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: 'The ND Insurance team made the insurance options easy to understand and helped us make well-informed decisions with confidence',
    company: 'GTC Oilfield Services Ltd.',
    name: 'Khushi Gupta ',
    companyName: 'GTC Oilfield Services Ltd.',
    logo: '/logo/gtc.png',
  },
  {
    id: 2,
    rating: 5,
    text: 'We truly appreciate the support of ND Insurance. They not only helped us compare and secure the best quotes from leading insurance companies but also guided us',
    company: 'R. K. Synthesis Ltd',
    name: 'Nihar Patel',
    companyName: 'R. K. Synthesis Ltd',
    logo: '/logo/rk.png',
  },
  {
    id: 3,
    rating: 5,
    text: 'We are truly pleased with the exceptional quality of services extended by the ND Insurance team from premium workings and policy placement to claim settlement',
    company: 'Kosol Energie Pvt. Ltd',
    name: 'Ashish Shah',
    companyName: 'Kosol Energie Pvt. Ltd',
    logo: '/logo/kosol.png',
  },
  {
    id: 4,
    rating: 5,
    text: 'We appreciate ND Insurance Broking’s strategic approach to underwriting, which has helped us secure comprehensive and cost-effective coverage',
    company: 'TechCorp Ltd',
    name: 'Jaydip Patel',
    companyName: 'M M Yarns Pvt. Ltd.',
    logo: '/logo/mm.png',
  },
  {
    id: 5,
    rating: 5,
    text: 'We are truly pleased with the exceptional quality of services extended by the ND Insurance team from premium workings and policy placement to claim settlement',
    company: 'Kosol Energie Pvt. Ltd',
    name: 'Ashish Shah',
    companyName: 'Kosol Energie Pvt. Ltd',
    logo: '/logo/kosol.png',
  },
]

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-4 justify-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className="w-8 h-8"
        fill={i < rating ? '#FCD34D' : '#E5E7EB'}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const CompanyLogo = ({ logo }: { logo: string }) => {
  return <Image src={logo} alt={'logo'} height={84} width={84} className="mx-auto" />
}

export default function TestimonialsCarousel() {
  return (
    <section className="py-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-[96px] md:w-[136px] h-[32px] md:h-[43px] flex items-center justify-center mx-auto pt-1   bg-[#F6FFDB] text-[#161616]  rounded-[40.31px] text-[14px] md:text-[18px] font-[400] mb-4 border-[1.79px] border-[#A9BF6838]">
            Our Clients
          </div>
          <h2 className="text-[26px] md:text-[32px] lg:text-[40px] leading-[121%] font-bold text-[#2C2C2C] mb-8">
            Stories Of Security & Success
          </h2>
        </div>

        <div className="relative mx-auto overflow-hidden">
          <div className={styles.leftOverlay}></div>
          <div className={styles.rightOverlay}></div>

          <Swiper
            modules={[Pagination, Autoplay]}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1.2}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 2.6,
                spaceBetween: 50,
              },
            }}
            className={styles.testimonialsSwiper}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className={`${styles.testimonialCard} bg-white`}>
                  <StarRating rating={testimonial.rating} />
                  <p className="text-gray-700 text-sm md:text-[18px] leading-relaxed text-center flex-grow max-w-[563px] mx-auto">
                    {testimonial.text.split('... Read more')[0]}
                    <Link href={'/testimonials'}>
                      <span className="text-[#4D3E99] cursor-pointer hover:underline">
                        ... Read more
                      </span>
                    </Link>
                  </p>
                  <div className="mt-auto mb-4">
                    <CompanyLogo logo={testimonial.logo} />
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 text-base md:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#4D3E99] font-medium text-sm md:text-base">
                        {testimonial.companyName}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
