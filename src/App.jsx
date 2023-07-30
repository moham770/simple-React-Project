// import React from "react";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductsList } from "./components/ProductsList";
import { Slider } from "./components/Slider";
import { About } from "./components/About";
import { ProductDetails } from "./components/ProductDetails";


function App() {
  return (
    <>
      <div >
      <Navbar/>
      <Routes>
        <Route path="/" element={<>
         <Slider/>
      <ProductsList/>
        </>}/>
          <Route path="/about" element={<About/>} />
          <Route path="product/:productId" element={<ProductDetails/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
