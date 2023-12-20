import React, {useContext, useEffect, useState} from "react";
import '../estilos/Producto.css';
import {ProductoContext} from "../context/ProductoContext";

function PaginaNoEncontrada() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h1 className="display-1">Error 404: Página no encontrada</h1>
                    <p className="lead">Lo siento, la página que estás buscando no se pudo encontrar.</p>
                </div>
            </div>
        </div>
    );
}

export default PaginaNoEncontrada;
