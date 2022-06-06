import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants";
import axios from "axios";
import { toast } from "react-toastify";

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

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  async (product) => {
    const response = await axios.put(
      `${API_URL}/api/v1/san-pham/${product.maSp}`,
      product
    );
    const data = response.data;
    return data;
  }
);

export const addReview = createAsyncThunk(
  "products/addReview",
  async (review) => {
    const response = await axios.post(`${API_URL}/api/v1/danh-gia`, review);
    const data = response.data;
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    const response = await axios.delete(`${API_URL}/api/v1/san-pham/${id}`);
    const data = response.data;
    return { message: data, id: id };
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const response = await axios.post(`${API_URL}/api/v1/san-pham/1`, product);
    const data = response.data;
    return { message: data, product: product };
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchProducts.rejected]: (state) => {
      state.loading = false;
    },
    [fetchOneProduct.pending]: (state) => {
      state.loadingProduct = true;
      return state;
    },
    [fetchOneProduct.fulfilled]: (state, action) => {
      state.loadingProduct = false;
      state.product = action.payload;
      return state;
    },
    [fetchOneProduct.rejected]: (state) => {
      state.loadingProduct = false;
      return state;
    },
    [updateProduct.pending]: (state) => {
      state.loadingProduct = true;
      return state;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loadingProduct = false;
      state.product = action.payload;
      state.products.map((product) => {
        if (product.maSp === action.payload.maSp) {
          product = action.payload;
        }
        return product;
      });
      toast.success("Sửa sản phẩm thành công");
      return state;
    },
    [updateProduct.rejected]: (state) => {
      state.loadingProduct = false;
      return state;
    },
    [deleteProduct.pending]: (state) => {
      state.loadingProduct = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loadingProduct = false;
      state.products = state.products.filter(
        (product) => product.maSp !== action.payload.id
      );
      toast.success("Xóa sản phẩm thành công");
      return state;
    },
    [deleteProduct.rejected]: (state) => {
      state.loadingProduct = false;
      toast.error("Xóa sản phẩm không thành công");
      return state;
    },
    [addReview.pending]: (state) => {
      state.loadingProduct = true;
      return state;
    },
    [addReview.fulfilled]: (state, action) => {
      state.loadingProduct = false;
      state.products.map((product) => {
        if (product.maSp === action.payload.maSP) {
          product.cacReview.push(action.payload);
        }
        return product;
      });
      toast.success("Đánh giá thành công");
      return state;
    },
    [addReview.rejected]: (state) => {
      state.loadingProduct = false;
      return state;
    },
    [addProduct.pending]: (state) => {
      state.loadingProduct = true;
      return state;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.loadingProduct = false;
      state.products.push(action.payload.product);
      toast.success("Thêm sản phẩm thành công");
      window.location.reload();
      return state;
    },
    [addProduct.rejected]: (state) => {
      state.loadingProduct = false;
      toast.error("Thêm sản phẩm không thành công");
      return state;
    },
  },
});

export default productSlice.reducer;
