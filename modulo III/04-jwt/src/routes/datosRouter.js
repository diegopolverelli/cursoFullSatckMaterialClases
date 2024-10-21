import {Router} from "express"
import { auth } from "../middleware/auth.js"

export const router=Router()

router.use(auth)

router.get("/", (req, res)=>{

    res.send({mensaje:"Datos confidenciales", usuario:req.usuario})
})