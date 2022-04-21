import "./font-awesome-pro-5/font-awesome-pro-5/css/all.css";
import "./App.css";
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
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import Products from "./components/Admin/Products";
import Users from "./components/Admin/Users";
import Dashboard from "./components/Admin/Dashboard";
import Orders from "./components/Admin/Orders";
import ProductDetailAdmin from "./components/Admin/ProductDetail";

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
      <Routes>
        {/* Public Route */}
        <Route path="/login-register" element={<Form />}></Route>
        <Route path="/" element={<Header />}></Route>
        <Route path="/shop" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        {/* Private Route */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/account-info" element={<Account />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/favourite" element={<Favourite />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/checkout/success" element={<CheckoutSuccess />}></Route>
          <Route path="/orders" element={<Order />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products/:id" element={<ProductDetailAdmin />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
