import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect, vi, afterEach, afterAll } from 'vitest'
import mockRouter from 'next-router-mock'
import Pagination from './Pagination'
import { cards } from '@mocks/mockedData/cards'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('Pagination component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })
  it('Pagination updates URL query parameter on button click', () => {
    mockRouter.push('/?page=1')
    render(<Pagination data={cards} page="1" />)
    const pagination = screen.getByTestId('pagination')

    expect(pagination).toBeInTheDocument()

    expect(pagination.children[0]).toHaveAttribute('disabled')

    fireEvent.click(pagination.children[1])
    expect(mockRouter).toMatchObject({
      query: { page: '2' },
    })
  })
})
