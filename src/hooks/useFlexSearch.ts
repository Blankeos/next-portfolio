import flexsearchPkg from 'flexsearch'
const { Document } = flexsearchPkg
import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { debounce } from '@/lib/debounce'

const useFlexSearch = <T>(options = {}, data: T[]) => {
  const [query, updateQuery] = useState('')

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
    })

    data.forEach((item) => index.add(item))

    return index
  }, [data])

  const result = useMemo(() => document.search(query, 40), [query, document])

  const setQuery = useMemo(() => debounce(updateQuery, 20), [])
  const onSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
    },
    [setQuery]
  )

  return {
    result,
    query,
    setQuery,
    onSearch,
  }
}

export default useFlexSearch
