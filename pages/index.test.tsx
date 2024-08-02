import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cards } from '@mocks/mockedData/cards'
import HomePage, { getServerSideProps } from './index'
import { GetServerSidePropsContext } from 'next'

vi.mock('next/router', () => vi.importActual('next-router-mock'))

describe('HomePage component', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('Component render card list and not render details if data is empty', () => {
    render(<HomePage people={cards} page="1" id={null} />)
    expect(screen.getByText(cards.results[0].name)).toBeInTheDocument()
    expect(screen.queryByTestId('details')).not.toBeInTheDocument()
  })
  it('Component render card list and details', () => {
    render(<HomePage people={cards} page="1" id={cards.results[1]} />)
    expect(screen.getByTestId('details')).toBeInTheDocument()
  })
  it('Component show "not found" message if people data is empty', () => {
    render(<HomePage people={{ ...cards, results: [] }} page="1" id={null} />)
    expect(
      screen.getByText(
        'Nothing Found. Change the search term or reset parameters.'
      )
    ).toBeInTheDocument()
  })
  it('Test getServerSideProps func', async () => {
    const result = {
      props: {
        page: '1',
        people: cards,
        id: cards.results[0],
      },
    }
    const context = {
      query: { details: '123' },
    } as unknown as GetServerSidePropsContext
    const props = await getServerSideProps(context)
    expect(result).toEqual(props)
  })
})
