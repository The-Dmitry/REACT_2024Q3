import { useCallback, useEffect, useState } from 'react'
import getCardList from '../utils/getData/getCardList'
import UseQueryParams from './useQueryParams'
import { ApiResponse } from '../../models/ApiResponse'
import UseWordStorage from './useSaveQuery'

export default function UseCardQuery() {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [cardData, setCardData] = useState<ApiResponse>()
  const [searchWord, setSearchWord, getValueFromLS] = UseWordStorage()
  const { page, setParams } = UseQueryParams('page')

  useEffect(() => {
    setCardData(undefined)
    if (page) {
      const makeQuery = async () => {
        try {
          setIsLoading(true)
          const data = await getCardList(page, searchWord)
          if (data.count) {
            setCardData(data)
          } else {
            setCardData({ count: 0, results: [] })
          }
        } finally {
          setIsLoading(false)
        }
      }
      makeQuery()
    }
  }, [page, searchWord])

  const setNewSearchWord = useCallback(
    (text: string) => {
      setSearchWord(text)
      setParams('1')
    },
    [setParams, setSearchWord]
  )

  return { isLoading, cardData, setNewSearchWord, getValueFromLS }
}
