import { cn } from '@/utility/cn'
import { ReactNode } from 'react'

export const H1Hero = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h1
      className={cn(
        'text-[26px] sm:text-[40px] md:text-[55px] leading-[121%] -tracking-[1px] md:-tracking-[2px] font-[700] text-center',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export const H1Grey = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h1
      className={cn(
        'text-[60px] leading-[121%] -tracking-[1.8px] font-[700] text-center',
        className,
      )}
    >
      {children}
    </h1>
  )
}

export const H2 = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h2
      className={cn(
        'text-[26px] md:text-[40px]  leading-[144%] -tracking-[1.2px] font-[400]',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export const H5 = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h5
      className={cn(
        'text-[16px] sm:text-[20px] md:text-[24px] leading-[150%] -tracking-[0.72px] font-[400]',
        className,
      )}
    >
      {children}
    </h5>
  )
}

export const H6 = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h6
      className={cn(
        'text-[16px] md:text-[22px] leading-[121%] -tracking-[0.66px] font-[350]',
        className,
      )}
    >
      {children}
    </h6>
  )
}

export const H7 = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h6
      className={cn(
        'text-[18px] sm:text-[21px] leading-[150%] -tracking-[0.84px] font-[350]',
        className,
      )}
    >
      {children}
    </h6>
  )
}

export const Paragraph = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <p
      className={cn(
        'text-[14px] sm:text-[18px] leading-[150%] -tracking-[0.54px] font-[350]',
        className,
      )}
    >
      {children}
    </p>
  )
}
