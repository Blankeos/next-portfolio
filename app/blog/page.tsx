import Container from '@/components/Container'
import { FC } from 'react'

type BlogPageProps = {}

const BlogPage: FC<BlogPageProps> = (props) => {
  return (
    <>
      <Container className="bg-pink-200" maxWidth="7xl">
        Blog
      </Container>

      <Container maxWidth="7xl" className="flex flex-col">
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
        <div>Post</div>
      </Container>
    </>
  )
}

export default BlogPage
