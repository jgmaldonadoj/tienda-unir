import {useProductos} from "./custom-hook/useProductos";
import {ProductoContext} from "./context/ProductoContext";
import {Rutas} from "./rutas/Rutas";
import React, {useState} from "react";
import Footer from "./componentes/Footer";
import {useCategoria} from "./custom-hook/useCategoria";

function App() {
    const [contador, setContador] = useState(0);
    const [productosPedidos, setProductosPedidos] = useState([]);
    const [textoBuscar, setTextoBuscar] = useState(null);
    let updateContador = () => {
        setContador(contador+1);
    };

    const [productos, setProductos] = useProductos(textoBuscar);
    /*const procesarPago = useProcesarPago();*/
    const categorias = useCategoria();


    return (
        <ProductoContext.Provider value={{productos, contador,setContador, updateContador,setProductosPedidos, productosPedidos, setTextoBuscar, categorias, setProductos}}  >
            <Rutas></Rutas>
            <Footer/>
        </ProductoContext.Provider>
    );
}


export default App;