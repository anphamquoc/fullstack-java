import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../constants";

const initialState = {
  user: null,
  loading: false,
  error: true,
};

export const getUserByUsername = createAsyncThunk(
  "user/getUserByUsername",
  async (username) => {
    const response = await axios.get(
      `${API_URL}/api/v1/khach-hang/forgot-password/${username}`
    );
    const data = response.data;
    return data;
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (request) => {
    const response = await axios.put(
      `${API_URL}/api/v1/khach-hang/${request.id}/reset-password`,
      request.passwordState
    );
    const data = response.data;
    return data;
  }
);

const PasswordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserByUsername.pending]: (state, action) => {
      state.loading = true;
      state.error = true;
    },
    [getUserByUsername.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    },
    [getUserByUsername.rejected]: (state, action) => {
      toast.error("Không có user này");
      state.loading = false;
      state.error = true;
      state.user = null;
    },
    [resetPassword.pending]: (state, action) => {
      state.loading = true;
      state.error = true;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      toast.success("Đổi mật khẩu thành công, vui lòng đăng nhập lại");
    },
    [resetPassword.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      toast.error("Đổi mật khẩu thất bại");
    },
  },
});

export default PasswordSlice.reducer;
