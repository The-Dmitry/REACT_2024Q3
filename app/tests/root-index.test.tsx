import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import * as remixHooks from '@remix-run/react'
import { createRemixStub } from '@remix-run/testing'
import { cards } from '~/mocks/mockedData/cards'
import Index from '../routes/_index'

describe('Index component', () => {
  it('Renders card and details info if data is correct ', () => {
    vi.spyOn(remixHooks, 'useLoaderData').mockReturnValue({
      id: cards.results[0],
      page: '1',
      people: cards,
    })
    const Stub = createRemixStub([
      {
        path: '/',
        Component: () => <Index />,
      },
    ])
    render(<Stub />)
    expect(screen.getAllByText(cards.results[0].name).length).toBeGreaterThan(1)
  })
})
