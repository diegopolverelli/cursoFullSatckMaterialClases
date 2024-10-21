import jwt from "jsonwebtoken"
import { config } from "../config/config.js";
// export const auth=(req, res, next)=>{
//     if(!req.headers.authorization){
//         res.setHeader('Content-Type','application/json');
//         return res.status(401).json({error:`No hay usuarios autenticados`})
//     }

//     try {
//         // Bearer adsfads8asdf8.adf8asdf8asdf
//         let token=req.headers.authorization.split(" ")[1]
//         // let usuario=jwt.verify(token, "pass123")
//         let usuario=jwt.verify(token, config.SECRET)
//         req.usuario=usuario
//     } catch (error) {
//         res.setHeader('Content-Type','application/json');
//         return res.status(400).json({error:`${error.message}`})
//     }

//     next()
// }


export const auth=(req, res, next)=>{
    if(!req.cookies.cookieToken){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`No hay usuarios autenticados`})
    }

    try {
        let token=req.cookies.cookieToken
        let usuario=jwt.verify(token, config.SECRET)
        req.usuario=usuario
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`${error.message}`})
    }

    next()
}