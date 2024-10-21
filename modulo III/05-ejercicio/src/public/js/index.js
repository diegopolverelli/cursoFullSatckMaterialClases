const inputEmail=document.getElementById("email")
const inputPass=document.getElementById("password")
const btnSubmit=document.getElementById("btnSubmit")
const enlaceDatos=document.getElementById("enlaceDatos")
const divDatos=document.getElementById("datos")

btnSubmit.addEventListener("click", async(e)=>{
    e.preventDefault()

    let email=inputEmail.value 
    let password=inputPass.value 
    if(!email || !password){
        alert("Complete los datos")
        return
    }

    let body={
        email, password
    }

    let respuesta=await fetch("/api/sessions/login", {
        method:"post", 
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(body)
    })
    if(respuesta.status>=400){
        let {error}=await respuesta.json()
        alert(error)
        return 
    }else{
        let datos=await respuesta.json()
        console.log(datos)
        // localStorage.setItem("token", datos.token)
        alert(datos.mensaje)
        return 
    }
})

enlaceDatos.addEventListener("click", async(e)=>{
    e.preventDefault()
    let respuesta=await fetch("/api/datos", {
        // method:"get", 
        // headers:{
        //     "Authorization":`Bearer ${localStorage.getItem("token")}`
        // }
    })
    if(respuesta.status>=400){
        let {error}=await respuesta.json()
        alert(error)
        return
    }else{
        let datos=await respuesta.json()
        divDatos.textContent=JSON.stringify(datos)
    }
})