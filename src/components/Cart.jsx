import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, cartTotal, removeItem, clear, sumaTotal } = useContext(CartContext)
    

    if (cartTotal() === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger mt-5" role="alert">
                            No se encontraron productos en el carrito.
                        </div>
                        <Link to={"/"} className="btn btn-warning">Volver a la pagina principal</Link>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center mt-3">Tu carrito</h1>
                    <table class="table mt-4">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end">
                                    <Link onClick={clear} className="btn btn-warning" title="Vaciar carrito">Vaciar carrito</Link>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col" className="text-center">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item=>(
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.nombre} width={90} /></td>
                                    <td className="align-middle text-center">{item.name}</td>
                                    <td className="align-middle text-center">{item.quantity}</td>
                                    <td className="align-middle text-center">${item.quantity * item.price}</td>
                                    <td className="align-middle text-end"><Link onClick= {()=>{removeItem(item.id)}} title="Eliminar producto"> <img src="imagenes/basura.png" alt="Eliminar producto" width={32} /> </Link></td>
                                </tr>
                            )

                            )}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center"><b>Total a pagar</b></td>
                                <td className="text-center"><b>$ {sumaTotal()}</b> </td>
                                <td className="text-end"><Link to={"/checkout"} className="btn btn-warning">Finalizar compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart