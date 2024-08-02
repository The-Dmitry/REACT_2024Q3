import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, afterAll, afterEach } from 'vitest'
import Layout from './Layout' // Adjust the path as necessary

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('Layout component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('renders Header component', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    )

    expect(screen.getByText(/search/i)).toBeInTheDocument()
  })

  it('renders children components', () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    )

    expect(screen.getByText('Test Child')).toBeInTheDocument()
  })
})
