import BackButton from '@/components/Buttons/BackButton'
import Container from '@/components/Container'
import { Mdx } from '@/components/Mdx'
import { cn } from '@/lib/cn'
import { allProjects } from 'contentlayer/generated'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import { FaGithubAlt as IconSourceCode } from 'react-icons/fa'
import { CgWebsite as IconDemo } from 'react-icons/cg'
import { formatDate } from '@/lib/formatDate'

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
            className="object-cover"
          />
        </div>

        <div className="h-10" />

        <div className="flex items-center justify-between gap-x-2">
          <div className="flex gap-x-2">
            {project.demoURL && (
              <Link
                target="_blank"
                href={project.demoURL}
                className="flex items-center gap-x-2 border border-primary-500 px-4 py-2 text-primary-500 hover:bg-primary-500 hover:text-white"
              >
                <IconDemo />
                <span>Demo</span>
              </Link>
            )}
            {project.githubURL && (
              <Link
                target="_blank"
                href={project.githubURL}
                className="flex items-center gap-x-2 border border-primary-500 px-4 py-2 text-primary-500 hover:bg-primary-500 hover:text-white"
              >
                <IconSourceCode />
                <span>Source Code</span>
              </Link>
            )}
          </div>

          <span className="text-sm text-primary-400 opacity-70">
            Made on {formatDate(project.date)}
          </span>
        </div>

        <div className="h-10" />

        {project.featuredYoutubeURL && (
          <div className="flex flex-col items-center justify-center gap-y-5">
            <iframe
              width="560"
              height="315"
              src={project.featuredYoutubeURL}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-md"
            ></iframe>
            <h2 className="text-primary-400">👆 Watch my video about it!</h2>
          </div>
        )}

        <div className="h-10" />

        <Mdx code={project.body.code} />
      </div>
    </div>
  )
}

export default ProjectPost
