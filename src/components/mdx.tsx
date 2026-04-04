'use client';

import { useClipboard } from '@mantine/hooks';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import Image from 'next/image';
import React, { HTMLAttributes, useRef } from 'react';

import { Callout } from '@/components/callout';
import { MdxCard } from '@/components/mdx-card';
import { cn } from '@/lib/cn';
import toast from 'react-hot-toast';

const Details = (props: HTMLAttributes<HTMLDetailsElement>) => (
  <details {...props} className={cn('group my-2 w-full', props.className)} />
);

const Summary = (props: HTMLAttributes<HTMLElement>) => (
  <summary
    {...props}
    className={cn(
      'text-muted-foreground hover:text-primary flex cursor-pointer list-none items-center font-medium transition-colors [&::-webkit-details-marker]:hidden',
      props.className
    )}
  >
    <span className="mr-2 flex h-5 w-5 items-center justify-center rounded transition-colors hover:bg-neutral-500/10">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-50 transition-transform duration-200 group-open:rotate-90"
      >
        <path d="M8 5L18 12L8 19Z" />
      </svg>
    </span>
    <span>{props.children}</span>
  </summary>
);

const components = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h1"
      classNames={[
        'mt-2 scroll-m-10 text-[1.65em] font-semibold leading-tight text-typography',
        className,
      ]}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h2"
      classNames={[
        'mt-8 scroll-m-10 pb-1 text-[1.35em] font-semibold leading-tight text-typography first:mt-0',
        className,
      ]}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h3"
      classNames={[
        'mt-6 scroll-m-10 text-[1.15em] font-semibold leading-tight text-typography',
        className,
      ]}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h4"
      classNames={[
        'mt-5 scroll-m-10 text-[1.1em] font-semibold leading-tight text-typography',
        className,
      ]}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h5"
      classNames={[
        'mt-4 scroll-m-10 text-[1.05em] font-semibold leading-tight text-typography',
        className,
      ]}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h6"
      classNames={[
        'mt-3 scroll-m-10 text-[1.02em] font-semibold leading-tight text-typography',
        className,
      ]}
      {...props}
    />
  ),
  a: ({ className, ...props }: HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        'text-primary font-medium underline underline-offset-4',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        'text-typography-foreground [&:not(:first-child)]:mt-[1.25em]',
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        'my-[1.25em] ml-[1.75em]',
        className,
        !className?.includes('contains-task-list') && 'list-disc'
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-[1.25em] ml-[1.75em] list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn(
        'text-typography-foreground task-list-item mt-[0.5em]',
        className
      )}
      {...props}
    />
  ),
  input: ({
    className,
    type,
    checked,
    ...props
  }: React.InputHTMLAttributes<HTMLInputElement>) => {
    if (type === 'checkbox') {
      return (
        <label
          className={cn(
            'relative mr-2 inline-flex cursor-pointer items-center',
            className
          )}
        >
          <input
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            {...props}
          />
          <span className="peer peer-focus:ring-primary-dark peer-checked:border-primary peer-checked:bg-primary flex size-5 items-center justify-center rounded-md border border-neutral-300 bg-white ring-offset-2 transition peer-focus:ring-2 hover:border-neutral-400">
            <svg
              className={cn(
                'size-3.5 text-white transition-transform',
                checked ? 'scale-100' : 'scale-0'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
        </label>
      );
    }
    return null;
  },
  blockquote: ({ className, ...props }: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn(
        '[&>*]:text-muted-foreground my-[1.5em] border-l-[3px] border-border pl-[1em] italic',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
     
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('even:bg-secondary m-0 border-t border-border p-0', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border border-border bg-secondary-dark px-4 py-2 text-left font-bold text-foreground [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border border-border px-4 py-2 text-left text-foreground [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => <CodeBlock {...props} />,
  code: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => {
    // An inline code element. It only has `children` as a prop.
    if (Object.keys(props).length === 1)
      return (
        <code
          className={cn(
            'relative rounded border bg-neutral-200 px-[0.4em] py-[0.2em] font-mono text-[0.9em] dark:border-muted dark:bg-secondary',
            className
          )}
          {...props}
        >
          <span className="bg-typography-foreground-light absolute -top-0.5 right-0 -bottom-0.5 left-0 rounded dark:hidden" />
          <span className="text-background relative dark:text-foreground">{props.children}</span>
        </code>
      );

    // An actual code block.
    return (
      <code
        className={cn(
          'relative rounded px-5 py-1 font-mono text-sm',
          className
        )}
        {...props}
      />
    );
  },
  strong: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <strong className={cn('font-semibold', className)} {...props} />
  ),
  Image,
  Callout,
  Card: MdxCard,
  // details: Details,
  // summary: Summary,
  Details: Details,
  Summary: Summary,
};
interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx text-[14px] leading-[1.75]">
      <Component components={components} />
    </div>
  );
}

function CodeBlock({ className, ...props }: HTMLAttributes<HTMLPreElement>) {
  const clipboard = useClipboard({ timeout: 1500 });
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = () => {
    const code =
      preRef.current?.querySelector('code')?.textContent ??
      preRef.current?.textContent ??
      '';
    if (!code.trim()) return;
    clipboard.copy(code.replace(/\n+$/, ''));
  };

  return (
    <div className="group/code relative my-[1.5em]">
      <pre
        ref={preRef}
        className={cn(
          'overflow-x-auto rounded-lg border bg-black py-4 pr-12 text-[0.875em] leading-[1.5] dark:border-muted',
          className
        )}
        {...props}
      />
      <button
        type="button"
        onClick={handleCopy}
        aria-label={clipboard.copied ? 'Copied' : 'Copy code'}
        title={clipboard.copied ? 'Copied' : 'Copy code'}
        className={cn(
          'absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-md border backdrop-blur-sm transition-all',
          clipboard.copied
            ? 'border-green-500/40 text-green-400'
            : 'border-white/10 text-white/40 opacity-0 hover:border-white/25 hover:text-white/70 group-hover/code:opacity-100'
        )}
      >
        {clipboard.copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
          </svg>
        )}
      </button>
    </div>
  );
}

type HeadingElementProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  classNames?: (string | undefined)[];
} & Omit<HTMLAttributes<HTMLHeadingElement>, 'className'>;

function HeadingElement(props: HeadingElementProps) {
  const { as, children, classNames, ...rest } = props;

  const HeadingTag = as;

  return (
    <HeadingTag
      className={cn('group relative block', classNames)}
      onClick={() => {
        const newURL = new URL(window.location.toString());
        newURL.hash = '#' + props.id;
        window.navigator.clipboard.writeText(newURL.toString());
        window.location.replace(newURL);
        toast.success('Copied URL.', { className: 'text-sm', duration: 800 });
      }}
      {...rest}
    >
      <span
        aria-hidden
        className="text-typography-foreground-light absolute right-full hidden w-max pr-1 opacity-30 group-hover:block"
      >
        #
      </span>
      {children}
    </HeadingTag>
  );
}
