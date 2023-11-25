import React, { useEffect } from 'react'
import Container from '../Container'
import SectionHeading from '../SectionHeading'
import { SectionProps } from './types'

import { motion, useAnimation, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import about from '../../../data/about'
import Link from 'next/link'

// Icons
import { BsArrowRight as Arrow } from 'react-icons/bs'
import { pageRoutes } from '@/lib/pageRoutes'

interface AboutProps extends SectionProps {}

const About: React.FC<AboutProps> = ({ sectionRef }) => {
  const controls = useAnimation()

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full bg-gray-50 pb-28 pt-28"
    >
      <Container maxWidth="7xl" className="relative">
        <SectionHeading
          className="relative z-10 text-4xl font-light text-gray-800 sm:text-5xl"
          text={['About', 'Me']}
        />
        <div className="relative z-10 mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ProfileImage />
          <ProfileInfo />
        </div>
      </Container>
    </section>
  )
}

const ProfileImage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    root: null,
    rootMargin: '150px 0px',
    threshold: 1,
  })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({
        width: '0%',
        transition: {
          ease: 'circOut',
          duration: 1,
        },
      })
    }
  }, [inView, controls])
  return (
    <div className="relative flex h-full w-full flex-col">
      <div ref={ref} className="relative inline-block md:w-5/6">
        <div
          className="relative"
          style={{
            marginTop: '100%',
          }}
        ></div>
        <div className="absolute inset-0">
          <div
            className="absolute h-full w-full"
            style={{
              backgroundImage: `url("/imgs/carlo_about.png")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
            }}
          ></div>
          <motion.div
            initial={{ width: '100%' }}
            animate={controls}
            className="absolute h-full w-full self-end bg-gray-50"
          ></motion.div>
        </div>
      </div>
    </div>
  )
}

const profileInfoVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
}

const profileInfoChildVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'circOut',
      duration: 0.5,
    },
  },
}

const ProfileInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    root: null,
    threshold: 0.5,
  })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return (
    <motion.div
      ref={ref}
      variants={profileInfoVariants}
      initial={'hidden'}
      animate={controls}
      className="mt-5 flex flex-col gap-y-8 md:mt-0"
    >
      <motion.h2
        variants={profileInfoChildVariants}
        className="text-4xl font-bold tracking-tighter text-gray-800 md:text-5xl"
      >
        {about.fullName}
      </motion.h2>
      <motion.span
        variants={profileInfoChildVariants}
        className="h-2 w-16 bg-blue-500"
      ></motion.span>
      <div className=" flex flex-col space-y-5 text-gray-600">
        {about.bio.map((p, i) => {
          return (
            <motion.span key={i} variants={profileInfoChildVariants}>
              {p}
            </motion.span>
          )
        })}
      </div>

      <motion.div
        variants={profileInfoChildVariants}
        className="flex justify-start"
      >
        <Link
          href={pageRoutes.about}
          className="secondary-btn group flex gap-x-2"
        >
          <span className="">More About Me</span>
          <Arrow className="translate-x-1 translate-y-[3px] transform transition-transform group-hover:translate-x-2" />
        </Link>
        {/* Might not use this bottom one anymore */}
        {/* <Link href="/about">
          <a className="text-gray-500 flex gap-x-2 items-center group hover:text-blue-500 text-sm">
            <span className="transform translate-y-0.5">More About Me</span>
            <Arrow className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </Link> */}
      </motion.div>
    </motion.div>
  )
}

export default About
