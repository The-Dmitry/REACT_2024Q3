import CardData from '~/models/CardData'

export async function fetchDetails(id: string): Promise<CardData> {
  const res = await fetch(`https://swapi.dev/api/people/${id}`)
  return await res.json()
}
