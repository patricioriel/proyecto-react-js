import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const BotonCarrito = ({total}) => {
    return (
        <Link to={"/cart"} className="btn carrito position-relative">
            <img src="https://i.postimg.cc/rDnPBpN0/carrito.png" alt="Carrito" width="32" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{total}</span>
        </Link>
    )
}

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return cartTotal() > 0 ? <BotonCarrito total={cartTotal()} />  : "";
}

export default CartWidget;