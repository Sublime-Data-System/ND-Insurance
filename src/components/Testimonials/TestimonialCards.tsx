import React from 'react'
import { H1Grey, H5, Paragraph } from '../typography'
import Image from 'next/image'
import TestimonialRating from './TestimonialRating'

const TestimonialCards = () => {
  return (
    <div className="w-[310px] md:w-[729px] lg:w-5xl px-2 mx-auto flex flex-col gap-7">
      <div
        className="w-full p-6 lg:p-8 bg-white border-2 border-[#E9E5FF] flex max-md:flex-col gap-6 items-stretch rounded-3xl"
        style={{ boxShadow: '0px 4.03px 41px 5.04px #00000008' }}
      >
        <div className="w-full md:w-[248px] max-md:h-[183px] lg:w-80 bg-[#F6FFDB] rounded-[21px] lg:rounded-[42px] max-md:order-2 max-md:px-2.5 p-5 lg:p-7 flex flex-col justify-between">
          <div className="h-[55px]">
            <H1Grey className="text-[128px] leading-[100%]!  text-[#ADBC82] flex">“</H1Grey>
          </div>
          <div className="w-full h-auto flex gap-2.5 md:gap-5 items-center">
            <div className="w-[42px] h-[40px] rounded-full border-2 border-[#D9D9D9] relative">
              <Image src={'/images/user/user1.png'} alt={''} fill />
            </div>
            <div>
              <H5 className="text-[18px]!">Ashish Shah</H5>
              <H5 className="text-[14px]! text-[#4D3E99]">President - Finance</H5>
              <Paragraph className="text-[14px]! text-[#4D3E99]">Kosol Energie Pvt. Ltd</Paragraph>
            </div>
          </div>
        </div>
        <div className="flex-1 max-md:order-1">
          <div className="flex justify-between items-center mb-7">
            <Image
              src="/logo/kosol.png"
              alt="kosol"
              height={73}
              width={132}
              className="h-[59px] md:h-[73px]"
            />

            <TestimonialRating />
          </div>
          <Paragraph className="!text-[16px] text-[#5A5A5A]">
            We are truly pleased with the exceptional quality of services extended by the ND
            Insurance team — from premium workings and policy placement to claim settlement and
            ongoing servicing. Your proactive approach, in-depth knowledge, and consistent support
            have added immense value to our insurance portfolio and instilled great confidence.
          </Paragraph>
          <Paragraph className="!text-[16px] text-[#5A5A5A] mt-5">
            We deeply appreciate your dedication and professionalism, which reflect a strong
            customer-centric ethos and make you a truly trusted and dependable partner in our growth
            journey.
          </Paragraph>
        </div>
      </div>
      <div className="w-full flex max-lg:flex-col gap-7">
        <div
          className="w-full lg:w-[389px] bg-white border-2 border-[#E9E5FF] p-6 rounded-3xl flex max-md:flex-col lg:flex-col max-lg:items-stretch gap-7 lg:justify-between"
          style={{ boxShadow: '0px 4.03px 41px 5.04px #00000008' }}
        >
          <div className="max-lg:flex-1 max-md:order-1 max-lg:order-2">
            <div className=" lg:w-full flex  justify-between items-center">
              <Image
                src="/logo/mm.png"
                alt="MM Group"
                height={58}
                width={196}
                className="h-[58px] max-md:hidden"
              />

              <Image
                src="/logo/mm.png"
                alt="MM Group"
                height={50}
                width={169}
                className="h-[50px] md:hidden"
              />

              <TestimonialRating />
            </div>

            <Paragraph className="!text-[16px] text-[#5A5A5A] mt-7">
              We appreciate ND Insurance Broking’s strategic approach to underwriting, which has
              helped us secure comprehensive and cost-effective coverage. Their claims handling is
              equally impressive — responsive, professional, and always in our best interest. Their
              reliability and expertise make them a valuable partner.
            </Paragraph>
          </div>

          <div className="w-full md:w-[248px] lg:w-full max-md:h-[168px] lg:h-40 rounded-3xl bg-[#F5F5F5] max-md:order-2 max-lg:order-1 flex flex-col justify-between max-md:px-3 py-3 px-5 ">
            <div className="h-[55px]">
              <H1Grey className="text-[128px] leading-[100%]!  text-[#464746] flex">“</H1Grey>
            </div>
            <div className="w-full h-auto flex gap-2.5 md:gap-5 items-center">
              <div className="w-[42px] h-[40px] rounded-full border-2 border-[#D9D9D9] relative">
                <Image src={'/images/user/user4.png'} alt={''} fill />
              </div>
              <div>
                <H5 className="text-[18px]!">Jaydip Patel</H5>
                <Paragraph className="text-[14px]! text-[#4D3E99]">M M Yarns Pvt. Ltd.</Paragraph>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex-1 bg-white border-2 border-[#E9E5FF] p-6 rounded-3xl flex max-md:flex-col lg:flex-col gap-7"
          style={{ boxShadow: '0px 4.03px 41px 5.04px #00000008' }}
        >
          <div className="max-lg:flex-1 max-md:order-1 max-lg:order-2">
            <div className="w-full flex justify-between items-center">
              <Image
                src="/logo/rk.png"
                alt="RK"
                height={93}
                width={92}
                className="w-[86px] md:w-[93px]"
              />

              <TestimonialRating />
            </div>

            <Paragraph className="!text-[16px] text-[#5A5A5A] mt-7">
              We truly appreciate the support of ND Insurance. They not only helped us compare and
              secure the best quotes from leading insurance companies but also guided us with their
              in-depth technical knowledge on proper coverage. Their timely assistance during claim
              settlements has given us great confidence and peace of mind. We completely rely on
              them for all insurance needs, highly reliable!! 
            </Paragraph>
          </div>

          <div className="w-full md:w-[248px] lg:w-full max-md:h-[183px] lg:h-48 rounded-3xl bg-[#E9E5FF] max-md:order-2 max-lg:order-1 max-md:px-3  p-5 flex flex-col justify-between">
            <div className="h-[55px]">
              <H1Grey className="text-[128px] leading-[100%]!  text-[#464746] flex">“</H1Grey>
            </div>
            <div className="w-full h-auto flex gap-2.5 md:gap-5 items-center">
              <div className="w-[42px] h-[40px] rounded-full border-2 border-[#D9D9D9] relative">
                <Image src={'/images/user/user4.png'} alt={''} fill />
              </div>
              <div>
                <H5 className="text-[18px]!">Nihar Patel</H5>
                <H5 className="text-[14px]! text-[#4D3E99]">Director</H5>
                <Paragraph className="text-[14px]! text-[#4D3E99]">R. K. Synthesis Ltd</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full p-6 lg:p-8 bg-white border-2 border-[#E9E5FF] flex max-md:flex-col gap-6 items-stretch rounded-3xl"
        style={{ boxShadow: '0px 4.03px 41px 5.04px #00000008' }}
      >
        <div className="w-full md:w-[248px] max-md:h-[183px] lg:w-80 bg-[#F6FFDB] rounded-[21px] lg:rounded-[42px] max-md:order-2 flex flex-col justify-between max-md:px-3 p-5 lg:p-7">
          <div className="h-[55px]">
            <H1Grey className="text-[128px] leading-[100%]!  text-[#ADBC82] flex">“</H1Grey>
          </div>
          <div className="w-full h-auto flex gap-2.5 md:gap-5 items-center">
            <div className="w-[42px] h-[40px] rounded-full border-2 border-[#D9D9D9] relative">
              <Image src={'/images/user/user2.png'} alt={''} fill />
            </div>
            <div>
              <H5 className="text-[18px]!">Khushi Gupta </H5>
              <Paragraph className="text-[14px]! text-[#4D3E99]">
                GTC Oilfield Services Ltd.
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex-1 max-md:order-1">
          <div className="flex justify-between mb-7 items-center">
            <Image
              src="/logo/gtc.png"
              alt="gtc"
              height={110}
              width={110}
              className="h-[82px] md:h-[110px]"
              style={{ height: `${110}px` }}
            />

            <TestimonialRating />
          </div>
          <Paragraph className="!text-[16px] text-[#5A5A5A]">
            The ND Insurance team made the insurance options easy to understand and helped us make
            well-informed decisions with confidence. The timely support and personalized approach
            were especially impressive, and it gave us a sense of assurance that our needs were
            being genuinely taken care of. Overall, our experience has been very positive, and we
            would be happy to recommend ND Insurance Broking to others seeking reliable insurance
            advice.
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCards
