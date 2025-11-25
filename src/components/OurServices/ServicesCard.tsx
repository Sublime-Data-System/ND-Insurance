import { cn } from '@/lib/utils'
import React from 'react'
import ServiceCardLeft from './ServiceCardLeft'
import ServiceCardListComponent from './ServiceCardListComponent'
import ServiceCardMain from './ServiceCardMain'

interface ServiceComponent {
  title: string
  logo: string
  description: string[]

  features: string[]
}

export const ServicesCardXL = ({
  isOdd,
  serviceData,
}: {
  isOdd: boolean
  serviceData: ServiceComponent
}) => {
  const widthClass = 'w-[1190px]'
  const heightClass = 'h-[457px]'
  const borderClass = 'border-2 border-[#E9E5FF] rounded-3xl'

  return (
    <div
      className={cn(
        'mx-auto mt-7 flex px-[40px] py-[50px] justify-between',
        widthClass,
        heightClass,
        borderClass,
      )}
      style={{ boxShadow: '0px 4.03px 41px 5.04px #00000008' }}
    >
      <div className="w-[230px] h-full">
        <ServiceCardLeft isOdd={isOdd} title={serviceData.title} logo={serviceData.logo} />
      </div>
      <div className="w-[382px] h-full">
        <ServiceCardMain isOdd={isOdd} description={serviceData.description} />
      </div>
      <div className="w-[374px] h-full flex items-center">
        <ServiceCardListComponent isOdd={isOdd} features={serviceData.features} />
      </div>
    </div>
  )
}

export const ServicesCardLG = ({
  isOdd,
  serviceData,
}: {
  isOdd: boolean
  serviceData: ServiceComponent
}) => {
  const widthClass = 'w-[329px] md:w-[686px]'
  const heightClass = 'min-h-[826px] md:min-h-[492px] h-auto'
  const borderClass = 'border-2 border-[#E9E5FF] rounded-3xl'

  return (
    <div
      className={cn(
        'mx-auto mt-7 flex flex-col flex-wrap px-[20px]  md:px-[40px]  py-[30px] gap-6 ',
        widthClass,
        heightClass,
        borderClass,
      )}
      style={{ boxShadow: '0px 4.03px 41px 5.04px #00000008' }}
    >
      <div className="xl:flex-1 xl:h-full">
        <ServiceCardLeft isOdd={isOdd} title={serviceData.title} logo={serviceData.logo} />
      </div>
      <div className="w-full h-fit flex max-md:flex-col gap-7 max-xl:flex-1">
        <div className="w-full md:w-[302px] h-auto xl:h-full">
          <ServiceCardMain isOdd={isOdd} description={serviceData.description} />
        </div>
        <div className="flex-1 h-auto xl:h-full flex items-center md:justify-center max-md:mb-6">
          <ServiceCardListComponent isOdd={isOdd} features={serviceData.features} />
        </div>
      </div>
    </div>
  )
}
