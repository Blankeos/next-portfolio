import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/** Adds smooth scroll to the site. */
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
}
