import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import * as paramsHook from '../../hooks/useQueryParams'
import RestoreParameters from './RestoreParameters'
import { store } from '@redux/store'
import { createMemoryRouter, RouterProvider } from 'react-router'

describe('RestoreParameters component', () => {
  it('clicking the button resets search params', () => {
    const router = createMemoryRouter(
      [{ path: '/', element: <RestoreParameters /> }],
      { initialEntries: ['?details=kek'] }
    )
    const reset = vi.spyOn(paramsHook, 'default')
    render(
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    )
    const button = screen.getByText('Reset parameters')
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(router.state.location.search).toBe('?page=1')
    expect(reset).toHaveBeenCalled()
  })
})
