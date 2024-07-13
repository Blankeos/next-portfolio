'use client';

import { motion } from 'framer-motion';

import { FC, PropsWithChildren } from 'react';

type FadeInProps = {
  /** (ms) @defaultValue `0` */
  delay?: number;
  /** initialY @defaultValue `20` */
  initialY?: number;
  /** initialOpacity @defaultValue `0` */
  initialOpacity?: number;
} & PropsWithChildren;

const FadeIn: FC<FadeInProps> = (props) => {
  const { delay = 0, initialOpacity = 0, initialY = 20 } = props;
  return (
    <motion.div
      initial={{
        y: initialY,
        opacity: initialOpacity,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ delay: delay, type: 'spring', damping: 7, stiffness: 70 }}
      className="relative"
    >
      {props.children}
    </motion.div>
  );
};

export default FadeIn;
