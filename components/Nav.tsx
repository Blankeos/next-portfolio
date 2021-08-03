import React from "react";
import Container from "./Container";

const Nav = () => {
  return (
    <nav className="h-20 w-full">
      <Container className="flex items-center justify-between">
        <div className="font-extrabold select-none cursor-pointer h-full flex items-center px-5">
          CATT
        </div>
        <div>
          <p>Projects</p>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
