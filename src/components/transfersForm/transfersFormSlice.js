/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: false,
  transfers: {
    noTransfers: true,
    transfer_1: false,
    transfer_2: true,
    transfer_3: false,
  },
}

const isAllTrue = (obj) => {
  const values = Object.values(obj)
  const filtredValues = values.filter((v) => v === true)
  return values.length === filtredValues.length
}

const setAlltoValue = (obj, value) => {
  const keys = Object.keys(obj)
  return keys.reduce((res, key) => {
    res[key] = value
    return res
  }, {})
}

export const transferFormSlice = createSlice({
  name: 'transfersFilter',
  initialState,
  reducers: {
    setTransfersFilters: (state, action) => {
      state = { ...state, transfers: { ...state.transfers, ...action.payload } }
      state.all = isAllTrue(state.transfers)
      return state
    },
    setAllTransfers: (state, action) => {
      state = { ...action.payload, transfers: { ...setAlltoValue(state.transfers, action.payload.all) } }
      return state
    },
  },
})

export const { setTransfersFilters, setAllTransfers } = transferFormSlice.actions

export default transferFormSlice.reducer
