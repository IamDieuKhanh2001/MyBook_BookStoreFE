"use client";

import { configureStore } from '@reduxjs/toolkit'
import productListReducer from './slices/ProductSlice'
import cartReducer from './slices/cartSlice'


export const store = configureStore({
    reducer: {
        product: productListReducer,
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;