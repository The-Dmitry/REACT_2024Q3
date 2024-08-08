import { fireEvent, render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Fallback from './Fallback'
import { MemoryRouter } from 'react-router'

describe('Fallback component', () => {
  it('renders the fallback message', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Fallback reload={() => {}} />
      </MemoryRouter>
    )
    expect(getByText('Oops, Something went wrong!')).toBeInTheDocument()
  })

  it('calls reload on button click', () => {
    const mockReload = vi.fn()
    const { getByText } = render(
      <MemoryRouter>
        <Fallback reload={mockReload} />
      </MemoryRouter>
    )
    const button = getByText('Reload')
    fireEvent.click(button)

    expect(mockReload).toHaveBeenCalled()
  })
})
