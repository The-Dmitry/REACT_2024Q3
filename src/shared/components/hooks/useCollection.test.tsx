import { renderHook } from '@testing-library/react'
import { act } from 'react'
import { describe, it, expect } from 'vitest'
import { useCollection } from './useCollection'
import { cards } from '@mocks/mockedData/cards'

describe('useCollection hook', () => {
  it('should add a card to the collection', () => {
    const { result } = renderHook(() => useCollection())

    act(() => {
      result.current.handleCard(cards.results[0])
    })

    expect(result.current.collection).toEqual({
      [cards.results[0].name]: cards.results[0],
    })
  })

  it('should remove a card from the collection', () => {
    const { result } = renderHook(() => useCollection())

    act(() => {
      result.current.handleCard(cards.results[0])
    })
    act(() => {
      result.current.handleCard(cards.results[0])
    })
    expect(result.current.collection).toEqual({})
  })

  it('should clear the collection', () => {
    const { result } = renderHook(() => useCollection())

    act(() => {
      result.current.handleCard(cards.results[0])
      result.current.clearCollection()
    })

    expect(result.current.collection).toEqual({})
  })
})
