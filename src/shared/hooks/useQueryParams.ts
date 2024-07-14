import { useSearchParams } from 'react-router-dom'
import { SearchParams } from '../../models/SearchParams'
import { useCallback, useEffect } from 'react'

const UseQueryParams = (name: SearchParams) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const page = searchParams.get('page')

  const id = searchParams.get('details')

  const setParams = useCallback(
    (value: string, key = name) => {
      setSearchParams((params) => {
        params.set(key, value)
        return params
      })
    },
    [name, setSearchParams]
  )

  const clearParams = () => {
    setSearchParams((params) => {
      params.delete(name)
      return params
    })
  }

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
