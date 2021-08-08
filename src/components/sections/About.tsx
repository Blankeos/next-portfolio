import React, { useEffect } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { SectionProps } from "./types";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AboutProps extends SectionProps {}

const About: React.FC<AboutProps> = ({ sectionRef }) => {
  const controls = useAnimation();

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="bg-blue-50 w-full py-48 border-t"
    >
      <Container maxWidth="7xl" className="relative z-10">
        <SectionHeading
          className="relative font-light text-5xl"
          text={["About", "Me"]}
        />
        <div className="relative grid grid-cols-2 mt-20">
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
    <div
      ref={ref}
      className="relative flex flex-col h-96 w-96 bg-blue-200 overflow-hidden"
    >
      <motion.div
        initial={{ width: "100%" }}
        animate={controls}
        className="relative bg-blue-50 h-full self-end"
      ></motion.div>
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
    rootMargin: "-100px 0px",
    threshold: 1,
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
      className="flex flex-col space-y-5"
    >
      <motion.h2
        variants={profileInfoChildVariants}
        className="font-semibold text-6xl text-gray-800"
      >
        Carlo Antonio T. Taleon
      </motion.h2>
      <motion.span
        variants={profileInfoChildVariants}
        className="w-16 h-2 bg-blue-500"
      ></motion.span>
      <motion.p
        variants={profileInfoChildVariants}
        className="text-lg text-gray-600"
      >
        IPO managed the lightning fast testnet when Tezos could be a REKT of
        lots of bear trap. Blockchain froze denial of service attack when NFT
        froze the provably fair peer-to-peer network.
      </motion.p>
    </motion.div>
  );
};

export default About;
