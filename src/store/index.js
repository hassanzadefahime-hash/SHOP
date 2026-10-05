import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "../slices/cartSlice";
import productsReducer, { fetchProducts } from "../slices/productSlice";
import { productApi } from "../slices/productApi";

export const store = configureStore({
    reducer :{
        cart : cartReducer,
    products: productsReducer,
    [productApi.reducerPath] : productApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

store.dispatch(fetchProducts())
store.dispatch(getTotals())