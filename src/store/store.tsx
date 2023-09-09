import {configureStore} from '@reduxjs/toolkit'
import customersSlice from './customersSlice'

const store = configureStore({
    reducer: {
        customers: customersSlice
    }
})

export default store;