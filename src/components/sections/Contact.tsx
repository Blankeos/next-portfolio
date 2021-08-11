import React, { useEffect, useState } from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SectionProps } from "./types";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import socials, { Social } from "../../../data/socials";
import { icons } from "react-icons/lib";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ContactProps extends SectionProps {}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.8,
    root: null,
    rootMargin: "-150px 0px",
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <section
      id="contact-section"
      ref={sectionRef}
      className="w-full md:py-96 py-24"
    >
      <Container
        maxWidth="7xl"
        className="relative grid grid-cols-1 md:grid-cols-2 z-10"
      >
        <div className="flex flex-col space-y-10">
          <span className="md:block hidden">
            <SectionHeading
              className="relative font-light text-4xl sm:text-5xl"
              text={["Let's work", "together"]}
            />
          </span>
          <span className="md:hidden block">
            <SectionHeading
              noOffset
              className="relative font-light text-4xl sm:text-5xl text-center"
              text={["Let's work", "together"]}
            />
          </span>
        </div>
        <motion.div
          ref={ref}
          variants={contactInfoVariants}
          initial="hidden"
          animate={controls}
          className="text-2xl lg:text-4xl text-gray-600 flex flex-col space-y-5 mt-20 md:mt-0 items-center md:items-start aoverflow-hidden"
        >
          <ClickableEmail />
          <div className="pt-5 flex space-x-8 text-blue-500">
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
  const copyMessage = "Copy";
  const copiedMessage = "Copied!";
  const [content, setContent] = useState<string>(copyMessage);

  const clickHandler = () => {
    navigator.clipboard.writeText("carloantonioct@gmail.com");

    setContent(copiedMessage);
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
      <p onClick={clickHandler} className="overflow-hidden pb-1">
        <motion.span variants={contactInfoChildVariants} className="block">
          <span className="hover:bg-gray-800 hover:text-white transition truncate">
            carloantonioct@gmail.com
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
      staggerChildren: 0.35,
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
      ease: "easeOut",
    },
  },
};

interface SocialLink extends Social {}

const SocialLink: React.FC<SocialLink> = ({ name, Icon, url }) => {
  return (
    <Link href={url}>
      <a target="_blank" className="group p-1">
        <div className="overflow-hidden transform group-hover:-translate-y-2 transition ease-in-out">
          <motion.span variants={contactInfoChildVariants} className="block">
            <Icon />
          </motion.span>
        </div>
      </a>
    </Link>
  );
};

export default Contact;
