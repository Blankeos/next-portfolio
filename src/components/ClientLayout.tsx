'use client'

import useTheme from '@/hooks/useTheme'
import { FC, ReactNode } from 'react'

type ClientLayoutProps = {
  children: ReactNode
}

const ClientLayout: FC<ClientLayoutProps> = (props) => {
  useTheme()
  return <>{props.children}</>
}

export default ClientLayout
