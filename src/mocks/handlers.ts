import { delay, http, HttpResponse } from 'msw'
import { cards, notFound } from './mockedData/cards'

export const handlers = [
  http.get('https://swapi.dev/api/people/', ({ request }) => {
    const url = new URL(request.url)
    const search = url.searchParams.get('search')
    delay()
    if (search === 'dart') {
      return HttpResponse.json(cards)
    }

    return HttpResponse.json(notFound)
  }),
  http.get('https://swapi.dev/api/people/:id', () => {
    delay()
    return HttpResponse.json(cards.results[0])
  }),
]
