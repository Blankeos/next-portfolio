'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';

import { cn } from '@/lib/cn';
import { pageRoutes } from '@/lib/pageRoutes';
import { motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navVariants: Variants = {
  hidden: {
    y: 0.1,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.8,
      staggerChildren: 0.25,
      when: 'beforeChildren',
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
      ease: 'easeOut',
      duration: 0.8,
    },
  },
};

const navLinks = [
  {
    label: 'About',
    href: pageRoutes.about,
  },
  {
    label: 'Projects',
    href: pageRoutes.projects,
  },
  {
    label: 'Blog',
    href: pageRoutes.blog,
  },
];

const Nav = () => {
  const pathname = usePathname();

  const [linksContainerIsHovered, setLinksContainerIsHovered] =
    useState<boolean>(false);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <motion.nav
      variants={navVariants}
      // 👇 Only show animation when on `/home`
      initial={pathname === pageRoutes.home ? 'hidden' : 'visible'}
      animate="visible"
      className="relative z-30 h-24 w-full"
    >
      <Container
        maxWidth="7xl"
        className="flex h-full items-center justify-between"
      >
        <Link
          href="/"
          className="group flex h-full cursor-pointer select-none items-center pr-5 text-2xl font-black tracking-tight text-blue-500 lg:text-2xl"
        >
          <motion.span variants={navChildVariants} className="relative block">
            <span className="absolute block text-[#1532ff]">CATT</span>
            <span className="relative block transition will-change-transform group-hover:-translate-y-[0.20rem]">
              CATT
            </span>
          </motion.span>
        </Link>

        <div className="flex space-x-10">
          <div
            className="flex items-center gap-x-10 text-sm text-gray-600"
            onMouseEnter={() => setLinksContainerIsHovered(true)}
            onMouseLeave={() => {
              setLinksContainerIsHovered(false);
            }}
          >
            {navLinks.map((navLink, index) => (
              <motion.span
                variants={navChildVariants}
                key={index}
                className="relative block"
                onMouseEnter={() => setHoveredLink(navLink.label)}
              >
                <Link href={navLink.href} className={cn('relative h-5')}>
                  {hoveredLink === navLink.label ? (
                    <motion.span
                      layoutId="navlink-hover"
                      layout
                      className="absolute -bottom-2 -top-1.5 left-0 right-0 flex justify-center will-change-transform"
                      transition={{
                        duration: 0.3,
                        ease: 'easeOut',
                      }}
                      // animate={{
                      //   opacity: linksContainerIsHovered ? 1 : 0,
                      //   y: linksContainerIsHovered ? 0 : -15,
                      // }}
                      // className={cn(
                      //   'absolute -bottom-1.5 -left-2.5 -right-2.5 -top-1.5 rounded bg-blue-50'
                      // )}
                    >
                      <motion.span
                        animate={{
                          width: linksContainerIsHovered ? undefined : 0,
                        }}
                        className="absolute bottom-0 h-[1px] w-full bg-blue-500 will-change-auto"
                      />
                    </motion.span>
                  ) : null}

                  <span
                    className={cn(
                      'relative z-10',
                      pathname.split('/').at(1) ===
                        navLink.href.split('/').at(1)
                        ? 'text-primary-500 transition'
                        : ''
                    )}
                  >
                    {navLink.label}
                  </span>
                </Link>
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
const SocialLink: FCC<SocialLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="group relative flex h-10 w-10 cursor-pointer select-none items-center justify-center transition ease-out hover:text-white"
    >
      <span className="absolute h-0 w-0 rounded-full bg-blue-500 transition-all ease-in-out group-hover:h-10 group-hover:w-10"></span>
      <span className="relative">{children}</span>
    </Link>
  );
};

export default Nav;
