import React from "react";
import Cartwidget from "./Cartwidget";

const Navbar = () => {
    return (
        <div className="contenedor">
            <div className="row">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src="imagenes/logo.png" alt="logo" width={70} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tortas clásicas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">A pedido</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Numericas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <Cartwidget />
                </div>
            </div>
            
        </div>
    )
}

export default Navbar;