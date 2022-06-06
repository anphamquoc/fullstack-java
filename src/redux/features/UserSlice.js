import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../../constants";
const initialState = {
  sanPhamYeuThich: [],
  loading: true,
  loadingOrder: true,
  gioHang: [],
  cacDonDatHang: [],
  user: null,
  isAuthenticated: false,
  errorCart: null,
  orderId: null,
};

export const loadUser = createAsyncThunk("user/loadUser", async () => {
  const response = await axios.get(
    `${API_URL}/api/v1/khach-hang/${localStorage.getItem("userId")}`
  );
  const data = response.data;
  return data;
});

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  const response = await axios.post(`${API_URL}/api/v1/khach-hang/login`, user);
  const data = response.data;
  return data;
});

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user) => {
    const response = await axios.post(
      `${API_URL}/api/v1/khach-hang/register`,
      user
    );
    const data = response.data;
    return data;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userUpdate) => {
    const response = await axios.put(
      `${API_URL}/api/v1/khach-hang/${localStorage.getItem("userId")}`,
      userUpdate
    );
    const data = response.data;
    return data;
  }
);

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (passwordState) => {
    const response = await axios.put(
      `${API_URL}/api/v1/khach-hang/${localStorage.getItem(
        "userId"
      )}/change-password`,
      passwordState
    );
    const data = response.data;
    return data;
  }
);

export const removeFromFavourite = createAsyncThunk(
  "user/removeFromFavourite",
  async (request) => {
    const response = await axios.delete(
      `${API_URL}/api/v1/khach-hang/${request.userId}/yeu-thich/${request.pid}`
    );
    const data = response.data;
    return { data, pid: request.pid };
  }
);

export const removeFromCart = createAsyncThunk(
  "user/removeFromCart",
  async (request) => {
    await axios.delete(
      `${API_URL}/api/v1/khach-hang/${request.userId}/gio-hang/${request.pid}`
    );
    return { pid: request.pid };
  }
);

export const addToFavourite = createAsyncThunk(
  "user/addToFavourite",
  async (request) => {
    const response = await axios.put(
      `${API_URL}/api/v1/khach-hang/${request.userId}/yeu-thich/${request.product.maSp}`
    );
    const data = response.data;
    return { data, product: request.product };
  }
);

export const addToCart = createAsyncThunk("user/addToCart", async (request) => {
  const response = await axios.post(
    `${API_URL}/api/v1/khach-hang/${request.userId}/gio-hang/${request.product.maSp}`,
    {
      soLuong: request.soLuong ? request.soLuong : 1,
    }
  );
  const data = response.data;
  return { data, product: request.product, soLuong: request.soLuong };
});

//ma gh, ma sp, so luong
export const updateQuantityInCart = createAsyncThunk(
  "user/updateQuantityInCart",
  async (request) => {
    const response = await axios.put(
      `${API_URL}/api/v1/khach-hang/${request.cartId}/gio-hang/${request.product.maSp}`,
      {
        soLuong: request.soLuong,
      }
    );
    const data = response.data;
    return {
      data,
      product: request.product,
      soLuong: request.soLuong,
      cartId: request.cartId,
    };
  }
);

export const createOrder = createAsyncThunk(
  "user/createOrder",
  async (request) => {
    const response = await axios.post(`${API_URL}/api/v1/don-dat-hang`, {
      maKH: request.maKH,
      hoTen: request.hoTen,
      noiNhan: request.noiNhan,
      soDt: request.soDt,
      tongTien: request.tongTien,
      email: request.email,
      phuongThucThanhToan: request.phuongThucThanhToan,
      trangThai: "Chưa xử lý",
    });
    const data = response.data;
    return data;
  }
);

export const addProductToOrder = createAsyncThunk(
  "user/addProductToOrder",
  async (request) => {
    const response = await axios.post(
      `${API_URL}/api/v1/chi-tiet-don-hang/${request.maSp}`,
      {
        maDDH: request.maDDH,
        soLuong: request.soLuong,
      }
    );
    const data = response.data;
    return { data, product: request.product, soLuong: request.soLuong };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    addCart: (state, action) => {
      state.carts.push(action.payload);
    },
    logOut: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("userId");
    },
  },
  extraReducers: {
    [loadUser.pending]: (state, action) => {
      state.loading = true;
      return state;
    },
    [loadUser.fulfilled]: (state, action) => {
      const { payload } = action;
      state = {
        ...state,
        user: {
          diaChi: payload.diaChi,
          email: payload.email,
          username: payload.username,
          soDt: payload.soDt,
          hoTen: payload.hoTen,
          maKh: payload.maKh,
          vaiTro: payload.vaiTro,
        },
        isAuthenticated: payload ? true : false,
        cacDonDatHang: payload.cacDonDatHang,
        sanPhamYeuThich: payload.sanPhamYeuThich,
        gioHang: payload.gioHang,
        loading: false,
      };
      return { ...state };
    },
    [loadUser.rejected]: (state, action) => {
      state.loading = false;
      return state;
    },
    [loginUser.pending]: (state, action) => {
      state.loading = true;
      return state;
    },
    [loginUser.fulfilled]: (state, action) => {
      const { payload } = action;
      state = {
        ...state,
        user: {
          diaChi: payload.diaChi,
          email: payload.email,
          username: payload.username,
          soDt: payload.soDt,
          hoTen: payload.hoTen,
          maKh: payload.maKh,
          ngayTao: payload.ngayTao,
          vaiTro: payload.vaiTro,
        },
        isAuthenticated: true,
        cacDonDatHang: payload.cacDonDatHang,
        sanPhamYeuThich: payload.sanPhamYeuThich,
        gioHang: payload.gioHang,
      };
      localStorage.setItem("userId", payload.maKh);
      state.loading = false;
      return state;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
      toast.error("Sai tên đăng nhập hoặc mật khẩu");
      // alert("Thông tin khách hàng sai");
      return state;
    },

    [registerUser.pending]: (state, action) => {
      state.loading = true;
      return state;
    },
    [registerUser.fulfilled]: (state, action) => {
      const { payload } = action;
      state = {
        ...state,
        user: {
          diaChi: payload.diaChi,
          email: payload.email,
          username: payload.username,
          soDt: payload.soDt,
          hoTen: payload.hoTen,
          maKh: payload.maKh,
          ngayTao: payload.ngayTao,
          vaiTro: payload.vaiTro,
        },
        isAuthenticated: true,
        cacDonDatHang: payload.cacDonDatHang,
        sanPhamYeuThich: payload.sanPhamYeuThich,
        gioHang: payload.gioHang,
      };
      localStorage.setItem("userId", payload.maKh);
      state.loading = false;
      return state;
    },
    [registerUser.rejected]: (state, action) => {
      state.loading = false;
      toast.error("Tên đăng nhập đã tồn tại");
      return state;
    },
    [changePassword.pending]: (state, action) => {
      state.loading = true;
      return state;
    },
    [changePassword.fulfilled]: (state, action) => {
      state.loading = false;
      toast.success("Đổi password thành công, mời đăng nhập lại");
      //logout
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("userId");
      return state;
    },
    [changePassword.rejected]: (state, action) => {
      state.loading = false;
      toast.error("Thông tin mật khẩu sai");
      return state;
    },
    [updateUser.pending]: (state, action) => {
      state.loading = true;
      return state;
    },
    [updateUser.fulfilled]: (state, action) => {
      const { payload } = action;
      state = {
        ...state,
        loading: false,
        user: {
          diaChi: payload.diaChi,
          email: payload.email,
          soDt: payload.soDt,
          hoTen: payload.hoTen,
          maKh: payload.maKh,
          username: payload.username,
          password: payload.password,
          vaiTro: payload.vaiTro,
        },
      };
      toast.success("Cập nhật thông tin thành công");
      return state;
    },

    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      return state;
    },
    [removeFromFavourite.pending]: (state, action) => {
      state.loading = true;
      return state;
    },
    [removeFromFavourite.fulfilled]: (state, action) => {
      const { pid } = action.payload;
      state.loading = false;
      state.sanPhamYeuThich = state.sanPhamYeuThich.filter(
        (item) => item.maSp !== pid
      );
      toast.success("Xóa sản phẩm yêu thích thành công");
      return state;
    },
    [removeFromFavourite.rejected]: (state, action) => {
      state.loading = false;
      return state;
    },
    [addToFavourite.pending]: (state, action) => {
      state.loading = true;
      return state;
    },
    [addToFavourite.fulfilled]: (state, action) => {
      const { product } = action.payload;
      state.loading = false;
      state.sanPhamYeuThich.push(product);
      toast.success("Thêm vào mục yêu thích thành công");
      return state;
    },
    [addToFavourite.rejected]: (state, action) => {
      state.loading = false;
      toast.warning("Sản phẩm đã có trong mục yêu thích");

      return state;
    },
    [addToCart.pending]: (state, action) => {
      state.loading = false;
      return state;
    },
    [addToCart.fulfilled]: (state, action) => {
      const { product, soLuong } = action.payload;
      state.loading = false;
      state.gioHang.chiTietGioHang.push({
        sanPham: product,
        soLuong: soLuong ? soLuong : 1,
      });
      toast.success("Thêm vào giỏ hàng thành công");
      return state;
    },
    [addToCart.rejected]: (state, action) => {
      state.loading = false;
      toast.warning("Sản phẩm đã có trong giỏ hàng");
      return state;
    },
    [removeFromCart.pending]: (state, action) => {
      state.loading = true;
      return state;
    },
    [removeFromCart.fulfilled]: (state, action) => {
      const { pid } = action.payload;
      state.loading = false;
      state.gioHang.chiTietGioHang = state.gioHang.chiTietGioHang.filter(
        (item) => item.sanPham.maSp !== pid
      );
      // toast.success("Xóa sản phẩm khỏi giỏ hàng thành công");
      // alert("Xóa sản phẩm khỏi giỏ hàng thành công");
      return state;
    },
    [removeFromCart.rejected]: (state, action) => {
      state.loading = false;
      toast.error("Sản phẩm không có trong giỏ hàng");
      return state;
    },
    [updateQuantityInCart.pending]: (state, action) => {
      state.loading = false;
      return state;
    },
    [updateQuantityInCart.fulfilled]: (state, action) => {
      const { product, soLuong } = action.payload;
      state.loading = false;
      state.gioHang.chiTietGioHang = state.gioHang.chiTietGioHang.map(
        (item) => {
          if (item.sanPham.maSp === product.maSp) {
            item.soLuong = soLuong;
          }
          return item;
        }
      );
      return state;
    },
    [updateQuantityInCart.rejected]: (state, action) => {
      state.loading = false;
      return state;
    },
    [createOrder.pending]: (state, action) => {
      state.loadingOrder = true;
      return state;
    },
    [createOrder.fulfilled]: (state, action) => {
      state.loadingOrder = false;
      state.cacDonDatHang.push(action.payload);
      state.orderId = action.payload.maDDH;
      return state;
    },
    [createOrder.rejected]: (state, action) => {
      state.loadingOrder = false;
      toast.error("Đặt hàng thất bại");
      return state;
    },
    [addProductToOrder.pending]: (state, action) => {
      state.loadingOrder = true;
      return state;
    },
    [addProductToOrder.fulfilled]: (state, action) => {
      const { data, product, soLuong } = action.payload;
      state.loadingOrder = false;
      state.cacDonDatHang = state.cacDonDatHang.map((item) => {
        if (item.maDonHang === data.maDonHang) {
          item.chiTietDonHang.push({
            sanPham: product,
            soLuong: soLuong,
          });
        }
        return item;
      });
      return state;
    },
    [addProductToOrder.rejected]: (state, action) => {
      state.loadingOrder = false;
      return state;
    },
  },
});

export const { addFavourite, addCart, logOut } = userSlice.actions;
export default userSlice.reducer;
