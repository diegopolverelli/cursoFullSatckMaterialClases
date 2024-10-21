console.log("Sentencias de Control")
console.warn("Sentencias de Control")
console.error("Sentencias de Control")

let edad=23

if(edad>18){
    console.log("Mayor de edad")
    console.log("Se procede a dar acceso al usuario")
}else{
    console.log("Menor de edad")
    console.log("Usuario invalido")
}

if(edad===14){
    console.log(`Tienes 14`)
}else{
    if(edad===15){
        console.log(`Tienes 15`)
    }else{
        if(edad===16){
            console.log(`Tienes 16`)
        }else{
            console.log(`No tienes ni 14, ni 15, ni 16...`)
        }
    }
}

switch (edad) {
    case 14:
        console.log(`Tienes 14 años`)
        break;
    case 15:
        console.log(`Tienes 15 años`)
        break;
    case 16:
        console.log(`Tienes 16 años`)
        break;

    default:
        console.log(`No tienes ni 14, ni 15, ni 16...`)
        break;
}

let contador=1000
while (contador<100) {
    contador=contador+5
    // contador+=5
    // contador++
    console.log(contador)
    let parrafo=document.createElement("p")
    parrafo.textContent=contador
    document.body.append(parrafo)
}

contador=1000
do {
    contador++
    let parrafo=document.createElement("p")
    parrafo.textContent=contador
    document.body.append(parrafo)
    console.log(contador)
} while (contador<=7);


for(let i=0; i<=20; i+=5){
    console.log(i)
}
for(let i=0; i<=20; i++){
    console.log(i)
}

let nombres=["Juan", "Miguel", "Martina", "Laura", "Ingrid"]

for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])
    let parrafo=document.createElement("p")
    parrafo.textContent=nombres[i]
    document.body.append(parrafo)
    console.log(contador)
}

let usuario={name:"John", id:100}

if(usuario){
    console.log(`Usuario encontrado en DB`)
}else{
    console.log(`Usuario inexistente`)
}

usuario=undefined

if(usuario){
    console.log(`Usuario encontrado en DB`)
}else{
    console.log(`Usuario inexistente`)
}

