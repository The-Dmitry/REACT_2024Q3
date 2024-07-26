import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router'
import { describe, it, expect } from 'vitest'
import Pagination from './Pagination'

import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

describe('Pagination', async () => {
  it('Pagination updates URL query parameter when page changes', async () => {
    const routes = [
      {
        path: '/',
        element: (
          <Provider store={store}>
            <Pagination />
          </Provider>
        ),
      },
    ]
    const router = createMemoryRouter(routes)
    render(<RouterProvider router={router} />)
    const pagination = await screen.findByTestId('pagination')

    expect(pagination).toBeInTheDocument()
    fireEvent.click(pagination.children[1])
    expect(router.state.location.search).toBe('?page=2')
    fireEvent.click(pagination.children[0])
    expect(router.state.location.search).toBe('?page=1')
  })
})
