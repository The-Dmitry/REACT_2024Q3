import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Pagination from './Pagination'
import { createRemixStub } from '@remix-run/testing'
import { cards } from '~/mocks/mockedData/cards'

describe('Pagination component', () => {
  it('Pagination renders buttons and disables the button corresponding to the page number', () => {
    const Stub = createRemixStub([
      {
        path: '/',
        Component: () => <Pagination data={cards} page="1" />,
      },
    ])
    render(<Stub />)
    const pagination = screen.getByTestId('pagination')
    expect(pagination).toBeInTheDocument()

    expect(pagination.children[0]).toHaveAttribute('disabled')
  })
  it('Pagination doesn"t renders buttons id data.count < 10', () => {
    const Stub = createRemixStub([
      {
        path: '/',
        Component: () => <Pagination data={{ ...cards, count: 0 }} page="1" />,
      },
    ])
    render(<Stub />)
    const pagination = screen.queryByTestId('pagination')
    expect(pagination).toBeNull()
  })
})
