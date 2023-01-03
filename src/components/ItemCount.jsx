import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState(false);


    const restarProducto = () =>{
        if (counter > 1){
        setCounter(counter - 1);
    }}

    const sumarProducto = () =>{
        if (counter < itemStock){
        setCounter(counter + 1);
    }}

    const agregarAlCarrito = (quantity) =>{
        if (counter <= itemStock){
            setCounter(1);
            setItemStock(itemStock - quantity);
            setVendido(true);
            onAdd(quantity);
        }
    }

    useEffect (() => {
        setItemStock(stock);
    }, [stock])
    
    return (
        <div className="row">
            <div className="col-md-12 ">
                <div className="btn-group btn-group-lg" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-dark" onClick={restarProducto}> - </button>
                    <button type="button" className="btn btn-outline-dark">{counter}</button>
                    <button type="button" className="btn btn-outline-dark" onClick={sumarProducto}> + </button>
                    </div>
             {vendido ? <Link to={"/cart"} className="btn btn-lg btn-outline-dark ms-3">Finalizar compra</Link> : <button type="button" className="btn btn-lg btn-outline-dark ms-3" onClick={()=>{agregarAlCarrito(counter)}}>Agregar al carrito</button>} 
            </div>
        </div>
    )
}

export default ItemCount;