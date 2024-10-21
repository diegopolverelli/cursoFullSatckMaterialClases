import express from "express"
import cookieParser from "cookie-parser"

import { router as alumnosRouter } from "./routes/alumnosRouter.js"
import { router as cursosRouter } from "./routes/cursosRouter.js"
import { router as datosRouter } from "./routes/datosRouter.js"
import { router as sessionsRouter } from "./routes/sessionsRouter.js"
import { config } from "./config/config.js"

// const PORT=3000
// const PORT=process.env.PORT
const PORT=config.PORT
// console.log(process.env.SECRET)
// console.log(process.env.PORT)
const app=express()
// console.log(process.argv)
let [rutaNode, rutaApp, ...argumentos]=process.argv
console.log(argumentos)
let puerto
if(argumentos.includes("--port")){
    let pos=argumentos.findIndex(e=>e==="--port")
    puerto=argumentos[pos+1]
}
// console.log(puerto)
// const PORT=puerto

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./src/public"))
app.use(cookieParser())

app.use("/api/alumnos", alumnosRouter)
app.use("/api/cursos", cursosRouter)
app.use("/api/sessions", sessionsRouter)
app.use("/api/datos", datosRouter)

app.get("/", (req, res)=>{

    res.send("Home Page")
})

app.listen(PORT, ()=>{
    console.log(`Server up in port ${PORT}`)
})