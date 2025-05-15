import {
  UseInViewOptions,
  useInView as useInViewPrimitive,
} from 'motion/react';
import { useRef } from 'react';

export function useInView(options?: UseInViewOptions) {
  const ref = useRef(null);

  const isInView = useInViewPrimitive(ref, options);

  return [ref, isInView] as const;
}
