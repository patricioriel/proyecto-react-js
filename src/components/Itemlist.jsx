import React from "react";
import Item from "./Item";

const Itemlist = ({listProducts}) =>{

return(
        <div className="row mt-3 ms-2 caja justify-content-center">
            <h1 className="text-center text-decoration-underline mb-4">Todos nuestros productos</h1>
           {listProducts.map(product => <Item key={product.id} product={product} />)}
        </div>
    )
}
export default Itemlist