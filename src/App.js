import React, { useContext, useEffect } from "react";
import axios from "./lib/axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Home from "./comp/Home";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import Cart from "./comp/Cart";
import Orders from "./comp/Orders";
import Profile from "./comp/Profile";
import Checkout from "./comp/Checkout";
import ErrorPage from "./comp/ErrorPage";
import { AppContext } from "./index";
export default function App() {
  const { state, setState } = useContext(AppContext);
  const boot = async () => {
    setState({ ...state, loading: true });
    let products = await axios
      .get("http://localhost:5000/products")
      .then((res) => res.data.data)
      .catch((e) => []);
    let tags = await axios
      .get("http://localhost:5000/tags")
      .then((res) => res.data.data)
      .catch((e) => []);
    let cart = await axios
      .get("http://localhost:5000/cart")
      .then((res) => res.data.data)
      .catch((e) => []);
    let orders = await axios
      .get("http://localhost:5000/orders")
      .then((res) => res.data.data)
      .catch((e) => []);

    setState({
      ...state,
      loading: false,
      products,
      tags,
      cart,
      orders,
    });
  };

  useEffect(() => {
    return () => boot();
  }, []);
  if (state?.loading) return <h1>loading...</h1>;
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
