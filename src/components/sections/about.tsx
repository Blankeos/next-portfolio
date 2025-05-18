import React, { useEffect } from 'react';
import Container from '../container';
import SectionHeading from '../section-heading';
import { SectionProps } from './types';

import { useInView } from '@/hooks/use-in-view';
import { motion, useAnimation, Variants } from 'motion/react';
import Link from 'next/link';
import about from '@/data/about';

// Icons
import { cn } from '@/lib/cn';
import { $path } from 'next-typesafe-url';
import { BsArrowRight as Arrow } from 'react-icons/bs';

interface AboutProps extends SectionProps {}

const About: React.FC<AboutProps> = ({ sectionRef }) => {
  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="bg-background-secondary w-full pt-28 pb-28"
    >
      <Container maxWidth="7xl" className="relative">
        <SectionHeading
          className="text-typography relative z-10 text-4xl font-light sm:text-5xl"
          text={['About', 'Me']}
        />
        <div className="relative z-10 mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ProfileImage />
          <ProfileInfo />
        </div>
      </Container>
    </section>
  );
};

const ProfileImage = () => {
  const [ref, inView] = useInView({
    once: true,
    margin: '150px 0px',
    amount: 'all',
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: '0%',
        transition: {
          ease: 'circOut',
          duration: 1,
        },
      });
    }
  }, [inView, controls]);
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
  );
};

const profileInfoVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

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
};

const ProfileInfo = () => {
  const [ref, inView] = useInView({
    once: true,
    amount: 0.5,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

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
        className="text-typography text-4xl font-bold tracking-tighter md:text-5xl"
      >
        {about.fullName}
      </motion.h2>
      <motion.span
        variants={profileInfoChildVariants}
        className="bg-primary h-2 w-16"
      ></motion.span>
      <div className="text-typography-foreground flex flex-col space-y-5">
        {about.bio.map((p, i) => {
          return (
            <motion.span key={i} variants={profileInfoChildVariants}>
              {p}
            </motion.span>
          );
        })}
      </div>

      <motion.div
        variants={profileInfoChildVariants}
        className="flex justify-start"
      >
        {/* TODO: Make into a button.tsx component. */}
        <Link
          href={$path({ route: '/about' })}
          className={cn(
            'group flex gap-x-2',
            'hover:bg-primary text-primary border-primary relative z-10 border bg-transparent bg-clip-padding px-6 py-3 text-sm backdrop-blur-sm backdrop-filter transition ease-out select-none hover:text-white md:text-base'
          )}
        >
          <span className="">More About Me</span>
          <Arrow className="translate-x-1 translate-y-[3px] transform transition-transform group-hover:translate-x-2" />
        </Link>
        {/* Might not use this bottom one anymore */}
        {/* <Link href="/about">
          <a className="text-gray-500 flex gap-x-2 items-center group hover:text-primary text-sm">
            <span className="transform translate-y-0.5">More About Me</span>
            <Arrow className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </Link> */}
      </motion.div>
    </motion.div>
  );
};

export default About;
