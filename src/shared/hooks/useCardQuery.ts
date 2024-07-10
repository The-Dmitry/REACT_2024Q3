import { useEffect, useState } from 'react'
import getCardList from '../utils/getData/getCardList'
import UseQueryParams from './useQueryParams'
import { ApiResponse } from '../../models/ApiResponse'

export default function UseCardQuery() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [cardData, setCardData] = useState<ApiResponse>()
  const [searchWord, setSearchWord] = useState('')
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

  const setNewSearchWord = (text: string) => {
    setSearchWord(text)
    setParams('1')
  }

  return { isLoading, cardData, setNewSearchWord }
}
