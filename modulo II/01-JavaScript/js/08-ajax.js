console.log("Ajax")
// console.log("Ajax 1")
// console.log("Ajax 2")
// console.log("Ajax 3")
// console.log("Ajax 4")

// let contador=0
// let i01=setInterval(() => {
//     console.log(contador)
//     contador++
// }, 1000);
// let i02=setInterval(() => {
//     console.log("Hola")
// }, 500);
// setTimeout(() => {
//     console.log("EJECUTO EL TIMEOUT...!!!")
// }, 3000);
// setTimeout(() => {
//     clearInterval(i01)
//     clearInterval(i02)
//     console.log("FIN INTERVALOS 1 y 2")
// }, 5000);

let nombre="Juan"
let resultado=10+100

// promesas

// async / await
const leeApi=async(url)=>{
    console.log(`Ejecutando peticion a ${url}`)
    try {
        let resultado = await fetch(url)
        let datos= await resultado.json()
        // console.log(datos)
        return datos
        
    } catch (error) {
        console.log(`Algo falló... ${error.message}`)
    }

    console.log(`leeApi finalizada...!!!`)
    
}

leeApi("https://reqres.in/api/users?page=2")
    .then(data=>{
        console.log(`Se imprimirá el resultado del la petición...!!!`)
        console.log(data)
        data.data.forEach(u=>{
            let parrafo=document.createElement("p")
            parrafo.textContent=`Nombre: ${u.first_name} | email: ${u.email}`
            document.body.append(parrafo)
            let img=document.createElement("img")
            img.src=u.avatar
            document.body.append(img)
            let hr=document.createElement("hr")
            document.body.append(hr)

        })
    })
    .catch(error=>console.log(error.message))


// console.log(datos)
// leeApi("https://333.reqres.in/api/users?page=2")

// fetch("https://reqres.in/api/users?page=2")
//     .then(respuesta=>{
//         console.log(respuesta)
//         respuesta.json()
//             .then(datos=>{
//                 console.log(datos)
//             })
//             .catch(error=>console.log(error.message))
//     })
//     .catch(error=>console.log(error.message))

const inputNombre=document.getElementById("nombre")
const inputEmail=document.getElementById("email")
const btnRegistro=document.getElementById("btnRegristro")

btnRegistro.addEventListener("click", async(e)=>{
    e.preventDefault()
    let nombre=inputNombre.value 
    let email=inputEmail.value 

    if(!nombre || !email){
        alert("Complete los datos...!!!")
        return 
    }

    // validar varias cosas 
    let datos={
        nombre, email
    }
    console.log(datos)

    // let respuesta=await fetch("https://reqres.in/api/login", {    // peticion que retorna error
    let respuesta=await fetch("https://reqres.in/api/users", {
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(datos)
    })
    console.log(respuesta)
    if(respuesta.status>=400){
        console.log("Ocurrió un error... "+respuesta.statusText)
        return
    }
    let data=await respuesta.json()
    console.log(data)
    document.getElementById("mensaje").textContent=JSON.stringify(data)
})

