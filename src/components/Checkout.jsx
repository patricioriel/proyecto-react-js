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
            items: cart.map(item => ({ id: item.id, title: item.name, price: item.price })),
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
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Telefono</label>
                            <input type="number" className="form-control" placeholder="Ingrese su telefono" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" placeholder="Ingrese su email" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar pedido</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <table className="table mt-4">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.image} alt={item.nombre} width={60} /></td>
                                    <td className="align-middle text-center">{item.name}</td>
                                    <td className="align-middle text-center">{item.quantity} Unidad/es</td>
                                    <td className="align-middle text-center">${item.quantity * item.price}</td>
                                </tr>
                            )

                            )}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center"><b>Total a pagar</b></td>
                                <td className="text-center"><b>$ {sumaTotal()}</b> </td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-info" role="alert">
                        Su código de orden es: <b> {orderId} </b>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;