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
import toast from "react-hot-toast";

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
      className="w-full md:py-52 py-24"
    >
      <Container maxWidth="7xl" className="relative grid grid-cols-1 z-10">
        <div className="flex flex-col space-y-10">
          <span className="">
            <SectionHeading
              noOffset
              className="relative font-light text-4xl sm:text-5xl text-center text-gray-800"
              text={["Let's work", "together"]}
            />
          </span>
        </div>
        <motion.div
          ref={ref}
          variants={contactInfoVariants}
          initial="hidden"
          animate={controls}
          className="text-2xl lg:text-4xl text-gray-800 flex flex-col space-y-5 mt-20 items-center overflow-hidden"
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
  const copyMessage = "Copy 📝";
  const copiedMessage = "Copied! ✔";
  const [content, setContent] = useState<string>(copyMessage);

  const clickHandler = () => {
    navigator.clipboard.writeText("carloantonioct@gmail.com");
    setContent(copiedMessage);
    toast((t) => (
      <span className="flex gap-x-4">
        <span className="grid place-items-center text-2xl">👋</span>
        <span className="flex flex-col gap-y-1">
          <span className="font-semibold text-gray-800">Email Copied!</span>
          <span className="text-gray-500">Hope to hear from you soon.</span>
        </span>
      </span>
    ));
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
      <p onClick={clickHandler} className="overflow-hidden pb-1 cursor-pointer">
        <motion.span variants={contactInfoChildVariants} className="block">
          <span className="group relative transition truncate flex items-center">
            <span className="absolute transition w-full group-hover:bg-blue-200 h-4/6"></span>
            <span className="relative underline font-bold">
              carloantonioct@gmail.com
            </span>
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
      staggerChildren: 0.3,
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
      <a target="_blank" className="group p-1 relative">
        <div className="relative overflow-hidden transform group-hover:-translate-y-2 transition ease-in-out will-change">
          <motion.span variants={contactInfoChildVariants} className="block">
            <Icon />
          </motion.span>
        </div>
        <span className="absolute bottom-0 left-0 right-0 bg-blue-500 mx-auto w-8/12 h-1.5 rounded-[50%] group-hover:opacity-70 opacity-0 transition"></span>
      </a>
    </Link>
  );
};

export default Contact;
