import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import Pagination from './Pagination'
import { RouterProvider } from 'react-router-dom'

describe('Pagination', () => {
  it('Pagination updates URL query parameter when page changes', () => {
    const routes = [
      {
        path: '/',
        element: <Pagination totalCount={80} />,
      },
    ]
    const router = createMemoryRouter(routes)

    render(<RouterProvider router={router} />)
    const [pagination] = screen.getAllByTestId('pagination')
    expect(pagination).toBeInTheDocument()

    fireEvent.click(pagination.children[2])
    expect(router.state.location.search).toBe('?page=3')
    fireEvent.click(pagination.children[0])
    expect(router.state.location.search).toBe('?page=1')
  })
})
