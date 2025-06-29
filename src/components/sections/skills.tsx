import React, { useEffect } from 'react';
import skills, { Skill } from '@/data/skills';
import Container from '../container';
import SectionHeading from '../section-heading';
import { SectionProps } from './types';

import { useInView } from '@/hooks/use-in-view';
import { motion, useAnimation, Variants } from 'motion/react';

import 'tippy.js/dist/tippy.css'; // optional
import { ToolTipComp } from '../ui/tooltip';

interface SkillsProps extends SectionProps {}

const Skills: React.FC<SkillsProps> = ({ sectionRef }) => {
  return (
    <section id="skills-section" ref={sectionRef} className="w-full py-48">
      <Container
        maxWidth="7xl"
        className="relative grid grid-cols-1 lg:grid-cols-2"
      >
        <div className="flex items-center">
          <div className="relative">
            <GrayCircle />
            <SectionHeading
              className="relative z-10 text-4xl font-light text-gray-800 sm:text-5xl"
              text={['Skills', '& Technologies']}
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
    <div className="absolute -top-20 -left-20 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200">
      <div className="absolute h-72 w-72 rounded-full border border-gray-200"></div>
    </div>
  );
};

const skillsGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      ease: 'easeOut',
    },
  },
};

const SkillsGrid = () => {
  const [ref, inView] = useInView({
    amount: 0.8,
    once: true,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={skillsGridVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
      className="z-10 mt-16 grid grid-cols-3 justify-items-center gap-y-16 text-gray-500 md:gap-10 md:gap-x-14 lg:mt-0 lg:grid-cols-4 lg:place-self-center"
    >
      {skills.map((skill, i) => {
        return (
          <motion.span
            className="block text-center"
            variants={skillItemVariants}
            key={i}
          >
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
    <ToolTipComp content={name}>
      <motion.div
        variants={skillItemVariants}
        className="flex h-20 w-20 items-center justify-center text-5xl md:text-6xl"
      >
        <Icon className="text-blue-500" />
      </motion.div>
    </ToolTipComp>
  );
};

export default Skills;
