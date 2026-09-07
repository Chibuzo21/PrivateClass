import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Header from "./components/header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        {/* path is the url while element is the component that will be rendered when that particular url is accessed */}
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}
