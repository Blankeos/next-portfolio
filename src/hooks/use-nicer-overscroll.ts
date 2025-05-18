'use client';

import { useEffect, useRef } from 'react';

/**
 * Usage:
 * In your globals.css
 * Just add:
 *
 *
 * html[data-scroll="0"] body {
 *  background-color: black;
 * }
 * html:not([data-scroll="0"]) body {
 *  background-color: white;
 * }
 */
export function useNicerOverScroll() {
  const isCeiling = useRef(false);

  useEffect(() => {
    isCeiling.current = false;

    window.addEventListener('wheel', (e) => {
      const delta = e.deltaY;

      if (delta < 0 && !isCeiling.current) {
        document.documentElement.style.background = 'var(--background)';
        isCeiling.current = true;
      } else if (delta > 0 && isCeiling) {
        document.documentElement.style.background = 'var(--primary)';
        isCeiling.current = false;
      }
    });
  }, []);
}
