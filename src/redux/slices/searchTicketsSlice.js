/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTickets = createAsyncThunk('search/fetchTickets', async (searchID, { extra }) => {
  const service = extra
  const data = await service.getTickets(searchID)
  return data
})

const initialState = {
  tickets: [],
  stop: null,
  status: null,
  errorsCounter: 0,
}

export const ticktsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTickets.pending]: (state) => {
      state.status = 'loading'
      return state
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.tickets = [...state.tickets, ...action.payload.tickets]
      state.stop = action.payload.stop
      state.errorsCounter = 0
      return state
    },
    [fetchTickets.rejected]: (state) => {
      state.status = state.errorsCounter > 5 ? 'failed' : 'error'
      state.errorsCounter += 1
      return state
    },
  },
})

export default ticktsSlice.reducer
