import React from "react";
import "./App.css";
import Footer from "./components/footer";
import { Footer as LibFooter } from "./lib/footer";
import { SubFooter } from "./components/footer";

export default function App() {
  return (
    <>
      <div className='bg-red-500 head'>Hello World</div>
      <Footer />
      <LibFooter />
    </>
  );
}
