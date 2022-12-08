import React from "react";
import Item from "./Item";

const Itemlist = ({listProducts}) =>{

   

    return(
        <div className="row mt-2 ms-2">
           {listProducts.map(product => <Item key={product.id} product={product} />)}
        </div>
    )
}
export default Itemlist