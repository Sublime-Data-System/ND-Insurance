import React from 'react'

const IconWrapper = ({ icon, className = 'w-6 h-6' }: { icon: string; className: string }) => {
  let SvgIcon
  switch (icon) {
    case 'PhoneCall':
      SvgIcon = ({ className }: { className: string }) => (
        <svg
          className={className}
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-5.7-5.71 19.79 19.79 0 0 1-3.07-8.64A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 17.65 17.65 0 0 0 .52 2.71 2 2 0 0 1-.41 1.84l-1.2 1.2a18.8 18.8 0 0 0 7.22 7.22l1.2-1.2a2 2 0 0 1 1.84-.41 17.65 17.65 0 0 0 2.71.52A2 2 0 0 1 22 16.92z" />
        </svg>
      )
      break
    case 'Mail':
      SvgIcon = ({ className }: { className: string }) => (
        <svg
          className={className}
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
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
      break
    case 'MapPin':
    default:
      SvgIcon = ({ className }: { className: string }) => (
        <svg
          className={className}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
      break
  }
  return <SvgIcon className={className} />
}

const ContactCard = ({
  icon,
  title,
  subtitle,
  buttonText,
  buttonUrl,
  isLink = false,
}: {
  icon: string
  title: string
  subtitle: string
  buttonText: string | null
  buttonUrl: string | null
  isLink?: boolean
}) => {
  return (
    <div
      style={{ boxShadow: '0px 4.25px 43.24px 5.31px #00000008' }}
      className="px-4 py-4 bg-white rounded-2xl  transition duration-300 hover:shadow-xl flex flex-col h-[231px] w-[286px] border-[2px] border-[#E9E5FF]"
    >
      <div className="h-[56px] w-[56px] border-[3px] border-[#9487D1] rounded-[50%] bg-[#4D3E99] flex items-center justify-center">
        <IconWrapper icon={icon} className="w-5 h-5" />
      </div>
      <p className="text-[22px] font-light text-[#41357B] mt-3">
        <i>{title}</i>
      </p>

      <p className="text-[16px] text-[#8B8989] font-[400] ">{subtitle}</p>
      <a
        href={isLink ? `tel:${buttonUrl}` : `${buttonUrl}`}
        target={isLink ? '_self' : '_blank'}
        rel="noopener noreferrer"
        className="mt-4"
      >
        <button className="h-[50px] w-full rounded-[12px] bg-[#EDEEF7] text-[#5F5F5F]">
          {buttonText}
        </button>{' '}
      </a>
    </div>
  )
}

export default ContactCard
