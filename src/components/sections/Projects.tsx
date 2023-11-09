import React, { useEffect } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

import { RiArrowUpLine as Arrow } from "react-icons/ri";
import { SectionProps } from "./types";

import { useAnimation, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import projects, { Project } from "../../../data/projects";

import Link from "next/link";

interface ProjectsProps extends SectionProps {}

const Projects: React.FC<ProjectsProps> = ({ sectionRef }) => {
  return (
    <section
      id="projects-section"
      ref={sectionRef}
      className="bg-gray-50 w-full py-16"
    >
      <Container maxWidth="7xl" className="relative">
        <SectionHeading
          className="font-light text-4xl sm:text-5xl absolute z-20 text-gray-800"
          text={["Featured", "Projects"]}
        />
        <ProjectsGrid />
      </Container>
    </section>
  );
};

const ProjectsGrid = () => {
  return (
    <div className="relative grid grid-cols-1 pt-28 md:pt-0 md:grid-cols-2 gap-5 gap-y-8 md:gap-16 md:gap-x-5 lg:gap-16 mt-12 items-end z-10">
      {projects.map((project, i) => {
        return (
          <ProjectCard
            key={i}
            title={project.title}
            shortDesc={project.shortDesc}
            imageURL={project.imageURL}
            slug={project.slug}
            demoURL={project.demoURL && project.demoURL}
            tags={project.tags}
          />
        );
      })}
    </div>
  );
};

interface ProjectCardProps extends Project {
  title: string;
  className?: string;
}

const ProjectCard = ({
  title,
  imageURL,
  shortDesc,
  slug,
  demoURL,
  tags,
}: ProjectCardProps) => {
  const [imageRef, imageInView] = useInView({
    threshold: 0.3,
    root: null,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });
  const [textRef, textInView] = useInView({
    threshold: 1,
    root: null,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });

  const imageControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (imageInView) {
      imageControls.start({
        height: "0%",
        transition: { duration: 1.2, ease: "circOut" },
      });
    }
  }, [imageInView, imageControls]);

  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textInView, textControls]);

  const textParentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const textChildVariants: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };
  return (
    <div className="project-card">
      <Link
        href={demoURL ? demoURL : "/project-not-found"}
        className=""
        target="_blank"
      >
        <div className="project-card-wrapper group flex flex-col h-full cursor-pointer">
          <div className="inline-block relative w-full h-full">
            <div style={{ marginTop: "75%" }}></div>
            <div className="absolute inset-0">
              <div
                ref={imageRef}
                className="h-full w-full flex bg-gray-200 relative overflow-hidden"
              >
                <span className="relative w-full h-full">
                  {imageURL && (
                    <Image
                      src={imageURL}
                      priority
                      alt={`${title} featured pic`}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center"
                      }} />
                  )}
                  <span className="project-card-image-highlight"></span>
                </span>
                <motion.div
                  initial={{ height: "100%" }}
                  animate={imageControls}
                  className="absolute bg-gray-50 self-start w-full will-change-height"
                ></motion.div>
              </div>
            </div>
          </div>
          <motion.div
            variants={textParentVariants}
            initial="hidden"
            animate={textControls}
            ref={textRef}
          >
            <div className="spacer-element h-10" />
            <motion.div
              variants={textChildVariants}
              className="flex justify-between"
            >
              <div className="flex flex-col space-y-3">
                <h3 className="font-bold text-2xl md:text-3xl text-gray-800 tracking-tighter group-hover:pl-2 transition-[padding] duration-500">
                  {title}
                </h3>
                <motion.p
                  variants={textChildVariants}
                  className="text-gray-500 text-sm md:text-base group-hover:pl-2 transition-[padding] duration-500 delay-100"
                >
                  {shortDesc ? shortDesc.toLowerCase() : "short description"}
                </motion.p>
              </div>
              <div className="relative flex items-center justify-center h-12 w-12">
                <div className="absolute h-0 w-0 group-hover:h-12 group-hover:w-12 rounded-full transition-all ease-out duration-300 bg-gradient-to-t from-[#1532ff] to-blue-500 flex items-center justify-center"></div>
                <Arrow
                  size="2rem"
                  className="relative rotate-90 group-hover:rotate-45 transform transition duration-500 ease-out text-gray-800 group-hover:text-white"
                />
              </div>
            </motion.div>
            <motion.div
              variants={textChildVariants}
              className="mt-2 h-7 flex items-end gap-x-1 overflow-hidden group-hover:pl-2 transition-[padding] duration-500 delay-200 "
            >
              {tags &&
                tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs border px-2.5 py-1 rounded-full text-blue-500 border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition"
                  >
                    <span className="block transform translate-y-[0.10rem]">
                      {tag}
                    </span>
                  </span>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </div>
  );
};

export default Projects;
