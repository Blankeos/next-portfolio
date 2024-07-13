import React, { useEffect, useState } from 'react';
import Container from '../container';
import SectionHeading from '../section-heading';

import Link from 'next/link';
import { SectionProps } from './types';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import socials, { Social } from '../../../data/socials';

import { motion, useAnimation, Variants } from 'framer-motion';
import toast from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';

interface ContactProps extends SectionProps {}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
    root: null,
    rootMargin: '-100px 0px',
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <section
      id="contact-section"
      ref={sectionRef}
      className="w-full py-24 md:py-52"
    >
      <Container maxWidth="7xl" className="relative z-10 grid grid-cols-1">
        <div className="flex flex-col space-y-10">
          <span className="">
            <SectionHeading
              noOffset
              className="relative text-center text-4xl font-light text-gray-800 sm:text-5xl"
              text={["Let's work", 'together']}
            />
          </span>
        </div>
        <motion.div
          ref={ref}
          variants={contactInfoVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 flex flex-col items-center space-y-5 overflow-hidden text-2xl text-gray-800 lg:text-4xl"
        >
          <ClickableEmail />
          <div className="flex space-x-8 pt-5 text-blue-500">
            {socials.map((social, i) => {
              return (
                <SocialLink
                  key={i}
                  name={social.name}
                  url={social.url}
                  Icon={social.Icon}
                />
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

const ClickableEmail = () => {
  const copyMessage = 'Copy 📝';
  const copiedMessage = 'Copied! ✔';
  const [content, setContent] = useState<string>(copyMessage);

  const clickHandler = () => {
    navigator.clipboard.writeText('carloantonioct@gmail.com');
    setContent(copiedMessage);
    toast((t) => (
      <span className="flex gap-x-4">
        <motion.span
          animate={{ rotate: [-20, 30] }}
          transition={{
            repeat: Infinity,
            duration: 0.35,
            repeatType: 'mirror',
          }}
          className="grid place-items-center text-2xl"
        >
          👋
        </motion.span>
        <span className="flex flex-col gap-y-1">
          <span className="font-semibold text-gray-800">Email Copied!</span>
          <span className="text-gray-500">Hope to hear from you soon.</span>
        </span>
      </span>
    ));
  };

  const hoverExitHandler = () => {
    setContent(copyMessage);
  };
  return (
    <Tippy
      content={content}
      placement="top"
      hideOnClick={false}
      onHidden={hoverExitHandler}
    >
      <p onClick={clickHandler} className="cursor-pointer overflow-hidden pb-1">
        <motion.span variants={contactInfoChildVariants} className="block">
          <span className="group relative flex items-center truncate transition">
            <span className="absolute h-4/6 w-full transition group-hover:bg-blue-200"></span>
            <span className="relative font-bold underline">
              carloantonioct@gmail.com
            </span>
          </span>
        </motion.span>
      </p>
    </Tippy>
  );
};

const contactInfoVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const contactInfoChildVariants: Variants = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

interface SocialLink extends Social {}

const SocialLink: React.FC<SocialLink> = ({ name, Icon, url }) => {
  return (
    <Link href={url} target="_blank" className="group relative p-1">
      <div className="will-change relative transform overflow-hidden transition ease-in-out group-hover:-translate-y-2">
        <motion.span variants={contactInfoChildVariants} className="block">
          <Icon />
        </motion.span>
      </div>
      <span className="absolute bottom-0 left-0 right-0 mx-auto h-1.5 w-8/12 rounded-[50%] bg-blue-500 opacity-0 transition group-hover:opacity-70"></span>
    </Link>
  );
};

export default Contact;
