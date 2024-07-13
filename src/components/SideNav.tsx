import React, { useState, useEffect } from 'react';
import Container from './Container';
import sections from '../../data/sections';
import SectionLink from './SectionLink';

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
        className={`side-nav sticky top-0 z-10 flex w-full items-start transition duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div>
          <div className="relative z-20 flex flex-col items-end space-y-4 py-16 text-sm font-light text-gray-900">
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
