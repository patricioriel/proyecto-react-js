import React from "react";
import Itemdetail from "./Itemdetail";
import { products } from "../products";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemdetailContainer = () =>{
   
    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(()=> {
       const promesa = new Promise ((resolve, reject)=>{
        setTimeout(() => {
            resolve(products.find(item=> item.id === parseInt(id)))
        }, 2000);
       })

        promesa.then(res =>{
            setItem(res)
        })
    }, [id])
   
    return(
        <div>
            <Itemdetail item={item}/>
        </div>
    )
}

export default ItemdetailContainer;