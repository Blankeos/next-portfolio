import React, { useEffect } from 'react'
import Container from '../Container'
import SectionHeading from '../SectionHeading'

import { RiArrowUpLine as Arrow } from 'react-icons/ri'
import { SectionProps } from './types'

import { useAnimation, motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import projects, { Project } from '../../../data/projects'

import Link from 'next/link'

interface ProjectsProps extends SectionProps {}

const Projects: React.FC<ProjectsProps> = ({ sectionRef }) => {
  return (
    <section
      id="projects-section"
      ref={sectionRef}
      className="w-full bg-gray-50 py-16"
    >
      <Container maxWidth="7xl" className="relative">
        <SectionHeading
          className="absolute z-20 text-4xl font-light text-gray-800 sm:text-5xl"
          text={['Featured', 'Projects']}
        />
        <ProjectsGrid />
      </Container>
    </section>
  )
}

const ProjectsGrid = () => {
  return (
    <div className="relative z-10 mt-12 grid grid-cols-1 items-end gap-5 gap-y-8 pt-28 md:grid-cols-2 md:gap-16 md:gap-x-5 md:pt-0 lg:gap-16">
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
        )
      })}
    </div>
  )
}

interface ProjectCardProps extends Project {
  title: string
  className?: string
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
    rootMargin: '-100px 0px',
    triggerOnce: true,
  })
  const [textRef, textInView] = useInView({
    threshold: 1,
    root: null,
    rootMargin: '-100px 0px',
    triggerOnce: true,
  })

  const imageControls = useAnimation()
  const textControls = useAnimation()

  useEffect(() => {
    if (imageInView) {
      imageControls.start({
        height: '0%',
        transition: { duration: 1.2, ease: 'circOut' },
      })
    }
  }, [imageInView, imageControls])

  useEffect(() => {
    if (textInView) {
      textControls.start('visible')
    }
  }, [textInView, textControls])

  const textParentVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
      },
    },
  }

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
        ease: 'easeOut',
      },
    },
  }
  return (
    <div className="project-card">
      <Link
        href={demoURL ? demoURL : '/project-not-found'}
        className="relative"
        target="_blank"
      >
        <div className="project-card-wrapper group flex h-full cursor-pointer flex-col">
          <div className="relative inline-block h-full w-full">
            <div style={{ marginTop: '75%' }}></div>
            <div className="absolute inset-0">
              <div
                ref={imageRef}
                className="relative flex h-full w-full overflow-hidden bg-gray-200"
              >
                <span className="relative h-full w-full">
                  {imageURL && (
                    <Image
                      loading="lazy"
                      src={imageURL}
                      alt={`${title} featured pic`}
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  )}
                  <span className="project-card-image-highlight"></span>
                </span>
                <motion.div
                  initial={{ height: '100%' }}
                  animate={imageControls}
                  className="will-change-height absolute w-full self-start bg-gray-50"
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
                <h3 className="text-2xl font-bold tracking-tighter text-gray-800 transition-[padding] duration-500 group-hover:pl-2 md:text-3xl">
                  {title}
                </h3>
                <motion.p
                  variants={textChildVariants}
                  className="text-sm text-gray-500 transition-[padding] delay-100 duration-500 group-hover:pl-2 md:text-base"
                >
                  {shortDesc ? shortDesc.toLowerCase() : 'short description'}
                </motion.p>
              </div>
              <div className="relative flex h-12 w-12 items-center justify-center">
                <div className="absolute flex h-0 w-0 items-center justify-center rounded-full bg-gradient-to-t from-[#1532ff] to-blue-500 transition-all duration-300 ease-out group-hover:h-12 group-hover:w-12"></div>
                <Arrow
                  size="2rem"
                  className="relative rotate-90 transform text-gray-800 transition duration-500 ease-out group-hover:rotate-45 group-hover:text-white"
                />
              </div>
            </motion.div>
            <motion.div
              variants={textChildVariants}
              className="mt-2 flex h-7 items-end gap-x-1 overflow-hidden transition-[padding] delay-200 duration-500 group-hover:pl-2 "
            >
              {tags &&
                tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-blue-500 px-2.5 py-1 text-xs text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white"
                  >
                    <span className="block translate-y-[0.10rem] transform">
                      {tag}
                    </span>
                  </span>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </Link>
    </div>
  )
}

export default Projects
