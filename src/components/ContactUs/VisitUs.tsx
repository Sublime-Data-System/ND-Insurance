import Image from 'next/image'
import React from 'react'

const VisitUs = () => {
  return (
    <div className="flex justify-between flex-wrap max-md:gap-4 w-[286px] md:w-[600px] min-h-[398px] border-[#E9E5FF] border-[2px] rounded-[20px] px-5 py-8">
      <div className="h-full w-[274px] flex flex-col gap-4 ">
        <div className="h-[56px] w-[56px] border-[#9487D1] border-[3px] rounded-full bg-[#4D3E99] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        <div className="text-[#41357B] text-[22px] md:text-[26px] font-semibold">
          <i>Visit Us</i>
        </div>
        <p className="text-[#8B8989] text-[16px] font-[400]">
          7, Tapovan Society , S M Road Ambawadi , Ahmedabad - 380015
        </p>
        <button className="w-[205px] h-[50px] rounded-[12px] bg-[#EDEEF7] text-[#5F5F5F] text-[16px]">
          View on Google Maps
        </button>
        <Image
          src={'/images/location.jpg'}
          height={102}
          width={140}
          className="rounded-[9px]"
          alt={'Location of ND Insurance'}
        />
      </div>
      <div className="h-[292px] md:h-[362px]  w-[262px]  rounded-[18px] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29376.3678423102!2d72.50274287431634!3d23.02208390000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8548dae3c513%3A0x6b6ebc8dddcff73b!2sND%20Insurance%20Broking%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1764233975454!5m2!1sen!2sin"
          className="h-[292px] md:h-[362px]  w-[262px] rounded-[18px]"
          style={{ border: '0' }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default VisitUs
