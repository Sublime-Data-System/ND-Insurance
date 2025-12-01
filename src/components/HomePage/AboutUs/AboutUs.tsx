import { Check, ChevronDown, Minus, Shield } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  const industries = [
    'Pharmaceuticals',
    'Educational Institutes',
    'Financial Institutes',
    'Software & Technology',
    'Hospitality & Jewellers',
    'Garment Manufactures',
  ]
  return (
    <div className="my-20 sm:my-28">
      <div className="text-[14px] md:text-[18px] w-[90px] sm:w-[121px] h-[32px] sm:h-[43px] pt-1 mx-auto border-[1.8px] border-[#A9BF6838] flex justify-center items-center bg-[#F6FFDB] rounded-[40px]">
        About Us
      </div>
      <h3 className="text-[26px] md:text-[32px] lg:text-[40px] font-bold leading-[121%] -tracking-[1.2px] text-center my-5 mb-10">
        Get To Know Us
      </h3>
      <div className="flex flex-wrap justify-center gap-5 max-sm:gap-10 max-xl:gap-20">
        <div className="w-[331px] sm:w-[405px] h-[373px] sm:h-[383px] rounded-[41px] bg-[#DFEDB5]">
          <h2 className="font-bold text-[32px] text-[#6F8925] leading-[121%] px-8 pt-4 sm:pt-8">
            20+
          </h2>
          <p className="text-[#6F8925AD] text-[32px] leading-[121%]  px-8">Industries</p>
          <div className="w-full flex justify-center">
            <div className="w-[294px] sm:w-[321px] h-[268px] sm:h-[285px] bg-white rounded-t-[13px] relative top-3 sm:top-5 px-5 ">
              <Minus className="mx-auto" strokeWidth={4} size={41} fill="#CDCFD0" color="#CDCFD0" />
              {industries.map((data, index) => {
                return (
                  <div className="flex justify-between items-center mt-3" key={data + index}>
                    <p className="text-[16px]">{data}</p>
                    <div className="h-[20px] w-[20px] rounded-[3.45px] bg-[#4D3E99] flex items-center justify-center">
                      <Check color="#fff" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="w-[331px] sm:w-[405px] h-[373px] sm:h-[383px] rounded-[41px] bg-[#F3F3F3] flex justify-center">
          <div className="w-[293px] sm:w-[339px] h-[213px] sm:h-[277px] bg-white rounded-b-[24px] rounded-bl-[24px] relative pt-6">
            <p className="w-[264px] sm:w-[305px] text-[#2A2A2A] text-center mx-auto text-[18px]">
              We provide <span className="text-[#4D3E99]">expert insurance</span> &{' '}
              <span className="text-[#4D3E99]">risk management services</span> for{' '}
              <span className="text-[#4D3E99]">B2C</span> and{' '}
              <span className="text-[#4D3E99]">B2B</span> — renowned for our{' '}
              <span className="text-[#4D3E99]">claim settlement</span> strength and{' '}
              <span className="text-[#4D3E99]">long-term client trust.</span>
            </p>
            <div className="absolute w-[259px] h-[136px] flex flex-col rounded-[12px] border-[1px] border-[#00000021] bg-white -bottom-30 sm:-bottom-14 left-5 sm:left-12 rotate-[4deg]">
              <div className="w-full h-[calc(100%-33px)] p-4 flex gap-5">
                <div className="w-[36px] h-[39px] rounded-[5px] bg-[#C8D899] flex items-center justify-center">
                  <Shield color={'#F6FFDB'} />
                </div>
                <div className="h-full">
                  <h5 className="text-[12px] -tracking-[0.24px]">Insurance Policy for you</h5>
                  <div className="w-full flex justify-between mt-2">
                    <p className="text-[#858585] text-[10px]">Valid till</p>
                    <p className="text-[#858585] text-[10px]">2030</p>
                  </div>
                  <button className="w-[92px] h-[24px] rounded-[24px] bg-[#F6FFDB] text-[10px] mt-2">
                    Best policy
                  </button>
                </div>
              </div>
              <div className="h-[33px] w-full bg-[#E6EFF0] rounded-b-[12px] flex items-center px-4 justify-between">
                <p className="text-[10px] text-[#858585]">Know more about policy</p>
                <p className="text-[10px] text-[#4D3E99]  flex items-center">
                  Click here <ChevronDown color={'#4D3E99'} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[331px] sm:w-[405px] h-[373px] sm:h-[383px] rounded-[41px] bg-[#4D3E99] relative">
          <h2 className="font-bold text-[32px] text-[#fff] leading-[121%] px-8 pt-8">5000+</h2>
          <p className="text-[#FFFFFFAD] text-[26px] sm:text-[32px] leading-[121%]  pl-8">
            Individual Customers
          </p>
          <div className="w-[287px] sm:w-[339px] h-[234px] sm:h-[284px] bg-white rounded-t-[20px] absolute bottom-0 sm:-bottom-10 left-6 sm:left-8 py-8">
            <h3 className=" text-[20px] sm:text-[24px] leading-[33px] w-[296px] font-bold -tracking-[0.99px] text-center mx-auto text-[#4D3E99]">
              Quick Policy, Zero Hassle
            </h3>
            <h3 className=" text-[20px] sm:text-[24px] leading-[33px] w-[296px] font-bold -tracking-[0.99px] text-center mx-auto text-[#4D3E99]">
              Get Insured Today !
            </h3>
            <h3 className=" text-[20px] sm:text-[24px] leading-[33px] w-[296px] font-bold -tracking-[0.99px] text-center mx-auto">
              Lets Talk 👇
            </h3>
            <div className="flex justify-center mt-5">
              <Link href={'/contact-us'}>
                <button className="h-[59px] w-[164px] rounded-[45px] bg-black text-white text-[21px] -tracking-[0.84px]">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
