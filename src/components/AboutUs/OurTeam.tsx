import React from 'react'
import Team from './Team'
import ServiceBanner from '../OurServices/ServiceBanner'
import AboutUsTitle from './AboutUsTitle'
import Banner from './Banner'

const OurTeam = () => {
  const team = [
    {
      name: 'Parth Desai',
      role: 'Managing Director',
      image: '/images/about-us/parth-desai.png', // replace with actual path
      imageSm: '/images/about-us/parth-desai-sm.png',
      bio: [
        'Parth is an Electronics & Communications Engineer from Gujarat University, with a MS in EE VLSI from University of Southern California, Los Angeles, USA. He worked in the Silicon Valley as a chip design engineer at Altera Corporation, before joining the insurance industry in India in 2013.',
        'Parth is an active member of the Gujarat Chamber of Commerce & Industries – Youth Wing (GCCI-YW), having served as its Chairman in 2020-2021. He is currently the Chairperson of the Insurance Task Force at GCCI.',
        'He is also currently the Joint Secretary at TiE Ahmedabad and a Governing Council Member at FICCI and Indian Chamber of Commerce (ICC).',
      ],
      linkedin: 'https://linkedin.com/in/', // add link
    },
    {
      name: 'Dhruv Desai',
      role: 'Principal Officer',
      image: '/images/about-us/dhruv-desai.png', // replace with actual path
      imageSm: '/images/about-us/dhruv-desai-sm.png',
      bio: [
        'Dhruv is an engineer (Electronics & Communications) from Gujarat Technological University and a has a MS in Insurance and Risk Management from Cass (now Bayes) Business School, City University, London. He is one of the youngest ACII (Associate of the Chartered Insurance Institute) London and now a Chartered Broker registered at CII, London. He is a part of the insurance industry in India since 2012.',
        'He served as the Chairman of Young Indians (Yi) , youth wing of Confederation of Indian Industries (CII) for 2 years (2020-2021), thereby assuming various regional leadership roles and is currently in the National Management Team as the Branding & PR Chair for Yi. At CII, he is a part of the Policy & Advocacy Panel for CII Gujarat State Council. He is also an Honorary Secretary at India SME Forum and a Director at United Bank.',
      ],
      linkedin: 'https://linkedin.com/in/', // add link
    },
    {
      name: 'Bijal Desai',
      role: 'Chief Operating Officer',
      image: '/images/about-us/bijal-desai.png', // replace with actual path
      imageSm: '/images/about-us/bijal-desai-sm.png',
      bio: [
        'Bijal is also an Electronics & Communications engineer from Gujarat Technological University and  has a MS in Information Systems and Operations Management from University of Florida, USA. \nShe has worked at Pricewaterhouse Coopers, Atlanta and then later Ernst & Young Tampa, Florida for 2 years as an IT Risk Auditor, handling Fortune 500 clients. \nBijal is a part of the insurance industry since 2018.\n She is an Executive Council Member of Young Indians (Yi) since 2022, handling various nation building initiatives and is also a Committee Member at Confederation of All Indian Traders (CAIT)-  Young Entrepreneurs (YE) since 2021.',
      ],
      linkedin: 'https://linkedin.com/in/', // add link
    },
    {
      name: 'Naiyra Ashra',
      role: 'Manager, Accounts',
      image: '/images/about-us/naiyra-ashra.png', // replace with actual path
      imageSm: '/images/about-us/naiyra-ashra-sm.png',
      bio: [
        'Naiya is a Bachelor of Commerce with more than 20 years of experience in accounting and insurance. \nShe heads our Accounts Department.',
      ],
      linkedin: 'https://linkedin.com/in/', // add link
    },
  ]

  return (
    <>
      <AboutUsTitle />
      <Banner />
      <div className="w-full flex flex-col gap-5 ">
        <div className="pt-1 h-[32px] md:h-[45px] rounded-[42px] bg-[#F6FFDB] border-2 border-[#A9BF6838] w-[91px]  md:w-[131px] mx-auto mb-5 mt-14 flex items-center justify-center text-[14px] md:text-[18px]">
          Our Team
        </div>
        <h4 className="text-[26px] md:text-[40px] leading-[134%] -tracking-[1.2px] font-[700] w-[311px] md:w-[629px] text-center mx-auto mb-7">
          The <span className="text-[#4D3E99]">People</span> Behind Your{' '}
          <span className="text-[#4D3E99]">Protection</span>
        </h4>
        {team.map((data, index) => (
          <Team data={data} key={data.linkedin + index} />
        ))}

        <div className="w-full h-auto px-5">
          <ServiceBanner />
        </div>
      </div>
    </>
  )
}

export default OurTeam
