'use client';

import { cn } from '@/lib/cn';
import { PropsWithChildren, useRef } from 'react';

type AestheticKeyboardProps = {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  containerClass?: string;
  spanContainerClass?: string;
  /** @defaultValue 80 */
  width?: number;
  /** @defaultValue 80 */
  height?: number;
  /** @defaultValue 3 */
  gradientBlur?: number;
  onPointerDown?: () => void;
};

export default function AestheticKeyboard(
  props: PropsWithChildren<AestheticKeyboardProps>
) {
  const width = props.width ?? 80;
  const height = props.height ?? 80;

  const angles = cornerAnglesInPercent(width, height);
  const angles270 = cornerAnglesInPercent(width, height, 270);

  const tr = angles.tr.percent;
  const br = angles.br.percent;
  const bl = angles.bl.percent;
  // const tl = angles.tl.percent;

  const tl270 = angles270.tl.percent;
  // const tr270 = angles270.tr.percent;
  // const br270 = angles270.br.percent;
  const bl270 = angles270.bl.percent;

  const gradientBlur = props.gradientBlur ?? 2;

  const soundDown = useRef<HTMLAudioElement>(null);
  const soundUp = useRef<HTMLAudioElement>(null);

  return (
    <>
      <audio
        aria-hidden
        id="keyboard-sound-down"
        ref={soundDown}
        src="https://raw.githubusercontent.com/Blankeos/gh-cdn/main/audio/mechkey-down.wav"
        preload="auto"
      ></audio>
      <audio
        aria-hidden
        id="keyboard-sound-up"
        ref={soundUp}
        src="https://raw.githubusercontent.com/Blankeos/gh-cdn/main/audio/mechkey-up.wav"
        preload="auto"
      ></audio>
      <span
        className={cn(
          'group relative transition will-change-transform has-active:scale-[97%]',
          props.spanContainerClass
        )}
      >
        <LinkOrButton
          href={props.href}
          onClick={props.onClick}
          className={cn(
            'bg-primary relative z-20 flex items-center justify-center overflow-hidden rounded-lg p-2.5 transition-[transform] will-change-[transform]',
            'shadow-[12px_10px_20px_5px_#00000030]',
            props.containerClass
            // 'shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3),inset_-4px_-4px_8px_rgba(0,0,0,0.2),4px_4px_6px_rgba(0,0,0,0.3)]'
          )}
          style={{
            width,
            height,
          }}
          onPointerDown={() => {
            if (soundDown.current) {
              soundDown.current.pause();
              soundDown.current.currentTime = 0;
              soundDown.current.play();
            }
            props.onPointerDown?.();
          }}
          onPointerUp={() => {
            if (soundUp.current) {
              soundUp.current.pause();
              soundUp.current.currentTime = 0;
              soundUp.current.play();
            }
          }}
        >
          {/* bl - br */}
          <span
            className="absolute inset-0 opacity-20"
            style={{
              backgroundSize: `100% 100%`,
              backgroundPosition: `0px 0px`,
              backgroundImage: `conic-gradient(from 0deg at 50% 50%, #FFFFFF00 0%,  #00000000 ${br - gradientBlur}%, #000000FF ${br + gradientBlur}%, #000000FF ${bl - gradientBlur}%, #00000000 ${bl + gradientBlur}%, #FFFFFF00 100%)`,
            }}
          ></span>

          {/* tr - bl */}
          <span
            className="absolute inset-0 opacity-30"
            style={{
              backgroundSize: `100% 100%`,
              backgroundPosition: `0px 0px`,
              backgroundImage: `conic-gradient(from 0deg at 50% 50%, #FFFFFF00 0%,  #00000000 ${tr - gradientBlur}%, #000000FF ${tr + gradientBlur}%, #000000FF ${bl - gradientBlur}%, #00000000 ${bl + gradientBlur}%, #FFFFFF00 100%)`,
            }}
          ></span>

          {/* tl - tr */}
          <span
            className="absolute inset-0 opacity-20"
            style={{
              backgroundSize: `100% 100%`,
              backgroundPosition: `0px 0px`,
              backgroundImage: `conic-gradient(from 270deg at 50% 50%, #FFFFFF00 0%,  #00000000 ${tl270 - gradientBlur}%, #000000FF ${tl270 + gradientBlur}%, #000000FF ${bl270 - gradientBlur}%, #00000000 ${bl270 + gradientBlur}%, #FFFFFF00 100%)`,
            }}
          ></span>

          {/* <pre className="w-20 text-[5px]">{JSON.stringify(angles, null, 2)}</pre> */}
          <span
            className={cn(
              'bg-primary relative flex h-full w-full items-center justify-center rounded-lg border-[1.5px] border-white/1 text-white',
              // 'shadow-[inset_4px_4px_8px_rgba(255,255,255,0),inset_-4px_-4px_8px_rgba(0,0,0,0),4px_4px_6px_rgba(0,0,0,0.3)]'
              // 'shadow-[inset_-12px_-8px_40px_#46464620]'
              props.className
            )}
          >
            <span className="absolute inset-0 z-30 rounded-lg shadow-[inset_0px_2px_10px_0px_#00000030]" />
            {props.children}
          </span>
        </LinkOrButton>
        <span className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0px_0px_8px_0px_#00000000] transition-shadow group-has-active:shadow-[inset_0px_0px_8px_0px_#000000a0]" />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-2 -bottom-1.5 z-10 h-[98%] w-full rounded-xl bg-black/30 blur-xs"
        />
      </span>
    </>
  );
}

function LinkOrButton(
  props:
    | PropsWithChildren<
        React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
      >
    | PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>>
) {
  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        target="_blank"
      >
        {props.children}
      </a>
    );
  }

  return (
    <button {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {props.children}
    </button>
  );
}

// LAST WORKING:::
// function cornerAnglesInPercent(
//   width: number,
//   height: number
// ): {
//   tl: { angle: string; percent: number };
//   tr: { angle: string; percent: number };
//   br: { angle: string; percent: number };
//   bl: { angle: string; percent: number };
// } {
//   const centerX = width / 2;
//   const centerY = height / 2;

//   const corners: { [key: string]: [number, number] } = {
//     // ORDER MATTERS HERE DO NOT CHANGE IT IDK HOW IT WORKS HAHAHHAA
//     bl: [width, 0],
//     tl: [width, height],
//     tr: [0, height],
//     br: [0, 0],
//   };

//   const toAngle = ([x, y]: number[]): number => {
//     const dx = x - centerX;
//     const dy = y - centerY;
//     let angle = Math.atan2(dy, dx) * (180 / Math.PI);
//     angle = (angle - 90 + 360) % 360; // Shift to start at top (12 o'clock) and ensure positive
//     return angle;
//   };

//   const toPercent = (angle: number): number => (angle / 360) * 100;

//   const result: { [key: string]: { angle: string; percent: number } } = {};
//   for (const [name, pos] of Object.entries(corners)) {
//     const angle = toAngle(pos);
//     result[name] = {
//       angle: angle.toFixed(2) + '°',
//       percent: parseFloat(toPercent(angle).toFixed(2)),
//     };
//   }

//   return result as {
//     tr: { angle: string; percent: number };
//     br: { angle: string; percent: number };
//     bl: { angle: string; percent: number };
//     tl: { angle: string; percent: number };
//   };
// }

function cornerAnglesInPercent(
  width: number,
  height: number,
  fromDeg: number = 0
): {
  tl: { angle: string; percent: number };
  tr: { angle: string; percent: number };
  br: { angle: string; percent: number };
  bl: { angle: string; percent: number };
} {
  const centerX = width / 2;
  const centerY = height / 2;

  // Correct corner coordinates (relative to center)
  const corners: { [key: string]: [number, number] } = {
    tl: [0, 0], // top-left
    tr: [width, 0], // top-right
    br: [width, height], // bottom-right
    bl: [0, height], // bottom-left
  };

  const toAngle = ([x, y]: number[]): number => {
    const dx = x - centerX;
    const dy = y - centerY;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    // Start from top (0 degrees) and go clockwise
    angle = (angle + 90 + 360) % 360;
    return angle;
  };

  // Adjust angle based on fromDeg parameter
  const adjustAngle = (angle: number): number => {
    // Calculate the relative angle from the starting position
    return (angle - fromDeg + 360) % 360;
  };

  const toPercent = (angle: number): number => (angle / 360) * 100;

  const result: { [key: string]: { angle: string; percent: number } } = {};
  for (const [name, pos] of Object.entries(corners)) {
    const baseAngle = toAngle(pos);
    const adjustedAngle = adjustAngle(baseAngle);
    result[name] = {
      angle: adjustedAngle.toFixed(2) + '°',
      percent: parseFloat(toPercent(adjustedAngle).toFixed(2)),
    };
  }

  return result as {
    tl: { angle: string; percent: number };
    tr: { angle: string; percent: number };
    br: { angle: string; percent: number };
    bl: { angle: string; percent: number };
  };
}
