import React, { useState, useEffect } from "react";
import Container from "./Container";
import sections from "../../data/sections";
import SectionLink from "./SectionLink";

interface SideNavProps {
  isVisible?: boolean;
  activeIndex?: number | undefined;
}

const SideNav: React.FC<SideNavProps> = ({ isVisible = true, activeIndex }) => {
  const [clickedIndex, setClickedIndex] = useState<number>(-1);

  // For Debouncing clickedIndex reset
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setClickedIndex(-1);
    }, 800);

    return () => clearTimeout(timeOut);
  }, [clickedIndex]);

  function onSectionLinkClick(i: number) {
    setClickedIndex(i);
  }
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
              return (
                <SectionLink
                  key={i}
                  active={i == activeIndex || i == clickedIndex}
                  href={section.href}
                  onClick={() => onSectionLinkClick(i)}
                >
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
