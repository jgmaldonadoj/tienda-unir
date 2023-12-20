import React, {useContext, useEffect, useState} from "react";
import '../estilos/Producto.css';
import {ProductoContext} from "../context/ProductoContext";

function Producto(props) {
    const {productosPedidos} = useContext(ProductoContext);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const {contador, updateContador} = useContext(ProductoContext);


    useEffect(() => {
        if (productoSeleccionado != null) {
            let existe = false;
            if (productosPedidos.length > 0) {
                productosPedidos.map((prod, index) => {
                    if (prod.codigo === productoSeleccionado.codigo) {
                        existe = true;
                    }
                });
            }
            if (existe) {
                alert('El producto ya fue agregado anteriormente');
            } else {
                updateContador();
                productosPedidos.push(productoSeleccionado);
                //alert('Producto agregado correctamente');
            }
        }
        setProductoSeleccionado(null);
    }, [productoSeleccionado]);

    return (
        <div className="col mb-5">
            <div className="card producto">
                <img className="card-img-top producto__image" src={props.imagen}/>
                <div className="card-body ">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.nombre}</h5>
                        <h3 className="producto__image__precio"> ${props.precio}</h3>
                    </div>
                </div>
                <div className="card-footer  producto_buttons">
                   <div className="row">
                    <button type="button" className="btn btn-sm btn-secondary col-5" data-bs-toggle="modal"
                            data-bs-target={"#exampleModal" + props.orden}>
                        <i className="fas fa-info-circle"></i>&nbsp; Detalle
                    </button>
                    <button type="button" className="btn btn-sm btn-primary offset-2 col-5" onClick={() => setProductoSeleccionado(props)}>
                        <i className="fas fa-cart-plus"></i>&nbsp; Agregar
                    </button>
                   </div>
                </div>
            </div>
            <div className="modal fade " id={"exampleModal" + props.orden} tabIndex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Detalle del producto</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-6 text-center">
                                    <img height="400px" src={props.imagen}/>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        {props.caracteristicas.map((producto, index) => (
                                            <li key={index}>{producto}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-sm btn-primary " onClick={() => setProductoSeleccionado(props)}>
                                <i className="fas fa-cart-plus"></i>&nbsp; Agregar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Producto;
