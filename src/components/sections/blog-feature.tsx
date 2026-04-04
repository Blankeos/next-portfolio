import { IconArrowUp } from '@/assets/icons';
import { formatDateShort } from '@/lib/format-date';
import { byDate } from '@/lib/sort-utils/date';
import { allPosts } from 'contentlayer/generated';
import { $path } from 'next-typesafe-url';
import Link from 'next/link';
import { FC } from 'react';
import Container from '../container';
import SectionHeading from '../section-heading';
import { SectionProps } from './types';

type BlogFeatureProps = {} & SectionProps;

const BlogFeature: FC<BlogFeatureProps> = (props) => {
  return (
    <section
      id="blog-section"
      ref={props.sectionRef}
      className="w-full py-16 md:py-32"
    >
      <Container maxWidth="7xl" className="relative z-10 grid grid-cols-1">
        <SectionHeading
          className="text-typography relative z-10 text-4xl font-light sm:text-5xl"
          text={['Recent', 'Posts']}
        />

        <div className="h-5" />

        <p className="text-typography-foreground">
          I also write about stuff I&apos;m learning for fun.
        </p>

        <div className="h-10" />

        <div className="flex w-full max-w-3xl flex-col">
          {allPosts
            .sort(byDate('date'))
            .slice(0, 5)
            .map((post, i) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group border-border/60 flex items-start gap-4 border-t py-5 transition-colors duration-200 last:border-b sm:gap-6"
              >
                <span className="text-typography-foreground-light mt-0.5 font-light tabular-nums text-sm select-none shrink-0 w-5">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex min-w-0 flex-1 flex-col gap-1.5 sm:flex-row sm:items-baseline sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <span className="text-typography text-[0.95rem] leading-snug font-normal transition-colors duration-200 group-hover:text-[var(--primary)]">
                      {post.title}
                    </span>

                    {post.description && (
                      <p className="text-typography-foreground-light mt-1 line-clamp-1 text-sm leading-relaxed">
                        {post.description}
                      </p>
                    )}
                  </div>

                  <span className="shrink-0 text-xs tabular-nums text-typography-foreground-light">
                    {formatDateShort(post.date, { lower: true })}
                  </span>
                </div>
              </Link>
            ))}
        </div>

        <div className="h-8" />

        <Link
          href={$path({ route: '/blog' })}
          className="text-typography group inline-flex items-center gap-1.5 text-sm transition-colors duration-200 hover:text-[var(--primary)]"
        >
          <span>all posts</span>
          <IconArrowUp className="rotate-90 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </Container>
    </section>
  );
};

export default BlogFeature;
