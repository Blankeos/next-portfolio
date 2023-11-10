import { FC } from 'react'
import { allPosts } from 'contentlayer/generated'
import { formatDate } from '@/lib/formatDate'
import { Mdx } from '@/components/Mdx'
import FadeIn from '@/components/Animation/FadeIn'
import Image from 'next/image'

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.slug }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title }
}

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
    <article className="mx-auto w-full max-w-5xl px-7">
      {/* {post.url} */}
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

      {/* <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      /> */}

      <Mdx code={post.body.code} />
    </article>
  )
}

export default BlogPostPage
