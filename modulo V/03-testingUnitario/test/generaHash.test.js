import { generaHash } from "../src/utils.js";
import {expect} from "chai"
import { afterEach, beforeEach, describe, it } from "mocha";

// todo lo necesario para que funcione generaHash

describe("Pruebas funcion generadora de hash", ()=>{

    after(()=>{
        console.log(`Esto se ejectua despues de ejecutar todos los it`)
    })
    afterEach(()=>{
        console.log(`Esto se ejectua despues de cada it`)
    })
    before(()=>{
        console.log(`Esto se ejectua antes de ejecutar todos los it`)
    })
    afterEach(()=>{
        console.log(`Esto se ejectua antes de cada it`)
    })


    it("Si envío un texto plano a la fn, retorna un valor diferente", ()=>{
        let valorEnviado="contraseña"
        let resultado=generaHash(valorEnviado)

        expect(resultado).not.to.be.equal(valorEnviado)
        expect(resultado).not.be.eq(valorEnviado)
    })

    it("La función retorna un código cuyo largo en caracteres es mayor a 20", ()=>{
        let resultado=generaHash("contraseña")
        
        expect(resultado.length).to.be.greaterThan(20)
        // expect(20).to.be.equal(10)
    })
    
    it("El hash generado por la fn utiliza el algoritmo bcrypt", ()=>{
        let resultado=generaHash("contraseña")

        expect(resultado.slice(0,4)).to.be.eq("$2b$")
    })
})