// import React from 'react'

// eslint-disable-next-line react/prop-types
export const Formulario = ({actualizar}) => {

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(e)
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        let nombre=e.target[0].value.trim()
        if(nombre){
            actualizar(e.target[0].value)
        }
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="ingrese nombre" />
            <input type="email" name="email" placeholder="email" />
            <input type="submit" value={"Ingresar"} />
        </form>
    )
}
