import React from "react";
import Container from "./Container";
import Link from "next/link";
import SectionLink from "./SectionLink";
import sections from "../../data/sections";

const Nav = () => {
  return (
    <nav className="h-24 w-full">
      <Container
        maxWidth="8xl"
        className="flex items-center justify-between h-full"
      >
        <Link href="/">
          <a className="font-extrabold select-none cursor-pointer h-full flex items-center pr-5">
            CATT
          </a>
        </Link>
        <div className="text-sm text-gray-600 flex space-x-10">
          {sections.map((section, i) => (
            <SectionLink key={i} href={section.href}>
              {section.name}
            </SectionLink>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
