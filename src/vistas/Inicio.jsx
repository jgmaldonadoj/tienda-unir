import logo from '../logo.svg';
import '../estilos/Menu.css';
import {Menu} from "../componentes/Menu";
import React from "react";
import ListaProductos from "../componentes/ListaProductos";


export const Inicio = () => {
    return (

        <div>
            <Menu/>
=            <ListaProductos/>
        </div>
    );
}

export default Inicio;
