import express from "express"
import { conectarDB } from "./ConnDB.js"
// import { heroesModelo } from "./models/heroesModel.js"
// import {heroes as heroesData} from "./data/heroes.js"
import { router as heroesRouter } from "./routes/heroesRouter.js"
//mongodb+srv://fullstackgrupogestar:fullstackgrupogestar@cluster0.x5lje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const PORT=3000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/heroes", heroesRouter)

app.get("/", (req, res)=>{

    res.send("Home Page")
})

// app.post("/api/heroes")


// app.get("/api/heroes", async(req, res)=>{
//     let resultado=await heroesModelo.deleteMany({})
//     console.log(resultado)
    
//     resultado=await heroesModelo.insertMany(heroesData)
//     console.log(resultado)

//     let heroes=await heroesModelo.find()

//     res.send(heroes)
// })

app.listen(PORT, ()=>{
    console.log(`Server up in port ${PORT}`)
})

conectarDB(
    "mongodb+srv://fullstackgrupogestar:fullstackgrupogestar@cluster0.x5lje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
    "pruebasMongoDB"
)
