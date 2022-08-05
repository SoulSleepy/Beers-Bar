import { configureStore } from '@reduxjs/toolkit'
import { beerItem } from './apiBeer/apiBeer'
import { pageNumberSlice } from './slices/sliceNumberPage'

const store = configureStore({
    reducer: {
        [beerItem.reducerPath]: beerItem.reducer,
        pageNumber: pageNumberSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(beerItem.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store