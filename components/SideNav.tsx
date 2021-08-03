import React from "react";

import Link from "next/link";
import Container from "./Container";

const SideNav = () => {
  return (
    <Container className="w-full sticky top-0">
      <div className="w-20">
        <div className="flex flex-col items-end space-y-4 text-sm font-light py-16">
          <span>projects</span>
          <span>skills</span>
          <span>about me</span>
          <span>contact</span>
        </div>
      </div>
    </Container>
  );
};

export default SideNav;
