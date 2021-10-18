import React, { useState } from "react";
// import Link from "next/link";
import Container from "./Container";
import sections from "../../data/sections";
import SectionLink from "./SectionLink";

interface SideNavProps {
  isVisible?: boolean;
  activeIndex?: number | undefined;
}

const SideNav: React.FC<SideNavProps> = ({ isVisible = true, activeIndex }) => {
  const [clickedIndex, setClickedIndex] = useState<number>(-1);

  return (
    <>
      <Container
        className={`side-nav items-start w-full sticky top-0 transition ease-out duration-300 z-10 flex ${
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
