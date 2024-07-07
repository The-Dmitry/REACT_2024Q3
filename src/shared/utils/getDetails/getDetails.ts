import CardData from "../../../models/CardData";

export default async function getDetails(id: string) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data: CardData = await response.json();
    return data;
  } catch {
    throw new Error("Request failed");
  }
}
