import { describe, expect, it } from 'vitest'
import { fetchPeople } from './fetchPeople'
import { cards } from '~/mocks/mockedData/cards'

describe('fetchPeople function', () => {
  it('fetches and returns expected value', async () => {
    const result = await fetchPeople('1', '')
    expect(result).toEqual(cards)
  })
})
