import FloatingCircle, { getContainerVariants } from '../FloatingCircle'
// Icons
import { FaReact } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { HiOutlineDocumentDownload as ResumeIcon } from 'react-icons/hi'

// React
import React from 'react'

import { Link as ScrollLink } from 'react-scroll'
import { motion, Variants } from 'framer-motion'

import Container from '../Container'

import { SectionProps } from './types'
import ParticlesBackground from '../ParticlesBackground'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps extends SectionProps {}

const Hero: React.FC<HeroProps> = ({ sectionRef }) => {
  return (
    <section id="hero-section" ref={sectionRef} className="relative">
      <ParticlesBackground />
      <Container className="relative" maxWidth="7xl">
        <div className="grid grid-cols-1 pb-24 pt-24 lg:grid-cols-[3fr,2fr]">
          {/* Left Side */}
          <div className="flex flex-grow flex-col space-y-5 py-0">
            <div className="flex flex-col space-y-5">
              <motion.div
                className="relative z-10 text-sm text-gray-800 md:text-base"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  type: 'spring',
                  bounce: 0.7,
                  duration: 2,
                }}
              >
                <span className="flex space-x-2">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{
                      scale: [
                        1, 2.4, 2.4, 2.2, 2.4, 2.4, 2.2, 2.4, 2.2, 2.4, 2.2,
                        2.4, 1,
                      ],
                      rotate: [0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0, 30, 0],
                    }}
                    transition={{ delay: 2, duration: 3 }}
                  >
                    👋
                  </motion.div>
                  <div>Hello there! I am</div>
                </span>
              </motion.div>
              <HeroHeading />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
                className="c relative z-10 mt-1 max-w-sm text-sm text-gray-600 md:text-base lg:max-w-md"
              >
                A code-slinging <b>Software Engineer</b> from the Philippines
                who&apos;s on a quest to touch people&apos;s lives, one app at a
                time. 🚀
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex space-x-3"
            >
              <ScrollLink
                to={'contact-section'}
                smooth={true}
                offset={5}
                duration={500}
              >
                <button className="secondary-btn">Get In Touch</button>
              </ScrollLink>
              <Link
                target="_blank"
                className="group relative z-20 transition hover:shadow-lg"
                href="/CarloTaleonResume_LATEST.pdf"
              >
                <span className="relative z-10 flex transform select-none items-center space-x-1 bg-blue-500 px-6 py-3 text-sm text-white transition ease-out will-change-transform group-hover:-translate-y-1.5 md:text-base">
                  <ResumeIcon size="1.2rem" className="relative" />
                  <span className="relative">Resume</span>
                </span>
                <span className="absolute inset-0 bg-blue-600"></span>
              </Link>
            </motion.div>
          </div>
          {/* Right Side Container*/}
          <div className="hidden lg:block">
            {/* Image Div (Floaty Animation) */}
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: 5 }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="flex"
            >
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 2.2,
                  duration: 0.6,
                  ease: 'easeOut',
                }}
              >
                <Image
                  src="/imgs/hero_img.png"
                  width={320}
                  height={320}
                  alt="Carlo's Picture"
                  className="select-none"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={getContainerVariants(0.2, 1)}
          initial="hidden"
          animate="visible"
          className="hidden md:block"
        >
          <FloatingCircle
            style={{ right: '50rem', top: '5rem' }}
            orbitSize="45rem"
            orbitClass="border-gray-300"
            toastMessage={
              <span>
                Yes, I&apos;m good at <b className="text-[#60a5fa]">React</b>!
              </span>
            }
          >
            <FaReact className="text-blue-400" size="2rem" />
          </FloatingCircle>
          <FloatingCircle
            style={{ right: '30rem', bottom: '10rem' }}
            orbitSize="25rem"
            orbitClass="border-gray-300"
            nucleusClass="bg-[#ffe58e]"
            toastMessage={
              <span>
                I also do <b>ML</b> with{' '}
                <b className="text-[#ffca1d]">Python</b>!
              </span>
            }
          >
            <div
              className="h-12 w-12"
              style={{
                backgroundImage: `url('/imgs/python-logo.svg')`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
            />
          </FloatingCircle>
          <FloatingCircle
            style={{ left: '5rem', bottom: '1.5rem' }}
            orbitClass="border-gray-300"
            nucleusClass="bg-[#0044d0]"
            toastMessage={
              <span>
                Definitely a <b className="text-[#007acc]">Typescript Expert</b>{' '}
                here!
              </span>
            }
          >
            <span className="block overflow-hidden bg-white">
              <SiTypescript size="2rem" color="#007acc" />
            </span>
          </FloatingCircle>
        </motion.div>
      </Container>
    </section>
  )
}

const HeroHeading: React.FC = () => {
  const parentVariants: Variants = {
    hidden: {
      skewX: -16,
    },
    visible: {
      skewX: 0,
      transition: {
        skewX: {
          duration: 2.5,
          ease: 'backOut',
        },
        staggerChildren: 0.1,
      },
    },
  }

  const childVariants: Variants = {
    hidden: {
      y: 250,
    },
    visible: {
      y: -1,
      transition: {
        duration: 0.9,
        ease: 'circOut',
      },
    },
  }

  const parentVariants2: Variants = {
    ...parentVariants,
    visible: {
      ...parentVariants.visible,
      transition: {
        ...(parentVariants.visible as any).transition,
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <h1 className="relative z-10 flex flex-wrap text-blue-500">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="hero-text flex overflow-hidden pr-1 pt-2 font-black leading-none tracking-tight lg:text-8xl"
      >
        {'Carlo'.split('').map((letter, i) => {
          return (
            <motion.div
              key={i}
              variants={childVariants}
              className="block will-change-transform"
            >
              <div className="relative">
                <div className="hero-letter-bg absolute inset-0 select-none text-[#1229d5]">
                  {letter}
                </div>
                <div className="hero-letter relative bg-gradient-to-t from-[#1532ff] via-blue-500 to-blue-500 bg-clip-text text-transparent">
                  {letter}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      <span className="hero-text font-black leading-none tracking-tight lg:text-8xl">
        {' '}
      </span>
      <motion.div
        variants={parentVariants2}
        initial="hidden"
        animate="visible"
        className="hero-text flex overflow-hidden pr-1 pt-2 font-black leading-none tracking-tight lg:text-8xl"
      >
        {'Taleon'.split('').map((letter, i) => {
          return (
            <motion.div
              key={i}
              variants={childVariants}
              className="block will-change-transform"
            >
              <div className="relative">
                <div className="hero-letter-bg absolute inset-0 select-none text-[#1229d5]">
                  {letter}
                </div>
                <div className="hero-letter relative bg-gradient-to-t from-[#1532ff] via-blue-500 to-blue-500 bg-clip-text text-transparent">
                  {letter}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </h1>
  )
}
export default Hero

// OLD RIGHT SIDE IMAGE IN HERO
{
  /* <div className="relative w-96">
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ ease: "circOut", delay: 2.5, duration: 0.75 }}
              className="bg-blue-500 h-full w-full absolute top-0 left-0"
            ></motion.div>
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ delay: 3, duration: 0.75, ease: "circOut" }}
              className="w-full h-1/2 relative"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1570003179394-40b59f9b4a5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div> */
}
