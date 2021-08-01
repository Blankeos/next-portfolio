import FloatingCircle from "../components/FloatingCircle";
// Icons
import { FaReact, FaDiscord } from "react-icons/fa";
import { HiOutlineDocumentDownload as ResumeIcon } from "react-icons/hi";

// React
import React, { CSSProperties, HTMLAttributes, useEffect } from "react";

import Particles, {
  IOptions,
  particlesJS,
  RecursivePartial,
} from "react-tsparticles";
import particlesConfig from "../particles/particles-config.js";

import Container from "../components/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative pb-5">
      <div className="w-full h-full absolute overflow-hidden">
        <div className="particle-wrapper absolute w-full h-full">
          <Particles
            id="tsparticles"
            options={particlesConfig as RecursivePartial<IOptions>}
            className="h-full"
            canvasClassName="object-cover"
          />
        </div>
      </div>
      <Container className="relative" maxWidth="9xl">
        <div className="flex">
          <div className="flex flex-col py-40 flex-grow space-y-5">
            <div>
              <p className="relative z-10 text-gray-800">
                👋 Hello there! I am
              </p>
              <h1 className="font-bold text-9xl text-gray-800 relative z-10">
                Carlo Taleon
              </h1>
              <p className="mt-5 max-w-md text-gray-500 relative z-10">
                I make games during my free time and I enjoy building web apps
                using React. I&apos;m also a student at West Visayas State
                University studying Computer Science.
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="bg-gray-400 rounded-md px-5 py-2 text-white relative z-10">
                Get in Touch
              </button>
              <button className="bg-blue-500 rounded-md px-5 py-2 text-white flex space-x-1 items-center relative z-10">
                <ResumeIcon size="1.2rem" />
                <span>Resume</span>
              </button>
            </div>
          </div>
          <div
            className="w-96"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1570003179394-40b59f9b4a5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
        <FloatingCircle
          style={{ right: "50rem", top: "5rem" }}
          animationDelay={1}
        >
          <FaReact className="text-blue-400" size="2rem" />
        </FloatingCircle>
        <FloatingCircle
          style={{ right: "30rem", bottom: "10rem" }}
          orbitSize="25rem"
          orbitClass="border-indigo-400"
          nucleusClass="bg-indigo-400"
        >
          <img
            className="w-12 h-12"
            src="https://static.wikia.nocookie.net/spartaremix/images/e/ec/Discord-new-logo.png"
          />
        </FloatingCircle>
      </Container>
    </div>
  );
};

export default Hero;
