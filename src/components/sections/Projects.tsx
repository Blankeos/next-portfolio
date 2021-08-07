import React, { useEffect } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

import { BsArrowRight as Arrow } from "react-icons/bs";
import { SectionProps } from "./types";

import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProjectsProps extends SectionProps {}

const Projects: React.FC<ProjectsProps> = ({ sectionRef }) => {
  return (
    <section
      id="projects-section"
      ref={sectionRef}
      className="bg-blue-50 w-full py-16 border-t"
    >
      <Container maxWidth="7xl" className="relative z-10">
        <SectionHeading
          className="font-light text-5xl absolute"
          text={["Featured", "Projects"]}
        />
        <ProjectsGrid />
      </Container>
    </section>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-16 mt-12 items-end">
      <ProjectCard title="1" />
      {/* className="pt-40"  */}
      <ProjectCard title="2" />
      <ProjectCard title="3" />
      <ProjectCard title="4" />
      {/* className="pb-40"  */}
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  className?: string;
}

const ProjectCard = ({ title, className = "" }: ProjectCardProps) => {
  const [imageRef, imageInView] = useInView({ threshold: 0.8 });
  const [textRef, textInView] = useInView({
    threshold: 1,
    root: null,
    rootMargin: "-100px 0px",
  });

  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (imageInView) {
      imageControls.start({ height: "0%", transition: { duration: 0.5 } });
    }
  }, [imageInView]);

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textInView]);

  const textParentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textChildVariants: Variants = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "circOut",
      },
    },
  };
  return (
    <div className="project-card">
      <div className="group flex flex-col h-full cursor-pointer">
        <div
          ref={imageRef}
          className="h-full flex items-center justify-center bg-gray-200 relative overflow-hidden"
          style={{ minHeight: "25rem" }}
        >
          <motion.div
            initial={{ height: "100%" }}
            animate={imageControls}
            className="bg-blue-50 self-start w-full"
          ></motion.div>
        </div>
        <motion.div
          variants={textParentVariants}
          initial="hidden"
          animate={textControls}
          ref={textRef}
        >
          <motion.div
            variants={textChildVariants}
            className="flex justify-between pt-10"
          >
            <h3 className="font-semibold text-3xl text-gray-800">
              Project {title}
            </h3>
            <div className="relative flex items-center justify-center h-12 w-12">
              <div className="absolute h-0 w-0 group-hover:h-12 group-hover:w-12 rounded-full transition-all ease-out duration-300 bg-blue-500 flex items-center justify-center"></div>
              <Arrow
                size="2rem"
                className="relative group-hover:-rotate-45 transform transition duration-300 ease-out text-gray-800 group-hover:text-white"
              />
            </div>
          </motion.div>
          <motion.p variants={textChildVariants} className="pt-3 text-gray-500">
            Short description
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
