import UserCardData from '@models/UserCardData'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: UserCardData[] = []

const usersSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserCardData>) {
      state.push(action.payload)
    },
  },
})

export const { addUser } = usersSlice.actions
export default usersSlice
