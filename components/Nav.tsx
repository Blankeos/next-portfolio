import React from "react";
import Container from "./Container";

const Nav = () => {
  return (
    <nav className="h-20 w-full">
      <Container className="flex items-center justify-between">
        <div className="font-extrabold">CATT</div>
        <div>
          <p>Projects</p>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
