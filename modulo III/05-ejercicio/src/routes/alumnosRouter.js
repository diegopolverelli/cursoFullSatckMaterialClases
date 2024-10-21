import { Router } from 'express';
import { AlumnosDAO } from '../dao/AlumnosDAO.js';
import { CursosDAO } from '../dao/CursosDAO.js';
import { auth } from '../middleware/auth.js';
export const router=Router()

AlumnosDAO.path="./src/data/Alumnos.json"
CursosDAO.path="./src/data/Cursos.json"

router.get('/',(req,res)=>{
    console.log(req.cookies)

    let alumnos=AlumnosDAO.getAlumnos()
    alumnos.forEach(alumno=>{
        alumno.cursando.forEach(c=>{
            let curso=CursosDAO.getCursoByid(c.idCurso)
            c.descrip=curso.descrip
            c.horas=curso.horas
            c.docente=curso.docente
        })

    })

    res.setHeader('Content-Type','application/json')
    res.status(200).json({alumnos})
})

router.post("/:aid/cargarCurso/:cid", auth, (req, res)=>{
    let {aid, cid}=req.params
    aid=Number(aid)
    cid=Number(cid)
    if(isNaN(cid) || isNaN(aid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id alumno | id curso deben ser numéricos`})
    }

    let alumno=AlumnosDAO.getAlumnoById(aid)
    if(!alumno){
        res.setHeader('Content-Type','application/json');
        return res.status(404).json({error:`No existen alumnos con id ${aid}`})
    }

    let curso=CursosDAO.getCursoByid(cid)
    if(!curso){
        res.setHeader('Content-Type','application/json');
        return res.status(404).json({error:`Curso inexistente con id ${cid}`})
    }

    // validaciones pertinentes...
    let yaInscripto=alumno.cursando.find(c=>c.idCurso===cid)
    if(yaInscripto){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El alumno ${aid} ya está inscripto en el curso ${cid}`})
    }

    // alumno.cursando.push(curso)
    alumno.cursando.push({idCurso:cid})
    AlumnosDAO.modificaAlumno(aid, alumno)

    res.send({message:`curso ${cid} agregado al alumno ${aid}`, alumno})
})

