import express from "express"
import sessions from "express-session"
import FileStore from "session-file-store"

import { router as datosRouter } from "./routes/datosRouter.js"
import { router as sessionsRouter } from "./routes/sessionsRouter.js"

const PORT=3000
const app=express()
const fileStore=FileStore(sessions)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(sessions({
    secret: "pass123",
    saveUninitialized: true, 
    resave: true,
    store: new fileStore({
        path:"./src/sessions",
        ttl: 3600, 
        retries: 0
    })
}))

app.use("/api/datos", datosRouter)
app.use("/api/sessions", sessionsRouter)

app.get("/", (req, res)=>{

    res.send("Home Page")
})

app.listen(PORT, ()=>{
    console.log(`Server up in port ${PORT}`)
})