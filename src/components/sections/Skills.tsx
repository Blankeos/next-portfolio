import React, { useEffect } from "react";
import skills, { Skill } from "../../../data/skills";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { SectionProps } from "./types";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

interface SkillsProps extends SectionProps {}

const Skills: React.FC<SkillsProps> = ({ sectionRef }) => {
  return (
    <section id="skills-section" ref={sectionRef} className="w-full py-48">
      <Container
        maxWidth="7xl"
        className="relative grid lg:grid-cols-2 grid-cols-1"
      >
        <div className="flex items-center">
          <div className="relative">
            <GrayCircle />
            <SectionHeading
              className="relative font-light text-4xl sm:text-5xl z-10 text-gray-800"
              text={["Skills", "& Technologies"]}
            />
          </div>
        </div>
        <SkillsGrid />
      </Container>
    </section>
  );
};

const GrayCircle = () => {
  return (
    <div className="absolute flex items-center justify-center rounded-full bg-gray-200 h-20 w-20 -top-20 -left-20">
      <div className="absolute h-72 w-72 border-gray-200 border rounded-full"></div>
    </div>
  );
};

const skillsGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillItemVariants: Variants = {
  hidden: {
    // filter: "blur(1.2rem)",
    rotate: 5,
    opacity: 0,
    y: 40,
  },
  visible: {
    // filter: "blur(0px)",
    rotate: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
    },
  },
};

const SkillsGrid = () => {
  const [ref, inView] = useInView({
    threshold: 0.8,
    root: null,
    triggerOnce: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <motion.div
      variants={skillsGridVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
      className="grid grid-cols-3 lg:grid-cols-4 justify-items-center lg:place-self-center md:gap-10 gap-y-16 z-10 mt-16 lg:mt-0 text-gray-500"
    >
      {skills.map((skill, i) => {
        return (
          <motion.span className="block" variants={skillItemVariants} key={i}>
            {skill.name}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

interface SkillItem extends Skill {}
const SkillItem: React.FC<SkillItem> = ({ name, Icon }) => {
  return (
    <Tippy content={name}>
      <motion.div
        variants={skillItemVariants}
        className="h-20 w-20 flex justify-center items-center text-5xl md:text-6xl"
      >
        <Icon className="text-blue-500" />
      </motion.div>
    </Tippy>
  );
};

export default Skills;
