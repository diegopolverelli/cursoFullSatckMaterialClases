import { generarID } from "../src/utils.js";
import { expect } from "chai";
import {describe, it} from "mocha"

describe("Prueba método generarID",()=>{

    it("La funcion devuelve un código con un largo mayor a 20 caracteres", ()=>{
        let resultado=generarID()

        expect(resultado.length).to.be.greaterThan(20)
    })

    it("Entre varias ejecuciones del método, los codigos generados son diferentes",()=>{
        let r1=generarID()
        let r2=generarID()
        let r3=generarID()
        let r4=generarID()

        expect(r1).not.to.be.eq(r2)
        expect(r1).not.to.be.eq(r3)
        expect(r1).not.to.be.eq(r4)
        expect(r2).not.to.be.eq(r3)
        expect(r2).not.to.be.eq(r4)
    })
})