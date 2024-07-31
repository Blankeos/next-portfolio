import BlogCard from '@/components/blog-card';
import Container from '@/components/container';
import { cn } from '@/lib/cn';
import { allPosts } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import { FC } from 'react';
import Marquee from 'react-fast-marquee';

export const metadata: Metadata = {
  title: 'Blog | Carlo Taleon',
};

type BlogPageProps = {};

const BlogPage: FC<BlogPageProps> = (props) => {
  return (
    <>
      <Container maxWidth="7xl">
        <h1 className="mb-1 text-3xl">
          Blog{' '}
          <span className="ml-3 text-xs text-typography-300">
            I just write about
          </span>
        </h1>

        <div className="h-4" aria-hidden />

        <div className="relative">
          <div
            className="absolute inset-0 z-10"
            style={{
              // background: `rgb(2,0,36)`,
              background: `radial-gradient(circle, rgba(2,0,36,0) 0%, rgba(232,232,235,0) 76%, rgba(255,255,255,1) 100%)`,
            }}
          />
          <Marquee speed={50} className="relative" autoFill={true}>
            <div className="flex h-8 w-full">
              {[
                '🦀 learning Rust',
                '☘️ cool tech I like',
                '🤓 mini guides that might help you',
                '🦄 personal Stuff',
              ].map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    'mr-4 flex h-full items-center rounded-md px-4 text-sm text-white',
                    i == 0 && 'bg-orange-200 text-orange-700',
                    i == 1 && 'bg-green-200 text-green-700',
                    i == 2 && 'bg-blue-200 text-blue-700',
                    i == 3 && 'bg-pink-100 text-pink-700'
                  )}
                >
                  {item}
                </div>
              ))}
            </div>
          </Marquee>
        </div>
        {/* <p className="text-typography-300">
          This is pretty much just me writing about stuff I like.
        </p> */}
      </Container>

      <Container
        maxWidth="7xl"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {allPosts
          .sort((first, second) => {
            // Return 1, to get latest date as first priority.
            if (dayjs(second.date).isAfter(dayjs(first.date))) return 1;

            return -1;
          })
          .map((post) => (
            <BlogCard
              key={post._id}
              title={post.title}
              featuredImageUrl={post.featuredImage ?? ''}
              slug={post.slug}
              date={post.date}
              category={post.category}
              description={post.description}
            />
          ))}

        {allPosts?.length === 0 && (
          <p className="text-sm text-gray-300">No blog posts found 😔...</p>
        )}
      </Container>
    </>
  );
};

export default BlogPage;
