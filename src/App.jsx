import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

const App = () =>{
  return(
    <div>
      <Banner/>
      <Navbar/>
      <ItemListContainer greeting={"¿Que vas a llevar?"} />
    </div>
  )
}

export default App