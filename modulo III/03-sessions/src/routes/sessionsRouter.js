import {Router} from "express"
import { UsersDAO } from "../dao/UsersDAO.js";
import { generaHash, validaHash } from "../utils.js";
export const router=Router()

UsersDAO.path="./src/data/Usuarios.json"

router.post("/register", (req, res)=>{
    let {nombre, email, password}=req.body
    if(!nombre || !email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre email password`})
    }

    // validaciones
    let usuarios=UsersDAO.getUsers()
    let existe=usuarios.find(u=>u.email===email)
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ya existen usuarios con email ${email}`})
    }


    // grabar en db
    password=generaHash(password)
    let nuevoUsuario=UsersDAO.addUser({nombre, email, password})

    res.send({mensaje:"Registro exitoso", nuevoUsuario})
})

router.post("/login", (req, res)=>{
    let {email, password}=req.body
    if(!email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete email | password`})
    }

    let usuarios=UsersDAO.getUsers()
    let usuario=usuarios.find(u=>u.email===email)
    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Credenciales inválidas`})
    }
    if(!validaHash(password, usuario.password)){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Credenciales inválidas`})
    }
    delete usuario.password  // eliminar info sensible

    req.session.usuario=usuario

    res.send({meensaje:"Login exitoso", usuarioLogueado:usuario})
})

router.get("/logout", (req, res)=>{
    req.session.destroy(e=>{
        if(e){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Error el el proceso de logout`})
        }

        res.send({mensaje:"Logout exitoso"})
    })

})