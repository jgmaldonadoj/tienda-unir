import {useProductos} from "./custom-hook/useProductos";
import {ProductoContext} from "./context/ProductoContext";
import {Rutas} from "./rutas/Rutas";
import React, {useEffect, useState} from "react";
import Footer from "./componentes/Footer";
import {useProcesarPago} from "./custom-hook/useProcesarPago";

function App() {
    const [contador, setContador] = useState(0);
    const [productosPedidos, setProductosPedidos] = useState([]);
    const [textoBuscar, setTextoBuscar] = useState(null);
    let updateContador = () => {
        setContador(contador+1);
    };


    const productos = useProductos(textoBuscar);
    const procesarPago = useProcesarPago();


    return (
        <ProductoContext.Provider value={{productos, contador,setContador, updateContador,setProductosPedidos, productosPedidos, setTextoBuscar}}  >
            <Rutas></Rutas>
            <Footer/>
        </ProductoContext.Provider>
    );
}


export default App;