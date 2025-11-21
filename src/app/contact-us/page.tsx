import ContactCard from '@/components/ContactUs/ContactCard'
import VisitUs from '@/components/ContactUs/VisitUs'
import Image from 'next/image'
import React, { ReactElement, useState } from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 max-md:pt-10 px-0 p-4 sm:p-8 md:p-12 font-inter flex items-center justify-center">
      <div
        className="w-full max-w-[330px] md:max-w-[716px] xxl:max-w-7xl min-h-[725px] bg-white rounded-[25px] border-[#E9E5FF] border-[2px] p-4 md:p-6"
        style={{ boxShadow: '0px 4.03px 41px 5.04px #00000008' }}
      >
        <div className="flex max-md:flex-col flex-wrap gap-10 justify-between h-fit">
          <div className="h-[660px] md:h-[470px] xxl:h-[692px] relative px-4 py-12 md:p-10 md:py-14 bg-lime-50 rounded-3xl w-full max-md:w-[292px] xxl:w-[504px] flex max-md:flex-col xxl:flex-col justify-start">
            <div className="w-[216px] xxl:w-full">
              <h1 className="text-[26px] md:text-[30px] xxl:text-[32px] text-[#4D3E99] font-bold leading-[131%] -tracking-[0.96px]">
                Let's Insure Your Tomorrow!
              </h1>
              <p className="text-[26px] md:text-[30px] xxl:text-[32px] -tracking-[0.64px] font-bold text-gray-700 mb-8 font-['Gotham Bold']">
                Get In Touch With Us <span className="text-2xl">📞</span>
              </p>
            </div>

            <div className="bg-white p-4 rounded-[21px] border-[#E9E5FF] border-[2px] h-[376px] w-[262px] md:w-[325px] mx-auto ">
              <div className="h-[194px] bg-[#EDEEF7] rounded-[8px] flex flex-col p-3 gap-4 justify-center">
                <div className="flex items-center justify-end gap-2">
                  <div className="h-[30px] w-[30px] border-2 border-[#D7E5AE] rounded-full relative">
                    <Image src={'/images/user/user3.png'} alt={''} fill />
                  </div>
                  <div className="h-[55px] w-[183px] rounded-[9.5px] bg-[#FFFFFF] flex justify-center items-center">
                    <p className="text-[14px] leading-[18px] -tracking-[0.28px] w-[149px]">
                      Can I insure my home quickly?
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-2">
                  <div className="h-[108px]  md:h-[80px] w-[150px] md:w-[240px] rounded-[9.5px] bg-[#C8D899] flex justify-center items-center">
                    <p className="text-[14px] leading-[18px] -tracking-[0.28px] w-[116px] md:w-[197px]">
                      Definitely! We’ll compare options and secure the right coverage for you !
                    </p>
                  </div>
                  <div className="h-[30px] w-[30px] border-2 border-[#D7E5AE] rounded-full relative flex justify-center items-center">
                    <Image src={'/images/user/nd_user.png'} alt={''} height={15} width={23} />
                  </div>
                </div>
              </div>
              <p className="text-[20px] md:text-[22px] text-[#41357B] mt-3.5 flex items-center gap-1">
                Chat With Us Live{'  '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <rect width="18" height="18" rx="9" fill="#F60000" fillOpacity="0.25" />
                  <rect
                    x="6.04688"
                    y="5.34668"
                    width="6.04679"
                    height="6.34682"
                    rx="3.0234"
                    fill="#F60000"
                  />
                </svg>
              </p>
              <button className="w-[172px] md:w-[181px] h-[56px] md:h-[60px] rounded-[45px] bg-[#2F2F2F] hover:bg-[#4D3E99] text-[white] text-[18px] md:text-[21px] mt-4">
                Connect Now
              </button>
            </div>
          </div>

          <div className="space-y-8 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ContactCard
                icon="PhoneCall"
                title="Call Us Now"
                subtitle="Mon to Sat 10am to 6:30pm"
                buttonText="+919274415148"
                buttonUrl="+919274415148"
                isLink={true}
              />

              <ContactCard
                icon="Mail"
                title="Email Us"
                subtitle="Email us we're ready to assist!"
                buttonText="info@ndinsurance.in"
                buttonUrl="mailto:info@ndinsurance.in"
                isLink={true}
              />
            </div>

            {/* Bottom Row: Visit Us */}
            <VisitUs />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
