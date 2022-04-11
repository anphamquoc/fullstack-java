import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants";
import axios from "axios";

const initialState = {
  products: [],
  loading: true,
  product: null,
  loadingProduct: true,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`${API_URL}/api/v1/san-pham`);
    const data = response.data;
    return data;
  }
);

export const fetchOneProduct = createAsyncThunk(
  "products/fetchOneProduct",
  async (id) => {
    const response = await axios.get(`${API_URL}/api/v1/san-pham/${id}`);
    const data = response.data;
    return data;
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
    [fetchOneProduct.pending]: (state, action) => {
      state.loadingProduct = true;
      return state;
    },
    [fetchOneProduct.fulfilled]: (state, action) => {
      state.loadingProduct = false;
      state.product = action.payload;
      return state;
    },
    [fetchOneProduct.rejected]: (state, action) => {
      state.loadingProduct = false;
      return state;
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
