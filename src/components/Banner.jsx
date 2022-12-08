import React from "react";
import { Link } from "react-router-dom";

const Banner = () =>{
    return(
       <Link to={"/"}> <img className="logotipo" src="https://i.postimg.cc/X3HnvsvR/logotipo.png" alt="Con un toque de dulzura"/></Link>
    )
}

export default Banner;