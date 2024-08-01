export async function fetchDetails(id: string) {
  const res = await fetch(`https://swapi.dev/api/people/${id}`)
  const data = await res.json()
  return data
}
