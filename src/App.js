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
import { useEffect, useLayoutEffect } from "react";
import { loadUser } from "./redux/features/UserSlice";
import Checkout from "./components/Checkout";
import CheckoutSuccess from "./components/Checkout/CheckoutSuccess";
import Order from "./components/Order";

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
        <Route path="/" element={<Header />}></Route>
        <Route path="/account-info" element={<Account />}></Route>
        <Route path="/login-register" element={<Form />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/favourite" element={<Favourite />}></Route>
        <Route path="/shop" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/checkout/success" element={<CheckoutSuccess />}></Route>
        <Route path="/orders" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
