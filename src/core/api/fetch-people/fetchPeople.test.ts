import { cards } from '@mocks/mockedData/cards'
import { describe, expect, it } from 'vitest'
import { fetchPeople } from './fetchPeople'

describe('fetchPeople function', () => {
  it('fetches and returns expected value', async () => {
    const result = await fetchPeople('1', '')
    expect(result).toEqual(cards)
  })
})
