import { useState, useCallback } from 'react'
import CardData from '@models/CardData'

export function useCollection() {
  const [collection, setCollection] = useState<Record<string, CardData>>({})

  const handleCard = useCallback(
    (card: CardData) => {
      const obj = { ...collection }
      if (card.name in obj) {
        delete obj[card.name]
      } else {
        obj[card.name] = card
      }
      setCollection({ ...obj })
    },
    [collection]
  )

  const clearCollection = useCallback(() => setCollection({}), [])

  return { collection, handleCard, clearCollection }
}
