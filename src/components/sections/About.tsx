import React, { useEffect } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { SectionProps } from "./types";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import about from "../../../data/about";

interface AboutProps extends SectionProps {}

const About: React.FC<AboutProps> = ({ sectionRef }) => {
  const controls = useAnimation();

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="bg-gray-50 w-full py-40"
    >
      <Container maxWidth="7xl" className="relative">
        <SectionHeading
          className="relative font-light text-4xl sm:text-5xl z-10 text-gray-800"
          text={["About", "Me"]}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-2 mt-20 z-10 gap-8">
          <ProfileImage />
          <ProfileInfo />
        </div>
      </Container>
    </section>
  );
};

const ProfileImage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    root: null,
    threshold: 1,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        width: "0%",
        transition: {
          ease: "circOut",
          duration: 1,
        },
      });
    }
  }, [inView]);
  return (
    <div className="relative w-full h-full flex flex-col">
      <div ref={ref} className="inline-block relative md:w-5/6">
        <div
          className="relative"
          style={{
            marginTop: "100%",
          }}
        ></div>
        <div className="absolute inset-0">
          <div
            className="absolute w-full h-full"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1570003179394-40b59f9b4a5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          ></div>
          <motion.div
            initial={{ width: "100%" }}
            animate={controls}
            className="absolute bg-gray-50 w-full h-full self-end"
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
      ease: "circOut",
      duration: 0.5,
    },
  },
};

const ProfileInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    root: null,
    threshold: 0.5,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={profileInfoVariants}
      initial={"hidden"}
      animate={controls}
      className="flex flex-col space-y-8 mt-5 md:mt-0"
    >
      <motion.h2
        variants={profileInfoChildVariants}
        className="font-bold text-5xl md:text-6xl text-gray-800 tracking-tighter"
      >
        {about.fullName}
      </motion.h2>
      <motion.span
        variants={profileInfoChildVariants}
        className="w-16 h-2 bg-blue-500"
      ></motion.span>
      <div className=" text-gray-600 flex flex-col space-y-5">
        {about.bio.map((p, i) => {
          return (
            <motion.p key={i} variants={profileInfoChildVariants}>
              {p}
            </motion.p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default About;
