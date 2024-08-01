import { ApiResponse } from '@models/ApiResponse'

export async function fetchPeople(page: string): Promise<ApiResponse> {
  const res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
  const data = await res.json()
  return data
}
