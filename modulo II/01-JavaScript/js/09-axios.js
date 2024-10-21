console.log("Axios")

const btnDatos=document.createElement("button")
btnDatos.textContent="Cargar Usuarios"

btnDatos.addEventListener("click", async(e)=>{
    e.preventDefault()

    let datos=await axios.get("https://reqres.in/api/users?page=2")
    console.log(datos)
    let ul
    if(document.getElementById("ulUsuarios")){
        ul=document.getElementById("ulUsuarios")
        ul.textContent=""
    }else{
        ul=document.createElement("ul")
        ul.id="ulUsuarios"
    }

    datos.data.data.forEach(u=>{
        let li=document.createElement("li")
        li.textContent=`Nombre: ${u.first_name} | email: ${u.email}`
        ul.append(li)
        let img=document.createElement("img")
        img.src=u.avatar
        ul.append(img)
        let hr=document.createElement("hr")
        ul.append(hr)

    })
    document.body.append(ul)
})

document.body.append(btnDatos)

const inputNombre=document.getElementById("nombre")
const inputEmail=document.getElementById("email")
const btnRegistro=document.getElementById("btnRegristro")

btnRegistro.addEventListener("click", async(e)=>{
    e.preventDefault()

    let nombre=inputNombre.value 
    let email=inputEmail.value 
    if(!nombre || !email){
        alert("Complete datos")
        return 
    }

    let respuesta=await axios.post("https://reqres.in/api/users",{
        nombre, 
        email
    })
    console.log(respuesta)
    if(respuesta.status>=400){
        alert("Error...")
        return 
    }
    document.getElementById("mensaje").textContent=JSON.stringify(respuesta.data)

})