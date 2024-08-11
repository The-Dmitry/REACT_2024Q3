import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cards } from '@mocks/mockedData/cards'
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider/next-13.5'
import People from '../core/components/people/People'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('People component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('The component shows correct data if search param exists', async () => {
    const jsx = await People({ searchParams: { page: '1', search: '' } })
    render(jsx, { wrapper: MemoryRouterProvider })
    expect(screen.getByText(cards.results[0].name)).toBeInTheDocument()
  })
})
