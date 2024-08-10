import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider/next-13.5'
import mockRouter from 'next-router-mock'
import NotFound from '../core/components/not-found/NotFound'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('NotFound component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('The component exists', async () => {
    render(
      <MemoryRouterProvider>
        <NotFound />
      </MemoryRouterProvider>
    )
    expect(screen.getByText(/to main/i)).toBeInTheDocument()
  })
  it('The component change url to default', async () => {
    mockRouter.push('/some/bad/route')
    render(
      <MemoryRouterProvider>
        <NotFound />
      </MemoryRouterProvider>
    )
    const button = screen.getByText(/to main/i)
    fireEvent.click(button)
    expect(mockRouter.pathname).toBe('/')
  })
})
