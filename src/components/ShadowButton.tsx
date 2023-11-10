import { FC, MouseEventHandler, PropsWithChildren, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

type FlatShadowCardInteractivityType = {
  flatOnMouseEnter?: boolean
  flatOnMouseLeave?: boolean
  flatOnMouseDown?: boolean
  flatOnMouseUp?: boolean
}

const defaultInteractivity: Required<FlatShadowCardInteractivityType> = {
  flatOnMouseEnter: false,
  flatOnMouseLeave: false,
  flatOnMouseDown: true,
  flatOnMouseUp: false,
}

type ShadowButtonProps = {
  className?: string

  /** The Flat Shadow at the bottom. */
  shadowClassName?: string

  onClick?: MouseEventHandler<HTMLButtonElement> | undefined

  /** @defaultValue 7px */
  elevation?: number

  /**
   * @defaultValue {
   *    flatOnMouseEnter `false`,
   *    flatOnMouseLeave `false`,
   *    flatOnMouseDown `true`,
   *    flatOnMouseUp `false`
   * }
   */
  interactivity?: FlatShadowCardInteractivityType | false
} & PropsWithChildren

const ShadowButton: FC<ShadowButtonProps> = (props) => {
  const {
    onClick,
    className,
    shadowClassName = 'bg-primary-500 bottom-0 absolute left-0 right-0',
    children,
    elevation = 7,
    interactivity,
  } = props

  const [isFlat, setIsFlat] = useState<boolean>(false)

  const spreadInteractivity = { ...defaultInteractivity, ...interactivity }

  return (
    <button
      onClick={(e) => {
        onClick?.(e)
      }}
      onMouseEnter={() => {
        setIsFlat(spreadInteractivity.flatOnMouseEnter)
      }}
      onMouseLeave={() => {
        setIsFlat(spreadInteractivity.flatOnMouseLeave)
      }}
      onMouseDown={() => {
        setIsFlat(spreadInteractivity.flatOnMouseDown)
      }}
      onMouseUp={() => {
        setIsFlat(spreadInteractivity.flatOnMouseUp)
      }}
      className={cn('relative outline-none', className)}
    >
      <div style={{ height: elevation }} />

      <div style={{ height: 50 }} className={cn(shadowClassName)} />

      <motion.div
        className="relative"
        animate={{
          y: isFlat ? 0 : -1 * elevation,
        }}
      >
        {children}
      </motion.div>
    </button>
  )
}

export default ShadowButton
