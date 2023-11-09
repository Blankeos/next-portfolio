'use client'

import React from 'react'
import Container from './Container'
import Link from 'next/link'
import SectionLink from './SectionLink'
import sections from '../../data/sections'

import { motion, Variants } from 'framer-motion'
import socials from '../../data/socials'
import { pageRoutes } from '@/lib/pageRoutes'

const navVariants: Variants = {
  hidden: {
    y: 0.1,
  },
  visible: {
    y: 0,
    transition: {
      delay: 1.5,
      staggerChildren: 0.25,
      when: 'beforeChildren',
    },
  },
}

const navChildVariants: Variants = {
  hidden: {
    y: -35,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.8,
    },
  },
}

const navLinks = [
  {
    label: 'About',
    href: pageRoutes.about,
  },
  {
    label: 'Blog',
    href: pageRoutes.blog,
  },
]

const Nav = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="relative z-30 h-24 w-full"
    >
      <Container
        maxWidth="7xl"
        className="flex h-full items-center justify-between"
      >
        <Link
          href="/"
          className="group flex h-full cursor-pointer select-none items-center pr-5 text-2xl font-black tracking-tight text-blue-500 lg:text-2xl"
        >
          <motion.span variants={navChildVariants} className="relative block">
            <span className="absolute block text-[#1532ff]">CATT</span>
            <span className="relative block transition will-change-transform group-hover:-translate-y-[0.20rem]">
              CATT
            </span>
          </motion.span>
        </Link>
        <div className="flex space-x-10">
          <div className="flex items-center space-x-10 text-sm text-gray-600">
            <>
              {navLinks.map((navLink, i) => (
                <motion.span
                  variants={navChildVariants}
                  key={i}
                  className="block"
                >
                  <Link href={navLink.href}>{navLink.label}</Link>
                </motion.span>
              ))}
            </>
          </div>
          {/* <div className="hidden items-center space-x-10 text-sm text-gray-600 lg:flex">
            <>
              {sections.map((section, i) => (
                <motion.span
                  variants={navChildVariants}
                  key={i}
                  className="block"
                >
                  <SectionLink href={section.href}>{section.name}</SectionLink>
                </motion.span>
              ))}
            </>
          </div> */}
          {/* <div className="flex items-center space-x-5 text-2xl text-gray-600 lg:text-xl">
            {socials.map((social, i) => (
              <motion.span
                variants={navChildVariants}
                key={i}
                className="block"
              >
                <SocialLink href={social.url}>{<social.Icon />}</SocialLink>
              </motion.span>
            ))}
          </div> */}
        </div>
      </Container>
    </motion.nav>
  )
}

interface SocialLinkProps {
  href: string
}
const SocialLink: FCC<SocialLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative flex h-10 w-10 cursor-pointer select-none items-center justify-center transition ease-out hover:text-white"
    >
      <span className="absolute h-0 w-0 rounded-full bg-blue-500 transition-all ease-in-out group-hover:h-10 group-hover:w-10"></span>
      <span className="relative">{children}</span>
    </Link>
  )
}

export default Nav
