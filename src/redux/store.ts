"use client";

import { configureStore } from '@reduxjs/toolkit'
import authorReducer from './slices/authorSlices';
import productListReducer from './slices/ProductSlice'

export const store = configureStore({
    reducer: {
        author: authorReducer,
        product: productListReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;