import React, {useContext, useEffect, useState} from "react";
import '../estilos/ItemPedido.css';
import {ProductoContext} from "../context/ProductoContext";
import {useNavigate} from "react-router-dom";


function ItemPedido(props) {
    const cantidad = 1;
    const {productosPedidos, setProductosPedidos} = useContext(ProductoContext);
    const navigate = useNavigate();
    let eliminarPedido = (codigo) => {
        let nuevaLista = [];
        productosPedidos.map((prod, index) => {
            if (prod.codigo !== codigo) {
                nuevaLista.push(prod);
            }
        });
        setProductosPedidos(nuevaLista);
    };


    return (
        <tr>

            <td className="celda">
                <img className="card-img-top celda__imagen" src={props.imagen}/>
                <br/>
                {props.nombre}</td>
            <td className="celda align-middle"><input className="form-control form-control-sm" type="number"
                                                           defaultValue="1" min="1" max={props.stock}/></td>
            <td className="align-middle celda">${props.precio.toFixed(2)}</td>
            <td className="celda align-middle"><i className="fa fa-trash text-danger"
                                            onClick={() => eliminarPedido(props.codigo)}></i></td>
        </tr>
    );
}

export default ItemPedido;
