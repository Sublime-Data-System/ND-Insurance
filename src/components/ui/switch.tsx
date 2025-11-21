'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

function Switch({ className, ...props }: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer data-[state=checked]:bg-[#C3D09A] data-[state=unchecked]:bg-[#A581FF3B] focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'bg-[#F6FFDB] dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-8 md:size-12 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(250%-7px)] md:data-[state=checked]:translate-x-[calc(225%-7px)] data-[state=unchecked]:bg-[#4D3E99] data-[state=unchecked]:translate-x-[10px]',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
