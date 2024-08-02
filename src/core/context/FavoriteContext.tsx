import CardData from '@models/CardData'
import { createContext } from 'react'

export type Theme = 'dark' | 'light'

export const FavoriteContext = createContext<{
  collection: Record<string, CardData>
  handleCard: (card: CardData) => void
  clearCollection: () => void
}>({
  collection: {},
  handleCard() {},
  clearCollection() {},
})
