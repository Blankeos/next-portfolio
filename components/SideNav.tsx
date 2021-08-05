import React, { useEffect } from "react";
import Link from "next/link";
import Container from "./Container";

import { useInView } from "react-intersection-observer";

interface SideNavProps {
  isVisible?: boolean;
}

const SideNav: React.FC<SideNavProps> = ({ isVisible = true }) => {
  return (
    <>
      {isVisible && (
        <Container className="flex items-start w-full sticky top-0 z-10">
          <div>
            <div className="flex flex-col items-end space-y-4 text-sm font-light py-16 bg-red-500d text-gray-900">
              <NavLink>projects</NavLink>
              <NavLink>skills</NavLink>
              <NavLink>about me</NavLink>
              <NavLink>contact</NavLink>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

const NavLink: React.FC = ({ children }) => {
  return (
    <span className="select-none relative group cursor-pointer">
      <span className="relative">{children}</span>
      <span className="group-hover:w-full block absolute w-0 h-0.5 bg-gray-400 transition-width duration-500 ease-out"></span>
    </span>
  );
};
export default SideNav;
