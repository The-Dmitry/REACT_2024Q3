import { describe, expect, it, vi } from 'vitest'
import * as reduxHooks from '@shared/hooks/storeHooks'
import { fireEvent, render, screen } from '@testing-library/react'
import { cards } from '@mocks/mockedData/cards'
import FavoriteControl from './FavoriteControl'

describe('FavoriteControl component', () => {
  it('Component is rendered if data exists', () => {
    URL.createObjectURL = vi.fn()
    vi.spyOn(reduxHooks, 'useAppSelector').mockReturnValue({
      card1: { ...cards.results[0] },
      card2: { ...cards.results[1] },
    })
    const dispatch = vi.spyOn(reduxHooks, 'useAppDispatch')
    dispatch.mockReturnValue(vi.fn())

    render(<FavoriteControl />)
    expect(screen.getByText('Selected items: 2')).toBeInTheDocument()
    const button = screen.getByText(/unselect all/i)
    fireEvent.click(button)
    expect(dispatch).toHaveBeenCalled()
  })
  it('Component is not rendered if data is empty', () => {
    URL.createObjectURL = vi.fn()
    vi.spyOn(reduxHooks, 'useAppSelector').mockReturnValue({})
    vi.spyOn(reduxHooks, 'useAppDispatch').mockReturnValue(vi.fn())

    render(<FavoriteControl />)
    expect(screen.queryByText('Selected items: 2')).not.toBeInTheDocument()
  })
  it('Button click clears the data', () => {
    URL.createObjectURL = vi.fn()
    vi.spyOn(reduxHooks, 'useAppSelector').mockReturnValue({
      card1: { ...cards.results[0] },
      card2: { ...cards.results[1] },
    })
    const dispatch = vi.spyOn(reduxHooks, 'useAppDispatch')
    dispatch.mockReturnValue(vi.fn())

    render(<FavoriteControl />)
    const button = screen.getByText(/unselect all/i)
    fireEvent.click(button)
    expect(dispatch).toHaveBeenCalled()
  })
})
