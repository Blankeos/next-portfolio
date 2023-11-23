'use client'

import { FC, useMemo, useState } from 'react'
import { Project, allProjects } from 'contentlayer/generated'
import Container from '@/components/Container'
import dayjs from 'dayjs'
import Link from 'next/link'
import { pageRoutes } from '@/lib/pageRoutes'
import { CgSearch as IconSearch } from 'react-icons/cg'
import ShadowButton from '@/components/ShadowButton'
import { Metadata } from 'next'
import { orderAndDate } from '@/lib/sortUtils'
import useFlexSearch from '@/hooks/useFlexSearch'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'

type ProjectsPageProps = {}

// export const metadata: Metadata = {
//   title: 'Projects | Carlo Taleon',
// }

const ProjectsPage: FC<ProjectsPageProps> = (props) => {
  const {
    query,
    onSearch,
    result: projectSearchResults,
  } = useFlexSearch(undefined, allProjects)

  const matchedTitles = useMemo(() => {
    const result = projectSearchResults.find((_result) => _result.field)
    return result?.result
  }, [projectSearchResults])

  const matchedDescriptions = useMemo(() => {
    const result = projectSearchResults.find((_result) => _result.field)
    return result?.result
  }, [projectSearchResults])
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
            onChange={onSearch}
          />
        </div>

        {/* Uncomment this when tag filters are on. */}
        {/* <div className="mt-4 flex flex-wrap gap-2">
          <button className="border border-primary-500 px-3 py-2 text-xs text-primary-500">
            AI
          </button>
          <button className="border border-primary-500 px-3 py-2 text-xs text-primary-500">
            NodeJS
          </button>
          <button className="border border-primary-500 px-3 py-2 text-xs text-primary-500">
            Python
          </button>
        </div> */}
      </Container>

      <Container maxWidth="7xl">
        <LayoutGroup>
          <div className="grid gap-5 md:grid-cols-2">
            <AnimatePresence>
              {allProjects
                .sort(orderAndDate<Project>('featureOrder', 'date'))
                .map((project) => {
                  // Do filtering here.
                  if (
                    query.length > 0 &&
                    (!matchedTitles?.includes(project._id) ||
                      !matchedDescriptions?.includes(project._id))
                  )
                    return null

                  // Return it here.
                  return (
                    <motion.div
                      key={project._id}
                      layout="position"
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        bounce: 0.3,
                        type: 'spring',
                      }}
                      className="w-full"
                    >
                      <ShadowButton key={project._id} className="w-full">
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
                    </motion.div>
                  )
                })}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </Container>
    </>
  )
}

export default ProjectsPage
