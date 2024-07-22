import { configureStore } from '@reduxjs/toolkit'
import { swApi } from './api/swApi'
import { searchSlice } from './slice/search-slice'
import { favoriteCardSlice } from './slice/favorite-slice'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = configureStore({
  reducer: {
    [swApi.reducerPath]: swApi.reducer,
    searchWord: searchSlice.reducer,
    favoriteCards: favoriteCardSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swApi.middleware),
})
