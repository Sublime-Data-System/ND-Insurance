import React from 'react'
import { Paragraph } from '../typography'

const ServiceCardListComponent = ({ isOdd, features }: { isOdd: boolean; features: string[] }) => {
  const backgroundColor = isOdd ? '#4D3E99' : '#9FC03B'
  return (
    <div className="w-fit h-auto flex flex-col gap-5">
      {features.map((data, index) => {
        return (
          <div className="flex gap-4 items-center" key={data + index}>
            <div
              className="aspect-square h-[27.8px] rounded-[4.6px] flex items-center justify-center"
              style={{ backgroundColor }}
            >
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8451 1.58875L4.8681 9.56575L1.24219 5.93984"
                  stroke="white"
                  strokeWidth="1.74044"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <Paragraph className="max-xl:text-[16px] xl:text-[20px] text-[#090A0A]">
              {data}
            </Paragraph>
          </div>
        )
      })}
    </div>
  )
}

export default ServiceCardListComponent
