import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Custom404 from './404'

describe('404 page', () => {
  it('404 page is rendered', () => {
    render(<Custom404 />)
    const message = screen.getByText(/page not found/i)
    expect(message).toBeInTheDocument()
    const button = screen.getByText(/to Main/i)
    expect(button).toBeInTheDocument()
  })
})
