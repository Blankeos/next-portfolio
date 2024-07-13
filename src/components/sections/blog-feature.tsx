import { IconArrowUp } from '@/assets/icons';
import { formatDateShort } from '@/lib/format-date';
import { PageRoutes } from '@/lib/page-routes';
import { byDate } from '@/lib/sort-utils/date';
import { allPosts } from 'contentlayer/generated';
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
          className="relative z-10 text-4xl font-light text-gray-800 sm:text-5xl"
          text={['Recent', 'Posts']}
        />

        <div className="h-5" />

        <p className="text-neutral-500">
          I also write about stuff I'm learning for fun.
        </p>

        <div className="h-10" />

        <div className="flex w-full max-w-xl flex-col justify-between gap-y-8">
          {allPosts
            .sort(byDate('date'))
            .slice(0, 10)
            .map((post) => (
              <div
                key={post._id}
                className="group pointer-events-none flex w-full items-center justify-between gap-4"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="pointer-events-auto text-neutral-800 group-hover:underline"
                >
                  {post.title}
                </Link>
                <Link
                  href={`/blog/${post.slug}`}
                  className="pointer-events-auto text-sm text-neutral-500 group-hover:underline"
                >
                  {formatDateShort(post.date)}
                </Link>
              </div>
            ))}

          <Link
            href={PageRoutes.Blog}
            className="relative flex items-center gap-x-1 self-start text-neutral-800"
          >
            <span>all posts</span>
            <IconArrowUp className="rotate-90" />

            <span className="absolute bottom-1 left-0 right-0 h-[1px] bg-neutral-700"></span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogFeature;
