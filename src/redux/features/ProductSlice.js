import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants";

const initialState = {
  products: [],
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch(`${API_URL}/api/v1/san-pham`);
    console.log(response);
    const products = await response.json();
    return products;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
