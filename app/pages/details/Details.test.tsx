import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Details from './Details'
import { cards } from '~/mocks/mockedData/cards'
import { createRemixStub } from '@remix-run/testing'

describe('Details component', () => {
  const Stub = createRemixStub([
    {
      path: '/',
      Component: () => <Details data={cards.results[0]} />,
    },
  ])

  it('The component opens if search param "details=" exists', () => {
    render(<Stub />)
    expect(screen.getByTestId('details')).toBeInTheDocument()
  })
  it('The component displays data', () => {
    render(<Stub />)
    expect(screen.getByText(cards.results[0].name)).toBeInTheDocument()
  })
})
