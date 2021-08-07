import React, { useEffect } from "react";
// import Link from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from "./Container";

import { useInView } from "react-intersection-observer";
import sections from "../../data/sections";
import SectionLink from "./SectionLink";

interface SideNavProps {
  isVisible?: boolean;
  activeIndex?: number | undefined;
}

const SideNav: React.FC<SideNavProps> = ({ isVisible = true, activeIndex }) => {
  return (
    <>
      <Container
        className={`items-start w-full sticky top-0 flex transition ease-out duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          <div className="flex flex-col items-end space-y-4 text-sm font-light py-16 text-gray-900 relative z-20">
            {sections.map((section, i) => {
              if (i === activeIndex)
                return (
                  <SectionLink key={i} active={true} href={section.href}>
                    {section.name.toLowerCase()}
                  </SectionLink>
                );
              else
                return (
                  <SectionLink key={i} href={section.href}>
                    {section.name.toLowerCase()}
                  </SectionLink>
                );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default SideNav;
