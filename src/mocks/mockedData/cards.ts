import CardData from '../../models/CardData'

export const cards: {
  count: number
  next: null
  previous: null
  results: CardData[]
} = {
  count: 20,
  next: null,
  previous: null,
  results: [
    {
      name: 'Darth Vader Mocked',
      height: '202',
      mass: '136',
      hair_color: 'none',
      skin_color: 'white',
      eye_color: 'yellow',
      birth_year: '41.9BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/6/',
      ],
      species: [],
      vehicles: [],
      starships: ['https://swapi.dev/api/starships/13/'],
      created: '2014-12-10T15:18:20.704000Z',
      edited: '2014-12-20T21:17:50.313000Z',
      url: 'https://swapi.dev/api/people/4/',
    },
    {
      name: 'Darth Maul Mocked',
      height: '175',
      mass: '80',
      hair_color: 'none',
      skin_color: 'red',
      eye_color: 'yellow',
      birth_year: '54BBY',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/36/',
      films: ['https://swapi.dev/api/films/4/'],
      species: ['https://swapi.dev/api/species/22/'],
      vehicles: ['https://swapi.dev/api/vehicles/42/'],
      starships: ['https://swapi.dev/api/starships/41/'],
      created: '2014-12-19T18:00:41.929000Z',
      edited: '2014-12-20T21:17:50.403000Z',
      url: 'https://swapi.dev/api/people/44/',
    },
  ],
}

export const notFound = {
  count: 0,
  next: null,
  previous: null,
  results: [],
}
