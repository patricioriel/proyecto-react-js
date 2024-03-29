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
            <div className="col-md-4 offset-md-2 text-center">
            <img src={item.image} alt={item.name} className="img-fluid w-100 rounded-4"/>
            </div>
            <div className="col-md-4">
            <h1 className="text-center mt-3 text-decoration-underline">{item.name}</h1>
            <p className="mt-3 fs-5"> {item.description} </p>
            <h5 className="fs-4">$ {item.price} </h5>
            <p className="fst-italic"> Stock: {item.stock} </p>
            <ItemCount stock={item.stock} onAdd= {onAdd} />
            </div>
        </div>
    )
}

export default Itemdetail