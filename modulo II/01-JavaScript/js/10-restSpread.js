console.log("rest / spread")

// ...

// rest

// const suma=(a, b, c)=>{
//     return a+b+c
// }

// const suma=(a, b, ...otros)=>{
//     console.log(a)
//     console.log(b)
//     console.log(otros)
// }

// console.log(suma(5,5,10))
// console.log(suma(5,5))
// console.log(suma(5,5,10, false, "Juan", [5,3,9], {name:"Micaela"}))

const suma=(...sumandos)=>{
    let resultado=0
    sumandos.forEach(n=>{
        resultado+=n
    })
    return resultado
}

console.log(suma(5, 5))
console.log(suma(5, 5, 10))
console.log(suma(100, 100, 100, 300, 100))

let persona={
    nombre:"Julian",
    apellido:"Alvarez",
    email:"jalvarez@test.com",
    edad:24,
    password:"123",
    domicilio:"Calle 23, 5050"
}

// let nombre=persona.nombre
// let apellido=persona.apellido
// console.log(nombre)
// console.log(apellido)

let {nombre, apellido, domicilio, ...otrosDatos}=persona
console.log(nombre)
console.log(apellido)
console.log(otrosDatos)
console.log(domicilio)

let {nombre:nombre2, email:correo}=persona
console.log(nombre2, correo)

let heroes=["batman", "robin", "superman", "hulk", "spider-man"]

// let h1=heroes[0]
// let h2=heroes[1]
let [h1, h2, h3, h4, h5, h6]=heroes
console.log(h1)
console.log(h2)
console.log(h3)
console.log(h4)
console.log(h5)
console.log(h6)

let [,robin,,hulk]=heroes
console.log(robin)
console.log(hulk)


// spread   ...

let numeros=[1, 2, 3]
let numeros2=[4,5,6]

let todosLosNumeros=[...numeros, ...numeros2, 100, 200, ...heroes]
console.log(todosLosNumeros)

console.log(suma(3,10,2))
console.log(suma(...numeros))   // ... son el op. spread
// console.log(suma(1, 2, 3))   // ... son el op. spread

let datos={
    // nombre:persona.nombre,
    // email: persona.email
    ...persona,
    nombre:"Fernanda",
    email:"fer1990@test.com"
}

console.log(datos)