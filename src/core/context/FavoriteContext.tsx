import { createContext } from 'react'
import CardData from '@models/CardData'

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
