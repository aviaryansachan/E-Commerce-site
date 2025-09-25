import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const url = "https://dummyjson.com/products"

export const fetchProducts = createAsyncThunk(
    "products", async (search) => {
        const response = await fetch(search ? `${url}/search?q=${search}`:`${url}`)
        const data = await response.json();
        return data.products
    }
)

const initialState = {
    items: [],
    status: undefined,
    error: null

}

const products = createSlice({
    name: "productsSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            state.status = "succeeded",
            state.items=action.payload
        })
    }
})

export default products.reducer;