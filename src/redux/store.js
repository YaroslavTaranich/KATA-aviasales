import { configureStore } from '@reduxjs/toolkit'

import AviasalesServise from '../service/aviasalesServise'

import priceFilterReducer from './slices/priceFilterSlice'
import transfersFilterReducer from './slices/transfersFormSlice'
import searchIDSliceReducer from './slices/searchIdSlice'
import ticktsSliceReducer from './slices/searchTicketsSlice'
import filtredTicketsSliceReducer from './slices/filtredTicketsSlice'

const store = configureStore({
  reducer: {
    priceFilter: priceFilterReducer,
    transfersFilter: transfersFilterReducer,
    searchID: searchIDSliceReducer,
    tickets: ticktsSliceReducer,
    filtredTickets: filtredTicketsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: new AviasalesServise(),
      },
      immutableCheck: { warnAfter: 512 },
      serializableCheck: { warnAfter: 512 },
    }),
})

export default store
