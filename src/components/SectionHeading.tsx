import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { FaSyringe } from "react-icons/fa";

interface SectionHeadingProps {
  text: [string] | [string, string];
  className?: string;
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
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: "circOut",
    },
  },
};

const SectionHeading = ({
  text,
  className = "font-light text-5xl",
}: SectionHeadingProps) => {
  const [ref, inView] = useInView({
    threshold: 1,
    root: null,
    rootMargin: "-150px 0px",
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

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
            className={`${i === 1 ? "ml-16" : ""} overflow-hidden pb-2`}
          >
            <motion.span variants={childVariants} className="block">
              {stringVal}
            </motion.span>
          </span>
        );
      })}
    </motion.h2>
  );
};

export default SectionHeading;
