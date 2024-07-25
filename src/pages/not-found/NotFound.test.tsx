import { createMemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { RouterProvider } from 'react-router-dom'

import { routes } from '../../core/router/router'
import NotFound from './NotFound'

describe('NotFound page', () => {
  it('landing on a bad page', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/bad-route'],
    })
    render(<RouterProvider router={router}></RouterProvider>)
    const message = screen.getByText(/page not found/i)
    expect(message).toBeInTheDocument()
  })
  it('Button "To Main" navigates to main page', () => {
    const router = createMemoryRouter(
      [
        { path: '/', element: <div>Main</div> },
        { path: '*', element: <NotFound /> },
      ],
      {
        initialEntries: ['/bad-route'],
      }
    )
    render(<RouterProvider router={router}></RouterProvider>)
    const message = screen.getByText(/page not found/i)
    expect(message).toBeInTheDocument()
    const button = screen.getByText(/to Main/i)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(router.state.location.pathname).toBe('/')
  })
})
