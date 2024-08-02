import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import Header from './Header'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('Header component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('Updates search params on submit', () => {
    mockRouter.push('/?page=3')
    render(<Header />)
    const testQuery = 'test query'
    const button = screen.getByText('Search')
    const input = screen.getByRole('searchbox')
    fireEvent.input(input, { target: { value: testQuery } })
    fireEvent.click(button)

    expect(mockRouter).toMatchObject({
      query: { search: testQuery, page: '1' },
    })
  })

  it('Set default search params with empty value', () => {
    mockRouter.push('/?page=3&search=test')
    render(<Header />)
    const button = screen.getByText('Search')
    fireEvent.click(button)

    expect(mockRouter).toMatchObject({
      query: { page: '1' },
    })
  })

  it('Set initial value from search on mount', () => {
    mockRouter.push('/?page=3&search=test')
    render(<Header />)
    const input = screen.getByRole('searchbox')

    expect(input).toHaveValue('test')
  })
})
