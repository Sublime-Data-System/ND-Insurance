import { H7 } from '@/components/typography'
import Image from 'next/image'
import React from 'react'

const ReviewsSmall = () => {
  return (
    <div className="h-[51px] w-[155px] px-[6px] rounded-[31px] border-[1px] border-[#00000036] bg-[#F6FFDB] mx-auto mb-[24px] flex items-center justify-between xl:hidden">
      <div className="w-[100px] relative flex items-center">
        <Image
          className="h-[40px] w-[40px] rounded-[50%] absolute left-0"
          height={40}
          width={40}
          alt={'user.logo'}
          src={'/images/user/user1.png'}
        />
        <Image
          className="h-[40px] w-[40px] rounded-[50%] absolute left-[30px]"
          height={40}
          width={40}
          alt={'user.logo'}
          src={'/images/user/user2.png'}
        />
        <Image
          className="h-[40px] w-[40px] rounded-[50%] absolute left-[60px]"
          height={40}
          width={40}
          alt={'user.logo'}
          src={'/images/user/user3.png'}
        />
      </div>

      <div className="flex items-center gap-[4px]">
        <i>
          <H7 className="text-[20px] leading-[100%] pt-[4px]">5</H7>
        </i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M10.079 16.0438L5.19308 18.9715C4.97723 19.1081 4.75158 19.1667 4.51611 19.1472C4.28064 19.1276 4.07461 19.0496 3.89801 18.9129C3.72141 18.7763 3.58405 18.6057 3.48594 18.4012C3.38783 18.1966 3.36821 17.9671 3.42707 17.7126L4.72214 12.1792L0.395438 8.46106C0.199216 8.28539 0.076773 8.08514 0.0281098 7.86029C-0.0205534 7.63544 -0.00603297 7.41606 0.0716711 7.20214C0.149375 6.98823 0.267109 6.81256 0.424871 6.67516C0.582634 6.53775 0.798479 6.44992 1.07241 6.41167L6.78248 5.91396L8.98998 0.702648C9.08809 0.468432 9.24036 0.29277 9.44679 0.175662C9.65321 0.0585538 9.86396 0 10.079 0C10.2941 0 10.5048 0.0585538 10.7112 0.175662C10.9177 0.29277 11.0699 0.468432 11.168 0.702648L13.3756 5.91396L19.0856 6.41167C19.3603 6.4507 19.5762 6.53853 19.7332 6.67516C19.8901 6.81178 20.0079 6.98745 20.0864 7.20214C20.1648 7.41684 20.1798 7.63662 20.1311 7.86146C20.0824 8.08631 19.9596 8.28617 19.7626 8.46106L15.4359 12.1792L16.731 17.7126C16.7898 17.9663 16.7702 18.1959 16.6721 18.4012C16.574 18.6065 16.4366 18.7771 16.26 18.9129C16.0834 19.0488 15.8774 19.1269 15.6419 19.1472C15.4065 19.1675 15.1808 19.1089 14.965 18.9715L10.079 16.0438Z"
            fill="#F8B704"
          />
        </svg>
      </div>
    </div>
  )
}

export default ReviewsSmall
