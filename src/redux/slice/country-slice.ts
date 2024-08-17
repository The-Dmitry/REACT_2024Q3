import countries from '@data/country-list'
import { createSlice } from '@reduxjs/toolkit'

const initialState = countries

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
})

export default countrySlice
