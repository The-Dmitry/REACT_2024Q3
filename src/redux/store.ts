import { configureStore } from '@reduxjs/toolkit'
import countrySlice from './slice/country-slice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import usersSlice from './slice/users-slice'

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

const store = configureStore({
  reducer: {
    countries: countrySlice.reducer,
    users: usersSlice.reducer,
  },
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store
