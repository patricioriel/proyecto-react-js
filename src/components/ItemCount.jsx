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
                <div className="btn-group btn-group-lg mt-1 ms-3" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-dark ms-3" onClick={restarProducto}> - </button>
                    <button type="button" className="btn btn-outline-dark">{counter}</button>
                    <button type="button" className="btn btn-outline-dark" onClick={sumarProducto}> + </button>
                    </div>
             {vendido ? <Link to={"/cart"} className="btn btn-lg btn-outline-dark ms-3 mt-1">Finalizar compra</Link>  : <button type="button" className="btn btn-lg btn-outline-dark ms-3 mt-1" onClick={()=>{agregarAlCarrito(counter)}}>Agregar al carrito</button>} 
            <Link to={"/"} className="btn btn-lg btn-outline-dark ms-3 mt-1">Seguir comprando</Link>
            </div>
        </div>
    )
}

export default ItemCount;