import {useEffect, useState} from "react";
import audifonos from '../imagenes/audifonos.jpg';
import bonsai from '../imagenes/bonsai.jpg';

export const useProcesarPago = () => {
    const [procesarPago, setProcesarPago] = useState(false);
    useEffect(() => {

            //setTimeout(() => {
                setProcesarPago(true);
            //}, 1000);

    }, []);
    return procesarPago;
}