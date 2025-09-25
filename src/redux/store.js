import {configureStore} from "@reduxjs/toolkit"
import productsReducer from "./productSlice"
import cartReducer from "./slice"



const store = configureStore({
    reducer:{
        products:productsReducer,
        cart:cartReducer
    }
})

export default store;