import "./font-awesome-pro-5/font-awesome-pro-5/css/all.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import "react-medium-image-zoom/dist/styles.css";
import Header from "./components/header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "tw-elements";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import Form from "./components/login/Form";
import Cart from "./components/cart/Cart";
import Favourite from "./components/Favourite/Favourite";
import ProductList from "./components/ProductList/index";
import ProductDetail from "./components/ProductDetail/index";
import Account from "./components/UserInfo/index";
import "react-loading-skeleton/dist/skeleton.css";
import { fetchProducts } from "./redux/features/ProductSlice";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { loadUser } from "./redux/features/UserSlice";
import Checkout from "./components/Checkout";
import CheckoutSuccess from "./components/Checkout/CheckoutSuccess";
import Order from "./components/Order";
import ProtectedRoute from "./utils/ProtectedRoute";
import NotFound from "./components/NotFound";
import AboutUs from "./components/AboutUs";
import Admin from "./components/Admin";
import Products from "./components/Admin/Products";
import Users from "./components/Admin/Users";
import Dashboard from "./components/Admin/Dashboard";
import Orders from "./components/Admin/Orders";
import ProductDetailAdmin from "./components/Admin/ProductDetail";
import { ToastContainer } from "react-toastify";
import HaveFooter from "./components/Footer/HaveFooter";
import ForgotPassword from "./components/login/ForgotPassword";
import SendMailSuccess from "./components/login/SendMailSuccess";
import ResetPassword from "./components/login/ResetPassword";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  //handle no access control allow origin header
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    dispatch(loadUser());
    dispatch(fetchProducts());
  });

  return (
    <Router>
      <NavBar />
      <ScrollToTop>
        <Routes>
          {/* Public Route */}
          <Route path="/login-register" element={<Form />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/send-mail" element={<SendMailSuccess />} />
          <Route path="/reset-password/:id" element={<ResetPassword />} />
          <Route path="/" element={<HaveFooter />}>
            <Route path="/" element={<Header />} />
            <Route path="/shop" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Private Route */}
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/account-info" element={<Account />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/orders" element={<Order />} />
            </Route>
            <Route path="/admin" element={<Admin />}>
              <Route path="" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
              <Route path="products/:id" element={<ProductDetailAdmin />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
      {/* <Footer /> */}
      <ToastContainer autoClose={1000} />
    </Router>
  );
}

export default App;
