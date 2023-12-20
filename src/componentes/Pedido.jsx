import React, {useContext, useState} from "react";
import '../estilos/Producto.css';
import {ProductoContext} from "../context/ProductoContext";
import Producto from "./Producto";
import ItemPedido from "./ItemPedido";
import {Link} from "react-router-dom";
import {useProcesarPago} from "../custom-hook/useProcesarPago";

function Pedido() {
    const {productosPedidos, setProductosPedidos} = useContext(ProductoContext);
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 ">
                <Link to={"/"}>
                    <button className="btn btn-sm btn-secondary"><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Regresar al listado de productos</button>
                </Link>
                <br/>
                <br/>
                <h4 className="text-center font-weigth-bold">Mi carrito de compras <i className="fa fa-shopping-cart text-info"
                                                                                      aria-hidden="true"></i></h4>
                <br/>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col" className="text-center font-weigth-bold col-6">Producto</th>
                        <th scope="col" className="text-center font-weigth-bold col-2">Cantidad</th>
                        <th scope="col" className="text-center font-weigth-bold col-2">Precio</th>
                        <th scope="col" className="text-center font-weigth-bold col-2">Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        productosPedidos.length > 0 ? (
                            productosPedidos.map((producto, index) => (
                                <ItemPedido
                                    key={index}
                                    nombre={producto.nombre}
                                    codigo={producto.codigo}
                                    stock={producto.stock}
                                    caracteristicas={producto.caracteristicas}
                                    precio={producto.precio}
                                    imagen={producto.imagen}
                                    orden={index}
                                />
                            ))
                        ) : ('')
                    }
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="2">
                            <h4 className="text-center font-weight-bold">
                                Total pagar
                            </h4>
                        </td>

                        <td className="text-center">
                            <h4>
                            ${productosPedidos.reduce((accumulator, object) => {
                                return accumulator + object.precio;
                            }, 0)}
                            </h4>
                        </td>
                    </tr>
                    </tfoot>
                </table>
                <br/>
                <div className="container d-flex align-items-center justify-content-center">
                <Link to={"/procesarPago"}>
                        <button className="btn btn-primary"><i className="fas fa-money-bill-alt"></i>
                            &nbsp;Realizar pago</button>
                    </Link>
                </div>

            </div>
        </section>

    );
}

export default Pedido;
