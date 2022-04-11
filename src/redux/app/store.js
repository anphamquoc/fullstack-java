import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlice";
import userReducer from "../features/UserSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
  },
});
