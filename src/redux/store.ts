"use client";

import { configureStore } from '@reduxjs/toolkit'
import authorReducer from './slices/authorSlices';

export const store = configureStore({
    reducer: {
        author: authorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;