import React from "react";

const Cartwidget = () => {
    return (
        <button type="button" className="btn carrito position-relative">
            <img src="imagenes/carrito.png" alt="Carrito" width={30} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
            </span>
        </button>
    )
}

export default Cartwidget;