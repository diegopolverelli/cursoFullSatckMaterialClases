const UsuariosManager = require("../UsuariosManager.js")

const Router=require("express").Router

const router = Router()

router.get("/", (req, res)=>{
    let {nombre}=req.query
    
    let usuarios
    try {
        usuarios=UsuariosManager.getUsuarios()
    } catch (error) {
        console.log(error)
        return res.send(`Error al recuperar usuarios`)
    }

    let respuesta=usuarios
    if(nombre){
        respuesta=usuarios.filter(usuario=>usuario.nombre.toLowerCase()===nombre.toLowerCase())
    }

    res.send(respuesta)

})

router.get("/:id", (req, res)=>{
    
    let {id}=req.params
    id=Number(id)   // "100"   // "Juan"  NaN  (Not a Number)
    if(isNaN(id)){
        res.setHeader("Content-Type", "application/json")
        return res.status(400).send({error:`Error: ingrese un id numérico`})
    }

    let usuarios
    let usuario
    try {
        usuarios=UsuariosManager.getUsuarios()
        usuario=usuarios.find(u=>u.id===id)
        if(!usuario){
            res.setHeader("Content-Type", "application/json")
            return res.status(404).send({error:`No existen usuarios con id ${id}`})
        }
    } catch (error) {
        console.log(error)
        res.setHeader("Content-Type", "application/json")
        return res.status(500).send({error:`Error al recuperar usuarios`})
    }

    res.setHeader("Content-Type", "application/json")
    res.status(200).send(usuario)
})

router.post("/", (req, res)=>{
    let {nombre, email, apellido}=req.body
    if(!nombre || !email){
        return res.send(`nombre | email son requeridos`)
    }

    let usuarios
    try {
        usuarios=UsuariosManager.getUsuarios()
    } catch (error) {
        return res.send(`Error al grabar usuario`)
    }
    let existe=usuarios.find(u=>u.email===email)
    if(existe){
        return res.send(`Error: usuario existe en DB, con email ${email}`)
    }

    let nuevoUsuario
    try {
        nuevoUsuario=UsuariosManager.addUser({nombre, email, apellido})
    } catch (error) {
        console.log(error)
        return res.send(`Error al agregar usuario`)
    }

    res.send({
        mensaje:"Usuario generado...!!!",
        nuevoUsuario
    })

})

router.put("/:id", (req, res)=>{

    res.send("Modifica un usuario")
})

router.delete("/:id", (req, res)=>{

    res.send("Elimina un usuario")
})

// const prueba=100

module.exports={
    router
}