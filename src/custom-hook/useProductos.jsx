import {useEffect, useState} from "react";
import audifonos from '../imagenes/audifonos.jpg';
import bonsai from '../imagenes/bonsai.jpg';
import termometro from '../imagenes/termometro.jpg';
import planta from '../imagenes/planta.jpg';
import audifonos1 from '../imagenes/audifonos1.jpg';
import traeger from '../imagenes/traeger.jpg';
import guantes from '../imagenes/guantes.jpg';
import equipo_bonsai from '../imagenes/equipo_bonsai.jpg';
import raspador from '../imagenes/raspador.jpg';
import terrariro from '../imagenes/terrariro.jpg';
import termopro from '../imagenes/termopro.jpg';
import kit_ahumador from '../imagenes/kit_ahumador.jpg';
import aspiradora from '../imagenes/aspiradora.jpg';
import organizador_auto from '../imagenes/organizador_auto.jpg';
import inflador from '../imagenes/inflador.jpg';
import compresor from '../imagenes/compresor.jpg';
import audifonos2 from '../imagenes/audifonos2.jpg';
import audifonos3 from '../imagenes/audifonos3.jpg';
import arbol_jade from '../imagenes/arbol_jade.jpg';
import arbol_enebro from '../imagenes/arbol_enebro.jpg';
import tortuga from '../imagenes/tortuga.jpg';
import rana from '../imagenes/rana.jpg';
import gato from '../imagenes/gato.jpg';
import conejo from '../imagenes/conejo.jpg';
import grinch from '../imagenes/grinch.jpg';
import arbol_vida from '../imagenes/arbol_vida.jpg';
import sol_luna from '../imagenes/sol_luna.jpg';
import arbol_vida2 from '../imagenes/arbol_vida2.jpg';
import farol from '../imagenes/farol.jpg';
import hada from '../imagenes/hada.jpg';
import luces from '../imagenes/luces.jpg';
import gnomo from '../imagenes/gnomo.jpg';
import tiki from '../imagenes/tiki.jpg';
import dinosaurio from '../imagenes/dinosaurio.jpg';
import orca from '../imagenes/orca.jpg';
import paquete_plantas from '../imagenes/paquete_plantas.jpg';
import lampara_arbol from '../imagenes/lampara_arbol.jpg';
import lampara_mesa from '../imagenes/lampara_mesa.jpg';
import lampara_pie from '../imagenes/lampara_pie.jpg';
import lampara_circular from '../imagenes/lampara_circular.jpg';
import lampara_moderna from '../imagenes/lampara_moderna.jpg';
import escultura from '../imagenes/escultura.jpg';
import estatua_abstracta from '../imagenes/estatua_abstracta.jpg';
import homary from '../imagenes/homary.jpg';
import elefante from '../imagenes/elefante.jpg';
import elefante2 from '../imagenes/elefante2.jpg';
import musico from '../imagenes/musico.jpg';
import balon from '../imagenes/balon.jpg';
import jugador from '../imagenes/jugador.jpg';
import muneco from '../imagenes/muneco.jpg';
import pintura1 from '../imagenes/pintura1.jpg';
import planta_colgante from '../imagenes/planta_colgante.jpg';
import lirio from '../imagenes/lirio.jpg';
import cuadro2 from '../imagenes/cuadro2.jpg';

export const useProductos = (filtro) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(1);
    useEffect(() => {
        setCargando(1);
        let requestOptions = {
            "targetMethod": "GET"
        };
        if (filtro != '') {
            requestOptions = {
                "targetMethod": "GET",
                "queryParams": {
                    "nombre": [filtro],
                    "caracteristicas": [filtro]
                }
            };
        }
        const imagenes = [audifonos, bonsai, termometro, planta, audifonos1, traeger, guantes, equipo_bonsai, raspador, terrariro, termopro, kit_ahumador, aspiradora, organizador_auto, inflador, compresor, audifonos2, audifonos3, arbol_jade, arbol_enebro, tortuga, rana, gato, conejo, grinch, arbol_vida, sol_luna, arbol_vida2, farol, hada, luces, gnomo, tiki, dinosaurio, orca, paquete_plantas, lampara_arbol, lampara_mesa, lampara_pie, lampara_circular, lampara_moderna, escultura, estatua_abstracta, homary, elefante, elefante2, musico, balon, jugador, muneco, pintura1, planta_colgante, lirio, cuadro2];
        const apiUrl = 'https://back-end-cloud-gateway-production.up.railway.app/ms-productos-busqueda/products';
        console.log(apiUrl);
        const productosCompleto = [];
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
                for (var k in data.products) {
                    productosCompleto.push({
                        nombre: data.products[k].nombre,
                        codigo: data.products[k].codigo,
                        caracteristicas: [
                            data.products[k].caracteristicas
                        ],
                        precio: data.products[k].precio,
                        imagen: imagenes[Math.floor(Math.random() * imagenes.length)],
                        stock: data.products[k].stock,
                        id: data.products[k].id
                    })

                }

                setProductos(productosCompleto);
                setCargando(0);
            })
            .catch(error => {
                console.error('Error:', error); // Handle errors
            });
    }, [filtro]);

    return [productos, setProductos, cargando, setCargando]
}