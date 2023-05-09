import FloatingCircle, { getContainerVariants } from "../FloatingCircle";
// Icons
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";
import { HiOutlineDocumentDownload as ResumeIcon } from "react-icons/hi";

// React
import React from "react";

import { Link as ScrollLink } from "react-scroll";
import { motion, Variants } from "framer-motion";

import Container from "../Container";

import { SectionProps } from "./types";
import ParticlesBackground from "../ParticlesBackground";
import Image from "next/image";
import Link from "next/link";

interface HeroProps extends SectionProps {}

const Hero: React.FC<HeroProps> = ({ sectionRef }) => {
  return (
    <section id="hero-section" ref={sectionRef} className="relative">
      <ParticlesBackground />
      <Container className="relative" maxWidth="7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr,2fr] pb-24 pt-24">
          {/* Left Side */}
          <div className="flex flex-col py-0 flex-grow space-y-5">
            <div className="flex flex-col space-y-5">
              <motion.div
                className="relative z-10 text-gray-800 text-sm md:text-base"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                  type: "spring",
                  bounce: 0.7,
                  duration: 2,
                }}
              >
                <span className="flex space-x-2">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{
                      scale: [1, 1.6, 1.6, 1.5, 1.6, 1.6, 1.5, 1.6, 1],
                      rotate: [0, 30, 0, 30, 0, 30, 0, 30, 0],
                    }}
                    transition={{ delay: 5, duration: 2 }}
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
                transition={{ delay: 2.7 }}
                className="c mt-1 max-w-sm lg:max-w-md text-gray-600 relative z-10 text-sm md:text-base"
              >
                I&apos;m a senior Computer Science student specializing in
                Artificial Intelligence at West Visayas University. I love
                making games, web apps with <b>React</b>, and doing ML!
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="flex space-x-3"
            >
              <ScrollLink
                to={"contact-section"}
                smooth={true}
                offset={5}
                duration={500}
              >
                <button className="secondary-btn">Get In Touch</button>
              </ScrollLink>
              <Link
                target="_blank"
                className="relative group z-20 hover:shadow-lg transition"
                href="/CarloTaleonResume_LATEST.pdf"
              >
                <span className="will-change-transform select-none bg-blue-500 px-6 py-3 text-white flex space-x-1 items-center relative z-10 text-sm md:text-base transform transition ease-out group-hover:-translate-y-1.5">
                  <ResumeIcon size="1.2rem" className="relative" />
                  <span className="relative">Resume</span>
                </span>
                <span className="bg-blue-600 absolute inset-0"></span>
              </Link>
            </motion.div>
          </div>
          {/* Right Side Container*/}
          <div className="hidden lg:block">
            {/* Image Div (Floaty Animation) */}
            <motion.div
              initial={{ y: -5 }}
              animate={{ y: -15 }}
              transition={{
                duration: 1.8,
                //  delay: floatDelay,
                repeat: Infinity,
                repeatType: "reverse",
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
                  delay: 5,
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                <Image
                  src="/imgs/hero_image.png"
                  width={350}
                  height={350}
                  alt="Carlo's Picture"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={getContainerVariants(0.4, 3.5)}
          initial="hidden"
          animate="visible"
          className="md:block hidden"
        >
          <FloatingCircle
            style={{ right: "50rem", top: "5rem" }}
            floatDelay={1.5}
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
            style={{ right: "30rem", bottom: "10rem" }}
            orbitSize="25rem"
            orbitClass="border-gray-300"
            nucleusClass="bg-[#ffe58e]"
            toastMessage={
              <span>
                I also do <b>ML</b> with{" "}
                <b className="text-[#ffca1d]">Python</b>!
              </span>
            }
          >
            <div
              className="h-12 w-12"
              style={{
                backgroundImage: `url('/imgs/python-logo.svg')`,
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            />
            {/* <Image
              alt="python-logo"
              src="/imgs/python-logo.svg"
              width={120}
              height={120}
            /> */}
            {/* <span
              className="block overflow-hidden"
              style={{ backgroundColor: "#323330" }}
            >
              <SiJavascript size="2rem" color="#f0db4f" />
            </span> */}
          </FloatingCircle>
          <FloatingCircle
            style={{ left: "5rem", bottom: "1.5rem" }}
            floatDelay={4.5}
            orbitClass="border-gray-300"
            nucleusClass="bg-[#0044d0]"
            toastMessage={
              <span>
                Definitely a <b className="text-[#007acc]">Typescript Expert</b>{" "}
                here!
              </span>
            }
          >
            <span className="block bg-white overflow-hidden">
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
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.75,
        ease: "circOut",
      },
    },
  };

  const parentVariants2: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8,
      },
    },
  };

  return (
    <h1 className="text-blue-500 relative z-10 flex flex-wrap">
      <motion.div
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="flex overflow-hidden hero-text font-black lg:text-8xl leading-none tracking-tight pt-2 pr-1"
      >
        {"Carlo".split("").map((letter, i) => {
          return (
            <motion.div
              key={i}
              variants={childVariants}
              className="block will-change-transform"
            >
              <div className="relative">
                <div className="select-none absolute inset-0 text-[#1229d5] hero-letter-bg">
                  {letter}
                </div>
                <div className="relative bg-gradient-to-t from-[#1532ff] via-blue-500 to-blue-500 bg-clip-text text-transparent hero-letter">
                  {letter}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <span className="font-black lg:text-8xl leading-none tracking-tight hero-text">
        {" "}
      </span>
      <motion.div
        variants={parentVariants2}
        initial="hidden"
        animate="visible"
        className="flex overflow-hidden hero-text font-black lg:text-8xl leading-none tracking-tight pt-2 pr-1"
      >
        {"Taleon".split("").map((letter, i) => {
          return (
            <motion.div
              key={i}
              variants={childVariants}
              className="block will-change-transform"
            >
              <div className="relative">
                <div className="select-none absolute inset-0 text-[#1229d5] hero-letter-bg">
                  {letter}
                </div>
                <div className="relative bg-gradient-to-t from-[#1532ff] via-blue-500 to-blue-500 bg-clip-text text-transparent hero-letter">
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
