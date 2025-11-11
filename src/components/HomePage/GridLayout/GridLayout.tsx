import React from 'react'
import { H2, Paragraph } from '../../typography'
import Image from 'next/image'
import GridText from './GridContent'
import GridContent from './GridContent'

const GridLayout = () => {
  return (
    <div className="h-fit w-fit mx-auto flex max-md:flex-col justify-between gap-[16px] my-[80px]">
      <div className="flex flex-col flex-wrap lg:justify-between gap-[16px] h-fit md:h-[968px] lg:h-[609px] ">
        <div className="h-[217px] md:h-[244px] w-[257px] md:w-[289px] bg-[#ECE8FF] rounded-[19px] p-[22px] flex flex-col justify-between">
          <GridContent
            src="/svg/people.svg"
            alt="people.svg"
            heading="30 +"
            subHeading="TEAM MEMBERS"
          />
        </div>
        <div className="h-[298px] md:h-[345px] w-[257px] md:w-[289px] bg-[#F6FFDB] rounded-[19px] p-[22px] flex flex-col justify-between">
          <GridContent
            src="/svg/claims.svg"
            alt="claims.svg"
            heading="1000 +"
            backgroundColor="#BACC87"
            borderColor="#E7F4BE"
            subHeading="AVERAGE ANNUAL CLAIMS"
          />
        </div>
        <div className="max-lg:order-4 h-[298px] md:h-[335px] w-[257px] md:w-[289px] bg-[#F6FFDB] rounded-[19px] p-[22px] flex flex-col justify-between">
          <GridContent
            src="/svg/claim.svg"
            alt="claim.svg"
            heading="100 +"
            backgroundColor="#BACC87"
            borderColor="#E7F4BE"
            subHeading="CRORE WORTH AVG. ANNUAL CLAIM SETTLEMENT"
          />
        </div>
        <div className="max-lg:order-3 h-[229.5px] md:h-[258px] w-[257px] md:w-[289px] bg-[#ECE8FF] rounded-[19px] p-[22px] flex flex-col justify-between">
          <GridContent
            src="/svg/insurance.svg"
            alt="insurance.svg"
            heading="25 +"
            subHeading="INSURANCE PARTNERS"
          />
        </div>
        <div className="h-[217px] md:h-[244px] w-[257px] md:w-[289px] bg-[#ECE8FF] rounded-[19px] p-[22px] flex flex-col justify-between">
          <GridContent
            src="/svg/client.svg"
            alt="client.svg"
            heading="100 +"
            subHeading="CORPORATE CLIENTS"
          />
        </div>
        <div className="h-[298px] md:h-[341px] w-[257px] md:w-[289px] bg-[#F6FFDB] rounded-[19px] p-[22px] flex flex-col justify-between">
          <GridContent
            src="/svg/ratio.svg"
            alt="ratio.svg"
            heading="97 +"
            backgroundColor="#BACC87"
            borderColor="#E7F4BE"
            subHeading="CLIENT RETENTION RATIO IN %"
          />
        </div>
      </div>
    </div>
  )
}

export default GridLayout
