'use client'

import { FC } from 'react'
import ShadowButton from '../ShadowButton'
import { FiChevronLeft as IconChevron } from 'react-icons/fi'

type BackButtonProps = {
  /**
   * Only href, no onClick because we want this to be used in
   * a server-component usually.
   * @defaultValue '/'
   */
  href?: string
}

const BackButton: FC<BackButtonProps> = (props) => {
  const { href = '/' } = props
  return (
    <ShadowButton
      className="group"
      elevation={5}
      href={href}
      shadowClassName="bg-primary-600"
    >
      <span className="grid h-12 w-12 place-items-center border border-primary-600 bg-primary-400 text-white">
        <IconChevron size="1.3rem" />
      </span>
    </ShadowButton>
  )
}

export default BackButton
