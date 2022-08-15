/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  all: true,
  transfers: {
    0: true,
    1: true,
    2: true,
    3: true,
  },
  countsOfTransfer: [0, 1, 2, 3],
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

const setCountsOfTransfers = (obj) => {
  const keys = Object.keys(obj)
  return keys.reduce((arr, value) => {
    if (obj[value]) arr.push(Number(value))
    return arr
  }, [])
}

export const transferFormSlice = createSlice({
  name: 'transfersFilter',
  initialState,
  reducers: {
    setTransfersFilters: (state, action) => {
      state.transfers = { ...state.transfers, ...action.payload }
      state.all = isAllTrue(state.transfers)
      state.countsOfTransfer = setCountsOfTransfers(state.transfers)
      return state
    },
    setAllTransfers: (state, action) => {
      state = { ...action.payload, transfers: { ...setAlltoValue(state.transfers, action.payload.all) } }
      state.countsOfTransfer = setCountsOfTransfers(state.transfers)
      return state
    },
  },
})

export const { setTransfersFilters, setAllTransfers } = transferFormSlice.actions

export default transferFormSlice.reducer
