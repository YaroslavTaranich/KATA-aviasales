import { configureStore } from '@reduxjs/toolkit'

import priceFilterReducer from './components/priceFilter/priceFilterSlice'
import transfersFilterReducer from './components/transfersForm/transfersFormSlice'

const store = configureStore({
  reducer: {
    priceFilter: priceFilterReducer,
    transfersFilter: transfersFilterReducer,
  },
})

export default store
