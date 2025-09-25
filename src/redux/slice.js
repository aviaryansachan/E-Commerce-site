import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

export const addToCart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        removeItem: (state, action) => {
            const cartData = state.items.filter(item => item.id != action.payload.id)
            state.items = cartData
            localStorage.setItem("cart", JSON.stringify(cartData))

        },
        updateQuantity: (state, action) => {
            state.items = state.items.map(item =>
                item.id === action.payload.id
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            )
        },
        clearAllItems: (state) => {
            state.items = []
        }
    }
})

export const { addItem, removeItem, updateQuantity , clearAllItems } = addToCart.actions;
export default addToCart.reducer;
