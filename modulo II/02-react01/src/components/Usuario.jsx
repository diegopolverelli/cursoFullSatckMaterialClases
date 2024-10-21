/* eslint-disable react/prop-types */
// import React from 'react'

import { Saludo } from "./saludo.jsx";





export const Usuario = ({ isLoggedIn, nombre }) => {
    let content;
    if (isLoggedIn) {
        // content = <h4>Bienvenido {nombre}</h4>;
        content = (
            <>
                <h4>Usuario logueado {nombre}</h4>
                <Saludo nombre={nombre}/>
            </>
        );
    } else {
        content = <h4>No hay usuarios logueados</h4>;
    }


    return (
        <>
            { content }
        </>
    )
}
