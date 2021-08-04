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
            <div className="flex flex-col items-end space-y-4 text-sm font-light py-16 bg-red-500d">
              <span>projects</span>
              <span>skills</span>
              <span>about me</span>
              <span>contact</span>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default SideNav;
