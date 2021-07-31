import { CSSProperties } from "react";
import { IconType } from "react-icons/lib";
import { motion } from "framer-motion";

interface FloatingCircleProps {
  style: CSSProperties | undefined;
  orbitSize?: string;
  icon?: IconType;
  orbitClass?: string;
  nucleusClass?: string;
  animationDelay?: number;
}
const FloatingCircle: React.FC<FloatingCircleProps> = ({
  style,
  orbitSize = "35rem",
  icon,
  orbitClass,
  nucleusClass,
  children,
  animationDelay = 0,
}) => {
  style = {
    ...style,
  };
  return (
    <motion.div
      className="h-20 w-20 p-2 flex items-center justify-center absolute"
      style={style}
      initial={{ y: 0 }}
      animate={{ y: -20 }}
      transition={{ yoyo: Infinity, duration: 2, delay: animationDelay }}
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
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.8, type: "spring" }}
      className="nucleus absolute rounded-full group cursor-pointer flex items-center justify-center z-10"
    >
      <span
        className={`absolute opacity-40 w-20 h-20 group-hover:w-28 group-hover:h-28 transition-all rounded-full ${className}`}
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute"
      >
        {children}
      </motion.span>
    </motion.div>
  );
};
export default FloatingCircle;
