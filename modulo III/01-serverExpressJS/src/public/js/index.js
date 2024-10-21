// alert("Bienvenidos...!!!")
const divMensaje=document.getElementById("mensaje")

const params=new URLSearchParams(window.location.search)
const mensaje=params.get("mensaje")

if(mensaje){
    divMensaje.textContent=mensaje

    setTimeout(() => {
        divMensaje.textContent=""
    }, 3000);
}
