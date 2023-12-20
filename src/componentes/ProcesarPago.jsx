import React, {useContext, useEffect} from "react";
import '../estilos/ListaProductos.css';
import {LinearProgress} from "@mui/material";
import {useProcesarPago} from "../custom-hook/useProcesarPago";
import {ProductoContext} from "../context/ProductoContext";
import {Link, redirect, useNavigate} from "react-router-dom";

export const ProcesarPago = () => {
    const  procesarPago  = useProcesarPago();

    const { setProductosPedidos, setContador} = useContext(ProductoContext);

    let limpiar = () => {
        setProductosPedidos([]);
        setContador(0);
    };

    return (

        <section className="py-5">
            <div className="container px-4 px-lg-5">
                {
                    procesarPago === true ? (
                        <div onClick={()=>limpiar()}>
                            <div
                                className="container d-flex align-items-center justify-content-center"><p>Pago realizado
                                correctamente <i
                                    className="fas fa-check"></i></p>
                            </div>
                            <div
                                className="container d-flex align-items-center justify-content-center">
                                <Link to={"/"}>
                                    <button className="btn btn-sm btn-primary" type="button"><i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Regresar al listado de
                                        productos
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ) : (<div><p className="text center">Procesando pago ....</p><LinearProgress color="secondary"/>
                    </div>)

                }
            </div>
        </section>
    );

}

export default ProcesarPago;
