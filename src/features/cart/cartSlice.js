import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addItemToCart: (state, action) => {
      const itemData = {
        bicycleId: action.payload.bicycleId,
        quantity: action.payload.quantity,
        imgSrc: action.payload.imgSrc,
        bikeTitle: action.payload.bikeTitle,
        bikePrice: action.payload.bikePrice,
      };

      if (state.cart.length === 0) {
        state.cart = [...state.cart, itemData];
      } else if (
        state.cart.length > 0 &&
        state.cart.every((cur) => cur.bicycleId !== itemData.bicycleId)
      ) {
        state.cart = [...state.cart, itemData];
      } else if (
        state.cart.some((cur) => cur.bicycleId === itemData.bicycleId)
      ) {
        state.cart.find(
          (cur) => cur.bicycleId === itemData.bicycleId && cur.quantity++
        );
        state.cart = state.cart.slice(0);
      }
    },
    incrementCartQuantity: (state, action) => {
      if (
        state.cart.some((cur) => cur.bicycleId === action.payload.bicycleId)
      ) {
        state.cart.find(
          (cur) => cur.bicycleId === action.payload.bicycleId && cur.quantity++
        );
        state.cart = state.cart.slice(0);
      }
    },
    decrementCartQuantity: (state, action) => {
      if (
        state.cart.some(
          (cur) =>
            cur.bicycleId === action.payload.bicycleId && cur.quantity > 1
        )
      ) {
        state.cart.find(
          (cur) => cur.bicycleId === action.payload.bicycleId && cur.quantity--
        );
        state.cart = state.cart.slice(0);
      } else if (
        state.cart.some(
          (cur) =>
            cur.bicycleId === action.payload.bicycleId && cur.quantity === 1
        )
      ) {
        state.cart = state.cart
          .filter((cur) => cur.bicycleId !== action.payload.bicycleId)
          .slice(0);
      }
    },
    removeCartItem: (state, action) => {
      if (
        state.cart.find((cur) => cur.bicycleId === action.payload.bicycleId)
      ) {
        state.cart = state.cart
          .filter((cur) => cur.bicycleId !== action.payload.bicycleId)
          .slice(0);
      }
    },
    emptyCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItemToCart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeCartItem,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
