import { ApiResponse } from '../../../models/ApiResponse'

export default async function getCardList(page: string | null, search: string) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=${page ?? '1'}${search ? `&search=${search}` : ''}`
    )
    const data: ApiResponse = await response.json()
    return data
  } catch {
    throw new Error('Request failed')
  }
}
