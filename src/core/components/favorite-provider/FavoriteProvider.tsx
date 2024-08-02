import { ReactNode, useState, useCallback } from 'react'
import CardData from '@models/CardData'
import { FavoriteContext } from '@core/context/FavoriteContext'

export default function FavoriteProvider({
  children,
}: {
  children: ReactNode | ReactNode[]
}) {
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

  return (
    <FavoriteContext.Provider
      value={{ collection, handleCard, clearCollection }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
