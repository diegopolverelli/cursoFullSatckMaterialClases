import fs from "fs"
export class AlumnosDAO{
    static path=""

    static getAlumnos(){
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    static getAlumnoById(id){
        let alumnos=this.getAlumnos()
        let alumno=alumnos.find(a=>a.id===id)
        return alumno
    }

    static modificaAlumno(id, alumno){
        let alumnos=this.getAlumnos()
        let indiceAlumno=alumnos.findIndex(a=>a.id===id)
        if(indiceAlumno===-1){
            throw new Error(`alumno inexistente con id ${id}`)
        }
        alumnos[indiceAlumno]=alumno
        this.#grabaAlumnos(JSON.stringify(alumnos, null, 5))
    }

    static #grabaAlumnos(alumnos=""){
        fs.writeFileSync(this.path, alumnos)
    }
}