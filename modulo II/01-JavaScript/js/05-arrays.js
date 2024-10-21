console.log("métodos arrays")
let numeros=[1,2,3,4,5]

numeros.forEach(numero=>{
    console.log(numero)
})
numeros.forEach((numero, index)=>{
    console.log(index, numero)
})

console.log(numeros.map(numero=>numero+10))

let resultado=numeros.reduce((acumulador, valor)=>{
    return acumulador+=valor
}, 1000)
console.log(resultado)

console.log(numeros.every(numero=>numero>4))
console.log(numeros.every(numero=>numero<3))
console.log(numeros.every(numero=>numero<100))

console.log(numeros.some(numero=>numero===3))
console.log(numeros.some(numero=>numero===30))

let personas=[
    {
        id:1, 
        nombre:"Juan"
    },
    {
        id:2, 
        nombre:"Cristina"
    }, 
    {
        id:3,
        nombre: "Julian"
    },
    {
        id:4,
        nombre: "Mariana"
    },
    {
        id:5,
        nombre: "Jimena"
    },
]

personas.forEach(p=>console.log(p))

console.log(personas.find(p=>p.nombre==="Mariano"))
console.log(personas.find(p=>p.nombre==="Cristina"))
console.log(personas.findIndex(p=>p.nombre==="Mariano"))
console.log(personas.findIndex(p=>p.nombre==="Cristina"))
console.log(personas.findIndex(p=>p.nombre==="Julian"))

console.log(personas.length)