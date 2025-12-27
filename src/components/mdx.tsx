'use client';

import { useMDXComponent } from 'next-contentlayer2/hooks';
import Image from 'next/image';
import React, { HTMLAttributes } from 'react';

import { Callout } from '@/components/callout';
import { MdxCard } from '@/components/mdx-card';
import { cn } from '@/lib/cn';
import toast from 'react-hot-toast';

const components = {
  h1: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h3"
      classNames={[
        'mt-2 scroll-m-10 text-3xl font-bold tracking-tight text-typography',
        className,
      ]}
      {...props}
    />
  ),
  h2: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h3"
      classNames={[
        'mt-10 scroll-m-10 pb-1 text-2xl font-semibold tracking-tight text-typography first:mt-0',
        className,
      ]}
      {...props}
    />
  ),
  h3: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h3"
      classNames={[
        'mt-8 scroll-m-10 text-xl font-semibold tracking-tight text-typography',
        className,
      ]}
      {...props}
    />
  ),
  h4: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h4"
      classNames={[
        'mt-5 scroll-m-10 text-xl font-semibold tracking-tight text-typography',
        className,
      ]}
      {...props}
    />
  ),
  h5: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h5"
      classNames={[
        'mt-4 scroll-m-10 text-lg font-semibold tracking-tight text-typography',
        className,
      ]}
      {...props}
    />
  ),
  h6: ({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <HeadingElement
      as="h5"
      classNames={[
        'mt-0 scroll-m-10 text-base font-semibold tracking-tight text-typography',
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
        'text-typography-foreground leading-7 [&:not(:first-child)]:mt-6',
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn(
        'my-0 ml-6',
        className,
        !className?.includes('contains-task-list') && 'list-disc'
      )}
      {...props}
    />
  ),
  ol: ({ className, ...props }: HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-0 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: HTMLAttributes<HTMLLIElement>) => (
    <li
      className={cn('text-typography task-list-item mt-2', className)}
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
        '[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic',
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
    // eslint-disable-next-line @next/next/no-img-element
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
      className={cn('even:bg-muted m-0 border-t p-0', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className={cn(
        'mt-6 mb-4 overflow-x-auto rounded-lg border bg-black py-4',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: HTMLAttributes<HTMLPreElement>) => {
    // An inline code element. It only has `children` as a prop.
    if (Object.keys(props).length === 1)
      return (
        <code
          className={cn(
            'relative rounded bg-neutral-200 px-1.5 py-0.5 font-mono',
            className
          )}
          {...props}
        >
          <span className="bg-typography-foreground-light absolute -top-0.5 right-0 -bottom-0.5 left-0 rounded" />
          <span className="text-background relative">{props.children}</span>
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
  details: ({ className, ...props }: HTMLAttributes<HTMLDetailsElement>) => (
    <details
      className={cn(
        'my-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4 [&>*:not(summary)]:mt-3',
        className
      )}
      {...props}
    />
  ),
  summary: ({ className, ...props }: HTMLAttributes<HTMLElement>) => (
    <summary
      className={cn(
        'text-typography hover:text-primary cursor-pointer font-semibold marker:text-neutral-400 list-item',
        className
      )}
      {...props}
    />
  ),
};
interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
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
      className={cn('group relative inline-block self-start', classNames)}
      onClick={() => {
        const newURL = new URL(window.location.toString());
        newURL.hash = '#' + props.id;
        window.navigator.clipboard.writeText(newURL.toString());
        window.location.replace(newURL);
        toast.success('Copied URL.', { className: 'text-sm', duration: 800 });
      }}
      {...rest}
    >
      {/* <span
        aria-hidden
        className="absolute -inset-0.5 -left-5 -right-2 -z-10 rounded-md group-hover:bg-neutral-100"
        id={props.id}
      /> */}
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
