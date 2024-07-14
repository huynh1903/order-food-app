import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
  },
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          imgUrl: action.payload.imgUrl,
          quantity: 1,
        });
        state.totalPrice += action.payload.price;
      } else {
        existingItem.quantity++;
        state.totalPrice += existingItem.price;
      }
      state.totalQuantity++;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      const existingItemIndex = state.items.indexOf(existingItem);
      if (existingItem.quantity === 1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        existingItem.quantity--;
      }
      state.totalPrice -= existingItem.price;
      state.totalQuantity--;
    },
    deleteItem(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      const existingItemIndex = state.items.indexOf(existingItem);
      state.items.splice(existingItemIndex, 1);
      state.totalPrice -= existingItem.quantity * existingItem.price;
      state.totalQuantity -= existingItem.quantity;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
