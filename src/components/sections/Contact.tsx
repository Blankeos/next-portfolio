import React from "react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SectionProps } from "./types";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import socials, { Social } from "../../../data/socials";
import { icons } from "react-icons/lib";

interface ContactProps extends SectionProps {}

const Contact: React.FC<ContactProps> = ({ sectionRef }) => {
  return (
    <section
      id="contact-section"
      ref={sectionRef}
      className="w-full py-80 border-t"
    >
      <Container maxWidth="7xl" className="relative grid grid-cols-2 mt-20">
        <div className="flex flex-col space-y-10">
          <SectionHeading
            className="relative font-light text-5xl"
            text={["Let's work", "together"]}
          />
        </div>
        <div className="text-4xl text-gray-600 flex flex-col space-y-5">
          <p>carloantonioct@gmail.com</p>
          <p>(+63) 123-456-7890</p>
          <div className="pt-5 flex space-x-5 text-3xl text-blue-500">
            {socials.map((social, i) => {
              return (
                <SocialLink
                  key={i}
                  name={social.name}
                  url={social.url}
                  Icon={social.Icon}
                />
              );
            })}
            {/* <Tippy content="GitHub">
              <span>
                <FaGithub />
              </span>
            </Tippy>
            <GrInstagram />
            <FaLinkedinIn /> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

interface SocialLink extends Social {}

const SocialLink: React.FC<SocialLink> = ({ name, Icon, url }) => {
  return (
    <Link href={url}>
      <a target="_blank">
        <Icon />
      </a>
    </Link>
  );
};

export default Contact;
