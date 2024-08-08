const getImageSrc = (url: string) =>
  `https://starwars-visualguide.com/assets/img/characters/${url.replace(/[^\d]/g, '')}.jpg`

export default getImageSrc
