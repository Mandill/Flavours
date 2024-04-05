import { configureStore } from '@reduxjs/toolkit'
import cartSlice from "./CartSlice"
import categorySlice from "./CategorySlices"
import SearchSlice from './SearchSlice'

export const Store = configureStore({
    reducer:
    {
        cart: cartSlice,
        category : categorySlice,
        search : SearchSlice
    }
})