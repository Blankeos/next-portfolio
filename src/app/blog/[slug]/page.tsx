import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/format-date';
import { Metadata } from 'next';
import Image from 'next/image';
import React, { FC, useMemo } from 'react';

import FadeIn from '@/components/animations/fade-in';
import BackButton from '@/components/buttons/back-button';

import GiscusComments from '@/components/giscus-comments';
import { Mdx } from '@/components/mdx';
import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import BlogViews from './blog-views';

/// ===========================================================================
// Static Params (Generate all the pages)
// ===========================================================================

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }));

// ===========================================================================
// Meta Data
// ===========================================================================
export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const params = await props.params;
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
    keywords: post.keywords ?? [],
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

  const { slug } = React.use(params);

  const post = useMemo(
    () => allPosts.find((post) => post.slug === slug),
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
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tl from-primary-500 to-primary-500/80" />
              <div
                className="relative mb-4 h-72 w-full rounded-xl"
                style={{
                  backgroundImage: `url(${post.featuredImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center gap-x-2">
              <time className="text-sm text-primary-500" dateTime={post.date}>
                {formatDate(post.date)} <span>•</span>
              </time>
              <span className="text-sm text-typography-300">
                {post.readTimeStats.text}
              </span>
              <span>•</span>
              <BlogViews />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-2xl font-bold text-typography-500 md:text-[36px] md:leading-[50px]">
              {post.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex items-center gap-x-3">
              <Image
                width={40}
                height={40}
                alt="author"
                src={'/imgs/carlo_about.png'}
                className="rounded-full"
              />
              <Link
                href="https://x.com/carlo_taleon"
                target="_blank"
                className="group flex flex-col"
              >
                <p className="text-typography-600 text-sm group-hover:underline">
                  Carlo Taleon
                </p>
                <p className="text-xs text-typography-300 group-hover:underline">
                  @carlo_taleon
                </p>
              </Link>
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
