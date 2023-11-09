import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

import { FC, ReactNode } from 'react'

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = (props) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-grow">{props.children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

export default RootLayout
