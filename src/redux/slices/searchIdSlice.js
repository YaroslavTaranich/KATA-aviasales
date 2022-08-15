/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchSearchID = createAsyncThunk('search/fetchSearchIDStatus', async (_, { extra }) => {
  const service = extra
  const id = await service.getSearchID()
  return id
})

const initialState = {
  id: null,
  status: null,
}

export const searchIDSlice = createSlice({
  name: 'searchID',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchID.pending]: (state) => {
      state.status = 'loading'
      return state
    },
    [fetchSearchID.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.id = action.payload
      return state
    },
    [fetchSearchID.rejected]: (state) => {
      state.status = 'error'
      return state
    },
  },
})

export default searchIDSlice.reducer
