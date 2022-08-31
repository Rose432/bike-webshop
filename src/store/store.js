import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/profile/profileSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    cart: cartReducer,
  },
});
