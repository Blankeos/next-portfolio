'use client';

import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import SideNav from '@/components/side-nav';

import About from '@/components/sections/about';
import Contact from '@/components/sections/contacts';
import Skills from '@/components/sections/skills';
import { useSectionActiveObserver } from '@/hooks/use-section-active-observer';
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
