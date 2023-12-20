import React, {useContext, useEffect} from "react";
import '../estilos/Menu.css';
import {ProductoContext} from "../context/ProductoContext";
import {useNavigate} from "react-router";

export const Carrito = () => {
    const {contador, updateContador} = useContext(ProductoContext);
    const navigate = useNavigate();
    useEffect(() => {
        if(contador>0) {
            const animacion = function () {
                document.getElementById('cart').classList.toggle('fade');
            }
           const refreshIntervalId =setInterval(animacion, 500);
            setTimeout(() => {
                clearInterval(refreshIntervalId);
            }, 3000);
        }


    }, [contador]);


    return (

        <button type="button" className="btn btn-primary position-relative" id="cart" onClick={() => navigate("/pedido/")} >
             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                 {contador}
                 <span className="visually-hidden"></span>
             </span>
            <i className="fa fa-shopping-cart fa-lg"></i>
        </button>
  );
}

export default Carrito;
