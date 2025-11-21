import React from 'react'
import { H1Hero, Paragraph } from '../typography'
import { cn } from '@/lib/utils'

function PillContainer({
  text,
  color,
  className,
}: {
  text: string
  color: string
  className?: string
}) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={cn(
        'h-[34px] sm:h-[40px] lg:h-[44px] w-[145px] bg-[#ECE8FF] rounded-[20px] text-[12.47px] lg:text-[14px] leading-[150%] -tracking-[0.24px] flex justify-center items-center',
        className,
      )}
    >
      {text}
    </div>
  )
}

const OurProductsTitle = () => {
  return (
    <div className="h-auto mt-20 sm:mt-28 lg:mt-32 mb-24 sm:mb-40 lg:mb-48">
      <div className="flex justify-center gap-8 mt-8">
        <PillContainer
          color="#E4F8AA"
          text="Policy Protection"
          className="w-[133px]! sm:w-[147px]! lg:w-[150px]! relative sm:-left-28 lg:-left-32 sm:top-6  lg:top-5 -rotate-[5.69deg]  lg:-rotate-[11.55deg]"
        />
        <PillContainer
          color="#ECE8FF"
          text="Insurance Advisory"
          className="w-[139px]! lg:w-[169px]! rotate-[5.69deg] sm:-rotate-[5.93deg] lg:rotate-[4.36deg] relative sm:-left-[320px] lg:-left-[406px] sm:top-30 lg:top-34"
        />
      </div>
      <H1Hero className="w-[303px] sm:w-[405px] lg:w-[635px] mx-auto mt-5">
        <span className="text-[#4D3E99]">Expert</span> Advisory. Smarter{' '}
        <span className="text-[#4D3E99]">Policies.</span>
      </H1Hero>
      <Paragraph className="w-[289px] sm:w-[444px] lg:w-[720px] mt-5 sm:mt-8 mx-auto sm:text-[22px] lg:text-[24px] text-center sm:-tracking-[0.66px]! lg:-tracking-[0.72px]! text-[#9D9D9D]">
        Tailored insurance solutions for every stage of your business journey. Coverage that adapts
        as you grow!
      </Paragraph>
      <div className="flex justify-center gap-3 mt-8 sm:mt-0">
        <PillContainer
          color="#ECE8FF"
          className=" -rotate-[5.69deg] sm:rotate-[8.54deg] relative sm:-right-[310px] lg:-right-[390px] sm:-top-[170px] lg:-top-[152px]"
          text="Financial Shield"
        />
        <PillContainer
          color="#E4F8AA"
          className="w-[148px] lg:w-[169px] rotate-[5.69deg] lg:-rotate-[2.96deg] relative sm:-right-32 lg:-right-52 sm:-top-[260px] lg:-top-[290px]"
          text="Coverage Solutions"
        />
      </div>
      <div className="flex justify-center mt-8 sm:mt-0">
        <button className="w-[220px] sm:w-[196px] h-[56px] sm:h-[65px] rounded-[45px] bg-[#4D3E99] hover:bg-[#2F2F2F] text-[18px] sm:text-[21px] leading-[150%] -tracking-[0.84px] text-white mx-auto">
          Get in touch
        </button>
      </div>
    </div>
  )
}

export default OurProductsTitle
