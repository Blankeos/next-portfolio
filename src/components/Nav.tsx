import React from "react";
import Container from "./Container";
import Link from "next/link";
import SectionLink from "./SectionLink";
import sections from "../../data/sections";

import { motion, Variants } from "framer-motion";
import socials from "../../data/socials";

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
        <div className="flex space-x-10">
          <div className="text-sm text-gray-600 hidden lg:flex space-x-10 items-center">
            <>
              {sections.map((section, i) => (
                <motion.span
                  variants={navChildVariants}
                  key={i}
                  className="block"
                >
                  <SectionLink href={section.href}>{section.name}</SectionLink>
                </motion.span>
              ))}
            </>
          </div>
          <div className="text-sm text-gray-600 flex space-x-5 items-center">
            {socials.map((social, i) => (
              <motion.span
                variants={navChildVariants}
                key={i}
                className="block"
              >
                <SocialLink href={social.url}>
                  {<social.Icon size="1.1rem" />}
                </SocialLink>
              </motion.span>
            ))}
          </div>
        </div>
      </Container>
    </motion.nav>
  );
};

interface SocialLinkProps {
  href: string;
}
const SocialLink: React.FC<SocialLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="select-none relative group cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-blue-500 hover:text-white rounded-full transition ease-in-out">
        {children}
      </a>
    </Link>
  );
};

export default Nav;
