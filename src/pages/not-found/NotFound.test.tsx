import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('NotFound page', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('NotFound page exists', () => {
    render(<NotFound />)
    const message = screen.getByText(/page not found/i)
    expect(message).toBeInTheDocument()
    const button = screen.getByText(/to Main/i)
    expect(button).toBeInTheDocument()
  })
})
