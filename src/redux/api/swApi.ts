import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ApiResponse } from '@models/ApiResponse'
import CardData from '@models/CardData'

export const swApi = createApi({
  reducerPath: 'sw-api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),

  endpoints: (builder) => ({
    getList: builder.query<ApiResponse, { search: string; page: string }>({
      query: ({ search = '', page = '1' }) => {
        return {
          url: '',
          params: { search, page },
        }
      },
    }),
    getDetails: builder.query<CardData, string>({
      query: (id) => `${id}`,
    }),
  }),
})

export const { useGetListQuery, useGetDetailsQuery } = swApi
