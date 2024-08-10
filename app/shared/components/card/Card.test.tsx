import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Card from './Card'
import { cards } from '~/mocks/mockedData/cards'
import { createRemixStub } from '@remix-run/testing'

describe('Card component', () => {
  const Stub = createRemixStub([
    {
      path: '/',
      Component: () => <Card {...cards.results[0]} />,
    },
  ])
  it('Card is rendered with the correct value', () => {
    render(<Stub />)

    expect(screen.getByText(cards.results[0].name)).toHaveTextContent(
      cards.results[0].name
    )
  })
})
