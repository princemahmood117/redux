import { configureStore } from "@reduxjs/toolkit";

import countersReducer from '../Features/counters/CountersSlice'

const store = configureStore({
    reducer : {
        counters : countersReducer
    }
})

export default store