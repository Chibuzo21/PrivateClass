import React from "react";
import Products from "./components/products";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductForm from "./components/productForm";
import EditProduct from "./components/EditProduct";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/new' element={<ProductForm />} />
        <Route path='/:id' element={<EditProduct />} />
      </Routes>
    </div>
  );
}
