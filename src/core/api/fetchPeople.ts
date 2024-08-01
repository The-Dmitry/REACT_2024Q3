import { ApiResponse } from '@models/ApiResponse'

export async function fetchPeople(
  page: string,
  search: string
): Promise<ApiResponse> {
  const res = await fetch(
    `https://swapi.dev/api/people/?page=${page}&search=${search}`
  )
  const data = await res.json()
  return data
}
