const {Router} = require("express")

const router=Router()

productos=[
    {
        id:1, descrip:"Martillo", precio:7000
    },
    {
        id:2, descrip:"Destornillador", precio:6500
    },
    {
        id:3, descrip:"Producto03", precio:9400
    },
    {
        id:4, descrip:"Producto04", precio:3100
    },
    {
        id:5, descrip:"Producto05", precio:980
    },
]

router.get("/", (req, res)=>{

    res.send(productos)
})

router.post("/", (req, res)=>{

    res.send(`Producto creado`)
})

router.put("/:id", (req, res)=>{

    res.send(`Producto modificado`)
})

router.delete("/:id", (req, res)=>{

    res.send(`Producto borrado`)
})

module.exports={
    router
}
