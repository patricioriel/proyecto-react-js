import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {

    return (
        
            <div className="card col-md-4 cajaproductos">
                
                <img src={product.image} className="card-img-top img-fluid mt-2 rounded" alt={product.name} />
                <div className="card-body row">
                    <h5 className="card-title text-center fs-4">{product.name}</h5>
                    <p className="card-text text-center fs-5">${product.price}</p>
                    <div className="text-center align-self-end"><Link to={"/item/" + product.id} className=" btn btncart vermas">Ver más</Link></div>

                </div>
                
            </div>
       
    )
}

export default Item