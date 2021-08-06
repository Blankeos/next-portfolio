import React from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { SectionProps } from "./types";

interface AboutProps extends SectionProps {}

const About: React.FC<AboutProps> = ({ sectionRef }) => {
  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="bg-blue-50 w-full py-48 border-t"
    >
      <Container maxWidth="7xl">
        <SectionHeading
          className="relative font-light text-5xl"
          text={["About", "Me"]}
        />
        <div className="relative grid grid-cols-2 mt-20">
          <div className="flex items-center justify-center h-96 w-96 bg-blue-200"></div>
          <div className="flex flex-col space-y-5">
            <h2 className="font-semibold text-6xl text-gray-800">
              Carlo Antonio T. Taleon
            </h2>
            <span className="w-16 h-2 bg-blue-500"></span>
            <p className="text-lg text-gray-600">
              IPO managed the lightning fast testnet when Tezos could be a REKT
              of lots of bear trap. Blockchain froze denial of service attack
              when NFT froze the provably fair peer-to-peer network.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
