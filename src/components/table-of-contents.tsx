'use client';

import { cn } from '@/lib/cn';
import { useEffect, useRef, useState } from 'react';

export interface Heading {
  level: number;
  text: string;
  slug: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const lastActiveSlug = useRef<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const visibleHeadings = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleHeadings.add(entry.target.id);
          } else {
            visibleHeadings.delete(entry.target.id);
          }
        }

        if (visibleHeadings.size > 0) {
          const firstVisible = headings.find((h) =>
            visibleHeadings.has(h.slug)
          );
          if (firstVisible) {
            lastActiveSlug.current = firstVisible.slug;
            setActiveSlug(firstVisible.slug);
          }
        } else if (lastActiveSlug.current) {
          setActiveSlug(lastActiveSlug.current);
        }
      },
      {
        rootMargin: '-80px 0px -40%',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    for (const heading of headings) {
      const el = document.getElementById(heading.slug);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent, slug: string) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', `#${slug}`);
      setActiveSlug(slug);
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className={cn('space-y-1', className)}>
      <p className="px-3 text-xs font-medium text-typography-foreground-light uppercase tracking-wide">
        On this page
      </p>
      <div className="relative">
        <ul
          className="max-h-[calc(100vh-8rem)] overflow-y-auto pb-8 text-[13px]"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'var(--border) transparent',
          }}
        >
          {headings.map((heading) => (
            <li
              key={heading.slug}
              className={cn(
                'transition-colors',
                heading.level > 2 && 'ml-3'
              )}
            >
              <a
                href={`#${heading.slug}`}
                onClick={(e) => handleClick(e, heading.slug)}
                aria-current={activeSlug === heading.slug ? 'true' : undefined}
                className={cn(
                  'block border-l-2 border-transparent px-3 py-1 leading-snug transition-colors hover:text-typography',
                  activeSlug === heading.slug
                    ? 'border-l-primary text-typography'
                    : 'text-typography-foreground-light'
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent" />
      </div>
    </nav>
  );
}
