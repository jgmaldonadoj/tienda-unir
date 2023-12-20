import React, {useContext} from "react";
import '../estilos/Menu.css';
import Carrito from "./Carrito";
import {ProductoContext} from "../context/ProductoContext";

export const Menu = () => {
    const {setTextoBuscar} = useContext(ProductoContext);
    let buscar = () => {
        setTextoBuscar(document.getElementById('search').value);
    };

    return (
      <nav className="navbar navbar-light bg-light fixed-top menu">
        <div className="container-fluid">
          <a className="navbar-brand menu__title">UNIR Tienda</a>
          <div className="col-8 menu__search">
            <input className="form-control me-2 col-8" type="search" id="search" onChange={()=>buscar()} placeholder="Buscar" aria-label="Search"/>
          </div>
          {<Carrito></Carrito>}
        </div>
      </nav>
  );
}

export default Menu;
