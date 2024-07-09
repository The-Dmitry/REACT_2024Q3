import CardData from './CardData'

export interface ApiResponse {
  count: number
  next: string
  previous: unknown
  results: CardData[]
}
