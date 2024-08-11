import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Loader from './Loader'
import styles from './loader.module.css'

describe('Loader component', () => {
  it('renders the loader with the correct styles and attributes', () => {
    render(<Loader />)

    const loaderElement = screen.getByTestId('loader')
    expect(loaderElement).toBeInTheDocument()

    const spinnerElement = loaderElement.querySelector(`.${styles.spinner}`)
    expect(spinnerElement).toBeInTheDocument()
  })
})
