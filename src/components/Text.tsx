import { clsx } from 'clsx';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg'
  children: string
}

export function Text({ size = 'md', children }: TextProps) {
  return (
    <span 
      className={clsx('text-gray--100', {
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-xl': size === 'lg'
      })}>

    {children}
    </span>
  )
}