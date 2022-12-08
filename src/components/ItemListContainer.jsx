import React from "react";
import { products } from "../products";
import { useState } from "react";
import { useEffect } from "react";
import Itemlist from "./Itemlist";
import { useParams } from "react-router-dom";


const ItemListContainer = () =>{
    
    const [listProducts, setListProducts] = useState([])
    const {id} = useParams()

    useEffect(()=> {
       const promesa = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(id ? products.filter(item => item.categoria === id) : products);
        }, 2000);
       }, [id])

        promesa.then(res =>{
            setListProducts(res)
        })
    }, [id])

    return(
        <div>
            <Itemlist listProducts={listProducts} />
        </div>
    )
}

export default ItemListContainer;