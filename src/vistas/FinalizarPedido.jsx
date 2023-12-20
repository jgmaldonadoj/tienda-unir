import '../estilos/Menu.css';
import React from "react";
import Pedido from "../componentes/Pedido";
import MenuPago from "../componentes/MenuPago";
export const FinalizarPedido = () => {
    return (
        <div>
            <MenuPago/>
            <Pedido/>
        </div>
    );
}

export default FinalizarPedido;
