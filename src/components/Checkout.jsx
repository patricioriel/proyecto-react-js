import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./context/CartContext";


const Checkout = () => {
    const { cart, sumaTotal, clear } = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const generarOrden = () => {
        const fecha = new Date();
        const order = {
            buyer: { name: nombre, telephone: telefono, email: email },
            items: cart.map(item => ({ id: item.id, Titulo: item.name, precio: item.price, cantidad: item.quantity })),
            total: sumaTotal(),
            order_date: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}-${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapshot) => {
            console.log(snapshot.id);
            setOrderId(snapshot.id);
            clear();
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mt-4">
                    <h3 className="text-center">Completa tus datos</h3>
                    <form>
                        <div className="mb-3 mt-4">
                            <label for="nombre" className="form-label fs-4">Nombre y apellido</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre y apellido" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label fs-4">Telefono</label>
                            <input type="number" className="form-control" placeholder="Ingrese su telefono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label fs-4">Email</label>
                            <input type="text" className="form-control" placeholder="Ingrese su email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btncart" onClick={generarOrden}>Generar pedido</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-4 mt-4">
                    <h3 className="text-center">Tu carrito:</h3>
                    <table className="table mt-4 table-hover">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.nombre} width={60} /></td>
                                    <td className="align-middle text-center fs-5">{item.name}</td>
                                    <td className="align-middle text-center">{item.quantity} Unidad/es</td>
                                    <td className="align-middle text-center">${item.quantity * item.price}</td>
                                </tr>
                            )

                            )}
                            <tr>

                                <th colspan="2" scope="colgroup" className="text-end fs-5">Total a pagar:</th>
                                <th colspan="2" scope="colgroup" className="text-end fs-5"><b>$ {sumaTotal()}</b> </th>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-4">
                    {orderId ? <div className="alert alert-info" role="alert">
                        Su código de orden es: <b> {orderId} </b>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;