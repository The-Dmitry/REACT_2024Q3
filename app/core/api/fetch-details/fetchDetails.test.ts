import { describe, expect, it } from 'vitest'
import { fetchDetails } from './fetchDetails'
import { cards } from '~/mocks/mockedData/cards'

describe('fetchDetails function', () => {
  it('fetches and returns expected value', async () => {
    const result = await fetchDetails('4')
    expect(result).toEqual(cards.results[0])
  })
})
