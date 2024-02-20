import {useEffect, useState} from "react";
export const useCategoria = (filtro) => {
    const [categorias, setCategorias] = useState([]);
    const requestOptions = {
        "targetMethod": "GET",
        "queryParams":{
            "aggregate": ["true"]
        }
    };
   // const apiUrl = 'http://localhost:8762/ms-productos-busqueda/products';
    const apiUrl = 'https://back-end-cloud-gateway-production.up.railway.app/ms-productos-busqueda/products';
    useEffect(() => {

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
                setCategorias(data.aggs);
                //console.log(categorias);
            })
            .catch(error => {
                console.error('Error:', error); // Handle errors
            });


    }, []);

    return categorias;
}