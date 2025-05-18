'use client';

import { Index } from 'flexsearch';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function replaceTextWithMarker(text: string, match: string) {
  // create dynamic regex
  const regex = new RegExp(match, 'gi');
  // preserves the text casing
  return text.replaceAll(regex, (match) => `<mark>${match}</mark>`);
}

function getMatches(text: string, searchTerm: string, limit = 1) {
  // create dynamic regex
  const regex = new RegExp(searchTerm, 'gi');
  // word indexes
  const indexes = [];
  // matches count
  let matches = 0;
  // current match in loop
  let match;

  while ((match = regex.exec(text)) !== null && matches < limit) {
    // push that index
    indexes.push(match.index);
    // increment matches
    matches++;
  }

  // take the word index...
  return indexes.map((index) => {
    // go back 20 characters
    const start = index - 20;
    // go forward 80 characters
    const end = index + 80;
    // extract the text
    const excerpt = text.substring(start, end).trim();
    // return excerpt with marker
    return `...${replaceTextWithMarker(excerpt, searchTerm)}...`;
  });
}

export const useFlexSearchIndex = <TData>(
  data: TData[],
  options?: {
    /** @defaultValue (data) => JSON.stringify(data); */
    indexerFn?: (data: TData) => string;
    /** @defaultValue undefined. There will be no `highlights?: string[]` in the return type of search. */
    highlightableTextFn?: (data: TData) => string;
    /** @defaultValue true */
    returnAllOnEmpty?: boolean;
  }
) => {
  /** Cached Prop: Used for createIndex onMount. So it doesn't re-run. */
  const indexerFn = useMemo(() => options?.indexerFn, [options?.indexerFn]);

  /** Cached Prop: Used for search useCallback. So it doesn't re-run. */
  const returnAllOnEmpty = useMemo(
    () => options?.returnAllOnEmpty ?? true,
    [options?.returnAllOnEmpty]
  );

  /** Cached Prop: Used for search useCallback. So it doesn't re-run. */
  const highlightableTextFn = useMemo(
    () => options?.highlightableTextFn,
    [options?.highlightableTextFn]
  );

  const index = useRef(new Index({ tokenize: 'full' }));
  const [indexIsReady, setIndexIsReady] = useState(false);

  // onMount: Create Index
  useEffect(() => {
    console.debug(
      `Creating index... (If this runs a lot, there's definitely a bug).`
    );
    if (!data.length) return;
    const _index = new Index({ tokenize: 'full' });

    // data.forEach((item) => index.add(item));
    data.forEach((_doc, i) => {
      const _docIndex = indexerFn?.(_doc) ?? JSON.stringify(_doc);
      _index.add(i, _docIndex);
    });

    index.current = _index;
    setIndexIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  type Prettify<T> = {
    [K in keyof T]: T[K];
  } & {};

  type TDataWithHighlights = Prettify<
    TData & {
      /** Highlights are only present if you use highlightableText in options. */
      highlights?: string[];
    }
  >;

  const search = useCallback(
    (query: string) => {
      if (!indexIsReady) {
        if (returnAllOnEmpty) return data as TDataWithHighlights[];
        return [];
      }

      const match = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!match) {
        if (returnAllOnEmpty) return data as TDataWithHighlights[];
        return [];
      }

      const results: TDataWithHighlights[] = [];

      const resultIndices = index.current.search(match);
      resultIndices.forEach((index) => {
        const _dataItem = data[index as number] as TDataWithHighlights;

        const highlightableText = highlightableTextFn?.(_dataItem) ?? undefined;

        if (highlightableText) {
          const highlights = getMatches(highlightableText, query, 3);

          results.push({
            ..._dataItem,
            highlights,
          });
        }

        results.push(_dataItem);
      });

      return results;
    },
    [data, highlightableTextFn, indexIsReady, returnAllOnEmpty]
  );

  return {
    search,
    indexIsReady,
  };
};

export type UseFlexSearchIndexResult<TData> = ReturnType<
  typeof useFlexSearchIndex<TData>
>;

/** OLD */
// const useFlexSearch = <T>(
//   data: T[],
//   options: {
//     indexer?: (data: T) => string;
//   } = {}
// ) => {
//   const index = useRef(new Index({ tokenize: 'full' }));
//   const [query, updateQuery] = useState('');

//   // onMount: Create Index
//   useEffect(() => {
//     if (!data.length) return;
//     const _index = new Index({ tokenize: 'full' });
//     console.debug(
//       `Creating index... (If this runs a lot, there's definitely a bug).`
//     );

//     // data.forEach((item) => index.add(item));
//     data.forEach((_doc, i) => {
//       const _docIndex = options.indexer?.(_doc) ?? JSON.stringify(_doc);
//       _index.add(i, _docIndex);
//     });

//     index.current = _index;
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // PERFORM SEARCH
//   const result = useMemo(() => {
//     const match = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     if (!match) return data;

//     const results: T[] = [];

//     const resultIndices = index.current.search(match);
//     resultIndices.forEach((index) => {
//       const _doc = data[index as number];
//       results.push(_doc);
//       // Highlight text body based on search (if you want to), refactor this though
//       // if (_doc) {
//       //   const docContent = `${_doc.title} ${_doc.excerpt}`;
//       //   const highlights = getMatches(docContent, searchTerm, 3);
//       //   results.push({
//       //     ..._doc,
//       //     highlights,
//       //   });
//       // }
//     });

//     return results;
//   }, [data, index, query]);

//   const setQuery = useMemo(() => debounce(updateQuery, 20), []);
//   const onSearch = useCallback(
//     (e: ChangeEvent<HTMLInputElement>) => {
//       setQuery(e.target.value);
//     },
//     [setQuery]
//   );

//   return {
//     result,
//     query,
//     setQuery,
//     onSearch,
//   };
// };

// export default useFlexSearch;
