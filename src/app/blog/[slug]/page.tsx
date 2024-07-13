import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/format-date';
import { Metadata } from 'next';
import Image from 'next/image';
import { FC, useMemo } from 'react';

import FadeIn from '@/components/animations/FadeIn';
import BackButton from '@/components/Buttons/BackButton';

import GiscusComments from '@/components/GiscusComments';
import { Mdx } from '@/components/Mdx';
import { allPosts } from 'contentlayer/generated';

/// ===========================================================================
// Static Params (Generate all the pages)
// ===========================================================================

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

// ===========================================================================
// Meta Data
// ===========================================================================
export const generateMetadata = ({
  params,
}: {
  params: { slug: string };
}): Metadata => {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    title: post.title,
    openGraph: {
      title: post.title,
    },
  };
};

// ===========================================================================
// The Page Component
// ===========================================================================

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

const BlogPostPage: FC<BlogPostPageProps> = (props) => {
  const { params } = props;

  const post = useMemo(
    () => allPosts.find((post) => post.slug === params.slug),
    [params.slug]
  );
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div className="flex flex-1 flex-col">
      {/* Back Button Responsive */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-7">
        <div className={cn('absolute -left-10', 'pb-5 max-[1148px]:static')}>
          <BackButton href="/blog" />
        </div>
      </div>

      <article className="relative mx-auto w-full max-w-5xl px-7">
        {/* Actual Page */}
        <div className="flex flex-col gap-y-2">
          <FadeIn>
            <div
              className="mb-4 h-72 w-full rounded-xl bg-gradient-to-tl from-primary-500 to-primary-500/80"
              style={{
                backgroundImage: `url(${post.featuredImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <time className="text-sm text-primary-500" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl font-bold text-typography-500">
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center gap-x-2">
              <Image
                width={35}
                height={35}
                alt="author"
                src={'/imgs/carlo_about.png'}
                className="rounded-full"
              />
              <p className="text-typography-300">Carlo Taleon</p>
            </div>
          </FadeIn>
        </div>

        <div className="h-12" />

        {/*
          Use this for .md files.
          <div
            className="[&>*:last-child]:mb-0 [&>*]:mb-3"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          /> 
        */}

        <Mdx code={post.body.code} />

        <div className="h-12" />

        <GiscusComments />

        <div className="h-12" />
      </article>
    </div>
  );
};

export default BlogPostPage;
