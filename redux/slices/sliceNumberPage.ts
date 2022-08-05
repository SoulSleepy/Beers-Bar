import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IState {
  currentPage: number
}

const initialState: IState = {
  currentPage: 1,
}

export const pageNumberSlice = createSlice({
  name: 'pageNumber',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.currentPage += 1
    },
    prevPage: (state) => {
      state.currentPage -= 1
    },
    selectedPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
})

export const { nextPage, prevPage, selectedPage } = pageNumberSlice.actions

export default pageNumberSlice.reducer