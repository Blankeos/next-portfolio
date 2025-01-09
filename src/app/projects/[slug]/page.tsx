import BackButton from '@/components/buttons/back-button';
import { Mdx } from '@/components/mdx';
import { cn } from '@/lib/cn';
import { formatDate } from '@/lib/format-date';
import { allProjects } from 'contentlayer/generated';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { CgWebsite as IconDemo } from 'react-icons/cg';
import { FaGithubAlt as IconSourceCode } from 'react-icons/fa';

/// ===========================================================================
// Static Params (Generate all the pages)
// ===========================================================================

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project.slug }));

// ===========================================================================
// Meta Data
// ===========================================================================
export const generateMetadata = async (props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const params = await props.params;
  const post = allProjects.find((project) => project.slug === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return {
    title: post.title,
    openGraph: {
      title: post.title,
    },
  };
};

// ===========================================================================
// Component
// ===========================================================================
type ProjectPostProps = {
  params: Promise<{
    slug: string;
  }>;
};

const ProjectPost: FC<ProjectPostProps> = async (props) => {
  const { slug } = await props.params;
  const project = allProjects.find((_project) => _project.slug === slug);

  if (!project) throw new Error(`Post not found for slug: ${slug}`);

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

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-x-2">
            {project.demoURL && (
              <Link
                target="_blank"
                href={project.demoURL}
                className="flex flex-shrink-0 items-center gap-x-2 border border-primary-500 px-4 py-2 text-primary-500 hover:bg-primary-500 hover:text-white"
              >
                <IconDemo />
                <span>Demo</span>
              </Link>
            )}
            {project.githubURL && (
              <Link
                target="_blank"
                href={project.githubURL}
                className="flex flex-shrink-0 items-center gap-x-2 border border-primary-500 px-4 py-2 text-primary-500 hover:bg-primary-500 hover:text-white"
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
            <div className="relative h-0 w-full overflow-hidden pb-[56.25%] pt-[30px]">
              <iframe
                width="100%"
                height="100%"
                src={project.featuredYoutubeURL}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute left-0 top-0 rounded-md"
              ></iframe>
            </div>
            <h2 className="text-primary-400">👆 Watch my video about it!</h2>
          </div>
        )}

        <div className="h-10" />

        <Mdx code={project.body.code} />
      </div>
    </div>
  );
};

export default ProjectPost;
