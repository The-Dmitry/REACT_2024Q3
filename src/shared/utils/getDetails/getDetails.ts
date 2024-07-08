import CardData from "../../../models/CardData";

export default async function getDetails(id: string) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    if (!response.ok) {
      throw new Error("Request failed");
    }
    const data: CardData = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
