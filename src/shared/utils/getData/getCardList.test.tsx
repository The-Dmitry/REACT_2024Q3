import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Layout } from '../../../pages'

describe('Test getCardList function', () => {
  it('Should create cards according to response for "dart" query', async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )
    const button = screen.getByText('Search')
    const input = screen.getByRole('searchbox')
    fireEvent.input(input, { target: { value: 'dart' } })
    fireEvent.click(button)
    const loader = screen.getByTestId('loader')
    expect(loader).toBeInTheDocument()
    const card1 = await screen.findByText('Darth Vader Mocked')
    const card2 = await screen.findByText('Darth Maul Mocked')
    expect(card1).toBeInTheDocument()
    expect(card2).toBeInTheDocument()
  })
})
