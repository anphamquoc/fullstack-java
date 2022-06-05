import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/ProductSlice";
import userReducer from "../features/UserSlice";
import adminReducer from "../features/AdminSlice";
import orderReducer from "../features/OrderSlice";
import passwordReducer from "../features/PasswordSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    user: userReducer,
    admin: adminReducer,
    order: orderReducer,
    password: passwordReducer,
  },
});
