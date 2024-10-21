// import React from 'react'

// let nombre="Juan"

// eslint-disable-next-line react/prop-types
export const Saludo = ({nombre, edad, email}) => {
    console.log(nombre, edad, email)

    return (
        <>
            <div>Hola {nombre}</div>
        </>
    )
}

