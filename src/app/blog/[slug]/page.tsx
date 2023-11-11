import { FC } from 'react'
import { allPosts } from 'contentlayer/generated'
import { formatDate } from '@/lib/formatDate'
import { Mdx } from '@/components/Mdx'
import FadeIn from '@/components/Animation/FadeIn'
import Image from 'next/image'
import { FiChevronLeft as IconChevron } from 'react-icons/fi'
import ShadowButton from '@/components/ShadowButton'
import { cn } from '@/lib/cn'
import Giscus from '@giscus/react'
import GiscusComments from '@/components/GiscusComments'
import { Metadata } from 'next'

/// ===========================================================================
// Static Params (Generate all the pages)
// ===========================================================================

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }))

// ===========================================================================
// Meta Data
// ===========================================================================
export const generateMetadata = ({
  params,
}: {
  params: { slug: string }
}): Metadata => {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return {
    title: post.title,
    openGraph: {
      title: post.title,
    },
  }
}

// ===========================================================================
// The Page Component
// ===========================================================================

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

const BlogPostPage: FC<BlogPostPageProps> = (props) => {
  const { params } = props

  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <div className="flex flex-1 flex-col">
      {/* The Back Button (Complicated 😔) */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-7">
        <div className={cn('absolute -left-10', 'pb-5 max-[1148px]:static')}>
          <ShadowButton
            className="group"
            elevation={5}
            href="/blog"
            shadowClassName="bg-primary-600"
          >
            <span className="border-primary-600 bg-primary-400 grid h-12 w-12 place-items-center border text-white">
              <IconChevron size="1.3rem" />
            </span>
          </ShadowButton>
        </div>
      </div>

      <article className="relative mx-auto w-full max-w-5xl px-7">
        {/* Actual Page */}
        <div className="flex flex-col gap-y-2">
          <FadeIn>
            <div
              className="from-primary-500 to-primary-500/80 mb-4 h-72 w-full rounded-xl bg-gradient-to-tl"
              style={{
                backgroundImage: `url(${post.featuredImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <time className="text-primary-500 text-sm" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-typography-500 text-4xl font-bold">
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
  )
}

export default BlogPostPage
