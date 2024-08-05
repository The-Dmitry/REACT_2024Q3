// import { afterAll, afterEach, describe, expect, it, vi } from 'vitest'
// import { fireEvent, render, screen } from '@testing-library/react'
// import Details from './page'
// import mockRouter from 'next-router-mock'
// import { cards } from '@mocks/mockedData/cards'

// vi.mock('next/router', () => vi.importActual('next-router-mock'))

// describe('Details component', () => {
//   afterEach(() => {
//     vi.clearAllMocks()
//   })

//   afterAll(() => {
//     vi.restoreAllMocks()
//   })

//   it('The component opens if search param "details=" exists', () => {
//     render(<Details data={cards.results[0]} />)
//     expect(screen.getByTestId('details')).toBeInTheDocument()
//   })
//   it('The component displays data', () => {
//     render(<Details data={cards.results[0]} />)
//     expect(screen.getByText(cards.results[0].name)).toBeInTheDocument()
//   })
//   it('The component displays data', async () => {
//     mockRouter.push('/?details=1')
//     render(<Details data={cards.results[0]} />)
//     const button = screen.getByLabelText('close')
//     fireEvent.click(button)
//     expect(mockRouter).toMatchObject({
//       query: {},
//     })
//   })
// })
