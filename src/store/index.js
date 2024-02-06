import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice'


const STORE = configureStore({
    reducer: {
        productsReducer
    }
})

export default STORE