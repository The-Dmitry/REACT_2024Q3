import { useEffect, useState } from 'react'
import getDetails from '../utils/getDetails/getDetails'
import CardData from '../../models/CardData'
import UseQueryParams from './useQueryParams'

export default function UseCardDetails() {
  const { id, clearParams } = UseQueryParams('details')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [details, setDetails] = useState<CardData>()

  const getData = async (id: string) => {
    try {
      setIsLoading(true)
      const data = await getDetails(id)
      setDetails(data)
    } catch {
      setDetails(undefined)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setDetails(undefined)
    id && getData(id)
  }, [id])

  return { id, details, clearParams, isLoading }
}
