import UserCardData from '@models/UserCardData'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserCardData[] = []

const usersSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<Omit<UserCardData, 'time'>>) {
      state.push({ ...action.payload, time: Date.now() })
    },
  },
})

export const { addUser } = usersSlice.actions
export default usersSlice
