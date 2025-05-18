'use client';

import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';
import SideNav from '@/components/side-nav';

import About from '@/components/sections/about';
import BlogFeature from '@/components/sections/blog-feature';
import Contact from '@/components/sections/contacts';
import { useInView } from '@/hooks/use-in-view';
import { useSectionActiveObserver } from '@/hooks/use-section-active-observer';
import React from 'react';

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
      <div className="">
        {/* <iframe
          className="relative z-40"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/track/5awvelCGpDQHwgZem0ira9?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe> */}
        <div className="pointer-events-none fixed inset-0 top-0 z-40">
          <SideNav isVisible={!heroRefInView} activeIndex={activeIndex} />
        </div>
        <Projects sectionRef={projectsRef} />
        <BlogFeature sectionRef={skillsRef} />
        {/* <Skills sectionRef={skillsRef} /> */}
        <About sectionRef={aboutRef} />
        <Contact sectionRef={contactRef} />
      </div>
    </>
  );
};

export default Home;
