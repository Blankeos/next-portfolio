import Container from '@/components/Container'
import { FC } from 'react'
import dayjs from 'dayjs'
import { allPosts } from 'contentlayer/generated'
import BlogCard from '@/components/BlogCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Carlo Taleon',
}

type BlogPageProps = {}

const BlogPage: FC<BlogPageProps> = (props) => {
  return (
    <>
      <Container maxWidth="7xl">
        <h1 className="mb-1 text-3xl">Blog</h1>
        <p className="text-typography-300">
          This is pretty much just me writing about stuff I like.
        </p>
      </Container>

      <Container
        maxWidth="7xl"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {allPosts
          .sort((first, second) => {
            // Return 1, to get latest date as first priority.
            if (dayjs(second.date).isAfter(dayjs(first.date))) return 1

            return -1
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
      </Container>
    </>
  )
}

export default BlogPage
