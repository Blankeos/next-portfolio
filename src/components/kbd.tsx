import { cn } from '@/lib/cn';
import { PropsWithChildren } from 'react';

export function Kbd(props: PropsWithChildren<{ className?: string }>) {
  return (
    <kbd
      className={cn(
        'bg-muted pointer-events-none hidden h-5 items-center gap-1 border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none sm:flex',
        props.className
      )}
    >
      {props.children}
    </kbd>
  );
}
