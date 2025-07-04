'use client';

import { cn } from '@/lib/cn';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { FC, MouseEventHandler, PropsWithChildren, useState } from 'react';

type FlatShadowCardInteractivityType = {
  flatOnMouseEnter?: boolean;
  flatOnMouseLeave?: boolean;
  flatOnMouseDown?: boolean;
  flatOnMouseUp?: boolean;
};

const defaultInteractivity: Required<FlatShadowCardInteractivityType> = {
  flatOnMouseEnter: false,
  flatOnMouseLeave: false,
  flatOnMouseDown: true,
  flatOnMouseUp: false,
};

type ShadowButtonProps = {
  className?: string;

  /** The Flat Shadow at the bottom. */
  shadowClassName?: string;

  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;

  href?: string;

  /** @defaultValue 7px */
  elevation?: number;

  /**
   * @defaultValue {
   *    flatOnMouseEnter `false`,
   *    flatOnMouseLeave `false`,
   *    flatOnMouseDown `true`,
   *    flatOnMouseUp `false`
   * }
   */
  interactivity?: FlatShadowCardInteractivityType | false;
} & PropsWithChildren;

const ShadowButton: FC<ShadowButtonProps> = (props) => {
  const {
    href,
    onClick,
    className,
    shadowClassName,
    children,
    elevation = 7,
    interactivity,
  } = props;

  const router = useRouter();

  const [isFlat, setIsFlat] = useState<boolean>(false);

  const spreadInteractivity = { ...defaultInteractivity, ...interactivity };

  return (
    <button
      onClick={(e) => {
        onClick?.(e);

        if (href) router.push(href);
      }}
      onMouseEnter={() => {
        setIsFlat(spreadInteractivity.flatOnMouseEnter);
      }}
      onMouseLeave={() => {
        setIsFlat(spreadInteractivity.flatOnMouseLeave);
      }}
      onMouseDown={() => {
        setIsFlat(spreadInteractivity.flatOnMouseDown);
      }}
      onMouseUp={() => {
        setIsFlat(spreadInteractivity.flatOnMouseUp);
      }}
      className={cn('relative flex flex-col outline-none', className)}
    >
      <div style={{ height: elevation }} />

      <div
        style={{ height: elevation + elevation * 0.8 }}
        className={cn(
          'bg-primary absolute right-0 bottom-0 left-0',
          shadowClassName
        )}
      />

      <motion.div
        className="relative w-full flex-1 flex-grow"
        animate={{
          y: isFlat ? 0 : -1 * elevation,
        }}
      >
        {children}
      </motion.div>
    </button>
  );
};

export default ShadowButton;
