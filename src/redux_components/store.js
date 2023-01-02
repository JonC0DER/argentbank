import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './Reducer'

export const store = configureStore({
    reducer: {
        login: loginReducer,
    }
})