import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemdetailContainer from "./components/ItemdetailContainer";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

const App = () => {
  return (

    <CartContextProvider>
      <BrowserRouter>
        <Banner />
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemdetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"*"} element={<Error404 />} />
          <Route path={"/checkout"} element={<Checkout />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App