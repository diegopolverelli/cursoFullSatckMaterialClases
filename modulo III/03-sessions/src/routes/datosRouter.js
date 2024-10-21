import {Router} from "express"
import { auth } from "../middleware/auth.js"
export const router=Router()

router.use(auth)

router.get("/", (req, res)=>{


    res.send({datos:`Datos confidenciales`, usuario: req.session.usuario})
})