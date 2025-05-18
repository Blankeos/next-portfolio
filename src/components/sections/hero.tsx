'use client';

import FloatingCircle, { getContainerVariants } from '../floating-circle';
// Icons
import { FaReact } from 'react-icons/fa';
import { HiOutlineDocumentDownload as ResumeIcon } from 'react-icons/hi';
import { SiTypescript } from 'react-icons/si';

// React
import React, { useState } from 'react';

import { motion, Variants } from 'motion/react';
import { Link as ScrollLink } from 'react-scroll';

import Container from '../container';

import { IconCamera, IconCommandKey, IconGithubAlt } from '@/assets/icons';
import Link from 'next/link';
import AestheticKeyboard from '../aesthetic-keyboard';
import ParticlesBackground from '../particles-background';
import { TvScreen, useGlitch } from '../tv-screen';
import { SectionProps } from './types';

interface HeroProps extends SectionProps {}

const Hero: React.FC<HeroProps> = ({ sectionRef }) => {
  const [tvState, setTvState] = useState<'github' | 'command' | 'picture'>(
    'picture'
  );
  const { glitch, triggerGlitch } = useGlitch();

  return (
    <section id="hero-section" ref={sectionRef} className="relative">
      <ParticlesBackground />
      <Container className="relative" maxWidth="7xl">
        <div className="flex flex-col gap-5 gap-y-20 pt-24 pb-24 lg:flex-row">
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
                <span className="text-typography-foreground flex space-x-2">
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
                className="text-typography-foreground relative z-10 mt-1 max-w-sm text-sm md:text-base lg:max-w-md"
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
                {/* TODO: Make into a button.tsx component. */}
                <button className="hover:bg-primary text-primary border-primary relative z-10 truncate border bg-transparent bg-clip-padding px-6 py-3 text-sm backdrop-blur-sm backdrop-filter transition ease-out select-none hover:text-white md:text-base">
                  Get In Touch
                </button>
              </ScrollLink>
              <Link
                target="_blank"
                className="group relative z-20 transition hover:shadow-lg"
                href="/CarloTaleonResume_LATEST.pdf"
              >
                <span className="bg-primary relative z-10 flex transform items-center space-x-1 px-6 py-3 text-sm text-white transition ease-out will-change-transform select-none group-hover:-translate-y-1.5 md:text-base">
                  <ResumeIcon size="1.2rem" className="relative" />
                  <span className="relative">Resume</span>
                </span>
                <span className="bg-primary-dark absolute inset-0"></span>
              </Link>
            </motion.div>
          </div>
          {/* Right Side Container*/}
          <div className="flex shrink-0 flex-col gap-4 self-center">
            <TvScreen glitch={glitch}>
              {tvState === 'github' ? (
                <IconGithubAlt />
              ) : tvState === 'command' ? (
                <IconCommandKey />
              ) : tvState === 'picture' ? (
                <>
                  <span className="absolute top-2 right-4 z-20 font-mono text-xs">
                    That&apos;s me
                  </span>
                  <img
                    src="https://avatars.githubusercontent.com/u/38070918?v=4"
                    className="pointer-events-none object-cover grayscale"
                    alt="Avatar"
                  />
                  {/* <IconCamera /> */}
                </>
              ) : (
                <></>
              )}
            </TvScreen>
            <div className="active pointer-events-auto z-40 grid h-max shrink-0 grid-cols-3 gap-[3px] self-center rounded-lg bg-black p-[4px]">
              <AestheticKeyboard
                width={160 + 3}
                spanContainerClass="col-span-2 z-[5]"
                className="col-span-2 bg-[#DBD6CB]"
                containerClass="bg-[#DBD6CB]"
              ></AestheticKeyboard>
              <AestheticKeyboard
                spanContainerClass="z-[4]"
                className="bg-[#DBD6CB]"
                containerClass="bg-[#DBD6CB]"
                onPointerDown={() => {
                  setTvState('command');
                  setTimeout(() => {
                    triggerGlitch();
                  }, 20);
                }}
              >
                <IconCommandKey className="text-neutral-800" />
              </AestheticKeyboard>
              <AestheticKeyboard
                spanContainerClass="z-[3]"
                onPointerDown={() => {
                  setTvState('github');
                  setTimeout(() => {
                    triggerGlitch();
                  }, 20);
                }}
              >
                <IconGithubAlt />
              </AestheticKeyboard>
              <AestheticKeyboard
                spanContainerClass="z-[2]"
                className="bg-[#DBD6CB]"
                containerClass="bg-[#DBD6CB]"
                onPointerDown={() => {
                  setTvState('picture');
                  setTimeout(() => {
                    triggerGlitch();
                  }, 20);
                }}
              >
                <IconCamera className="text-neutral-600" />
              </AestheticKeyboard>
              <AestheticKeyboard
                spanContainerClass="z-[1]"
                className="bg-[#DBD6CB]"
                containerClass="bg-[#DBD6CB]"
              ></AestheticKeyboard>
            </div>
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
  );
};

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
  };

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
  };

  const parentVariants2: Variants = {
    ...parentVariants,
    visible: {
      ...parentVariants.visible,
      transition: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(parentVariants.visible as any)?.transition,
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <h1 className="text-primary relative z-10 flex flex-wrap">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="hero-text flex overflow-hidden pt-2 pr-1 leading-none font-black tracking-tight lg:text-8xl"
      >
        {'Carlo'.split('').map((letter, i) => {
          return (
            <motion.div
              key={i}
              variants={childVariants}
              className="block will-change-transform"
            >
              <div className="relative">
                <div className="hero-letter-bg text-primary-darker absolute inset-0 select-none">
                  {letter}
                </div>
                <div className="hero-letter via-primary to-primary from-primary-dark relative bg-gradient-to-t bg-clip-text text-transparent">
                  {letter}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <span className="hero-text leading-none font-black tracking-tight lg:text-8xl">
        {' '}
      </span>
      <motion.div
        variants={parentVariants2}
        initial="hidden"
        animate="visible"
        className="hero-text flex overflow-hidden pt-2 pr-1 leading-none font-black tracking-tight lg:text-8xl"
      >
        {'Taleon'.split('').map((letter, i) => {
          return (
            <motion.div
              key={i}
              variants={childVariants}
              className="block will-change-transform"
            >
              <div className="relative">
                <div className="hero-letter-bg text-primary-darker absolute inset-0 select-none">
                  {letter}
                </div>
                <div className="hero-letter via-primary to-primary from-primary-dark relative bg-gradient-to-t bg-clip-text text-transparent">
                  {letter}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </h1>
  );
};
export default Hero;

// EVEN OLDER RIGHT FLOATING IMAGE
// <div className="hidden lg:block">
//   {/* Image Div (Floaty Animation) */}
//   {/* <motion.div
//     initial={{ y: -5 }}
//     animate={{ y: 5 }}
//     transition={{
//       duration: 1.8,
//       repeat: Infinity,
//       repeatType: 'reverse',
//     }}
//     className="flex"
//   >
//     <motion.div
//       initial={{
//         scale: 0.8,
//         opacity: 0,
//       }}
//       animate={{ scale: 1, opacity: 1 }}
//       transition={{
//         delay: 2.2,
//         duration: 0.6,
//         ease: 'easeOut',
//       }}
//     >
//       <Image
//         src="/imgs/hero_img.png"
//         width={320}
//         height={320}
//         alt="Carlo's Picture"
//         className="select-none"
//         style={{
//           maxWidth: '100%',
//           height: 'auto',
//         }}
//       />
//     </motion.div>
//   </motion.div> */}
// </div>;

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
