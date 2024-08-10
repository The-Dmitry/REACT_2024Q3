import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRemixStub } from '@remix-run/testing'
import NotFoundPage from '../routes/$'

describe('NotFound page', () => {
  const Stub = createRemixStub([
    {
      path: '/',
      Component: () => <NotFoundPage />,
    },
  ])

  it('NotFound page exists', () => {
    render(<Stub />)
    const message = screen.getByText(/page not found/i)
    expect(message).toBeInTheDocument()
    const button = screen.getByText(/to Main/i)
    expect(button).toBeInTheDocument()
  })
})
