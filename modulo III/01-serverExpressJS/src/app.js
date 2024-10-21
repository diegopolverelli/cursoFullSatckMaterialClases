const express=require("express")
const cookieParser=require("cookie-parser")
const { logger } = require("./middleware/log.js")
const { auth } = require("./middleware/auth.js")
const { upload } = require("./utils.js")
// const UsuariosManager = require("./UsuariosManager.js")
const UsuariosRouter = require("./routes/usuariosRouter.js").router
const ProductosRouter = require("./routes/productosRouter.js").router

const PORT=3000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(logger)  // midd a nivel app
// app.use(auth)
app.use(express.static("./src/public"))

app.use("/usuarios", auth, UsuariosRouter)
app.use("/productos", ProductosRouter)

app.get("/", (req, res)=>{

    res.send("Bienvenidos al server con ExpressJS...!!!")
})

app.post("/recibefoto", upload.single("foto"), (req, res)=>{
    let {name, web}=req.body
    if(!name){
        return res.send(`Complete el name...!!!`)
    }
    let {originalname, mimetype}=req.file

    // validar... 

    // grabar en DB los datos

    console.log(web)
    if(web){
        res.redirect("/index.html?mensaje=imagen cargada...!!!")
    }else{
        res.send({
            name, 
            originalname, 
            mimetype
        })
    }
})

app.get("/getCookies", (req, res)=>{
    let cookies=req.cookies

    res.send({cookies, message:"Cookies definidas en el cliente"})
})

app.get("/setCookies", (req, res)=>{
    // let cookies=req.cookies

    res.cookie("CookieServer01", 999)
    res.send({message:"Cookie generada desde el server...!!!"})
})

app.get("/contacto", (req, res)=>{
    console.log(req.url)
    console.log(req.headers)    //  /usuarios?nombre=Juan&apellido=Martinez
    console.log(req.query)
    let {nombre, apellido}=req.query
    if(!nombre) nombre=""
    if(!apellido) apellido=""

    res.send(`Contacto ${nombre.toUpperCase()} ${apellido.toUpperCase()}`)
})

app.get("/contacto2/:nombre/:edad", (req, res)=>{

    // let nombre=req.params.nombre
    let {nombre, edad} = req.params

    res.send(`Contacto ${nombre.toUpperCase()} / tiene ${edad} años`)
})

app.get("/saludar", (req, res)=>{

    res.send(`<h2 style="color:blue";>Hola...!!!</h2>`)
})


// app.post("/usuarios", (req, res)=>{
//     // let usuario=req.body
//     let {nombre, email, apellido}=req.body
//     if(!nombre || !email){
//         return res.send(`nombre | email son requeridos`)
//     }

//     let usuarios
//     try {
//         usuarios=UsuariosManager.getUsuarios()
//     } catch (error) {
//         return res.send(`Error al grabar usuario`)
//     }
//     let existe=usuarios.find(u=>u.email===email)
//     if(existe){
//         return res.send(`Error: usuario existe en DB, con email ${email}`)
//     }

//     let nuevoUsuario
//     try {
//         nuevoUsuario=UsuariosManager.addUser({nombre, email, apellido})
//     } catch (error) {
//         console.log(error)
//         return res.send(`Error al agregar usuario`)
//     }

//     res.send({
//         mensaje:"Usuario generado...!!!",
//         nuevoUsuario
//     })
// })

// app.get("/usuarios", (req, res)=>{

//     let {nombre}=req.query
    
//     let usuarios
//     try {
//         usuarios=UsuariosManager.getUsuarios()
//     } catch (error) {
//         console.log(error)
//         return res.send(`Error al recuperar usuarios`)
//     }

//     let respuesta=usuarios
//     if(nombre){
//         respuesta=usuarios.filter(usuario=>usuario.nombre.toLowerCase()===nombre.toLowerCase())
//     }

//     res.send(respuesta)
// })

// app.put("/usuarios", (req, res)=>{

//     res.send("Modifica un usuario")
// })

// app.delete("/usuarios", (req, res)=>{

//     res.send("Elimina un usuario")
// })



app.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`)
})