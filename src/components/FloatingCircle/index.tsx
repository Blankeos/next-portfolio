import { CSSProperties } from "react";
import { motion, Variants } from "framer-motion";

export const getContainerVariants = (
  staggerChildren: number = 0.2,
  startDelay: number = 0
): Variants => {
  return {
    hidden: {
      y: 0,
    },
    visible: {
      y: 0,
      transition: {
        when: "beforeChildren",
        delay: startDelay,
        staggerChildren: staggerChildren,
      },
    },
  };
};

const nucleusVariants: Variants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.8,
      type: "spring",
      when: "beforeChildren",
      stiffness: 200,
    },
  },
};

const nucleusChildVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "circOut",
    },
  },
};
interface FloatingCircleProps {
  style: CSSProperties | undefined;
  orbitSize?: string;
  orbitClass?: string;
  nucleusClass?: string;
  floatDelay?: number;
}
const FloatingCircle: React.FC<FloatingCircleProps> = ({
  style,
  orbitSize = "35rem",
  orbitClass,
  nucleusClass,
  children,
  floatDelay = 0,
}) => {
  style = {
    ...style,
  };
  return (
    <motion.div
      className="h-20 w-20 p-2 flex items-center justify-center absolute"
      style={style}
      initial={{ y: 0 }}
      animate={{ y: -25 }}
      transition={{ yoyo: Infinity, duration: 2, delay: floatDelay }}
    >
      <Nucleus className={nucleusClass}>{children}</Nucleus>
      <Orbit orbitSize={orbitSize} className={orbitClass} />
    </motion.div>
  );
};

interface OrbitProps {
  orbitSize: string;
  className?: string;
}

const Orbit: React.FC<OrbitProps> = ({
  orbitSize,
  className = "border-blue-300",
}: OrbitProps) => {
  return (
    <span
      className={`orbit absolute rounded-full border opacity-40 transition-all duration-300 ${className}`}
      style={{ width: orbitSize, height: orbitSize }}
    ></span>
  );
};

interface NucleusProps {
  className?: string;
}

const Nucleus: React.FC<NucleusProps> = ({
  className = "bg-blue-300",
  children,
}) => {
  return (
    <motion.div
      variants={nucleusVariants}
      className="nucleus absolute rounded-full group cursor-pointer flex items-center justify-center z-10 h-20 w-20"
    >
      <span
        className={`absolute opacity-40 w-20 h-20 group-hover:w-28 group-hover:h-28 transition-all rounded-full ${className}`}
      />
      <motion.span variants={nucleusChildVariants} className="absolute">
        {children}
      </motion.span>
    </motion.div>
  );
};
export default FloatingCircle;
