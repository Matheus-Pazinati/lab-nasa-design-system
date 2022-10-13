import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild }: ButtonProps) {

  const Comp = asChild ? Slot : 'button'
  return (
    <Comp 
      className='bg-blue-500 py-4 px-3 rounded w-full font-semibold text-gray-100 text-sm transition-colors hover:bg-blue-300 focus:ring-2 ring-gray-100'
    >

      {children}
    </Comp>
  )
}