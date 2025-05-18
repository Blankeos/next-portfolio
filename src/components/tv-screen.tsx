import { PropsWithChildren, useState } from 'react';

export function TvScreen(
  props: PropsWithChildren<{
    glitch?: boolean;
  }>
) {
  return (
    <div className="border-muted-foreground relative h-20 overflow-hidden rounded-lg border-2 bg-black p-[4px] font-mono text-white shadow-md">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center text-white opacity-80 blur-[3px]">
        {props.children}
      </div>

      {/* Actual Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white opacity-80">
        {props.children}
      </div>

      {/** Glitch */}
      {props.glitch && (
        <>
          <div className="absolute inset-0 flex translate-x-[2.5px] -translate-y-[2.5px] items-center justify-center text-pink-700 opacity-80 blur-[0.5px]">
            {props.children}
          </div>

          <div className="absolute inset-0 flex -translate-x-[2.5px] translate-y-[2.5px] items-center justify-center text-cyan-500 opacity-80 blur-[0.5px]">
            {props.children}
          </div>
        </>
      )}

      {/* TV Lines */}
      <div aria-hidden className="absolute inset-0 z-10 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute right-0 left-0 border-b-2"
            style={{ marginTop: `${i * 4.5 - 10}px` }}
          ></span>
        ))}
      </div>

      {/* Gradient */}
      <div
        aria-hidden
        className="absolute inset-0 z-20 bg-black opacity-80"
        style={{
          background: `radial-gradient(circle, rgba(2,0,36,0) 0%, rgba(232,232,235,0) 76%, black 100%)`,
        }}
      ></div>
    </div>
  );
}

export function useGlitch() {
  const [glitch, setGlitch] = useState(false);

  function triggerGlitch() {
    setGlitch(true);
    setTimeout(() => {
      setGlitch(false);
    }, 150);
  }

  return { glitch, triggerGlitch };
}
