import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import React, { useContext } from 'react'
import styles from './ThemeProvider.module.css'
import { ThemeContext } from '@core/context/ThemeContext'
import ThemeProvider from './ThemeProvider'

const TestComponent = () => {
  const { theme, handleTheme } = useContext(ThemeContext)
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button onClick={handleTheme} data-testid="toggle-button">
        Toggle Theme
      </button>
    </div>
  )
}

describe('ThemeProvider', () => {
  it('provides the initial theme and toggles theme correctly', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const themeElement = screen.getByTestId('theme')
    const toggleButton = screen.getByTestId('toggle-button')

    expect(themeElement.textContent).toBe('light')
    fireEvent.click(toggleButton)
    expect(themeElement.textContent).toBe('dark')
    fireEvent.click(toggleButton)
    expect(themeElement.textContent).toBe('light')
  })

  it('applies the correct CSS class based on the theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    )

    const wrapper = screen.getByTestId('theme-provider')
    expect(wrapper).toHaveClass(styles.light)
    const toggleButton = screen.getByTestId('toggle-button')
    fireEvent.click(toggleButton)
    expect(wrapper).toHaveClass(styles.dark)
  })
})
