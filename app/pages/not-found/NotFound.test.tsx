import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'
import { createRemixStub } from '@remix-run/testing'

describe('NotFound page', () => {
  const Stub = createRemixStub([
    {
      path: '/',
      Component: () => <NotFound />,
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
