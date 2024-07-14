export default function getImageSrc(url: string) {
  const id = url.replace(/[^\d]/g, "");
  return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;
}