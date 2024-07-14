import { describe, expect, it } from 'vitest'
import getDetails from './getDetails'
import { cards } from '../../../mocks/mockedData/cards'

describe('', () => {
  it('test', async () => {
    const result = await getDetails('4')
    expect(result).toEqual(cards.results[0])
  })
})
