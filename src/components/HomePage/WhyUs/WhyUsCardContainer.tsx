import React from 'react'
import WhyUsRightCard from './WhyUsRightCard'
import WhyUsLeftCard from './WhyUsLeftCard'

const WhyUsCardContainer = () => {
  return (
    <div className="w-[324px] md:w-[681px] lg:w-[971px] h-[714px] md:h-[367px] border-[2px]   flex flex-wrap max-md:flex-col justify-between border-[#E9E5FF] rounded-[25px] mx-auto my-10 p-3 md:p-7">
      <WhyUsLeftCard />
      <WhyUsRightCard />
    </div>
  )
}

export default WhyUsCardContainer
