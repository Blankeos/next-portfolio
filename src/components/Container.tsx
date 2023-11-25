import { cn } from '@/lib/cn'
import React from 'react'

type MaxWidthTypes =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl'
  | 'full'

interface Props {
  className?: string
  maxWidth?: MaxWidthTypes
}

const Container: FCC<Props> = ({ children, className, maxWidth = '9xl' }) => {
  return (
    <div
      className={cn(
        'mx-auto w-full p-5 px-7 md:px-12',
        getMaxWidth(maxWidth),
        className
      )}
    >
      {children}
    </div>
  )
}

const getMaxWidth = (maxWidth: MaxWidthTypes) => {
  const defaultCase = 'max-w-9xl'
  switch (maxWidth) {
    case 'xs':
      return 'max-w-xs'
    case 'sm':
      return 'max-w-sm'
    case 'md':
      return 'max-w-md'
    case 'lg':
      return 'max-w-lg'
    case 'xl':
      return 'max-w-xl'
    case '2xl':
      return 'max-w-2xl'
    case '3xl':
      return 'max-w-3xl'
    case '4xl':
      return 'max-w-4xl'
    case '5xl':
      return 'max-w-5xl'
    case '6xl':
      return 'max-w-6xl'
    case '7xl':
      return 'max-w-7xl'
    case '8xl':
      return 'max-w-8xl'
    case '9xl':
      return 'max-w-9xl'
    case 'full':
      return 'max-w-full'
    default:
      return defaultCase
  }
}

export default Container
