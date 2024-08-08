import { createMemoryRouter, RouterProvider } from 'react-router'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Card from './Card'
import { cards } from '@mocks/mockedData/cards'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import * as storeHooks from '@shared/hooks/storeHooks'

const routes = [
  {
    path: '/',
    element: <Card {...cards.results[0]}></Card>,
  },
]

describe('Card component', () => {
  it('Clicking on a card updates URL query parameter', () => {
    const router = createMemoryRouter(routes)

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    )

    const card = screen.getByTestId('card')
    fireEvent.click(card)
    expect(router.state.location.search).toBe('?details=4')
  })
}),
  it('Click on checkbox calls the function', () => {
    const router = createMemoryRouter(routes)
    const func = vi.spyOn(storeHooks, 'useAppSelector')
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    )
    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(func).toHaveBeenCalled()
  })
