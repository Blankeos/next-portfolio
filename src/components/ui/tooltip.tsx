'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';

import { cn } from '@/lib/cn';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'bg-background border-border text-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 origin-[--radix-tooltip-content-transform-origin] overflow-hidden rounded-md border px-3 py-1.5 text-xs',
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };

// ----

export function ToolTipComp(
  props: React.PropsWithChildren & {
    providerProps?: Omit<TooltipPrimitive.TooltipProviderProps, 'children'>;
    tooltipProps?: TooltipPrimitive.TooltipProps;
    contentProps?: React.ComponentPropsWithoutRef<
      typeof TooltipPrimitive.Content
    >;
    /** @defaultValue true */
    hideOnClick?: boolean;
    content?: React.ReactNode;
  }
) {
  const { hideOnClick = true } = props;
  return (
    <TooltipProvider {...{ delayDuration: 0, ...props.providerProps }}>
      <Tooltip {...props.tooltipProps}>
        <TooltipTrigger
          asChild
          onClick={(event) => {
            // if (!props.hideOnClick) event.preventDefault();
            if (!hideOnClick) event.preventDefault();
          }}
          onPointerDown={(event) => {
            // if (!props.hideOnClick) event.preventDefault();
            if (!hideOnClick) event.preventDefault();
          }}
        >
          {props.children}
        </TooltipTrigger>
        <TooltipContent
          {...props.contentProps}
          onPointerDownOutside={(event) => {
            if (!hideOnClick) event.preventDefault();
            props?.contentProps?.onPointerDownOutside?.(event);
          }}
        >
          {props.content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
