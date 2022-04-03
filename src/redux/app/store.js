import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
