'use client';

import { Project, allProjects } from 'contentlayer/generated';

import Container from '@/components/container';
import ShadowButton from '@/components/shadow-button';
import useFlexSearch from '@/hooks/use-flex-search';
import { PageRoutes } from '@/lib/page-routes';
import { byOrderAndDate } from '@/lib/sort-utils';
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { CgSearch as IconSearch } from 'react-icons/cg';

type ProjectsPageProps = {};

const ProjectsPage: FC<ProjectsPageProps> = (props) => {
  const {
    query,
    onSearch,
    result: projectSearchResults,
  } = useFlexSearch(undefined, allProjects);

  const matchedTitles = useMemo(() => {
    const result = projectSearchResults.find((_result) => _result.field);
    return result?.result;
  }, [projectSearchResults]);

  const matchedDescriptions = useMemo(() => {
    const result = projectSearchResults.find((_result) => _result.field);
    return result?.result;
  }, [projectSearchResults]);
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

        {/* Uncomment this when "tag" filters are on. */}
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
                .sort(byOrderAndDate<Project>('featureOrder', 'date'))
                .map((project) => {
                  // Do filtering here.
                  if (
                    query.length > 0 &&
                    (!matchedTitles?.includes(project._id) ||
                      !matchedDescriptions?.includes(project._id))
                  )
                    return null;

                  // Return it here.
                  return (
                    <motion.div
                      key={project._id}
                      layout="position"
                      initial={{
                        opacity: 0,
                        y: 10,
                        // scale: 0.95,
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
                          href={`${PageRoutes.Projects}/${project.slug}`}
                          key={project._id}
                          className="flex h-[113.6px] w-full gap-x-5 overflow-hidden border border-primary-500 bg-white p-5"
                        >
                          <div
                            className="aspect-square h-full flex-shrink-0 bg-neutral-200"
                            style={{
                              backgroundImage: `url(${project.featuredImage})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                            }}
                          />
                          <div className="flex flex-col items-start text-start">
                            <span className="text font-medium">
                              {project.title}
                            </span>
                            <span className="line-clamp-2 text-typography-400">
                              {project.description}
                            </span>
                          </div>
                        </Link>
                      </ShadowButton>
                    </motion.div>
                  );
                })}
            </AnimatePresence>
          </div>
        </LayoutGroup>

        <div className="h-20" />
      </Container>
    </>
  );
};

export default ProjectsPage;
