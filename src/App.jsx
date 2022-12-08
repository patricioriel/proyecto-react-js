import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Itemlist from "./components/Itemlist";
import ItemdetailContainer from "./components/ItemdetailContainer";
import Error404 from "./components/Error404";
import ItemCount from "./components/ItemCount";

const App = () =>{
  return(
    
    <BrowserRouter>
      <Banner/>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemdetailContainer/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
      
      


    </BrowserRouter>
  )
}

export default App