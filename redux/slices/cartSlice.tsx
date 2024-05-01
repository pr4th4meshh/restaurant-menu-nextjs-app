// 1. Define the cart slice in your Redux store
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ ...item, quantity });
      }
    },
    removeItemFromCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity -= quantity;
      } else {
        state.items.push({ ...item, quantity });
      }
    },

    deleteItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
  },
});

export const { addItemToCart, removeItemFromCart, deleteItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
