'use client';

import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import SideNav from '@/components/SideNav';

import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Skills from '@/components/sections/Skills';
import { useSectionActiveObserver } from '@/hooks/useSectionActiveObserver';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const [heroRef, heroRefInView] = useInView();
  const [projectsRef, projectsRefInView] = useInView();
  const [skillsRef, skillsRefInView] = useInView();
  const [aboutRef, aboutRefInView] = useInView();
  const [contactRef, contactRefInView] = useInView();

  // For SideNav
  const [activeIndex] = useSectionActiveObserver(
    [projectsRefInView, skillsRefInView, aboutRefInView, contactRefInView],
    heroRefInView
  );

  return (
    <>
      <Hero sectionRef={heroRef} />
      <div className="relative">
        <div className="absolute inset-0">
          <SideNav isVisible={!heroRefInView} activeIndex={activeIndex} />
        </div>
        <Projects sectionRef={projectsRef} />
        <Skills sectionRef={skillsRef} />
        <About sectionRef={aboutRef} />
        <Contact sectionRef={contactRef} />
      </div>
    </>
  );
};

export default Home;
