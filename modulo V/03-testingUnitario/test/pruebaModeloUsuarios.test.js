import { usersModel } from "../src/models/usersMolde.js";
import mongoose from "mongoose";
import { expect } from "chai";
import {describe, it} from "mocha"

try {
    await mongoose.connect(
        "mongodb+srv://fullstackgrupogestar:fullstackgrupogestar@cluster0.x5lje.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName:"pruebaTesting"
        }
    )
    console.log("DB online")
} catch (error) {
    console.log(`Error al conectar a db`)
}

describe("Pruebas sobre el modelo de usuarios", ()=>{
    // before(async()=>{
    //     await mongoose.connection.collection("users").deleteOne({email:"testing1@tesging1.com"})
    // })

    after(async()=>{
        await mongoose.connection.collection("users").deleteOne({email:"testing1@tesging1.com"})
    })

    it("El método find retorna un arreglo de usuarios registrados", async()=>{
        let resultado=await usersModel.find().lean()

        expect(Array.isArray(resultado)).to.be.true
        if(resultado.length>0){
            expect(resultado[0]).to.have.property("_id")
            expect(resultado[0]).to.have.property("nombre")
        }

    })

    it("El método create da de alta un nuevo usuario en DB", async()=>{
        let resultado=await usersModel.create({
            nombre:"Juan", email:"testing1@tesging1.com", password:"123"
        })

        expect(resultado).to.have.property("_id")
    })
})
