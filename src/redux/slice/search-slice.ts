import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

export const searchSlice = createSlice({
  name: 'search-word',
  initialState,
  reducers: {
    setWord(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
  },
})

export const { setWord } = searchSlice.actions
