import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

import { FC, ReactNode } from 'react'
import ClientLayout from '@/components/ClientLayout'
import { createStyleStringFromTheme, themes } from '@/styles/themes'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    <html lang="en" style={{ ...(themes.light as any) }}>
      <body className="flex min-h-screen flex-col">
        <ClientLayout>
          <Nav />
          <main className="flex flex-grow flex-col">{props.children}</main>
          <Footer />
          <Toaster />
        </ClientLayout>
      </body>
    </html>
  )
}

export default RootLayout
