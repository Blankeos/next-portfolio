import FloatingCircle from "../FloatingCircle";
// Icons
import { FaReact, FaDiscord } from "react-icons/fa";
import { HiOutlineDocumentDownload as ResumeIcon } from "react-icons/hi";

// React
import React, { CSSProperties, HTMLAttributes, useEffect } from "react";

import { motion } from "framer-motion";

import Particles, {
  IOptions,
  particlesJS,
  RecursivePartial,
} from "react-tsparticles";
import particlesConfig from "../../particles/particles-config";

import Container from "../Container";
import Image from "next/image";

import { SectionProps } from "./types";

interface HeroProps extends SectionProps {}

const Hero: React.FC<HeroProps> = ({ sectionRef }) => {
  return (
    <section id="hero-section" ref={sectionRef} className="relative pb-5">
      <div className="w-full h-full absolute overflow-hidden">
        <div className="particle-wrapper absolute w-full h-full">
          <Particles
            id="tsparticles"
            options={particlesConfig as RecursivePartial<IOptions>}
            className="h-full"
            canvasClassName="object-cover"
          />
        </div>
      </div>
      <Container className="relative" maxWidth="8xl">
        <div className="flex">
          <div className="flex flex-col py-40 flex-grow space-y-5">
            <div>
              <motion.p
                className="relative z-10 text-gray-800"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, ease: "easeOut", duration: 0.5 }}
              >
                <span className="flex space-x-2">
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{
                      scale: [1, 1.6, 1.6, 1.5, 1.6, 1.6, 1.5, 1.6, 1],
                      rotate: [0, 30, 0, 30, 0, 30, 0, 30, 0],
                    }}
                    transition={{ delay: 3.5, duration: 1.8 }}
                  >
                    👋
                  </motion.div>
                  <div>Hello there! I am</div>
                </span>
              </motion.p>
              <h1 className="font-bold text-9xl text-gray-800 relative z-10">
                <span className="flex flex-wrap">
                  <span className="overflow-hidden">
                    <motion.div
                      initial={{ y: 250 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.75, delay: 1, ease: "easeOut" }}
                    >
                      Carlo
                    </motion.div>
                  </span>
                  <span className="overflow-hidden">
                    <motion.div
                      initial={{ y: 250 }}
                      animate={{ y: 0 }}
                      transition={{
                        duration: 0.75,
                        delay: 1.2,
                        ease: "easeOut",
                      }}
                    >
                      &nbsp;Taleon
                    </motion.div>
                  </span>
                </span>
              </h1>
              <p className="mt-5 max-w-md text-gray-500 relative z-10">
                I make games during my free time and I enjoy building web apps
                using React. I&apos;m also a student at West Visayas State
                University studying Computer Science.
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="select-none bg-gray-600 rounded-md px-5 py-2 text-white relative z-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
                Get in Touch
              </button>
              <button className="select-none bg-blue-500 rounded-md px-5 py-2 text-white flex space-x-1 items-center relative z-10">
                <ResumeIcon size="1.2rem" />
                <span>Resume</span>
              </button>
            </div>
          </div>
          <div className="relative w-96">
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ ease: "easeOut", delay: 2.5, duration: 0.75 }}
              className="bg-blue-500 h-full w-full absolute top-0 left-0"
            ></motion.div>
            <motion.div
              initial={{ height: "0%" }}
              animate={{ height: "100%" }}
              transition={{ delay: 3, duration: 0.75, ease: "easeOut" }}
              className="w-full h-1/2 relative"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1570003179394-40b59f9b4a5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
        <FloatingCircle
          style={{ right: "50rem", top: "5rem" }}
          animationDelay={1}
        >
          <FaReact className="text-blue-400" size="2rem" />
        </FloatingCircle>
        <FloatingCircle
          style={{ right: "30rem", bottom: "10rem" }}
          orbitSize="25rem"
          orbitClass="border-indigo-400"
          nucleusClass="bg-indigo-400"
        >
          <Image
            src="https://static.wikia.nocookie.net/spartaremix/images/e/ec/Discord-new-logo.png"
            height="48"
            width="48"
          />
        </FloatingCircle>
      </Container>
    </section>
  );
};

export default Hero;
