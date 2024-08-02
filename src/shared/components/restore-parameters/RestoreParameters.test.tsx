import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import RestoreParameters from './RestoreParameters'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('RestoreParameters component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('clicking the button resets search params', () => {
    mockRouter.push('/?details=1&=search=adawdaw&page=234')
    render(<RestoreParameters />)
    const button = screen.getByText('Reset parameters')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(mockRouter).toMatchObject({
      query: {},
    })
  })
})
