import { render, screen } from '@testing-library/react'
import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import Card from './Card'
import { cards } from '@mocks/mockedData/cards'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('Card component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })
  it('Card is rendered with the correct value', () => {
    render(<Card {...cards.results[0]} />)

    expect(screen.getByText(cards.results[0].name)).toHaveTextContent(
      cards.results[0].name
    )
  })
})
