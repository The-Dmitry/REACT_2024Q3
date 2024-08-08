import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import styles from './button.module.css'
import Button from './Button'

describe('Button component', () => {
  test('renders button with children', () => {
    render(<Button warning>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  test('applies warning class when warning prop is true', () => {
    render(<Button warning={true}>Warning Button</Button>)
    expect(screen.getByText('Warning Button')).toHaveClass(styles.button)
    expect(screen.getByText('Warning Button')).toHaveClass(styles.warning)
  })

  test('does not apply warning class when warning prop is false', () => {
    render(<Button warning={false}>Normal Button</Button>)
    expect(screen.getByText('Normal Button')).toHaveClass(styles.button)
    expect(screen.getByText('Normal Button')).not.toHaveClass(styles.warning)
  })

  test('Calls function on click', () => {
    const func = vi.fn()
    const { getByText } = render(
      <Button warning onClick={func}>
        Stop Propagation
      </Button>
    )
    const button = getByText('Stop Propagation')
    fireEvent.click(button)
    expect(func).toHaveBeenCalled()
  })
})
