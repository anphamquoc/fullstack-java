import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants";
import { changeStatusOrderAdmin } from "./AdminSlice";

const initialState = {
  loading: true,
  order: [],
};

export const fetchOrder = createAsyncThunk("order/fetchOrder", async (id) => {
  const response = await axios.get(`${API_URL}/api/v1/don-dat-hang/${id}`);
  const data = response.data;
  return data;
});

export const changeStatusOrder = createAsyncThunk(
  "order/changeStatusOrder",
  async (request) => {
    const response = await axios.put(
      `${API_URL}/api/v1/don-dat-hang/${request.maDDH}`,
      {
        trangThai: request.trangThai,
      }
    );
    const data = response.data;
    return data;
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchOrder.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchOrder.fulfilled]: (state, action) => {
      state.order = action.payload;
      state.loading = false;
    },
    [fetchOrder.rejected]: (state, action) => {
      state.loading = false;
    },
    [changeStatusOrder.pending]: (state, action) => {
      state.loading = true;
    },
    [changeStatusOrder.fulfilled]: (state, action) => {
      //changeStatusOrder from adminSlice
      changeStatusOrderAdmin(action.payload);
      state.order = action.payload;
      state.loading = false;
      return state;
    },
    [changeStatusOrder.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default orderSlice.reducer;
