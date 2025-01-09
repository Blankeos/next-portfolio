import { debounce } from '@/lib/debounce';
import flexsearchPkg from 'flexsearch';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
const { Document } = flexsearchPkg;

const useFlexSearch = <T>(_options = {}, data: T[]) => {
  const [query, updateQuery] = useState('');

  const document = useMemo(() => {
    const index = new Document({
      tokenize: 'full',
      language: 'en',
      preset: 'performance',
      cache: true,
      context: true,
      document: {
        id: '_id',
        index: ['title', 'description'],
        store: ['title', 'description'],
      },
    });

    data.forEach((item) => index.add(item));

    return index;
  }, [data]);

  const result = useMemo(() => document.search(query, 40), [query, document]);

  const setQuery = useMemo(() => debounce(updateQuery, 20), []);
  const onSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    },
    [setQuery]
  );

  return {
    result,
    query,
    setQuery,
    onSearch,
  };
};

export default useFlexSearch;
