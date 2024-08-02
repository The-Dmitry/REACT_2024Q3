import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { cards } from '@mocks/mockedData/cards'
import FavoriteControl from './FavoriteControl'
import { FavoriteContext } from '@core/context/FavoriteContext'

describe('FavoriteControl component', () => {
  const mockValue = {
    card1: { ...cards.results[0] },
    card2: { ...cards.results[1] },
  }
  it('Component is rendered if data exists', () => {
    URL.createObjectURL = vi.fn()

    render(
      <FavoriteContext.Provider
        value={{
          collection: mockValue,
          clearCollection: vi.fn(),
          handleCard: vi.fn(),
        }}
      >
        <FavoriteControl />
      </FavoriteContext.Provider>
    )
    expect(screen.getByText('Selected items: 2')).toBeInTheDocument()
  })
  it('Component is not rendered if data is empty', () => {
    URL.createObjectURL = vi.fn()

    render(
      <FavoriteContext.Provider
        value={{
          collection: {},
          clearCollection: vi.fn(),
          handleCard: vi.fn(),
        }}
      >
        <FavoriteControl />
      </FavoriteContext.Provider>
    )
    expect(screen.queryByText('Selected items: 2')).not.toBeInTheDocument()
  })
  it('Button click clears the data', () => {
    URL.createObjectURL = vi.fn()
    const func = vi.fn()

    render(
      <FavoriteContext.Provider
        value={{
          collection: mockValue,
          clearCollection: func,
          handleCard: vi.fn(),
        }}
      >
        <FavoriteControl />
      </FavoriteContext.Provider>
    )
    const button = screen.getByText(/unselect all/i)
    fireEvent.click(button)
    expect(func).toHaveBeenCalled()
  })
})
