import { ApiResponse } from "../../../models/ApiResponse";

export default async function getCardList(page: string, search: string) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=${page}${search ? `&search=${search}` : ""}`
    );
    const data: ApiResponse = await response.json();
    return data.results;
  } catch {
    throw new Error("Request failed");
  }
}
