import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Inicio} from "../vistas/Inicio";
import FinalizarPedido from "../vistas/FinalizarPedido";
import ProcesarPago from "../componentes/ProcesarPago";
import PaginaNoEncontrada from "../componentes/PaginaNoEncontrada";


export const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
          <Route path="/pedido" element={<FinalizarPedido/>} />
          <Route path="/procesarPago" element={<ProcesarPago/>} />
          <Route path="/*" element={<PaginaNoEncontrada/>} />
      </Routes>
    </BrowserRouter>
  );
};
