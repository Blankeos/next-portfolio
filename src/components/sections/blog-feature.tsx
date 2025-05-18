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

        <div className="flex w-full max-w-xl flex-col justify-between gap-y-8">
          {allPosts
            .sort(byDate('date'))
            .slice(0, 7)
            .map((post) => (
              <div
                key={post._id}
                className="group pointer-events-none flex w-full items-center justify-between gap-5"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-typography pointer-events-auto group-hover:underline"
                >
                  {post.title}
                </Link>

                <Link
                  href={`/blog/${post.slug}`}
                  className="pointer-events-auto flex-shrink-0 text-end text-sm text-neutral-500 group-hover:underline"
                >
                  {formatDateShort(post.date)}
                </Link>
              </div>
            ))}

          <Link
            href={$path({ route: '/blog' })}
            className="text-typography relative flex items-center gap-x-1 self-start"
          >
            <span>all posts</span>
            <IconArrowUp className="rotate-90" />

            <span className="absolute right-0 bottom-1 left-0 h-[1px] bg-neutral-700"></span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogFeature;
