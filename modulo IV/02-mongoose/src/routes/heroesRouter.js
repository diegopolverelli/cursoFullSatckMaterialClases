import { Router } from 'express';
import { heroesModelo } from '../models/heroesModel.js';
import { isValidObjectId } from 'mongoose';
export const router=Router()

router.get('/',async(req,res)=>{

    try {
        let heroes=await heroesModelo.find()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({heroes})
        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado: ${error.message}`})
    }
})

router.get('/:id',async(req,res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de mongoDB`})
    }

    try {
        let heroe=await heroesModelo.findById(id).lean()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({heroe})
        
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado: ${error.message}`})
    }
})

router.post("/", async(req, res)=>{
    let {name, alias}=req.body
    if(!name || !alias){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name | alias son requeridos`})
    }

    try {
        let existe = await heroesModelo.findOne({name})
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe ${name} en DB`})
        }
    
        let nuevoHeroe=await heroesModelo.create({name, alias})
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({nuevoHeroe});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error inesperado: ${error.message}`})
    }

})

router.put("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de mongoDB`})
    }
    let aModificar=req.body

    // validaciones varias
    try {
        let heroe=await heroesModelo.findOne({_id:id}).lean()
        if(!heroe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen heroes con id ${id}`})
        }
        heroe={
            ...heroe, 
            ...aModificar
        }
        let modificacion=await heroesModelo.updateOne({_id:id}, heroe)
        if(modificacion.modifiedCount>0){
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({payload:`Heroe con id ${id} modificado...!!!`});
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No se pudo modificar el heroe`})
        }
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }


})

router.put("/modificar/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de mongoDB`})
    }
    let aModificar=req.body

    // validaciones varias
    try {
        // let heroe=await heroesModelo.findOne({_id:id}).lean()
        let heroe=await heroesModelo.findById(id).lean()
        if(!heroe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen heroes con id ${id}`})
        }
        heroe={
            ...heroe, 
            ...aModificar
        }
        let heroeModificado=await heroesModelo.findByIdAndUpdate(id, heroe, {returnOriginal:false})
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({heroeModificado});

    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }


})

router.delete("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de mongoDB`})
    }

    try {
        let heroe=await heroesModelo.findOne({_id:id}).lean()
        if(!heroe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen heroes con id ${id}`})
        }

        let eliminacion=await heroesModelo.deleteOne({_id:id})
        if(eliminacion.deletedCount>0){
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({payload:`Heroe con id ${id} eliminado...!!!`});
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No se pudo eliminar el heroe`})
        }
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }


})

router.delete("/eliminar/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id válido de mongoDB`})
    }

    try {
        let heroe=await heroesModelo.findById(id).lean()
        if(!heroe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existen heroes con id ${id}`})
        }

        let heroeEliminado=await heroesModelo.findByIdAndDelete(id, {})
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({heroeEliminado});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`${error.message}`})
    }


})



