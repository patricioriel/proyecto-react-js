import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {

    return (
        
            <div className="card col-md-4">
                <Link to={"/item/" + product.id} className="text-dark text-decoration-none">
                <img src={product.image} className="card-img-top fotocard img-fluid" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>

                </div>
                </Link>
            </div>
       
    )
}

export default Item