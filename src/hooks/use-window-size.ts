import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
