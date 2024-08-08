import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import ButtonLink from './ButtonLink'
import { createMemoryRouter, RouterProvider } from 'react-router'

describe('ButtonLink component', () => {
  test('Button navigates to url', () => {
    const router = createMemoryRouter([
      {
        path: '/',
        element: <ButtonLink to="test">Link</ButtonLink>,
      },
      {
        path: '/test',
        element: <div>Test element</div>,
      },
    ])
    render(<RouterProvider router={router} />)
    const button = screen.getByText(/link/i)
    fireEvent.click(button)
    expect(router.state.location.pathname).toBe('/test')
  })
})
