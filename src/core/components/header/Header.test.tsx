import { describe, expect, it, vi } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

import ThemeProvider from '../theme-provider/ThemeProvider'
import { Provider } from 'react-redux'
import * as storeHooks from '../../../shared/hooks/storeHooks'
import { store } from '../../../redux/store'

describe('Header component', () => {
  it('Click on button calls dispatch', () => {
    const func = vi.spyOn(storeHooks, 'useAppDispatch')
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    )
    const button = screen.getByText(/search/i)
    fireEvent.click(button)
    expect(func).toHaveBeenCalled()
  })
  it('On first render header requests an initial value from store', () => {
    const func = vi.spyOn(storeHooks, 'useAppSelector')
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    )
    expect(func).toHaveBeenCalled()
  })
})
