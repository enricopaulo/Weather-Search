import { configureStore } from '@reduxjs/toolkit'
import reducers from '../reducers/index'

export default store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {}
    })
})
