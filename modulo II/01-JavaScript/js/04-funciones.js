console.log("Funciones")

function saludo(){
    console.log(`Buenas tardes...!!!`)
}

function suma(a, b){
    console.log(a+b)
}


saludo()
saludo()
saludo()
saludo()
saludo()
suma(5, 5)
suma(10, 12)
suma(4, 5)
suma(23, 7)

function resta(a, b){
    // calculo
    let resultado=a-b
    return resultado
}

console.log(resta(10, 4))
let resultado=resta(10, 4)
console.log(resultado)

let nombre="Juan"
nombre="Esteban"
// let nombre="Pedro"
let apellido="Perez"

if(true){
    console.log(apellido)
    let nombre="Juan"
    console.log(nombre)
    let edad=24
}

console.log(nombre)
// console.log(edad)  // error

// console.log(`Buen día...!!!`)
// console.log(`Buen día...!!!`)
// console.log(`Buen día...!!!`)
// console.log(`Hola...!!!`)
// console.log(`Hola...!!!`)
// console.log(`Hola...!!!`)

const multiplica=function(a,b){
    return a*b
}

console.log(multiplica(3, 3))


// const saludar=(nombre)=>{
//     console.log("hola "+nombre)
// }
const saludar=nombre=>console.log("hola "+nombre)

saludar("Pedro")
saludar("Lorea")
saludar("Matilde")

const sumaFlecha=(a, b)=>a+b

console.log(sumaFlecha(10,8))

const cuadrado=a=>a*a   // return implicito

console.log(cuadrado(9))
console.log(cuadrado(3))