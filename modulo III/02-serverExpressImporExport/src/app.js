import express from "express"
import {router as productosRouter } from "./routes/productosRouter.js"

const PORT=3000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/productos", productosRouter)

app.get("/", (req, res)=>{

    res.setHeader("Content-Type", "application/json")
    res.status(200).send({message:`Home Page`})
})
// export const prueba=123
// module.exports={prueba}


app.listen(PORT, ()=>{
    console.log(`Server up in port ${PORT}`)
})