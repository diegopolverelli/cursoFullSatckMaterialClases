import express from "express"
import swaggerJsondoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
const PORT=3000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const options={
    definition:{
        openapi: "3.0.0",
        info: {
            title: "Ejemplo documentación API",
            version:"1.0.0",
            description:"Ejemplo documentación API"
        }
    },
    apis: ["./src/docs/*.yaml"]
}

const specs=swaggerJsondoc(options)

app.use("/documentacion", swaggerUi.serve, swaggerUi.setup(specs))

app.get("/", (req, res)=>{
    res.send("Home Page")
})

let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

app.get("/users", (req, res)=>{


    res.send(usuarios)
})

app.get("/users/:id", (req, res)=>{

    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }

    let usuario=usuarios.find(u=>u.id===id)

    res.send(usuario)
})

app.post("/users", (req, res)=>{
    let {nombre, email, password}=req.body
    if(!nombre || !email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre | email | password`})
    }

    let id=1
    if(usuarios.length>0){
        id=usuarios[usuarios.length-1].id +1
    }

    let nuevoUsuario={id, nombre, email, password}
    usuarios.push(nuevoUsuario)
    res.status(201).send(nuevoUsuario)
})


app.listen(PORT, ()=>{
    console.log(`Server up in port ${PORT}`)
})