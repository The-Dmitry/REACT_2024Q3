import { describe, it, expect, vi } from 'vitest'
import { DownloadLink } from './DownloadLink'
import { render } from '@testing-library/react'
import { cards } from '../../../mocks/mockedData/cards'
import styles from './DownloadLink.module.css'

describe('DownloadLink component', () => {
  const mockData = {
    card1: { ...cards.results[0] },
    card2: { ...cards.results[1] },
  }

  it('renders the download link with correct text', () => {
    URL.createObjectURL = vi.fn()
    const { getByText } = render(<DownloadLink data={mockData} />)
    const link = getByText('Download')
    expect(link).toBeInTheDocument()
    expect(link).toHaveClass(styles.link)
  })

  it('creates a download link with the correct filename', () => {
    const { getByText } = render(<DownloadLink data={mockData} />)
    const link = getByText('Download')
    expect(link).toHaveAttribute('download', '2_star-wars')
  })
})
