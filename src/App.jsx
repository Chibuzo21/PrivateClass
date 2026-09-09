import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='products' element={<Products />} />
          <Route path='products/:productId' element={<ProductDetail />} />
          {/* This is a dynamic route */}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}
