import React from "react";
import Itemdetail from "./Itemdetail";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loader from "./Loader";


const ItemdetailContainer = () =>{
   
    const [item, setItem] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const db = getFirestore();
            const item = doc(db, "productos", id);
            getDoc(item).then((snapShot) => {
                if (snapShot.exists()) {
                    setItem({id:snapShot.id, ...snapShot.data()});
                    setLoading(false)
                }
            });
    }, [id]);
   
    return(
        <div className="container-fluid">
               {loading ? <Loader/> : <Itemdetail item={item}/>
             }
        </div>
    )
}

export default ItemdetailContainer;