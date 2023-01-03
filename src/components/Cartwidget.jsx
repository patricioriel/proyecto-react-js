import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cartwidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        <Link to={"/cart"}className="btn carrito position-relative">
            <img src="https://i.postimg.cc/rDnPBpN0/carrito.png" alt="Carrito" width={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartTotal()}
            </span>
        </Link>
    )
}

export default Cartwidget;