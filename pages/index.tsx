import Hero from "../src/components/sections/Hero";
import Projects from "../src/components/sections/Projects";
import SideNav from "../src/components/SideNav";

import { useInView } from "react-intersection-observer";
import React from "react";
import Skills from "../src/components/sections/Skills";
import About from "../src/components/sections/About";
import Contact from "../src/components/sections/Contact";
import { useSectionActiveObserver } from "../src/hooks/useSectionActiveObserver";

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
