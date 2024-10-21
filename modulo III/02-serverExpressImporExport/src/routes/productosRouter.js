import {Router} from "express"
import { ProductosManager } from "../dao/ProdcuctosManager.js"

export const router=Router()

ProductosManager.path="./src/data/productos.json"

router.get("/", (req, res)=>{

    let productos=ProductosManager.getProductos()

    res.setHeader("Content-Type", "application/json")
    res.status(200).send({productos})
})
router.get("/:id", (req, res)=>{
    let {id}=req.params

    let producto=`producto ${id}`

    res.setHeader("Content-Type", "application/json")
    res.status(200).send({producto})
})
router.post("/", (req, res)=>{

    let nuevoProducto="nuevo producto"

    res.setHeader("Content-Type", "application/json")
    res.status(200).send({nuevoProducto})
})
router.put("/:id", (req, res)=>{

    let {id}=req.params

    let producto=`producto ${id} modificado`

    res.setHeader("Content-Type", "application/json")
    res.status(200).send({producto})
})
router.delete("/:id", (req, res)=>{

    let {id}=req.params

    let producto=`producto ${id} eliminado`

    res.setHeader("Content-Type", "application/json")
    res.status(200).send({producto})
})