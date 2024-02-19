import React, {useContext} from "react";
import Producto from "./Producto";
import '../estilos/ListaProductos.css';
import {ProductoContext} from "../context/ProductoContext";
import {LinearProgress} from "@mui/material";

export const ListaProductos = () => {
    const { productos } = useContext(ProductoContext);
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 lista">
                <div className="row gx-2 gx-lg-5 row-cols-3 row-cols-md-4 row-cols-xl-5 lista__contenido">
                    {
                        productos.length > 0?(
                        productos.map((producto, index) => (
                        <Producto
                            key={index}
                            nombre={producto.nombre}
                            codigo={producto.codigo}
                            stock={producto.stock}
                            caracteristicas={producto.caracteristicas}
                            precio={producto.precio}
                            imagen={producto.imagen}
                            orden={index}
                            id={producto.id}
                        />
                    ))
                        ):( <div >
                                <p>Cargando productos... </p>
                            <LinearProgress color="secondary"/>
                            </div>
                            )

                    }
                </div>
            </div>
        </section>
    );

}

export default ListaProductos;
