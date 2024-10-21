console.log("Tipos de datos")

console.log(100, typeof 100)
console.log("Juan", typeof "Juan")
console.log(true, typeof true)
console.log(100n, typeof 100n)
console.log(undefined)
console.log(null)

console.log([1,2,3,4], typeof [1,2,3,4])
console.log({name:"Juan", lastName:"Perez", age:34}, typeof {name:"Juan", lastName:"Perez", age:34})
console.log(new Date(), typeof new Date())

let nombre="Juan"
let nombre2=nombre
nombre2="Maria"
console.log(nombre, nombre2)

let persona01={nombre:"Juan"}
let persona02=persona01
console.log(persona01, persona02)
persona02.nombre="Maria"
console.log(persona01, persona02)



// `Juan`
// "Juan"
// 'Juan'

/*
Esto es un comentario multilinea
ta ta ta...
*/