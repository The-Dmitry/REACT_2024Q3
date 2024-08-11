import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import FavoriteProvider from './FavoriteProvider'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('FavoriteProvider component', () => {
  it('Component render children', () => {
    render(
      <FavoriteProvider>
        <div>Uniq value</div>
      </FavoriteProvider>
    )
    expect(screen.getByText(/uniq value/i)).toBeInTheDocument()
  })
})
