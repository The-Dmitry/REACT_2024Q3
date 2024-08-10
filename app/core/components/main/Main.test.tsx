import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { createRemixStub } from '@remix-run/testing'
import Main from './Main'
import { cards } from '~/mocks/mockedData/cards'

describe('Main component', () => {
  it('Component render card list and pagination if data is valid', () => {
    const Stub = createRemixStub([
      {
        path: '/',
        Component: () => <Main data={cards} page="1" />,
      },
    ])
    render(<Stub />)
    expect(screen.getByText(cards.results[0].name)).toBeInTheDocument()
    expect(screen.getByTestId('pagination')).toBeInTheDocument()
  })
  it('Component render not-found page, if data is invalid', () => {
    const Stub = createRemixStub([
      {
        path: '/',
        Component: () => <Main data={{ ...cards, results: [] }} page="1" />,
      },
    ])
    render(<Stub />)
    expect(screen.getByText('Reset parameters')).toBeInTheDocument()
  })
})
