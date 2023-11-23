import BackButton from '@/components/Buttons/BackButton'
import Container from '@/components/Container'
import { Mdx } from '@/components/Mdx'
import { cn } from '@/lib/cn'
import { allProjects } from 'contentlayer/generated'
import { Metadata } from 'next'
import Image from 'next/image'
import { FC, useMemo } from 'react'
/// ===========================================================================
// Static Params (Generate all the pages)
// ===========================================================================

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project.slug }))

// ===========================================================================
// Meta Data
// ===========================================================================
export const generateMetadata = ({
  params,
}: {
  params: { slug: string }
}): Metadata => {
  const post = allProjects.find((project) => project.slug === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

  return {
    title: post.title,
    openGraph: {
      title: post.title,
    },
  }
}

// ===========================================================================
// Component
// ===========================================================================
type ProjectPostProps = {
  params: {
    slug: string
  }
}

const ProjectPost: FC<ProjectPostProps> = (props) => {
  const { params } = props

  const project = useMemo(
    () => allProjects.find((post) => post.slug === params.slug),
    [params.slug]
  )
  if (!project) throw new Error(`Post not found for slug: ${params.slug}`)

  return (
    <div className="flex flex-1 flex-col pb-20">
      {/* Back Button Responsive */}
      <div className="relative z-20 mx-auto w-full max-w-5xl px-7">
        <div className={cn('absolute -left-10', 'pb-5 max-[1148px]:static')}>
          <BackButton href="/projects" />
        </div>
      </div>

      <div className="overflow relative z-20 mx-auto w-full max-w-5xl px-7">
        <h1 className="mb-1 text-3xl">{project.title}</h1>
        <p className="text-typography-300">{project.description}</p>

        <div className="h-10" />

        <div className="flex h-96 justify-center rounded-2xl bg-gray-100">
          <Image
            height={400}
            width={400}
            alt={`${project.title} feature`}
            src={project.featuredImage}
          />
        </div>

        <div className="h-10" />

        <Mdx code={project.body.code} />
      </div>
    </div>
  )
}

export default ProjectPost
