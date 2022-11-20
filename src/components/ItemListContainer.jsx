import React from "react";

const ItemListContainer = ({greeting}) =>{
    return(
        <div className="caja">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-info text-center mt-2 ms-2 me-2" role="alert">
                     {greeting}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;