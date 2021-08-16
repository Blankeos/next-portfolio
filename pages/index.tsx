import Head from "next/head";
import Image from "next/image";
import Hero from "../src/components/sections/Hero";
import Projects from "../src/components/sections/Projects";
import SideNav from "../src/components/SideNav";

import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
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
      <Head>
        <title>Carlo Taleon</title>
        <meta
          name="description"
          content="I enjoy building web apps using React. I'm also a student at West Visayas State University studying Computer Science."
        />
        <meta
          name="google-site-verification"
          content="Xc9Om93PVgBy3xwN6aPgKLGs4UNRZXQ5WsqMqeOiBMQ"
        />
        <link rel="icon" type="image/png" href="favicons/favicon.png" />
        <link
          rel="icon"
          sizes="192x192"
          href="favicons/android-chrome-192x192.png"
        />
        <link rel="apple-touch-icon" href="favicons/apple-touch-icon.png" />
        <meta property="og:title" content="Carlo Taleon | Portfolio" />
        <meta property="og:site_name" content="Carlo Taleon | Portfolio" />
        <meta property="og:url" content="https://carlo.vercel.app/" />
        <meta
          property="og:description"
          content="I enjoy building web apps using React. I'm also a student at West Visayas State University studying Computer Science."
        />
        <meta name="theme-color" content="#3B82F6" />
        <meta property="og:type" content="website" />
        <meta
          name="image"
          content="https://raw.githubusercontent.com/Blankeos/next-portfolio/main/public/imgs/image-meta.jpg"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blankeos/next-portfolio/main/public/imgs/image-meta.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="Carlo Taleon" />
        <meta name="twitter:title" content="Carlo Taleon - Portfolio" />
        <meta
          name="twitter:description"
          content="I enjoy building web apps using React. I'm also a student at West Visayas State University studying Computer Science."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/Blankeos/next-portfolio/main/public/imgs/image-meta.jpg"
        />
      </Head>
      <Hero sectionRef={heroRef} />

      <div className="relative">
        <div className="absolute inset-0 ">
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

const BreakPointHelper = () => {
  return (
    <div className="bg-green-400 sm:bg-blue-600 md:bg-red-600 lg:bg-yellow-300 xl:bg-indigo-400 2xl:bg-pink-500 fixed top-0 left-0 text-xs flex space-x-4 p-2 z-50 w-full">
      <div>xs: green</div>
      <div>sm: blue</div>
      <div>md: red</div>
      <div>lg: yellow</div>
      <div>xl: indigo</div>
      <div>2xl: pink</div>
    </div>
  );
};
export default Home;
