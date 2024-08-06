import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cards } from '@mocks/mockedData/cards'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'
import People from './People'

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
    screen.debug()
    expect(screen.getByText(cards.results[0].name)).toBeInTheDocument()
  })
})
