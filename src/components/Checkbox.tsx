import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

interface CheckProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckProps) {

  return (
    <CheckboxPrimitive.Root {...props}
      className='w-6 h-6 bg-gray-800 rounded flex items-center justify-center p-[2px]'
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='flex-1 text-blue-500 w-5 h-5' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}