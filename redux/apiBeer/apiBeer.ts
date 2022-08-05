import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBeer } from 'types/apiBeerTypes'

export const beerItem = createApi({
    reducerPath: 'beerItems',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.punkapi.com/v2/',
    }),
    endpoints: (builder) => ({
        getBeerItems: builder.query<IBeer[], number>({
            query: (numberPage) => ({
                url: `beers`,
                params: {
                    page: numberPage,
                    per_page: 20,
                },
            }),
        }),
        getSelectedBeer: builder.query<IBeer[], number>({
            query: (idBeer) => ({
                url: `beers/${idBeer}`,
            }),
        }),
        getBeerName: builder.query<IBeer[], string>({
            query: (beerName) => ({
                url: `beers`,
                params: {
                    beer_name: beerName,
                },
            }),
        }),
    }),
})

export const {
    useGetBeerItemsQuery,
    useGetSelectedBeerQuery,
    useLazyGetBeerNameQuery,
} = beerItem
