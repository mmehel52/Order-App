import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).cartItems
      : [],
    total: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart")).total
      : 0,
    tax: 8,
  },
  reducers: {
    addProduct: (state, action) => {
      const findCardItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (findCardItem) {
        findCardItem.quantity = findCardItem.quantity + 1;
      } else {
        state.cartItems.push(action.payload);
      }
      state.total += action.payload.price;
    },
    deleteCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      cartItem.quantity++;
      state.total += action.payload.price;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    reset: (state, action) => {
      state.cartItems = [];
      state.total = 0;
    },
  },
});

export const { addProduct, deleteCart, increase, decrease, reset } =
  cartSlice.actions;

export default cartSlice.reducer;
