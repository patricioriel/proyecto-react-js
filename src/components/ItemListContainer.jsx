import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Itemlist from "./Itemlist";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";


const ItemListContainer = () =>{
    
    const [listProducts, setListProducts] = useState([])
    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            const db = getFirestore();
            const itemsCollection = collection(db, "productos");
    
            const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
            
            getDocs(q).then((snapShot) => {
                setListProducts(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()}),
                setLoading(false)
                ))
            });
    }, [id]);

    return(
        <div className="container-fluid">
            {loading ? <Loader/> : <Itemlist listProducts={listProducts} />
             }
        </div>
    )
}

export default ItemListContainer;