import React, {useContext, useEffect} from "react";
import '../estilos/ListaProductos.css';
import {LinearProgress} from "@mui/material";
import {useProcesarPago} from "../custom-hook/useProcesarPago";
import {ProductoContext} from "../context/ProductoContext";
import {Link, redirect, useNavigate} from "react-router-dom";

export const ProcesarPago = () => {
    const  procesarPago  = useProcesarPago();

    const { setProductosPedidos, setContador, productosPedidos, cargando,setCargando} = useContext(ProductoContext);

    useEffect(() => {
        setCargando(1);
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
        let detalle=[];
        productosPedidos.map((prod, index) => {
            detalle.push({
                "producto": prod.id,
                "cantidad": 1
            })
        });

        //const apiUrl = 'http://localhost:8762/ms-pedidos/pedidos';
        const apiUrl = 'https://back-end-cloud-gateway-production.up.railway.app/ms-pedidos/pedidos';
        const requestOptions = {
            "targetMethod": "POST",
            "body": {
                "fecha": yyyy+'-0'+mm+'-'+dd,
                "pagado": true,
                "nota": "Nota pedido",
                "detalle":detalle
            }
        };
        console.log(apiUrl);
        console.log(requestOptions);

         fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // You can include additional headers if needed
            },
            body: JSON.stringify(requestOptions), // Convert postData to JSON string
        })
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                console.log(data);
                setCargando(0);
            })
            .catch(error => {
                console.error('Error:', error); // Handle errors
            });

    },[])
    let limpiar = () => {
        setProductosPedidos([]);
        setContador(0);
    };

    return (

        <section className="py-5">
            <div className="container px-4 px-lg-5">
                {
                    cargando ==0 ? (
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
