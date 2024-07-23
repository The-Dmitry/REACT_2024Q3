import { configureStore } from '@reduxjs/toolkit'
import { swApi } from './api/swApi'
import { searchSlice } from './slice/search-slice'
import { favoriteCardSlice } from './slice/favorite-slice'

const LS_KEY = 'MY_COOL_UNIQ_KEY'

const valueFromLs = localStorage.getItem(LS_KEY) || ''

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    [swApi.reducerPath]: swApi.reducer,
    searchWord: searchSlice.reducer,
    favoriteCards: favoriteCardSlice.reducer,
  },
  preloadedState: {
    searchWord: { search: valueFromLs },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swApi.middleware),
})

store.subscribe(() => {
  const { search } = store.getState().searchWord
  localStorage[LS_KEY] = search
})
