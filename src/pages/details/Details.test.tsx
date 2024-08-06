import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Details from './Details'
import { cards } from '@mocks/mockedData/cards'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'
import mockRouter from 'next-router-mock'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('Details component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('The component opens if search param "details=" exists', async () => {
    const jsx = await Details({ id: '1' })
    render(jsx, { wrapper: MemoryRouterProvider })
    expect(screen.getByTestId('details')).toBeInTheDocument()
  })
  it('The component displays data', async () => {
    const jsx = await Details({ id: '1' })
    render(jsx, { wrapper: MemoryRouterProvider })
    expect(screen.getByText(cards.results[0].name)).toBeInTheDocument()
  })
  it('The component set default params on close', async () => {
    mockRouter.push('/?details=1')
    const jsx = await Details({ id: '1' })
    render(jsx, { wrapper: MemoryRouterProvider })
    const button = screen.getByTestId('close')
    fireEvent.click(button)
    expect(mockRouter).toMatchObject({
      query: {},
    })
  })
})
