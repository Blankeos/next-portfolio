import React, { useEffect, useState } from "react";

// noActiveSection?: boolean; // use Hero for this
type useSectionActiveObserverArgs = (
  inViews: Array<boolean>,
  noActiveSection?: boolean
) => [number];

export const useSectionActiveObserver: useSectionActiveObserverArgs = (
  inViews,
  noActiveSection = true
) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    if (!noActiveSection) {
      inViews.every((inView, i) => {
        if (inView === true) {
          setActiveIndex(i);
          return false;
        }
        return true;
      });
    } else {
      setActiveIndex(-1);
    }
  }, [...inViews, noActiveSection]);

  return [activeIndex];
};
