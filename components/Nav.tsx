import React from "react";
import Container from "./Container";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="h-20 w-full">
      <Container
        maxWidth="8xl"
        className="flex items-center justify-between h-full"
      >
        <Link href="/">
          <a className="font-extrabold select-none cursor-pointer h-full flex items-center px-5">
            CATT
          </a>
        </Link>
        <div className="text-sm text-gray-700 flex space-x-10">
          <p>Projects</p>
          <p>Skills</p>
          <p>About Me</p>
          <p>Contact</p>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
