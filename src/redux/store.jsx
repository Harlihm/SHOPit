import { configureStore } from '@reduxjs/toolkit'
import shopitReducer from "./shopitSlice";

export const store = configureStore (
    {
        reducer:{
            shopit : shopitReducer
        },
    }
)