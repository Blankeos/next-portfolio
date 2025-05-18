'use client';

import Container from '@/components/container';
import ShadowButton from '@/components/shadow-button';
import { useSearchContext } from '@/contexts/search.context';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';
import { $path } from 'next-typesafe-url';
import Link from 'next/link';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { CgSearch as IconSearch } from 'react-icons/cg';

type ProjectsPageProps = {};

const ProjectsPage: FC<ProjectsPageProps> = (props) => {
  const { searchProjects, projectsIndexIsReady } = useSearchContext();

  const [query, setQuery] = useState('');
  const [projectsSearchResults, setProjectsSearchResults] = useState<
    ReturnType<typeof searchProjects>
  >([]);

  function onSearch(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    const results = searchProjects(e.target.value);
    setProjectsSearchResults(results);
  }

  useEffect(() => {
    const results = searchProjects('');
    setProjectsSearchResults(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsIndexIsReady]);

  return (
    <>
      <Container maxWidth="7xl">
        <h1 className="text-typography mb-1 text-3xl">Projects</h1>
        <p className="text-typography-foreground-light">
          A directory of projects I{"'"}m proud of.
        </p>

        <div className="border-typography-foreground text-typography-foreground-light focus-within:border-primary focus-within:text-primary mt-5 flex items-center gap-x-5 border-b">
          <IconSearch />
          <input
            className="text-typography w-full py-3 outline-none"
            placeholder="Search Projects..."
            onChange={onSearch}
          />
        </div>

        {/* Uncomment this when "tag" filters are on. */}
        {/* <div className="mt-4 flex flex-wrap gap-2">
          <button className="border border-primary px-3 py-2 text-xs text-primary">
            AI
          </button>
          <button className="border border-primary px-3 py-2 text-xs text-primary">
            NodeJS
          </button>
          <button className="border border-primary px-3 py-2 text-xs text-primary">
            Python
          </button>
        </div> */}
      </Container>

      <Container maxWidth="7xl" className="overflow-hidden">
        <LayoutGroup>
          <div className="grid gap-5 md:grid-cols-2">
            <AnimatePresence>
              {projectsSearchResults.map((project) => {
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
                        href={$path({
                          route: '/projects/[slug]',
                          routeParams: { slug: project.slug },
                        })}
                        key={project._id}
                        className="border-primary bg-background flex h-[113.6px] w-full gap-x-5 overflow-hidden border p-5"
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
                          <span className="text text-typography font-medium">
                            {project.title}
                          </span>
                          <span className="text-typography-foreground line-clamp-2">
                            {project.description}
                          </span>
                        </div>
                      </Link>
                    </ShadowButton>
                  </motion.div>
                );
              })}
              {query.length > 0 && projectsSearchResults.length === 0 && (
                <div className="text-typography-foreground-light">
                  No project matching {`"${query}"`} found.
                </div>
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>

        <div className="h-20" />
      </Container>
    </>
  );
};

export default ProjectsPage;
