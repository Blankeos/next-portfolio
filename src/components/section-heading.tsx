import { useInView } from '@/hooks/use-in-view';
import { motion, useAnimation, Variants } from 'motion/react';

import { useEffect } from 'react';

interface SectionHeadingProps {
  text: [string] | [string, string];
  className?: string;
  noOffset?: boolean;
}

const headingVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  hidden: {
    y: 60,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'circOut',
    },
  },
};

const SectionHeading = ({
  text,
  className = 'font-light text-5xl',
  noOffset = false,
}: SectionHeadingProps) => {
  const [ref, inView] = useInView({
    amount: 'all',
    margin: '-150px 0px',
    once: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return (
    <motion.h2
      variants={headingVariants}
      initial="hidden"
      animate={controls}
      className={`flex flex-col ${className}`}
      ref={ref}
    >
      {text.map((stringVal, i) => {
        return (
          <span
            key={i}
            className={`${
              !noOffset && (i === 1 ? 'ml-16' : '')
            } overflow-hidden pb-2`}
          >
            <motion.span
              variants={childVariants}
              className="block tracking-tighter will-change-transform"
            >
              {stringVal}
            </motion.span>
          </span>
        );
      })}
    </motion.h2>
  );
};

export default SectionHeading;
