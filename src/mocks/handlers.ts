import { http, HttpResponse } from 'msw'
import { cards } from './mockedData/cards'

export const handlers = [
  http.get('https://swapi.dev/api/people/', () => {
    return HttpResponse.json(cards)
  }),
  http.get('https://swapi.dev/api/people/:id', () => {
    return HttpResponse.json(cards.results[0])
  }),
]
