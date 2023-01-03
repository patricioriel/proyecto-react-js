import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";

const Itemdetail = ({item}) =>{

    const {addItem} = useContext(CartContext);

const [itemStock, setItemStock] = useState(0);  

const onAdd = (quantity) => {
    setItemStock(itemStock - quantity);
    addItem(item, quantity);
}

useEffect(() =>{
    setItemStock(item.stock);
},[item])
    
    return(
        <div className="row mt-4">
            <div className="col-md-4 offset-md-2">
            <img src={item.image} alt={item.name} className="img-fluid w-75 rounded-4"/>
            </div>
            <div className="col-md-4">
            <h1 className="text-center mt-3">{item.name}</h1>
            <p className="mt-3"> {item.description} </p>
            <h5>$ {item.price} </h5>
            <p> Stock: {item.stock} </p>
            <ItemCount stock={item.stock} onAdd= {onAdd} />
            </div>
        </div>
    )
}

export default Itemdetail