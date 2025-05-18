'use client';

import {
  useFlexSearchIndex,
  UseFlexSearchIndexResult,
} from '@/hooks/use-flex-search';
import { useNicerOverScroll } from '@/hooks/use-nicer-overscroll';
import { allPosts, allProjects, Post, Project } from 'contentlayer/generated';
import React, { createContext, useContext } from 'react';

// ===========================================================================
// Context
// ===========================================================================

type SearchContextValue = {
  searchProjects: UseFlexSearchIndexResult<Project>['search'];
  projectsIndexIsReady: boolean;
  searchPosts: UseFlexSearchIndexResult<Post>['search'];
  postsIndexIsReady: boolean;
};

const SearchContext = createContext<SearchContextValue>({
  searchProjects: () => [],
  projectsIndexIsReady: false,
  searchPosts: () => [],
  postsIndexIsReady: false,
} as SearchContextValue);

// ===========================================================================
// Hook
// ===========================================================================
export const useSearchContext = () => useContext(SearchContext);

// ===========================================================================
// Provider
// ===========================================================================
type SearchContextProviderProps = {
  children: React.ReactNode;
};

export const SearchContextProvider: React.FC<SearchContextProviderProps> = (
  props
) => {
  useNicerOverScroll(); // Honestly I just put it here because I'm lazy. It should work in any client component. as Long as it's in layout.

  const { search: searchProjects, indexIsReady: projectsIndexIsReady } =
    useFlexSearchIndex(allProjects, {});

  const { search: searchPosts, indexIsReady: postsIndexIsReady } =
    useFlexSearchIndex(allPosts, {});

  return (
    <SearchContext.Provider
      value={{
        searchProjects,
        projectsIndexIsReady,
        searchPosts,
        postsIndexIsReady,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
