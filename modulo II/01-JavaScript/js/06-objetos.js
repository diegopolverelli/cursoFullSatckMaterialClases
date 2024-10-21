console.log("Objetos")

let persona={
    nombre:"Juan", 
    id: 100, 
    apellido:"Perez",
    edad:34,
    email:"jperez@test.com",
    saludar:()=>console.log("Hola...!!!")
}

console.log(persona)
console.log(persona.email)
persona.saludar()

class Persona{
    constructor(nombre, apellido, email){
        this.nombre=nombre
        this.apellido=apellido
        this.email=email
    }

    saludar(){
        return "hola "+this.nombre
    }
    despedirse(){
        return "hasta luego "+this.nombre
    }
}

let persona01=new Persona("Maria", "Gonzalez", "mgonzalez@test.com")
let persona02=new Persona("Luca", "Perez", "lperez@test.com")
let persona03=new Persona("Carla", "Jimenez", "cjimenez@test.com")

console.log(persona01)
console.log(persona02)
console.log(persona03)

console.log(persona02.saludar())
console.log(persona03.despedirse())
console.log(persona01.despedirse())

console.log(Object.keys(persona01))
console.log(Object.keys(persona))
console.log(Object.values(persona))
console.log(Object.entries(persona))