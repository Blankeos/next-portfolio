import React from 'react'
import Container from './Container'

import Link from 'next/link'
import HomeLinkButton from './HomeLinkButton'

const Footer = () => {
  return (
    <footer className="relative bg-blue-500 text-white">
      <Container className="flex flex-col items-center space-y-5 py-20">
        <Link
          href="/"
          className="group relative flex cursor-pointer select-none items-center px-5 text-xl font-extrabold"
        >
          <span className="absolute text-blue-600 group-hover:opacity-100">
            CATT
          </span>
          <span className="relative transition group-hover:-translate-y-1">
            CATT
          </span>
        </Link>
        <div className="flex space-x-10 text-gray-50">
          <HomeLinkButton>Home</HomeLinkButton>
        </div>
        <span className="text-center">
          2021 © Carlo Taleon • All Rights Reserved.
        </span>
      </Container>
    </footer>
  )
}

export default Footer
