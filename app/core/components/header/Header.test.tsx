import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import { createRemixStub } from '@remix-run/testing'

const Stub = createRemixStub([
  {
    path: '/',
    Component: () => <Header />,
  },
])

describe('Header component', () => {
  it('Header component contains "Search" button and input', () => {
    render(<Stub />)
    const input = screen.getByRole('searchbox')
    const button = screen.getByText(/search/i)
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
