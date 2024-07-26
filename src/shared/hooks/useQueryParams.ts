import { useCallback, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchParams } from '@models/SearchParams'

const UseQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get('page') || ''

  const id = searchParams.get('details') || ''

  const setParams = useCallback(
    (value: string, key: SearchParams) => {
      setSearchParams((params) => {
        params.set(key, value)
        return params
      })
    },
    [setSearchParams]
  )

  const clearParams = useCallback(
    (key: SearchParams) => {
      setSearchParams((params) => {
        params.delete(key)
        return params
      })
    },
    [setSearchParams]
  )

  const resetAllParameters = () => {
    setSearchParams((params) => {
      params.delete('details')
      return params
    })
    setParams('1', 'page')
  }

  useEffect(() => {
    if (!page) {
      setParams('1', 'page')
    }
  }, [page, setParams])

  return { setParams, clearParams, page, id, resetAllParameters }
}

export default UseQueryParams
