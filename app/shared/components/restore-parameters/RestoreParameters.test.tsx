import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import RestoreParameters from './RestoreParameters'
import { createRemixStub } from '@remix-run/testing'

describe('RestoreParameters component', () => {
  const Stub = createRemixStub([
    {
      path: '/',
      Component: () => <RestoreParameters />,
    },
  ])
  it('Components exists', () => {
    render(<Stub />)
    const button = screen.getByText('Reset parameters')
    expect(button).toBeInTheDocument()
  })
})
