import { ApiResponse } from "../../../models/ApiResponse";

export default async function getCardData(query?: string) {
  const search = query ? query.trim() : "";
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=1${search ? `&search=${search}` : ""}`
    );
    // if (response.ok) {
    // }
    const data: ApiResponse = await response.json();
    return data.results;
  } catch {
    return [];
  }
}
