import { describe, expect, it } from 'vitest'
// import { render, fireEvent, screen } from '@testing-library/react'
// import { Layout } from '../../../pages'
// import { MemoryRouter } from 'react-router-dom'
// import { LS_KEY } from '../../../shared/hooks/useSaveQuery'
// import Header from './Header'

describe('Header', () => {
  // const initialValue = 'Search test'
  // beforeEach(() => {
  //   localStorage.setItem(LS_KEY, initialValue)
  // })

  // it('Search calls the prop callback to get the initial value from LS', () => {
  //   const initialSpy = vi.fn()
  //   render(<Header getValueFromLS={initialSpy} submit={vi.fn()}></Header>)
  //   expect(initialSpy).toHaveBeenCalled()
  // })

  // it('Search button saves the entered value to the local storage', () => {
  //   render(
  //     <MemoryRouter>
  //       <Layout />
  //     </MemoryRouter>
  //   )
  //   const testQuery = 'test query'
  //   const button = screen.getByText('Search')
  //   const input = screen.getByRole('searchbox')
  //   fireEvent.input(input, { target: { value: testQuery } })
  //   fireEvent.click(button)
  //   expect(localStorage.getItem(LS_KEY)).toBe(testQuery)
  // })

  // it('Search retrieves correct value from the local storage upon mounting', () => {
  //   render(
  //     <MemoryRouter>
  //       <Layout />
  //     </MemoryRouter>
  //   )
  //   const input = screen.getByRole('searchbox')
  //   expect(input).toHaveValue(initialValue)
  // })

  it('ToDo', () => {
    expect(true).toBeTruthy()
  })
})
