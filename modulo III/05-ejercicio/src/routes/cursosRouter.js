import { Router } from 'express';
import { CursosDAO } from '../dao/CursosDAO.js';
export const router=Router()

CursosDAO.path="./src/data/Cursos.json"

router.get('/',(req,res)=>{

    let cursos=CursosDAO.getCursos()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({cursos})
})