import React from "react";
import Container from "./Container";
import Link from "next/link";
import SectionLink from "./SectionLink";
import sections from "../../data/sections";

import { motion, Variants } from "framer-motion";

const navVariants: Variants = {
  hidden: {
    y: 0.1,
  },
  visible: {
    y: 0,
    transition: {
      delay: 2.5,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

const navChildVariants: Variants = {
  hidden: {
    y: -35,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};
const Nav = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="h-24 w-full"
    >
      <Container
        maxWidth="8xl"
        className="flex items-center justify-between h-full"
      >
        <Link href="/">
          <a className="font-extrabold select-none cursor-pointer h-full flex items-center pr-5">
            <motion.span variants={navChildVariants} className="block">
              CATT
            </motion.span>
          </a>
        </Link>
        <div className="text-sm text-gray-600 flex space-x-10">
          {sections.map((section, i) => (
            <motion.span variants={navChildVariants} key={i} className="block">
              <SectionLink href={section.href}>{section.name}</SectionLink>
            </motion.span>
          ))}
        </div>
      </Container>
    </motion.nav>
  );
};

export default Nav;
