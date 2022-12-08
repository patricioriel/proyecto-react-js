import React from "react";
import { useState } from "react";

const ItemCount = ({stock}) => {
    
    const [counter, setCounter] = useState(1);

    const restarProducto = () =>{
        if (counter > 1){
        setCounter(counter - 1);
    }}

    const sumarProducto = () =>{
        if (counter < stock){
        setCounter(counter + 1);
    }}
    
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={restarProducto}> - </button>
                    <button type="button" className="btn btn-outline-primary">{counter}</button>
                    <button type="button" className="btn btn-outline-primary" onClick={sumarProducto}> + </button>
                    </div>
                <button type="button" className="btn btn-outline-primary ms-3">Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;