import React from "react";
import Cartwidget from "./Cartwidget";
import { NavLink, Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="contenedor">
            <div className="row">
            <div className="col-md-8">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src="https://cdn-icons-png.flaticon.com/512/1182/1182138.png" alt="logo" width={70} /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" to={"category/tortasclasicas"}>Tortas clásicas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" aria-current="page" to={"category/apedido"}>A pedido</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="page" aria-current="page" to={"category/numericas"}>Numericas</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>

                <div className="col-md-3 d-flex align-items-center justify-content-end">
                    <Cartwidget />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;