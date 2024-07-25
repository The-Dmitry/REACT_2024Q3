import { describe, expect, it } from 'vitest'
import {
  handleFavorites,
  clearFavorites,
  favoriteCardSlice,
} from './favorite-slice'
import { cards } from '../../mocks/mockedData/cards'

const mock = cards.results[0]
describe('Redux FavoriteCard slice', () => {
  it('Should handle adding a favorite card', () => {
    const state = favoriteCardSlice.reducer({}, handleFavorites(mock))
    expect(state).toEqual({ [mock.name]: mock })
  })
  it('Should handle removing a favorite card', () => {
    const state = favoriteCardSlice.reducer(
      { [mock.name]: mock },
      handleFavorites(mock)
    )
    expect(state).toEqual({})
  })
  it('Should handle clearing all favorites', () => {
    const state = favoriteCardSlice.reducer(
      { [mock.name]: mock },
      clearFavorites()
    )
    expect(state).toEqual({})
  })
})
