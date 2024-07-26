import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Details from './Details'
import * as paramsHook from '@shared/hooks/useQueryParams'
import { routes } from '@core/router/router'
import { cards } from '@mocks/mockedData/cards'
import { store } from '@redux/store'
import { Provider } from 'react-redux'

describe('Details component', () => {
  it('Component opens if search param "details=" exists', () => {
    vi.spyOn(paramsHook, 'default').mockReturnValue({
      id: '1',
      setParams: vi.fn(),
      clearParams: vi.fn(),
      page: '',
      resetAllParameters: vi.fn(),
    })
    render(
      <Provider store={store}>
        <Details />
      </Provider>
    )
    expect(screen.getByTestId('details')).toBeInTheDocument()
  })
  it('Component does not open if search param "details=" does not exist', () => {
    vi.spyOn(paramsHook, 'default').mockReturnValue({
      id: '',
      setParams: vi.fn(),
      clearParams: vi.fn(),
      page: '',
      resetAllParameters: vi.fn(),
    })
    render(
      <Provider store={store}>
        <Details />
      </Provider>
    )
    expect(screen.queryByTestId('details')).not.toBeInTheDocument()
  })
  it('The component displays data', async () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['?details=4'],
    })
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    )

    expect(await screen.findByText(cards.results[0].name)).toBeInTheDocument()
  })
})
