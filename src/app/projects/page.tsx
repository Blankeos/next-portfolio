import { FC } from 'react'
import { allProjects } from 'contentlayer/generated'
import Container from '@/components/Container'
import dayjs from 'dayjs'
import Link from 'next/link'
import { pageRoutes } from '@/lib/pageRoutes'
import { CgSearch as IconSearch } from 'react-icons/cg'
import ShadowButton from '@/components/ShadowButton'

type ProjectsPageProps = {}

const ProjectsPage: FC<ProjectsPageProps> = (props) => {
  return (
    <>
      <Container maxWidth="7xl">
        <h1 className="mb-1 text-3xl">Projects</h1>
        <p className="text-typography-300">
          A directory of projects I{"'"}m proud of.
        </p>

        <div className="mt-5 flex items-center gap-x-5 border-b border-typography-300 focus-within:border-primary-500 focus-within:text-primary-500">
          <IconSearch />
          <input
            className="w-full py-3 outline-none"
            placeholder="Search Projects..."
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button className="border border-primary-500 px-3 py-2 text-xs text-primary-500">
            AI
          </button>
          <button className="border border-primary-500 px-3 py-2 text-xs text-primary-500">
            NodeJS
          </button>
          <button className="border border-primary-500 px-3 py-2 text-xs text-primary-500">
            Python
          </button>
        </div>
      </Container>

      <Container maxWidth="7xl">
        <div className="grid gap-5 md:grid-cols-2">
          {allProjects
            .sort((first, second) => {
              // If both no feature order, compare by date.
              if (!first.featureOrder && !second.featureOrder) {
                // Return 1, to get latest date as first priority.
                if (dayjs(second.date).isAfter(dayjs(first.date))) return 1
                return -1
              }

              // Here, either items have featureOrder
              if (!first.featureOrder || !second.featureOrder) {
                return 1
              }

              // Lastly, here, lesser feature orders have priority. 1 is first.
              if (first.featureOrder! < second.featureOrder!) return -1

              return 1
            })
            .map((project) => (
              <ShadowButton key={project._id} className="">
                <Link
                  href={`${pageRoutes.projects}/${project.slug}`}
                  key={project._id}
                  className="flex h-[113.6px] w-full gap-x-5 overflow-hidden border border-primary-500 bg-white p-5"
                >
                  <div
                    className="aspect-square h-full flex-shrink-0"
                    style={{
                      backgroundImage: `url(${project.featuredImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="flex flex-col items-start text-start">
                    <span className="font-medium">{project.title}</span>
                    <span className="line-clamp-2 text-typography-400">
                      {project.description}
                    </span>
                  </div>
                </Link>
              </ShadowButton>
            ))}
        </div>
      </Container>
    </>
  )
}

export default ProjectsPage
