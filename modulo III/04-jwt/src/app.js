import express from "express"

import { router as datosRouter } from "./routes/datosRouter.js"
import { router as sessionsRouter } from "./routes/sessionsRouter.js"

const PORT=3000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("./src/public"))

app.use("/api/sessions", sessionsRouter)
app.use("/api/datos", datosRouter)

app.get("/", (req, res)=>{

    res.send("Home Page")
})

app.listen(PORT, ()=>{
    console.log(`Server up in port ${PORT}`)
})