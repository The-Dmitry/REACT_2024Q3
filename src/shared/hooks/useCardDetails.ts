import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import getDetails from '../utils/getDetails/getDetails'
import CardData from '../../models/CardData'

export default function UseCardDetails() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [details, setDetails] = useState<CardData>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const id = searchParams.get('details')

  const clearParams = () => {
    setSearchParams((params) => {
      params.delete('details')
      return params
    })
  }

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
