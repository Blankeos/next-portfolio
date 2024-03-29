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

import { Renderable } from "react-hot-toast/headless";
interface FloatingCircleProps {
  style: CSSProperties | undefined;
  orbitSize?: string;
  orbitClass?: string;
  nucleusClass?: string;
  floatDelay?: number;
  toastMessage?: Renderable;
}
import toast from "react-hot-toast";
const FloatingCircle: FCC<FloatingCircleProps> = ({
  style,
  orbitSize = "35rem",
  orbitClass,
  nucleusClass,
  children,
  floatDelay = 0,
  toastMessage = "",
}) => {
  style = {
    ...style,
  };
  return (
    <motion.div
      className="h-20 w-20 p-2 flex items-center justify-center absolute will-change-transform"
      style={style}
      initial={{ y: 0 }}
      animate={{ y: -25 }}
      transition={{
        duration: 2,
        delay: floatDelay,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      <Nucleus
        onClick={() => {
          if (toastMessage) toast.success(toastMessage);
        }}
        className={nucleusClass}
      >
        {children}
      </Nucleus>
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
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Nucleus: FCC<NucleusProps> = ({
  className = "bg-blue-300",
  children,
  onClick = () => {},
}) => {
  return (
    <motion.div
      variants={nucleusVariants}
      className="nucleus absolute rounded-full group cursor-pointer flex items-center justify-center z-10 h-20 w-20"
      onClick={onClick}
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
