import React from "react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Contact = () => {
  return (
    <section className="w-full py-80 border-t">
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
            <FaGithub />
            <GrInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
