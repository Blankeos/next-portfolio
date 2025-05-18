'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from './container';

import { useThemeContext } from '@/contexts/theme.context';
import { cn } from '@/lib/cn';
import { motion, Variants } from 'motion/react';
import { $path } from 'next-typesafe-url';
import { usePathname } from 'next/navigation';
import { CmdNav } from './cmd-nav';

const navVariants: Variants = {
  hidden: {
    y: 0.1,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.4,
      staggerChildren: 0.1,
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
    href: $path({ route: '/about' }),
  },
  {
    label: 'Projects',
    href: $path({ route: '/projects' }),
  },
  {
    label: 'Blog',
    href: $path({ route: '/blog' }),
  },
];

const Nav = () => {
  const pathname = usePathname();

  const [linksContainerIsHovered, setLinksContainerIsHovered] =
    useState<boolean>(false);

  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const { theme, setTheme } = useThemeContext();

  return (
    <motion.nav
      variants={navVariants}
      // 👇 Only show animation when on `/home`
      initial={pathname === $path({ route: '/' }) ? 'hidden' : 'visible'}
      animate="visible"
      className="relative z-30 h-24 w-full"
    >
      <Container
        maxWidth="7xl"
        className="flex h-full items-center justify-between"
      >
        <Link
          href="/"
          className="group text-primary flex h-full cursor-pointer items-center pr-5 text-2xl font-black tracking-tight select-none lg:text-2xl"
        >
          <motion.span variants={navChildVariants} className="relative block">
            <span className="text-primary-darker absolute block">CATT</span>
            <span className="text-primary relative block transition will-change-transform group-hover:-translate-y-[0.20rem]">
              CATT
            </span>
          </motion.span>
        </Link>

        <div className="flex space-x-10">
          <div
            className="hidden items-center gap-x-10 text-sm text-gray-600 md:flex"
            onMouseEnter={() => setLinksContainerIsHovered(true)}
            onMouseLeave={() => {
              setLinksContainerIsHovered(false);
            }}
          >
            {navLinks.map((navLink, index) => (
              <motion.span
                variants={navChildVariants}
                key={index}
                className="text-typography-foreground relative block"
                onMouseEnter={() => setHoveredLink(navLink.label)}
              >
                <Link href={navLink.href} className={cn('relative h-5')}>
                  {hoveredLink === navLink.label ? (
                    <motion.span
                      layoutId="navlink-hover"
                      layout
                      className="absolute -top-1.5 right-0 -bottom-2 left-0 flex justify-center will-change-transform"
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
                        className="bg-primary absolute bottom-0 h-[1px] w-full will-change-auto"
                      />
                    </motion.span>
                  ) : null}

                  <span
                    className={cn(
                      'relative z-10',
                      pathname.split('/').at(1) ===
                        navLink.href.split('/').at(1)
                        ? 'text-primary transition'
                        : ''
                    )}
                  >
                    {navLink.label}
                  </span>
                </Link>
              </motion.span>
            ))}
          </div>
          <CmdNav />
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
      className="group relative flex h-10 w-10 cursor-pointer items-center justify-center transition ease-out select-none hover:text-white"
    >
      <span className="bg-primary absolute h-0 w-0 rounded-full transition-all ease-in-out group-hover:h-10 group-hover:w-10"></span>
      <span className="relative">{children}</span>
    </Link>
  );
};

export default Nav;
