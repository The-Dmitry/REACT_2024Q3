import { ApiResponse } from "../../../models/ApiResponse";

export default async function getCardData(search?: string) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=1${search ? `&search=${search}` : ""}`
    );
    const data: ApiResponse = await response.json();
    return data.results;
  } catch {
    throw new Error("Request failed");
  }
}
