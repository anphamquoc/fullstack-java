import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants";

const initialState = {
  products: [],
  loadingOrder: true,
  loadingReview: true,
  loadingUser: true,
  users: [],
  orders: [],
  reviews: [],
};

export const loadAllUsers = createAsyncThunk("users/loadAllUsers", async () => {
  const response = await axios.get(`${API_URL}/api/v1/khach-hang`);
  const data = response.data;
  return data;
});

export const loadAllOrders = createAsyncThunk(
  "orders/loadAllOrders",
  async () => {
    const response = await axios.get(`${API_URL}/api/v1/don-dat-hang`);
    const data = response.data;
    return data;
  }
);

export const loadAllReviews = createAsyncThunk(
  "reviews/loadAllReviews",
  async () => {
    const response = await axios.get(`${API_URL}/api/v1/danh-gia`);
    const data = response.data;
    return data;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    changeStatusOrderAdmin: (state, action) => {
      const { maDDH, trangThai } = action.payload;
      const order = state.orders.find((order) => order.maDDH === maDDH);
      order.trangThai = trangThai;
      return state;
    },
  },
  extraReducers: {
    [loadAllUsers.pending]: (state, action) => {
      state.loadingUser = true;
      return state;
    },
    [loadAllUsers.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loadingUser = false;
      return state;
    },
    [loadAllUsers.rejected]: (state, action) => {
      state.loadingUser = false;
      return state;
    },
    [loadAllOrders.pending]: (state, action) => {
      state.loadingOrder = true;
      return state;
    },
    [loadAllOrders.fulfilled]: (state, action) => {
      state.orders = action.payload;
      state.loadingOrder = false;
      return state;
    },
    [loadAllOrders.rejected]: (state, action) => {
      state.loadingOrder = false;
      return state;
    },
    [loadAllReviews.pending]: (state, action) => {
      state.loadingReview = true;
      return state;
    },
    [loadAllReviews.fulfilled]: (state, action) => {
      state.reviews = action.payload;
      state.loadingReview = false;
      return state;
    },
    [loadAllReviews.rejected]: (state, action) => {
      state.loadingReview = false;
      return state;
    },
  },
});

export const { changeStatusOrderAdmin } = adminSlice.actions;

export default adminSlice.reducer;
