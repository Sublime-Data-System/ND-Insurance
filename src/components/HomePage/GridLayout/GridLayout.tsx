import React from 'react'
import { H2, Paragraph } from '../../typography'
import Image from 'next/image'

const GridLayout = () => {
  return (
    <div className="h-fit w-fit mx-auto flex justify-between gap-[16px] my-[80px]">
      <div className="flex flex-col justify-between gap-[16px]">
        <div className="h-[244px] w-[289px] bg-[#ECE8FF] rounded-[19px] p-[22px] flex flex-col justify-between">
          <div className="h-auto">
            <div className="h-[89px] w-[92px] bg-[#A89BE1] border-[4px] border-[#D7D1FC] rounded-full flex justify-center items-center">
              <Image src={'/svg/people.svg'} alt={'people.svg'} height={34} width={34} />
            </div>
          </div>
          <div className="h-auto">
            <H2 className="!leading-[121%]">30 +</H2>
            <Paragraph className="text-[#858585] italic text-[20px]">TEAM MEMBERS</Paragraph>
          </div>
        </div>
        <div className="h-[345px] w-[289px] bg-[#F6FFDB] rounded-[19px] p-[22px] flex flex-col justify-between">
          <div className="h-auto">
            <div className="h-[89px] w-[92px] bg-[#BACC87] border-[4px] border-[#E7F4BE] rounded-full flex justify-center items-center">
              <Image src={'/svg/claims.svg'} alt={'claims.svg'} height={34} width={34} />
            </div>
          </div>
          <div className="h-auto">
            <H2 className="!leading-[121%]">1000 +</H2>
            <Paragraph className="text-[#858585] italic text-[20px]">
              AVERAGE ANNUAL CLAIMS
            </Paragraph>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-[16px]">
        <div className="h-[335px] w-[289px] bg-[#F6FFDB] rounded-[19px] p-[22px] flex flex-col justify-between">
          <div className="h-auto">
            <div className="h-[89px] w-[92px] bg-[#BACC87] border-[4px] border-[#E7F4BE]  rounded-full flex justify-center items-center">
              <Image src={'/svg/claim.svg'} alt={'claim.svg'} height={34} width={34} />
            </div>
          </div>
          <div className="h-auto">
            <H2 className="!leading-[121%]">100 +</H2>
            <Paragraph className="text-[#858585] italic text-[20px]">
              CRORE WORTH AVG. ANNUAL CLAIM SETTLEMENT
            </Paragraph>
          </div>
        </div>
        <div className="h-[258px] w-[289px] bg-[#ECE8FF] rounded-[19px] p-[22px] flex flex-col justify-between">
          <div className="h-auto">
            <div className="h-[89px] w-[92px] bg-[#A89BE1] border-[4px] border-[#D7D1FC] rounded-full flex justify-center items-center">
              <Image src={'/svg/insurance.svg'} alt={'insurance.svg'} height={34} width={34} />
            </div>
          </div>
          <div className="h-auto">
            <H2 className="!leading-[121%]">25 +</H2>
            <Paragraph className="text-[#858585] italic text-[20px]">INSURANCE PARTNERS</Paragraph>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-[16px]">
        <div className="h-[244px] w-[289px] bg-[#ECE8FF] rounded-[19px] p-[22px] flex flex-col justify-between">
          <div className="h-auto">
            <div className="h-[89px] w-[92px] bg-[#A89BE1] border-[4px] border-[#D7D1FC] rounded-full flex justify-center items-center">
              <Image src={'/svg/client.svg'} alt={'client.svg'} height={34} width={34} />
            </div>
          </div>
          <div className="h-auto">
            <H2 className="!leading-[121%]">100 +</H2>
            <Paragraph className="text-[#858585] italic text-[20px]">CORPORATE CLIENTS</Paragraph>
          </div>
        </div>
        <div className="h-[341px] w-[289px] bg-[#F6FFDB] rounded-[19px] p-[22px] flex flex-col justify-between">
          <div className="h-auto">
            <div className="h-[89px] w-[92px] bg-[#BACC87] border-[4px] border-[#E7F4BE] rounded-full flex justify-center items-center">
              <Image src={'/svg/ratio.svg'} alt={'ratio.svg'} height={34} width={34} />
            </div>
          </div>
          <div className="h-auto">
            <H2 className="!leading-[121%]">97 +</H2>
            <Paragraph className="text-[#858585] italic text-[20px]">
              CLIENT RETENTION RATIO IN %
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridLayout
