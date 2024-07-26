import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CardData from '@models/CardData'

const initialState: Record<string, CardData> = {}

export const favoriteCardSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    handleFavorites(state, { payload }: PayloadAction<CardData>) {
      if (payload.name in state) {
        delete state[payload.name]
      } else {
        state[payload.name] = payload
      }
    },
    clearFavorites() {
      return initialState
    },
  },
})

export const { handleFavorites, clearFavorites } = favoriteCardSlice.actions
