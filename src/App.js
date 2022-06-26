import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './comp/Header'
import Footer from './comp/Footer'
import Home from './comp/Home'
import Login from './comp/Login'
import Signup from './comp/Signup'
import Cart from './comp/Cart'
import Orders from './comp/Orders'
import Profile from './comp/Profile'
import Checkout from './comp/Checkout'
import ErrorPage from './comp/ErrorPage'
export default function App() {
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
