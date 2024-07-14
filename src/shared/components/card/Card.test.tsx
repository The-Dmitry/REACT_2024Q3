import { createMemoryRouter, RouterProvider } from 'react-router'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from './Card'
import { cards } from '../../../mocks/mockedData/cards'

describe('Card component', () => {
  it('Clicking on a card updates URL query parameter', () => {
    const routes = [
      {
        path: '/',
        element: <Card {...cards.results[0]}></Card>,
      },
    ]
    const router = createMemoryRouter(routes)
    render(<RouterProvider router={router} />)

    const card = screen.getByTestId('card')
    fireEvent.click(card)
    expect(router.state.location.search).toBe('?details=4')
  })
})
